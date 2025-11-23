import Stripe from 'stripe';
import { createShopifyOrder, updateShopifyOrder, getVariantId, getProductId, getFirstVariantId, isShopifyConfigured } from './shopify-helpers.js';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Vercel serverless functions need raw body for webhooks
  const body = typeof req.body === 'string' ? req.body : JSON.stringify(req.body);

  const sig = req.headers['stripe-signature'];
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  let event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, webhookSecret);
  } catch (err) {
    console.error('❌ Webhook signature verification failed:', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Hantera checkout.session.completed event (Stripe Checkout)
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    console.log(`✅ Checkout session completed: ${session.id}`);
    
    try {
      // Check if Shopify is configured
      if (!isShopifyConfigured()) {
        console.log('ℹ️ Shopify not configured - skipping order creation');
        return res.json({ received: true });
      }

      // Check if order already exists in Shopify (from metadata)
      const existingShopifyOrderId = session.metadata?.shopify_order_id;
      
      if (existingShopifyOrderId) {
        // Update existing order to 'paid'
        console.log(`📦 Updating existing Shopify order ${existingShopifyOrderId} to 'paid'`);
        await updateShopifyOrder(parseInt(existingShopifyOrderId), 'paid');
        console.log(`✅ Shopify order ${existingShopifyOrderId} updated to 'paid'`);
      } else {
        // Create new order in Shopify
        console.log('📦 Creating new Shopify order from Stripe session');
        
        // Retrieve line items from Stripe
        const lineItems = await stripe.checkout.sessions.listLineItems(session.id, {
          expand: ['data.price.product'],
        });

        // Get customer details
        let customer = null;
        if (session.customer) {
          customer = await stripe.customers.retrieve(session.customer);
        }

        // Build Shopify line items from Stripe line items
        const shopifyLineItems = [];
        
        for (const item of lineItems.data) {
          // Try to extract package ID from product metadata first, then price metadata, then fallback to name
          const packageId = item.price?.product?.metadata?.package_id ||
                          item.price?.metadata?.package_id ||
                          item.price?.metadata?.packageId ||
                          extractPackageIdFromName(item.description || item.price?.product?.name || '');
          
          if (packageId) {
            try {
              // Get Product ID and then fetch first variant
              const productId = getProductId(parseInt(packageId));
              const variantId = await getFirstVariantId(productId);
              shopifyLineItems.push({
                variant_id: variantId,
                quantity: item.quantity,
              });
              console.log(`✅ Mapped package ${packageId} to Shopify product ${productId}, variant ${variantId}`);
            } catch (error) {
              console.warn(`⚠️ Could not get variant ID for package ${packageId}:`, error.message);
              // Fallback: create line item without variant ID (Shopify will need product name)
              shopifyLineItems.push({
                title: item.description || item.price?.product?.name || 'Lumina Growth Serum',
                quantity: item.quantity,
                price: (item.price.unit_amount / 100).toFixed(2),
              });
            }
          } else {
            // Fallback if we can't determine package ID
            console.warn(`⚠️ Could not determine package ID for item: ${item.description || item.price?.product?.name}`);
            shopifyLineItems.push({
              title: item.description || item.price?.product?.name || 'Lumina Growth Serum',
              quantity: item.quantity,
              price: (item.price.unit_amount / 100).toFixed(2),
            });
          }
        }

        // Build customer object for Shopify
        const shopifyCustomer = customer ? {
          email: customer.email,
          first_name: customer.name?.split(' ')[0] || session.metadata?.customer_name?.split(' ')[0] || '',
          last_name: customer.name?.split(' ').slice(1).join(' ') || session.metadata?.customer_name?.split(' ').slice(1).join(' ') || '',
          phone: customer.phone || session.metadata?.customer_phone || '',
        } : {
          email: session.customer_details?.email || session.metadata?.customer_email || '',
          first_name: session.customer_details?.name?.split(' ')[0] || session.metadata?.customer_name?.split(' ')[0] || '',
          last_name: session.customer_details?.name?.split(' ').slice(1).join(' ') || session.metadata?.customer_name?.split(' ').slice(1).join(' ') || '',
          phone: session.customer_details?.phone || session.metadata?.customer_phone || '',
        };

        // Build shipping address
        const shippingAddress = session.shipping_details?.address ? {
          first_name: session.shipping_details?.name?.split(' ')[0] || shopifyCustomer.first_name,
          last_name: session.shipping_details?.name?.split(' ').slice(1).join(' ') || shopifyCustomer.last_name,
          address1: session.shipping_details.address.line1,
          address2: session.shipping_details.address.line2 || '',
          city: session.shipping_details.address.city,
          province: session.shipping_details.address.state || '',
          zip: session.shipping_details.address.postal_code,
          country: session.shipping_details.address.country,
          phone: session.customer_details?.phone || shopifyCustomer.phone || '',
        } : null;

        // Create order in Shopify
        const shopifyOrder = await createShopifyOrder({
          line_items: shopifyLineItems,
          customer: shopifyCustomer,
          shipping_address: shippingAddress,
          billing_address: shippingAddress, // Use shipping as billing if no separate billing
          financial_status: 'paid',
          total_price: (session.amount_total / 100).toFixed(2),
          currency: session.currency.toUpperCase(),
          note: `Stripe Checkout Session: ${session.id}\nPayment Method: ${session.payment_method_types?.join(', ') || 'unknown'}`,
        });

        console.log(`✅ Shopify order created: #${shopifyOrder.order_number} (ID: ${shopifyOrder.id})`);
      }
    } catch (error) {
      console.error('❌ Error creating/updating Shopify order:', error);
      // Don't fail the webhook - log error but return success
      // This ensures Stripe doesn't retry the webhook
    }
  }

  // Hantera payment_intent.succeeded event (för Payment Element, om det används)
  if (event.type === 'payment_intent.succeeded') {
    const paymentIntent = event.data.object;
    console.log(`✅ Payment succeeded: ${paymentIntent.id}`);
    
    // If there's a Shopify order ID in metadata, update it
    const shopifyOrderId = paymentIntent.metadata?.shopify_order_id;
    if (shopifyOrderId && isShopifyConfigured()) {
      try {
        await updateShopifyOrder(parseInt(shopifyOrderId), 'paid');
        console.log(`✅ Shopify order ${shopifyOrderId} updated to 'paid'`);
      } catch (error) {
        console.error(`❌ Error updating Shopify order ${shopifyOrderId}:`, error);
      }
    }
  }

  res.json({ received: true });
}

/**
 * Helper function to extract package ID from product name
 * Looks for patterns like "KÖP 3 BETALA FÖR 2" (package 2) or "KÖP 3 FÅ 3 EXTRA" (package 3)
 */
function extractPackageIdFromName(name) {
  const lowerName = name.toLowerCase();
  
  if (lowerName.includes('köp 3 få 3 extra') || lowerName.includes('storpack')) {
    return '3';
  }
  if (lowerName.includes('köp 3 betala för 2') || lowerName.includes('behandlingskur')) {
    return '2';
  }
  if (lowerName.includes('startpaket') || lowerName.includes('köp 1')) {
    return '1';
  }
  
  return null;
}


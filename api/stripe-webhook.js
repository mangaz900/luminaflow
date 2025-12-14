import Stripe from 'stripe';
import { createShopifyOrder, updateShopifyOrder, getVariantId, getProductId, getFirstVariantId, isShopifyConfigured } from './shopify-helpers.js';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const sig = req.headers['stripe-signature'];
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  let event;
  let buf;

  try {
    // Read raw body from stream for signature verification
    const buffers = [];
    for await (const chunk of req) {
      buffers.push(chunk);
    }
    buf = Buffer.concat(buffers);

    // Verify signature using the raw buffer
    event = stripe.webhooks.constructEvent(buf, sig, webhookSecret);
  } catch (err) {
    console.error('❌ Webhook signature verification failed:', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Parse JSON from the buffer for logic usage
  // (req.body might be empty if we consumed the stream, so rely on our buffer)
  let parsedBody;
  try {
    parsedBody = JSON.parse(buf.toString());
  } catch (err) {
    console.error('JSON parse failed:', err);
    return res.status(400).send('Invalid JSON');
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

        // Get cart data from metadata (like Supabase version)
        const cartData = session.metadata?.cart_data;

        if (!cartData) {
          console.error('❌ Missing cart_data in session metadata. Cannot create Shopify order.');
          console.error('Metadata:', JSON.stringify(session.metadata, null, 2));
          // Return 200 OK - we don't want to retry if metadata is missing
          return res.json({ received: true });
        }

        // Parse cart data
        let cart;
        try {
          cart = JSON.parse(cartData);
          console.log(`✅ Parsed cart data - ${cart.length} items`);
        } catch (parseError) {
          console.error('❌ Failed to parse cart_data from metadata:', parseError);
          console.error('Cart data string:', cartData);
          // Return 200 OK - we don't want to retry if data is malformed
          return res.json({ received: true });
        }

        // Get customer details
        let customer = null;
        if (session.customer) {
          customer = await stripe.customers.retrieve(session.customer);
        }

        // Build Shopify line items from cart data (using package_id mapping)
        const shopifyLineItems = [];

        for (const item of cart) {
          const packageId = item.id;

          if (packageId) {
            try {
              // Get Product ID and then fetch first variant
              const productId = getProductId(parseInt(packageId));
              const variantId = await getFirstVariantId(productId);

              // Normalize quantity: Stripe sends total bottles, but Shopify expects total packages.
              // Package 1 = 1 bottle (Divisor 1) - Price 399
              // Package 2 = 3 bottles (Divisor 3) - Price 798
              // Package 3 = 6 bottles (Divisor 6) - Price 999

              let packageSize = 1;
              if (parseInt(packageId) === 2) packageSize = 3;
              if (parseInt(packageId) === 3) packageSize = 6;

              const shopifyQuantity = Math.max(1, Math.round(item.quantity / packageSize));

              shopifyLineItems.push({
                variant_id: variantId,
                quantity: shopifyQuantity,
              });
              console.log(`✅ Mapped package ${packageId} to Shopify product ${productId}, variant ${variantId}`);
            } catch (error) {
              console.warn(`⚠️ Could not get variant ID for package ${packageId}:`, error.message);
              // Fallback: create line item without variant ID (Shopify will need product name)
              shopifyLineItems.push({
                title: item.title || item.subtitle || 'Lumina Growth Serum',
                quantity: item.quantity,
                price: (item.price / item.quantity).toFixed(2), // Price per unit
              });
            }
          } else {
            // Fallback if we can't determine package ID
            console.warn(`⚠️ Could not determine package ID for item: ${item.title || item.subtitle}`);
            shopifyLineItems.push({
              title: item.title || item.subtitle || 'Lumina Growth Serum',
              quantity: item.quantity,
              price: (item.price / item.quantity).toFixed(2),
            });
          }
        }

        // Get customer email (like Supabase version)
        let customerEmail = session.customer_details?.email || session.metadata?.customer_email;
        if (!customerEmail && customer && customer.email) {
          customerEmail = customer.email;
        }
        if (!customerEmail && typeof session.customer === 'string') {
          try {
            console.log('📧 Retrieving customer email from Stripe...');
            const customerObj = await stripe.customers.retrieve(session.customer);
            if (customerObj && typeof customerObj !== 'string' && customerObj.email) {
              customerEmail = customerObj.email;
              console.log(`✅ Retrieved customer email: ${customerEmail}`);
            }
          } catch (customerError) {
            console.error('❌ Failed to retrieve customer from Stripe:', customerError);
          }
        }

        // Helper to ensure valid phone or fallback
        const formatPhone = (phone) => {
          // If no phone, generate a random unique dummy to avoid "has already been taken" error in Shopify
          if (!phone) return `070${Math.floor(1000000 + Math.random() * 9000000)}`;
          return phone;
        };

        const customerPhone = formatPhone(session.customer_details?.phone || session.metadata?.customer_phone);

        // Build customer object for Shopify
        const shopifyCustomer = {
          email: customerEmail || '',
          first_name: session.customer_details?.name?.split(' ')[0] || session.metadata?.customer_name?.split(' ')[0] || '',
          last_name: session.customer_details?.name?.split(' ').slice(1).join(' ') || session.metadata?.customer_name?.split(' ').slice(1).join(' ') || '',
          phone: customerPhone,
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
          phone: customerPhone,
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


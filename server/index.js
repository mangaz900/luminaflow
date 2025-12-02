import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import Stripe from 'stripe';
import { createShopifyOrder, updateShopifyOrder, getVariantId } from './shopify.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Initialize Stripe
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.raw({ type: 'application/json' })); // För Stripe webhooks

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Lumina backend is running' });
});

// Hämta Stripe publishable key
app.get('/api/stripe-key', (req, res) => {
  res.json({ 
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY || '' 
  });
});

/**
 * Skapa order i Shopify och Stripe Checkout Session
 */
app.post('/api/create-checkout', async (req, res) => {
  try {
    const { items, customer, total } = req.body;

    if (!items || items.length === 0) {
      return res.status(400).json({ success: false, error: 'Inga produkter i varukorgen' });
    }

    // 1. Skapa order i Shopify först (pending) - valfritt om Shopify är konfigurerat
    let shopifyOrderId = null;
    let shopifyOrderNumber = null;
    
    const isShopifyConfigured = process.env.SHOPIFY_STORE_NAME && 
                                 process.env.SHOPIFY_STORE_NAME !== 'din-butik' &&
                                 process.env.SHOPIFY_ADMIN_API_TOKEN &&
                                 process.env.SHOPIFY_ADMIN_API_TOKEN !== 'shpat_placeholder';

    if (isShopifyConfigured) {
      try {
        const shopifyLineItems = items.map(item => ({
          variant_id: getVariantId(item.id),
          quantity: item.quantity,
          price: (item.price / item.quantity).toString(), // Pris per styck
          title: item.title,
        }));

        const shopifyOrder = await createShopifyOrder({
          line_items: shopifyLineItems,
          customer: {
            first_name: customer.firstName,
            last_name: customer.lastName,
            email: customer.email,
            phone: customer.phone,
          },
          shipping_address: {
            first_name: customer.firstName,
            last_name: customer.lastName,
            address1: customer.address,
            city: customer.city,
            zip: customer.postalCode,
            country: 'SE',
          },
          billing_address: {
            first_name: customer.firstName,
            last_name: customer.lastName,
            address1: customer.address,
            city: customer.city,
            zip: customer.postalCode,
            country: 'SE',
          },
          financial_status: 'pending',
          total_price: total.toString(),
          currency: 'SEK',
          note: `Order från custom checkout. Betalningsmetod: ${customer.paymentMethod}`,
        });

        shopifyOrderId = shopifyOrder.id;
        shopifyOrderNumber = shopifyOrder.order_number;
        console.log(`✅ Shopify order skapad: ${shopifyOrder.order_number} (ID: ${shopifyOrder.id})`);
      } catch (error) {
        console.warn('⚠️ Shopify order kunde inte skapas (fortsätter med Stripe):', error.message);
      }
    } else {
      console.log('ℹ️ Shopify inte konfigurerat - hoppar över Shopify order');
    }

    // 2. Skapa Stripe Checkout Session
    const lineItems = items.map(item => ({
      price_data: {
        currency: 'sek',
        product_data: {
          name: item.title,
          description: item.subtitle,
        },
        unit_amount: Math.round((item.price / item.quantity) * 100), // Pris per styck i öre
      },
      quantity: item.quantity,
    }));

    // Bestäm betalningsmetoder baserat på val
    const paymentMethods = customer.paymentMethod === 'klarna' 
      ? ['klarna'] 
      : ['card'];

    const session = await stripe.checkout.sessions.create({
      payment_method_types: paymentMethods,
      line_items: lineItems,
      mode: 'payment',
      success_url: `${process.env.FRONTEND_URL}/order-success?session_id={CHECKOUT_SESSION_ID}${shopifyOrderId ? `&shopify_order_id=${shopifyOrderId}&order_number=${shopifyOrderNumber}` : ''}`,
      cancel_url: `${process.env.FRONTEND_URL}/checkout-cancelled`,
      customer_email: customer.email,
      metadata: {
        ...(shopifyOrderId && {
          shopify_order_id: shopifyOrderId.toString(),
          shopify_order_number: shopifyOrderNumber.toString(),
        }),
        customer_name: `${customer.firstName} ${customer.lastName}`,
        customer_email: customer.email,
        customer_phone: customer.phone,
      },
      shipping_address_collection: {
        allowed_countries: ['SE'],
      },
      payment_method_options: {
        klarna: {
          preferred_locale: 'sv-SE',
        },
      },
    });

    console.log(`✅ Stripe session skapad: ${session.id}`);

    res.json({
      success: true,
      sessionId: session.id,
      url: session.url,
      ...(shopifyOrderId && {
        shopifyOrderId: shopifyOrderId,
        shopifyOrderNumber: shopifyOrderNumber,
      }),
    });
  } catch (error) {
    console.error('❌ Error creating checkout:', error);
    res.status(500).json({
      success: false,
      error: error.message || 'Kunde inte skapa checkout',
    });
  }
});

/**
 * Skapa PaymentIntent för inline checkout
 */
app.post('/api/create-payment-intent', async (req, res) => {
  try {
    const { items, customer, total, paymentMethod } = req.body;

    if (!items || items.length === 0) {
      return res.status(400).json({ success: false, error: 'Inga produkter i varukorgen' });
    }

    // Skapa PaymentIntent med både kort och Klarna
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(total * 100), // Konvertera till öre
      currency: 'sek',
      payment_method_types: ['card', 'klarna'], // Både kort och Klarna
      metadata: {
        customer_name: `${customer.firstName} ${customer.lastName}`,
        customer_email: customer.email,
        customer_phone: customer.phone,
        items: JSON.stringify(items),
      },
      shipping: {
        name: `${customer.firstName} ${customer.lastName}`,
        phone: customer.phone,
        address: {
          line1: customer.address,
          city: customer.city,
          postal_code: customer.postalCode,
          country: 'SE',
        },
      },
      payment_method_options: {
        klarna: {
          preferred_locale: 'sv-SE',
        },
      },
    });

    res.json({
      success: true,
      clientSecret: paymentIntent.client_secret,
      paymentIntentId: paymentIntent.id,
    });
  } catch (error) {
    console.error('❌ Error creating payment intent:', error);
    res.status(500).json({
      success: false,
      error: error.message || 'Kunde inte skapa betalning',
    });
  }
});

/**
 * Stripe Webhook - hanterar när betalning är klar
 */
app.post('/api/stripe-webhook', async (req, res) => {
  const sig = req.headers['stripe-signature'];
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  let event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, webhookSecret);
  } catch (err) {
    console.error('❌ Webhook signature verification failed:', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Hantera checkout.session.completed event
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    const shopifyOrderId = session.metadata?.shopify_order_id;

    if (shopifyOrderId) {
      try {
        // Uppdatera Shopify order till 'paid'
        await updateShopifyOrder(parseInt(shopifyOrderId), 'paid');
        console.log(`✅ Shopify order ${shopifyOrderId} uppdaterad till 'paid'`);
      } catch (error) {
        console.error(`❌ Error updating Shopify order ${shopifyOrderId}:`, error);
      }
    }
  }

  res.json({ received: true });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('❌ Server error:', err);
  res.status(500).json({
    success: false,
    error: 'Internal server error',
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📦 Shopify Store: ${process.env.SHOPIFY_STORE_NAME}`);
  console.log(`💳 Stripe Mode: ${process.env.STRIPE_SECRET_KEY?.startsWith('sk_live') ? 'LIVE' : 'TEST'}`);
});


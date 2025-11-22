import Stripe from 'stripe';

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
    
    // Här kan du lägga till Shopify order update om det behövs
    // const shopifyOrderId = session.metadata?.shopify_order_id;
    // if (shopifyOrderId) {
    //   await updateShopifyOrder(parseInt(shopifyOrderId), 'paid');
    // }
  }

  // Hantera payment_intent.succeeded event (för Payment Element, om det används)
  if (event.type === 'payment_intent.succeeded') {
    const paymentIntent = event.data.object;
    console.log(`✅ Payment succeeded: ${paymentIntent.id}`);
    
    // Här kan du lägga till Shopify order update om det behövs
    // const shopifyOrderId = paymentIntent.metadata?.shopify_order_id;
    // if (shopifyOrderId) {
    //   await updateShopifyOrder(parseInt(shopifyOrderId), 'paid');
    // }
  }

  res.json({ received: true });
}


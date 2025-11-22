import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '');

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  try {
    const { items, customer, total } = req.body;

    if (!items || items.length === 0) {
      return res.status(400).json({ success: false, error: 'Inga produkter i varukorgen' });
    }

    // Skapa Stripe Checkout Session
    const lineItems = items.map(item => ({
      price_data: {
        currency: 'sek',
        product_data: {
          name: item.title,
          description: item.subtitle,
        },
        unit_amount: Math.round((item.price / item.quantity) * 100),
      },
      quantity: item.quantity,
    }));

    const frontendUrl = process.env.FRONTEND_URL || req.headers.origin || 'https://hairoil-kappa.vercel.app';

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card', 'klarna'], // Både kort och Klarna
      line_items: lineItems,
      mode: 'payment',
      success_url: `${frontendUrl}/order-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${frontendUrl}/`,
      // Stripe kommer att be om e-post och leveransinfo automatiskt
      // Om customer.email finns, förfylls den
      ...(customer.email && { customer_email: customer.email }),
      metadata: {
        ...(customer.firstName && customer.lastName && {
          customer_name: `${customer.firstName} ${customer.lastName}`,
        }),
        ...(customer.email && { customer_email: customer.email }),
        ...(customer.phone && { customer_phone: customer.phone }),
      },
      // Stripe samlar in leveransinfo automatiskt
      shipping_address_collection: {
        allowed_countries: ['SE'],
      },
      // Stripe samlar in e-post automatiskt om den inte finns
      customer_email: customer.email || undefined,
      payment_method_options: {
        klarna: {
          preferred_locale: 'sv-SE',
        },
      },
    });

    res.json({
      success: true,
      sessionId: session.id,
      url: session.url,
    });
  } catch (error) {
    console.error('❌ Error creating checkout:', error);
    res.status(500).json({
      success: false,
      error: error.message || 'Kunde inte skapa checkout',
    });
  }
}


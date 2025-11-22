import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '');

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  try {
    const { items, customer, total } = req.body;

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
}


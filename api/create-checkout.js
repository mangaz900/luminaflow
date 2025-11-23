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
    // Check if Stripe key is configured
    if (!process.env.STRIPE_SECRET_KEY) {
      console.error('❌ STRIPE_SECRET_KEY is not configured');
      return res.status(500).json({
        success: false,
        error: 'Stripe är inte konfigurerat. Kontakta support.',
      });
    }

    const { items, customer, total } = req.body;

    if (!items || items.length === 0) {
      return res.status(400).json({ success: false, error: 'Inga produkter i varukorgen' });
    }

    console.log('📦 Creating checkout session:', {
      itemsCount: items.length,
      total,
      hasEmail: !!customer?.email,
    });

    // Skapa Stripe Checkout Session med metadata för Shopify mapping
    const lineItems = items.map(item => ({
      price_data: {
        currency: 'sek',
        product_data: {
          name: item.title,
          description: item.subtitle,
          metadata: {
            package_id: item.id.toString(),
          },
        },
        unit_amount: Math.round((item.price / item.quantity) * 100),
      },
      quantity: item.quantity,
    }));

    // Get frontend URL from environment or request
    // Priority: FRONTEND_URL > VERCEL_URL > request origin > default
    let frontendUrl = process.env.FRONTEND_URL;
    
    if (!frontendUrl) {
      if (process.env.VERCEL_URL) {
        frontendUrl = `https://${process.env.VERCEL_URL}`;
      } else if (req.headers.origin) {
        frontendUrl = req.headers.origin;
      } else {
        frontendUrl = 'https://hairoil-kappa.vercel.app';
      }
    }
    
    // Ensure URL doesn't have trailing slash for consistency
    frontendUrl = frontendUrl.replace(/\/$/, '');
    
    console.log('🌐 Frontend URL:', frontendUrl);

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card', 'klarna'], // Både kort och Klarna
      line_items: lineItems,
      mode: 'payment',
      success_url: `${frontendUrl}/order-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${frontendUrl}`, // No trailing slash - Stripe will handle it
      // Stripe kommer att be om e-post och leveransinfo automatiskt
      // Om customer.email finns, förfylls den
      ...(customer.email && { customer_email: customer.email }),
      metadata: {
        ...(customer.firstName && customer.lastName && {
          customer_name: `${customer.firstName} ${customer.lastName}`,
        }),
        ...(customer.email && { customer_email: customer.email }),
        ...(customer.phone && { customer_phone: customer.phone }),
        // Add package IDs for Shopify mapping
        package_ids: items.map(item => item.id).join(','),
      },
      // Stripe samlar in leveransinfo automatiskt
      shipping_address_collection: {
        allowed_countries: ['SE'],
      },
      // Klarna kommer automatiskt att vara tillgängligt för Sverige (SE)
      // Stripe detekterar locale baserat på shipping address
    });

    res.json({
      success: true,
      sessionId: session.id,
      url: session.url,
    });
  } catch (error) {
    console.error('❌ Error creating checkout:', error);
    console.error('Error details:', {
      message: error.message,
      type: error.type,
      code: error.code,
      stack: error.stack,
    });
    res.status(500).json({
      success: false,
      error: error.message || 'Kunde inte skapa checkout',
      details: process.env.NODE_ENV === 'development' ? error.stack : undefined,
    });
  }
}


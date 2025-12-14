import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '');

export default async function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { session_id } = req.query;

    if (!session_id) {
        return res.status(400).json({ error: 'Missing session_id' });
    }

    try {
        const session = await stripe.checkout.sessions.retrieve(session_id, {
            expand: ['customer_details']
        });

        // Extract key customer info
        const customerDetails = {
            email: session.customer_details?.email,
            firstName: session.customer_details?.name?.split(' ')[0],
            lastName: session.customer_details?.name?.split(' ').slice(1).join(' '),
            phone: session.customer_details?.phone,
            city: session.customer_details?.address?.city || session.shipping_details?.address?.city,
            state: session.customer_details?.address?.state || session.shipping_details?.address?.state,
            zip: session.customer_details?.address?.postal_code || session.shipping_details?.address?.postal_code,
            country: session.customer_details?.address?.country || session.shipping_details?.address?.country,
        };

        return res.status(200).json({ customer: customerDetails });
    } catch (error) {
        console.error('Error retrieving session:', error);
        return res.status(500).json({ error: 'Failed to retrieve session' });
    }
}

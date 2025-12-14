import Stripe from 'stripe';
import { createShopifyOrder, getVariantId, getProductId, getFirstVariantId, isShopifyConfigured } from './shopify-helpers.js';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '');

export default async function handler(req, res) {
    const { session_id } = req.query;

    if (!session_id) {
        return res.status(400).json({ error: 'Missing session_id query parameter' });
    }

    const logs = [];
    const log = (msg) => logs.push(msg);
    const errorLog = (msg) => logs.push(`ERROR: ${msg}`);

    try {
        log(`Fetching session: ${session_id}`);
        const session = await stripe.checkout.sessions.retrieve(session_id, {
            expand: ['line_items', 'customer', 'customer_details']
        });

        if (!session) {
            throw new Error('Session not found');
        }
        log('Session retrieved from Stripe.');

        if (!isShopifyConfigured()) {
            throw new Error('Shopify not configured');
        }

        // 1. Parse Cart
        const cartData = session.metadata?.cart_data;
        if (!cartData) throw new Error('No cart_data in metadata');

        let cart;
        try {
            cart = JSON.parse(cartData);
        } catch (e) {
            throw new Error('Invalid JSON in cart_data');
        }
        log(`Cart contains ${cart.length} items.`);

        // 2. Map Items
        const shopifyLineItems = [];
        for (const item of cart) {
            try {
                const packageId = item.id;
                const productId = getProductId(parseInt(packageId));
                const variantId = await getFirstVariantId(productId);
                shopifyLineItems.push({
                    variant_id: variantId,
                    quantity: item.quantity
                });
                log(`Mapped item ${packageId} to Variant ${variantId}`);
            } catch (err) {
                errorLog(`Mapping failed for item ${item.id}: ${err.message}`);
                // Fallback
                shopifyLineItems.push({
                    title: item.title,
                    quantity: item.quantity,
                    price: (item.price / item.quantity).toFixed(2),
                });
            }
        }

        // 3. Prepare Customer (with Phone Fix)
        const formatPhone = (phone) => {
            if (!phone) return '0700000000';
            return phone;
        };

        const customerPhone = formatPhone(session.customer_details?.phone || session.metadata?.customer_phone);
        const customerEmail = session.customer_details?.email || session.metadata?.customer_email || session.customer?.email;
        const customerName = session.customer_details?.name || session.metadata?.customer_name || '';

        const shopifyCustomer = {
            email: customerEmail || '',
            first_name: customerName.split(' ')[0] || '',
            last_name: customerName.split(' ').slice(1).join(' ') || '',
            phone: customerPhone,
        };
        log('Customer prepared.');

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

        // 4. Create Order
        log('Sending to Shopify...');
        const order = await createShopifyOrder({
            line_items: shopifyLineItems,
            customer: shopifyCustomer,
            shipping_address: shippingAddress,
            billing_address: shippingAddress,
            financial_status: 'paid',
            total_price: (session.amount_total / 100).toFixed(2),
            currency: session.currency.toUpperCase(),
            note: `Manually Synced Order (Stripe Session: ${session.id})`
        });

        log(`SUCCESS! Created Order #${order.order_number}`);

        return res.json({ success: true, logs, order });

    } catch (error) {
        return res.status(500).json({ success: false, logs, error: error.message });
    }
}

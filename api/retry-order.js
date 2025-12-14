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

        // Check if paid
        if (session.payment_status !== 'paid') {
            const status = session.status || 'unknown';
            return res.json({
                success: false,
                logs,
                error: `This session is '${session.payment_status}' (Status: ${status}). We can only sync PAID orders. This looks like an abandoned cart.`
            });
        }

        log('Session retrieved and verified as PAID.');

        if (!isShopifyConfigured()) {
            throw new Error('Shopify not configured');
        }

        // 1. Parse Cart (Support both metadata and line_items)
        let cart = [];
        const cartData = session.metadata?.cart_data;

        if (cartData) {
            try {
                cart = JSON.parse(cartData);
                log(`Found cached cart_data with ${cart.length} items.`);
            } catch (e) {
                log('Invalid JSON in cart_data, falling back to line_items.');
            }
        }

        if (cart.length === 0 && session.line_items?.data) {
            log('Using Stripe line_items to reconstruct cart...');
            cart = session.line_items.data.map(item => {
                // Try to find package_id in product metadata if expanded, or guess
                const packageId = item.price?.product?.metadata?.package_id ||
                    item.price?.metadata?.package_id ||
                    // Fallback guessing based on amount if no ID found
                    (item.amount_total === 79800 ? 2 : (item.amount_total === 39900 ? 1 : 3));

                return {
                    id: packageId,
                    quantity: item.quantity,
                    title: item.description,
                    price: item.amount_total / 100 // Stripe is in cents
                };
            });
        }

        if (cart.length === 0) {
            throw new Error('Could not determine cart items from metadata or session data.');
        }
        log(`Final processed cart contains ${cart.length} items.`);

        // 2. Map Items
        const shopifyLineItems = [];
        for (const item of cart) {
            try {
                const packageId = item.id;
                const productId = getProductId(parseInt(packageId));
                const variantId = await getFirstVariantId(productId);

                // Normalize quantity
                let packageSize = 1;
                if (parseInt(packageId) === 2) packageSize = 3;
                if (parseInt(packageId) === 3) packageSize = 6;

                const shopifyQuantity = Math.max(1, Math.round(item.quantity / packageSize));

                shopifyLineItems.push({
                    variant_id: variantId,
                    quantity: shopifyQuantity
                });
                log(`Mapped item ${packageId} to Variant ${variantId} (Qty: ${item.quantity} -> ${shopifyQuantity})`);
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
            // If no phone, generate a random unique dummy to avoid "has already been taken" error in Shopify
            if (!phone) return `070${Math.floor(1000000 + Math.random() * 9000000)}`;
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

        // Address fallback logic
        let addressSource = session.shipping_details?.address;
        let nameSource = session.shipping_details?.name;

        if (!addressSource && session.customer_details?.address) {
            log('No shipping_details found, falling back to customer_details address.');
            addressSource = session.customer_details.address;
            nameSource = session.customer_details.name;
        }

        const shippingAddress = addressSource ? {
            first_name: nameSource?.split(' ')[0] || shopifyCustomer.first_name,
            last_name: nameSource?.split(' ').slice(1).join(' ') || shopifyCustomer.last_name,
            address1: addressSource.line1,
            address2: addressSource.line2 || '',
            city: addressSource.city,
            province: addressSource.state || '',
            zip: addressSource.postal_code,
            country: addressSource.country,
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

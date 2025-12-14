import { createShopifyOrder, getVariantId, getProductId, getFirstVariantId, isShopifyConfigured } from './shopify-helpers.js';

export default async function handler(req, res) {
    const logs = [];
    const log = (msg) => logs.push(msg);
    const errorLog = (msg) => logs.push(`ERROR: ${msg}`);

    // Hardcoded session based on user's provided JSON
    const session = {
        id: "cs_live_simulated_debug",
        currency: "sek",
        amount_total: 79800,
        payment_method_types: ["card", "klarna"],
        metadata: {
            cart_data: "[{\"id\":2,\"quantity\":3,\"title\":\"KÖP 3 BETALA FÖR 2\",\"subtitle\":\"Behandlingskur\",\"price\":798,\"originalPrice\":2394}]",
            // Simulating missing customer fields in metadata to test fallback
        },
        customer: null, // As per user JSON
        customer_details: {
            name: "Anja Lindahl",
            email: "anja.e.lindahl@gmail.com",
            phone: null
        },
        shipping_details: {
            name: "Anja Lindahl",
            address: {
                line1: "Våreldsvägen 3A",
                city: "Sturefors",
                postal_code: "589 63",
                country: "SE"
            }
        }
    };

    try {
        log("Starting simulation...");

        if (!isShopifyConfigured()) {
            errorLog("Shopify not configured");
            return res.json({ success: false, logs });
        }
        log("Shopify is configured.");

        // Parse cart logic (from webhook)
        const cartData = session.metadata?.cart_data;
        const cart = JSON.parse(cartData);
        log(`Parsed cart: ${cart.length} items`);

        const shopifyLineItems = [];

        for (const item of cart) {
            const packageId = item.id;
            log(`Processing item ID: ${packageId}`);

            try {
                const productId = getProductId(parseInt(packageId));
                log(`Mapped to Product ID: ${productId}`);

                const variantId = await getFirstVariantId(productId);
                log(`Fetched Variant ID: ${variantId}`);

                shopifyLineItems.push({
                    variant_id: variantId,
                    quantity: item.quantity,
                });
            } catch (err) {
                errorLog(`Item mapping failed: ${err.message}`);
                // Fallback logic
                shopifyLineItems.push({
                    title: item.title,
                    quantity: item.quantity,
                    price: (item.price / item.quantity).toFixed(2),
                });
                log("Added using fallback (no variant ID)");
            }
        }

        const shopifyCustomer = {
            email: session.customer_details.email,
            first_name: session.customer_details.name.split(' ')[0],
            last_name: session.customer_details.name.split(' ').slice(1).join(' '),
            phone: session.customer_details.phone || ''
        };
        log(`Prepared Customer: ${JSON.stringify(shopifyCustomer)}`);

        const shippingAddress = {
            first_name: session.shipping_details.name.split(' ')[0],
            last_name: session.shipping_details.name.split(' ').slice(1).join(' '),
            address1: session.shipping_details.address.line1,
            city: session.shipping_details.address.city,
            zip: session.shipping_details.address.postal_code,
            country: session.shipping_details.address.country
        };

        log("Attempting to create Shopify order...");

        const shopifyOrder = await createShopifyOrder({
            line_items: shopifyLineItems,
            customer: shopifyCustomer,
            shipping_address: shippingAddress,
            billing_address: shippingAddress,
            financial_status: 'paid',
            total_price: (session.amount_total / 100).toFixed(2),
            currency: session.currency.toUpperCase(),
            note: `Simulated Order for Debugging`
        });

        log(`SUCCESS! Order created. ID: ${shopifyOrder.id}, Number: ${shopifyOrder.order_number}`);

        return res.json({ success: true, logs, order: shopifyOrder });

    } catch (err) {
        errorLog(`CRITICAL FAILURE: ${err.message}`);
        if (err instanceof Error && err.stack) {
            log(err.stack);
        }
        return res.status(500).json({ success: false, logs, error: err.message });
    }
}

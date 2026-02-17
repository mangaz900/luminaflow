/**
 * Mollie - Webhook Handler
 * Receives payment status updates from Mollie
 */

import { createMollieClient } from '@mollie/api-client';
import { createShopifyOrder, updateShopifyOrder } from './shopify-helpers.js';

export default async function handler(req, res) {
    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { id: paymentId } = req.body;

        if (!paymentId) {
            return res.status(400).json({ error: 'No payment ID provided' });
        }

        // Initialize Mollie client
        const mollieClient = createMollieClient({
            apiKey: process.env.MOLLIE_API_KEY_TEST || process.env.MOLLIE_API_KEY_LIVE,
        });

        // Get payment details from Mollie
        const payment = await mollieClient.payments.get(paymentId);

        console.log(`Webhook received for payment ${paymentId}, status: ${payment.status}`);

        // Handle payment status
        if (payment.status === 'paid') {
            // Payment successful - create/update Shopify order
            const metadata = payment.metadata;
            const items = JSON.parse(metadata.items || '[]');
            const orderId = metadata.order_id;

            // Prepare order data for Shopify
            const orderData = {
                email: metadata.customer_email || 'noreply@luminahairpro.com',
                note: `Mollie Payment ID: ${paymentId}`,
                line_items: items.map(item => ({
                    variant_id: getShopifyVariantId(item.id),
                    quantity: item.quantity,
                    price: item.price,
                })),
                financial_status: 'paid',
                tags: 'mollie,online-payment',
            };

            try {
                // Create order in Shopify
                const shopifyOrder = await createShopifyOrder(orderData);
                console.log(`Shopify order created: ${shopifyOrder.id}`);
            } catch (shopifyError) {
                console.error('Failed to create Shopify order:', shopifyError);
                // Continue even if Shopify fails - payment is still successful
            }
        }

        // Always return 200 to acknowledge webhook
        return res.status(200).json({ received: true });

    } catch (error) {
        console.error('Error processing Mollie webhook:', error);
        // Still return 200 to prevent Mollie from retrying
        return res.status(200).json({ received: true, error: error.message });
    }
}

// Helper function to map product IDs to Shopify variant IDs
function getShopifyVariantId(productId) {
    const variantMap = {
        1: '57010167480655', // Startpaket
        2: '57010167316815', // Behandlingskur
        3: '57010167152975', // Storpack
    };
    return variantMap[productId] || variantMap[1];
}

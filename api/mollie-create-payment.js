/**
 * Mollie - Create Payment
 * Creates a new payment with Mollie and returns checkout URL
 */

import { createMollieClient } from '@mollie/api-client';

export default async function handler(req, res) {
    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { items, customerInfo } = req.body;

        // Validate required data
        if (!items || items.length === 0) {
            return res.status(400).json({ error: 'No items provided' });
        }

        // Calculate order total
        const orderTotal = items.reduce((total, item) => {
            return total + (item.price * item.quantity);
        }, 0);

        // Initialize Mollie client
        const mollieClient = createMollieClient({
            apiKey: process.env.MOLLIE_API_KEY_TEST || process.env.MOLLIE_API_KEY_LIVE,
        });

        // Generate unique order ID
        const orderId = `LHP-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

        // Prepare payment data
        const baseUrl = 'https://www.luminahairpro.com';
        const paymentData = {
            amount: {
                currency: 'SEK',
                value: orderTotal.toFixed(2),
            },
            description: `Lumina Hair Pro - Order ${orderId}`,
            redirectUrl: `${baseUrl}/payment-success?order_id=${orderId}`,
            webhookUrl: `${baseUrl}/api/mollie-webhook`,
            locale: 'sv_SE',
            metadata: {
                order_id: orderId,
                items: JSON.stringify(items),
                customer_email: customerInfo?.email || '',
                customer_name: customerInfo?.name || '',
            },
        };

        console.log('Creating Mollie payment with data:', {
            amount: paymentData.amount,
            description: paymentData.description,
            orderId: orderId,
        });

        // Create payment
        const payment = await mollieClient.payments.create(paymentData);

        // Return payment details
        return res.status(200).json({
            success: true,
            paymentId: payment.id,
            checkoutUrl: payment.getCheckoutUrl(),
            orderId: orderId,
            amount: orderTotal,
        });

    } catch (error) {
        console.error('Error creating Mollie payment:', error);
        console.error('Error details:', {
            message: error.message,
            stack: error.stack,
            response: error.response?.data,
        });
        return res.status(500).json({
            error: 'Failed to create payment',
            message: error.message,
            details: error.response?.data || 'No additional details',
        });
    }
}

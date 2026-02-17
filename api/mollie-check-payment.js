/**
 * Mollie - Check Payment Status
 * Verifies payment status after redirect
 */

import { createMollieClient } from '@mollie/api-client';

export default async function handler(req, res) {
    // Only allow GET requests
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { payment_id } = req.query;

        if (!payment_id) {
            return res.status(400).json({ error: 'No payment ID provided' });
        }

        // Initialize Mollie client
        const mollieClient = createMollieClient({
            apiKey: process.env.MOLLIE_API_KEY_TEST || process.env.MOLLIE_API_KEY_LIVE,
        });

        // Get payment details
        const payment = await mollieClient.payments.get(payment_id);

        // Return payment status
        return res.status(200).json({
            success: true,
            status: payment.status,
            isPaid: payment.isPaid(),
            amount: payment.amount,
            description: payment.description,
            metadata: payment.metadata,
        });

    } catch (error) {
        console.error('Error checking Mollie payment:', error);
        return res.status(500).json({
            error: 'Failed to check payment',
            message: error.message,
        });
    }
}

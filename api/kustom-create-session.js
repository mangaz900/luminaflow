/**
 * Kustom Checkout - Create Payment Session
 * Creates a new payment authorization session with Kustom
 */

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

        // Prepare Kustom API credentials
        const keyId = process.env.KUSTOM_KEY_ID || 'M00873534-pAuTI';
        const apiKey = process.env.KUSTOM_API_KEY || 'kco_live_api_3Nilgw7SbYq6nemDNg7hHJuV4EC9KNcG';

        // Create Basic Auth header
        // Try format: apiKey as username, empty password (common for some APIs)
        const authString = Buffer.from(`${apiKey}:`).toString('base64');

        // Prepare order data for Kustom
        const kustomOrderData = {
            purchase_country: 'SE',
            purchase_currency: 'SEK',
            locale: 'sv-SE',
            order_amount: Math.round(orderTotal * 100), // Convert to öre (cents)
            order_tax_amount: Math.round(orderTotal * 0.2 * 100), // 20% VAT
            order_lines: items.map(item => ({
                type: 'physical',
                reference: item.id.toString(),
                name: item.name,
                quantity: item.quantity,
                unit_price: Math.round(item.price * 100),
                tax_rate: 2000, // 20% VAT in basis points
                total_amount: Math.round(item.price * item.quantity * 100),
                total_tax_amount: Math.round(item.price * item.quantity * 0.2 * 100),
            })),
            merchant_urls: {
                terms: 'https://www.luminahairpro.com/terms',
                checkout: 'https://www.luminahairpro.com/checkout',
                confirmation: 'https://www.luminahairpro.com/success?order_id={checkout.order.id}',
                push: `${process.env.VERCEL_URL || 'https://www.luminahairpro.com'}/api/kustom-webhook`,
            },
        };

        // Add customer info if provided
        if (customerInfo) {
            kustomOrderData.billing_address = {
                given_name: customerInfo.firstName,
                family_name: customerInfo.lastName,
                email: customerInfo.email,
                phone: customerInfo.phone,
                country: 'SE',
            };
        }

        // Call Kustom API to create checkout session
        // Using Kustom Checkout v3 API
        const kustomApiUrl = process.env.KUSTOM_API_URL || 'https://api.kustom.co';
        const response = await fetch(`${kustomApiUrl}/checkout/v3/orders`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Basic ${authString}`,
            },
            body: JSON.stringify(kustomOrderData),
        });

        if (!response.ok) {
            const errorData = await response.text();
            console.error('Kustom API Error:', errorData);
            return res.status(response.status).json({
                error: 'Failed to create payment session',
                details: errorData
            });
        }

        const sessionData = await response.json();

        // Return session data to frontend
        return res.status(200).json({
            success: true,
            sessionId: sessionData.session_id || sessionData.order_id,
            htmlSnippet: sessionData.html_snippet,
            sessionData: sessionData,
        });

    } catch (error) {
        console.error('Error creating Kustom session:', error);
        return res.status(500).json({
            error: 'Internal server error',
            message: error.message
        });
    }
}

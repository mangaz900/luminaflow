import { isShopifyConfigured, getFirstVariantId } from './shopify-helpers.js';

export default async function handler(req, res) {
    // Only allow GET requests
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const configStatus = {
        SHOPIFY_STORE_NAME: process.env.SHOPIFY_STORE_NAME ? '✅ Configured' : '❌ Missing',
        SHOPIFY_ADMIN_API_TOKEN: process.env.SHOPIFY_ADMIN_API_TOKEN ? '✅ Configured' : '❌ Missing',
        SHOPIFY_PRODUCT_ID_1: process.env.SHOPIFY_PRODUCT_ID_1 ? '✅ Configured' : '❌ Missing',
        STRIPE_WEBHOOK_SECRET: process.env.STRIPE_WEBHOOK_SECRET ? '✅ Configured' : '❌ Missing',
    };

    const results = {
        configuration: configStatus,
        connectionTest: 'Pending...',
        productTest: 'Pending...',
    };

    try {
        // 1. Test Configuration
        if (!isShopifyConfigured()) {
            results.connectionTest = '❌ Failed: Shopify is not fully configured.';
            return res.json(results);
        }

        // 2. Test Connection (by trying to fetch a product)
        const testProductId = process.env.SHOPIFY_PRODUCT_ID_1;
        if (!testProductId) {
            results.productTest = '⚠️ Skipped: No Product ID 1 configured.';
        } else {
            try {
                const variantId = await getFirstVariantId(testProductId);
                results.connectionTest = '✅ Success: Connected to Shopify!';
                results.productTest = `✅ Success: Found variant ID ${variantId} for Product 1.`;
            } catch (err) {
                results.connectionTest = `❌ Failed: Could not connect to Shopify. Error: ${err.message}`;
                results.productTest = '❌ Failed due to connection error.';
            }
        }

    } catch (error) {
        results.connectionTest = `❌ Unexpected Error: ${error.message}`;
    }

    res.json(results);
}

import { isShopifyConfigured } from './shopify-helpers.js';

export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');

    const results = {
        config: {},
        tests: []
    };

    // 1. Check Configuration
    const storeName = process.env.SHOPIFY_STORE_NAME;
    const token = process.env.SHOPIFY_ADMIN_API_TOKEN;

    results.config = {
        storeName: storeName ? `${storeName} (Length: ${storeName.length})` : 'MISSING',
        token: token ? `Present (Starts with: ${token.substring(0, 5)}...)` : 'MISSING',
        isConfigured: isShopifyConfigured()
    };

    if (!isShopifyConfigured()) {
        return res.json({
            success: false,
            message: 'Shopify is not configured correctly in environment variables.',
            details: results
        });
    }

    const baseUrl = `https://${storeName}.myshopify.com/admin/api/2024-01`;
    const headers = {
        'Content-Type': 'application/json',
        'X-Shopify-Access-Token': token
    };

    // 2. Test: Read Shop Info (Basic connectivity)
    try {
        const shopRes = await fetch(`${baseUrl}/shop.json`, { headers });
        const shopData = await shopRes.json();

        if (!shopRes.ok) {
            results.tests.push({
                name: 'Read Shop Info',
                status: 'FAILED',
                error: shopData.errors || shopRes.statusText,
                statusCode: shopRes.status
            });
        } else {
            results.tests.push({
                name: 'Read Shop Info',
                status: 'SUCCESS',
                shop: shopData.shop?.name,
                domain: shopData.shop?.domain
            });
        }
    } catch (err) {
        results.tests.push({ name: 'Read Shop Info', status: 'ERROR', message: err.message });
    }

    // 3. Test: Read Orders (Checks 'read_orders' scope)
    try {
        const ordersRes = await fetch(`${baseUrl}/orders.json?limit=1`, { headers });
        const ordersData = await ordersRes.json();

        if (!ordersRes.ok) {
            results.tests.push({
                name: 'Read Orders Permission',
                status: 'FAILED',
                error: ordersData.errors || ordersRes.statusText,
                statusCode: ordersRes.status,
                hint: ordersRes.status === 403 ? 'Token likely missing "read_orders" scope' : ''
            });
        } else {
            results.tests.push({
                name: 'Read Orders Permission',
                status: 'SUCCESS',
                canRead: true
            });
        }
    } catch (err) {
        results.tests.push({ name: 'Read Orders Permission', status: 'ERROR', message: err.message });
    }

    // 4. Test: Read Products (Checks 'read_products' scope)
    try {
        const productsRes = await fetch(`${baseUrl}/products.json?limit=1`, { headers });
        const productsData = await productsRes.json();

        if (!productsRes.ok) {
            results.tests.push({
                name: 'Read Products Permission',
                status: 'FAILED',
                error: productsData.errors || productsRes.statusText,
                statusCode: productsRes.status,
                hint: productsRes.status === 403 ? 'Token likely missing "read_products" scope' : ''
            });
        } else {
            results.tests.push({
                name: 'Read Products Permission',
                status: 'SUCCESS',
                canRead: true
            });
        }
    } catch (err) {
        results.tests.push({ name: 'Read Products Permission', status: 'ERROR', message: err.message });
    }

    // ... previous code ...

    // 5. Check Product ID Configuration
    const p1 = process.env.SHOPIFY_PRODUCT_ID_1;
    const p2 = process.env.SHOPIFY_PRODUCT_ID_2;
    const p3 = process.env.SHOPIFY_PRODUCT_ID_3;

    results.config.productIds = {
        p1: p1 ? 'Set' : 'MISSING',
        p2: p2 ? 'Set' : 'MISSING',
        p3: p3 ? 'Set' : 'MISSING'
    };

    // 6. Simulation: Try to fetch Variant for Product 2 (since user bought package 2)
    if (p2) {
        try {
            const url = `${baseUrl}/products/${p2}.json`;
            const prodRes = await fetch(url, { headers });
            const prodData = await prodRes.json();

            if (!prodRes.ok) {
                results.tests.push({
                    name: 'Simulate Product 2 Fetch',
                    status: 'FAILED',
                    error: prodData.errors || prodRes.statusText,
                    statusCode: prodRes.status,
                    hint: prodRes.status === 404 ? 'Product ID 2 is incorrect or does not exist in this store' : ''
                });
            } else {
                results.tests.push({
                    name: 'Simulate Product 2 Fetch',
                    status: 'SUCCESS',
                    variantId: prodData.product?.variants?.[0]?.id
                });
            }
        } catch (err) {
            results.tests.push({ name: 'Simulate Product 2 Fetch', status: 'ERROR', message: err.message });
        }
    } else {
        results.tests.push({ name: 'Simulate Product 2 Fetch', status: 'SKIPPED', message: 'SHOPIFY_PRODUCT_ID_2 is missing' });
    }

    res.json(results);
}

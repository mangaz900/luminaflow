import fs from 'fs';
import path from 'path';

// Manual .env parser
function loadEnv() {
    try {
        const envPath = path.resolve(process.cwd(), '.env');
        if (!fs.existsSync(envPath)) {
            console.log('⚠️ No .env file found');
            return;
        }
        const envContent = fs.readFileSync(envPath, 'utf8');
        const keys = [];
        envContent.split('\n').forEach(line => {
            const match = line.match(/^([^=]+)=(.*)$/);
            if (match) {
                const key = match[1].trim();
                let value = match[2].trim();
                if (value.includes('#')) value = value.split('#')[0].trim();
                if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
                    value = value.slice(1, -1);
                }
                process.env[key] = value;
                keys.push(key);
            }
        });
        console.log(`✅ Loaded .env file with keys: ${keys.join(', ')}`);
    } catch (err) {
        console.error('❌ Failed to load .env:', err);
    }
}

async function test() {
    loadEnv();

    // Dynamic import so env vars are set before module evaluation
    try {
        const { isShopifyConfigured, getFirstVariantId } = await import('./api/shopify-helpers.js');

        console.log('--- Testing Shopify Configuration ---');
        if (process.env.SHOPIFY_STORE_NAME) console.log(`Store: ${process.env.SHOPIFY_STORE_NAME}`);
        else console.log('❌ process.env.SHOPIFY_STORE_NAME is missing');

        if (!isShopifyConfigured()) {
            console.error('❌ Shopify is not fully configured in environment variables (isShopifyConfigured check failed).');
            return;
        }
        console.log('✅ Configuration logic passed.');

        console.log('\n--- Testing Product Access ---');
        const pid = process.env.SHOPIFY_PRODUCT_ID_1;
        if (!pid) {
            console.log('⚠️ SHOPIFY_PRODUCT_ID_1 not set, skipping product test.');
        } else {
            console.log(`Attempting to fetch variant for Product ID: ${pid}`);
            const variantId = await getFirstVariantId(pid);
            console.log(`✅ Successfully fetched variant ID: ${variantId}`);
        }
    } catch (err) {
        console.error(`❌ Error: ${err.message}`);
    }
}

test();

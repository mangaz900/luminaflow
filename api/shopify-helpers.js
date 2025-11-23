/**
 * Shopify helper functions for Vercel serverless functions
 */

const SHOPIFY_STORE = process.env.SHOPIFY_STORE_NAME;
const SHOPIFY_ACCESS_TOKEN = process.env.SHOPIFY_ADMIN_API_TOKEN;
const SHOPIFY_API_VERSION = '2024-01';

/**
 * Check if Shopify is configured
 */
export function isShopifyConfigured() {
  return SHOPIFY_STORE && 
         SHOPIFY_STORE !== 'din-butik' &&
         SHOPIFY_ACCESS_TOKEN && 
         SHOPIFY_ACCESS_TOKEN !== 'shpat_placeholder';
}

/**
 * Get Shopify Product ID based on package ID
 */
export function getProductId(packageId) {
  const productMap = {
    1: process.env.SHOPIFY_PRODUCT_ID_1, // Startpaket
    2: process.env.SHOPIFY_PRODUCT_ID_2, // Behandlingskur (KÖP 3 BETALA FÖR 2)
    3: process.env.SHOPIFY_PRODUCT_ID_3, // Storpack (KÖP 3 FÅ 3 EXTRA)
  };
  
  const productId = productMap[packageId];
  
  if (!productId) {
    throw new Error(`No Shopify product ID found for package ${packageId}`);
  }
  
  return productId;
}

/**
 * Get first variant ID for a product (since each product has at least one variant)
 */
export async function getFirstVariantId(productId) {
  if (!isShopifyConfigured()) {
    throw new Error('Shopify is not configured');
  }

  const url = `https://${SHOPIFY_STORE}.myshopify.com/admin/api/${SHOPIFY_API_VERSION}/products/${productId}.json`;
  
  try {
    const response = await fetch(url, {
      headers: {
        'X-Shopify-Access-Token': SHOPIFY_ACCESS_TOKEN,
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to fetch product: ${response.status} - ${errorText}`);
    }

    const data = await response.json();
    const variant = data.product?.variants?.[0];
    
    if (!variant) {
      throw new Error(`No variant found for product ${productId}`);
    }
    
    return variant.id.toString();
  } catch (error) {
    console.error('Error fetching product variant:', error);
    throw error;
  }
}

/**
 * Get Shopify variant ID based on package ID (uses Product ID and fetches first variant)
 */
export async function getVariantId(packageId) {
  const productId = getProductId(packageId);
  return await getFirstVariantId(productId);
}

/**
 * Create an order in Shopify
 */
export async function createShopifyOrder(orderData) {
  if (!isShopifyConfigured()) {
    throw new Error('Shopify is not configured');
  }

  const url = `https://${SHOPIFY_STORE}.myshopify.com/admin/api/${SHOPIFY_API_VERSION}/orders.json`;
  
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Access-Token': SHOPIFY_ACCESS_TOKEN,
      },
      body: JSON.stringify({
        order: {
          line_items: orderData.line_items,
          customer: orderData.customer,
          shipping_address: orderData.shipping_address,
          billing_address: orderData.billing_address || orderData.shipping_address,
          financial_status: orderData.financial_status || 'pending',
          total_price: orderData.total_price,
          currency: orderData.currency || 'SEK',
          note: orderData.note || 'Order från custom checkout',
          tags: 'custom-checkout,stripe',
        },
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Shopify API error: ${response.status} - ${errorText}`);
    }

    const data = await response.json();
    return data.order;
  } catch (error) {
    console.error('Shopify create order error:', error);
    throw error;
  }
}

/**
 * Update a Shopify order (e.g., when payment is complete)
 */
export async function updateShopifyOrder(orderId, financialStatus) {
  if (!isShopifyConfigured()) {
    throw new Error('Shopify is not configured');
  }

  const url = `https://${SHOPIFY_STORE}.myshopify.com/admin/api/${SHOPIFY_API_VERSION}/orders/${orderId}.json`;
  
  try {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Access-Token': SHOPIFY_ACCESS_TOKEN,
      },
      body: JSON.stringify({
        order: {
          id: orderId,
          financial_status: financialStatus,
        },
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Shopify API error: ${response.status} - ${errorText}`);
    }

    const data = await response.json();
    return data.order;
  } catch (error) {
    console.error('Shopify update order error:', error);
    throw error;
  }
}


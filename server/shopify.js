import 'dotenv/config';

const SHOPIFY_STORE = process.env.SHOPIFY_STORE_NAME;
const SHOPIFY_ACCESS_TOKEN = process.env.SHOPIFY_ADMIN_API_TOKEN;
const SHOPIFY_API_VERSION = '2024-01';

/**
 * Skapar en order i Shopify
 */
export async function createShopifyOrder(orderData) {
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
          tags: 'custom-checkout',
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
 * Uppdaterar en Shopify order (t.ex. när betalning är klar)
 */
export async function updateShopifyOrder(orderId, financialStatus) {
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

/**
 * Hämtar Shopify variant ID baserat på paket ID
 */
export function getVariantId(packageId) {
  const variantMap = {
    1: process.env.SHOPIFY_VARIANT_ID_1, // Startpaket
    2: process.env.SHOPIFY_VARIANT_ID_2, // Behandlingskur
    3: process.env.SHOPIFY_VARIANT_ID_3, // Storpack
  };
  
  const variantId = variantMap[packageId];
  
  if (!variantId) {
    throw new Error(`No Shopify variant ID found for package ${packageId}`);
  }
  
  return variantId;
}


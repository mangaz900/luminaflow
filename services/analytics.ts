/**
 * Google Analytics 4 (GA4) Tracking Service
 */

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

const GA4_MEASUREMENT_ID = import.meta.env.VITE_GA4_MEASUREMENT_ID || 'G-QTWPPCYSNM';

/**
 * Initialize GA4
 */
export const initGA4 = () => {
  // Kontrollera att vi är i browser-miljö
  if (typeof window === 'undefined' || !document.head) {
    console.error('❌ Cannot initialize GA4: DOM not ready');
    return;
  }

  // Kontrollera att Measurement ID finns och är korrekt
  if (!GA4_MEASUREMENT_ID || !GA4_MEASUREMENT_ID.startsWith('G-')) {
    console.warn('⚠️ GA4 Measurement ID not configured properly:', GA4_MEASUREMENT_ID);
    return;
  }

  // Kontrollera om GA4 redan är initierad
  if (window.gtag && window.dataLayer) {
    console.log('✅ GA4 already initialized');
    return;
  }

  // Initialize dataLayer and gtag BEFORE loading script (required by Google)
  window.dataLayer = window.dataLayer || [];
  window.gtag = function(...args: any[]) {
    window.dataLayer.push(args);
  };
  window.gtag('js', new Date());

  // Check if script already exists
  const existingScript = document.querySelector(`script[src*="gtag/js?id=${GA4_MEASUREMENT_ID}"]`);
  if (existingScript) {
    // Script already loaded, configure immediately
    window.gtag('config', GA4_MEASUREMENT_ID, {
      page_path: window.location.pathname,
    });
    console.log(`✅ GA4 already loaded, configured with Measurement ID: ${GA4_MEASUREMENT_ID}`);
    return;
  }

  // Load GA4 script
  const script1 = document.createElement('script');
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`;
  script1.onerror = () => {
    console.error('❌ Failed to load GA4 script');
  };
  script1.onload = () => {
    console.log(`✅ GA4 script loaded with ID: ${GA4_MEASUREMENT_ID}`);
    // Config GA4 AFTER script is loaded
    window.gtag('config', GA4_MEASUREMENT_ID, {
      page_path: window.location.pathname,
    });
    console.log(`✅ GA4 initialized with Measurement ID: ${GA4_MEASUREMENT_ID}`);
  };
  document.head.appendChild(script1);
};

/**
 * Track page view
 */
export const trackPageView = (path: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA4_MEASUREMENT_ID, {
      page_path: path,
    });
  }
};

/**
 * Track add to cart event
 */
export const trackAddToCart = (item: {
  id: number;
  name: string;
  category?: string;
  price: number;
  quantity: number;
}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'add_to_cart', {
      currency: 'SEK',
      value: item.price * item.quantity,
      items: [{
        item_id: item.id.toString(),
        item_name: item.name,
        item_category: item.category || 'Hårvård',
        price: item.price,
        quantity: item.quantity,
      }],
    });
  }
};

/**
 * Track view item event
 */
export const trackViewItem = (item: {
  id: number;
  name: string;
  category?: string;
  price: number;
}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'view_item', {
      currency: 'SEK',
      value: item.price,
      items: [{
        item_id: item.id.toString(),
        item_name: item.name,
        item_category: item.category || 'Hårvård',
        price: item.price,
        quantity: 1,
      }],
    });
  }
};

/**
 * Track begin checkout event
 */
export const trackBeginCheckout = (items: Array<{
  id: number;
  name: string;
  category?: string;
  price: number;
  quantity: number;
}>, total: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'begin_checkout', {
      currency: 'SEK',
      value: total,
      items: items.map(item => ({
        item_id: item.id.toString(),
        item_name: item.name,
        item_category: item.category || 'Hårvård',
        price: item.price,
        quantity: item.quantity,
      })),
    });
  }
};

/**
 * Track purchase event
 */
export const trackPurchase = (transaction: {
  transaction_id: string;
  value: number;
  items: Array<{
    id: number;
    name: string;
    category?: string;
    price: number;
    quantity: number;
  }>;
}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'purchase', {
      transaction_id: transaction.transaction_id,
      currency: 'SEK',
      value: transaction.value,
      items: transaction.items.map(item => ({
        item_id: item.id.toString(),
        item_name: item.name,
        item_category: item.category || 'Hårvård',
        price: item.price,
        quantity: item.quantity,
      })),
    });
  }
};

/**
 * Track view item list (for product listings)
 */
export const trackViewItemList = (items: Array<{
  id: number;
  name: string;
  category?: string;
  price: number;
}>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'view_item_list', {
      item_list_name: 'Paket',
      items: items.map(item => ({
        item_id: item.id.toString(),
        item_name: item.name,
        item_category: item.category || 'Hårvård',
        price: item.price,
      })),
    });
  }
};



/**
 * TikTok Pixel Tracking Service
 */

declare global {
  interface Window {
    ttq: any;
    TiktokAnalyticsObject: string;
  }
}

const TIKTOK_PIXEL_ID = 'D4F5C83C77UBVM8PC4CG';

/**
 * Initialize TikTok Pixel
 */
export const initTikTokPixel = () => {
  if (typeof window === 'undefined') return;

  !function (w: any, d: Document, t: string) {
    w.TiktokAnalyticsObject = t;
    var ttq = w[t] = w[t] || [];
    ttq.methods = ["page", "track", "identify", "instances", "debug", "on", "off", "once", "ready", "alias", "group", "enableCookie", "disableCookie", "holdConsent", "revokeConsent", "grantConsent"];
    ttq.setAndDefer = function(t: any, e: string) {
      t[e] = function() {
        t.push([e].concat(Array.prototype.slice.call(arguments, 0)));
      };
    };
    for (var i = 0; i < ttq.methods.length; i++) ttq.setAndDefer(ttq, ttq.methods[i]);
    ttq.instance = function(t: string) {
      for (var e = ttq._i[t] || [], n = 0; n < ttq.methods.length; n++) ttq.setAndDefer(e, ttq.methods[n]);
      return e;
    };
    ttq.load = function(e: string, n?: any) {
      var r = "https://analytics.tiktok.com/i18n/pixel/events.js", o = n && n.partner;
      ttq._i = ttq._i || {};
      ttq._i[e] = [];
      ttq._i[e]._u = r;
      ttq._t = ttq._t || {};
      ttq._t[e] = +new Date();
      ttq._o = ttq._o || {};
      ttq._o[e] = n || {};
      n = document.createElement("script");
      n.type = "text/javascript";
      n.async = true;
      n.src = r + "?sdkid=" + e + "&lib=" + t;
      e = document.getElementsByTagName("script")[0];
      e.parentNode?.insertBefore(n, e);
    };

    ttq.load(TIKTOK_PIXEL_ID);
    ttq.page();
  }(window, document, 'ttq');

  window.ttq = window.ttq || [];
};

/**
 * Track page view
 */
export const trackTikTokPageView = () => {
  if (typeof window !== 'undefined' && window.ttq) {
    window.ttq.page();
  }
};

/**
 * Track ViewContent event
 */
export const trackTikTokViewContent = (content: {
  content_id: string;
  content_name: string;
  value?: number;
  currency?: string;
}) => {
  if (typeof window !== 'undefined' && window.ttq) {
    window.ttq.track('ViewContent', {
      contents: [{
        content_id: content.content_id,
        content_type: 'product',
        content_name: content.content_name,
      }],
      value: content.value || 0,
      currency: content.currency || 'SEK',
    }, {
      event_id: `${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    });
  }
};

/**
 * Track add to cart event
 */
export const trackTikTokAddToCart = (item: {
  id: number;
  name: string;
  price: number;
  quantity: number;
}) => {
  if (typeof window !== 'undefined' && window.ttq) {
    window.ttq.track('AddToCart', {
      contents: [{
        content_id: item.id.toString(),
        content_type: 'product',
        content_name: item.name,
      }],
      value: item.price * item.quantity,
      currency: 'SEK',
    }, {
      event_id: `${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    });
  }
};

/**
 * Track begin checkout event
 */
export const trackTikTokInitiateCheckout = (items: Array<{
  id: number;
  name: string;
  price: number;
  quantity: number;
}>, total: number) => {
  if (typeof window !== 'undefined' && window.ttq) {
    window.ttq.track('InitiateCheckout', {
      contents: items.map(item => ({
        content_id: item.id.toString(),
        content_type: 'product',
        content_name: item.name,
      })),
      value: total,
      currency: 'SEK',
    }, {
      event_id: `${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    });
  }
};

/**
 * Track purchase event
 */
export const trackTikTokPurchase = (transaction: {
  transaction_id: string;
  value: number;
  items: Array<{
    id: number;
    name: string;
    price: number;
    quantity: number;
  }>;
}) => {
  if (typeof window !== 'undefined' && window.ttq) {
    window.ttq.track('Purchase', {
      contents: transaction.items.map(item => ({
        content_id: item.id.toString(),
        content_type: 'product',
        content_name: item.name,
      })),
      value: transaction.value,
      currency: 'SEK',
    }, {
      event_id: transaction.transaction_id,
    });
  }
};


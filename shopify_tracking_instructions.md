# Shopify Tracking Instructions (Robust Hybrid Approach)

To ensure accurate tracking of purchases and checkouts when moving from your main site to Shopify, please follow these steps.

## 1. GTM & GA4 (Additional Scripts)
This handles the "Order Status" (Thank You) page.

1. Go to **Shopify Admin** → **Settings** → **Checkout**.
2. Scroll down to **Order status page** → **Additional scripts**.
3. Paste the following code:

```html
<!-- Google Tag Manager (GTM-W3N8KR5Q) -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-W3N8KR5Q');</script>
<!-- End Google Tag Manager -->

<script>
  window.dataLayer = window.dataLayer || [];
  {% if first_time_accessed %}
    window.dataLayer.push({
      'event': 'purchase',
      'ecommerce': {
        'transaction_id': '{{ order_name | encode_js }}',
        'value': {{ total_price | money_without_currency | remove: "," }},
        'currency': '{{ shop.currency }}',
        'items': [
          {% for line_item in line_items %}
          {
            'item_id': '{{ line_item.product_id }}',
            'item_name': '{{ line_item.title | encode_js }}',
            'price': {{ line_item.final_price | money_without_currency | remove: "," }},
            'quantity': {{ line_item.quantity }}
          }{% unless forloop.last %},{% endunless %}
          {% endfor %}
        ]
      }
    });
  {% endif %}
</script>
```

---

## 2. Facebook Pixel (Custom Pixel)
This ensures events are tracked even if the user blocks cookies or if the cart is accessed via permalink.

1. Go to **Shopify Admin** → **Settings** → **Customer Events**.
2. Click **Add custom pixel**.
3. Name it `Facebook Pixel Hybrid`.
4. Paste the following code (Replace `597403436072604` with your Pixel ID if it changes):

```javascript
// Facebook Pixel Initialization
const PIXEL_ID = '597403436072604';

!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');

fbq('init', PIXEL_ID);

// Subscribe to events
analytics.subscribe("checkout_started", (event) => {
  fbq('track', 'InitiateCheckout', {
    content_ids: event.data.checkout.lineItems.map(item => item.variant.id),
    content_type: 'product',
    value: event.data.checkout.totalPrice.amount,
    currency: event.data.checkout.totalPrice.currencyCode
  });
});

analytics.subscribe("checkout_completed", (event) => {
  fbq('track', 'Purchase', {
    content_ids: event.data.checkout.lineItems.map(item => item.variant.id),
    content_type: 'product',
    value: event.data.checkout.totalPrice.amount,
    currency: event.data.checkout.totalPrice.currencyCode,
    num_items: event.data.checkout.lineItems.length
  });
});
```

---

## 3. Verify Conversion API (CAPI)
Ensure your Vercel Environment Variables include:
- `FACEBOOK_PIXEL_ID`
- `FACEBOOK_ACCESS_TOKEN`

The site is already configured to send `PageView`, `AddToCart`, and `InitiateCheckout` (at the moment they click the checkout button) to CAPI.

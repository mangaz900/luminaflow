# Setup Guide - Stripe & Shopify Integration

## Steg 1: Stripe Setup

### 1.1 Skapa Stripe-konto
1. Gå till https://stripe.com och skapa konto
2. Logga in på Dashboard

### 1.2 Hämta API-nycklar
1. Gå till **Developers** → **API keys**
2. Kopiera:
   - **Publishable key** (behövs inte i backend, men bra att ha)
   - **Secret key** (lägg i `server/.env` som `STRIPE_SECRET_KEY`)

### 1.3 Skapa Webhook
1. Gå till **Developers** → **Webhooks**
2. Klicka **Add endpoint**
3. **Endpoint URL**: `https://din-domän.com/api/stripe-webhook` (eller använd ngrok för localhost)
4. Välj event: `checkout.session.completed`
5. Kopiera **Signing secret** (lägg i `server/.env` som `STRIPE_WEBHOOK_SECRET`)

### 1.4 Testa lokalt med ngrok (valfritt)
```bash
# Installera ngrok
brew install ngrok  # macOS
# eller ladda ner från https://ngrok.com

# Starta tunnel
ngrok http 3001

# Använd ngrok URL i Stripe webhook (t.ex. https://abc123.ngrok.io/api/stripe-webhook)
```

## Steg 2: Shopify Setup

### 2.1 Skapa produkter i Shopify
1. Gå till Shopify Admin → **Products**
2. Skapa 3 produkter (eller 1 produkt med 3 variants):
   - **Startpaket** (1 st)
   - **Behandlingskur** (3 st)
   - **Storpack** (6 st)

### 2.2 Hämta Variant IDs
1. Gå till varje produkt/variant
2. I URL:en ser du variant ID (t.ex. `gid://shopify/ProductVariant/12345678901234`)
3. Kopiera siffrorna (t.ex. `12345678901234`)
4. Lägg i `server/.env`:
   - `SHOPIFY_VARIANT_ID_1` = Startpaket variant ID
   - `SHOPIFY_VARIANT_ID_2` = Behandlingskur variant ID
   - `SHOPIFY_VARIANT_ID_3` = Storpack variant ID

### 2.3 Skapa Shopify App för API-åtkomst
1. Gå till **Settings** → **Apps and sales channels**
2. Klicka **Develop apps** → **Create an app**
3. Ge appen ett namn (t.ex. "Lumina Orders")
4. Klicka **Configure Admin API scopes**
5. Välj scopes:
   - `write_orders`
   - `read_orders`
6. Klicka **Save**
7. Klicka **Install app**
8. Kopiera **Admin API access token**
9. Lägg i `server/.env` som `SHOPIFY_ADMIN_API_TOKEN`

### 2.4 Hämta Store Name
1. I Shopify Admin, titta på URL:en
2. Om URL:en är `din-butik.myshopify.com`, så är store name: `din-butik`
3. Lägg i `server/.env` som `SHOPIFY_STORE_NAME`

## Steg 3: Backend Setup

### 3.1 Installera dependencies
```bash
cd server
npm install
```

### 3.2 Skapa .env fil
```bash
cp .env.example .env
```

### 3.3 Fyll i alla värden i `.env`:
```env
PORT=3001
FRONTEND_URL=http://localhost:5173

STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

SHOPIFY_STORE_NAME=din-butik
SHOPIFY_ADMIN_API_TOKEN=shpat_...

SHOPIFY_VARIANT_ID_1=12345678901234
SHOPIFY_VARIANT_ID_2=12345678901235
SHOPIFY_VARIANT_ID_3=12345678901236
```

### 3.4 Starta backend
```bash
npm run dev
```

## Steg 4: Testa

1. Starta frontend: `npm run dev` (i root)
2. Starta backend: `npm run dev` (i server/)
3. Gå till localhost:5173
4. Lägg till produkt i varukorg
5. Gå till checkout och fyll i formulär
6. Klicka "Betala"
7. Du ska redirectas till Stripe Checkout
8. Använd test-kort: `4242 4242 4242 4242`
9. Efter betalning → order ska synas i Shopify Admin!

## Flöde

1. **Kund fyller i checkout** → Frontend skickar till backend
2. **Backend skapar order i Shopify** → Status: `pending`
3. **Backend skapar Stripe Session** → Redirect till Stripe
4. **Kund betalar i Stripe** → Stripe skickar webhook
5. **Backend uppdaterar Shopify** → Status: `paid`
6. **Agent ser order i Shopify Admin** → Kan skicka till kund!

## Troubleshooting

### Webhook fungerar inte lokalt?
- Använd ngrok för att exponera localhost
- Eller testa i produktion

### Shopify order skapas inte?
- Kontrollera API token har rätt scopes
- Kontrollera variant IDs är korrekta
- Kolla server logs för felmeddelanden

### Stripe redirect fungerar inte?
- Kontrollera `FRONTEND_URL` i `.env`
- Se till att success/cancel URLs är korrekta


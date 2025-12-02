# Shopify Integration Setup

Denna guide förklarar hur du konfigurerar Shopify-integrationen så att alla beställningar automatiskt skapas som ordrar i Shopify.

## Steg 1: Skapa produkter i Shopify

1. Gå till **Shopify Admin** → **Products**
2. Skapa tre separata produkter för dina paket:
   - **Startpaket** (1 st)
   - **Behandlingskur** (KÖP 3 BETALA FÖR 2) - 3 st
   - **Storpack** (KÖP 3 FÅ 3 EXTRA) - 6 st

3. För varje produkt, kopiera **Product ID**:
   - Öppna produkten i Shopify Admin
   - I URL:en ser du Product ID (t.ex. `.../products/10609008443656`)
   - Kopiera Product ID (t.ex. `10609008443656`)
   - **OBS:** Varje produkt har automatiskt en variant, systemet hämtar första varianten automatiskt

## Steg 2: Skapa Shopify App för API-åtkomst

1. Gå till **Shopify Admin** → **Settings** → **Apps and sales channels**
2. Klicka på **Develop apps** → **Create an app**
3. Ge appen ett namn (t.ex. "Custom Checkout Integration")
4. Klicka på **Configure Admin API scopes**
5. Aktivera följande scopes:
   - `write_orders` - För att skapa och uppdatera ordrar
   - `read_orders` - För att läsa ordrar (valfritt)
6. Spara och **Install app**
7. Efter installation, kopiera **Admin API access token** (börjar med `shpat_...`)

## Steg 3: Hämta Store Name

1. I Shopify Admin, titta på URL:en
2. Om URL:en är `din-butik.myshopify.com`, så är store name: `din-butik`
3. Kopiera detta namn

## Steg 4: Lägg till Environment Variables i Vercel

Gå till **Vercel Dashboard** → **Project Settings** → **Environment Variables** och lägg till:

```
SHOPIFY_STORE_NAME=din-butik
SHOPIFY_ADMIN_API_TOKEN=shpat_din_token_här
SHOPIFY_PRODUCT_ID_1=10609008443656  # Startpaket (Product ID från URL)
SHOPIFY_PRODUCT_ID_2=10609009328392  # Behandlingskur (Product ID från URL)
SHOPIFY_PRODUCT_ID_3=10609009950984  # Storpack (Product ID från URL)
```

**Viktigt:**
- Ersätt `din-butik` med ditt riktiga store name
- Ersätt `shpat_din_token_här` med din Admin API access token
- Ersätt Product IDs med dina riktiga Product IDs från produkt-URL:erna
- Systemet hämtar automatiskt första varianten för varje produkt

## Steg 5: Testa Integrationen

1. Gör en testbeställning på din webbplats
2. Efter betalning, gå till **Shopify Admin** → **Orders**
3. Du bör se en ny order med status **Paid**
4. Ordern innehåller:
   - Kundinformation (namn, e-post, telefon)
   - Leveransadress
   - Produkter (mappade till rätt variants)
   - Totalt belopp

## Hur det fungerar

1. **Kund gör beställning** → Stripe Checkout Session skapas
2. **Kund betalar** → Stripe webhook skickas
3. **Webhook mottas** → Systemet skapar order i Shopify
4. **Order syns i Shopify** → Din agent kan hantera ordern

## Felsökning

### Order skapas inte i Shopify?

1. Kontrollera att alla environment variables är korrekt satta i Vercel
2. Kontrollera Vercel logs för felmeddelanden
3. Verifiera att Shopify Admin API token har rätt scopes (`write_orders`)
4. Kontrollera att variant IDs är korrekta

### Order skapas men produkter är fel?

1. Kontrollera att `SHOPIFY_PRODUCT_ID_1`, `SHOPIFY_PRODUCT_ID_2`, `SHOPIFY_PRODUCT_ID_3` matchar dina paket:
   - ID 1 = Startpaket (1 st) - Product ID från produkt-URL
   - ID 2 = Behandlingskur (3 st) - Product ID från produkt-URL
   - ID 3 = Storpack (6 st) - Product ID från produkt-URL
2. Verifiera att Product IDs är korrekta genom att öppna produkterna i Shopify Admin

### Webhook fungerar inte?

1. Kontrollera att `STRIPE_WEBHOOK_SECRET` är korrekt konfigurerad i Vercel
2. Verifiera webhook URL i Stripe Dashboard
3. Kolla Vercel function logs för detaljerade felmeddelanden

## Säkerhet

- **Lägg ALDRIG API tokens i kod** - använd alltid environment variables
- **Använd Admin API tokens** - inte private app tokens (de har begränsad funktionalitet)
- **Begränsa API scopes** - ge endast de scopes som behövs (`write_orders`)


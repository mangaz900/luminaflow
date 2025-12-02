# Lumina Backend Server

Backend-server för Stripe-betalningar och Shopify orderhantering.

## Installation

1. Installera dependencies:
```bash
cd server
npm install
```

2. Skapa `.env` fil (kopiera från `.env.example`):
```bash
cp .env.example .env
```

3. Fyll i dina API-nycklar i `.env` filen.

## Kör servern

### Development:
```bash
npm run dev
```

### Production:
```bash
npm start
```

## API Endpoints

### `POST /api/create-checkout`
Skapar order i Shopify och Stripe Checkout Session.

**Request:**
```json
{
  "items": [
    {
      "id": 1,
      "title": "KÖP 1",
      "subtitle": "Startpaket",
      "quantity": 1,
      "price": 399
    }
  ],
  "customer": {
    "firstName": "Anna",
    "lastName": "Andersson",
    "email": "anna@example.com",
    "phone": "0701234567",
    "address": "Gatan 123",
    "postalCode": "12345",
    "city": "Stockholm",
    "paymentMethod": "stripe"
  },
  "total": 399
}
```

**Response:**
```json
{
  "success": true,
  "sessionId": "cs_test_...",
  "url": "https://checkout.stripe.com/...",
  "shopifyOrderId": 1234567890,
  "shopifyOrderNumber": 1001
}
```

### `POST /api/stripe-webhook`
Webhook endpoint för Stripe events (när betalning är klar).

## Environment Variables

Se `.env.example` för alla variabler som behövs.

## Shopify Setup

1. Skapa produkter i Shopify med variants för varje paket
2. Hämta Variant IDs från Shopify Admin
3. Lägg till i `.env` filen

## Stripe Setup

1. Skapa konto på https://stripe.com
2. Hämta API-nycklar från Dashboard → Developers → API keys
3. Skapa webhook endpoint i Stripe Dashboard
4. Lägg till webhook secret i `.env`


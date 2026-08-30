# Wazzup ordering Worker prototype

This Worker is the server-side boundary for Square Sandbox checkout. It keeps
Square credentials and authoritative menu prices out of the React bundle.

## Local configuration

Copy `.dev.vars.example` to `.dev.vars` and replace every `TODO_...` value with
credentials from the Square Sandbox Developer Console. `.dev.vars` is ignored
by Git.

Set the React application to sandbox mode in a root `.env.local` file:

```text
VITE_ORDERING_MODE=square-sandbox
VITE_ORDER_API_URL=http://localhost:8787
```

Run the frontend and Worker separately:

```powershell
npm.cmd run dev
npx.cmd wrangler dev --config worker/wrangler.toml
```

No Square or Cloudflare package is added to the application. `npx` can run the
Wrangler CLI when sandbox integration is ready to be tested.

## Cloudflare secrets

Before deploying the Worker, configure all four values without committing them:

```powershell
npx.cmd wrangler secret put SQUARE_ACCESS_TOKEN --config worker/wrangler.toml
npx.cmd wrangler secret put SQUARE_LOCATION_ID --config worker/wrangler.toml
npx.cmd wrangler secret put SQUARE_WEBHOOK_SIGNATURE_KEY --config worker/wrangler.toml
npx.cmd wrangler secret put APP_ORIGIN --config worker/wrangler.toml
```

`APP_ORIGIN` must be the frontend origin only, such as
`https://example.com`—not a path. The checkout request supplies the clean
`/order/success` return path and the Worker verifies that it belongs to this
origin.

## Square Sandbox setup TODOs

- Confirm the Sandbox location ID and access token.
- Register the exact deployed `/api/square/webhook` URL in Square's Sandbox
  Developer Console. Square signs that exact URL plus the raw request body.
- Subscribe to the payment and order events required for the final order-state
  workflow.
- Replace the Worker-owned ad hoc menu mapping with Square Catalog variation
  IDs before production.
- Add persistent order state before treating a browser return as confirmation.

The Worker currently acknowledges valid signed webhook events and logs only the
event ID and type. It does not store orders or card data.

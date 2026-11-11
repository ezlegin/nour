# چینی نور — chininour.com

The website of Nour Porcelain (Zanjan). A fully static Next.js site: no
database, no admin panel, no server code. Everything it shows lives in the
repository.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static export into ./out
npm run preview    # serve ./out locally
```

## Editing content

| What | Where |
| --- | --- |
| Products, prices (white / coloured), gold-edge surcharge | `data/showcase.ts` |
| Which 3D model each product uses | `lib/models.ts` |
| The eight glazes | `lib/glazes.ts` |
| 3D models (`.glb`) | `public/models/` |
| Factory photo | `public/factory/` |

Prices in `data/showcase.ts` are placeholders until the real price list is in.

## Contact form

Messages are sent by [Web3Forms](https://web3forms.com) to info@chininour.com.
The access key is read at build time from:

```
NEXT_PUBLIC_WEB3FORMS_KEY=...
```

Set it in `.env` locally and in the Vercel project's Environment Variables.
Without it the form falls back to opening the visitor's email app.

## Deploying (Vercel)

1. Import the GitHub repository in Vercel. The Next.js preset is detected;
   no build settings need changing (`vercel.json` sets caching headers).
2. Add `NEXT_PUBLIC_WEB3FORMS_KEY` under Settings → Environment Variables
   (Production and Preview), then redeploy.
3. Add `chininour.com` and `www.chininour.com` under Settings → Domains and
   point the DNS records Vercel shows at your domain registrar.

Every push to `main` deploys to production.

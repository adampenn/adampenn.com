# AdamPenn.com

Personal website and founder hub for Adam Penn. Built with [Astro](https://astro.build) — outputs pure static HTML.

## Local Development

```bash
npm install
npm run dev
```

Opens at `http://localhost:4321`.

## Build

```bash
npm run build
npm run preview  # preview the production build locally
```

## Deploy to Render

This site is configured for Render as a static site.

### Option 1: Blueprint (recommended)

1. Push this repo to GitHub
2. Go to [Render Dashboard](https://dashboard.render.com)
3. Click **New** → **Blueprint**
4. Connect your GitHub repo — Render reads `render.yaml` automatically
5. Done. It builds and deploys on every push.

### Option 2: Manual

1. Go to Render → **New** → **Static Site**
2. Connect your GitHub repo
3. Set build command: `npm install && npm run build`
4. Set publish directory: `dist`
5. Deploy

## Adding a Quarterly Update

1. Create a new `.astro` file in `src/pages/updates/` (e.g., `q2-2026.astro`)
2. Copy the structure from an existing update file
3. Add the entry to `src/data/updates.ts`
4. Push to GitHub — Render deploys automatically

## Custom Domain

In Render dashboard → your static site → **Settings** → **Custom Domains** → add `adampenn.com`.

Update your DNS:
- Add a CNAME record pointing `adampenn.com` to your Render URL (e.g., `adampenn-com.onrender.com`)

## Analytics (Optional)

To enable Plausible analytics, set the environment variable in Render:

```
PUBLIC_PLAUSIBLE_DOMAIN=adampenn.com
```

## Structure

```
src/
  layouts/Base.astro       — shared HTML shell, meta, fonts
  components/              — Nav, Footer
  pages/                   — all routes (index, about, ventures, updates, contact)
  data/ventures.ts         — venture card data
  data/updates.ts          — update index data
  styles/global.css        — all styles
public/                    — static assets (favicon, headshot, robots.txt)
render.yaml                — Render deployment config
```

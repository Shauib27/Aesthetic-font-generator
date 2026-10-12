# Aesthetic Text Generator — React + Vite

A free aesthetic font generator: type text once, get it in **269 Unicode text styles**, copy and paste anywhere (Instagram, TikTok, Discord, games…). Includes favorites, recent copies, style search, category tabs, a preview-size slider, platform and category landing pages, guides and a symbols collection.

These are Unicode text styles, not downloadable font files.

## Run locally

```bash
npm install
npm run dev      # dev server (client-rendered)
npm run build    # production build → dist/ (every route prerendered to static HTML)
npm run preview  # serve the dist/ build
```

Set the production domain (used for canonicals, Open Graph, sitemap) when building:

```bash
VITE_SITE_URL=https://your-domain.com npm run build
```

The default is `https://aesthetictextgenerator.com`.

## How the build works

1. `vite build` — client bundle.
2. `vite build --ssr src/entry-server.jsx` — server render bundle (temporary `dist-ssr/`).
3. `node scripts/prerender.mjs` — renders every route in `src/routes.js` to `dist/<route>/index.html` with its own `<title>`, meta description, canonical, Open Graph/Twitter tags and JSON-LD, then writes `404.html`, `sitemap.xml` and `robots.txt`.

The browser hydrates the prerendered HTML (`src/main.jsx`).

## Analytics & verification

All IDs live in **one place**: `src/config/site-settings.json`, read by `src/config/settings.js`.

| Setting | Format | Effect |
|---|---|---|
| `gscVerification` | token (or paste the whole meta tag) | Adds `<meta name="google-site-verification">` to every prerendered page |
| `ga4MeasurementId` | `G-XXXXXXXXXX` | Loads GA4 (skipped when a GTM container is set) |
| `clarityProjectId` | e.g. `abcd1234ef` | Loads Microsoft Clarity |
| `gtmContainerId` | `GTM-XXXXXXX` | Loads Google Tag Manager (configure GA4 inside GTM) |
| `requireConsent` | `true`/`false` | Shows a consent banner; nothing loads until “Accept” |
| `contactEmail`, `contactFormEndpoint` | email / HTTPS URL | Contact page details / JSON form endpoint (e.g. Formspree) |

Three ways to set them:
1. Run `npm run dev`, open `/admin/settings/`, fill the form and press **Save settings** (writes the JSON file). Commit and redeploy.
2. Edit `src/config/site-settings.json` by hand.
3. Set build environment variables in Cloudflare: `VITE_GSC_VERIFICATION`, `VITE_GA4_ID`, `VITE_CLARITY_ID`, `VITE_GTM_ID`, `VITE_REQUIRE_CONSENT`, `VITE_CONTACT_EMAIL`, `VITE_CONTACT_FORM_ENDPOINT`.

Invalid values are ignored. Scripts load once per visit, after page load (and after consent). Events (`font_copy`, `font_favorite`, `font_search`, `category_select`, `share_click`) carry only style name, category, platform or result count — **typed text is never sent**, and the generator is masked from Clarity recordings. `/admin/settings/` is noindex and not in the sitemap.

## Deploy

### Netlify
Build command `npm run build`, publish directory `dist`. Netlify serves `dist/404.html` for unknown URLs and redirects `/page` → `/page/`.

### Cloudflare Workers (Workers & Pages → Worker with static assets)
Build command `npm run build`, deploy command `npx wrangler deploy`. `wrangler.jsonc` serves `dist/` as static assets
(`/page` → `/page/`, unknown URLs → `404.html` with a 404 status). Keep that file: without it Cloudflare's build
auto-configures the Vite project and the prerender step breaks. Set `contactFormEndpoint` for a working contact form.

`public/_headers` sets long-term caching for hashed assets on both hosts.

## Project layout

```
src/
  main.jsx               # hydrates the prerendered HTML (BrowserRouter)
  entry-server.jsx       # render(url) for the prerenderer (StaticRouter)
  App.jsx                # routes + layout
  routes.js              # all indexable routes (router, sitemap, prerender)
  copy.jsx               # clipboard + toast context
  styles.css             # design tokens + all styles
  data/
    fontEngine.js        # 269 Unicode font styles (order = favorites/recents IDs; do not reorder)
    fontMeta.js          # style display names + base categories
    styleIndex.js        # derived categories, search aliases, curated lists, compatibility hints
    site.js              # SITE_URL, navigation groups
  content/
    landings.jsx         # category + platform landing page content
    guides.jsx           # guide articles
    linkInfo.js          # internal link card text/previews
    homeSections.jsx     # homepage educational sections
  config/
    site-settings.json   # analytics / verification / contact IDs
    settings.js          # validated settings (file + env overrides)
    validate.js          # formats for each setting
  analytics.js           # consent-aware loader + safe track() events
  components/            # Header, Footer, FontGenerator, ShareBar, Faq, Seo, Blocks, Icons…
  pages/                 # Home, LandingPage, GuidePage, GuidesIndex, Symbols, StaticPages, NotFound, AdminSettings
scripts/prerender.mjs
docs/SEO-STRATEGY.md     # competitor review, gap map, page plan, linking model
```

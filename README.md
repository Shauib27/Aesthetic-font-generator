# Aesthetic Font Generator — Node.js Prototype

Dark neon (purple/violet + cyan) rebuild of the owner's WordPress site
**aesthetictextgenerator.com**. Prototype scope: working generator tool +
ported SEO content on a single homepage.

## Run it

```bash
npm install
node server.js        # serves http://localhost:3000 (PORT env overrides)
```

No build step. Dependencies: `express` only.

## What's inside

- `server.js` — Express static server (+ custom 404 page).
- `public/index.html` — homepage: hero generator + full SEO content
  (what-is, unicode explainers, how-to steps, keyboard app, 13 font
  categories, decorative borders, box/star styles, notes/docs/folders,
  number fonts, gaming guides, platform guides, A–Z table, bio templates,
  FAQ accordion, conclusion). One H1, proper heading hierarchy,
  meta/OG tags, JSON-LD (WebApplication + FAQPage).
- `public/js/fonts.js` — **the real font engine extracted from the owner's
  own live site** (`/wp-content/uploads/2026/07/font-generator-v10.html`),
  **269 styles**. Two bug fixes applied vs the live version:
  13 border styles had `bd(prefix, suffix, fn)` arg-order swapped (rendered
  broken on the live site), and the legacy font table mapped both `G` and
  `H` to the same character (fixed `H` → `ℌ`).
- `public/js/font-meta.js` — display names + categories for all 269 styles.
- `public/js/app.js` — live render, click-to-copy (clipboard API + fallback),
  ⭐ favorites (localStorage), 🕘 recent copies (localStorage), category
  tabs, search, preview-size slider, A–Z table renderer, FAQ accordion.
- `public/css/style.css` — dark aesthetic theme, mobile-first.

## Style counts by category

classic 10 · minimal 10 · cute 11 · gothic 3 · gaming 11 · retro 7 ·
glitch 2 · emoji 80 · frames 71 · effects 64 (+ special tabs: All, Favorites, Recent)

## Deliberately left for the full build

- Multi-page migration (individual category/tool pages, URL-for-URL 301 map
  from the WordPress site, sitemap.xml, robots.txt).
- Canonical tags + GSC/Search Console wiring.
- Text decorator (per-word/per-character styling), Lenny-face tool,
  bio-template builder page.
- Favorites sync beyond localStorage (accounts), share links.
- Analytics, ad slots, performance budget / Core Web Vitals tuning.
- The one broken emoji wrapper in the source data (lone surrogate `\ud83e`
  at style index ~59) renders as `�` — kept faithful to source; replace with a
  real emoji in the full build.

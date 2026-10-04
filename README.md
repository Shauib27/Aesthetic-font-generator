# Aesthetic Font Generator

Built the same way as your Cool Font Maker project (same React + Vite
architecture, same component structure, same combinatorial Unicode engine),
retargeted for the "aesthetic / pastel / cute" niche.

## What's different from Cool Font Maker

- **Branding**: text logotype "aesthetic fonts" instead of an image logo
  (no logo.png/favicon files needed — just a generated SVG favicon).
- **Color palette**: soft pink/lilac (`--primary` / `--secondary` in
  `src/styles/global.css`) instead of indigo/teal.
- **Fonts**: Instrument Serif (headings) + Manrope (body), loaded from
  Google Fonts in `index.html`.
- **14 new decorative wraps** themed for the niche: Bubble Tea, Butterfly,
  Ribbon Bow, Soft Dots, Foam Bubbles, Coquette Bow, Star Eyes, Pastel
  Cloud, Y2K Star, Cottagecore, Soft Petal, Mushroom, Glow Sparkle,
  Crescent Charm — see `src/data/fontStyles.js`.
- **Categories reordered** to put Aesthetic / Cute / Cursive first.
- **New pages**: `/pastel-fonts`, `/cute-fonts`, `/bio-fonts` (instead of
  `/cool-fonts`, `/fancy-fonts`, `/facebook-fonts`); `/instagram-fonts`
  kept since it's still relevant.
- **Full rewrite** of the homepage SEO article, FAQ, and table of contents
  for the aesthetic-font keyword instead of cool-font.
- Everything else — the transform engine (`src/utils/fontTransforms.js`),
  the favorites system, copy-to-clipboard, category filters, load-more
  pagination, random button — is the same proven code from your existing
  site.

## Before you deploy — 2 things to update

1. **Domain**: `src/components/SEO.jsx` and
   `src/pages/PlaceholderPages.jsx` both use a placeholder
   `https://your-domain.com`. Replace it with your real domain once you
   pick one (find/replace across both files).
2. **Logo (optional)**: right now the header/footer show a text
   logotype ("*aesthetic* fonts"). If you'd rather have an image logo
   like Cool Font Maker, drop `logo.png` / `footer-logo.png` into
   `public/` and swap the `<span className="header__logo-mark--text">`
   block in `Header.jsx` (and the matching one in `Footer.jsx`) back to
   an `<img>` tag, same pattern as the original project.

## Run locally

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
```

Creates a `dist/` folder with the finished static site.

## Deploy to Netlify (same as your other projects)

**Option A — drag and drop**
1. Run `npm run build`
2. Go to https://app.netlify.com/drop
3. Drag the `dist/` folder in — it goes live immediately.

**Option B — connect the repo**
1. Push this project to GitHub.
2. In Netlify: "Add new site" → "Import an existing project".
3. Build command: `npm run build`
4. Publish directory: `dist`

## Project structure

```
src/
  components/   Header, Footer, SEO, FontGenerator, FontCard, FontFilters,
                ArticleContent, FAQ, TableOfContents, CopyChip
  data/
    fontStyles.js       style/category metadata + combinatorial builder
  utils/
    fontTransforms.js   Unicode mapping engine (unchanged from original)
    favorites.js        localStorage favorites (unchanged pattern)
  pages/
    Home.jsx            homepage (generator + SEO article)
    PlaceholderPages.jsx  category + legal pages
  styles/
    global.css          all site styling, color tokens at the top
```

## Adding more styles or categories

Add entries to `WRAPPERS`, `ALPHABET_META`, `COMBINING_META`, or the
`SPECIAL_STYLES` / `gamingStyles` / `cuteStyles` / `decorStyles` arrays in
`src/data/fontStyles.js` — the `buildStyles()` function combines them
automatically, the same way it already does for the base set.

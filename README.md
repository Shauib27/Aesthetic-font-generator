# AestheticFonts — React + Vite

A free aesthetic font generator: type text once, get it in **269+ Unicode font styles**, click to copy, paste anywhere (Instagram, TikTok, Discord, Free Fire, PUBG…). Includes ⭐ favorites, 🕘 recent copies, live search, category tabs, and a preview-size slider.

## Run locally

```bash
npm install
npm run dev      # dev server
npm run build    # production build → dist/
npm run preview  # preview the dist/ build
```

## Deploy

Push this repo to GitHub, then connect it:

### Netlify
1. Netlify dashboard → **Add new site → Import an existing project** → connect your GitHub repo.
2. Build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
3. Deploy. The included `public/_redirects` (`/* /index.html 200`) makes all client-side routes (e.g. `/instagram-fonts`) work.

### Cloudflare Pages
1. Cloudflare dashboard → **Workers & Pages → Create → Pages → Connect to Git** → select your repo.
2. Build settings:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
3. Deploy. The same `public/_redirects` file enables SPA routing on Cloudflare Pages too.

## Project layout

```
src/
  main.jsx               # entry
  App.jsx                # router + layout
  copy.jsx               # clipboard + toast context
  styles.css             # light theme (indigo #6366F1 / teal #14B8A6)
  data/
    fontEngine.js        # 269 Unicode font styles (ES module)
    fontMeta.js          # style display names + categories
    article.js           # SEO article HTML (home page)
  components/
    Header.jsx  Footer.jsx  ScrollToTop.jsx  Seo.jsx
    FontGenerator.jsx    # input, live render, copy, favorites, recents, search, tabs, size slider
    Faq.jsx              # accordion + FAQ JSON-LD
    ArticleContent.jsx   # article + copy buttons + A–Z table wiring
  pages/
    Home.jsx             # / — generator + article + FAQ
    ToolPage.jsx         # /cool-fonts /fancy-fonts /instagram-fonts /facebook-fonts
    StaticPages.jsx      # /about /contact /privacy-policy /terms
    NotFound.jsx         # 404
public/
  _redirects             # SPA fallback for Netlify + Cloudflare Pages
```

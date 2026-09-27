# Aesthetic Font Generator (React)

A Unicode text/font generator built with React + Vite — 28 character styles
plus 29 decorative wrap styles (57 total), fully client-side, no backend.

## Run locally

```bash
npm install
npm run dev
```

Opens at http://localhost:5173

## Build for production

```bash
npm run build
```

This creates a `dist/` folder with the finished static site.

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

## Embedding inside WordPress (if you want it on the existing WP site)

Same pattern you're already using for the current tool:
1. Build the project (`npm run build`).
2. Upload the contents of `dist/` to your host (or host on Netlify and use
   that URL).
3. Embed with an iframe, e.g.:
   ```html
   <iframe src="https://your-netlify-url.netlify.app" style="width:100%;border:0;height:1400px;"></iframe>
   ```

## Project structure

```
src/
  data/
    styles_data.js   ← raw Unicode character tables (generated)
    styleDefs.js      ← style metadata + transform functions
  App.jsx             ← main UI
  index.css           ← all styling
  main.jsx            ← React entry point
```

## Adding more styles

Add a new entry to `STYLE_DEFS` (character-mapped fonts) or `WRAP_DEFS`
(prefix/suffix decorative styles) in `src/data/styleDefs.js`.

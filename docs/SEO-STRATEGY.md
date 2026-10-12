# SEO & content strategy

Last reviewed: 2026-10-12. Competitors were checked live on that date; re-check before major changes.

## 1. Competitor review (summary)

| Site | Strengths | Weaknesses we verified |
|---|---|---|
| **aestheticsfont.com** | Long homepage (≈2–2.5k words), platform sections (Discord, WhatsApp, X, LinkedIn), Unicode explanation, bio templates, explicit Copy buttons | Emoji-stuffed H1/title; no search, favorites or category filters (“Load more” only); only Instagram + Facebook have their own pages; no share buttons |
| **fontb.com** | Clean title (“Font Generator — Copy & Paste 300+ Font Styles”), many category hubs (bold, cursive, cute, cursed…), platform sections, Unicode-block explanation, 10-question FAQ, other tools, ES/DE versions | No style search on the generator; generic H1 (“Font Generator”); no share buttons |
| **fontgen.cool** | Category tabs, favorites, recent, preview size | Copy = click the card (no explicit button); no search; no TikTok/Discord coverage; no platform pages; no share buttons |
| **aestheticfont.com** | Many thin per-style pages (cute, bold, round…), saved list, regenerate | No real FAQ, no Unicode/compatibility explanation, copy by (double-)click only, links out to unrelated tools |
| **cute-fonts.com** | Share buttons (FB, X, email, WhatsApp, Telegram), recent list | Thin 2-question FAQ, decorative H1, no favorites/search, no platform pages |

## 2. Gap map — COMPETITOR → GAP → OUR SOLUTION

| Competitor | Gap | Our solution |
|---|---|---|
| All five | No search across styles | Instant search over name, category and aliases (“old english” → gothic, “instagram” → recommended set) |
| fontgen.cool, aestheticfont.com, cute-fonts.com | Copy works only by clicking the text; users must guess | Every card has a labelled **Copy** button that changes to **Copied!**, plus tap-to-copy on the text and a toast |
| All five | No honest per-style compatibility signal | Each style is checked once at load; styles with combining marks or rare characters get a small hint (“May not work in usernames”, “Check on older devices”) |
| aestheticsfont.com, cute-fonts.com, aestheticfont.com | Decorative, emoji-heavy H1s | Plain, intent-matching H1 on every page (“Aesthetic Font Generator — Copy & Paste Aesthetic Fonts”) |
| aestheticsfont.com, fontgen.cool, cute-fonts.com, aestheticfont.com | Platform advice lives inside one long page | Six dedicated platform pages with field-by-field tables (which fields accept fancy text, character limits, change limits) |
| All five | Usernames vs display names rarely explained | Every platform page states that @usernames only accept basic characters and where styled text *does* work |
| fontgen.cool, aestheticfont.com, cute-fonts.com | Little or no Unicode/compatibility education | Guides: Unicode fonts explained (with block table), why fonts show as boxes (support by Unicode version), are fancy fonts safe (privacy, accessibility) |
| aestheticsfont.com (keyboard-app section) | Unverified claims (e.g. an “official” keyboard app) | Honest keyboard-app advice with the iOS “Full Access” privacy warning |
| aestheticsfont.com, fontb.com, fontgen.cool, aestheticfont.com | No share buttons | Lightweight share bar: native share sheet where supported, plain links for Facebook, X, WhatsApp, Telegram, Reddit, Copy link — no third-party scripts |
| All five (observed client-side tools) | AI/answer engines get little structured, direct-answer text | Each page opens with a one-paragraph direct answer, then tables, numbered steps and an FAQ that matches FAQPage JSON-LD |
| aestheticfont.com, cute-fonts.com | Many thin “style” pages | Fewer, deeper pages: each category page has unique explanation (e.g. why ℭℌℑℜℨ look different), tables, examples, FAQ |

What this site already did better before the update: favorites + recent + category tabs + preview size together, 269 styles, an A–Z alphabet section, bio templates, number fonts, Indonesian/French sections.

## 3. Page plan (implemented)

| Tier | URL | Primary intent |
|---|---|---|
| 1 | `/` | aesthetic font / aesthetic font generator / aesthetic fonts copy and paste / aesthetic text |
| 1 | `/fancy-fonts/` | fancy text generator, fancy fonts |
| 1 | `/stylish-text/` | stylish text, stylish name |
| 1 | `/cool-fonts/` | cool fonts, cool text |
| 2 | `/cursive-fonts/` `/cute-fonts/` `/gothic-fonts/` `/bold-fonts/` `/bubble-fonts/` `/small-caps-fonts/` `/glitch-text/` | category generators |
| 3 | `/instagram-fonts/` `/tiktok-fonts/` `/discord-fonts/` `/whatsapp-fonts/` `/facebook-fonts/` `/gaming-fonts/` | platform-specific use |
| 3 | `/symbols/` | aesthetic symbols copy and paste |
| 4 | `/guides/…` (5 guides + index) | informational, long-tail, AEO |

Deliberately **not** created: `/aesthetic-fonts/` and `/fancy-text-generator/` (would cannibalise `/` and `/fancy-fonts/`), and one-page-per-style doorway pages.

## 4. Internal linking model

- **Home →** all category pages (cards with live previews), all platform pages, all guides, symbols.
- **Category/platform pages →** 5 related pages (cards), 2 relevant guides, home via breadcrumb + header/footer.
- **Guides →** generator CTA, contextual links to category/platform pages, 3 related pages, 3 more guides.
- **Homepage article →** contextual links from its sections to the matching category/platform pages and guides.
- **Header** (Font styles / Social media / Guides menus) and **footer** (Font generators, Popular fonts, Social media fonts, Guides, Company & legal).
- Anchor text is descriptive and varied (“cursive font generator”, “Instagram fonts”, “why fonts show as boxes”).

## 5. Technical SEO

- Every route is prerendered at build time (`scripts/prerender.mjs`) with its own title, description, canonical, robots, Open Graph, Twitter card and JSON-LD; the client hydrates the same markup.
- Trailing-slash URLs are canonical; `sitemap.xml` and `robots.txt` are generated from `src/routes.js`.
- `404.html` is prerendered with `noindex` and no canonical; there is no SPA catch-all, so unknown URLs return a real 404.
- Schema: `WebSite` + `WebApplication` + `FAQPage` (home), `BreadcrumbList` + `FAQPage` (landing pages), `Article` + `BreadcrumbList` (+ `FAQPage` where a visible FAQ exists) on guides. FAQ JSON-LD is generated from the same strings that are rendered.
- Set the production domain with `VITE_SITE_URL` (default `https://aesthetictextgenerator.com`).

## 6. Remaining opportunities

1. Verify the domain in Google Search Console and submit `/sitemap.xml`.
2. Add real analytics (privacy-friendly) to learn which styles and pages are used, then reorder “Popular”.
3. Consider additional pages only with real demand data: `/x-twitter-fonts/`, `/youtube-fonts/`, `/roblox-names/` (rules-focused), a Spanish or Indonesian version with `hreflang`.
4. The homepage article is long (≈8k words including examples); consider moving the platform and language sections to their dedicated pages once those pages rank.
5. Earn links: the guides (Unicode blocks table, compatibility by Unicode version) are the most linkable assets.
6. Re-check platform limits every few months; they change.

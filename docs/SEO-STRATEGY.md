# SEO, content & technical audit — Aesthetic Text Generator

Audit date: 2026-10-13. Competitor pages were reviewed live on 2026-10-12. No ranking-tool data (positions, search volumes) was available, so “targets” below are inferred from titles, H1s and headings, and keyword priorities are judgement calls to validate in Google Search Console once the site has impressions.

---

## 1. Site-level verdict

**Before this round:** a strong tool with one very long homepage article (≈5,500 words, 10 platform H2s) that overlapped the new platform pages. The structure was moving from “single tool” toward “topical resource”, but the homepage was competing with its own child pages.

**Now:** a topical resource. The homepage covers the core intent plus education. 20 category/platform pages, 6 guides and a symbols page each own one intent, and the homepage summarises them in tables that link to them instead of competing.

---

## 2. Topical map

```
CORE: Aesthetic fonts / aesthetic font generator  (/)
├── Font categories ........ /cursive-fonts/ /cute-fonts/ /gothic-fonts/ /bold-fonts/ /italic-text/
│                            /bubble-fonts/ /small-caps-fonts/ /glitch-text/
├── Font effects ........... /strikethrough-text/ /upside-down-text/
├── Related generators ..... /fancy-fonts/ /cool-fonts/ /stylish-text/ /symbols/
├── Platform use cases ..... /instagram-fonts/ /tiktok-fonts/ /discord-fonts/ /whatsapp-fonts/
│                            /facebook-fonts/ /twitter-fonts/ /gaming-fonts/
├── How-to guides .......... /guides/how-to-copy-and-paste-fonts/ /guides/aesthetic-bio-ideas/
├── Unicode education ...... /guides/unicode-fonts-explained/
└── Compatibility & safety . /guides/why-fonts-show-as-boxes/ /guides/fancy-text-character-limits/
                             /guides/are-fancy-fonts-safe/
```

Missing clusters (see roadmap): localized versions (Indonesian / Spanish), more platforms (YouTube, Roblox rules), “name ideas” content, and a dedicated vaporwave/wide-text page once demand is confirmed.

## 3. Semantic map (entities and concepts, where each is explained)

| Concept / entity | Where it is covered |
|---|---|
| Unicode, Unicode Consortium, code point (U+1D400) | Home “The Unicode behind aesthetic text”, Unicode guide |
| Unicode blocks: Mathematical Alphanumeric Symbols, Letterlike Symbols, Enclosed Alphanumerics, IPA/Phonetic Extensions, Fullwidth Forms, Combining Diacritical Marks | Home table, Unicode guide, category pages (cursive, gothic, bubble, small caps, strikethrough) |
| Glyph vs character, font fallback, “tofu”, Noto fonts | Unicode guide, boxes guide |
| NFKC compatibility normalization | Unicode guide (“why some apps turn styled text back to normal”) |
| UTF-16 code units, surrogate pairs, weighted counting (X) | Character-limits guide, X page |
| Homoglyphs / look-alike characters, impersonation | Safety guide, cool fonts page |
| Screen readers (accessibility), search/hashtag matching | Home compatibility, safety guide, bold/italic/X pages |
| Usernames vs display names, bios, captions | All platform pages, home compatibility table |
| Instagram, TikTok, Discord (markdown), WhatsApp (formatting codes), Facebook (name policy), X, Free Fire, PUBG Mobile, Roblox, Minecraft, Steam, Xbox | Platform pages |
| Typography terms: blackletter / Fraktur / Old English, script, small caps, superscript/subscript, monospace, double-struck | Category pages |
| Keyboard apps, iOS “Allow Full Access” privacy | Home, safety guide |

## 4. Page intent map (key pages)

| URL | Primary intent / keyword | Secondary | What Google likely expects | Status |
|---|---|---|---|---|
| `/` | aesthetic font generator; aesthetic fonts copy and paste | aesthetic text, fancy text, Unicode fonts | Working tool immediately, many styles, copy buttons, what/how, examples, FAQ | Tool first; content restructured |
| `/fancy-fonts/` | fancy text generator | fancy fonts | Tool + decorative styles + explanation | OK — distinct from home (decorative focus) |
| `/cool-fonts/` | cool fonts / cool text | edgy, gaming-style | Tool + examples | OK |
| `/stylish-text/` | stylish text / stylish name | name formula | Name-building advice | OK |
| `/cursive-fonts/` | cursive font generator | write in cursive online | Script styles, examples, Instagram use | OK |
| `/gothic-fonts/` | gothic / old english font | fraktur, blackletter | Fraktur styles, readability | OK |
| `/bold-fonts/` | bold text generator | bold for Instagram/Facebook | Bold styles, search caveats | OK |
| `/italic-text/` **new** | italic text generator | italics on Instagram | Italic styles, quirks | Created |
| `/strikethrough-text/` **new** | strikethrough text generator | underline text, cross out text | Line styles, uses, native alternatives | Created |
| `/upside-down-text/` **new** | upside down text generator | flip text, backwards text | Flip/reverse styles | Created |
| `/bubble-fonts/` | bubble letters / bubble font | circled letters | Circled/filled/squared styles | OK |
| `/small-caps-fonts/` | small caps generator | tiny text, superscript | Small text styles, missing letters | OK |
| `/glitch-text/` | glitch text / zalgo text | creepy text | Zalgo levels, responsible use | OK |
| `/instagram-fonts/` … `/gaming-fonts/` | “<platform> fonts” | bio / name / limits | Field-by-field rules, limits, how-to | OK |
| `/twitter-fonts/` **new** | twitter fonts / X fonts | bold on X | Fields, weighted counting | Created |
| `/symbols/` | aesthetic symbols copy paste | hearts, stars, dividers, kaomoji | Tap-to-copy symbol grids | OK |
| Guides | informational (“what are…”, “why boxes”, “how to copy”) | — | Direct answer first, steps, tables | 1 new, 3 expanded |

### Cannibalization found and fixed
- **Homepage vs platform pages (fixed):** the homepage article had separate H2s for Instagram, TikTok, Discord, WhatsApp, X, Facebook, LinkedIn, Threads/Reddit, YouTube and Snapchat/Pinterest. These are replaced by one “Where aesthetic fonts work” table that links to each platform page.
- **Homepage vs category pages (fixed):** “Online Font Convert: Types of Text Fonts” and the 13 style-category H3s are replaced by category cards and a “How to choose” table that links to the category pages.
- **Watch list:** `/fancy-fonts/`, `/cool-fonts/` and `/stylish-text/` are differentiated by picks, examples and copy (decorative / edgy / names). Re-check in Search Console; merge if Google rotates them for the same queries.
- **Not created on purpose:** `/aesthetic-fonts/` and `/fancy-text-generator/`, which would duplicate `/` and `/fancy-fonts/`.

## 5. Competitor gap matrix

| Competitor | Does well | Appears to target (from title/H1) | Content strengths | UX strengths | Technical strengths | Weaknesses (verified) | Our opportunity |
|---|---|---|---|---|---|---|---|
| aestheticsfont.com | Long, sectioned homepage | aesthetic font copy and paste | Platform sections, bio templates, Unicode explanation | Explicit Copy buttons | — | Emoji-stuffed title/H1; no search, favorites or filters; only IG/FB pages; “Load more” | Clean intent-matched H1s, search, favorites, dedicated platform pages |
| fontb.com | Category hubs, multi-language, related tools | font generator, copy & paste fonts | Many category sections, 10-Q FAQ, Unicode blocks | Category chips | Clean title | No style search; generic H1 | Search + aliases, compatibility hints, deeper guides |
| fontgen.cool | Tabs, favorites, recent, preview size | font generator, cool/fancy text | Use-case sections | Favorites pinned on top | — | Copy only by clicking text; no TikTok/Discord pages | Explicit Copy/Copied!, platform pages |
| aestheticfont.com | Many per-style pages | aesthetic font, numbers, A–Z | Style variety | Saved list | — | Thin pages, no FAQ/Unicode explanation, external tool links | Fewer, deeper pages with unique explanations |
| cute-fonts.com | Share buttons, recent | cute fonts | Story intro | Share bar | — | 2-question FAQ, decorative H1, no favorites/search | Rich FAQs, accessible share bar with native share |

**Implemented from the gaps:** style search with aliases; explicit Copy buttons; compatibility hints; platform pages with field tables; Unicode, compatibility, character-limit and safety guides; native + link-based sharing; direct-answer blocks on every page; prerendered HTML.

## 6. Content roadmap

### HIGH priority
| Page / topic | Intent | Primary keyword | Secondary topics | URL | Internal links | Why |
|---|---|---|---|---|---|---|
| Name ideas generator content (no new styles) | Commercial / inspirational | aesthetic name ideas | cute names, gamer names | `/guides/aesthetic-name-ideas/` | home, stylish-text, gaming, cute | Large long-tail demand; uses existing engine |
| Vaporwave / wide text | Tool | vaporwave text generator | fullwidth, aesthetic text | `/vaporwave-text/` | home, cool, retro | Real styles exist (Fullwidth, Y2K); clear intent — **validate volume first** |
| Search Console review | — | — | — | — | — | After 4–8 weeks: check queries per page, merge or retarget overlapping pages |

### MEDIUM priority
| Page / topic | Intent | Primary keyword | URL | Why |
|---|---|---|---|---|
| YouTube channel name fonts | Platform | youtube fonts | `/youtube-fonts/` | Unique field rules; moderate demand |
| Roblox display names (rules-focused) | Informational | roblox fancy name | `/guides/roblox-display-names/` | Users try and fail; strong answer opportunity |
| Indonesian version of the homepage | Localized tool | tulisan aesthetic | `/id/` + hreflang | Existing interest (term is in the FAQ) |
| Emoji vs Unicode text guide | Informational | emoji vs fancy text | `/guides/…` | Supports AEO for comparison queries |

### LOW priority
| Page / topic | URL | Why |
|---|---|---|
| Per-style pages (e.g. “Bold Script”) | — | Most would be thin; only create where a style has its own search demand |
| Spanish / French versions | `/es/`, `/fr/` | Only after the Indonesian test |

## 7. Indexation strategy

| Index | Noindex / exclude |
|---|---|
| `/`, all category, effect and platform pages, `/symbols/`, `/guides/` + guides, `/about/`, `/contact/`, `/privacy-policy/`, `/terms/` | `/admin/settings/` (noindex meta + `X-Robots-Tag`, not in sitemap), `404.html` (noindex, no canonical). The site creates no search-result or parameter URLs: the generator’s search and tabs are client state, not URLs. |

## 8. Scores

| Area | Original site | After round 1 | Now | Notes |
|---|---|---|---|---|
| Content | 4 | 7 | 8 | Accurate, example-led; homepage rewritten |
| Search intent | 4 | 7 | 8.5 | One intent per page; cannibalization removed |
| Semantic SEO | 3 | 6.5 | 8 | Unicode/compat concepts now explained where useful |
| Topical authority | 2 | 6.5 | 7.5 | Needs time, links and a few more clusters |
| Technical SEO | 2 | 8.5 | 9 | Prerendered HTML, canonicals, sitemap lastmod, noindex utility routes |
| Internal linking | 3 | 7.5 | 8.5 | Every content page has ≥3 contextual inlinks (About, Contact and legal pages rely on header/footer links) |
| UX | 5 | 8 | 8.5 | Clearer header, faster to the tool |
| Mobile | 5 | 8 | 8.5 | No overflow 320–768px |
| AEO / AI Overviews | 3 | 7 | 8.5 | Direct answers, tables, steps, matching FAQ schema |
| E-E-A-T / trust | 3 | 6 | 7 | Editorial standards, honest disclaimers; no named authors (none were invented) |
| Performance | 6 | 7.5 | 7.5 | ~148 KB gzip JS; route-level splitting recommended |
| **Overall** | **3.6** | **7.2** | **8.1** | Remaining gains come mostly from real-world signals (links, Search Console data) |

## 9. Analytics & verification

Single source of truth: `src/config/settings.js` (reads `src/config/site-settings.json`, overridable by build env vars). See README → “Analytics & verification”.

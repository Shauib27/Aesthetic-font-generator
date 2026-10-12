/* Derived, read-only view of the font engine: category filters, search aliases,
   curated style lists and compatibility hints. The engine itself (fontEngine.js)
   and the style order (which favorites/recents rely on) are not changed here. */
import { FONTS } from './fontEngine.js';
import { FONT_META } from './fontMeta.js';

export const STYLE_COUNT = FONTS.length;

const ALL = FONTS.map((_, i) => i);
const nameOf = (i) => (FONT_META[i] && FONT_META[i].name) || 'Style ' + (i + 1);
const catOf = (i) => (FONT_META[i] && FONT_META[i].cat) || '';

export function styleName(i) {
  return nameOf(i);
}

export function styleOut(i, text) {
  try {
    return FONTS[i].f(text);
  } catch (e) {
    return text;
  }
}

/** Look up style indices by their display names (first match wins). */
export function ids(...names) {
  return names
    .map((n) => FONT_META.findIndex((m) => m && m.name === n))
    .filter((i) => i >= 0);
}

const byName = (re) => ALL.filter((i) => re.test(nameOf(i)));
const byCat = (c) => ALL.filter((i) => catOf(i) === c);
const uniq = (arr) => [...new Set(arr)];

/* ---------- Curated lists (every entry is a real engine style) ---------- */
export const POPULAR = ids(
  'Bold Script', 'Script', 'Bold', 'Gothic', 'Bold Gothic', 'Double-Struck', 'Small Caps',
  'Bold Italic', 'Circled', 'Filled Bubble', 'Fullwidth', 'Monospace', 'Border ꧁꧂ Script',
  'Tibetan border', 'Soft girl', 'Moon border', 'Greek Style', 'Asian Blocks', 'Strikethrough',
  'Upside Down', 'Zalgo', 'Heart Script'
);

export const AESTHETIC = ids(
  'Script', 'Bold Script', 'Fullwidth', 'Small Caps', 'Superscript', 'Soft girl', 'Cottagecore',
  'Moon border', 'Sparkle border', 'Floral border', 'JP heart border', 'Heart Script', 'Flower Script',
  'Y2K style', 'Angel wings', 'Star corner', 'Diamond border', 'Arrow flow', 'Line border',
  'Star Sep', 'Heart Sep', 'Flower Sep', 'Wave Joiner', 'Decorative Lines', 'Sparkle Wrap',
  '✨ ✨ Frame', '🌸 🌸 Frame', '🌙 🌙 Frame', '🦋 🦋 Frame', '✨💖 💖✨ Frame', '🌷💕 💕🌷 Frame',
  'Classic Script', 'Star Border Script'
);

const CURSIVE = uniq([...byName(/script|cursive/i), ...ids('Soft girl', 'Cottagecore', 'Moon border', 'Sparkle border', 'Floral border', 'Angel wings')]);
const BOLD = byName(/bold/i);
const ITALIC = byName(/italic/i);
const GOTHIC = uniq([...byCat('gothic'), ...byName(/gothic/i), ...ids('Tibetan border', 'Symbol border')]);
const BUBBLE = uniq([...byName(/circled|squared|parenthesized|bubble/i)]);
const SMALL = uniq([...byName(/small caps|superscript|subscript/i), ...ids('彡 Star wrap', 'Block border')]);
const GLITCH = uniq([...byCat('glitch'), ...ids('Firework', 'Slash Through', 'Tilde Strike', 'Cross X Both', 'Vertical Tilde', 'Both Side Dots', 'Asterisk Below')]);

/* Tabs shown in the generator. Only categories with real styles are listed. */
export const CATEGORIES = [
  { key: 'all', label: 'All', ids: ALL },
  { key: 'popular', label: 'Popular', ids: POPULAR },
  { key: 'aesthetic', label: 'Aesthetic', ids: AESTHETIC },
  { key: 'cursive', label: 'Cursive', ids: CURSIVE },
  { key: 'bold', label: 'Bold', ids: BOLD },
  { key: 'italic', label: 'Italic', ids: ITALIC },
  { key: 'gothic', label: 'Gothic', ids: GOTHIC },
  { key: 'bubble', label: 'Bubble', ids: BUBBLE },
  { key: 'smallcaps', label: 'Small caps', ids: SMALL },
  { key: 'cute', label: 'Cute', ids: byCat('cute') },
  { key: 'gaming', label: 'Gaming', ids: byCat('gaming') },
  { key: 'glitch', label: 'Glitch', ids: GLITCH },
  { key: 'frames', label: 'Decorative', ids: byCat('frames') },
  { key: 'emoji', label: 'Emoji frames', ids: byCat('emoji') },
  { key: 'effects', label: 'Lines & effects', ids: byCat('effects') },
  { key: 'retro', label: 'Retro', ids: byCat('retro') },
  { key: 'classic', label: 'Classic', ids: byCat('classic') },
  { key: 'minimal', label: 'Minimal', ids: byCat('minimal') },
].filter((c) => c.ids.length > 0);

export const CATEGORY_IDS = Object.fromEntries(CATEGORIES.map((c) => [c.key, c.ids]));

/* ---------- Platform recommendations (used by platform landing pages + search aliases) ---------- */
export const PLATFORM_PICKS = {
  instagram: ids('Bold Script', 'Script', 'Small Caps', 'Bold Sans', 'Italic Sans', 'Soft girl', 'Moon border', 'Heart Script', 'Flower Script', 'Sparkle border', 'Classic Script', 'Star Sep', 'Heart Sep', 'Fullwidth', 'Superscript', 'Cottagecore'),
  tiktok: ids('Bold Script', 'Bold', 'Circled', 'Filled Bubble', 'Fullwidth', 'Bold Gothic', 'Border ꧁꧂ Script', 'Soft girl', 'Y2K style', 'Small Caps', 'Bold Italic Sans', 'Sparkle Wrap', 'Angel wings'),
  discord: ids('Small Caps', 'Bold Sans', 'Monospace', 'Script', 'Bold Gothic', 'Double-Struck', 'Circled', 'Squared', 'Fullwidth', 'Double line', 'Block border', 'Star Border Bold', 'Superscript', 'Zalgo'),
  whatsapp: ids('Bold', 'Italic', 'Bold Script', 'Script', 'Small Caps', 'Monospace', 'Strikethrough', 'Underline', 'Heart Script', 'Flower Script', 'Love Bold', 'Sparkle Wrap', 'Heart Sep', '💖 💖 Frame'),
  facebook: ids('Bold', 'Bold Sans', 'Bold Italic', 'Italic Sans', 'Bold Script', 'Script', 'Double-Struck', 'Small Caps', 'Strikethrough', 'Underline', 'Filled Star Bold', 'Heart Bold', 'Arrow border'),
  gaming: ids('Bold Gothic', 'Gothic', 'Border ꧁꧂ Gothic', 'Tibetan border', 'Crown Gothic', 'Gothic arrow', 'Asian Blocks', 'Katakana Style', 'Greek Style', 'Block Caps', 'Curly Mix', 'Block Banner', 'Arrow Banner', '彡彡 bold wrap', 'Small Caps', 'Filled Bubble', 'Double-Struck'),
};

/* ---------- Search ---------- */
const ALIASES = [
  [CURSIVE, 'cursive script handwriting calligraphy elegant signature'],
  [BOLD, 'bold thick heavy strong'],
  [ITALIC, 'italic slanted'],
  [GOTHIC, 'gothic fraktur blackletter old english medieval dark tattoo'],
  [BUBBLE, 'bubble circle circled round box boxed square'],
  [SMALL, 'small tiny mini caps superscript subscript'],
  [GLITCH, 'glitch zalgo creepy cursed corrupted horror weird'],
  [byCat('cute'), 'cute kawaii soft girly heart'],
  [byCat('gaming'), 'gaming gamer game cool free fire pubg clan'],
  [byCat('frames'), 'decorative border frame fancy symbol symbols'],
  [byCat('emoji'), 'emoji frame cute fancy'],
  [byCat('effects'), 'line strikethrough underline effect separator spaced'],
  [byCat('retro'), 'retro vaporwave wide upside down mirror flip reverse'],
  [AESTHETIC, 'aesthetic soft dreamy coquette'],
  [POPULAR, 'popular best trending'],
  [ids('Fullwidth', 'Y2K style'), 'vaporwave wide aesthetic y2k'],
  [ids('Monospace', 'Classic Monospace'), 'typewriter code mono'],
  [ids('Double-Struck', 'Classic Double-Struck', 'Math border'), 'double struck outline blackboard'],
  [ids('Upside Down', 'Flip Text', 'Reversed'), 'upside down flip mirror backwards'],
  [PLATFORM_PICKS.instagram, 'instagram ig bio'],
  [PLATFORM_PICKS.tiktok, 'tiktok'],
  [PLATFORM_PICKS.discord, 'discord'],
  [PLATFORM_PICKS.whatsapp, 'whatsapp'],
  [PLATFORM_PICKS.facebook, 'facebook fb'],
  [PLATFORM_PICKS.gaming, 'gaming free fire pubg roblox fortnite'],
];

const CAT_LABEL = Object.fromEntries(CATEGORIES.map((c) => [c.key, c.label]));
const SEARCH_TEXT = ALL.map((i) => (nameOf(i) + ' ' + catOf(i) + ' ' + (CAT_LABEL[catOf(i)] || '')).toLowerCase());
ALIASES.forEach(([list, words]) => {
  list.forEach((i) => {
    SEARCH_TEXT[i] += ' ' + words;
  });
});

/** Every whitespace-separated term must appear in the style's name, category or aliases. */
export function matchesQuery(i, q) {
  const terms = q.toLowerCase().split(/\s+/).filter(Boolean);
  const hay = SEARCH_TEXT[i];
  return terms.every((t) => hay.includes(t));
}

/* ---------- Compatibility hints ---------- */
// Combining marks (strikethrough, zalgo, accents) are often stripped or rejected in username fields.
const MARKS = /[̀-ͯ҉᪰-᫿⃐-⃿]/;
function isRare(cp) {
  return (
    (cp >= 0x1400 && cp <= 0x167f) || // Canadian syllabics
    (cp >= 0xa000 && cp <= 0xa4ff) || // Yi, Lisu
    (cp >= 0xa500 && cp <= 0xa63f) || // Vai
    (cp >= 0xa840 && cp <= 0xa87f) || // Phags-pa
    (cp >= 0xa980 && cp <= 0xa9df) || // Javanese
    (cp >= 0x0f00 && cp <= 0x0fff) || // Tibetan
    (cp >= 0x1fa70 && cp <= 0x1faff) // newer emoji (Unicode 12+)
  );
}

/** 'ok' | 'marks' | 'rare' — computed once from a sample render of each style. */
export const COMPAT = ALL.map((i) => {
  const out = styleOut(i, 'Aa1 Zz');
  if (MARKS.test(out)) return 'marks';
  for (const ch of out) {
    if (isRare(ch.codePointAt(0))) return 'rare';
  }
  return 'ok';
});

export const COMPAT_NOTE = {
  marks: 'Uses combining marks. Great in posts and messages, but some username fields remove them.',
  rare: 'Uses less common characters. Preview on your device before saving a username.',
};

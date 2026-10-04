import {
  applyMap,
  wrapText,
  wrapEachChar,
  spacedText,
  wideSpacedText,
  upsideDown,
  vaporwave,
  superscript,
  subscript,
  alternatingCase,
  dotBetween,
  dashBetween,
  zigzag,
  bubbleText,
  squareBrackets,
  curlyBrackets,
  angleBrackets,
  pipeText,
  slashText,
  backslashText,
  createTransform,
  compose,
  COMBINING_TRANSFORMS,
  BASE_ALPHABETS,
} from '../utils/fontTransforms';

const WRAPPERS = [
  { id: 'star', name: 'Star Wrapped', prefix: '★ ', suffix: ' ★', category: 'Decorative' },
  { id: 'double-star', name: 'Double Star', prefix: '✦ ', suffix: ' ✦', category: 'Decorative' },
  { id: 'sparkle', name: 'Sparkle Text', prefix: '✨ ', suffix: ' ✨', category: 'Decorative' },
  { id: 'heart', name: 'Heart Wrapped', prefix: '♥ ', suffix: ' ♥', category: 'Cute' },
  { id: 'double-heart', name: 'Double Heart', prefix: '💕 ', suffix: ' 💕', category: 'Cute' },
  { id: 'cute-heart', name: 'Cute Heart', prefix: '💗 ', suffix: ' 💗', category: 'Cute' },
  { id: 'flower', name: 'Flower Wrapped', prefix: '✿ ', suffix: ' ✿', category: 'Cute' },
  { id: 'blossom', name: 'Blossom Text', prefix: '🌸 ', suffix: ' 🌸', category: 'Cute' },
  { id: 'arrow', name: 'Arrow Text', prefix: '➤ ', suffix: ' ➤', category: 'Decorative' },
  { id: 'double-arrow', name: 'Double Arrow', prefix: '» ', suffix: ' «', category: 'Decorative' },
  { id: 'bracket', name: 'Bracket Text', prefix: '【 ', suffix: ' 】', category: 'Decorative' },
  { id: 'fancy-bracket', name: 'Fancy Bracket', prefix: '『 ', suffix: ' 』', category: 'Decorative' },
  { id: 'wave-bracket', name: 'Wave Bracket', prefix: '≋ ', suffix: ' ≋', category: 'Decorative' },
  { id: 'dot-decorated', name: 'Dot Decorated', prefix: '• ', suffix: ' •', category: 'Decorative' },
  { id: 'diamond', name: 'Diamond Text', prefix: '◆ ', suffix: ' ◆', category: 'Decorative' },
  { id: 'circle-decor', name: 'Circle Decor', prefix: '◯ ', suffix: ' ◯', category: 'Decorative' },
  { id: 'music', name: 'Music Notes', prefix: '♪ ', suffix: ' ♪', category: 'Aesthetic' },
  { id: 'aesthetic-star', name: 'Aesthetic Star', prefix: '⋆ ', suffix: ' ⋆', category: 'Aesthetic' },
  { id: 'moon', name: 'Moon Text', prefix: '☽ ', suffix: ' ☾', category: 'Aesthetic' },
  { id: 'cloud', name: 'Cloud Text', prefix: '☁ ', suffix: ' ☁', category: 'Aesthetic' },
  { id: 'fire', name: 'Fire Text', prefix: '🔥 ', suffix: ' 🔥', category: 'Gaming' },
  { id: 'lightning', name: 'Lightning', prefix: '⚡ ', suffix: ' ⚡', category: 'Gaming' },
  { id: 'sword', name: 'Sword Gaming', prefix: '⚔ ', suffix: ' ⚔', category: 'Gaming' },
  { id: 'skull', name: 'Skull Gaming', prefix: '💀 ', suffix: ' 💀', category: 'Gaming' },
  { id: 'crown', name: 'Crown Text', prefix: '👑 ', suffix: ' 👑', category: 'Gaming' },
  { id: 'trophy', name: 'Trophy Text', prefix: '🏆 ', suffix: ' 🏆', category: 'Gaming' },
  { id: 'controller', name: 'Gaming Controller', prefix: '🎮 ', suffix: ' 🎮', category: 'Gaming' },
  { id: 'rocket', name: 'Rocket Text', prefix: '🚀 ', suffix: ' 🚀', category: 'Gaming' },
  { id: 'cross', name: 'Cross Symbol', prefix: '✞ ', suffix: ' ✞', category: 'Gothic' },
  { id: 'gothic-cross', name: 'Gothic Cross', prefix: '☦ ', suffix: ' ☦', category: 'Gothic' },
  { id: 'rune', name: 'Rune Gothic', prefix: 'ᛟ ', suffix: ' ᛟ', category: 'Gothic' },
  { id: 'dark-moon', name: 'Dark Moon', prefix: '🌑 ', suffix: ' 🌑', category: 'Gothic' },
  { id: 'bat', name: 'Bat Gothic', prefix: '🦇 ', suffix: ' 🦇', category: 'Gothic' },
  { id: 'sparkle-line', name: 'Sparkle Line', prefix: '┊ ', suffix: ' ┊', category: 'Symbols' },
  { id: 'wave-line', name: 'Wave Line', prefix: '〜 ', suffix: ' 〜', category: 'Symbols' },
  { id: 'equal-wave', name: 'Equal Wave', prefix: '≈ ', suffix: ' ≈', category: 'Symbols' },
  { id: 'tilde-wrap', name: 'Tilde Wrap', prefix: '~ ', suffix: ' ~', category: 'Symbols' },
  { id: 'underscore-wrap', name: 'Underscore Wrap', prefix: '_ ', suffix: ' _', category: 'Symbols' },
  { id: 'hash-wrap', name: 'Hash Wrap', prefix: '# ', suffix: ' #', category: 'Symbols' },
  { id: 'at-wrap', name: 'At Wrap', prefix: '@ ', suffix: ' @', category: 'Symbols' },
  { id: 'bubble-tea', name: 'Bubble Tea', prefix: '🧋 ', suffix: ' 🧋', category: 'Aesthetic' },
  { id: 'butterfly', name: 'Butterfly', prefix: '🦋 ', suffix: ' 🦋', category: 'Aesthetic' },
  { id: 'ribbon', name: 'Ribbon Bow', prefix: '🎀 ', suffix: ' 🎀', category: 'Cute' },
  { id: 'soft-dots', name: 'Soft Dots', prefix: '·˚ ༘ ', suffix: ' ༘ ⋆', category: 'Aesthetic' },
  { id: 'foam-bubbles', name: 'Foam Bubbles', prefix: '🫧 ', suffix: ' 🫧', category: 'Aesthetic' },
  { id: 'coquette-bow', name: 'Coquette Bow', prefix: '(｡•ᴗ•｡) ', suffix: ' (｡•ᴗ•｡)', category: 'Cute' },
  { id: 'star-eyes', name: 'Star Eyes', prefix: '☆⌒(≖ᴗ≖) ', suffix: '', category: 'Cute' },
  { id: 'pastel-cloud', name: 'Pastel Cloud', prefix: '｡☁︎ ', suffix: ' ☁︎｡', category: 'Aesthetic' },
  { id: 'y2k-star', name: 'Y2K Star', prefix: '*ੈ✩‧₊˚ ', suffix: ' ˚₊‧✩ੈ*', category: 'Aesthetic' },
  { id: 'cottagecore', name: 'Cottagecore', prefix: '🌾 ', suffix: ' 🌾', category: 'Aesthetic' },
  { id: 'soft-petal', name: 'Soft Petal', prefix: '⋅˚₊‧ ꒰ঌ ', suffix: ' ໒꒱ ‧₊˚⋅', category: 'Aesthetic' },
  { id: 'mushroom', name: 'Mushroom Cute', prefix: '🍄 ', suffix: ' 🍄', category: 'Cute' },
  { id: 'glow-sparkle', name: 'Glow Sparkle', prefix: '✮⋆˙ ', suffix: ' ˙⋆✮', category: 'Aesthetic' },
  { id: 'crescent-charm', name: 'Crescent Charm', prefix: '⋆｡𖦹°‧ ', suffix: ' ‧°𖦹｡⋆', category: 'Aesthetic' },
];

const ALPHABET_META = {
  bold: { name: 'Bold', category: 'Cool', popular: true },
  italic: { name: 'Italic', category: 'Stylish', popular: true },
  boldItalic: { name: 'Bold Italic', category: 'Stylish', popular: true },
  script: { name: 'Script', category: 'Cursive', popular: true },
  boldScript: { name: 'Bold Script', category: 'Cursive', popular: true },
  fraktur: { name: 'Fraktur', category: 'Gothic', popular: true },
  boldFraktur: { name: 'Bold Fraktur', category: 'Gothic', popular: false },
  double: { name: 'Double Struck', category: 'Fancy', popular: true },
  sans: { name: 'Sans Serif', category: 'Cool', popular: false },
  sansBold: { name: 'Sans Serif Bold', category: 'Cool', popular: true },
  sansItalic: { name: 'Sans Serif Italic', category: 'Stylish', popular: false },
  sansBoldItalic: { name: 'Sans Serif Bold Italic', category: 'Stylish', popular: false },
  mono: { name: 'Monospace', category: 'Cool', popular: true },
  fullwidth: { name: 'Fullwidth', category: 'Aesthetic', popular: true },
  circled: { name: 'Circled', category: 'Symbols', popular: true },
  squared: { name: 'Squared', category: 'Symbols', popular: true },
  parenthesized: { name: 'Parenthesized', category: 'Symbols', popular: false },
  negativeCircled: { name: 'Negative Circled', category: 'Symbols', popular: false },
  smallCaps: { name: 'Small Caps', category: 'Stylish', popular: true },
};

const COMBINING_META = {
  underline: { name: 'Underline', category: 'Decorative', popular: true },
  doubleUnderline: { name: 'Double Underline', category: 'Decorative', popular: false },
  strikethrough: { name: 'Strikethrough', category: 'Decorative', popular: true },
  overline: { name: 'Overline', category: 'Decorative', popular: false },
  slashThrough: { name: 'Slash Through', category: 'Decorative', popular: false },
  dotAbove: { name: 'Dot Above', category: 'Decorative', popular: false },
  ringAbove: { name: 'Ring Above', category: 'Decorative', popular: false },
  tildeAbove: { name: 'Tilde Above', category: 'Decorative', popular: false },
  bridgeBelow: { name: 'Bridge Below', category: 'Decorative', popular: false },
  wave: { name: 'Wave Text', category: 'Aesthetic', popular: true },
};

const SPECIAL_STYLES = [
  { id: 'upside-down', name: 'Upside Down', category: 'Fancy', popular: true, transform: upsideDown },
  { id: 'spaced', name: 'Spaced Text', category: 'Aesthetic', popular: true, transform: createTransform(spacedText) },
  { id: 'wide-spaced', name: 'Wide Spaced', category: 'Aesthetic', popular: false, transform: createTransform(wideSpacedText) },
  { id: 'vaporwave', name: 'Vaporwave', category: 'Aesthetic', popular: true, transform: vaporwave },
  { id: 'superscript', name: 'Superscript', category: 'Cool', popular: true, transform: superscript },
  { id: 'subscript', name: 'Subscript', category: 'Cool', popular: true, transform: subscript },
  { id: 'tiny-superscript', name: 'Tiny Text', category: 'Cute', popular: true, transform: superscript },
  { id: 'alternating', name: 'Alternating Case', category: 'Fancy', popular: false, transform: alternatingCase },
  { id: 'zigzag-case', name: 'Zigzag Case', category: 'Fancy', popular: false, transform: zigzag },
  { id: 'dot-between', name: 'Dot Between', category: 'Decorative', popular: false, transform: dotBetween },
  { id: 'dash-between', name: 'Dash Between', category: 'Decorative', popular: false, transform: dashBetween },
  { id: 'bubble', name: 'Bubble', category: 'Cute', popular: true, transform: bubbleText },
  { id: 'boxed', name: 'Boxed Text', category: 'Symbols', popular: true, transform: squareBrackets },
  { id: 'curly-box', name: 'Curly Box', category: 'Symbols', popular: false, transform: curlyBrackets },
  { id: 'angle-box', name: 'Angle Brackets', category: 'Symbols', popular: false, transform: angleBrackets },
  { id: 'pipe-box', name: 'Pipe Box', category: 'Symbols', popular: false, transform: pipeText },
  { id: 'slash-box', name: 'Slash Box', category: 'Symbols', popular: false, transform: slashText },
  { id: 'backslash-box', name: 'Backslash Box', category: 'Symbols', popular: false, transform: backslashText },
  { id: 'old-english', name: 'Old English', category: 'Gothic', popular: true, transform: createTransform((t) => applyMap(t, 'fraktur')) },
  { id: 'cursive', name: 'Cursive', category: 'Cursive', popular: true, transform: createTransform((t) => applyMap(t, 'script')) },
  { id: 'gothic', name: 'Gothic', category: 'Gothic', popular: true, transform: createTransform((t) => applyMap(t, 'boldFraktur')) },
  { id: 'cute-bubble', name: 'Cute Bubble', category: 'Cute', popular: true, transform: createTransform((t) => wrapText(bubbleText(t), '♡ ', ' ♡')) },
  { id: 'aesthetic-dots', name: 'Aesthetic Dots', category: 'Aesthetic', popular: true, transform: createTransform((t) => wrapText(t, '·˚ ༘ ', ' ༘ ·˚')) },
  { id: 'gaming-bold', name: 'Gaming Bold', category: 'Gaming', popular: true, transform: createTransform((t) => wrapText(applyMap(t, 'sansBold'), '「 ', ' 」')) },
  { id: 'gaming-mono', name: 'Gaming Mono', category: 'Gaming', popular: false, transform: createTransform((t) => wrapText(applyMap(t, 'mono'), '[ ', ' ]')) },
  { id: 'instagram-cursive', name: 'Instagram Cursive', category: 'Cursive', popular: true, transform: createTransform((t) => wrapText(applyMap(t, 'script'), '✧ ', ' ✧')) },
  { id: 'facebook-bold', name: 'Facebook Bold', category: 'Cool', popular: false, transform: createTransform((t) => applyMap(t, 'bold')) },
  { id: 'symbol-border', name: 'Symbol Border', category: 'Symbols', popular: false, transform: createTransform((t) => wrapText(t, '╔ ', ' ╗')) },
  { id: 'line-border', name: 'Line Border', category: 'Decorative', popular: false, transform: createTransform((t) => wrapText(t, '── ', ' ──')) },
  { id: 'mixed-bold-script', name: 'Mixed Bold Script', category: 'Fancy', popular: false, transform: createTransform((t) => applyMap(t, 'boldScript')) },
];

function buildStyles() {
  const styles = [];
  let counter = 0;

  const add = (style) => {
    counter += 1;
    styles.push({
      id: style.id || `style-${counter}`,
      name: style.name,
      category: style.category || 'Cool',
      popular: !!style.popular,
      transform: style.transform,
    });
  };

  // Base alphabets
  BASE_ALPHABETS.forEach((key) => {
    const meta = ALPHABET_META[key] || { name: key, category: 'Cool', popular: false };
    add({
      id: `alpha-${key}`,
      name: meta.name,
      category: meta.category,
      popular: meta.popular,
      transform: createTransform((t) => applyMap(t, key)),
    });
  });

  // Combining-only styles
  Object.entries(COMBINING_TRANSFORMS).forEach(([key, fn]) => {
    const meta = COMBINING_META[key] || { name: key, category: 'Decorative', popular: false };
    add({
      id: `comb-${key}`,
      name: meta.name,
      category: meta.category,
      popular: meta.popular,
      transform: createTransform(fn),
    });
  });

  // Alphabet + combining combinations
  const comboAlphabets = ['bold', 'italic', 'script', 'fraktur', 'double', 'sansBold', 'mono', 'fullwidth', 'circled'];
  const comboCombining = ['underline', 'strikethrough', 'overline', 'doubleUnderline', 'dotAbove', 'tildeAbove'];

  comboAlphabets.forEach((alpha) => {
    comboCombining.forEach((comb) => {
      const alphaMeta = ALPHABET_META[alpha];
      const combMeta = COMBINING_META[comb];
      if (!alphaMeta || !combMeta) return;
      add({
        id: `${alpha}-${comb}`,
        name: `${alphaMeta.name} ${combMeta.name}`,
        category: alphaMeta.category,
        popular: false,
        transform: createTransform(compose(
          (t) => applyMap(t, alpha),
          COMBINING_TRANSFORMS[comb],
        )),
      });
    });
  });

  // Wrapper styles on plain text
  WRAPPERS.forEach((w) => {
    add({
      id: `wrap-${w.id}`,
      name: w.name,
      category: w.category,
      popular: w.category === 'Cute' || w.category === 'Gaming',
      transform: createTransform((t) => wrapText(t, w.prefix, w.suffix)),
    });
  });

  // Wrapper + alphabet combinations
  const wrapAlphabets = [
    { key: 'script', name: 'Cursive' },
    { key: 'bold', name: 'Bold' },
    { key: 'fraktur', name: 'Gothic' },
    { key: 'double', name: 'Fancy' },
    { key: 'sansBold', name: 'Sans Bold' },
    { key: 'mono', name: 'Mono' },
    { key: 'circled', name: 'Circled' },
    { key: 'fullwidth', name: 'Fullwidth' },
  ];

  const keyWrappers = WRAPPERS.slice(0, 20);
  keyWrappers.forEach((w) => {
    wrapAlphabets.forEach((alpha) => {
      add({
        id: `wrap-${w.id}-${alpha.key}`,
        name: `${w.name} ${alpha.name}`,
        category: w.category,
        popular: false,
        transform: createTransform((t) => wrapText(applyMap(t, alpha.key), w.prefix, w.suffix)),
      });
    });
  });

  // Per-character wrappers
  const charWrappers = [
    { id: 'star-char', name: 'Star Each Letter', left: '★', right: '★', category: 'Decorative' },
    { id: 'heart-char', name: 'Heart Each Letter', left: '♥', right: '♥', category: 'Cute' },
    { id: 'dot-char', name: 'Dot Each Letter', left: '•', right: '•', category: 'Decorative' },
    { id: 'sparkle-char', name: 'Sparkle Each Letter', left: '✦', right: '✦', category: 'Decorative' },
    { id: 'circle-char', name: 'Circle Each Letter', left: '◦', right: '◦', category: 'Symbols' },
    { id: 'square-char', name: 'Square Each Letter', left: '▪', right: '▪', category: 'Symbols' },
    { id: 'wave-char', name: 'Wave Each Letter', left: '~', right: '~', category: 'Aesthetic' },
    { id: 'arrow-char', name: 'Arrow Each Letter', left: '→', right: '←', category: 'Decorative' },
  ];

  charWrappers.forEach((cw) => {
    add({
      id: cw.id,
      name: cw.name,
      category: cw.category,
      popular: false,
      transform: createTransform((t) => wrapEachChar(t, cw.left, cw.right)),
    });

    ['script', 'bold', 'fraktur'].forEach((alpha) => {
      const meta = ALPHABET_META[alpha];
      add({
        id: `${cw.id}-${alpha}`,
        name: `${cw.name} ${meta.name}`,
        category: cw.category,
        popular: false,
        transform: createTransform((t) => wrapEachChar(applyMap(t, alpha), cw.left, cw.right)),
      });
    });
  });

  // Special styles
  SPECIAL_STYLES.forEach((s) => add(s));

  // Vaporwave + wrapper combos
  ['script', 'bold', 'double', 'fraktur'].forEach((alpha) => {
    const meta = ALPHABET_META[alpha];
    add({
      id: `vapor-${alpha}`,
      name: `Vaporwave ${meta.name}`,
      category: 'Aesthetic',
      popular: false,
      transform: createTransform((t) => vaporwave(applyMap(t, alpha))),
    });
  });

  // Spaced alphabet variants
  ['bold', 'script', 'fraktur', 'double', 'mono', 'sansBold'].forEach((alpha) => {
    const meta = ALPHABET_META[alpha];
    add({
      id: `spaced-${alpha}`,
      name: `Spaced ${meta.name}`,
      category: 'Aesthetic',
      popular: false,
      transform: createTransform((t) => spacedText(applyMap(t, alpha))),
    });
  });

  // Gaming username styles
  const gamingStyles = [
    { id: 'game-elite', name: 'Elite Gamer', fn: (t) => wrapText(applyMap(t, 'sansBold'), '▸ ', ' ◂') },
    { id: 'game-pro', name: 'Pro Gamer', fn: (t) => wrapText(applyMap(t, 'mono'), '⟨ ', ' ⟩') },
    { id: 'game-clan', name: 'Clan Tag', fn: (t) => wrapText(applyMap(t, 'bold'), '[', ']') },
    { id: 'game-squad', name: 'Squad Name', fn: (t) => wrapText(applyMap(t, 'sansBoldItalic'), '◈ ', ' ◈') },
    { id: 'game-legend', name: 'Legend Tag', fn: (t) => wrapText(applyMap(t, 'double'), '★ ', ' ★') },
    { id: 'game-shadow', name: 'Shadow Gamer', fn: (t) => wrapText(applyMap(t, 'boldFraktur'), '☠ ', ' ☠') },
    { id: 'game-neon', name: 'Neon Gamer', fn: (t) => wrapText(applyMap(t, 'fullwidth'), '⚡ ', ' ⚡') },
    { id: 'game-pixel', name: 'Pixel Gamer', fn: (t) => wrapText(applyMap(t, 'mono'), '▌', '▐') },
  ];

  gamingStyles.forEach((g) => {
    add({
      id: g.id,
      name: g.name,
      category: 'Gaming',
      popular: true,
      transform: createTransform(g.fn),
    });
  });

  // Cute aesthetic combos
  const cuteStyles = [
    { id: 'cute-kitty', name: 'Kitty Cute', fn: (t) => wrapText(applyMap(t, 'script'), '🐱 ', ' 🐾') },
    { id: 'cute-bear', name: 'Bear Cute', fn: (t) => wrapText(applyMap(t, 'boldScript'), '🧸 ', ' 🧸') },
    { id: 'cute-rainbow', name: 'Rainbow Cute', fn: (t) => wrapText(t, '🌈 ', ' 🌈') },
    { id: 'cute-candy', name: 'Candy Cute', fn: (t) => wrapText(applyMap(t, 'circled'), '🍬 ', ' 🍭') },
    { id: 'cute-cloud', name: 'Cloud Cute', fn: (t) => wrapText(applyMap(t, 'script'), '☁ ', ' ☁') },
    { id: 'cute-star', name: 'Star Cute', fn: (t) => wrapText(applyMap(t, 'boldScript'), '⭐ ', ' ⭐') },
  ];

  cuteStyles.forEach((c) => {
    add({
      id: c.id,
      name: c.name,
      category: 'Cute',
      popular: true,
      transform: createTransform(c.fn),
    });
  });

  // Decorative mixed
  const decorStyles = [
    { id: 'decor-flourish', name: 'Flourish Text', fn: (t) => wrapText(t, '✿❀ ', ' ❀✿') },
    { id: 'decor-elegant', name: 'Elegant Decor', fn: (t) => wrapText(applyMap(t, 'script'), '❦ ', ' ❦') },
    { id: 'decor-royal', name: 'Royal Text', fn: (t) => wrapText(applyMap(t, 'double'), '♛ ', ' ♛') },
    { id: 'decor-fancy-line', name: 'Fancy Line', fn: (t) => wrapText(t, '═ ', ' ═') },
    { id: 'decor-artistic', name: 'Artistic Text', fn: (t) => wrapText(applyMap(t, 'italic'), '✎ ', ' ✎') },
    { id: 'decor-classy', name: 'Classy Text', fn: (t) => wrapText(applyMap(t, 'smallCaps'), '— ', ' —') },
  ];

  decorStyles.forEach((d) => {
    add({
      id: d.id,
      name: d.name,
      category: 'Decorative',
      popular: false,
      transform: createTransform(d.fn),
    });
  });

  return styles;
}

export const fontStyles = buildStyles();
export const FONT_STYLE_COUNT = fontStyles.length;

export const CATEGORIES = [
  'All',
  'Popular',
  'Aesthetic',
  'Cute',
  'Cursive',
  'Stylish',
  'Fancy',
  'Cool',
  'Gothic',
  'Gaming',
  'Symbols',
  'Decorative',
  'Favorites',
];

export function filterStyles(styles, { category, favorites }) {
  let filtered = styles;

  if (category === 'Popular') {
    filtered = filtered.filter((s) => s.popular);
  } else if (category === 'Favorites') {
    filtered = filtered.filter((s) => favorites.has(s.id));
  } else if (category && category !== 'All') {
    filtered = filtered.filter((s) => s.category === category);
  }

  return filtered;
}

/**
 * Unicode font transformation engine.
 * Maps plain text to styled Unicode characters.
 */

const A = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const a = 'abcdefghijklmnopqrstuvwxyz';
const D = '0123456789';

// Special character overrides for alphabets with gaps
const SPECIAL = {
  scriptUpper: { B: '\u212C', E: '\u2130', F: '\u2131', H: '\u210B', I: '\u2110', L: '\u2112', M: '\u2133', R: '\u211B' },
  scriptLower: { e: '\u212F', g: '\u210A', o: '\u2134' },
  frakturUpper: { C: '\u212D', H: '\u210C', I: '\u2111', R: '\u211C', Z: '\u2128' },
  frakturLower: {},
  doubleUpper: { C: '\u2102', H: '\u210D', I: '\u2111', N: '\u2115', P: '\u2119', Q: '\u211A', R: '\u211D', Z: '\u2124' },
  doubleLower: { c: '\u1D554', h: '\u210E', i: '\u1D55C', o: '\u1D55D', q: '\u1D55E' },
  italicUpper: { h: '\u210E' },
};

function buildMap(upperStart, lowerStart, digitStart, specialUpper = {}, specialLower = {}) {
  const map = {};
  for (let i = 0; i < 26; i++) {
    const uc = A[i];
    const lc = a[i];
    map[uc] = specialUpper[uc] || String.fromCodePoint(upperStart + i);
    map[lc] = specialLower[lc] || String.fromCodePoint(lowerStart + i);
  }
  if (digitStart !== null) {
    for (let i = 0; i < 10; i++) {
      map[D[i]] = String.fromCodePoint(digitStart + i);
    }
  }
  return map;
}

const MAPS = {
  bold: buildMap(0x1D400, 0x1D41A, null),
  italic: buildMap(0x1D434, 0x1D44E, null, SPECIAL.italicUpper),
  boldItalic: buildMap(0x1D468, 0x1D482, null),
  script: buildMap(0x1D49C, 0x1D4B6, null, SPECIAL.scriptUpper, SPECIAL.scriptLower),
  boldScript: buildMap(0x1D4D0, 0x1D4EA, null),
  fraktur: buildMap(0x1D504, 0x1D51E, null, SPECIAL.frakturUpper, SPECIAL.frakturLower),
  boldFraktur: buildMap(0x1D56C, 0x1D586, null),
  double: buildMap(0x1D538, 0x1D552, null, SPECIAL.doubleUpper, SPECIAL.doubleLower),
  sans: buildMap(0x1D5A0, 0x1D5BA, null),
  sansBold: buildMap(0x1D5D4, 0x1D5EE, null),
  sansItalic: buildMap(0x1D608, 0x1D622, null),
  sansBoldItalic: buildMap(0x1D63C, 0x1D656, null),
  mono: buildMap(0x1D670, 0x1D68A, null),
  fullwidth: buildMap(0xFF21, 0xFF41, 0xFF10),
  circled: buildMap(0x24B6, 0x24D0, 0x24EA),
  squared: buildMap(0x1F130, 0x1F150, null),
  parenthesized: buildMap(0x1F110, 0x1F130, null),
  negativeCircled: buildMap(0x1F150, 0x1F170, null),
  smallCaps: buildMap(0x1D00, 0x1D00, null),
};

// Small caps only has limited letters - build manually
const SMALL_CAPS_MAP = {
  a: '\u1D00', b: '\u0299', c: '\u1D04', d: '\u1D05', e: '\u1D07', f: '\u0493',
  g: '\u0262', h: '\u029C', i: '\u026A', j: '\u1D0A', k: '\u1D0B', l: '\u029F',
  m: '\u1D0D', n: '\u0274', o: '\u1D0F', p: '\u1D18', q: '\u1D26', r: '\u0280',
  s: '\u0073', t: '\u1D1B', u: '\u1D1C', v: '\u1D20', w: '\u1D21', x: '\u0078',
  y: '\u028F', z: '\u1D22',
};

const SUPERSCRIPT_MAP = {
  '0': '\u2070', '1': '\u00B9', '2': '\u00B2', '3': '\u00B3', '4': '\u2074',
  '5': '\u2075', '6': '\u2076', '7': '\u2077', '8': '\u2078', '9': '\u2079',
  a: '\u1D43', b: '\u1D47', c: '\u1D9C', d: '\u1D48', e: '\u1D49', f: '\u1DA0',
  g: '\u1D4D', h: '\u02B0', i: '\u2071', j: '\u02B2', k: '\u1D4F', l: '\u02E1',
  m: '\u1D50', n: '\u207F', o: '\u1D52', p: '\u1D56', r: '\u02B3', s: '\u02E2',
  t: '\u1D57', u: '\u1D58', v: '\u1D5B', w: '\u02B7', x: '\u02E3', y: '\u02B8', z: '\u1DBB',
};

const SUBSCRIPT_MAP = {
  '0': '\u2080', '1': '\u2081', '2': '\u2082', '3': '\u2083', '4': '\u2084',
  '5': '\u2085', '6': '\u2086', '7': '\u2087', '8': '\u2088', '9': '\u2089',
  a: '\u2090', e: '\u2091', h: '\u2095', i: '\u1D62', j: '\u2C7C', k: '\u2096',
  l: '\u2097', m: '\u2098', n: '\u2099', o: '\u2092', p: '\u209A', r: '\u1D63',
  s: '\u209B', t: '\u209C', u: '\u1D64', v: '\u1D65', x: '\u2093',
};

const UPSIDE_DOWN = {
  a: '\u0250', b: 'q', c: '\u0254', d: 'p', e: '\u01DD', f: '\u025F', g: '\u0183',
  h: '\u0265', i: '\u0131', j: '\u027E', k: '\u029E', l: '\u028E', m: '\u026F',
  n: 'u', o: 'o', p: 'd', q: 'b', r: '\u0279', s: 's', t: '\u0287', u: 'n',
  v: '\u028C', w: '\u028D', x: 'x', y: '\u028E', z: '\u0250',
  A: '\u2200', B: '\u10408', C: '\u0186', D: '\u10405', E: '\u018E', F: '\u2132',
  G: '\u2141', H: 'H', I: 'I', J: '\u0177', K: '\u1040E', L: '\u02E6', M: 'W',
  N: 'N', O: 'O', P: '\u10409', Q: '\u038C', R: '\u1040B', S: 'S', T: '\u22A5',
  U: '\u1040C', V: '\u028C', W: 'M', X: 'X', Y: '\u2144', Z: '\u10401',
  '0': '0', '1': '\u0196', '2': '\u1105', '3': '\u0190', '4': '\u152D', '5': '\u03DB',
  '6': '9', '7': '\u3125', '8': '8', '9': '6', '.': '\u02D9', ',': "'", '!': '\u00A1',
  '?': '\u00BF', '(': ')', ')': '(', '[': ']', ']': '[', '{': '}', '}': '{',
  '<': '>', '>': '<', '&': '\u214B', '_': '\u203E',
};

export function mapChars(text, charMap) {
  return [...text].map((ch) => charMap[ch] ?? ch).join('');
}

export function applyMap(text, mapKey) {
  if (mapKey === 'smallCaps') return mapChars(text, SMALL_CAPS_MAP);
  const map = MAPS[mapKey];
  if (!map) return text;
  return mapChars(text, map);
}

export function applyCombining(text, combiningChar) {
  return [...text].map((ch) => (ch === ' ' ? ch : ch + combiningChar)).join('');
}

export function wrapText(text, prefix, suffix) {
  return prefix + text + suffix;
}

export function wrapEachChar(text, left, right) {
  return [...text].map((ch) => (ch === ' ' ? ch : left + ch + right)).join('');
}

export function spacedText(text, separator = ' ') {
  return [...text].join(separator);
}

export function wideSpacedText(text) {
  return [...text].join('  ');
}

export function upsideDown(text) {
  return [...text].reverse().map((ch) => UPSIDE_DOWN[ch] ?? ch).join('');
}

export function vaporwave(text) {
  const fw = applyMap(text, 'fullwidth');
  return [...fw].join(' ');
}

export function superscript(text) {
  return mapChars(text.toLowerCase(), SUPERSCRIPT_MAP);
}

export function subscript(text) {
  return mapChars(text.toLowerCase(), SUBSCRIPT_MAP);
}

export function alternatingCase(text) {
  return [...text].map((ch, i) => (i % 2 === 0 ? ch.toUpperCase() : ch.toLowerCase())).join('');
}

export function titleCase(text) {
  return text.replace(/\b\w/g, (c) => c.toUpperCase());
}

export function randomCase(text) {
  return [...text].map((ch) => (Math.random() > 0.5 ? ch.toUpperCase() : ch.toLowerCase())).join('');
}

export function dotBetween(text) {
  return [...text].join('·');
}

export function dashBetween(text) {
  return [...text].join('—');
}

export function waveText(text) {
  const marks = ['\u0303', '\u0304', '\u0306'];
  return [...text].map((ch, i) => (ch === ' ' ? ch : ch + marks[i % marks.length])).join('');
}

export function doubleStruckBold(text) {
  return applyMap(text, 'double');
}

export function bubbleText(text) {
  return wrapEachChar(text, '(', ')');
}

export function squareBrackets(text) {
  return wrapEachChar(text, '[', ']');
}

export function curlyBrackets(text) {
  return wrapEachChar(text, '{', '}');
}

export function angleBrackets(text) {
  return wrapEachChar(text, '⟨', '⟩');
}

export function pipeText(text) {
  return wrapEachChar(text, '|', '|');
}

export function slashText(text) {
  return wrapEachChar(text, '/', '/');
}

export function backslashText(text) {
  return wrapEachChar(text, '\\', '\\');
}

export function underlineCombining(text) {
  return applyCombining(text, '\u0332');
}

export function doubleUnderlineCombining(text) {
  return applyCombining(text, '\u0333');
}

export function strikethroughCombining(text) {
  return applyCombining(text, '\u0336');
}

export function overlineCombining(text) {
  return applyCombining(text, '\u0305');
}

export function slashThrough(text) {
  return applyCombining(text, '\u0338');
}

export function dotAbove(text) {
  return applyCombining(text, '\u0307');
}

export function ringAbove(text) {
  return applyCombining(text, '\u030A');
}

export function tildeAbove(text) {
  return applyCombining(text, '\u0303');
}

export function bridgeBelow(text) {
  return applyCombining(text, '\u032A');
}

export function crossBelow(text) {
  return applyCombining(text, '\u0336');
}

export function zigzag(text) {
  return [...text].map((ch, i) => (ch === ' ' ? ch : (i % 2 === 0 ? ch.toUpperCase() : ch.toLowerCase()))).join('');
}

export function createTransform(fn) {
  return (text) => {
    if (!text) return '';
    try {
      return fn(text);
    } catch {
      return text;
    }
  };
}

export function compose(...fns) {
  return (text) => fns.reduce((acc, fn) => fn(acc), text);
}

export const COMBINING_TRANSFORMS = {
  underline: underlineCombining,
  doubleUnderline: doubleUnderlineCombining,
  strikethrough: strikethroughCombining,
  overline: overlineCombining,
  slashThrough: slashThrough,
  dotAbove: dotAbove,
  ringAbove: ringAbove,
  tildeAbove: tildeAbove,
  bridgeBelow: bridgeBelow,
  wave: waveText,
};

export const BASE_ALPHABETS = Object.keys(MAPS);

export function transformText(text, transformFn) {
  if (!text || !transformFn) return '';
  return transformFn(text);
}

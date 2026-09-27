import { rawStyles } from "./styles_data.js";

const UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWER = "abcdefghijklmnopqrstuvwxyz";
const DIGITS = "0123456789";

function buildLookup(table) {
  const map = {};
  UPPER.split("").forEach((ch, i) => (map[ch] = table.upper[i] ?? ch));
  LOWER.split("").forEach((ch, i) => (map[ch] = table.lower[i] ?? ch));
  DIGITS.split("").forEach((ch, i) => (map[ch] = table.digits[i] ?? ch));
  return map;
}

function mapTransform(table) {
  const lookup = buildLookup(table);
  return (text) => {
    const out = text
      .split("")
      .map((ch) => lookup[ch] ?? ch)
      .join("");
    return table.reverse ? out.split("").reverse().join("") : out;
  };
}

// Combining-character based styles (work on any input, not just a-z0-9)
const strike = (text) => text.split("").map((c) => c + "\u0336").join("");
const underline = (text) => text.split("").map((c) => c + "\u0332").join("");
const dotted = (text) => text.split("").map((c) => c + "\u0323").join("");
const zalgoLite = (text) => {
  const marks = ["\u0301", "\u0307", "\u0308", "\u0330", "\u0359"];
  return text
    .split("")
    .map((c, i) => (/\s/.test(c) ? c : c + marks[i % marks.length]))
    .join("");
};
const spacedOut = (text) => text.split("").join(" ");
const wideDots = (text) => text.split("").join("\u00B7");

export const CATEGORIES = [
  { id: "classic", label: "Classic" },
  { id: "elegant", label: "Elegant & Script" },
  { id: "symbols", label: "Circled & Boxed" },
  { id: "stylized", label: "Small & Stylized" },
  { id: "effects", label: "Text Effects" },
  { id: "wraps", label: "Decorative Wraps" },
];

export const STYLE_DEFS = [
  { id: "bold", label: "Bold", category: "classic", fn: mapTransform(rawStyles.bold) },
  { id: "italic", label: "Italic", category: "classic", fn: mapTransform(rawStyles.italic) },
  { id: "bolditalic", label: "Bold Italic", category: "classic", fn: mapTransform(rawStyles.bolditalic) },
  { id: "sans", label: "Sans Serif", category: "classic", fn: mapTransform(rawStyles.sans) },
  { id: "sansbold", label: "Sans Bold", category: "classic", fn: mapTransform(rawStyles.sansbold) },
  { id: "sansitalic", label: "Sans Italic", category: "classic", fn: mapTransform(rawStyles.sansitalic) },
  { id: "sansbolditalic", label: "Sans Bold Italic", category: "classic", fn: mapTransform(rawStyles.sansbolditalic) },
  { id: "monospace", label: "Monospace", category: "classic", fn: mapTransform(rawStyles.monospace) },
  { id: "fullwidth", label: "Fullwidth", category: "classic", fn: mapTransform(rawStyles.fullwidth) },

  { id: "script", label: "Script", category: "elegant", fn: mapTransform(rawStyles.script) },
  { id: "boldscript", label: "Bold Script", category: "elegant", fn: mapTransform(rawStyles.boldscript) },
  { id: "fraktur", label: "Fraktur", category: "elegant", fn: mapTransform(rawStyles.fraktur) },
  { id: "boldfraktur", label: "Bold Fraktur", category: "elegant", fn: mapTransform(rawStyles.boldfraktur) },
  { id: "doublestruck", label: "Double-Struck", category: "elegant", fn: mapTransform(rawStyles.doublestruck) },

  { id: "circled", label: "Circled", category: "symbols", fn: mapTransform(rawStyles.circled) },
  { id: "negcircled", label: "Circled (Filled)", category: "symbols", fn: mapTransform(rawStyles.negcircled) },
  { id: "squared", label: "Squared", category: "symbols", fn: mapTransform(rawStyles.squared) },
  { id: "negsquared", label: "Squared (Filled)", category: "symbols", fn: mapTransform(rawStyles.negsquared) },
  { id: "parenthesized", label: "Parenthesized", category: "symbols", fn: mapTransform(rawStyles.parenthesized) },

  { id: "smallcaps", label: "Small Caps", category: "stylized", fn: mapTransform(rawStyles.smallcaps) },
  { id: "superscript", label: "Superscript", category: "stylized", fn: mapTransform(rawStyles.superscript) },
  { id: "upsidedown", label: "Upside Down", category: "stylized", fn: mapTransform(rawStyles.upsidedown) },

  { id: "strike", label: "Strikethrough", category: "effects", fn: strike },
  { id: "underline", label: "Underline", category: "effects", fn: underline },
  { id: "dotted", label: "Dotted", category: "effects", fn: dotted },
  { id: "zalgo", label: "Glitch (Light Zalgo)", category: "effects", fn: zalgoLite },
  { id: "spaced", label: "Spaced Out", category: "effects", fn: spacedOut },
  { id: "wideDots", label: "Dot Separated", category: "effects", fn: wideDots },
];

const wrap = (prefix, suffix) => (text) => `${prefix}${text}${suffix}`;

export const WRAP_DEFS = [
  { id: "w-star", label: "Star Frame", fn: wrap("\u2727\u2727 ", " \u2727\u2727") },
  { id: "w-star2", label: "Star Burst", fn: wrap("\u2605\u5F61 ", " \u5F61\u2605") },
  { id: "w-heart", label: "Heart", fn: wrap("\u2661 ", " \u2661") },
  { id: "w-heart2", label: "Heart Chain", fn: wrap("\u02DA\u2661 ", " \u2661\u02DA") },
  { id: "w-crown", label: "Royal Crown", fn: wrap("\uD83D\uDC51 ", " \uD83D\uDC51") },
  { id: "w-blackheart", label: "Solid Heart", fn: wrap("\u2765 ", " \u2765") },
  { id: "w-box", label: "Box Frame", fn: (t) => `\u2554\u2550\u2550\u2550\u2557\n\u2551 ${t} \u2551\n\u255A\u2550\u2550\u2550\u255D` },
  { id: "w-thinbox", label: "Thin Box", fn: wrap("[ ", " ]") },
  { id: "w-doublebracket", label: "Double Bracket", fn: wrap("\u27E6 ", " \u27E7") },
  { id: "w-corner", label: "White Corner", fn: wrap("\u300E", "\u300F") },
  { id: "w-japanese", label: "Japanese Bracket", fn: wrap("\u3010", "\u3011") },
  { id: "w-lenticular", label: "Lenticular", fn: wrap("\u3008", "\u3009") },
  { id: "w-flower", label: "Flower", fn: wrap("\u273F ", " \u273F") },
  { id: "w-sparkle", label: "Sparkle", fn: wrap("\u2726 ", " \u2726") },
  { id: "w-diamond", label: "Diamond", fn: wrap("\u25C6 ", " \u25C6") },
  { id: "w-butterfly", label: "Ribbon", fn: wrap("\u2740 ", " \u2740") },
  { id: "w-arrow", label: "Arrow Point", fn: wrap("\u276F\u276F ", " \u276E\u276E") },
  { id: "w-swords", label: "Gamer Blades", fn: wrap("\u2694\uFE0F ", " \u2694\uFE0F") },
  { id: "w-wave", label: "Tilde Wave", fn: wrap("~ ", " ~") },
  { id: "w-underscoreline", label: "Underscore Line", fn: wrap("_", "_") },
  { id: "w-dividerdot", label: "Dot Divider", fn: wrap("\u2022 ", " \u2022") },
  { id: "w-vertbar", label: "Vertical Bars", fn: wrap("\u2502 ", " \u2502") },
  { id: "w-quote", label: "Quoted", fn: wrap("\u201C", "\u201D") },
  { id: "w-moon", label: "Moon Charm", fn: wrap("\u263E ", " \u263D") },
  { id: "w-cute", label: "Cute Ears", fn: wrap("\u0F3A\u1D25\u0F3B ", " \u0F3A\u1D25\u0F3B") },
  { id: "w-plain-star", label: "Simple Stars", fn: wrap("\u2605 ", " \u2605") },
  { id: "w-tag", label: "Clan Tag", fn: wrap("\u300C", "\u300D") },
  { id: "w-emoji-fire", label: "On Fire", fn: wrap("\uD83D\uDD25 ", " \uD83D\uDD25") },
  { id: "w-emoji-sparkles", label: "Sparkling", fn: wrap("\u2728 ", " \u2728") },
];

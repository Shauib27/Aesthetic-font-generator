import { ids, styleOut } from '../data/styleIndex.js';
import { LANDING_BY_PATH } from './landings.jsx';
import { GUIDE_BY_PATH } from './guides.jsx';

/* Descriptive anchor text, a short description and a live preview for internal link cards. */
const EXTRA = {
  '/': { label: 'Aesthetic Font Generator', desc: 'All 269 styles in one place', preview: ids('Bold Script')[0], sample: 'Aesthetic' },
  '/symbols/': { label: 'Aesthetic Symbols', desc: 'Hearts, stars, dividers and kaomoji to copy', text: '✦ ♡ ☾ ✿ ꧁꧂' },
};

export function linkInfo(path) {
  const l = LANDING_BY_PATH[path];
  if (l) {
    const pid = ids(l.preview)[0];
    return { to: path, label: l.crumb, desc: l.lead.split('. ')[0].replace(/\.$/, '') + '.', preview: pid >= 0 ? styleOut(pid, l.crumb.replace(/ (Fonts|Text)$/, '')) : '' };
  }
  const g = GUIDE_BY_PATH[path];
  if (g) return { to: path, label: g.crumb, desc: g.summary };
  const e = EXTRA[path];
  if (e) return { to: path, label: e.label, desc: e.desc, preview: e.text || styleOut(e.preview, e.sample) };
  return { to: path, label: path };
}

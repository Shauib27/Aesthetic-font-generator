import { Link } from 'react-router-dom';
import { styleName, styleOut } from '../data/styleIndex.js';
import { useCopy } from '../copy.jsx';
import { IconCopy, IconArrow } from './Icons.jsx';

/* Small shared building blocks for landing pages, guides and the homepage. */

export function Breadcrumbs({ items }) {
  return (
    <nav className="crumbs" aria-label="Breadcrumb">
      <ol>
        {items.map((it, i) => (
          <li key={it.path}>
            {i < items.length - 1 ? <Link to={it.path}>{it.name}</Link> : <span aria-current="page">{it.name}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

/** Copyable text example (used for symbols, templates and hand-picked samples). */
export function CopyLine({ text, label }) {
  const { copy } = useCopy();
  return (
    <div className="copy-line">
      <span className="cl-text">{text}</span>
      {label && <span className="cl-label">{label}</span>}
      <button type="button" className="copy-btn sm" onClick={() => copy(text, 'Copied to clipboard')} aria-label={'Copy ' + (label || text)}>
        <IconCopy /><span>Copy</span>
      </button>
    </div>
  );
}

/** A table of real engine styles rendered with a sample word, each with a copy button.
    Rendered at build time too, so the examples are part of the indexable HTML. */
export function StyleShowcase({ ids, sample, caption }) {
  const { copy } = useCopy();
  return (
    <div className="showcase">
      {ids.map((i) => {
        const out = styleOut(i, sample);
        return (
          <div className="showcase-row" key={i}>
            <span className="sw-name">{styleName(i)}</span>
            <span className="sw-out" suppressHydrationWarning>{out}</span>
            <button type="button" className="copy-btn sm" onClick={() => copy(out, 'Copied to clipboard')} aria-label={'Copy ' + styleName(i) + ' example'}>
              <IconCopy /><span>Copy</span>
            </button>
          </div>
        );
      })}
      {caption && <p className="caption">{caption}</p>}
    </div>
  );
}

/** Grid of descriptive internal links. */
export function LinkCards({ items, title, id }) {
  return (
    <section className="content" aria-labelledby={id}>
      {title && <h2 id={id}>{title}</h2>}
      <ul className="link-cards">
        {items.map((it) => (
          <li key={it.to}>
            <Link to={it.to} className="link-card">
              {it.preview && <span className="lc-preview" suppressHydrationWarning>{it.preview}</span>}
              <span className="lc-title">{it.label}<IconArrow /></span>
              {it.desc && <span className="lc-desc">{it.desc}</span>}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

/** Small "Unicode, not font files" disclaimer used across the site. */
export function UnicodeNote() {
  return (
    <p className="note">
      These are Unicode text styles, not downloadable font files. Most phones and computers display them,
      but a few characters can show as empty boxes on older systems or in apps that limit characters.{' '}
      <Link to="/guides/why-fonts-show-as-boxes/">Why some characters show as boxes</Link>.
    </p>
  );
}

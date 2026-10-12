import { Link } from 'react-router-dom';
import { NAV } from '../data/site.js';
import { ANALYTICS_ENABLED, SETTINGS } from '../config/settings.js';

const COLS = [
  { title: 'Font generators', items: NAV.generators },
  { title: 'Popular fonts', items: [...NAV.fonts, ...NAV.effects] },
  { title: 'Social media fonts', items: NAV.social },
  { title: 'Guides', items: [...NAV.guides, { to: '/guides/', label: 'All guides' }] },
  { title: 'Company', items: [...NAV.company, ...NAV.legal] },
];

export default function Footer() {
  const showChoices = ANALYTICS_ENABLED && SETTINGS.requireConsent;
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="foot-top">
          <div className="foot-brand">
            <Link className="logo" to="/" aria-label="Aesthetic Text Generator — home">
              <span className="logo-script">Aesthetic Text</span>
              <span className="logo-sub"><span className="ln" />Generator<span className="ln" /></span>
            </Link>
            <p>
              Free copy-and-paste text styles built from Unicode characters. Everything runs in your
              browser — nothing you type is sent to a server.
            </p>
          </div>
          {COLS.map((c) => (
            <nav key={c.title} className="foot-col" aria-label={c.title}>
              <h2>{c.title}</h2>
              <ul>
                {c.items.map((it) => (
                  <li key={it.to}><Link to={it.to}>{it.label}</Link></li>
                ))}
                {c.title === 'Company' && showChoices && (
                  <li>
                    <button type="button" className="foot-link" onClick={() => window.dispatchEvent(new Event('ag:privacy-choices'))}>
                      Privacy choices
                    </button>
                  </li>
                )}
              </ul>
            </nav>
          ))}
        </div>
        <p className="fine">
          © 2026 Aesthetic Text Generator. These are Unicode text styles, not downloadable font files;
          how they look depends on the fonts installed on each device.
        </p>
      </div>
    </footer>
  );
}

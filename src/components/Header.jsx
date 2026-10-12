import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { NAV } from '../data/site.js';
import { IconMenu, IconX, IconChevron } from './Icons.jsx';

/* The header is a fixed-height, non-sticky bar, so nothing in the generator can move it.
   The mobile menu and dropdowns are absolutely positioned overlays (no layout shift). */
const MENUS = [
  { key: 'fonts', label: 'Font styles', items: [...NAV.fonts, ...NAV.generators.slice(1)] },
  { key: 'social', label: 'Social media', items: NAV.social },
  { key: 'guides', label: 'Guides', items: [...NAV.guides, { to: '/guides/', label: 'All guides' }] },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState('');
  const { pathname } = useLocation();
  const ref = useRef(null);

  useEffect(() => {
    setOpen(false);
    setMenu('');
  }, [pathname]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') { setMenu(''); setOpen(false); }
    };
    const onClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) { setMenu(''); setOpen(false); }
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('click', onClick);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('click', onClick);
    };
  }, []);

  return (
    <header className="site-header" ref={ref}>
      <div className="wrap nav">
        <Link className="logo" to="/" aria-label="Aesthetic Text Generator — home">
          <span className="logo-script">Aesthetic Text</span>
          <span className="logo-sub"><span className="ln" />Generator<span className="ln" /></span>
        </Link>

        <button
          type="button"
          className="menu-btn"
          aria-expanded={open}
          aria-controls="site-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <IconX /> : <IconMenu />}
        </button>

        <nav id="site-nav" className={'nav-links' + (open ? ' open' : '')} aria-label="Main">
          <NavLink to="/" end className="nav-a">Generator</NavLink>
          {MENUS.map((m) => (
            <div key={m.key} className={'dd' + (menu === m.key ? ' open' : '')}>
              <button
                type="button"
                className="dd-btn"
                aria-expanded={menu === m.key}
                aria-controls={'dd-' + m.key}
                onClick={() => setMenu((cur) => (cur === m.key ? '' : m.key))}
              >
                {m.label} <IconChevron />
              </button>
              <div className="dd-menu" id={'dd-' + m.key}>
                {m.items.map((it) => (
                  <Link key={it.to} to={it.to}>{it.label}</Link>
                ))}
              </div>
            </div>
          ))}
          <NavLink to="/symbols/" className="nav-a">Symbols</NavLink>
          <NavLink to="/about/" className="nav-a">About</NavLink>
        </nav>
      </div>
    </header>
  );
}

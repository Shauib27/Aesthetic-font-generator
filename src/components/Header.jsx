import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Home, ChevronDown } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

const CONVERTER_LINKS = [
  { to: '/pastel-fonts', label: 'Pastel Fonts' },
  { to: '/cute-fonts', label: 'Cute Fonts' },
  { to: '/instagram-fonts', label: 'Instagram Fonts' },
  { to: '/bio-fonts', label: 'Bio Fonts' },
];

const SIMPLE_LINKS = [
  { to: '/contact', label: 'Contact Us' },
  { to: '/about', label: 'About Us' },
  { to: '/privacy-policy', label: 'Privacy Policy' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const closeMenu = () => {
    setMenuOpen(false);
    setDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="header">
      <div className="container header__inner">
        <Link to="/" className="header__logo" onClick={closeMenu} aria-label="Aesthetic Font Generator - Home">
          <span className="header__logo-mark header__logo-mark--text">
            <em>aesthetic</em> fonts
          </span>
        </Link>

        <nav className="header__nav" aria-label="Main navigation">
          <NavLink to="/" end className={({ isActive }) => `header__nav-link${isActive ? ' header__nav-link--active' : ''}`}>
            <Home size={16} aria-hidden="true" style={{ marginRight: '0.375rem', verticalAlign: '-2px' }} />
            Aesthetic Font Generator
          </NavLink>

          <div className="header__dropdown" ref={dropdownRef}>
            <button
              type="button"
              className={`header__nav-link header__dropdown-btn${dropdownOpen ? ' header__nav-link--active' : ''}`}
              onClick={() => setDropdownOpen((open) => !open)}
              aria-expanded={dropdownOpen}
            >
              More Styles
              <ChevronDown size={14} aria-hidden="true" className={`header__dropdown-icon${dropdownOpen ? ' header__dropdown-icon--open' : ''}`} />
            </button>
            {dropdownOpen && (
              <div className="header__dropdown-menu">
                {CONVERTER_LINKS.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    className="header__dropdown-link"
                    onClick={closeMenu}
                  >
                    {link.label}
                  </NavLink>
                ))}
              </div>
            )}
          </div>

          {SIMPLE_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `header__nav-link${isActive ? ' header__nav-link--active' : ''}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          className="header__menu-btn"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <nav
        className={`header__mobile-nav${menuOpen ? ' header__mobile-nav--open' : ''}`}
        aria-label="Mobile navigation"
      >
        <div className="container">
          <NavLink to="/" end className="header__mobile-link" onClick={closeMenu}>
            Aesthetic Font Generator
          </NavLink>
          <p className="header__mobile-section-title">More Styles</p>
          {CONVERTER_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className="header__mobile-link header__mobile-link--sub"
              onClick={closeMenu}
            >
              {link.label}
            </NavLink>
          ))}
          {SIMPLE_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className="header__mobile-link"
              onClick={closeMenu}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
}

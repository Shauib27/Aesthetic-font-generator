import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <header className="site">
      <div className="wrap nav">
        <Link className="logo" to="/" onClick={close} aria-label="Aesthetic Text Generator home">
          <span className="logo-script">Aesthetic Text</span>
          <span className="logo-sub"><span className="ln"></span>Generator<span className="ln"></span></span>
        </Link>
        <button className="menu-btn" aria-label="Toggle menu" onClick={() => setOpen(!open)}>☰</button>
        <nav className={'nav-links' + (open ? ' open' : '')}>
          <Link to="/" onClick={close}>Aesthetic Text</Link>
          <div className="dd">
            <button className="dd-btn" type="button">other Fonts <span className="caret">⌄</span></button>
            <div className="dd-menu">
              <Link to="/facebook-fonts" onClick={close}>Facebook Fonts</Link>
              <Link to="/instagram-fonts" onClick={close}>Instagram Fonts</Link>
            </div>
          </div>
          <Link to="/contact" onClick={close}>Contact Us</Link>
          <Link to="/about" onClick={close}>About Us</Link>
          <Link to="/privacy-policy" onClick={close}>Privacy Policy</Link>
        </nav>
      </div>
    </header>
  );
}

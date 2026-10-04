import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaXTwitter, FaYoutube, FaPinterestP } from 'react-icons/fa6';

const SOCIAL_LINKS = [
  { label: 'Facebook', href: 'https://facebook.com', Icon: FaFacebookF },
  { label: 'Instagram', href: 'https://instagram.com', Icon: FaInstagram },
  { label: 'X (Twitter)', href: 'https://twitter.com', Icon: FaXTwitter },
  { label: 'YouTube', href: 'https://youtube.com', Icon: FaYoutube },
  { label: 'Pinterest', href: 'https://pinterest.com', Icon: FaPinterestP },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <div className="footer__brand-row">
              <span className="footer__logo-mark footer__logo-mark--text">
                <em>aesthetic</em> fonts
              </span>
            </div>
            <p className="footer__brand-desc">
              Turn plain text into soft, dreamy Unicode fonts instantly. Copy and
              paste pastel, cute, and aesthetic styles for Instagram bios, TikTok,
              and Pinterest — free and easy to use.
            </p>
            <div className="footer__social">
              {SOCIAL_LINKS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  className="footer__social-icon"
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="footer__heading">Useful Links</p>
            <ul className="footer__links">
              <li className="footer__link"><Link to="/">Home</Link></li>
              <li className="footer__link"><Link to="/about">About Us</Link></li>
              <li className="footer__link"><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <p className="footer__heading">Tools</p>
            <ul className="footer__links">
              <li className="footer__link"><Link to="/">Aesthetic Font Generator</Link></li>
              <li className="footer__link"><Link to="/pastel-fonts">Pastel Fonts</Link></li>
              <li className="footer__link"><Link to="/cute-fonts">Cute Fonts</Link></li>
              <li className="footer__link"><Link to="/instagram-fonts">Instagram Fonts</Link></li>
              <li className="footer__link"><Link to="/bio-fonts">Bio Fonts</Link></li>
            </ul>
          </div>

          <div>
            <p className="footer__heading">Legal</p>
            <ul className="footer__links">
              <li className="footer__link"><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li className="footer__link"><Link to="/terms">Terms &amp; Conditions</Link></li>
              <li className="footer__link"><Link to="/disclaimer">Disclaimer</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          © 2026 Aesthetic Font Generator. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

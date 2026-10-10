import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="site">
      <div className="wrap">
        <div className="fl">
          <a href="/#generator">Generator</a>
          <a href="/#categories">Categories</a>
          <a href="/#borders">Borders</a>
          <a href="/#gaming">Gaming</a>
          <a href="/#faq">FAQ</a>
        </div>
        <div className="fl">
          <Link to="/cool-fonts">Cool Fonts</Link>
          <Link to="/fancy-fonts">Fancy Fonts</Link>
          <Link to="/instagram-fonts">Instagram Fonts</Link>
          <Link to="/facebook-fonts">Facebook Fonts</Link>
        </div>
        <div className="fl">
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms">Terms</Link>
        </div>
        <p className="fine">© 2026 Aesthetic Font Generator — free aesthetic copy &amp; paste fonts for Instagram, TikTok, Discord &amp; gaming. Made with ✨ and Unicode.</p>
      </div>
    </footer>
  );
}

import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="site">
      <div className="wrap nav">
        <Link className="logo" to="/">✨ AestheticFonts</Link>
        <nav className="nav-links">
          <a href="/#generator">Generator</a>
          <a href="/#categories">Categories</a>
          <a href="/#borders">Borders</a>
          <a href="/#gaming">Gaming</a>
          <a href="/#faq">FAQ</a>
        </nav>
      </div>
    </header>
  );
}

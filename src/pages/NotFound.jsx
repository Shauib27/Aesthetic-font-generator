import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import { NAV } from '../data/site.js';

export default function NotFound() {
  return (
    <>
      <Seo
        title="Page Not Found — Aesthetic Text Generator"
        description="The page you are looking for does not exist. Try the aesthetic font generator instead."
        path="/404/"
        noindex
      />
      <section className="content notfound">
        <p className="nf-code" aria-hidden="true">𝟒𝟎𝟒</p>
        <h1>Page not found</h1>
        <p>The link may be broken or the page may have moved.</p>
        <p><Link className="btn" to="/">Go to the font generator</Link></p>
        <h2>Popular pages</h2>
        <ul className="nf-links">
          {[...NAV.fonts.slice(0, 4), ...NAV.social.slice(0, 4)].map((n) => (
            <li key={n.to}><Link to={n.to}>{n.label}</Link></li>
          ))}
        </ul>
      </section>
    </>
  );
}

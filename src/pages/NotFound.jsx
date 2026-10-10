import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';

export default function NotFound() {
  return (
    <>
      <Seo
        title="Page Not Found — Aesthetic Font Generator"
        description="The page you are looking for does not exist. Try the font generator instead."
      />
      <section className="content" style={{ textAlign: 'center', padding: '4rem 0' }}>
        <h2>404 — Page not found</h2>
        <p>Looks like you followed a broken link or typed a URL that doesn't exist.</p>
        <p>
          <Link to="/" style={{ fontWeight: 700 }}>← Back to the Font Generator</Link>
        </p>
      </section>
    </>
  );
}

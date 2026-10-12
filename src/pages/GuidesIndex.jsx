import { Link } from 'react-router-dom';
import Seo, { breadcrumbLd } from '../components/Seo.jsx';
import { Breadcrumbs, LinkCards } from '../components/Blocks.jsx';
import { GUIDES } from '../content/guides.jsx';
import { NAV } from '../data/site.js';
import { linkInfo } from '../content/linkInfo.js';

export default function GuidesIndex() {
  const crumbs = [{ name: 'Home', path: '/' }, { name: 'Guides', path: '/guides/' }];
  return (
    <>
      <Seo
        title="Aesthetic Font Guides — Unicode Text, Bios & Compatibility"
        description="Practical guides to aesthetic and Unicode fonts: how they work, copying and pasting on any device, fixing boxes, safety and bio templates."
        path="/guides/"
        jsonLd={breadcrumbLd(crumbs)}
      />
      <Breadcrumbs items={crumbs} />
      <div className="hero">
        <h1>Aesthetic Font Guides</h1>
        <p className="lead">Short, practical answers about Unicode text styles — how they work, where they work and how to use them well.</p>
      </div>
      <section className="content">
        <ul className="guide-list big">
          {GUIDES.map((g) => (
            <li key={g.path}>
              <Link to={g.path}>{g.h1}</Link>
              <span>{g.summary}</span>
            </li>
          ))}
        </ul>
      </section>
      <LinkCards id="gi-social" title="Fonts by platform" items={NAV.social.map((n) => linkInfo(n.to))} />
    </>
  );
}

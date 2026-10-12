import { Link } from 'react-router-dom';
import Seo, { breadcrumbLd, faqLd } from '../components/Seo.jsx';
import Faq from '../components/Faq.jsx';
import ShareBar from '../components/ShareBar.jsx';
import { Breadcrumbs, LinkCards } from '../components/Blocks.jsx';
import { GUIDE_BY_PATH, GUIDES } from '../content/guides.jsx';
import { linkInfo } from '../content/linkInfo.js';
import { SITE_NAME, SITE_URL, absUrl, OG_IMAGE } from '../data/site.js';

export default function GuidePage({ path }) {
  const g = GUIDE_BY_PATH[path];
  const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'Guides', path: '/guides/' },
    { name: g.crumb, path: g.path },
  ];
  const article = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: g.h1,
    description: g.description,
    datePublished: g.published,
    dateModified: g.updated || g.published,
    mainEntityOfPage: absUrl(g.path),
    image: absUrl(OG_IMAGE),
    author: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL + '/' },
    publisher: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL + '/' },
  };
  const ld = [breadcrumbLd(crumbs), article];
  if (g.faq) ld.push(faqLd(g.faq));
  const others = GUIDES.filter((x) => x.path !== g.path).slice(0, 3);

  return (
    <>
      <Seo title={g.title} description={g.description} path={g.path} type="article" jsonLd={ld} />
      <Breadcrumbs items={crumbs} />
      <article className="guide">
        <header className="hero left">
          <h1>{g.h1}</h1>
          <p className="meta">Updated <time dateTime={g.updated || g.published}>{new Date((g.updated || g.published) + 'T00:00:00Z').toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' })}</time></p>
        </header>
        <div className="content prose">{g.body}</div>
        <aside className="cta">
          <p><strong>Try it:</strong> type your text once and copy any of 269 styles.</p>
          <Link className="btn" to="/">Open the font generator</Link>
        </aside>
        {g.faq && <Faq items={g.faq} />}
      </article>
      <LinkCards id="guide-related" title="Related pages" items={g.related.map(linkInfo)} />
      <LinkCards id="guide-more" title="More guides" items={others.map((o) => linkInfo(o.path))} />
      <ShareBar heading="Share this guide" title={g.h1} />
    </>
  );
}

import { Link } from 'react-router-dom';
import Seo, { breadcrumbLd, faqLd } from '../components/Seo.jsx';
import FontGenerator from '../components/FontGenerator.jsx';
import Faq from '../components/Faq.jsx';
import ShareBar from '../components/ShareBar.jsx';
import { Breadcrumbs, StyleShowcase, LinkCards, UnicodeNote } from '../components/Blocks.jsx';
import { LANDING_BY_PATH } from '../content/landings.jsx';
import { GUIDE_BY_PATH } from '../content/guides.jsx';
import { linkInfo } from '../content/linkInfo.js';
import { LAST_UPDATED } from '../data/site.js';

const formatDate = (d) => new Date(d + 'T00:00:00Z').toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });

export default function LandingPage({ path }) {
  const p = LANDING_BY_PATH[path];
  const crumbs = [{ name: 'Home', path: '/' }, { name: p.crumb, path: p.path }];

  return (
    <>
      <Seo
        title={p.title}
        description={p.description}
        path={p.path}
        jsonLd={[breadcrumbLd(crumbs), faqLd(p.faq)]}
      />
      <Breadcrumbs items={crumbs} />
      <div className="hero">
        <h1>{p.h1}</h1>
        <p className="lead">{p.lead}</p>
      </div>

      <FontGenerator recommended={{ label: p.picksLabel, ids: p.picks }} sample={p.sample} />
      <ShareBar compact title={p.h1 + ' — free copy & paste text styles'} />

      <div className="page-body">
        <section className="content">
          {p.intro}
          <UnicodeNote />
        </section>

        {p.showcase && (
          <section className="content">
            <h2>{p.showcase.title}</h2>
            <StyleShowcase ids={p.showcase.ids} sample={p.showcase.sample} />
          </section>
        )}

        {p.sections.map((s) => (
          <section className="content" key={s.h2}>
            <h2>{s.h2}</h2>
            {s.body}
          </section>
        ))}

        <section className="content">
          <h2>How to copy and paste</h2>
          <ol className="steps">
            {p.howTo.map((s) => <li key={s}>{s}</li>)}
          </ol>
          <h3>Compatibility</h3>
          <p>{p.compat}</p>
          <p className="small">Last reviewed <time dateTime={p.updated || LAST_UPDATED}>{formatDate(p.updated || LAST_UPDATED)}</time>.</p>
        </section>

        <Faq items={p.faq} />

        <LinkCards
          id="related-title"
          title="Related font styles"
          items={p.related.map(linkInfo)}
        />

        <section className="content">
          <h2>Helpful guides</h2>
          <ul className="guide-list">
            {p.guides.map((g) => (
              <li key={g}>
                <Link to={g}>{GUIDE_BY_PATH[g].h1}</Link>
                <span>{GUIDE_BY_PATH[g].summary}</span>
              </li>
            ))}
          </ul>
        </section>

        <ShareBar heading="Found this useful? Share it" title={p.h1 + ' — free copy & paste text styles'} />
      </div>
    </>
  );
}

import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from './App.jsx';
import { HeadContext, renderHead } from './components/Seo.jsx';
import { ROUTES } from './routes.js';
import { SITE_URL } from './data/site.js';

export { ROUTES, SITE_URL };

/** Render one route to { html, head } for the prerender script. */
export function render(url) {
  const collector = {};
  const html = renderToString(
    <HeadContext.Provider value={collector}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </HeadContext.Provider>
  );
  return { html, head: renderHead(collector.head) };
}

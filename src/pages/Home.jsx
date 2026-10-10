import Seo from '../components/Seo.jsx';
import FontGenerator from '../components/FontGenerator.jsx';
import ArticleContent from '../components/ArticleContent.jsx';
import Faq, { FAQ_JSONLD } from '../components/Faq.jsx';

const TITLE = 'Aesthetic Font Generator ✨ Copy & Paste 269+ Fonts Free';
const DESC =
  'Free aesthetic font generator: type your text and instantly copy 269+ stylish Unicode fonts — cursive, gothic, kawaii, vaporwave, glitch, bubble & more. Works on Instagram, TikTok, Discord, Free Fire & everywhere. No app needed.';

const WEBAPP_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Aesthetic Font Generator',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Any',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  description:
    'Free online tool that converts plain text into 269+ aesthetic Unicode font styles you can copy and paste anywhere.',
};

export default function Home() {
  return (
    <>
      <Seo title={TITLE} description={DESC} jsonLd={[WEBAPP_JSONLD, FAQ_JSONLD]} />
      <div className="hero">
        <h1>
          Aesthetic Font Generator ✨<br />
          Copy &amp; Paste 269+ Fonts Free
        </h1>
        <p className="lead">
          Type your text once — get it back in <strong>269+ aesthetic font styles</strong> instantly.
          Click any style to copy, then paste it on Instagram, TikTok, Discord, Free Fire, PUBG or
          anywhere. No app, no sign-up, no cost.
        </p>
      </div>

      <FontGenerator />

      <p className="tip">
        💡 <strong>Pro tip:</strong> tap the ⭐ on any style to pin it to your{' '}
        <strong>Favorites</strong> tab. Everything you copy is saved in the <strong>🕘 Recent</strong>{' '}
        tab — even after you close the page.
      </p>

      <ArticleContent />
      <Faq />
    </>
  );
}

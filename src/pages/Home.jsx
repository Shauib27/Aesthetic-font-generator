import Seo from '../components/Seo.jsx';
import FontGenerator from '../components/FontGenerator.jsx';
import ArticleContent from '../components/ArticleContent.jsx';
import Faq, { FAQ_JSONLD } from '../components/Faq.jsx';

const TITLE = 'Aesthetic Font #𝟙 ✨ 𝓒𝓸𝓹𝔂 & 𝓟𝓪𝓼𝓽𝓮 💫 250+ Fonts Free';
const DESC =
  'Create aesthetic fonts for your bio, username, captions, and posts. Copy and paste fancy text, cute symbols, and stylish fonts instantly for free.';

const WEBAPP_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Aesthetic Font Generator',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Any',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  description: DESC,
};

export default function Home() {
  return (
    <>
      <Seo title={TITLE} description={DESC} jsonLd={[WEBAPP_JSONLD, FAQ_JSONLD]} />
      <div className="hero">
        <h1>Aesthetic Font ➜ 《𝕮𝖔𝓅𝔂 ⓐⓝⓓ 𝓟𝓪𝓼𝓽𝓮》Generator</h1>
        <p className="intro">
          An aesthetic font generator is a free online tool that utilises the Unicode standard to
          convert plain text into stylised, copy-and-paste fonts. There is no need for an app,
          installation or account. Every day, millions of users on Instagram, TikTok, Discord, Free
          Fire, PUBG, and Roblox are styling their bios, usernames, and nicknames with copy-paste
          aesthetic fonts that make their profiles impossible to scroll past.
        </p>
        <p className="intro">
          Soft cursive script for an Instagram bio, Gothic blackletter for a Free Fire username,
          kawaii symbols for a TikTok nickname, or coquette-style text for a Pinterest profile, this
          tool outputs 150+ aesthetic font styles instantly. Type your text, browse.
        </p>
      </div>

      <FontGenerator />

      <ArticleContent />
      <Faq />
    </>
  );
}

import { Link } from 'react-router-dom';
import Seo, { faqLd } from '../components/Seo.jsx';
import FontGenerator from '../components/FontGenerator.jsx';
import Faq from '../components/Faq.jsx';
import ShareBar from '../components/ShareBar.jsx';
import { LinkCards, StyleShowcase } from '../components/Blocks.jsx';
import { POPULAR, STYLE_COUNT } from '../data/styleIndex.js';
import { NAV, SITE_NAME, SITE_URL, absUrl } from '../data/site.js';
import { linkInfo } from '../content/linkInfo.js';
import { GUIDES } from '../content/guides.jsx';
import {
  WhatAre, HowItWorks, UnicodeExplained, Examples, Compatibility, Choosing, KeyboardApps, OtherLanguages,
} from '../content/homeSections.jsx';

const TITLE = 'Aesthetic Font Generator — 260+ Fonts to Copy & Paste';
const DESC =
  'Free aesthetic font generator: type once, get 260+ cursive, cute, gothic and bubble text styles, and copy and paste them into Instagram, TikTok or Discord.';

export const HOME_FAQ = [
  { q: 'What is an aesthetic font generator?', a: 'It is a free online tool that converts regular text into stylized Unicode characters, such as script, gothic or bubble letters, which you can copy and paste anywhere text is accepted.' },
  { q: 'Are aesthetic fonts free to use?', a: 'Yes. The generator is free, and Unicode is an open international standard, so there are no licence fees for using the characters.' },
  { q: 'Are these real fonts I can download?', a: 'No. They are Unicode text styles, not font files. Nothing is downloaded or installed; you copy characters that already look styled.' },
  { q: 'How do I copy and paste aesthetic fonts?', a: 'Type your text in the generator, press Copy next to the style you like, then long-press (phone) or right-click (computer) the text field in your app and choose Paste.' },
  { q: 'Why do some aesthetic fonts show as boxes on certain devices?', a: 'The device viewing the text has no font for that character. Choose widely supported styles such as bold, italic, script or small caps, or update the device.' },
  { q: 'Do aesthetic fonts work on iPhone and Android?', a: 'Yes. Current versions of iOS and Android display all common styles. Older devices may show boxes for rare symbols and newer emoji.' },
  { q: 'Can I use aesthetic fonts in Free Fire, PUBG and Roblox?', a: 'Free Fire and PUBG Mobile accept many styled characters, so test them in the rename preview before paying for a name change. Roblox usernames only allow letters, numbers and one underscore.' },
  { q: 'Do aesthetic fonts work in an Instagram bio?', a: 'Yes. Instagram accepts Unicode in your name, bio, captions and comments on iOS, Android and the web. Only the @username is limited to plain letters, numbers, periods and underscores.' },
  { q: 'Why does my fancy text use up the character limit so fast?', a: 'Many styled letters are stored as two UTF-16 code units, and some apps count those units, so styled text can use about twice the space of plain text.' },
  { q: 'Is there an aesthetic font keyboard app?', a: 'Third-party keyboard apps with fancy fonts exist for iPhone and Android. We do not make one; if you install one, check its privacy policy, because keyboards with full access can see what you type.' },
  { q: 'What’s the difference between aesthetic fonts and emojis?', a: 'Emojis are picture characters drawn in colour by each platform. Aesthetic fonts are letter-like characters that change how your words look. Both are Unicode text, and both can look slightly different on different devices.' },
  { q: 'Are aesthetic fonts accessible to screen readers?', a: 'Often not. Screen readers may read each styled letter by its Unicode name or skip it, so avoid styling essential information.' },
  { q: 'Can I use aesthetic fonts in Google Docs and Excel?', a: 'Yes. Paste Unicode text into any document or cell. It works for headings and labels, but styled words will not match searches or spell-check.' },
  { q: 'What is tulisan aesthetic?', a: 'It is the Indonesian and Malay term for aesthetic text: stylized Unicode characters used for nama aesthetic, Instagram bios and TikTok names.' },
];

const WEBSITE_LD = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE_NAME,
  url: SITE_URL + '/',
  inLanguage: 'en',
};

const WEBAPP_LD = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Aesthetic Font Generator',
  url: SITE_URL + '/',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Any (web browser)',
  browserRequirements: 'Requires JavaScript',
  isAccessibleForFree: true,
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  description: DESC,
  image: absUrl('/og-image.png'),
  featureList: 'Live preview of 269 Unicode text styles, one-tap copy, style search, category filters, favorites, recently copied styles',
};

const CATEGORY_LINKS = ['/cursive-fonts/', '/cute-fonts/', '/gothic-fonts/', '/bold-fonts/', '/italic-text/', '/bubble-fonts/', '/small-caps-fonts/', '/glitch-text/', '/strikethrough-text/', '/upside-down-text/'];
const GENERATOR_LINKS = ['/fancy-fonts/', '/cool-fonts/', '/stylish-text/', '/symbols/'];

/* Page order: H1 → generator → popular styles → categories → platforms → what/how/Unicode →
   examples → compatibility → choosing → related generators → guides → FAQ → share. */
export default function Home() {
  return (
    <>
      <Seo title={TITLE} description={DESC} path="/" jsonLd={[WEBSITE_LD, WEBAPP_LD, faqLd(HOME_FAQ)]} />
      <div className="hero">
        <h1>Aesthetic Font Generator — Copy &amp; Paste Aesthetic Fonts</h1>
        <p className="lead">
          Type your text once and see it in {STYLE_COUNT} aesthetic styles — cursive, cute, gothic, bubble and more.
          Each style is made of Unicode characters, so it pastes into Instagram, TikTok, Discord and chats.
          Free, with nothing to install.
        </p>
      </div>

      <FontGenerator />
      <ShareBar compact />

      <div className="page-body">
        <section className="content" aria-labelledby="popular-title">
          <h2 id="popular-title">Popular aesthetic font styles</h2>
          <p>The styles people copy most, shown with the word “Aesthetic”. Type in the box above to see your own text.</p>
          <StyleShowcase ids={POPULAR.slice(0, 10)} sample="Aesthetic" />
        </section>

        <LinkCards id="categories-title" title="Browse font categories" items={CATEGORY_LINKS.map(linkInfo)} />
        <LinkCards id="platforms-title" title="Fonts for Instagram, TikTok, Discord and more" items={NAV.social.map((n) => linkInfo(n.to))} />

        <WhatAre />
        <HowItWorks />
        <UnicodeExplained />
        <Examples />
        <Compatibility />
        <Choosing />
        <KeyboardApps />

        <LinkCards id="related-title" title="Related generators" items={GENERATOR_LINKS.map(linkInfo)} />

        <section className="content" aria-labelledby="guides-title">
          <h2 id="guides-title">Helpful guides</h2>
          <ul className="guide-list">
            {GUIDES.map((g) => (
              <li key={g.path}>
                <Link to={g.path}>{g.h1}</Link>
                <span>{g.summary}</span>
              </li>
            ))}
          </ul>
        </section>

        <OtherLanguages />
        <Faq items={HOME_FAQ} title="Aesthetic font FAQ" />
        <ShareBar heading="Share the aesthetic font generator" />
      </div>
    </>
  );
}

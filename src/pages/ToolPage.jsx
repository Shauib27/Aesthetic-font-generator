import Seo from '../components/Seo.jsx';
import FontGenerator from '../components/FontGenerator.jsx';

const PAGES = {
  'cool-fonts': {
    title: 'Cool Fonts — Copy & Paste Cool Text Styles',
    desc: 'Generate 269+ cool fonts instantly. Type your text and copy stylish Unicode fonts for social media, gaming, and messaging — free, no app needed.',
    h1: 'Cool Fonts — Copy & Paste Cool Text',
    intro: [
      'Cool fonts are the fastest way to make your text stand out anywhere plain text is allowed. This generator turns your words into 269+ cool Unicode styles — bold, italic, glitch, vaporwave, and more — that you can copy and paste in seconds.',
      'Most apps and games give you zero font options. That is exactly the gap cool Unicode fonts fill: the style is baked into the characters themselves, so it works in bios, comments, usernames, and chats without any app or installation.',
      'Try typing your name above, then filter by the Gaming or Glitch tabs for the boldest looks, or Classic for styles that render perfectly on every device.',
    ],
  },
  'fancy-fonts': {
    title: 'Fancy Fonts — Copy & Paste Fancy Stylish Text',
    desc: 'Create fancy text with 269+ stylish Unicode fonts. Cursive, script, double-struck and decorative styles — copy and paste anywhere, free.',
    h1: 'Fancy Fonts — Copy & Paste Fancy Text',
    intro: [
      'Fancy fonts turn ordinary words into something worth reading twice. From elegant cursive script to double-struck bold and decorative framed styles, this generator gives you 269+ fancy Unicode options in one place.',
      'Fancy text works best when you use it sparingly: one styled headline, one decorated name, one elegant quote. The contrast between fancy and plain text is what makes it pop.',
      'Type your text above and browse the Cute, Effects, and Frames tabs for the fanciest styles — then click any card to copy it instantly.',
    ],
  },
  'instagram-fonts': {
    title: 'Instagram Fonts — Stylish Fonts for Bio & Captions',
    desc: '269+ Instagram fonts for your bio, captions, and comments. Cursive, small caps, bubble and aesthetic Unicode styles — copy and paste, free.',
    h1: 'Instagram Fonts — Bio, Captions & Comments',
    intro: [
      'Your Instagram bio is 150 characters of first impression — make every one count. Instagram fonts made from Unicode characters let you style your name, bio lines, and captions without any app.',
      'The styles that perform best on Instagram: cursive script for names, small caps for descriptors, and symbol dividers between bio lines. Avoid heavy glitch effects in bios — they can break the mobile layout.',
      'Type your bio text in the generator above, pick a style you love, and paste it straight into your profile. It works in bios, captions, comments, and story text alike.',
    ],
  },
  'facebook-fonts': {
    title: 'Facebook Fonts — Stylish Fonts for Posts & Bio',
    desc: '269+ Facebook fonts for posts, comments, and your bio. Bold, cursive, and aesthetic Unicode styles that work in the Facebook feed — copy and paste, free.',
    h1: 'Facebook Fonts — Posts, Comments & Bio',
    intro: [
      'Facebook has no built-in font styling — but Unicode fonts work everywhere on the platform: your name field, bio, posts, and comments. That is why stylish Facebook fonts made from Unicode characters are so popular.',
      'In the plain-text Facebook feed, bold and cursive styles stand out the most. Use a bold Unicode headline to anchor a long post, or a cursive line to add warmth to a personal update.',
      'Generate your styled text above, copy it with one click, and paste it into Facebook. No app, no extension, no sign-up — it just works.',
    ],
  },
};

export { PAGES };

export default function ToolPage({ pageKey }) {
  const p = PAGES[pageKey];
  return (
    <>
      <Seo title={p.title} description={p.desc} />
      <div className="hero">
        <h1>{p.h1}</h1>
        <p className="lead">{p.desc}</p>
      </div>
      <FontGenerator />
      <section className="content">
        {p.intro.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </section>
    </>
  );
}

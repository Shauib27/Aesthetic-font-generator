import { Link } from 'react-router-dom';
import Seo, { breadcrumbLd, faqLd } from '../components/Seo.jsx';
import Faq from '../components/Faq.jsx';
import ShareBar from '../components/ShareBar.jsx';
import { Breadcrumbs, CopyLine, LinkCards } from '../components/Blocks.jsx';
import { useCopy } from '../copy.jsx';
import { linkInfo } from '../content/linkInfo.js';

/* Copyable symbol collections. Single symbols copy on tap; combos have a Copy button. */
const GROUPS = [
  { id: 'hearts', title: 'Heart symbols', note: 'Outline hearts (♡) look softer than filled ones (♥ ❤).', chars: '♡ ♥ ❤ ❥ ❣ ღ ɞ ʚ ⸜♡⸝ ♡︎ 💕 💖 💗 🤍', combos: ['ʚ♡ɞ', '⸜(｡˃ ᵕ ˂ )⸝♡', '♡⃛', '— ♡ —'] },
  { id: 'stars', title: 'Star & sparkle symbols', note: 'Four-pointed stars (✦ ✧) are the classic “aesthetic” sparkle.', chars: '✦ ✧ ★ ☆ ✩ ✪ ✫ ✬ ✭ ✮ ✯ ✰ ⋆ ˚ ₊ ⁺ ✶ ✷ ✸ ✹ ❋ ✨ 🌟 💫', combos: ['⋆｡˚', '˚₊‧꒰ა ☆ ໒꒱ ‧₊˚', '✧･ﾟ: *✧･ﾟ:*', '₊˚⊹'] },
  { id: 'flowers', title: 'Flower & nature symbols', note: 'Great for cottagecore and soft bios.', chars: '✿ ❀ ❁ ✾ ❃ ❋ ⚘ ❦ ❧ ☘ 🌸 🌷 🌼 🌿 🍃 🍄', combos: ['⊱❀⊰', '༄', '✿ ❀ ✿', '❀˖°'] },
  { id: 'moon', title: 'Moon, weather & sky', note: 'Night and celestial symbols for dreamy profiles.', chars: '☾ ☽ ☼ ☀ ☁ ☂ ☄ ⛅ ⁂ ° 🌙 🌕 🌑 ☁︎ ❄', combos: ['☾⋆', '⋆⁺₊⋆ ☾ ⋆⁺₊⋆', '☁︎ ⋆｡°✩'] },
  { id: 'arrows', title: 'Arrows & pointers', note: 'Useful for “link below” lines in bios.', chars: '→ ← ↑ ↓ ↳ ↪ ➜ ➤ ➺ ➳ ⇢ ⟶ ↬ ↫ ⤷ ▸ ▹ ►', combos: ['↳ link below', '⇢ ˗ˏˋ ˎˊ˗', '╰┈➤'] },
  { id: 'brackets', title: 'Brackets & frames', note: 'Wrap a name or tag. Japanese brackets are the most popular.', chars: '【 】 『 』 「 」 《 》 〔 〕 ⟦ ⟧ ⦅ ⦆ ꧁ ꧂ ⫷ ⫸ ⊰ ⊱', combos: ['꧁ name ꧂', '【 name 】', '『 name 』', '★彡 name 彡★'] },
  { id: 'dividers', title: 'Lines & dividers', note: 'Separate bio lines or sections of a post.', chars: '│ ┃ ─ ━ ═ ┈ ┄ ⋯ · • ∙ ◦ ⁘ ⁙ ⁚', combos: ['─────────', '⋆｡°✩ ─── ✩°｡⋆', '︶︶︶︶︶︶', '┈┈┈┈┈┈ ⋆ ┈┈┈┈┈┈', '•─────⋅☾ ☽⋅─────•'] },
  { id: 'shapes', title: 'Shapes & bullets', note: 'Clean bullet points for lists in posts.', chars: '◆ ◇ ■ □ ▪ ▫ ● ○ ◎ ◉ ▲ △ ▼ ▽ ◈ ⬥ ⬦ ✓ ✔ ✗ ✘', combos: ['◆ point one', '✔ done'] },
  { id: 'kaomoji', title: 'Kaomoji faces', note: 'Japanese-style text faces made from characters.', chars: '', combos: ['(◕‿◕)', '(｡•̀ᴗ-)✧', '(っ◔◡◔)っ ♥', 'ʕ•ᴥ•ʔ', '(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧', '(╯°□°）╯︵ ┻━┻', '¯\\_(ツ)_/¯', '(づ｡◕‿‿◕｡)づ', '( ˘ ³˘)♥', 'ᕙ(⇀‸↼‶)ᕗ'] },
];

const FAQ = [
  { q: 'How do I copy a symbol?', a: 'Tap or click any single symbol to copy it, or use the Copy button next to a combination. Then paste it wherever you like.' },
  { q: 'Why does a symbol look different on my phone?', a: 'Each device draws symbols with its own fonts, and some symbols (like ♡) can display as a coloured emoji on certain phones. The character itself is the same.' },
  { q: 'Can I use symbols in my username?', a: 'Usually not in the unique @username on Instagram, TikTok or Discord, but symbols work in display names, bios, posts and messages.' },
];

function SymbolGrid({ chars, label }) {
  const { copy } = useCopy();
  const list = chars.split(' ').filter(Boolean);
  return (
    <ul className="sym-grid" aria-label={label}>
      {list.map((c) => (
        <li key={c}>
          <button type="button" className="sym" onClick={() => copy(c, 'Copied ' + c)} aria-label={'Copy symbol ' + c}>{c}</button>
        </li>
      ))}
    </ul>
  );
}

export default function Symbols() {
  const crumbs = [{ name: 'Home', path: '/' }, { name: 'Aesthetic Symbols', path: '/symbols/' }];
  return (
    <>
      <Seo
        title="Aesthetic Symbols — Hearts, Stars & Dividers to Copy"
        description="Copy and paste aesthetic symbols: hearts ♡, stars ✦, flowers ✿, moons ☾, brackets ꧁꧂, dividers and kaomoji. One tap to copy, free."
        path="/symbols/"
        jsonLd={[breadcrumbLd(crumbs), faqLd(FAQ)]}
      />
      <Breadcrumbs items={crumbs} />
      <div className="hero">
        <h1>Aesthetic Symbols to Copy &amp; Paste</h1>
        <p className="lead">Tap a symbol to copy it. Combine symbols with a styled name from the <Link to="/">font generator</Link> to build a bio, username frame or divider.</p>
      </div>
      <nav className="chips" aria-label="Symbol groups">
        {GROUPS.map((g) => <a key={g.id} href={'#' + g.id} className="chip">{g.title.replace(/ symbols?$/i, '')}</a>)}
      </nav>
      <div className="page-body">
        {GROUPS.map((g) => (
          <section className="content sym-section" key={g.id} id={g.id}>
            <h2>{g.title}</h2>
            <p>{g.note}</p>
            {g.chars && <SymbolGrid chars={g.chars} label={g.title} />}
            {g.combos.length > 0 && (
              <div className="combos">
                {g.combos.map((c) => <CopyLine key={c} text={c} />)}
              </div>
            )}
          </section>
        ))}
        <section className="content">
          <h2>How to use symbols well</h2>
          <ul>
            <li>Pick one or two symbols and repeat them, rather than mixing many.</li>
            <li>Use older symbols (✦ ♡ ✿ ☾) when you need them to display everywhere; newer emoji can appear as boxes on old devices.</li>
            <li>Screen readers announce symbols by name (“white heart suit”), so avoid long rows of them in important text.</li>
          </ul>
        </section>
        <Faq items={FAQ} />
        <LinkCards id="sym-related" title="Pair symbols with a font style" items={['/', '/cute-fonts/', '/gaming-fonts/', '/guides/aesthetic-bio-ideas/'].map(linkInfo)} />
        <ShareBar heading="Share these symbols" title="Aesthetic symbols to copy and paste" />
      </div>
    </>
  );
}

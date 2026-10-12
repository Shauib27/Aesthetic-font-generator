import { Link } from 'react-router-dom';
import { CopyLine, StyleShowcase, UnicodeNote } from '../components/Blocks.jsx';
import { ids } from '../data/styleIndex.js';

/* Homepage educational content (replaces the former long HTML article).
   Order follows the user journey: what → how → Unicode → examples → compatibility → choosing.
   Platform and category detail lives on the dedicated pages; here it is summarised in
   tables that link to them, so the homepage doesn't compete with those pages. */

const AZ = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz';

export function WhatAre() {
  return (
    <section className="content" aria-labelledby="what-title">
      <h2 id="what-title">What are aesthetic fonts?</h2>
      <p className="answer">
        Aesthetic fonts are stylized text made from special Unicode characters that look like decorative letters —
        𝓈𝒸𝓇𝒾𝓅𝓉, 𝔤𝔬𝔱𝔥𝔦𝔠, ⓑⓤⓑⓑⓛⓔ or ꜱᴍᴀʟʟ ᴄᴀᴘꜱ. Because the result is text, not an image or a font file, you can copy
        it and paste it into bios, usernames, captions and messages.
      </p>
      <p>
        People also call them fancy text, stylish text, copy and paste fonts or Unicode fonts. All of these names describe the
        same idea: the style is built into the characters, so it survives copy and paste into apps that have no font menu,
        such as Instagram, TikTok or WhatsApp.
      </p>
      <table className="cmp">
        <caption className="sr-only">Aesthetic fonts compared with regular fonts</caption>
        <thead><tr><th></th><th>Regular font</th><th>Aesthetic (Unicode) font</th></tr></thead>
        <tbody>
          <tr><td>What it is</td><td>A font file (.ttf, .otf) installed on a device</td><td>Different characters from the Unicode standard</td></tr>
          <tr><td>Keeps its style when pasted?</td><td>No — the app’s own font takes over</td><td>Yes — the characters themselves look styled</td></tr>
          <tr><td>Needs installing?</td><td>Yes</td><td>No</td></tr>
          <tr><td>Searchable and screen-reader friendly?</td><td>Yes</td><td>Often not</td></tr>
        </tbody>
      </table>
      <UnicodeNote />
    </section>
  );
}

export function HowItWorks() {
  return (
    <section className="content" aria-labelledby="how-title">
      <h2 id="how-title">How the aesthetic font generator works</h2>
      <ol className="steps">
        <li><strong>Type</strong> your name, bio line or caption in the box at the top. Nothing is sent to a server.</li>
        <li><strong>The generator swaps each letter</strong> for a matching Unicode character in every style (A → 𝐀, a → 𝒶) and adds frames or symbols for decorated styles.</li>
        <li><strong>Pick a style</strong> — filter by category, search for a word like “cursive”, or star favorites.</li>
        <li><strong>Copy</strong> with the Copy button and <strong>paste</strong> into your app. The style stays because it is part of the text.</li>
      </ol>
      <p>More about the tool, its limits and how we check information: <Link to="/about/">about this site</Link>.</p>
      <h3>Why letters, but not punctuation, change</h3>
      <p>
        Unicode only contains styled versions of A–Z, a–z and (for some styles) 0–9. Punctuation, emoji and letters with accents
        are left as they are, and a few styles are missing letters — for example, there is no small-capital X — so the generator
        keeps the closest normal letter.
      </p>
    </section>
  );
}

export function UnicodeExplained() {
  return (
    <section className="content" aria-labelledby="unicode-title">
      <h2 id="unicode-title">The Unicode behind aesthetic text</h2>
      <p className="answer">
        Unicode is the international standard, maintained by the Unicode Consortium, that gives every character a unique number
        called a code point. A plain “A” is U+0041; the bold “𝐀” is a different character, U+1D400. Aesthetic fonts work because
        Unicode already contains these styled look-alike letters.
      </p>
      <table className="cmp">
        <caption className="sr-only">Where styled letters come from in Unicode</caption>
        <thead><tr><th>Unicode block</th><th>Example</th><th>Original purpose</th></tr></thead>
        <tbody>
          <tr><td>Mathematical Alphanumeric Symbols</td><td>𝐁𝐨𝐥𝐝 · 𝓢𝓬𝓻𝓲𝓹𝓽 · 𝔉𝔯𝔞𝔨𝔱𝔲𝔯</td><td>Maths notation</td></tr>
          <tr><td>Enclosed Alphanumerics</td><td>ⓐⓑⓒ ①②③</td><td>Labels and numbered lists</td></tr>
          <tr><td>Phonetic Extensions (IPA)</td><td>ᴀʙᴄ · ᵃᵇᶜ</td><td>Writing pronunciation</td></tr>
          <tr><td>Halfwidth and Fullwidth Forms</td><td>Ａｅｓｔｈｅｔｉｃ</td><td>Latin text next to Chinese and Japanese</td></tr>
          <tr><td>Combining Diacritical Marks</td><td>s̶t̶r̶i̶k̶e̶ · u̲n̲d̲e̲r̲</td><td>Accents attached to letters</td></tr>
        </tbody>
      </table>
      <p>
        Your phone or computer draws each character with its own fonts, so shapes vary slightly between devices. Read the full
        explanation in <Link to="/guides/unicode-fonts-explained/">Unicode fonts explained</Link>.
      </p>
    </section>
  );
}

const BORDERS = [
  ['★彡 your text 彡★', 'star'], ['⋆═✩═⋆ your text ⋆═✩═⋆', 'galaxy'], ['꧁༒ your text ༒꧂', 'royal'], ['♛━☆ your text ☆━♛', 'crown'],
  ['⊱❀⊰ your text ⊱❀⊰', 'floral'], ['˜”°•✿•°”˜ your text ˜”°•✿•°”˜', 'soft'], ['▂▃▅▇█ your text █▇▅▃▂', 'bold'], ['✧˚ your text ˚✧', 'kawaii'],
  ['ʚ♡ɞ your text ʚ♡ɞ', 'heart'], ['☽ your text ☾', 'moon'], ['╰•★★ your text ★★•╯', 'star corner'], ['⚡ your text ⚡', 'lightning'],
];
const NUMBERS = [['𝟏𝟐𝟑𝟒𝟓', 'bold'], ['①②③④⑤', 'circled'], ['𝟙𝟚𝟛𝟜𝟝', 'double-struck'], ['⑴⑵⑶⑷⑸', 'parenthesized'], ['¹²³⁴⁵', 'superscript'], ['₁₂₃₄₅', 'subscript']];
const BIOS = [
  ['⋆｡˚ Your Name ˚｡⋆\ndreamer • creator • storyteller\n✿ she/her • soft life ✿', 'soft & dreamy'],
  ['꧁ YOUR NAME ꧂\nMaking things happen\n✦ Creator • Founder ✦', 'bold & confident'],
  ['꧁☬DARKNAME☬꧂\n▬▬▬▬▬▬▬▬▬▬\nTop rank • squad leader • gg only', 'gaming'],
  ['🎀 your name 🎀\n♡ bows & blush ♡\n✨ dreaming always ✨', 'coquette'],
];

export function Examples() {
  return (
    <section className="content" aria-labelledby="examples-title">
      <h2 id="examples-title">Aesthetic font examples to copy</h2>
      <h3>Aesthetic alphabet A–Z</h3>
      <p>See every letter before you choose a style for your name.</p>
      <StyleShowcase ids={ids('Bold Script', 'Gothic', 'Small Caps', 'Double-Struck', 'Fullwidth')} sample={AZ} />
      <h3>Number fonts</h3>
      <p>Only some styles include digits. These work for dates, levels and rankings — for example “Level ①⓪⓪”.</p>
      <div className="combos">{NUMBERS.map(([t, l]) => <CopyLine key={l} text={t} label={l} />)}</div>
      <h3>Decorative borders and frames</h3>
      <p>Replace “your text” with a styled name from the generator. For single symbols, see <Link to="/symbols/">aesthetic symbols</Link>.</p>
      <div className="combos two-col">{BORDERS.map(([t, l]) => <CopyLine key={l} text={t} label={l} />)}</div>
      <h3>Aesthetic bio templates</h3>
      <p>One styled line, a few plain lines and one repeated symbol. More layouts in <Link to="/guides/aesthetic-bio-ideas/">aesthetic bio ideas</Link>.</p>
      <div className="combos">{BIOS.map(([t, l]) => <CopyLine key={l} text={t} label={l} />)}</div>
    </section>
  );
}

const PLATFORMS = [
  ['Instagram', 'Name, bio, captions, comments', '@username', '/instagram-fonts/'],
  ['TikTok', 'Name, bio, comments', '@username', '/tiktok-fonts/'],
  ['Discord', 'Display name, server nickname, channels, messages', 'Unique username', '/discord-fonts/'],
  ['WhatsApp', 'Messages, name, About, group names', '—', '/whatsapp-fonts/'],
  ['Facebook', 'Posts, comments, intro', 'Profile name (name policy)', '/facebook-fonts/'],
  ['X (Twitter)', 'Display name, bio, posts', '@handle', '/twitter-fonts/'],
  ['Games', 'Many nickname fields (Free Fire, Steam…)', 'Roblox, Minecraft usernames', '/gaming-fonts/'],
];

export function Compatibility() {
  return (
    <section className="content" aria-labelledby="compat-title">
      <h2 id="compat-title">Where aesthetic fonts work</h2>
      <p className="answer">
        Aesthetic fonts work almost anywhere you can type text — bios, display names, captions, comments and chats — on current
        iPhone, Android, Windows and Mac devices. They usually don’t work in unique usernames, which only accept basic letters,
        numbers, periods and underscores.
      </p>
      <table className="cmp">
        <caption className="sr-only">Where aesthetic fonts are accepted on popular platforms</caption>
        <thead><tr><th>Platform</th><th>Works in</th><th>Usually rejected in</th></tr></thead>
        <tbody>
          {PLATFORMS.map(([p, ok, no, to]) => (
            <tr key={p}><td><Link to={to}>{p} fonts</Link></td><td>{ok}</td><td>{no}</td></tr>
          ))}
        </tbody>
      </table>
      <h3>If you see boxes or question marks</h3>
      <p>
        The device viewing the text has no font for that character. Bold, italic, script and small caps are the safest choices; newer
        emoji and rare symbols are the most likely to fail. See <Link to="/guides/why-fonts-show-as-boxes/">why fonts show as boxes</Link>.
      </p>
      <h3>Screen readers and search</h3>
      <p>
        Screen readers may read a styled letter by its Unicode name (“mathematical bold capital A”) or skip it, and search won’t match
        styled words. Style a name or a heading, not information people need. More in <Link to="/guides/are-fancy-fonts-safe/">are fancy fonts safe?</Link>
      </p>
      <h3>Character limits</h3>
      <p>
        Many styled letters count as two characters in apps that measure length in UTF-16 code units, so bios fill up faster. See{' '}
        <Link to="/guides/fancy-text-character-limits/">why fancy text uses more characters</Link>.
      </p>
    </section>
  );
}

export function Choosing() {
  return (
    <section className="content" aria-labelledby="choose-title">
      <h2 id="choose-title">How to choose the right aesthetic font</h2>
      <table className="cmp">
        <caption className="sr-only">Font style by vibe</caption>
        <thead><tr><th>Your vibe</th><th>Try</th><th>Example</th></tr></thead>
        <tbody>
          <tr><td>Soft &amp; dreamy</td><td><Link to="/cursive-fonts/">Cursive script</Link> + a soft frame</td><td>₊˚♡˚₊ 𝓜𝓲𝓪 ₊˚♡˚₊</td></tr>
          <tr><td>Dark &amp; edgy</td><td><Link to="/gothic-fonts/">Gothic</Link> or <Link to="/glitch-text/">glitch</Link></td><td>𝕹𝖔𝖛𝖆</td></tr>
          <tr><td>Cute &amp; playful</td><td><Link to="/cute-fonts/">Kawaii</Link> or <Link to="/bubble-fonts/">bubble letters</Link></td><td>ⓜⓘⓐ</td></tr>
          <tr><td>Clean &amp; professional</td><td><Link to="/small-caps-fonts/">Small caps</Link> or <Link to="/bold-fonts/">bold sans</Link></td><td>ᴍɪᴀ ʀᴏꜱᴇ</td></tr>
          <tr><td>Retro / vaporwave</td><td>Fullwidth text</td><td>Ｍｉａ</td></tr>
        </tbody>
      </table>
      <ul>
        <li><strong>One-second rule:</strong> if you can’t read it in a second, nobody else will.</li>
        <li><strong>One or two styled elements:</strong> a styled name plus one decorated line is enough.</li>
        <li><strong>Preview on your phone</strong> before saving a name you can only change occasionally.</li>
      </ul>
    </section>
  );
}

export function KeyboardApps() {
  return (
    <section className="content" aria-labelledby="kb-title">
      <h2 id="kb-title">Font keyboard apps vs a browser generator</h2>
      <p>
        Third-party keyboard apps for iPhone and Android can add fancy fonts while you type. We don’t make one. A browser tool like
        this needs no install or permissions; a keyboard is faster for daily typing but, on iPhone, “Allow Full Access” lets it send
        what you type over the internet — read its privacy policy first.
      </p>
      <table className="cmp">
        <thead><tr><th></th><th>Browser generator</th><th>Keyboard app</th></tr></thead>
        <tbody>
          <tr><td>Styles</td><td>{'269, all visible at once'}</td><td>Usually fewer</td></tr>
          <tr><td>Install / permissions</td><td>None</td><td>Required</td></tr>
          <tr><td>Best for</td><td>Building a bio or name</td><td>Quick everyday messages</td></tr>
        </tbody>
      </table>
    </section>
  );
}

export function OtherLanguages() {
  return (
    <section className="content" aria-labelledby="lang-title">
      <h2 id="lang-title">Aesthetic text in other languages</h2>
      <div lang="id">
        <h3>Tulisan aesthetic (Bahasa Indonesia)</h3>
        <p>
          Tulisan aesthetic adalah teks bergaya yang dibuat dari karakter Unicode, bukan font yang perlu diinstal. Ketik nama kamu di
          kotak di atas, pilih gaya yang kamu suka, lalu salin dan tempel ke bio Instagram, nama TikTok atau nickname game.
        </p>
      </div>
      <div lang="fr">
        <h3>Écriture aesthetic (Français)</h3>
        <p>
          L’écriture aesthetic est un texte stylisé créé avec des caractères Unicode. Tapez votre texte ci-dessus, choisissez un style,
          puis copiez-collez-le dans votre bio Instagram ou votre pseudo TikTok. Aucune installation n’est nécessaire.
        </p>
      </div>
    </section>
  );
}

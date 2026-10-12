import { Link } from 'react-router-dom';
import { CopyLine } from '../components/Blocks.jsx';

/* Long-form guides. Each opens with a short direct answer, then expands with
   steps, tables and examples. Article JSON-LD is generated in pages/GuidePage.jsx. */

export const GUIDES = [
  {
    path: '/guides/unicode-fonts-explained/',
    crumb: 'Unicode fonts explained',
    title: 'What Are Aesthetic Fonts? Unicode Fonts Explained',
    description: 'What aesthetic and Unicode fonts really are, how a font generator works, and how they differ from real fonts — with examples and a comparison table.',
    h1: 'What Are Aesthetic Fonts? How Unicode Text Styles Work',
    summary: 'The difference between Unicode text styles and real fonts, and what a generator actually does.',
    published: '2026-10-12',
    body: (
      <>
        <h2>The short answer</h2>
        <p className="answer">An aesthetic font is stylized text made of special Unicode characters that look like decorative letters. Because the result is text rather than an image or a font file, you can copy it and paste it into bios, usernames and messages where you can’t normally change the font.</p>

        <h2>Real fonts vs Unicode “fonts”</h2>
        <p>A real font is a file (like a .ttf) that tells a device how to draw letters. When you change the font in a document, the letters stay the same; only their drawing changes. That formatting is lost when you paste into an app such as Instagram, which uses its own font.</p>
        <p>A Unicode style works differently. It swaps each letter for a <em>different character</em>. The bold “𝐀” you get from a generator is not “A” in a bold font — it is a separate character called MATHEMATICAL BOLD CAPITAL A, code point U+1D400.</p>
        <table className="cmp">
          <thead><tr><th></th><th>Real font</th><th>Unicode text style</th></tr></thead>
          <tbody>
            <tr><td>What it is</td><td>A font file installed on a device</td><td>Different characters from the Unicode standard</td></tr>
            <tr><td>Survives copy &amp; paste?</td><td>No — the app’s font takes over</td><td>Yes — the characters themselves look styled</td></tr>
            <tr><td>Needs installing?</td><td>Yes</td><td>No</td></tr>
            <tr><td>Searchable?</td><td>Yes</td><td>No — 𝐀 doesn’t match A</td></tr>
            <tr><td>Screen-reader friendly?</td><td>Yes</td><td>Often not</td></tr>
            <tr><td>Full alphabet + punctuation?</td><td>Yes</td><td>Letters (and sometimes digits) only</td></tr>
          </tbody>
        </table>

        <h2>Where the styled letters come from</h2>
        <p>Unicode is the international standard that gives every character a number. Several of its blocks happen to contain complete or partial styled alphabets:</p>
        <table className="cmp">
          <thead><tr><th>Unicode block</th><th>Example</th><th>Why it exists</th></tr></thead>
          <tbody>
            <tr><td>Mathematical Alphanumeric Symbols</td><td>𝐁𝐨𝐥𝐝 𝓢𝓬𝓻𝓲𝓹𝓽 𝔉𝔯𝔞𝔨𝔱𝔲𝔯 𝕯𝖔𝖚𝖇𝖑𝖊</td><td>Maths notation, where 𝐯 and v mean different things</td></tr>
            <tr><td>Letterlike Symbols</td><td>ℂ ℍ ℜ ℬ ℯ</td><td>Early maths symbols; fill gaps in the alphabets above</td></tr>
            <tr><td>Enclosed Alphanumerics</td><td>ⓐⓑⓒ ①②③</td><td>Numbered lists and labels in East Asian typography</td></tr>
            <tr><td>Phonetic Extensions / IPA</td><td>ᴀʙᴄ ᵃᵇᶜ</td><td>Writing pronunciation in linguistics</td></tr>
            <tr><td>Halfwidth and Fullwidth Forms</td><td>Ａｅｓｔｈｅｔｉｃ</td><td>Latin letters sized to match Chinese and Japanese characters</td></tr>
            <tr><td>Combining Diacritical Marks</td><td>s̶t̶r̶i̶k̶e̶ u̲n̲d̲e̲r̲</td><td>Accents that attach to the previous letter</td></tr>
          </tbody>
        </table>
        <p>None of these characters were designed for decorating Instagram bios — people discovered that they look nice, and generators make them easy to type.</p>

        <h2>How a font generator works</h2>
        <ol>
          <li>You type plain text, for example <code>Hi</code>.</li>
          <li>For each style, the generator looks up a replacement for every letter: H → 𝐇 (U+1D407), i → 𝐢 (U+1D422).</li>
          <li>Characters with no styled version (most punctuation, emoji) are left unchanged.</li>
          <li>Some styles add extras: a frame around the text (꧁ ꧂), symbols between letters, or combining marks on each letter.</li>
          <li>You copy the result. What goes on your clipboard is just text.</li>
        </ol>
        <p>On this site, all of that happens in your browser; your text is never sent anywhere. You can try it on the <Link to="/">aesthetic font generator</Link>.</p>

        <h2>Limits worth knowing</h2>
        <ul>
          <li><strong>Gaps in alphabets.</strong> Some styles miss letters — there is no small-caps X or superscript q — so generators substitute look-alikes. See <Link to="/small-caps-fonts/">small caps</Link>.</li>
          <li><strong>Search and hashtags.</strong> Styled words don’t match plain searches.</li>
          <li><strong>Accessibility.</strong> Screen readers may read “mathematical bold capital H” or skip the word. Read <Link to="/guides/are-fancy-fonts-safe/">are fancy fonts safe?</Link></li>
          <li><strong>Display.</strong> Each device draws characters with its own fonts; rare ones may appear as boxes. See <Link to="/guides/why-fonts-show-as-boxes/">why fonts show as boxes</Link>.</li>
        </ul>
      </>
    ),
    faq: [
      { q: 'Are aesthetic fonts real fonts?', a: 'No. They are Unicode characters that look like styled letters. No font file is installed or downloaded.' },
      { q: 'Why are they sometimes called “copy and paste fonts”?', a: 'Because the style is part of the characters, it survives copying and pasting into other apps, unlike normal font formatting.' },
    ],
    related: ['/', '/fancy-fonts/', '/guides/why-fonts-show-as-boxes/'],
  },
  {
    path: '/guides/how-to-copy-and-paste-fonts/',
    crumb: 'How to copy and paste fonts',
    title: 'How to Copy and Paste Fonts on iPhone, Android & PC',
    description: 'Step-by-step instructions for copying and pasting aesthetic fonts on iPhone, Android, Windows and Mac, plus fixes when paste doesn’t work.',
    h1: 'How to Copy and Paste Fonts (iPhone, Android, Windows, Mac)',
    summary: 'Device-by-device steps, and what to do when pasting fails.',
    published: '2026-10-12',
    body: (
      <>
        <h2>The short answer</h2>
        <p className="answer">Type your text in a font generator, press the Copy button next to the style you want, then long-press (phone) or right-click (computer) the text field in your app and choose Paste. The styled text appears exactly as copied.</p>

        <h2>iPhone and iPad</h2>
        <ol>
          <li>Open the <Link to="/">generator</Link> in Safari or Chrome and type your text.</li>
          <li>Tap <strong>Copy</strong> on a style. You’ll see “Copied!”.</li>
          <li>Switch to your app (Instagram, TikTok, Messages…).</li>
          <li>Tap and hold the text field, then tap <strong>Paste</strong>. If iOS asks whether the app may paste from Safari, choose <strong>Allow Paste</strong>.</li>
        </ol>

        <h2>Android</h2>
        <ol>
          <li>Type your text in the generator and tap <strong>Copy</strong>.</li>
          <li>Open your app and long-press the text field.</li>
          <li>Tap <strong>Paste</strong>. Many keyboards (Gboard, Samsung Keyboard) also show recent clipboard items in a clipboard icon on the toolbar.</li>
        </ol>

        <h2>Windows and Mac</h2>
        <table className="cmp">
          <thead><tr><th>Action</th><th>Windows</th><th>Mac</th></tr></thead>
          <tbody>
            <tr><td>Copy</td><td>Click Copy, or select and press Ctrl + C</td><td>Click Copy, or select and press ⌘ + C</td></tr>
            <tr><td>Paste</td><td>Ctrl + V</td><td>⌘ + V</td></tr>
            <tr><td>Clipboard history</td><td>Windows key + V</td><td>Not built in</td></tr>
          </tbody>
        </table>
        <p>In Word or Google Docs, “Paste without formatting” (Ctrl + Shift + V) still keeps Unicode styles, because the style is in the characters.</p>

        <h2>Try it now</h2>
        <CopyLine text="𝓗𝓮𝓵𝓵𝓸 ✨" label="bold script" />
        <CopyLine text="ʜᴇʟʟᴏ ☾" label="small caps" />

        <h2>When paste doesn’t work</h2>
        <table className="cmp">
          <thead><tr><th>Problem</th><th>Likely cause</th><th>Fix</th></tr></thead>
          <tbody>
            <tr><td>“Invalid characters”</td><td>The field only accepts basic letters (usernames)</td><td>Use the display name or bio instead</td></tr>
            <tr><td>Text turns back to normal</td><td>The app normalises text</td><td>Try a different style; frames and symbols usually survive</td></tr>
            <tr><td>Boxes or ?</td><td>Missing font on the device</td><td>See <Link to="/guides/why-fonts-show-as-boxes/">why fonts show as boxes</Link></td></tr>
            <tr><td>Text is cut off</td><td>Styled letters count as 2 characters in some apps</td><td>Shorten the text</td></tr>
            <tr><td>Nothing copies</td><td>Clipboard permission blocked in the browser</td><td>Select the text manually and copy</td></tr>
          </tbody>
        </table>
      </>
    ),
    related: ['/', '/instagram-fonts/', '/guides/why-fonts-show-as-boxes/'],
  },
  {
    path: '/guides/why-fonts-show-as-boxes/',
    crumb: 'Why fonts show as boxes',
    title: 'Why Fancy Fonts Show as Boxes — iPhone & Android Fixes',
    description: 'Why some Unicode characters appear as empty boxes or question marks, which styles work on iPhone, Android and Windows, and how to fix it.',
    h1: 'Why Some Fancy Fonts Show as Boxes — and How to Fix It',
    summary: 'Compatibility on iPhone, Android and Windows, and how to avoid “tofu” boxes.',
    published: '2026-10-12',
    body: (
      <>
        <h2>The short answer</h2>
        <p className="answer">A box (□), a box with a question mark, or a “?” appears when the device viewing the text has no font that contains that character. The text isn’t broken — that device just can’t draw it. Choosing older, common styles such as bold, italic, script or small caps avoids the problem for almost everyone.</p>
        <p>Typographers call these boxes “tofu”. The character is still there: if you copy it to a newer device, it displays correctly.</p>

        <h2>Do aesthetic fonts work on iPhone and Android?</h2>
        <p>Yes. Current versions of iOS and Android include fonts for all the styles in our generator. Problems mainly appear on old devices and on desktop apps with limited fonts.</p>
        <table className="cmp">
          <thead><tr><th>Style group</th><th>Added to Unicode</th><th>iPhone / Android (current)</th><th>Older devices &amp; PCs</th></tr></thead>
          <tbody>
            <tr><td>Bold, italic, script, gothic, double-struck, monospace</td><td>2001 (3.1)</td><td>Yes</td><td>Yes on Windows 10+ / macOS; rare issues on very old phones</td></tr>
            <tr><td>Circled letters ⓐ, fullwidth Ａ</td><td>1993 (1.1)</td><td>Yes</td><td>Yes</td></tr>
            <tr><td>Small caps ᴀ, superscript ᵃ</td><td>1990s–2000s</td><td>Yes</td><td>Mostly; a few letters may use a fallback font</td></tr>
            <tr><td>Filled / squared bubbles 🅐 🄰</td><td>2010 (6.0)</td><td>Yes</td><td>Usually; may look like emoji</td></tr>
            <tr><td>Javanese frames ꧁ ꧂</td><td>2009 (5.2)</td><td>Yes</td><td>Can be boxes on older Windows</td></tr>
            <tr><td>Newer emoji (🫧 🪄 🩰)</td><td>2019–2021</td><td>Yes, if updated</td><td>Boxes on devices not updated in years</td></tr>
          </tbody>
        </table>
        <p>In the <Link to="/">generator</Link>, styles that use less common characters are labelled “Check on older devices”.</p>

        <h2>Other reasons text looks wrong</h2>
        <ul>
          <li><strong>The app filters characters.</strong> Usernames and some game name fields replace unsupported characters with “?” or reject them.</li>
          <li><strong>Combining marks are clipped.</strong> Glitch and underline effects depend on line height; some apps cut them off.</li>
          <li><strong>A custom app font.</strong> Some apps and games ship their own font that lacks styled characters.</li>
        </ul>

        <h2>How to fix it</h2>
        <ol>
          <li>Switch to a widely supported style: <Link to="/bold-fonts/">bold</Link>, <Link to="/cursive-fonts/">cursive</Link> or <Link to="/small-caps-fonts/">small caps</Link>.</li>
          <li>Replace rare symbols in frames with older ones (✦ ★ ♡ ✿ instead of new emoji).</li>
          <li>Update your device’s operating system to get newer fonts.</li>
          <li>Check on a second device before using a styled name somewhere permanent.</li>
        </ol>
      </>
    ),
    faq: [
      { q: 'Do aesthetic fonts work on iPhone?', a: 'Yes. Current iOS versions display all common Unicode styles, including bold, script, gothic, small caps and bubble letters.' },
      { q: 'Do aesthetic fonts work on Android?', a: 'Yes on modern Android. Very old phones or those with limited system fonts may show boxes for rare characters.' },
      { q: 'Can I see boxes while my friend sees the text?', a: 'Yes. Display depends on the fonts on each device, so the same text can look different on two phones.' },
    ],
    related: ['/', '/guides/unicode-fonts-explained/', '/bold-fonts/'],
  },
  {
    path: '/guides/are-fancy-fonts-safe/',
    crumb: 'Are fancy fonts safe?',
    title: 'Are Fancy Fonts Safe? Privacy & Accessibility Explained',
    description: 'Are aesthetic font generators and keyboard apps safe? What happens to your text, accessibility for screen readers, and platform rules to know.',
    h1: 'Are Fancy Fonts Safe to Use?',
    summary: 'Privacy, keyboard-app permissions, screen readers and platform rules.',
    published: '2026-10-12',
    body: (
      <>
        <h2>The short answer</h2>
        <p className="answer">Yes, Unicode fancy text is safe: it is ordinary text and contains no code. The things to think about are privacy (some keyboard apps can see everything you type), accessibility (screen readers often can’t read styled letters), and platform rules about names.</p>

        <h2>Is the text itself safe?</h2>
        <p>Styled text is just a sequence of standard Unicode characters — the same kind of data as any message. It can’t run code, install anything or access your device.</p>

        <h2>Privacy: browser tools vs keyboard apps</h2>
        <table className="cmp">
          <thead><tr><th></th><th>Browser generator (this site)</th><th>Third-party keyboard app</th></tr></thead>
          <tbody>
            <tr><td>What it sees</td><td>Only what you type into it</td><td>Potentially everything you type, if given full access</td></tr>
            <tr><td>Installation</td><td>None</td><td>Required</td></tr>
            <tr><td>Data sent to a server</td><td>None here — conversion runs in your browser</td><td>Depends on the app’s privacy policy</td></tr>
          </tbody>
        </table>
        <p>On iPhone, a keyboard with “Allow Full Access” can send what you type over the internet. If you use a font keyboard, read its privacy policy and avoid typing passwords with it.</p>

        <h2>Accessibility</h2>
        <p>Screen readers read characters by their Unicode names, not by how they look. Depending on the reader, 𝓗𝓲 may be announced as “mathematical bold script capital H, mathematical bold script small i”, or skipped. To stay inclusive:</p>
        <ul>
          <li>Style a word or a name, not whole sentences.</li>
          <li>Never style essential information: dates, prices, links, instructions.</li>
          <li>Keep hashtags plain — styled hashtags don’t work and aren’t readable.</li>
          <li>Prefer native formatting where it exists (WhatsApp *bold*, Discord **bold**).</li>
        </ul>

        <h2>Platform rules</h2>
        <ul>
          <li>Usernames on Instagram, TikTok, Discord and Roblox only accept basic characters.</li>
          <li>Facebook’s name standards reject unusual characters in profile names.</li>
          <li>Some communities and games remove names with heavy <Link to="/glitch-text/">glitch text</Link> or names that imitate others.</li>
          <li>Don’t use look-alike characters to impersonate a brand or person — that breaks most platforms’ rules.</li>
        </ul>
      </>
    ),
    faq: [
      { q: 'Can fancy text give my phone a virus?', a: 'No. It is plain text made of standard characters and cannot contain or run code.' },
      { q: 'Can I get banned for using fancy fonts?', a: 'Not for normal use in bios and posts. Problems come from impersonation, spammy text or breaking a community’s name rules.' },
      { q: 'Does this website store what I type?', a: 'No. The conversion runs in your browser. Only your favorite and recent style choices are saved in your browser’s local storage.' },
    ],
    related: ['/', '/about/', '/guides/unicode-fonts-explained/'],
  },
  {
    path: '/guides/aesthetic-bio-ideas/',
    crumb: 'Aesthetic bio ideas',
    title: 'Aesthetic Bio Ideas — Templates for Instagram & TikTok',
    description: 'Copy-ready aesthetic bio templates for Instagram, TikTok and Discord, with layout rules, symbol dividers and font combinations that stay readable.',
    h1: 'Aesthetic Bio Ideas and Templates',
    summary: 'Copy-ready bio layouts plus the rules that keep them readable.',
    published: '2026-10-12',
    body: (
      <>
        <h2>The short answer</h2>
        <p className="answer">An aesthetic bio uses one styled line (usually your name in script or small caps), two or three short plain lines, and simple symbol dividers. Limiting the styling keeps it readable and searchable.</p>

        <h2>Five rules for a clean bio</h2>
        <ol>
          <li><strong>One styled line.</strong> Your name or a short tagline — not every line.</li>
          <li><strong>Plain keywords.</strong> What you do and where, in normal text so people can find you.</li>
          <li><strong>Consistent dividers.</strong> Pick one symbol (·, ✦, │ or ☾) and repeat it.</li>
          <li><strong>Mind the limit.</strong> Instagram allows 150 characters, TikTok 80, Discord’s About Me 190.</li>
          <li><strong>End with an action.</strong> “↓ shop”, “dm for collabs” — in plain text.</li>
        </ol>

        <h2>Templates to copy</h2>
        <h3>Soft &amp; dreamy</h3>
        <CopyLine text={'₊˚♡˚₊ 𝓜𝓲𝓪 ₊˚♡˚₊\nsoft life · film photos · tea\n☾ dreaming in pastel'} label="soft" />
        <h3>Clean &amp; professional</h3>
        <CopyLine text={'ᴍɪᴀ ʀᴏꜱᴇ │ ᴅᴇꜱɪɢɴᴇʀ\nBranding for small businesses\n↓ portfolio'} label="clean" />
        <h3>Creator</h3>
        <CopyLine text={'𝗠𝗶𝗮 ✦ 𝗰𝗿𝗲𝗮𝘁𝗼𝗿\nrecipes in 60 seconds\nnew video every friday ↓'} label="creator" />
        <h3>Gamer</h3>
        <CopyLine text={'꧁𝕸𝖎𝖆꧂\nranked grinder · EU\nstreams fri–sun'} label="gamer" />
        <h3>Minimal</h3>
        <CopyLine text={'mia\n─────────\nphotographer · london'} label="minimal" />
        <p>Replace “Mia” with your own name by typing it into the <Link to="/">generator</Link> and pasting the style you like.</p>

        <h2>Dividers and symbols</h2>
        <table className="cmp">
          <thead><tr><th>Look</th><th>Symbols</th></tr></thead>
          <tbody>
            <tr><td>Minimal</td><td>· │ — ─ ↳ ↓</td></tr>
            <tr><td>Soft</td><td>✿ ♡ ☾ ⋆ ˚ ₊</td></tr>
            <tr><td>Sparkly</td><td>✦ ✧ ★ ☆ ✨</td></tr>
            <tr><td>Bold</td><td>▸ ➤ ◆ ■ ▬</td></tr>
          </tbody>
        </table>
        <p>Find more in the <Link to="/symbols/">aesthetic symbols</Link> collection, and platform tips on <Link to="/instagram-fonts/">Instagram fonts</Link> and <Link to="/tiktok-fonts/">TikTok fonts</Link>.</p>
      </>
    ),
    related: ['/instagram-fonts/', '/tiktok-fonts/', '/symbols/'],
  },
];

export const GUIDE_BY_PATH = Object.fromEntries(GUIDES.map((g) => [g.path, g]));

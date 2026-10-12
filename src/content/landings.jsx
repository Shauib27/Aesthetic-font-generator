import { Link } from 'react-router-dom';
import {
  ids, POPULAR, AESTHETIC, CATEGORY_IDS, PLATFORM_PICKS,
} from '../data/styleIndex.js';

/* Landing pages for font categories and platforms. Every page has its own search intent,
   introduction, recommended styles (real engine styles), examples, use cases,
   compatibility notes, copy steps and FAQ. Shared layout lives in pages/LandingPage.jsx. */

export const LANDINGS = [
  /* ===================== Tier 1 ===================== */
  {
    path: '/fancy-fonts/',
    kind: 'generator',
    crumb: 'Fancy Fonts',
    title: 'Fancy Text Generator — Fancy Fonts to Copy & Paste',
    description: 'Turn plain text into fancy fonts: cursive, double-struck, framed and decorative Unicode styles. Free fancy text generator — copy and paste anywhere.',
    h1: 'Fancy Text Generator',
    lead: 'Make fancy text in one step: type below and pick from script, double-struck, framed and decorated styles. Every result is ordinary Unicode text you can paste into bios, captions, chats and documents.',
    picksLabel: 'Fancy picks',
    picks: ids('Bold Script', 'Script', 'Double-Struck', 'Border ꧁꧂ Script', 'Moon border', 'Floral border', 'Heart Script', 'Flower Script', 'Bold Gothic', 'Tibetan border', 'Sparkle border', 'Diamond border', 'Star corner', 'Crown Gothic', 'Cottagecore', 'Line border'),
    sample: 'Fancy Text',
    preview: 'Bold Script',
    showcase: { title: 'Fancy text examples', sample: 'Sweet Dreams', ids: ids('Bold Script', 'Double-Struck', 'Border ꧁꧂ Script', 'Moon border', 'Floral border', 'Crown Gothic', 'Diamond border', 'Heart Script') },
    intro: (
      <>
        <p className="answer"><strong>What is fancy text?</strong> Fancy text is regular writing re-spelled with decorative Unicode characters — script capitals, double-struck letters, ornate brackets and symbols — so it looks styled even in apps that have no font menu.</p>
        <p>Because the decoration is part of the characters themselves, fancy text keeps its look when you paste it. That is the difference from formatting in a word processor, which disappears the moment you paste into Instagram or a chat app.</p>
      </>
    ),
    sections: [
      {
        h2: 'Three kinds of fancy text',
        body: (
          <>
            <table className="cmp">
              <thead><tr><th>Type</th><th>How it is made</th><th>Example</th><th>Best for</th></tr></thead>
              <tbody>
                <tr><td>Letter styles</td><td>Each letter is swapped for a styled Unicode letter</td><td>𝓢𝔀𝓮𝓮𝓽 · 𝕊𝕨𝕖𝕖𝕥</td><td>Names, headings</td></tr>
                <tr><td>Frames</td><td>Symbols are added before and after your text</td><td>꧁𝒮𝓌ℯℯ𝓉꧂</td><td>Usernames, clan tags</td></tr>
                <tr><td>Effects</td><td>Combining marks are layered on each letter</td><td>S̶w̶e̶e̶t̶ · S̲w̲e̲e̲t̲</td><td>Captions, jokes, emphasis</td></tr>
              </tbody>
            </table>
            <p>Most fancy names combine the first two: one letter style plus a frame. Effects are fun in posts but are the type most often rejected by username fields.</p>
          </>
        ),
      },
      {
        h2: 'Where fancy text works well',
        body: (
          <ul>
            <li><strong>Profile names and bios</strong> — see platform tips for <Link to="/instagram-fonts/">Instagram</Link>, <Link to="/tiktok-fonts/">TikTok</Link> and <Link to="/discord-fonts/">Discord</Link>.</li>
            <li><strong>Invitations and greetings</strong> — a script line such as 𝒽𝒶𝓅𝓅𝓎 𝒷𝒾𝓇𝓉𝒽𝒹𝒶𝓎 in a group chat.</li>
            <li><strong>Notes and to-do lists</strong> — fancy headings in apps like Notes or Notion that only allow plain text.</li>
            <li><strong>Product titles and shop banners</strong> — use one fancy word, not the whole listing, so it stays searchable.</li>
          </ul>
        ),
      },
    ],
    compat: 'Script, double-struck and bold letters come from Unicode blocks added in 2001 and display on practically every phone and computer in use today. Frames using ꧁ ꧂ (Javanese characters) need newer fonts and can appear as boxes on old Windows PCs.',
    howTo: ['Type your text in the box above.', 'Open the Fancy picks tab or search a word like “script” or “frame”.', 'Press Copy on the style you like.', 'Paste it into your bio, message or document.'],
    faq: [
      { q: 'Is fancy text the same as a font?', a: 'No. A font changes how existing letters are drawn. Fancy text replaces the letters with different Unicode characters that already look styled, which is why it survives copy and paste.' },
      { q: 'Why can’t I search for my fancy username?', a: 'Search engines and in-app search treat 𝓐 and A as different characters, so a fancy name is harder to find. Keep a plain version of your name somewhere in your profile.' },
      { q: 'Can I mix two fancy styles?', a: 'Yes. Copy one word in one style and the next word in another, or wrap a script word in a frame. Keep it to two styles so it stays readable.' },
      { q: 'Does fancy text cost anything?', a: 'No. The generator is free, and Unicode characters are part of an open standard with no licence fees.' },
    ],
    related: ['/', '/cursive-fonts/', '/cool-fonts/', '/stylish-text/', '/symbols/'],
    guides: ['/guides/unicode-fonts-explained/', '/guides/how-to-copy-and-paste-fonts/'],
  },
  {
    path: '/stylish-text/',
    kind: 'generator',
    crumb: 'Stylish Text',
    title: 'Stylish Text Generator — Stylish Names & Fonts to Copy',
    description: 'Create stylish text and stylish names for profiles, games and chats. Bold, script, gothic and framed Unicode styles — free to copy and paste.',
    h1: 'Stylish Text Generator for Names & Bios',
    lead: 'Write your name or a short phrase and get it in dozens of stylish looks. Results are Unicode text, so they paste straight into profiles, games and messages.',
    picksLabel: 'Stylish names',
    picks: ids('Bold Script', 'Bold Gothic', 'Border ꧁꧂ Script', 'Tibetan border', 'Small Caps', 'Double-Struck', 'Bold Italic', 'Star Border Script', 'Crown Gothic', 'Arrow flow', 'Star corner', 'Soft girl', 'Moon border', '彡彡 bold wrap', 'Greek Style', 'Asian Blocks'),
    sample: 'Your Name',
    preview: 'Border ꧁꧂ Script',
    showcase: { title: 'Stylish name examples', sample: 'Aiden', ids: ids('Bold Script', 'Border ꧁꧂ Gothic', 'Small Caps', 'Crown Gothic', 'Star corner', 'Greek Style', '彡彡 bold wrap', 'Soft girl') },
    intro: (
      <>
        <p className="answer"><strong>What is stylish text?</strong> Stylish text is a name or phrase written with decorative Unicode letters and symbols so it stands out in places that only accept plain text, such as profile names, game nicknames and chat messages.</p>
        <p>A good stylish name is short, readable at small sizes and still recognisable as you. The formula below works for most people.</p>
      </>
    ),
    sections: [
      {
        h2: 'A simple formula for a stylish name',
        body: (
          <>
            <ol>
              <li><strong>Pick one letter style</strong> that matches your vibe: script for soft, gothic for dark, small caps for clean.</li>
              <li><strong>Add at most one frame</strong> — ꧁ ꧂, ★彡 彡★ or ✦ ✦ — or leave it unframed for a minimal look.</li>
              <li><strong>Check the length.</strong> Many fields allow 20–30 characters, and frames use several of them.</li>
              <li><strong>Read it at a glance.</strong> If a friend can’t read it in a second, choose a simpler style.</li>
            </ol>
            <table className="cmp">
              <thead><tr><th>Vibe</th><th>Letter style</th><th>Example</th></tr></thead>
              <tbody>
                <tr><td>Soft &amp; dreamy</td><td>Script + soft frame</td><td>₊˚♡˚₊ 𝓜𝓲𝓪 ₊˚♡˚₊</td></tr>
                <tr><td>Dark &amp; bold</td><td>Bold gothic</td><td>꧁𝕹𝖔𝖛𝖆꧂</td></tr>
                <tr><td>Clean &amp; modern</td><td>Small caps</td><td>ɴᴏᴠᴀ</td></tr>
                <tr><td>Playful</td><td>Circled / bubble</td><td>ⓝⓞⓥⓐ</td></tr>
                <tr><td>Competitive</td><td>Greek mix + brackets</td><td>★彡[ ɴᴏᴠᴀ ]彡★</td></tr>
              </tbody>
            </table>
          </>
        ),
      },
      {
        h2: 'Where stylish names are allowed (and where they are not)',
        body: (
          <>
            <p>Most apps separate a <em>username</em> (the unique handle) from a <em>display name</em>. Usernames on Instagram, TikTok and Discord only accept basic letters, numbers, periods and underscores, so stylish text is rejected there. Display names, bios and messages usually accept it.</p>
            <p>For platform-specific limits see <Link to="/instagram-fonts/">Instagram fonts</Link>, <Link to="/discord-fonts/">Discord fonts</Link> and <Link to="/gaming-fonts/">gaming names</Link>.</p>
          </>
        ),
      },
    ],
    compat: 'Letter styles display on almost every modern device. Styles marked “May not work in usernames” use combining marks, which many sign-up forms strip out.',
    howTo: ['Type your name above.', 'Browse the Stylish names tab, or filter by Gothic, Cursive or Bubble.', 'Copy your favourite and star it so you can find it later.', 'Paste it into the display-name field and preview before saving.'],
    faq: [
      { q: 'How do I make a stylish name?', a: 'Type your name in the generator, choose one letter style and optionally one frame, then copy and paste it into the display-name field of your app. Keep it short and readable.' },
      { q: 'Why does my app say the name contains invalid characters?', a: 'That field only accepts basic characters (often a–z, 0–9, period and underscore). Use the stylish version in your display name or bio instead.' },
      { q: 'Will my stylish name look the same on every phone?', a: 'Mostly. The characters are standard, but each device draws them with its own font, so shapes differ slightly and very rare symbols can appear as boxes on old devices.' },
    ],
    related: ['/gaming-fonts/', '/fancy-fonts/', '/cool-fonts/', '/gothic-fonts/', '/symbols/'],
    guides: ['/guides/aesthetic-bio-ideas/', '/guides/why-fonts-show-as-boxes/'],
  },
  {
    path: '/cool-fonts/',
    kind: 'generator',
    crumb: 'Cool Fonts',
    title: 'Cool Fonts — Cool Text Generator to Copy & Paste',
    description: 'Cool fonts for usernames, captions and chats: gothic, glitch, upside-down, Asian-style and bracket text. Free cool text generator, copy and paste.',
    h1: 'Cool Fonts Generator',
    lead: 'Get the edgier side of Unicode: gothic, glitch, upside-down, Asian-style letters and bracket banners. Type once and copy any style.',
    picksLabel: 'Cool picks',
    picks: ids('Bold Gothic', 'Asian Blocks', 'Katakana Style', 'Greek Style', 'Block Caps', 'Upside Down', 'Zalgo', 'Fullwidth', 'Monospace', 'Filled Bubble', 'Block Banner', 'Arrow Banner', 'Gothic arrow', 'Tibetan border', 'Curly Mix', 'Strikethrough'),
    sample: 'Cool Text',
    preview: 'Asian Blocks',
    showcase: { title: 'Cool text examples', sample: 'Night Rider', ids: ids('Bold Gothic', 'Asian Blocks', 'Katakana Style', 'Block Caps', 'Upside Down', 'Filled Bubble', 'Block Banner', 'Monospace') },
    intro: (
      <>
        <p className="answer"><strong>What makes a font “cool”?</strong> Cool fonts are bold, unusual Unicode styles — blackletter, look-alike letters from other alphabets, upside-down text and boxed banners — used to give a username or caption more attitude than plain text.</p>
        <p>Some cool styles borrow characters from Greek, Cyrillic or Japanese that resemble Latin letters (乇 for E, 丂 for S). They look great but are not real words in those languages, so use them for decoration, not for anything people need to search.</p>
      </>
    ),
    sections: [
      {
        h2: 'Popular cool styles and how they work',
        body: (
          <table className="cmp">
            <thead><tr><th>Style</th><th>Example</th><th>How it’s built</th></tr></thead>
            <tbody>
              <tr><td>Bold gothic</td><td>𝕹𝖎𝖌𝖍𝖙</td><td>Mathematical bold Fraktur letters</td></tr>
              <tr><td>Asian blocks</td><td>几乇丂ㄒ</td><td>CJK and Bopomofo characters that resemble Latin letters</td></tr>
              <tr><td>Upside down</td><td>ʇɥƃᴉu</td><td>IPA letters that look flipped, in reverse order</td></tr>
              <tr><td>Filled bubble</td><td>🅝🅘🅖🅗🅣</td><td>Enclosed alphanumeric supplement</td></tr>
              <tr><td>Glitch</td><td>N̤̍ḭ̑g̗̍</td><td>Stacked combining marks (zalgo)</td></tr>
            </tbody>
          </table>
        ),
      },
      {
        h2: 'Tips for cool usernames and captions',
        body: (
          <ul>
            <li>Gaming names look sharp in gothic with a frame — more ideas on the <Link to="/gaming-fonts/">gaming fonts</Link> page.</li>
            <li>Keep glitch text for posts and comments; it often fails in name fields. See the <Link to="/glitch-text/">glitch text generator</Link>.</li>
            <li>Upside-down text reverses the order, so it reads correctly when someone turns the phone around.</li>
          </ul>
        ),
      },
    ],
    compat: 'Asian-style and Greek-style letters use very common characters and work nearly everywhere. Squared letters need emoji-era fonts (2010+). Glitch effects depend on how an app stacks combining marks and can look clipped in some layouts.',
    howTo: ['Type your text above.', 'Use the Cool picks tab or search “gothic”, “glitch” or “upside”.', 'Press Copy.', 'Paste into your username, caption or chat.'],
    faq: [
      { q: 'What are the coolest fonts for usernames?', a: 'Bold gothic, small caps and Asian-style letters are the most popular, often inside a frame like ꧁ ꧂ or ★彡 彡★. Check that your app’s name field accepts them first.' },
      { q: 'Is upside-down text readable by others?', a: 'Yes. It uses normal characters that look flipped, so anyone who sees it gets the same upside-down text.' },
      { q: 'Why do some cool fonts look different on my friend’s phone?', a: 'Each device draws the characters with its own system font, so shapes vary slightly. The characters themselves are identical.' },
    ],
    related: ['/gaming-fonts/', '/gothic-fonts/', '/glitch-text/', '/fancy-fonts/', '/stylish-text/'],
    guides: ['/guides/unicode-fonts-explained/', '/guides/are-fancy-fonts-safe/'],
  },

  /* ===================== Tier 2: categories ===================== */
  {
    path: '/cursive-fonts/',
    kind: 'category',
    crumb: 'Cursive Fonts',
    title: 'Cursive Fonts — Cursive Text Generator (Copy & Paste)',
    description: 'Write in cursive online. Free cursive text generator with script and bold script letters you can copy and paste into bios, captions and messages.',
    h1: 'Cursive Font Generator',
    lead: 'Write in cursive without a handwriting app. Type below to get script and bold-script letters that paste anywhere text is allowed.',
    picksLabel: 'Cursive',
    picks: CATEGORY_IDS.cursive,
    sample: 'Cursive Text',
    preview: 'Script',
    showcase: { title: 'Cursive examples', sample: 'with love', ids: ids('Script', 'Bold Script', 'Classic Script', 'Heart Script', 'Flower Script', 'Moon border', 'Soft girl', 'Script mark 2') },
    intro: (
      <>
        <p className="answer"><strong>What is cursive text?</strong> Cursive text uses the Unicode “mathematical script” letters — 𝒜 𝒷 𝒸 for regular script and 𝓐 𝓫 𝓬 for bold script — which look like joined handwriting even though each letter is a separate character.</p>
        <p>There are two weights. Regular script (𝓈𝒸𝓇𝒾𝓅𝓉) is light and elegant; bold script (𝓼𝓬𝓻𝓲𝓹𝓽) is easier to read on small phone screens, so it is usually the better choice for names.</p>
      </>
    ),
    sections: [
      {
        h2: 'Why some cursive letters look slightly different',
        body: (
          <>
            <p>In regular script, a few letters (ℬ ℰ ℱ ℋ ℐ ℒ ℳ ℛ and ℯ ℊ ℴ) come from an older Unicode block called Letterlike Symbols, because they were encoded before the rest of the alphabet. Your device may draw them with a slightly different design. Bold script has no gaps, which is another reason it looks more consistent.</p>
            <p>Script letters exist for A–Z and a–z only. Numbers and punctuation stay plain, so “𝒮𝓊𝓂𝓂ℯ𝓇 2026” is expected.</p>
          </>
        ),
      },
      {
        h2: 'Where cursive works best',
        body: (
          <table className="cmp">
            <thead><tr><th>Use</th><th>Tip</th></tr></thead>
            <tbody>
              <tr><td>Instagram name</td><td>Bold script for the name, plain text for the rest of the bio</td></tr>
              <tr><td>Captions &amp; quotes</td><td>One cursive line as a headline, plain text below</td></tr>
              <tr><td>Wedding &amp; party messages</td><td>Combine with a soft frame like ₊˚♡˚₊</td></tr>
              <tr><td>Long paragraphs</td><td>Avoid — cursive is tiring to read at length</td></tr>
            </tbody>
          </table>
        ),
      },
    ],
    compat: 'Cursive letters were added to Unicode in 2001 (version 3.1) and are supported by iOS, Android, Windows 10/11 and macOS. Screen readers may announce them as “mathematical script” letters, so don’t use cursive for important information.',
    howTo: ['Type your text above.', 'Pick a style from the Cursive tab (bold script is easiest to read).', 'Press Copy.', 'Paste into your bio, caption or message.'],
    faq: [
      { q: 'How do I write in cursive on Instagram?', a: 'Type your text in this cursive generator, copy the script style you like, then paste it into your Instagram name, bio or caption. It works on iPhone, Android and desktop.' },
      { q: 'Why are my numbers not in cursive?', a: 'Unicode has no script digits, so numbers stay plain. Try bold or double-struck styles if you want styled numbers.' },
      { q: 'Is cursive text the same as a handwriting font?', a: 'It looks similar, but it is made of Unicode characters instead of a font file, so it keeps the cursive look after you paste it.' },
    ],
    related: ['/fancy-fonts/', '/cute-fonts/', '/instagram-fonts/', '/bold-fonts/', '/'],
    guides: ['/guides/aesthetic-bio-ideas/', '/guides/unicode-fonts-explained/'],
  },
  {
    path: '/cute-fonts/',
    kind: 'category',
    crumb: 'Cute Fonts',
    title: 'Cute Fonts — Kawaii Text to Copy & Paste',
    description: 'Cute fonts and kawaii text with hearts, bubbles, bows and soft frames. Free cute font generator — copy and paste into bios, names and chats.',
    h1: 'Cute Font Generator',
    lead: 'Hearts, bubble letters, bows and soft sparkles. Type a name or message and copy a cute style in one tap.',
    picksLabel: 'Cute',
    picks: [...new Set([...CATEGORY_IDS.cute, ...ids('Soft girl', 'Heart Script', 'Flower Script', 'JP heart border', 'Kaomoji heart', '🎀 🎀 Frame', '🌸 🌸 Frame', '💖 💖 Frame', '🐰🌸 🌸🐰 Frame', '🍓 🍓 Frame', 'Heart Sep', 'Flower Sep')])],
    sample: 'cute text',
    preview: 'Circled',
    showcase: { title: 'Cute text examples', sample: 'bestie', ids: ids('Circled', 'Heart Letters', 'Kaomoji Love', 'Soft girl', 'JP heart border', '🎀 🎀 Frame', 'Heart Sep', 'Sparkle Wrap') },
    intro: (
      <>
        <p className="answer"><strong>What are cute fonts?</strong> Cute fonts are soft, playful text styles made from Unicode characters — bubble letters (ⓒⓤⓣⓔ), hearts between letters, kaomoji faces and emoji frames — popular for bios, nicknames and messages to friends.</p>
        <p>The cutest results usually come from a simple letter style plus one small decoration. Too many hearts and emoji make a name hard to read.</p>
      </>
    ),
    sections: [
      {
        h2: 'Cute decorations you can add',
        body: (
          <table className="cmp">
            <thead><tr><th>Decoration</th><th>Example</th><th>Feels</th></tr></thead>
            <tbody>
              <tr><td>Soft frame</td><td>₊˚♡˚₊ 𝓂𝒾𝒶 ₊˚♡˚₊</td><td>Dreamy, gentle</td></tr>
              <tr><td>Kaomoji</td><td>(っ◔◡◔)っ ♥ mia ♥</td><td>Playful, friendly</td></tr>
              <tr><td>Bubble letters</td><td>ⓜⓘⓐ</td><td>Bouncy, childlike</td></tr>
              <tr><td>Emoji frame</td><td>🎀 𝓂𝒾𝒶 🎀</td><td>Coquette, girly</td></tr>
              <tr><td>Heart separators</td><td>m ♡ i ♡ a</td><td>Sweet, romantic</td></tr>
            </tbody>
          </table>
        ),
      },
      {
        h2: 'Cute name ideas to try',
        body: (
          <>
            <p>Type any of these into the generator to see them in every cute style: <em>honey bun</em>, <em>moonlit</em>, <em>strawberry milk</em>, <em>bunny</em>, <em>soft era</em>, <em>little star</em>. For symbol-only decorations (bows, clouds, sparkles) see the <Link to="/symbols/">aesthetic symbols</Link> collection.</p>
          </>
        ),
      },
    ],
    compat: 'Hearts, circled letters and kaomoji are old, widely supported characters. Some newer emoji in frames (🩰, 🫧, 🪄) need a phone updated within the last few years; older devices show a box instead.',
    howTo: ['Type a name or message.', 'Open the Cute tab.', 'Tap Copy on the style you like.', 'Paste it into your bio, nickname or chat.'],
    faq: [
      { q: 'What is the cutest font for a bio?', a: 'Bold script inside a soft frame (₊˚♡˚₊ name ₊˚♡˚₊) or bubble letters are the most popular. Keep the rest of the bio in plain text so it stays readable.' },
      { q: 'Can I use cute fonts in WhatsApp?', a: 'Yes. Copy a cute style and paste it into a WhatsApp message, your About text or a group name.' },
      { q: 'Why do some cute emoji show as boxes?', a: 'Newer emoji only display on devices with recent system updates. Pick a frame with older symbols like ♡, ✿ or ✨ for the widest support.' },
    ],
    related: ['/cursive-fonts/', '/bubble-fonts/', '/symbols/', '/tiktok-fonts/', '/'],
    guides: ['/guides/aesthetic-bio-ideas/', '/guides/why-fonts-show-as-boxes/'],
  },
  {
    path: '/gothic-fonts/',
    kind: 'category',
    crumb: 'Gothic Fonts',
    title: 'Gothic Fonts — Old English & Fraktur Text Generator',
    description: 'Gothic font generator for Old English, Fraktur and blackletter text. Copy and paste gothic letters into usernames, bios and posts — free.',
    h1: 'Gothic Font Generator (Old English & Fraktur)',
    lead: 'Blackletter text in regular and bold weights, plus gothic frames for usernames. Type below and copy.',
    picksLabel: 'Gothic',
    picks: CATEGORY_IDS.gothic,
    sample: 'Gothic Text',
    preview: 'Bold Gothic',
    showcase: { title: 'Gothic text examples', sample: 'Dark Knight', ids: ids('Gothic', 'Bold Gothic', 'Border ꧁꧂ Gothic', 'Crown Gothic', 'Gothic arrow', 'Tibetan border', 'Atomic border', 'Gothic mark 3') },
    intro: (
      <>
        <p className="answer"><strong>What is a gothic font?</strong> Gothic (also called blackletter, Fraktur or Old English) is the dense, angular lettering used in medieval manuscripts. In Unicode it exists as “mathematical Fraktur” letters, regular (𝔊𝔬𝔱𝔥𝔦𝔠) and bold (𝕲𝖔𝖙𝖍𝖎𝖈), which you can paste like normal text.</p>
        <p>Today it shows up in tattoo lettering, band logos, streetwear and gaming names — anywhere people want a dark, dramatic look.</p>
      </>
    ),
    sections: [
      {
        h2: 'Regular vs bold gothic',
        body: (
          <>
            <table className="cmp">
              <thead><tr><th></th><th>Regular Fraktur</th><th>Bold Fraktur</th></tr></thead>
              <tbody>
                <tr><td>Example</td><td>𝔇𝔞𝔯𝔨 𝔎𝔫𝔦𝔤𝔥𝔱</td><td>𝕯𝖆𝖗𝖐 𝕶𝖓𝖎𝖌𝖍𝖙</td></tr>
                <tr><td>Readability</td><td>Lower at small sizes</td><td>Better on phones</td></tr>
                <tr><td>Best for</td><td>Headings, quotes</td><td>Usernames, gaming names</td></tr>
              </tbody>
            </table>
            <p>Gothic capitals can be hard to tell apart (𝔄, 𝔘 and 𝔑 look alike to many readers). If people need to recognise your name, put only the first letter in gothic or use bold Fraktur.</p>
          </>
        ),
      },
      {
        h2: 'Why five gothic capitals look different',
        body: <p>The letters ℭ ℌ ℑ ℜ ℨ were encoded in an early Unicode block, before the rest of the Fraktur alphabet. They are the correct characters, but some devices draw them with a different font, so they can look slightly heavier or lighter than their neighbours. Bold Fraktur doesn’t have this issue.</p>,
      },
    ],
    compat: 'Fraktur letters are supported on all current versions of iOS, Android, Windows and macOS. Numbers have no Fraktur form and stay plain.',
    howTo: ['Type your text.', 'Choose a style from the Gothic tab — bold gothic reads best on phones.', 'Press Copy.', 'Paste into your username, bio or post.'],
    faq: [
      { q: 'Is gothic text the same as Old English font?', a: 'Yes, in everyday use. “Old English font”, “blackletter” and “Fraktur” all describe the same medieval lettering style that this generator produces with Unicode characters.' },
      { q: 'Can I use gothic text for a tattoo design?', a: 'You can use it to preview wording, but tattoo artists work from real typefaces. Ask your artist to set the final text in a proper blackletter font.' },
      { q: 'Does gothic text work in Free Fire or PUBG names?', a: 'Often, yes — gothic letters are popular in game names. Always paste it into the rename preview first, because each game limits which characters it accepts.' },
    ],
    related: ['/gaming-fonts/', '/cool-fonts/', '/bold-fonts/', '/glitch-text/', '/'],
    guides: ['/guides/unicode-fonts-explained/', '/guides/why-fonts-show-as-boxes/'],
  },
  {
    path: '/bold-fonts/',
    kind: 'category',
    crumb: 'Bold Fonts',
    title: 'Bold Text Generator — Bold Fonts to Copy & Paste',
    description: 'Make bold text for Instagram, Facebook, LinkedIn and X. Free bold text generator with serif, sans-serif, italic and script bold styles to copy and paste.',
    h1: 'Bold Text Generator',
    lead: 'Add bold to apps that don’t have a bold button. Choose serif, sans-serif, italic or script bold and paste it anywhere.',
    picksLabel: 'Bold',
    picks: CATEGORY_IDS.bold,
    sample: 'Bold Text',
    preview: 'Bold Sans',
    showcase: { title: 'Bold text examples', sample: 'Big News', ids: ids('Bold', 'Bold Sans', 'Bold Italic', 'Bold Italic Sans', 'Bold Script', 'Bold Gothic', 'Filled Star Bold', 'Love Bold') },
    intro: (
      <>
        <p className="answer"><strong>How does bold text work without formatting?</strong> Unicode includes complete bold alphabets — serif 𝐁𝐨𝐥𝐝, sans-serif 𝗕𝗼𝗹𝗱 and their italic forms — as separate characters. Replacing your letters with these makes text appear bold in any app, even where there is no formatting toolbar.</p>
        <p>Sans-serif bold (𝗕𝗼𝗹𝗱) is the cleanest choice for social posts. Serif bold (𝐁𝐨𝐥𝐝) looks more formal.</p>
      </>
    ),
    sections: [
      {
        h2: 'Which bold style should you use?',
        body: (
          <table className="cmp">
            <thead><tr><th>Style</th><th>Example</th><th>Good for</th></tr></thead>
            <tbody>
              <tr><td>Bold sans</td><td>𝗡𝗲𝘄 𝗽𝗿𝗼𝗱𝘂𝗰𝘁</td><td>Post headlines, LinkedIn, X</td></tr>
              <tr><td>Bold serif</td><td>𝐍𝐞𝐰 𝐩𝐫𝐨𝐝𝐮𝐜𝐭</td><td>Quotes, formal announcements</td></tr>
              <tr><td>Bold italic sans</td><td>𝙉𝙚𝙬 𝙥𝙧𝙤𝙙𝙪𝙘𝙩</td><td>Emphasis, sports, energy</td></tr>
              <tr><td>Bold script</td><td>𝓝𝓮𝔀 𝓹𝓻𝓸𝓭𝓾𝓬𝓽</td><td>Names, lifestyle posts</td></tr>
              <tr><td>Bold numbers</td><td>𝟏𝟎𝟎 · 𝟮𝟬𝟮𝟲</td><td>Prices, dates, rankings</td></tr>
            </tbody>
          </table>
        ),
      },
      {
        h2: 'Use bold sparingly — here’s why',
        body: (
          <ul>
            <li><strong>Search:</strong> 𝗕𝗼𝗹𝗱 words are different characters, so hashtags and in-app search won’t match them. Never bold a hashtag or keyword you want found.</li>
            <li><strong>Accessibility:</strong> some screen readers spell out each bold letter. Bold one heading, not the whole post.</li>
            <li><strong>Apps with real formatting:</strong> WhatsApp and Discord support *bold* or **bold** natively — see <Link to="/whatsapp-fonts/">WhatsApp fonts</Link> and <Link to="/discord-fonts/">Discord fonts</Link>.</li>
          </ul>
        ),
      },
    ],
    compat: 'Bold letters and digits are part of Unicode 3.1 (2001) and display on effectively all current devices and browsers.',
    howTo: ['Type the words you want in bold.', 'Choose bold sans, serif, italic or script from the Bold tab.', 'Press Copy.', 'Paste into your post, bio or comment.'],
    faq: [
      { q: 'How do I make bold text on Instagram or Facebook?', a: 'Neither app has a bold button, so type your text here, copy a bold style and paste it into your caption, bio or post.' },
      { q: 'Is Unicode bold text bad for SEO or hashtags?', a: 'Bold characters aren’t matched by search, so keep keywords and hashtags in plain text and use bold only for decoration.' },
      { q: 'Can I make bold numbers?', a: 'Yes. Bold serif and bold sans styles include bold digits like 𝟏𝟐𝟑 and 𝟭𝟮𝟯.' },
    ],
    related: ['/facebook-fonts/', '/instagram-fonts/', '/small-caps-fonts/', '/cursive-fonts/', '/'],
    guides: ['/guides/are-fancy-fonts-safe/', '/guides/how-to-copy-and-paste-fonts/'],
  },
  {
    path: '/bubble-fonts/',
    kind: 'category',
    crumb: 'Bubble Fonts',
    title: 'Bubble Fonts — Bubble Letters to Copy & Paste',
    description: 'Bubble letter generator: circled ⓑⓤⓑⓑⓛⓔ, filled 🅑🅤🅑🅑🅛🅔 and squared text. Free bubble fonts to copy and paste for bios, names and posts.',
    h1: 'Bubble Letter Generator',
    lead: 'Circled, filled and squared bubble letters, plus boxed numbers. Type your text and copy the bubble style you like.',
    picksLabel: 'Bubble',
    picks: [...new Set([...CATEGORY_IDS.bubble, ...ids('Fullwidth', 'Boxed 【】', 'Wrap ()')])],
    sample: 'Bubble Text',
    preview: 'Circled',
    showcase: { title: 'Bubble letter examples', sample: 'Pop Star 7', ids: ids('Circled', 'Classic Circled', 'Filled Bubble', 'Squared', 'Classic Squared', 'Parenthesized') },
    intro: (
      <>
        <p className="answer"><strong>What are bubble letters?</strong> Bubble letters are letters inside circles or squares — ⓑⓤⓑⓑⓛⓔ, 🅑🅤🅑🅑🅛🅔, 🄱🅄🄱🄱🄻🄴 — taken from Unicode’s “enclosed alphanumerics” blocks. They give text a rounded, playful look that is popular on TikTok and Instagram.</p>
      </>
    ),
    sections: [
      {
        h2: 'Types of bubble letters',
        body: (
          <table className="cmp">
            <thead><tr><th>Type</th><th>Example</th><th>Notes</th></tr></thead>
            <tbody>
              <tr><td>Circled (outline)</td><td>ⓑⓤⓑⓑⓛⓔ ①②③</td><td>Upper and lower case, digits 0–20 available</td></tr>
              <tr><td>Filled circle</td><td>🅑🅤🅑🅑🅛🅔</td><td>Capitals only; some phones show them as emoji-style</td></tr>
              <tr><td>Squared</td><td>🄱🅄🄱🄱🄻🄴</td><td>Capitals only</td></tr>
              <tr><td>Parenthesized</td><td>⒝⒰⒝⒝⒧⒠</td><td>Lowercase only, looks retro</td></tr>
            </tbody>
          </table>
        ),
      },
      {
        h2: 'Making bubble letters readable',
        body: <p>Bubble letters take more width than normal text, so they work best for one or two short words — a name, a mood or a label like ⓝⓔⓦ. Filled bubbles (🅝🅔🅦) can be rendered as coloured emoji on some phones, which looks bold but can clash with your colour scheme. For a softer look use circled outline letters.</p>,
      },
    ],
    compat: 'Circled letters (Unicode 1.1, 1993) work almost everywhere. Filled and squared letters (Unicode 6.0, 2010) need a reasonably recent device and may look different between iPhone and Android.',
    howTo: ['Type a short word or name.', 'Pick a style from the Bubble tab.', 'Press Copy.', 'Paste it where you want it.'],
    faq: [
      { q: 'Are there bubble numbers?', a: 'Yes. Circled styles turn 0–9 into ⓪①②③④⑤⑥⑦⑧⑨. Filled and squared styles keep digits plain.' },
      { q: 'Why are my filled bubble letters all capitals?', a: 'Unicode only has capital letters in filled and squared bubbles, so lowercase input is shown as capitals.' },
      { q: 'Can I use bubble letters in a TikTok name?', a: 'Yes, in your TikTok display name and bio. The unique @username only accepts plain letters, numbers, underscores and periods.' },
    ],
    related: ['/cute-fonts/', '/tiktok-fonts/', '/cool-fonts/', '/small-caps-fonts/', '/'],
    guides: ['/guides/why-fonts-show-as-boxes/', '/guides/how-to-copy-and-paste-fonts/'],
  },
  {
    path: '/small-caps-fonts/',
    kind: 'category',
    crumb: 'Small Caps',
    title: 'Small Caps Generator — Small Text & Tiny Fonts',
    description: 'Convert text to small caps (ꜱᴍᴀʟʟ ᴄᴀᴘꜱ), superscript and subscript tiny text. Free small text generator — copy and paste anywhere.',
    h1: 'Small Caps & Tiny Text Generator',
    lead: 'Get ꜱᴍᴀʟʟ ᴄᴀᴘꜱ, ˢᵘᵖᵉʳˢᶜʳⁱᵖᵗ and subscript-style tiny text for a clean, minimal look.',
    picksLabel: 'Small text',
    picks: CATEGORY_IDS.smallcaps,
    sample: 'small caps',
    preview: 'Small Caps',
    showcase: { title: 'Small text examples', sample: 'Creator', ids: ids('Small Caps', 'Classic Small Caps', 'Superscript', 'Subscript', '彡 Star wrap', 'Block border') },
    intro: (
      <>
        <p className="answer"><strong>What are small caps?</strong> Small caps are capital-shaped letters at lowercase height — ꜱᴍᴀʟʟ ᴄᴀᴘꜱ. Unicode doesn’t have a dedicated small-caps alphabet, so generators borrow similar letters from the phonetic (IPA) blocks.</p>
        <p>Small caps look tidy and editorial, which makes them a favourite for bio descriptors like “ᴘʜᴏᴛᴏɢʀᴀᴘʜᴇʀ · ʟᴏɴᴅᴏɴ”.</p>
      </>
    ),
    sections: [
      {
        h2: 'Missing letters: what to expect',
        body: (
          <table className="cmp">
            <thead><tr><th>Style</th><th>Missing in Unicode</th><th>What the generator does</th></tr></thead>
            <tbody>
              <tr><td>Small caps</td><td>Q, X</td><td>Uses the closest look-alike (ǫ) or keeps the letter</td></tr>
              <tr><td>Superscript</td><td>q</td><td>Keeps a normal q</td></tr>
              <tr><td>Subscript</td><td>b c d f g q w y z</td><td>Keeps those letters normal size</td></tr>
            </tbody>
          </table>
        ),
      },
      {
        h2: 'Good uses for tiny text',
        body: (
          <ul>
            <li>Bio labels: ᴀʀᴛɪꜱᴛ · ᴅʀᴇᴀᴍᴇʀ · ᴄᴏꜰꜰᴇᴇ</li>
            <li>Footnote-style notes in captions: ᵗʰᵃⁿᵏ ʸᵒᵘ</li>
            <li>Discord display names that look clean in the member list — see <Link to="/discord-fonts/">Discord fonts</Link></li>
            <li>Chemistry or maths in plain-text chats: H₂O, x²</li>
          </ul>
        ),
      },
    ],
    compat: 'Small caps and superscript letters are common phonetic characters with excellent support. Some subscript letters are newer and may fall back to a different font on older Windows PCs.',
    howTo: ['Type your text.', 'Choose small caps, superscript or subscript from the Small caps tab.', 'Press Copy.', 'Paste it into your bio, name or message.'],
    faq: [
      { q: 'Why does small caps text have a normal Q or X?', a: 'Unicode has no small-capital X and only a look-alike for Q, so those letters stay close to normal. Every other letter is converted.' },
      { q: 'Is small caps text readable by screen readers?', a: 'Partly. Some screen readers read the phonetic letters correctly; others skip or spell them. Keep essential information in plain text.' },
      { q: 'What is the difference between small caps and superscript?', a: 'Small caps sit on the normal line at lowercase height. Superscript letters are smaller and raised, like ᵗʰⁱˢ.' },
    ],
    related: ['/bold-fonts/', '/instagram-fonts/', '/discord-fonts/', '/cursive-fonts/', '/'],
    guides: ['/guides/aesthetic-bio-ideas/', '/guides/unicode-fonts-explained/'],
  },
  {
    path: '/glitch-text/',
    kind: 'category',
    crumb: 'Glitch Text',
    title: 'Glitch Text Generator — Zalgo & Creepy Text',
    description: 'Create glitch text, zalgo and creepy cursed text with stacked Unicode marks. Free glitch text generator — copy and paste into posts and chats.',
    h1: 'Glitch Text Generator (Zalgo)',
    lead: 'Distorted, “cursed” text made by stacking accent marks on each letter. Choose light glitch or heavy zalgo and copy.',
    picksLabel: 'Glitch',
    picks: CATEGORY_IDS.glitch,
    sample: 'glitch text',
    preview: 'Zalgo',
    showcase: { title: 'Glitch text examples', sample: 'error', ids: ids('Zalgo', 'Zalgo Heavy', 'Firework', 'Slash Through', 'Tilde Strike', 'Cross X Both') },
    intro: (
      <>
        <p className="answer"><strong>What is glitch text?</strong> Glitch text (also called zalgo or cursed text) is normal text with many Unicode “combining marks” stacked above and below each letter. The marks overlap neighbouring lines, so the text looks corrupted or haunted.</p>
        <p>The generator adds the marks randomly, so each copy is slightly different. Type again or switch tabs to get a new variation.</p>
      </>
    ),
    sections: [
      {
        h2: 'Light vs heavy glitch',
        body: (
          <table className="cmp">
            <thead><tr><th>Level</th><th>Marks per letter</th><th>Use it for</th></tr></thead>
            <tbody>
              <tr><td>Light (Zalgo)</td><td>2</td><td>Spooky captions that stay readable</td></tr>
              <tr><td>Heavy (Zalgo Heavy)</td><td>6</td><td>Horror posts, memes, one-word effects</td></tr>
              <tr><td>Line effects</td><td>1 repeated</td><td>Strike-through, slashes, sparkle effects</td></tr>
            </tbody>
          </table>
        ),
      },
      {
        h2: 'Use glitch text responsibly',
        body: (
          <ul>
            <li>Heavy zalgo can cover other people’s messages in chats; many Discord servers ban it in names. Keep it short.</li>
            <li>Screen readers read every mark or skip the word entirely — never use glitch text for information people need.</li>
            <li>Most username fields strip combining marks. Use glitch text in posts, comments and messages instead. For names, try <Link to="/gothic-fonts/">gothic fonts</Link>.</li>
          </ul>
        ),
      },
    ],
    compat: 'Combining marks are supported everywhere, but how tall the stack looks depends on the app. Some apps clip marks at the line edge or limit how many can be stacked.',
    howTo: ['Type a short word or phrase.', 'Open the Glitch tab and choose a level.', 'Press Copy (each render is a new random variation).', 'Paste into a post, comment or message.'],
    faq: [
      { q: 'Why does my glitch text look different each time?', a: 'The marks are picked at random for every render, so no two results are identical. Copy the one you like best.' },
      { q: 'Can glitch text crash a phone?', a: 'Normal glitch text from this tool won’t. It uses a limited number of marks per letter, far below the extreme strings that have caused rendering bugs in the past.' },
      { q: 'Why was my glitch name removed?', a: 'Many platforms and community moderators remove names with stacked marks because they overlap other text. Use glitch effects in posts instead of names.' },
    ],
    related: ['/cool-fonts/', '/gothic-fonts/', '/gaming-fonts/', '/discord-fonts/', '/'],
    guides: ['/guides/are-fancy-fonts-safe/', '/guides/unicode-fonts-explained/'],
  },

  /* ===================== Tier 3: platforms ===================== */
  {
    path: '/instagram-fonts/',
    kind: 'platform',
    crumb: 'Instagram Fonts',
    title: 'Instagram Fonts — Bio, Name & Caption Fonts to Copy',
    description: 'Instagram fonts for your bio, name and captions. See which fields accept fancy text, character limits and the most readable styles. Free, copy and paste.',
    h1: 'Instagram Fonts for Your Bio, Name & Captions',
    lead: 'Style your Instagram name, bio and captions. Below the generator you’ll find which fields accept fancy fonts and how many characters you get.',
    picksLabel: 'Instagram picks',
    picks: PLATFORM_PICKS.instagram,
    sample: 'Your Name',
    preview: 'Bold Script',
    showcase: { title: 'Instagram bio font examples', sample: 'coffee & sunsets', ids: ids('Bold Script', 'Small Caps', 'Italic Sans', 'Moon border', 'Soft girl', 'Heart Sep') },
    intro: (
      <>
        <p className="answer"><strong>Can you change fonts on Instagram?</strong> Instagram has no font option for bios or captions, but it accepts Unicode text. Copy a styled version of your text from a font generator and paste it into your name, bio, caption or comment, and it keeps the style.</p>
      </>
    ),
    sections: [
      {
        h2: 'Which Instagram fields accept fancy fonts?',
        body: (
          <>
            <table className="cmp">
              <thead><tr><th>Field</th><th>Fancy fonts?</th><th>Limit</th><th>Tip</th></tr></thead>
              <tbody>
                <tr><td>Username (@handle)</td><td>No</td><td>30 characters</td><td>Letters, numbers, periods and underscores only</td></tr>
                <tr><td>Name</td><td>Yes</td><td>30 characters</td><td>Can only be changed twice in 14 days</td></tr>
                <tr><td>Bio</td><td>Yes</td><td>150 characters</td><td>Style one line, keep the rest plain</td></tr>
                <tr><td>Captions</td><td>Yes</td><td>2,200 characters</td><td>Keep hashtags in plain text</td></tr>
                <tr><td>Comments &amp; Stories text</td><td>Yes</td><td>—</td><td>Stories also have Instagram’s own fonts</td></tr>
              </tbody>
            </table>
            <p className="small">Limits as shown in the Instagram app at the time of writing; Instagram can change them.</p>
          </>
        ),
      },
      {
        h2: 'Make your name searchable',
        body: <p>Instagram search matches plain letters. If your name field is 𝓜𝓲𝓪 𝓡𝓸𝓼𝓮, people typing “Mia Rose” may not find you. Keep your @username close to your real name, or mention it in plain text in your bio. Style emojis and symbols freely — they don’t affect search.</p>,
      },
      {
        h2: 'Bio layouts that work',
        body: (
          <>
            <p>A strong Instagram bio has one styled line and three short plain lines. Find ready-made layouts in our <Link to="/guides/aesthetic-bio-ideas/">aesthetic bio ideas</Link> guide.</p>
            <pre className="template">{'𝓜𝓲𝓪 𝓡𝓸𝓼𝓮\nꜰɪʟᴍ ᴘʜᴏᴛᴏɢʀᴀᴘʜᴇʀ · ʟᴏɴᴅᴏɴ\n☾ shooting light & quiet places\n↓ prints + bookings'}</pre>
          </>
        ),
      },
    ],
    compat: 'Instagram displays Unicode styles on iPhone, Android and the web. What it can’t do is control the font each device uses, so a style can look slightly different on a friend’s phone.',
    howTo: ['Type your name or bio line above and copy a style.', 'In Instagram, tap Edit profile.', 'Paste into Name or Bio (not Username).', 'Check the preview, then tap Done / Save.'],
    faq: [
      { q: 'Why can’t I put a fancy font in my Instagram username?', a: 'Instagram usernames only allow letters, numbers, periods and underscores. Use the fancy version in your Name field instead.' },
      { q: 'Do Instagram fonts affect reach?', a: 'There is no public evidence that styled text changes reach, but styled hashtags and keywords won’t be matched by search. Keep those plain.' },
      { q: 'Can I use different fonts in Instagram Stories?', a: 'Yes. Stories have a built-in font picker, and you can also paste Unicode styles into the Stories text tool.' },
      { q: 'Why did my bio get cut short?', a: 'Some apps count styled letters as two characters, so a 150-character limit fills faster. Shorten the styled line or style fewer words.' },
    ],
    related: ['/cursive-fonts/', '/small-caps-fonts/', '/tiktok-fonts/', '/facebook-fonts/', '/symbols/'],
    guides: ['/guides/aesthetic-bio-ideas/', '/guides/how-to-copy-and-paste-fonts/'],
  },
  {
    path: '/tiktok-fonts/',
    kind: 'platform',
    crumb: 'TikTok Fonts',
    title: 'TikTok Fonts — Fancy Fonts for TikTok Name & Bio',
    description: 'TikTok fonts for your display name, bio and comments. Learn which fields accept fancy text and the 30/80 character limits. Free copy and paste fonts.',
    h1: 'TikTok Fonts for Your Name, Bio & Comments',
    lead: 'Make your TikTok name and bio stand out in the For You feed. Copy a style below, then check the field rules underneath.',
    picksLabel: 'TikTok picks',
    picks: PLATFORM_PICKS.tiktok,
    sample: 'Your Name',
    preview: 'Filled Bubble',
    showcase: { title: 'TikTok name examples', sample: 'Jade', ids: ids('Bold Script', 'Filled Bubble', 'Circled', 'Fullwidth', 'Y2K style', 'Border ꧁꧂ Script') },
    intro: (
      <>
        <p className="answer"><strong>How do you get fancy fonts on TikTok?</strong> Copy styled text from a font generator and paste it into your TikTok Name or Bio under Edit profile. The @username doesn’t accept fancy characters, but the display name, bio and comments do.</p>
      </>
    ),
    sections: [
      {
        h2: 'TikTok profile fields and limits',
        body: (
          <>
            <table className="cmp">
              <thead><tr><th>Field</th><th>Fancy fonts?</th><th>Limit</th><th>Note</th></tr></thead>
              <tbody>
                <tr><td>Username</td><td>No</td><td>24 characters</td><td>Letters, numbers, underscores, periods; change every 30 days</td></tr>
                <tr><td>Name</td><td>Yes</td><td>30 characters</td><td>Can be changed every 7 days</td></tr>
                <tr><td>Bio</td><td>Yes</td><td>80 characters</td><td>Styled letters can use the limit faster</td></tr>
                <tr><td>Comments</td><td>Yes</td><td>150 characters</td><td>Good place for one styled word</td></tr>
              </tbody>
            </table>
            <p className="small">Limits as shown in the TikTok app at the time of writing.</p>
          </>
        ),
      },
      {
        h2: 'What looks good on TikTok',
        body: (
          <ul>
            <li><strong>Names:</strong> bold script, bubble letters (🅙🅐🅓🅔) and fullwidth vaporwave text are the most visible on small video overlays.</li>
            <li><strong>Bios:</strong> 80 characters disappears fast. Style 1–2 words and use symbols such as ✦ or ☾ as separators.</li>
            <li><strong>Video text:</strong> TikTok’s editor has its own fonts; Unicode styles can also be pasted into on-screen text.</li>
          </ul>
        ),
      },
    ],
    compat: 'TikTok renders Unicode on iOS, Android and web. Filled bubble letters may appear as coloured emoji on iPhone and as plain glyphs on some Android phones.',
    howTo: ['Copy a style from the generator.', 'Open TikTok → Profile → Edit profile.', 'Tap Name or Bio and paste.', 'Save, then view your profile to check it.'],
    faq: [
      { q: 'Can I change my TikTok username to a fancy font?', a: 'No. TikTok usernames only accept letters, numbers, underscores and periods. Put the fancy version in your Name field.' },
      { q: 'Why does my TikTok bio say it’s too long?', a: 'Many styled letters are stored as two characters, so they fill the 80-character limit sooner. Style fewer words.' },
      { q: 'Which TikTok font is most popular?', a: 'Bold script and bubble letters are among the most common for names because they stay readable over videos.' },
    ],
    related: ['/bubble-fonts/', '/cute-fonts/', '/instagram-fonts/', '/stylish-text/', '/'],
    guides: ['/guides/aesthetic-bio-ideas/', '/guides/how-to-copy-and-paste-fonts/'],
  },
  {
    path: '/discord-fonts/',
    kind: 'platform',
    crumb: 'Discord Fonts',
    title: 'Discord Fonts — Fancy Names, Nicknames & Channel Text',
    description: 'Discord fonts for display names, server nicknames, channels and messages. Plus Discord markdown tips and what usernames allow. Free copy and paste.',
    h1: 'Discord Fonts for Names, Servers & Messages',
    lead: 'Style your Discord display name, server nickname, channel names and messages. Discord also has built-in markdown — we show both below.',
    picksLabel: 'Discord picks',
    picks: PLATFORM_PICKS.discord,
    sample: 'Server Name',
    preview: 'Small Caps',
    showcase: { title: 'Discord name examples', sample: 'Raid Night', ids: ids('Small Caps', 'Bold Sans', 'Monospace', 'Bold Gothic', 'Double line', 'Block border') },
    intro: (
      <>
        <p className="answer"><strong>Can you use fancy fonts on Discord?</strong> Yes — in your display name, server nicknames, server and channel names, About Me and messages. Your unique Discord username is limited to lowercase letters, numbers, underscores and periods.</p>
      </>
    ),
    sections: [
      {
        h2: 'Discord markdown vs Unicode fonts',
        body: (
          <>
            <p>Discord messages support markdown, which is often the better choice for chat because it stays searchable and accessible:</p>
            <table className="cmp">
              <thead><tr><th>Type this</th><th>Result</th><th>Unicode alternative</th></tr></thead>
              <tbody>
                <tr><td><code>**bold**</code></td><td>bold</td><td>𝗯𝗼𝗹𝗱</td></tr>
                <tr><td><code>*italic*</code></td><td>italic</td><td>𝘪𝘵𝘢𝘭𝘪𝘤</td></tr>
                <tr><td><code>__underline__</code></td><td>underline</td><td>u̲n̲d̲e̲r̲l̲i̲n̲e̲</td></tr>
                <tr><td><code>~~strike~~</code></td><td>strikethrough</td><td>s̶t̶r̶i̶k̶e̶</td></tr>
                <tr><td><code>`code`</code></td><td>monospace</td><td>𝚌𝚘𝚍𝚎</td></tr>
                <tr><td><code># Heading</code></td><td>large heading</td><td>—</td></tr>
              </tbody>
            </table>
            <p>Markdown doesn’t work in names, channel names or the member list — that’s where Unicode fonts are useful.</p>
          </>
        ),
      },
      {
        h2: 'Where fancy text works on Discord',
        body: (
          <table className="cmp">
            <thead><tr><th>Place</th><th>Fancy fonts?</th><th>Limit</th></tr></thead>
            <tbody>
              <tr><td>Username</td><td>No (a–z, 0–9, _ and .)</td><td>2–32</td></tr>
              <tr><td>Display name</td><td>Yes</td><td>32</td></tr>
              <tr><td>Server nickname</td><td>Yes (server rules may restrict)</td><td>32</td></tr>
              <tr><td>About Me</td><td>Yes</td><td>190</td></tr>
              <tr><td>Channel names</td><td>Yes; text channels are lowercased, spaces become dashes</td><td>100</td></tr>
            </tbody>
          </table>
        ),
      },
      {
        h2: 'Server owner tips',
        body: (
          <ul>
            <li>Use one consistent style for category names (for example small caps) and plain text for channels so members can still search them.</li>
            <li>Add a symbol prefix to channels — ✦・general, 📌・rules — for a tidy sidebar. Find more in <Link to="/symbols/">aesthetic symbols</Link>.</li>
            <li>Consider banning heavy <Link to="/glitch-text/">zalgo text</Link> in nicknames; it overlaps the member list.</li>
          </ul>
        ),
      },
    ],
    compat: 'Discord desktop, web and mobile all display Unicode styles. Members on very old Android phones may see boxes for rare symbols.',
    howTo: ['Copy a style from the generator.', 'For a server nickname: right-click (or long-press) your name in the server → Edit Server Profile.', 'For your display name: User Settings → Profiles.', 'Paste and save.'],
    faq: [
      { q: 'Can my Discord username use fancy fonts?', a: 'No. Since Discord’s username update, unique usernames only allow lowercase letters, numbers, underscores and periods. Your display name and server nicknames accept fancy text.' },
      { q: 'How do I make bold text in Discord?', a: 'Wrap the text in two asterisks: **like this**. Use Unicode bold only where markdown doesn’t work, such as names.' },
      { q: 'Why did a server reset my nickname?', a: 'Some servers use bots that remove decorated or hard-to-mention nicknames. Check the server rules.' },
    ],
    related: ['/gaming-fonts/', '/small-caps-fonts/', '/glitch-text/', '/symbols/', '/'],
    guides: ['/guides/are-fancy-fonts-safe/', '/guides/how-to-copy-and-paste-fonts/'],
  },
  {
    path: '/whatsapp-fonts/',
    kind: 'platform',
    crumb: 'WhatsApp Fonts',
    title: 'WhatsApp Fonts — Stylish Text for Chats, About & Status',
    description: 'WhatsApp fonts: built-in bold, italic, strikethrough and monospace codes plus Unicode styles for your name, About and status. Free copy and paste.',
    h1: 'WhatsApp Fonts & Text Formatting',
    lead: 'WhatsApp has four built-in formats. For anything else — cursive, bubble, frames — copy a Unicode style from the generator.',
    picksLabel: 'WhatsApp picks',
    picks: PLATFORM_PICKS.whatsapp,
    sample: 'Good Morning',
    preview: 'Script',
    showcase: { title: 'WhatsApp message examples', sample: 'Happy Birthday', ids: ids('Bold Script', 'Script', 'Heart Script', 'Flower Script', 'Love Bold', '💖 💖 Frame') },
    intro: (
      <>
        <p className="answer"><strong>How do you change the font in WhatsApp?</strong> In a chat, wrap text in symbols: *bold*, _italic_, ~strikethrough~ or ```monospace```. For cursive, bubble or decorative styles, copy Unicode text from a generator and paste it into the message, your name, About or a group name.</p>
      </>
    ),
    sections: [
      {
        h2: 'WhatsApp’s built-in formatting',
        body: (
          <table className="cmp">
            <thead><tr><th>Type</th><th>Result</th></tr></thead>
            <tbody>
              <tr><td><code>*text*</code></td><td><strong>bold</strong></td></tr>
              <tr><td><code>_text_</code></td><td><em>italic</em></td></tr>
              <tr><td><code>~text~</code></td><td><s>strikethrough</s></td></tr>
              <tr><td><code>```text```</code></td><td><code>monospace</code></td></tr>
              <tr><td><code>`text`</code></td><td>inline code</td></tr>
              <tr><td><code>&gt; text</code></td><td>quote block</td></tr>
              <tr><td><code>- text</code> or <code>1. text</code></td><td>lists</td></tr>
            </tbody>
          </table>
        ),
      },
      {
        h2: 'Where Unicode styles help',
        body: (
          <ul>
            <li><strong>Your name</strong> (25 characters) and <strong>About</strong> (139 characters) don’t support the * _ ~ codes, but they do accept Unicode styles.</li>
            <li><strong>Group names</strong> — a styled group name like 🌸 𝓑𝓮𝓼𝓽𝓲𝓮𝓼 🌸 is easy to spot in a long chat list.</li>
            <li><strong>Greetings</strong> — cursive or framed text for birthdays and holidays, which the built-in codes can’t do.</li>
          </ul>
        ),
      },
    ],
    compat: 'WhatsApp shows Unicode styles on Android, iPhone, WhatsApp Web and desktop. If a friend sees boxes, their phone’s system fonts are older — switch to bold or script styles.',
    howTo: ['Type your message above and copy a style.', 'Open the chat, your profile (name/About) or group info.', 'Long-press the text field and choose Paste.', 'Send or save.'],
    faq: [
      { q: 'How do I write bold in WhatsApp?', a: 'Put an asterisk on each side of the text, like *hello*. WhatsApp shows it in bold after you send it.' },
      { q: 'Can I use cursive in WhatsApp?', a: 'Yes. WhatsApp has no cursive code, but you can copy cursive Unicode text from the generator and paste it into any message, name or status.' },
      { q: 'Will the other person see my fancy font?', a: 'Yes. Unicode text is sent as characters, so the recipient sees the same style as long as their phone has fonts for those characters.' },
    ],
    related: ['/cursive-fonts/', '/cute-fonts/', '/bold-fonts/', '/facebook-fonts/', '/symbols/'],
    guides: ['/guides/how-to-copy-and-paste-fonts/', '/guides/why-fonts-show-as-boxes/'],
  },
  {
    path: '/facebook-fonts/',
    kind: 'platform',
    crumb: 'Facebook Fonts',
    title: 'Facebook Fonts — Bold & Fancy Text for Posts and Comments',
    description: 'Facebook fonts for posts, comments, bio and Pages. Bold, italic and script Unicode text that works in the feed — plus what the name field allows.',
    h1: 'Facebook Fonts for Posts, Comments & Bio',
    lead: 'Facebook posts have no bold or italic button. Copy a Unicode style below to add emphasis to posts, comments and your intro.',
    picksLabel: 'Facebook picks',
    picks: PLATFORM_PICKS.facebook,
    sample: 'Big Announcement',
    preview: 'Bold Sans',
    showcase: { title: 'Facebook post examples', sample: 'Sale ends Sunday', ids: ids('Bold Sans', 'Bold', 'Italic Sans', 'Bold Script', 'Filled Star Bold', 'Strikethrough') },
    intro: (
      <>
        <p className="answer"><strong>How do you bold text on Facebook?</strong> Facebook doesn’t offer bold in regular posts, so people use Unicode bold characters: type your text in a font generator, copy the bold style and paste it into your post or comment.</p>
      </>
    ),
    sections: [
      {
        h2: 'What works where on Facebook',
        body: (
          <>
            <table className="cmp">
              <thead><tr><th>Place</th><th>Unicode styles?</th><th>Note</th></tr></thead>
              <tbody>
                <tr><td>Posts &amp; comments</td><td>Yes</td><td>Best place for bold headlines</td></tr>
                <tr><td>Intro / bio</td><td>Yes</td><td>101 characters</td></tr>
                <tr><td>Page posts</td><td>Yes</td><td>Keep links and prices in plain text</td></tr>
                <tr><td>Profile name</td><td>Usually rejected</td><td>Facebook’s name standards don’t allow symbols or unusual characters</td></tr>
                <tr><td>Messenger</td><td>Yes</td><td>Pastes like any text</td></tr>
              </tbody>
            </table>
            <p>Because the profile name follows Facebook’s name policy, use styles in posts and your intro rather than trying to change your name.</p>
          </>
        ),
      },
      {
        h2: 'Formatting long posts',
        body: (
          <ul>
            <li>Use a 𝗯𝗼𝗹𝗱 𝘀𝗮𝗻𝘀 headline, then plain paragraphs.</li>
            <li>Use symbols as bullets (✔ ➜ •) so lists stay scannable — see <Link to="/symbols/">symbols</Link>.</li>
            <li>Use s̶t̶r̶i̶k̶e̶t̶h̶r̶o̶u̶g̶h̶ for old prices next to a new one.</li>
            <li>Don’t style the whole post — mobile readers skim, and screen readers struggle with long styled passages.</li>
          </ul>
        ),
      },
    ],
    compat: 'Unicode bold and italic display in the Facebook app and website on all current devices.',
    howTo: ['Type your headline above and copy a bold style.', 'Start a Facebook post or comment.', 'Paste the styled text, then add plain text below.', 'Post.'],
    faq: [
      { q: 'Can I use a fancy font in my Facebook name?', a: 'Usually not. Facebook’s name standards reject symbols and unusual characters, which includes most Unicode styles. Use them in posts and your intro instead.' },
      { q: 'Does bold text work in Facebook groups?', a: 'Yes. Unicode bold pastes into group posts and comments. Some groups’ admin tools also offer native formatting for announcements.' },
      { q: 'Will bold text hurt my post’s reach?', a: 'There is no public evidence that it does, but styled words aren’t matched by search. Keep important keywords in plain text.' },
    ],
    related: ['/bold-fonts/', '/instagram-fonts/', '/whatsapp-fonts/', '/fancy-fonts/', '/'],
    guides: ['/guides/are-fancy-fonts-safe/', '/guides/how-to-copy-and-paste-fonts/'],
  },
  {
    path: '/gaming-fonts/',
    kind: 'platform',
    crumb: 'Gaming Fonts',
    title: 'Gaming Fonts — Stylish Names for Free Fire, PUBG & More',
    description: 'Gaming fonts and stylish name symbols for Free Fire, PUBG Mobile, Steam and Discord. Which games accept them, length tips and clan tag ideas.',
    h1: 'Gaming Fonts & Stylish Gamer Names',
    lead: 'Build a gamer tag with gothic letters, Asian-style text and symbol frames. Check the game notes below before you spend a rename card.',
    picksLabel: 'Gaming picks',
    picks: PLATFORM_PICKS.gaming,
    sample: 'Shadow',
    preview: 'Border ꧁꧂ Gothic',
    showcase: { title: 'Gamer name examples', sample: 'Viper', ids: ids('Border ꧁꧂ Gothic', 'Bold Gothic', 'Asian Blocks', '彡彡 bold wrap', 'Crown Gothic', 'Block Caps') },
    intro: (
      <>
        <p className="answer"><strong>How do you make a stylish gaming name?</strong> Combine one readable letter style (bold gothic, small caps or Asian-style letters) with a short symbol frame, keep it within the game’s length limit, and test it in the rename preview before confirming.</p>
      </>
    ),
    sections: [
      {
        h2: 'Which games accept fancy names?',
        body: (
          <>
            <table className="cmp">
              <thead><tr><th>Game / platform</th><th>Fancy characters</th><th>Notes</th></tr></thead>
              <tbody>
                <tr><td>Free Fire</td><td>Many symbols and styles</td><td>Name changes cost diamonds or a name-change card — test first</td></tr>
                <tr><td>PUBG Mobile</td><td>Some symbols</td><td>Uses a rename card; short limit, so frames eat space</td></tr>
                <tr><td>Steam (profile name)</td><td>Yes</td><td>Account name is separate and plain</td></tr>
                <tr><td>Discord</td><td>Display name: yes</td><td>See <Link to="/discord-fonts/">Discord fonts</Link></td></tr>
                <tr><td>Roblox</td><td>Username: no</td><td>Usernames allow letters, numbers and one underscore; display names are filtered</td></tr>
                <tr><td>Minecraft (Java)</td><td>No</td><td>Letters, numbers and underscore, 3–16 characters</td></tr>
                <tr><td>Xbox gamertag</td><td>Limited</td><td>Mostly letters, numbers and spaces</td></tr>
              </tbody>
            </table>
            <p className="small">Game rules change often and can differ by region. The in-game rename screen is the final word.</p>
          </>
        ),
      },
      {
        h2: 'Clan tags and squad names',
        body: (
          <>
            <p>Clan tags need to be short and identical for every member. Brackets with a bold or small-caps tag are the most reliable:</p>
            <table className="cmp">
              <thead><tr><th>Format</th><th>Example</th></tr></thead>
              <tbody>
                <tr><td>Square brackets</td><td>【𝐓𝐒】 Viper</td></tr>
                <tr><td>Star wrap</td><td>★彡 ᴛꜱ 彡★ Viper</td></tr>
                <tr><td>Simple prefix</td><td>ᴛꜱ・Viper</td></tr>
                <tr><td>Royal frame</td><td>꧁ 𝕿𝕾 ꧂ Viper</td></tr>
              </tbody>
            </table>
          </>
        ),
      },
      {
        h2: 'Keep it readable in-game',
        body: <p>Names appear tiny in kill feeds and scoreboards. Heavy <Link to="/glitch-text/">glitch effects</Link> become a smudge, and some games replace unsupported characters with “?” in other players’ views. Gothic capitals and small caps stay legible, which is why they’re the classic choice — see <Link to="/gothic-fonts/">gothic fonts</Link>.</p>,
      },
    ],
    compat: 'Even when a game accepts a character, other players need a font that contains it. Frames using ꧁ ꧂ or rare scripts may show as boxes for players on older PCs or consoles.',
    howTo: ['Type your gamer name above and copy a style.', 'Open the game’s rename screen.', 'Paste and look at the preview — make sure nothing turned into ? or boxes.', 'Only then confirm the paid name change.'],
    faq: [
      { q: 'Why does my game say the name is invalid?', a: 'The game blocks some characters or counts styled letters as two characters. Try a shorter name, fewer symbols or a simpler style like small caps.' },
      { q: 'Can other players see my stylish name?', a: 'Usually yes, but if their device lacks a font for a symbol they’ll see a box. Common styles like gothic and small caps are the safest.' },
      { q: 'What is the best font for a Free Fire name?', a: 'Bold gothic or small caps inside a short frame such as ꧁ ꧂ or ★彡 彡★ are popular because they stay readable in the lobby and kill feed.' },
    ],
    related: ['/gothic-fonts/', '/cool-fonts/', '/discord-fonts/', '/stylish-text/', '/symbols/'],
    guides: ['/guides/why-fonts-show-as-boxes/', '/guides/are-fancy-fonts-safe/'],
  },
];

export const LANDING_BY_PATH = Object.fromEntries(LANDINGS.map((l) => [l.path, l]));

/* Popular / aesthetic lists re-exported for the homepage. */
export { POPULAR, AESTHETIC };

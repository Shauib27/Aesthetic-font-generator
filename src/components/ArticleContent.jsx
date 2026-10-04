import {
  Type, Heart, Copy, Smartphone, Zap, UserX,
} from 'lucide-react';
import FAQ from './FAQ';
import CopyChip from './CopyChip';

export default function ArticleContent() {
  return (
    <article className="article-section">
      <div className="container container--narrow">
        {/* HOMEPAGE ARTICLE START */}

        <section id="what-is-a-font-generator">
          <h2>What is an Aesthetic Font Generator?</h2>
          <p>
            An aesthetic font generator is a simple tool that changes plain text into soft, pastel, and dreamy styles you can copy and paste. It doesn&apos;t install a new font on your phone or computer. Instead, it swaps your letters for special Unicode characters that already exist online, so the new look travels with your text wherever you paste it.
          </p>
          <p>
            This is why a good aesthetic font maker works on almost any app, even ones that don&apos;t offer font options. You type a word once, and the tool shows you that same word in dozens of styles, from soft cursive and small caps to pastel wraps and dreamy symbol borders. Pick the one that matches your vibe, copy it, and it&apos;s ready to use.
          </p>
        </section>

        <section id="how-to-use-the-font-generator">
          <h2>How to Use the Font Generator</h2>
          <p>
            Styling your text only takes a few seconds. There&apos;s no app to install and nothing to learn. Just follow these five steps.
          </p>
          <div className="steps-list">
            <div className="steps-list__row">
              <span className="steps-list__num">1</span>
              <div>
                <h3>Enter Your Text</h3>
                <p>Type or paste the word, name, or sentence you want to style into the box at the top of the page. It can be as short as one word or as long as a full bio.</p>
              </div>
            </div>
            <div className="steps-list__row">
              <span className="steps-list__num">2</span>
              <div>
                <h3>Browse Aesthetic Styles</h3>
                <p>Once you type your text, the tool shows it in many soft and dreamy styles at the same time. Scroll through and see exactly how your text will look in each one.</p>
              </div>
            </div>
            <div className="steps-list__row">
              <span className="steps-list__num">3</span>
              <div>
                <h3>Choose Your Favorite Style</h3>
                <p>Look through the styles and pick the one that fits your mood or your platform best. Some styles feel soft and dreamy, others lean cute or pastel — pick what fits your profile.</p>
              </div>
            </div>
            <div className="steps-list__row">
              <span className="steps-list__num">4</span>
              <div>
                <h3>Copy with One Click</h3>
                <p>Click on the style you like, and it gets copied to your clipboard right away. There&apos;s no need to select or highlight anything yourself.</p>
              </div>
            </div>
            <div className="steps-list__row">
              <span className="steps-list__num">5</span>
              <div>
                <h3>Paste Anywhere</h3>
                <p>Open the app or website where you want to use your new text, and paste it in. Your aesthetic font will show up exactly as you saw it in the generator.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="browse-font-styles">
          <h2>Browse Font Styles</h2>
          <p>
            There are many kinds of aesthetic styles to choose from, each with its own mood. Here&apos;s a simple breakdown of the main categories from this font generator.
          </p>
          <div className="category-grid">
            <div className="category-card">
              <h3>Pastel Fonts</h3>
              <p>Pastel font styles give your text a soft, muted look that feels calm rather than loud. They work well for moodboard-style profiles and gentle, minimal bios.</p>
            </div>
            <div className="category-card">
              <h3>Dreamy Fonts</h3>
              <p>Dreamy fonts mix flowing script with small symbol accents like stars and clouds. They&apos;re a good pick when you want your text to feel softly cinematic.</p>
            </div>
            <div className="category-card">
              <h3>Cute Fonts</h3>
              <p>Cute fonts have a playful, kawaii-leaning look, often paired with bows, hearts, or little creature emoji. They&apos;re a favorite for younger audiences and playful profiles.</p>
            </div>
            <div className="category-card">
              <h3>Cursive &amp; Script</h3>
              <p>Cursive fonts have soft, flowing shapes that feel elegant and personal. People often use them for bios, quotes, or a more graceful signature line.</p>
            </div>
            <div className="category-card">
              <h3>Y2K Fonts</h3>
              <p>Y2K-style fonts lean into sparkly stars and bubble shapes reminiscent of early-2000s internet design. They suit a nostalgic, playful profile.</p>
            </div>
            <div className="category-card">
              <h3>Cottagecore Fonts</h3>
              <p>Cottagecore styles pair soft script with nature symbols like wheat, mushrooms, and petals. They fit a slow-living, nature-inspired aesthetic.</p>
            </div>
            <div className="category-card">
              <h3>Minimal Fonts</h3>
              <p>Minimal fonts keep things clean and simple, with just a small twist on regular letters. They&apos;re great if you want a subtle change without making your text hard to read.</p>
            </div>
            <div className="category-card">
              <h3>Elegant Fonts</h3>
              <p>Elegant fonts lean toward a classy, refined style, often with thin lines or extra spacing. They suit a polished, grown-up profile.</p>
            </div>
            <div className="category-card">
              <h3>Framed Letters</h3>
              <p>Framed letters place each character inside a small circle or box. This style works nicely for usernames or a single word you want to highlight.</p>
            </div>
            <div className="category-card">
              <h3>Decorated Fonts</h3>
              <p>Decorated fonts add extra symbols around your text, like stars, flowers, or sparkles. They&apos;re popular for making captions or bios feel more finished.</p>
            </div>
            <div className="category-card">
              <h3>Symbol Fonts</h3>
              <p>Symbol fonts replace letters with special characters that still read like the alphabet. They give your text a soft, artistic feel.</p>
            </div>
            <div className="category-card">
              <h3>Mixed &amp; Random</h3>
              <p>Mixed styles blend a few looks together for a one-of-a-kind combination. The random button is a quick way to discover a look you might not have picked yourself.</p>
            </div>
          </div>
        </section>

        <section id="popular-font-styles">
          <h2>Popular Font Styles</h2>
          <p>
            Some styles are used more than others because they&apos;re soft, easy to read, and work almost everywhere. Here are the most popular ones from this aesthetic text generator.
          </p>
          <h3>Soft Script</h3>
          <p>Soft script styles look like gentle handwriting, giving your text a personal, dreamy touch. They&apos;re a common choice for bios and quotes.</p>
          <h3>Small Caps</h3>
          <p>Small caps turn your text into neat, uniform capital letters that stay easy to read. This style works well for names or short headings.</p>
          <h3>Fullwidth</h3>
          <p>Fullwidth characters add gentle spacing between every letter for a calm, airy look. It&apos;s a favorite for minimal, moodboard-style bios.</p>
          <h3>Circled &amp; Bubble</h3>
          <p>Circled and bubble styles wrap each letter in a soft round shape. It&apos;s a playful, rounded option for usernames or short words.</p>
          <h3>Pastel Symbol Wraps</h3>
          <p>Pastel wraps surround your words in soft symbols like clouds, bubbles, or petals. It&apos;s a simple way to make a short phrase feel finished.</p>
          <h3>Y2K Star Wraps</h3>
          <p>Y2K star wraps add sparkly, nostalgic accents around your text. They work great for playful usernames and story text.</p>
        </section>

        <section id="features-of-our-font-generator">
          <h2>Features of This Font Generator</h2>
          <p>This tool comes packed with a few handy features that make styling text quick and easy.</p>
          <div className="features">
            <div className="feature-card">
              <div className="feature-card__icon"><Type size={18} aria-hidden="true" /></div>
              <h3>280+ Font Styles</h3>
              <p>Pick from a huge range of aesthetic styles, from soft script to pastel symbol wraps.</p>
            </div>
            <div className="feature-card">
              <div className="feature-card__icon"><Heart size={18} aria-hidden="true" /></div>
              <h3>Custom Favorites List</h3>
              <p>Save the styles you use most so you don&apos;t have to search for them again.</p>
            </div>
            <div className="feature-card">
              <div className="feature-card__icon"><Copy size={18} aria-hidden="true" /></div>
              <h3>Instant Copy &amp; Paste</h3>
              <p>One click copies your chosen style, ready to paste anywhere.</p>
            </div>
            <div className="feature-card">
              <div className="feature-card__icon"><Smartphone size={18} aria-hidden="true" /></div>
              <h3>Works on Mobile &amp; Desktop</h3>
              <p>Use the tool the same way on your phone or your computer.</p>
            </div>
            <div className="feature-card">
              <div className="feature-card__icon"><Zap size={18} aria-hidden="true" /></div>
              <h3>Fast &amp; Free</h3>
              <p>No waiting, no payment, no hidden limits on how much you can use it.</p>
            </div>
            <div className="feature-card">
              <div className="feature-card__icon"><UserX size={18} aria-hidden="true" /></div>
              <h3>No Signup Required</h3>
              <p>Start styling your text right away, with no account needed.</p>
            </div>
          </div>
        </section>

        <section id="best-uses-for-fancy-fonts">
          <h2>Best Uses for Aesthetic Fonts</h2>
          <p>Aesthetic fonts aren&apos;t just for looks. People use them in many everyday places to make a profile feel curated.</p>
          <h3>Social Media Profiles</h3>
          <p>Social media is the most common place people use aesthetic fonts, since most platforms don&apos;t offer built-in font options. A soft bio or caption is an easy way to make your profile feel more like you.</p>
          <h3>Instagram Fonts</h3>
          <p>Instagram fonts work well in bios and captions, where a bit of pastel styling can make your profile stand out in someone&apos;s feed. A dreamy bio or a soft quote is a simple way to add personality.</p>
          <h3>Pinterest &amp; Moodboards</h3>
          <p>Pinterest boards and digital moodboards often use soft, minimal text to match a curated theme. Aesthetic fonts fit naturally into titles and pin descriptions.</p>
          <h3>TikTok &amp; Threads</h3>
          <p>These platforms support fancy text since it&apos;s made of regular Unicode characters. People use it for captions, comments, and usernames to stand out gently from the crowd.</p>
          <h3>Journaling &amp; Notes Apps</h3>
          <p>Aesthetic fonts can help highlight headings or favorite quotes in digital journals and note-taking apps. This makes key lines easier to spot at a glance.</p>
          <h3>Folder &amp; File Names</h3>
          <p>You can use aesthetic fonts to give your folders and files a more personal, organized look. It&apos;s a small trick that makes browsing your computer a bit more pleasant.</p>
        </section>

        <section id="decorative-symbols-and-borders">
          <h2>Decorative Symbols &amp; Border Frames</h2>
          <p>
            Styled letters are only half the picture. Wrapping your text in a soft symbol border is a quick way to turn a plain name into something that looks curated on purpose. Every symbol below is regular Unicode too, so it copies and pastes exactly like the font styles above.
          </p>
          <div className="symbol-grid">
            <div className="symbol-card">
              <h3>Stars &amp; Sparkle</h3>
              <CopyChip text="*ੈ✩‧₊˚ your text ˚₊‧✩ੈ*" />
              <CopyChip text="⋆｡𖦹°‧ your text ‧°𖦹｡⋆" />
            </div>
            <div className="symbol-card">
              <h3>Soft &amp; Floral</h3>
              <CopyChip text="⊱❀⊰ your text ⊱❀⊰" />
              <CopyChip text="⋅˚₊‧ ꒰ঌ your text ໒꒱ ‧₊˚⋅" />
            </div>
            <div className="symbol-card">
              <h3>Clouds &amp; Moon</h3>
              <CopyChip text="｡☁︎ your text ☁︎｡" />
              <CopyChip text="☽ your text ☾" />
            </div>
            <div className="symbol-card">
              <h3>Cute &amp; Playful</h3>
              <CopyChip text="(｡•ᴗ•｡) your text (｡•ᴗ•｡)" />
              <CopyChip text="🎀 your text 🎀" />
            </div>
          </div>
          <p>
            Swap &quot;your text&quot; for your own name or word after pasting, or type it straight into the box at the top of the page and copy a matching font style to drop in the middle.
          </p>
        </section>

        <section id="aesthetic-bio-templates">
          <h2>Ready-to-Use Bio Templates</h2>
          <p>
            If you&apos;d rather start from something finished than build a bio piece by piece, here are a few complete templates. Copy one, swap in your own name and details, and paste it straight into your profile.
          </p>
          <div className="template-grid">
            <div className="template-card">
              <h3>Soft &amp; Dreamy</h3>
              <CopyChip
                multiline
                text={'⋆｡˚ 𝒴𝑜𝓊𝓇 𝒩𝒶𝓂𝑒 ˚｡⋆\n𝒹𝓇𝑒𝒶𝓂𝑒𝓇 · 𝒸𝓇𝑒𝒶𝓉𝑜𝓇 · 𝓈𝓉𝑜𝓇𝓎𝓉𝑒𝓁𝓁𝑒𝓇\n✧ links below ✧'}
              />
            </div>
            <div className="template-card">
              <h3>Pastel &amp; Soft</h3>
              <CopyChip
                multiline
                text={'｡☁︎ 𝚈𝚘𝚞𝚛 𝙽𝚊𝚖𝚎 ☁︎｡\n𝘴𝘰𝘧𝘵 𝘷𝘪𝘣𝘦𝘴 𝘰𝘯𝘭𝘺\n🫧 est. 2026 🫧'}
              />
            </div>
            <div className="template-card">
              <h3>Cottagecore</h3>
              <CopyChip
                multiline
                text={'🌾 𝓨𝓸𝓾𝓻 𝓝𝓪𝓶𝓮 🌾\n𝘴𝘭𝘰𝘸 𝘭𝘪𝘷𝘪𝘯𝘨 · 𝘩𝘰𝘮𝘦𝘨𝘳𝘰𝘸𝘯\n🍄 garden journal 🍄'}
              />
            </div>
            <div className="template-card">
              <h3>Cute &amp; Playful</h3>
              <CopyChip
                multiline
                text={'🎀 𝓎𝑜𝓊𝓇 𝓃𝒶𝓂𝑒 🎀\n♡ soft vibes · good energy only ♡\n✨ always creating ✨'}
              />
            </div>
          </div>
        </section>

        <section id="how-to-choose-a-font-style">
          <h2>How to Choose the Right Font Style</h2>
          <p>With hundreds of styles on this page, picking one can feel harder than it should. A few simple rules make it quick.</p>
          <ul className="checklist">
            <li><strong>Start with the mood you want, not the fanciest option.</strong> Soft and personal points toward cursive or pastel styles. Playful points toward cute or bubble styles. Nostalgic points toward Y2K star wraps.</li>
            <li><strong>Readability beats novelty.</strong> If a style is hard to read at a glance, most people will scroll past it instead of decoding it. Read your chosen style back to yourself before using it.</li>
            <li><strong>Check it on your phone.</strong> Most bios and profiles are read on mobile. A style that looks great on a wide desktop screen can wrap or crowd differently on a small screen, so always preview it there before saving.</li>
            <li><strong>One or two styled elements are usually enough.</strong> Styling every single word creates clutter. A single styled name or one decorated line, next to plain text, stands out more than an entire bio in fancy font.</li>
            <li><strong>Match the style to the platform.</strong> A soft cursive font fits a lifestyle Instagram bio; a pastel symbol wrap fits a Pinterest title better than it fits a LinkedIn headline.</li>
          </ul>
        </section>

        <section id="how-to-copy-and-paste-fancy-fonts">
          <h2>How to Copy and Paste Aesthetic Fonts</h2>
          <p>
            Copying and pasting aesthetic fonts works the same way as copying any other text. Type your word into the generator, then click on the style you like from the list of options. The text is copied automatically, so you don&apos;t need to highlight it yourself.
          </p>
          <p>
            Next, go to the app or website where you want to use it, tap the text box, and paste. Your styled text will appear exactly as it looked in the generator, since it&apos;s made of standard characters your device already supports.
          </p>
        </section>

        <section id="why-use-unicode-fonts">
          <h2>Why Use Unicode Fonts?</h2>
          <p>
            Aesthetic fonts aren&apos;t actually new fonts installed on your device. They&apos;re made from Unicode, a large set of characters that every device and app already understands. This is why you can copy them and paste them almost anywhere, even on apps that don&apos;t let you change fonts.
          </p>
          <p>
            Using Unicode fonts is an easy way to add a soft, personal touch to your text without needing any design skills or extra apps. Since the characters are standard, they show up the same way on most phones and computers, making them a simple and reliable choice for everyday use.
          </p>
        </section>

        <section id="about-our-font-generator">
          <h2>About This Font Generator</h2>
          <p>
            This aesthetic font generator was built to make styling text as simple as possible. Type a word once, and you&apos;ll see it change into dozens of soft, pastel, and dreamy styles instantly, without any waiting or extra steps. Every style is free to use, and there&apos;s no signup required.
          </p>
          <p>
            Whether you want a cursive bio, a pastel wrap, or a playful cute username, this generator covers a wide range of options in one place. It works the same way on both phone and computer, so you can style your text wherever you happen to be.
          </p>
        </section>

        <section id="frequently-asked-questions">
          <h2>Frequently Asked Questions</h2>
          <FAQ />
        </section>

        <section id="conclusion">
          <h2>Conclusion</h2>
          <p>
            Plain text doesn&apos;t have to stay plain. With an aesthetic font generator like this one, you can turn any word or sentence into a soft, dreamy style that fits your bio, your username, or your next caption in just a few clicks. There&apos;s no app to download and nothing complicated to learn.
          </p>
          <p>
            Whether you&apos;re going for something soft, playful, or nostalgic, there&apos;s a style here for it. Just type your text, pick a look you like, and paste it wherever you need it.
          </p>
        </section>

        {/* HOMEPAGE ARTICLE END */}
      </div>
    </article>
  );
}

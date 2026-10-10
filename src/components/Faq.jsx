import { useState } from 'react';

export const FAQ_ITEMS = [
  { q: 'What is an aesthetic font generator?', a: 'A free online tool that converts regular text into stylized Unicode characters instantly copyable and pasteable anywhere.' },
  { q: 'Are aesthetic fonts free to use?', a: 'Yes, 100% free. Unicode is an open international standard with no copyright restrictions.' },
  { q: 'Why do some aesthetic fonts show as boxes on certain devices?', a: 'The device doesn’t support that specific Unicode block. Switch to Classic Unicode styles (bold, italic, small caps) for maximum compatibility.' },
  { q: 'Can I use aesthetic fonts in Free Fire, PUBG, and Roblox?', a: 'Yes, most games support Unicode usernames. Always test in the rename preview before confirming.' },
  { q: 'Do aesthetic fonts work on Instagram bio?', a: 'Absolutely. Instagram fully supports Unicode in bios, captions, and comments across iOS, Android, and web.' },
  { q: 'Is there an aesthetic font keyboard app?', a: 'Yes, available on both iOS App Store and Google Play Store for typing styled text directly from your keyboard.' },
  { q: 'What’s the difference between aesthetic fonts and emojis?', a: 'Emojis are pictographic image characters. Aesthetic fonts are text characters that look styled. Emojis vary by platform; aesthetic Unicode text renders the same everywhere.' },
  { q: 'Are aesthetic fonts accessible to screen readers?', a: 'No, screen readers don’t read them as intended text. Avoid using them for essential or accessibility-critical content.' },
  { q: 'What is tulisan aesthetic?', a: 'Indonesian/Malay term for aesthetic text stylized Unicode characters used for nama aesthetic, bio Instagram, and TikTok usernames.' },
  { q: 'What is ecriture aesthetic?', a: 'French term for aesthetic writing is the same Unicode-based stylized text system used by French-speaking social media users on Instagram and TikTok.' },
  { q: 'Can I use aesthetic fonts in Google Docs and Excel?', a: 'Yes, paste Unicode text directly into any cell or document. Works for headers, labels, and creative file naming.' },
  { q: 'How do I make my bio aesthetic?', a: 'Use the generator to style your name, add symbol dividers between lines, and keep decoration to one or two elements maximum for a clean result.' },
];

export const FAQ_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export default function Faq() {
  const [open, setOpen] = useState(-1);
  return (
    <section className="content" id="faq">
      <h2>FAQs</h2>
      {FAQ_ITEMS.map((f, i) => (
        <div key={i} className={'faq-item' + (open === i ? ' open' : '')}>
          <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
            {f.q}
            <span className="ic">＋</span>
          </button>
          <div className="faq-a" style={{ maxHeight: open === i ? '600px' : '0' }}>
            <div>{f.a}</div>
          </div>
        </div>
      ))}
    </section>
  );
}

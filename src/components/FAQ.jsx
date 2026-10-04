import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ_ITEMS = [
  {
    question: 'What is an aesthetic font generator?',
    answer:
      'An aesthetic font generator is a tool that changes your normal text into soft, pastel, or dreamy versions using special Unicode characters. You type your text once, and it shows you many different styles to copy and paste.',
  },
  {
    question: 'How do Unicode fonts work?',
    answer:
      'Unicode fonts use characters that are already built into most devices and apps. Instead of installing a new font, the tool swaps your letters for similar-looking symbols from this larger character set.',
  },
  {
    question: 'Do these fonts work on Instagram?',
    answer:
      'Yes, you can paste aesthetic fonts into your Instagram bio, captions, and comments. Since they\'re made of Unicode characters, Instagram displays them just like regular text.',
  },
  {
    question: 'Do they work on Pinterest and TikTok?',
    answer:
      'Yes, aesthetic fonts work on both Pinterest and TikTok. You can use them in pin titles, captions, comments, and bios.',
  },
  {
    question: 'Do they work on WhatsApp?',
    answer:
      'Yes, you can paste aesthetic fonts into WhatsApp chats and status updates. They\'ll show up the same way as they appear in the generator.',
  },
  {
    question: 'Can I use them for usernames?',
    answer:
      'Yes, many people use aesthetic fonts for usernames on social apps, Discord, and other platforms. Just keep in mind that some platforms may have rules about special characters in names.',
  },
  {
    question: 'Are these fonts accessible to screen readers?',
    answer:
      'No, screen readers usually can\'t read styled fonts correctly, since they\'re made of symbols rather than standard letters. It\'s best to avoid using them in places where accessibility matters, like important documents or public information.',
  },
  {
    question: 'Why do some fonts not appear correctly?',
    answer:
      'Some older phones or apps may not support every Unicode character, which can cause certain fonts or symbols to show up as boxes or blank spaces. If this happens, try a simpler style that uses more common characters.',
  },
  {
    question: 'Are these fonts free to use?',
    answer:
      'Yes, this font generator is completely free, with no signup or payment needed. You can use as many styles as you like, whenever you like.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq">
      {FAQ_ITEMS.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `faq-panel-${index}`;
        const buttonId = `faq-button-${index}`;

        return (
          <div key={item.question} className={`faq__item${isOpen ? ' faq__item--open' : ''}`}>
            <button
              type="button"
              id={buttonId}
              className="faq__question"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => toggle(index)}
            >
              <span>{item.question}</span>
              <span className="faq__icon" aria-hidden="true">
                {isOpen ? <Minus size={16} /> : <Plus size={16} />}
              </span>
            </button>
            {isOpen && (
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className="faq__answer"
              >
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

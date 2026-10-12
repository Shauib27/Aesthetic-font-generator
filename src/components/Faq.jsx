/* Accessible FAQ built on native <details>/<summary> (keyboard and screen-reader
   friendly without JavaScript). Answers are plain strings so the visible text and
   the FAQPage JSON-LD (see faqLd in Seo.jsx) always match. */
export default function Faq({ items, title = 'Frequently asked questions', id = 'faq' }) {
  return (
    <section className="content faq" id={id} aria-labelledby={id + '-title'}>
      <h2 id={id + '-title'}>{title}</h2>
      {items.map((f, i) => (
        <details key={i} className="faq-item">
          <summary className="faq-q">
            <span>{f.q}</span>
            <span className="ic" aria-hidden="true" />
          </summary>
          <div className="faq-a"><p>{f.a}</p></div>
        </details>
      ))}
    </section>
  );
}

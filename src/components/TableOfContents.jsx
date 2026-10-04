const TOC_ITEMS = [
  { id: 'what-is-a-font-generator', label: 'What is an Aesthetic Font Generator?' },
  { id: 'how-to-use-the-font-generator', label: 'How to Use the Font Generator' },
  { id: 'browse-font-styles', label: 'Browse Font Styles' },
  { id: 'popular-font-styles', label: 'Popular Font Styles' },
  { id: 'features-of-our-font-generator', label: 'Features of This Font Generator' },
  { id: 'best-uses-for-fancy-fonts', label: 'Best Uses for Aesthetic Fonts' },
  { id: 'decorative-symbols-and-borders', label: 'Decorative Symbols & Borders' },
  { id: 'aesthetic-bio-templates', label: 'Ready-to-Use Bio Templates' },
  { id: 'how-to-choose-a-font-style', label: 'How to Choose the Right Style' },
  { id: 'how-to-copy-and-paste-fancy-fonts', label: 'How to Copy and Paste Aesthetic Fonts' },
  { id: 'why-use-unicode-fonts', label: 'Why Use Unicode Fonts?' },
  { id: 'about-our-font-generator', label: 'About This Font Generator' },
  { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
  { id: 'conclusion', label: 'Conclusion' },
];

export default function TableOfContents() {
  return (
    <nav className="toc" aria-label="Table of contents">
      <p className="toc__title">Table of Contents</p>
      <ol className="toc__list">
        {TOC_ITEMS.map((item) => (
          <li key={item.id} className="toc__item">
            <a href={`#${item.id}`} className="toc__link">
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

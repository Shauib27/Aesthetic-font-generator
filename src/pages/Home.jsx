import FontGenerator from '../components/FontGenerator';
import ArticleContent from '../components/ArticleContent';
import TableOfContents from '../components/TableOfContents';
import SEO from '../components/SEO';

export default function Home() {
  return (
    <>
      <SEO
        title="Aesthetic Font Generator – Copy & Paste Pastel, Cute & Dreamy Fonts"
        description="Type your text and instantly get 280+ aesthetic, pastel, and cute font styles. Free online font generator — copy and paste for Instagram, TikTok, Pinterest, and bios."
        url="https://your-domain.com/"
      />
      <FontGenerator />

      <section className="hero">
        <div className="container">
          <h1 className="hero__title">
            Aesthetic Font Generator – Copy &amp; Paste Pastel, Cute &amp; Dreamy Fonts
          </h1>
          <div className="hero__intro">
            <p>
              A plain bio blends into every other feed. Soft, aesthetic text is the quiet detail that makes a profile feel curated instead of default — but most apps don&apos;t let you change fonts at all, so you end up searching for an aesthetic font generator instead. It&apos;s a small thing, but finding one that actually feels soft (not just random symbols) can take longer than it should.
            </p>
            <p>
              You just type your text, and it turns into dozens of pastel, cute, and dreamy styles right away. This page walks you through how the tool works, the main aesthetic categories you can pick from, and where each one looks best. You&apos;ll also find ready-to-use bio templates and answers to common questions, like why some symbols don&apos;t show up right on certain phones.
            </p>
          </div>
        </div>
      </section>

      <div className="container container--narrow toc-wrap">
        <TableOfContents />
      </div>

      <ArticleContent />
    </>
  );
}

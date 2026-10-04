import { Link } from 'react-router-dom';
import FontGenerator from '../components/FontGenerator';
import SEO from '../components/SEO';

const SITE_URL = 'https://your-domain.com';

function ToolPage({ title, description, seoTitle, seoDescription, url, children }) {
  return (
    <>
      <SEO title={seoTitle || title} description={seoDescription || description} url={url} />
      <FontGenerator />
      <section className="hero">
        <div className="container">
          <h1 className="hero__title">{title}</h1>
          <div className="hero__intro">
            <p>{description}</p>
          </div>
        </div>
      </section>
      {children && (
        <div className="page-content">
          <div className="container container--narrow">{children}</div>
        </div>
      )}
    </>
  );
}

function PlaceholderPage({ title, description, seoTitle, seoDescription, url, children }) {
  return (
    <div className="page-content">
      <SEO title={seoTitle || title} description={seoDescription || description} url={url} />
      <div className="container container--narrow">
        <div className="page-hero">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        {children}
        <p style={{ marginTop: '1.5rem' }}>
          <Link to="/">← Back to Aesthetic Font Generator</Link>
        </p>
      </div>
    </div>
  );
}

export function PastelFonts() {
  return (
    <ToolPage
      title="Pastel Fonts – Soft Unicode Text, Copy & Paste"
      description="Type your text above and copy soft, pastel-style Unicode fonts made for dreamy bios, moodboards, and aesthetic profiles. Just pick a style and paste it anywhere."
      seoTitle="Pastel Fonts – Soft Aesthetic Unicode Font Styles"
      seoDescription="Generate soft, pastel Unicode fonts instantly. Copy and paste dreamy text for Instagram, Pinterest, and aesthetic bios — free, no signup needed."
      url={`${SITE_URL}/pastel-fonts`}
    >
      <p>
        More pastel-specific examples and moodboard-ready combinations will be
        added to this page soon. In the meantime, the generator above works
        exactly like the homepage tool — type your text, pick a soft style,
        and copy it straight into your bio or caption.
      </p>
    </ToolPage>
  );
}

export function CuteFonts() {
  return (
    <ToolPage
      title="Cute Fonts – Kawaii & Playful Unicode Text"
      description="Type your text above and copy cute, playful Unicode fonts with bows, hearts, and kawaii symbols. Just pick a style and paste it into your profile."
      seoTitle="Cute Fonts – Kawaii Unicode Font Generator"
      seoDescription="Browse and copy cute, kawaii Unicode font styles for Instagram, TikTok, and Discord. 100% free, no signup required."
      url={`${SITE_URL}/cute-fonts`}
    >
      <p>
        More cute and kawaii-themed style examples will be added to this page
        soon. For now, the generator above has the full set — type your
        text, filter by the Cute category, and copy what fits your vibe.
      </p>
    </ToolPage>
  );
}

export function InstagramFonts() {
  return (
    <ToolPage
      title="Instagram Fonts – Copy & Paste Aesthetic Text for Bios & Captions"
      description="Type your text above and copy aesthetic, pastel fonts made for Instagram bios, captions, comments, and story text. Just pick a style and paste it into the Instagram app."
      url={`${SITE_URL}/instagram-fonts`}
    >
      <p>
        More Instagram-specific tips, style recommendations, and bio layout
        examples will be added to this page soon. In the meantime, the
        generator above works exactly the same as the homepage tool — type
        your text, pick a style, and copy it straight into Instagram.
      </p>
      <p style={{ marginTop: '1.5rem' }}>
        <Link to="/">← Back to Aesthetic Font Generator</Link>
      </p>
    </ToolPage>
  );
}

export function BioFonts() {
  return (
    <ToolPage
      title="Bio Fonts – Aesthetic Text for Profile Bios"
      description="Type your text above and copy aesthetic Unicode fonts built for profile bios — Instagram, TikTok, Twitter (X), and more. Just pick a style and paste it in."
      seoTitle="Bio Fonts – Aesthetic Unicode Fonts for Profile Bios"
      seoDescription="Generate aesthetic bio fonts instantly. Copy and paste soft, dreamy text styles for your Instagram, TikTok, or Twitter bio — free, no signup needed."
      url={`${SITE_URL}/bio-fonts`}
    >
      <p>
        Looking for a ready-made layout instead of building one style at a
        time? Check the bio template examples on the{' '}
        <Link to="/">homepage</Link> — copy one, swap in your own name, and
        paste it straight into your profile.
      </p>
    </ToolPage>
  );
}

export function About() {
  return (
    <PlaceholderPage
      title="About Us"
      description="Learn about Aesthetic Font Generator — a free online Unicode font tool for soft, dreamy, pastel text."
      seoTitle="About Us"
      seoDescription="Learn about Aesthetic Font Generator, a free online tool that turns plain text into hundreds of pastel, cute, and dreamy Unicode fonts."
      url={`${SITE_URL}/about`}
    >
      <p>
        Aesthetic Font Generator is a free online tool that transforms plain
        text into hundreds of soft, pastel, and dreamy Unicode font styles.
        No signup, no downloads — just type, copy, and paste.
      </p>
    </PlaceholderPage>
  );
}

export function Contact() {
  return (
    <PlaceholderPage
      title="Contact Us"
      description="Get in touch with the Aesthetic Font Generator team."
      seoTitle="Contact Us"
      seoDescription="Have a question or feedback about Aesthetic Font Generator? Get in touch with our team here."
      url={`${SITE_URL}/contact`}
    >
      <p>
        Contact information will be added here. For now, please use the font
        generator on our <Link to="/">homepage</Link>.
      </p>
    </PlaceholderPage>
  );
}

export function PrivacyPolicy() {
  return (
    <PlaceholderPage
      title="Privacy Policy"
      description="Privacy policy for Aesthetic Font Generator."
      seoTitle="Privacy Policy"
      seoDescription="Read the Aesthetic Font Generator privacy policy to learn how we handle your data when you use our free font generator tool."
      url={`${SITE_URL}/privacy-policy`}
    >
      <p>
        Aesthetic Font Generator runs entirely in your browser. Text you type
        is processed locally and is not sent to any server. Favorites are
        stored in your browser&apos;s local storage. A full privacy policy
        will be published here.
      </p>
    </PlaceholderPage>
  );
}

export function Terms() {
  return (
    <PlaceholderPage
      title="Terms &amp; Conditions"
      description="Terms and conditions for using Aesthetic Font Generator."
      seoTitle="Terms & Conditions"
      seoDescription="Read the terms and conditions for using Aesthetic Font Generator, our free online Unicode font generator tool."
      url={`${SITE_URL}/terms`}
    >
      <p>
        Aesthetic Font Generator is provided free of charge for personal use.
        Full terms and conditions will be published on this page.
      </p>
    </PlaceholderPage>
  );
}

export function Disclaimer() {
  return (
    <PlaceholderPage
      title="Disclaimer"
      description="Disclaimer for Aesthetic Font Generator."
      seoTitle="Disclaimer"
      seoDescription="Disclaimer for Aesthetic Font Generator: Unicode font display may vary by device and app. Read the full disclaimer here."
      url={`${SITE_URL}/disclaimer`}
    >
      <p>
        Unicode font display may vary by device and app. Aesthetic Font
        Generator is provided as-is without warranties. A full disclaimer
        will be published here.
      </p>
    </PlaceholderPage>
  );
}

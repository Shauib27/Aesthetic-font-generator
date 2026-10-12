import { useState } from 'react';
import { Link } from 'react-router-dom';
import Seo, { breadcrumbLd } from '../components/Seo.jsx';
import { Breadcrumbs } from '../components/Blocks.jsx';
import { STYLE_COUNT } from '../data/styleIndex.js';
import { LAST_UPDATED } from '../data/site.js';

function PageShell({ title, h1, desc, path, children }) {
  const crumbs = [{ name: 'Home', path: '/' }, { name: h1, path }];
  return (
    <>
      <Seo title={title} description={desc} path={path} jsonLd={breadcrumbLd(crumbs)} />
      <Breadcrumbs items={crumbs} />
      <div className="hero left"><h1>{h1}</h1></div>
      <section className="content prose narrow">{children}</section>
    </>
  );
}

export function About() {
  return (
    <PageShell
      title="About Aesthetic Text Generator — How Our Unicode Fonts Work"
      h1="About Aesthetic Text Generator"
      desc="What this free aesthetic font generator does, how it turns text into Unicode styles, and its limits — they are text styles, not downloadable fonts."
      path="/about/"
    >
      <p className="answer">
        Aesthetic Text Generator is a free browser tool that rewrites your text in {STYLE_COUNT} decorative
        styles using Unicode characters, so you can copy it into bios, usernames, captions and messages.
      </p>

      <h2>What the website does</h2>
      <p>
        You type once and see every style at the same time. You can filter by category, search for a style,
        star favorites and find recently copied styles again. Category and platform pages explain which styles
        suit Instagram, TikTok, Discord, WhatsApp, Facebook and games, and our <Link to="/guides/">guides</Link> answer
        common questions in plain English.
      </p>

      <h2>How the generator works</h2>
      <ol>
        <li>Each style is a small set of rules that maps letters to Unicode characters (for example A → 𝐀, U+1D400).</li>
        <li>Some styles add frames or symbols around your text, or combining marks to each letter.</li>
        <li>All conversion happens in your browser. Your text is not sent to or stored on our servers.</li>
        <li>Favorites and recent styles are saved only in your browser’s local storage.</li>
      </ol>

      <h2>Disclaimer: Unicode styles, not font files</h2>
      <div className="tip">
        <p>
          <strong>These are Unicode text styles, not downloadable font files.</strong> We don’t provide .ttf or .otf
          fonts, and the styles can’t be installed on your computer. The characters are part of the Unicode
          standard and are drawn by whatever fonts the reader’s device has.
        </p>
      </div>

      <h2>Limitations and compatibility</h2>
      <ul>
        <li>Some characters may appear as empty boxes on older systems or in apps with limited fonts. Styles that use less common characters are labelled in the generator.</li>
        <li>Many username fields (Instagram, TikTok, Discord, Roblox) only accept basic letters and numbers.</li>
        <li>Styled words are not matched by search engines or in-app search, and screen readers may not read them correctly.</li>
        <li>Some alphabets are incomplete in Unicode (for example, there is no small-caps X), so a few letters stay plain or use look-alikes.</li>
      </ul>
      <p>
        More detail: <Link to="/guides/why-fonts-show-as-boxes/">why fonts show as boxes</Link> and{' '}
        <Link to="/guides/are-fancy-fonts-safe/">are fancy fonts safe?</Link>
      </p>

      <h2>Contact</h2>
      <p>Found a style that renders wrongly or have a suggestion? <Link to="/contact/">Contact us</Link>.</p>
    </PageShell>
  );
}

const encode = (data) =>
  Object.keys(data).map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(data[k])).join('&');

export function Contact() {
  const [status, setStatus] = useState('idle');
  const onSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus('sending');
    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode(data),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus('sent');
      form.reset();
    } catch (err) {
      setStatus('error');
    }
  };
  return (
    <PageShell
      title="Contact — Aesthetic Text Generator"
      h1="Contact us"
      desc="Contact the Aesthetic Text Generator team with feedback, style requests or bug reports."
      path="/contact/"
    >
      <p>Have feedback, a style request or found a character that doesn’t display correctly? Send us a message.</p>
      {status === 'sent' ? (
        <div className="tip" role="status"><p><strong>Thanks!</strong> Your message was sent. We usually reply within a few days.</p></div>
      ) : (
        <form className="contact-form" name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={onSubmit}>
          <input type="hidden" name="form-name" value="contact" />
          <p className="sr-only"><label>Leave this empty <input name="bot-field" tabIndex={-1} autoComplete="off" /></label></p>
          <label htmlFor="c-name">Name</label>
          <input id="c-name" name="name" required autoComplete="name" />
          <label htmlFor="c-email">Email</label>
          <input id="c-email" name="email" type="email" required autoComplete="email" />
          <label htmlFor="c-msg">Message</label>
          <textarea id="c-msg" name="message" rows={5} required />
          <button type="submit" className="btn" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : 'Send message'}
          </button>
          {status === 'error' && (
            <p className="form-error" role="alert">Sorry, the message couldn’t be sent. Please try again later.</p>
          )}
        </form>
      )}
    </PageShell>
  );
}

export function Privacy() {
  return (
    <PageShell
      title="Privacy Policy — Aesthetic Text Generator"
      h1="Privacy Policy"
      desc="Privacy policy for Aesthetic Text Generator: text is converted in your browser, and favorites are stored only on your device."
      path="/privacy-policy/"
    >
      <p className="meta">Last updated: {LAST_UPDATED}</p>
      <p>This tool is designed to work without collecting personal information.</p>
      <h2>What we store</h2>
      <ul>
        <li><strong>Text you type:</strong> converted locally in your browser and never sent to our servers.</li>
        <li><strong>Favorites and recent styles:</strong> saved in your browser’s local storage on your device. You can clear them at any time in your browser settings.</li>
        <li><strong>Contact form:</strong> if you send a message, we receive the name, email and message you enter, and use them only to reply.</li>
      </ul>
      <h2>Sharing buttons</h2>
      <p>Share buttons are plain links. No social media scripts are loaded on our pages; the social network only receives data if you click a share link.</p>
      <h2>Cookies &amp; analytics</h2>
      <p>We may use privacy-friendly analytics to understand which features are used. No advertising profiles are built from your usage.</p>
      <h2>Contact</h2>
      <p>Questions about this policy? Use the <Link to="/contact/">contact page</Link>.</p>
    </PageShell>
  );
}

export function Terms() {
  return (
    <PageShell
      title="Terms of Use — Aesthetic Text Generator"
      h1="Terms of Use"
      desc="Terms of use for the free Aesthetic Text Generator tool."
      path="/terms/"
    >
      <p className="meta">Last updated: {LAST_UPDATED}</p>
      <p>By using this website, you agree to the following terms.</p>
      <h2>Free use</h2>
      <p>The generator is free for personal and commercial use. Unicode characters are part of an open international standard with no licence fees.</p>
      <h2>Fair use</h2>
      <ul>
        <li>Do not use the tool for spam, harassment or impersonation (including look-alike names of brands or people).</li>
        <li>Follow the rules of the platforms where you paste styled text.</li>
        <li>Do not attempt to disrupt the website or its hosting.</li>
      </ul>
      <h2>No warranties</h2>
      <p>The tool is provided “as is”. Some Unicode styles may not display on older devices or on platforms that restrict characters; this is outside our control.</p>
      <h2>Changes</h2>
      <p>We may update these terms. Continued use of the site means you accept the current version.</p>
    </PageShell>
  );
}

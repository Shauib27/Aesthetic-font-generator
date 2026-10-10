import { useState } from 'react';
import Seo from '../components/Seo.jsx';
import { useCopy } from '../copy.jsx';

function PageShell({ title, desc, children }) {
  return (
    <>
      <Seo title={title} description={desc} />
      <section className="content">
        <h2>{title.replace(/ — .*$/, '')}</h2>
        {children}
      </section>
    </>
  );
}

export function About() {
  return (
    <PageShell
      title="About — Aesthetic Font Generator"
      desc="About the free Aesthetic Font Generator: 269+ copy-and-paste Unicode font styles for Instagram, TikTok, Discord, and gaming."
    >
      <p>
        AestheticFonts is a free online tool that converts plain text into 269+ stylish Unicode font
        styles. Type once, click any style to copy it, and paste it anywhere — Instagram bios,
        TikTok nicknames, Discord servers, gaming usernames, WhatsApp messages, and more.
      </p>
      <p>
        Every style is built on Unicode, the global text standard, so the styling travels inside the
        characters themselves. No app to install, no account to create, no cost — ever.
      </p>
      <p>
        The generator includes favorites, recent copies, live search, and category filters so you can
        find your perfect style in seconds.
      </p>
    </PageShell>
  );
}

export function Contact() {
  const { show } = useCopy();
  const [sent, setSent] = useState(false);
  return (
    <PageShell
      title="Contact — Aesthetic Font Generator"
      desc="Contact the Aesthetic Font Generator team: feedback, style requests, and bug reports."
    >
      <p>
        Have feedback, a font style request, or found a bug? Send us a message — we read everything.
      </p>
      {!sent ? (
        <form
          className="card"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
            show('Message noted ✅ Thanks for reaching out!');
          }}
        >
          <p>
            <input
              required
              placeholder="Your name"
              aria-label="Your name"
              style={{ width: '100%', padding: '10px 14px', marginBottom: '10px', border: '1px solid var(--input-border)', borderRadius: '8px' }}
            />
          </p>
          <p>
            <input
              required
              type="email"
              placeholder="Your email"
              aria-label="Your email"
              style={{ width: '100%', padding: '10px 14px', marginBottom: '10px', border: '1px solid var(--input-border)', borderRadius: '8px' }}
            />
          </p>
          <p>
            <textarea
              required
              rows={5}
              placeholder="Your message…"
              aria-label="Your message"
              style={{ width: '100%', padding: '10px 14px', marginBottom: '10px', border: '1px solid var(--input-border)', borderRadius: '8px' }}
            />
          </p>
          <p>
            <button
              type="submit"
              style={{ background: 'var(--primary)', color: '#fff', border: 'none', borderRadius: '8px', padding: '10px 26px', fontWeight: 700 }}
            >
              Send message
            </button>
          </p>
        </form>
      ) : (
        <div className="tip">✅ <strong>Thanks!</strong> Your message has been noted. We usually reply within a few days.</div>
      )}
    </PageShell>
  );
}

export function Privacy() {
  return (
    <PageShell
      title="Privacy Policy — Aesthetic Font Generator"
      desc="Privacy policy for the Aesthetic Font Generator: what data we store and how it is used."
    >
      <p>
        Your privacy matters. This tool is designed to work without collecting personal information.
      </p>
      <h3>What we store</h3>
      <ul>
        <li>
          <strong>On your device only:</strong> your favorite styles and recent copies are saved in your
          browser's local storage. This data never leaves your device and you can clear it anytime via
          your browser settings.
        </li>
        <li>
          <strong>Text you type:</strong> everything is converted locally in your browser. Your input is
          never sent to a server.
        </li>
      </ul>
      <h3>Cookies &amp; analytics</h3>
      <p>
        We may use privacy-friendly analytics to understand which features are popular. No advertising
        profiles are built from your usage.
      </p>
      <h3>Contact</h3>
      <p>If you have questions about this policy, reach out via the contact page.</p>
    </PageShell>
  );
}

export function Terms() {
  return (
    <PageShell
      title="Terms of Use — Aesthetic Font Generator"
      desc="Terms of use for the free Aesthetic Font Generator tool."
    >
      <p>By using this website, you agree to the following terms:</p>
      <h3>Free use</h3>
      <p>
        The generator is free for personal and commercial use. Unicode characters are an open
        international standard with no licensing fees.
      </p>
      <h3>Fair use</h3>
      <ul>
        <li>Do not use the tool for spam, harassment, or impersonation.</li>
        <li>Do not attempt to disrupt the website or its hosting infrastructure.</li>
      </ul>
      <h3>No warranties</h3>
      <p>
        The tool is provided "as is". Some Unicode styles may not render on older devices or
        platforms that restrict certain character ranges — this is outside our control.
      </p>
      <h3>Changes</h3>
      <p>We may update these terms at any time. Continued use of the site means you accept the current version.</p>
    </PageShell>
  );
}

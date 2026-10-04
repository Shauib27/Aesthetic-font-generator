import { Helmet } from 'react-helmet-async';

const SITE_NAME = 'Aesthetic Font Generator';
const DEFAULT_TITLE = 'Aesthetic Font Generator – Copy & Paste Pastel, Cute & Dreamy Fonts';
const DEFAULT_DESCRIPTION =
  'Type your text and instantly get 280+ aesthetic, pastel, and cute font styles. Free online font generator — copy and paste for Instagram, TikTok, Pinterest, and bios.';
const DEFAULT_URL = 'https://your-domain.com/';
const DEFAULT_IMAGE = '/favicon.svg';

export default function SEO({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  url = DEFAULT_URL,
  image = DEFAULT_IMAGE,
  noIndex = false,
}) {
  const fullTitle = title === DEFAULT_TITLE ? title : `${title} | ${SITE_NAME}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}

import { Helmet } from 'react-helmet-async';

const SITE_NAME = 'Medking Lifescience';
const SITE_URL = import.meta.env.VITE_SITE_URL || 'https://www.medkinglifescience.com';
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;

/**
 * SEOHead — drop-in per-page SEO component.
 *
 * Props:
 *  title        — page-specific title (appended with site name)
 *  description  — meta description (max ~160 chars)
 *  keywords     — comma-separated keyword string
 *  canonical    — canonical URL path (e.g. "/about")
 *  ogImage      — absolute URL to OG image (defaults to site-wide image)
 *  noIndex      — set true to add noindex,nofollow
 */
export default function SEOHead({
  title,
  description,
  keywords,
  canonical,
  ogImage = DEFAULT_OG_IMAGE,
  noIndex = false,
}) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | Pharmaceutical Manufacturing Excellence`;
  const canonicalUrl = canonical ? `${SITE_URL}${canonical}` : SITE_URL;

  return (
    <Helmet>
      {/* Core */}
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonicalUrl} />
      {noIndex && <meta name="robots" content="noindex,nofollow" />}

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      {description && <meta name="twitter:description" content={description} />}
      <meta name="twitter:image" content={ogImage} />

      {/* Geo / Local Business */}
      <meta name="geo.region" content="IN-HP" />
      <meta name="geo.placename" content="Kala Amb, Himachal Pradesh" />
      <meta name="geo.position" content="30.5373;77.2730" />
      <meta name="ICBM" content="30.5373, 77.2730" />
    </Helmet>
  );
}

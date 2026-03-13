import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  twitterHandle?: string;
}

const SEO = ({
  title = "INNO Carpentry & Renovations | Premium Craftsmanship",
  description = "Premium carpentry and home renovations. Expert craftsmanship in kitchens, bathrooms, garden decking, and more. Serving your home improvement needs with precision.",
  canonical = "https://innocarpentry.com",
  ogTitle,
  ogDescription,
  ogImage = "/images/logo/inno_logo.png",
  ogType = "website",
  twitterHandle = "@InnoCarpentry",
}: SEOProps) => {
  const siteTitle = title;
  
  return (
    <Helmet>
      {/* Standard metadata */}
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={ogTitle || siteTitle} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonical} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitle || siteTitle} />
      <meta name="twitter:description" content={ogDescription || description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content={twitterHandle} />
    </Helmet>
  );
};

export default SEO;

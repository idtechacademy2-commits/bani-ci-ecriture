import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  hrefLangFr?: string;
  hrefLangEn?: string;
  ogImage?: string;
  structuredData?: object;
}

const SEO = ({ 
  title, 
  description, 
  keywords, 
  canonical,
  hrefLangFr,
  hrefLangEn,
  ogImage = "https://lovable.dev/opengraph-image-p98pqg.png",
  structuredData
}: SEOProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content="BANI - Bureau d'Études" />
      
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Hreflang tags */}
      {hrefLangFr && <link rel="alternate" hrefLang="fr" href={hrefLangFr} />}
      {hrefLangEn && <link rel="alternate" hrefLang="en" href={hrefLangEn} />}
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
// SEO utilities for Kick it with Fab
export const SITE_CONFIG = {
  name: 'Kick it with Fab',
  description: 'Your Ultimate Sports Destination - Latest sports news, analysis, and exclusive content',
  url: 'https://www.kickitwithfab.com',
  author: 'Fabian Louis',
  email: 'hello@kickitwithfab.com',
  social: {
    twitter: '@kickitwithfab',
    facebook: 'kickitwithfab',
    instagram: '@kickitwithfab',
    youtube: '@kickitwithfab'
  },
  keywords: [
    'sports news',
    'NFL',
    'NBA',
    'MLB',
    'soccer',
    'tennis',
    'athletics',
    'sports analysis',
    'sports blog',
    'Fabian Louis',
    'kick it with fab'
  ]
};

export const generateMetaTags = (page: {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
  publishedTime?: string;
  modifiedTime?: string;
  tags?: string[];
}) => {
  const title = page.title ? `${page.title} | ${SITE_CONFIG.name}` : SITE_CONFIG.name;
  const description = page.description || SITE_CONFIG.description;
  const image = page.image || `${SITE_CONFIG.url}/og-image.jpg`;
  const url = page.url ? `${SITE_CONFIG.url}${page.url}` : SITE_CONFIG.url;
  
  return {
    title,
    description,
    canonical: url,
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        }
      ],
      locale: 'en_US',
      type: page.type || 'website',
      ...(page.publishedTime && { publishedTime: page.publishedTime }),
      ...(page.modifiedTime && { modifiedTime: page.modifiedTime }),
    },
    twitter: {
      handle: SITE_CONFIG.social.twitter,
      site: SITE_CONFIG.social.twitter,
      cardType: 'summary_large_image',
      title,
      description,
      image,
    },
    additionalMetaTags: [
      {
        name: 'author',
        content: SITE_CONFIG.author,
      },
      {
        name: 'keywords',
        content: [...SITE_CONFIG.keywords, ...(page.tags || [])].join(', '),
      },
      {
        name: 'robots',
        content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
      },
      {
        name: 'googlebot',
        content: 'index, follow',
      },
      {
        property: 'article:author',
        content: SITE_CONFIG.author,
      },
      {
        property: 'article:publisher',
        content: SITE_CONFIG.url,
      },
    ],
  };
};

export const generateStructuredData = (type: 'website' | 'article' | 'person', data: any) => {
  const baseData = {
    '@context': 'https://schema.org',
  };

  switch (type) {
    case 'website':
      return {
        ...baseData,
        '@type': 'WebSite',
        name: SITE_CONFIG.name,
        alternateName: 'kickitwithfab',
        url: SITE_CONFIG.url,
        description: SITE_CONFIG.description,
        publisher: {
          '@type': 'Person',
          name: SITE_CONFIG.author,
          url: `${SITE_CONFIG.url}/about`,
        },
        potentialAction: {
          '@type': 'SearchAction',
          target: `${SITE_CONFIG.url}/search?q={search_term_string}`,
          'query-input': 'required name=search_term_string',
        },
      };

    case 'article':
      return {
        ...baseData,
        '@type': 'Article',
        headline: data.title,
        description: data.description,
        image: data.image,
        datePublished: data.publishedTime,
        dateModified: data.modifiedTime || data.publishedTime,
        author: {
          '@type': 'Person',
          name: SITE_CONFIG.author,
          url: `${SITE_CONFIG.url}/about`,
        },
        publisher: {
          '@type': 'Organization',
          name: SITE_CONFIG.name,
          logo: {
            '@type': 'ImageObject',
            url: `${SITE_CONFIG.url}/logo.png`,
          },
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': data.url,
        },
        keywords: data.tags?.join(', '),
      };

    case 'person':
      return {
        ...baseData,
        '@type': 'Person',
        name: SITE_CONFIG.author,
        jobTitle: 'Sports Journalist & Founder',
        worksFor: {
          '@type': 'Organization',
          name: SITE_CONFIG.name,
        },
        url: `${SITE_CONFIG.url}/about`,
        sameAs: [
          `https://twitter.com/${SITE_CONFIG.social.twitter.replace('@', '')}`,
          `https://instagram.com/${SITE_CONFIG.social.instagram.replace('@', '')}`,
        ],
      };

    default:
      return baseData;
  }
};

export const generateSitemap = (pages: Array<{
  url: string;
  lastModified: string;
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}>) => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${SITE_CONFIG.url}${page.url}</loc>
    <lastmod>${page.lastModified}</lastmod>
    <changefreq>${page.changeFrequency}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;
  
  return sitemap;
};
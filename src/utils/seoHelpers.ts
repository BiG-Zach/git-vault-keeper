import type { MetaTag } from './seo';
import { articleSchema, SITE } from './schema';
import { SEO_IMAGES } from './seoAssets';

interface ArticleSEOParams {
  title: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
  imageSrc?: string;
  imageAlt?: string;
  articleSection?: string;
  keywords?: string[];
}

export function buildArticleSEO({
  title,
  description,
  path,
  datePublished,
  dateModified,
  author = 'Zachary Bradford',
  imageSrc,
  imageAlt,
  articleSection,
  keywords,
}: ArticleSEOParams) {
  const image = {
    src: imageSrc ?? SEO_IMAGES.blog.src,
    alt: imageAlt ?? SEO_IMAGES.blog.alt,
  };

  const canonicalUrl = `${SITE.url}${path}`;

  const meta: MetaTag[] = [
    { property: 'og:type', content: 'article' },
    { property: 'article:published_time', content: datePublished },
    ...(dateModified ? [{ property: 'article:modified_time', content: dateModified }] : []),
    { property: 'article:author', content: author },
    { property: 'og:image:alt', content: image.alt },
    { name: 'twitter:image:alt', content: image.alt },
  ];

  const scripts = [
    {
      innerHTML: articleSchema({
        title,
        description,
        url: canonicalUrl,
        image: image.src,
        datePublished,
        dateModified,
        author,
        articleSection,
        keywords,
      }),
    },
  ];

  return { image: image.src, meta, scripts };
}

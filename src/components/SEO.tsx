import { useEffect } from 'react';
import { applyHead, canonicalFor, SITE } from '../utils/seo';
import type { SEOConfig } from '../utils/seo';

type SEOProps = Omit<SEOConfig, 'canonical' | 'themeColor' | 'titleTemplate'> & {
  path?: string;
  title?: string;
  template?: string;
  themeColor?: string;
  disableCanonical?: boolean;
};

export default function SEO({
  title,
  description = SITE.defaultDescription,
  path = '/',
  template = '%s — Bradford Informed Guidance',
  themeColor = SITE.themeColor,
  lang = 'en',
  meta,
  links,
  scripts,
  noindex,
  disableCanonical,
}: SEOProps) {
  // Ensure description is always provided
  const finalDescription = description || SITE.defaultDescription;
  
  useEffect(() => {
    applyHead({
      title,
      titleTemplate: template,
      description: finalDescription,
      canonical: disableCanonical ? undefined : canonicalFor(path),
      lang,
      meta,
      links,
      scripts,
      noindex,
      themeColor,
    });
  }, [title, finalDescription, path, template, themeColor, lang, meta, links, scripts, noindex]);

  return null;
}
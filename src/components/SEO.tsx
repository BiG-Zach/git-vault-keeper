import { useEffect, useMemo } from 'react';
import { applyHead, canonicalFor, resolveSEO, SITE } from '../utils/seo';
import type { SEOConfig, ResolvedSEO } from '../utils/seo';
import { useSeoCollector } from './SeoProvider';

type SEOProps = Omit<SEOConfig, 'canonical' | 'themeColor' | 'titleTemplate'> & {
  path?: string;
  title?: string;
  template?: string;
  themeColor?: string;
  image?: string;
};

export default function SEO({
  title,
  description = SITE.defaultDescription,
  path = '/',
  template = '%s — Bradford Informed Guidance',
  themeColor = SITE.themeColor,
  lang = 'en',
  image,
  meta,
  links,
  scripts,
  noindex,
}: SEOProps) {
  const collector = useSeoCollector();

  const metaKey = useMemo(() => JSON.stringify(meta ?? []), [meta]);
  const linksKey = useMemo(() => JSON.stringify(links ?? []), [links]);
  const scriptsKey = useMemo(() => JSON.stringify(scripts ?? []), [scripts]);

  const resolved: ResolvedSEO = useMemo(
    () =>
      resolveSEO({
        title,
        titleTemplate: template,
        description,
        canonical: canonicalFor(path),
        lang,
        image,
        meta,
        links,
        scripts,
        noindex,
        themeColor,
      }),
    [title, template, description, path, lang, image, noindex, themeColor, metaKey, linksKey, scriptsKey],
  );

  collector.register(resolved);

  useEffect(() => {
    applyHead(resolved);
  }, [resolved]);

  return null;
}

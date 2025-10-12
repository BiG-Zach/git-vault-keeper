import { useEffect, useMemo } from 'react';
import { applyHead, canonicalFor, resolveSEO, SITE } from '../utils/seo';
import type { SEOConfig, ResolvedSEO } from '../utils/seo';
import { useSeoCollector } from './SeoProvider';

const PLAUSIBLE_DOMAIN = import.meta.env.VITE_PLAUSIBLE_DOMAIN as string | undefined;
const PLAUSIBLE_SCRIPT =
  (import.meta.env.VITE_PLAUSIBLE_SCRIPT as string | undefined) ?? 'https://plausible.io/js/script.js';
const PLAUSIBLE_API_HOST = import.meta.env.VITE_PLAUSIBLE_API_HOST as string | undefined;

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

  const augmentedScripts = useMemo(() => {
    const base = [...(scripts ?? [])];
    if (PLAUSIBLE_DOMAIN) {
      const hasPlausible = base.some(
        (script) =>
          script.src === PLAUSIBLE_SCRIPT ||
          script.attributes?.['data-domain'] === PLAUSIBLE_DOMAIN,
      );
      if (!hasPlausible) {
        const attributes: Record<string, string> = { 'data-domain': PLAUSIBLE_DOMAIN };
        if (PLAUSIBLE_API_HOST) {
          attributes['data-api'] = PLAUSIBLE_API_HOST;
        }
        base.push({
          src: PLAUSIBLE_SCRIPT,
          defer: true,
          attributes,
        });
      }
    }
    return base;
  }, [scripts]);

  const metaKey = useMemo(() => JSON.stringify(meta ?? []), [meta]);
  const linksKey = useMemo(() => JSON.stringify(links ?? []), [links]);
  const scriptsKey = useMemo(() => JSON.stringify(augmentedScripts), [augmentedScripts]);

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
        scripts: augmentedScripts,
        noindex,
        themeColor,
      }),
    [
      title,
      template,
      description,
      path,
      lang,
      image,
      noindex,
      themeColor,
      metaKey,
      linksKey,
      scriptsKey,
    ],
  );

  collector.register(resolved);

  useEffect(() => {
    applyHead(resolved);
  }, [resolved]);

  return null;
}

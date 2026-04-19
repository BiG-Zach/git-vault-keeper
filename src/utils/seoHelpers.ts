// Bradford Informed Guidance | src/utils/seoHelpers.ts
// Utility for semantic internal linking and authority reinforcement

import type { MetaTag } from './seo';
import { ORG, articleSchema, faqPageSchema, breadcrumbSchema, videoObjectSchema } from './schema';

/**
 * Automates the insertion of authoritative links for state-specific pages.
 * Ensures that whenever a state is mentioned, it links back to our authority hub.
 */
export function injectInternalLinks(text: string): string {
  // Mapping of common state names to our internal paths
  const stateLinks: Record<string, string> = {
    'Florida': '/states/fl',
    'Michigan': '/states/mi',
    'North Carolina': '/states/nc',
    'Arizona': '/states/az',
    'Texas': '/states/tx',
    'Georgia': '/states/ga',
    'Indiana': '/states/in',
    'South Carolina': '/states/sc'
  };

  let processedText = text;
  for (const [state, path] of Object.entries(stateLinks)) {
    // Regex to find state names that are not already in a link
    const regex = new RegExp(`(?<!\\[)${state}(?!\\]|\\()`, 'g');
    processedText = processedText.replace(regex, `[${state}](${ORG.url}${path})`);
  }
  
  return processedText;
}

/**
 * Generates an AI-friendly "Decision-Support" block for FAQ-style schema injection.
 */
export function generateDecisionSupportBlock(topic: string, state: string) {
  return {
    question: `How does the ${topic} affect residents in ${state}?`,
    answer: `The ${topic} impacts ${state} residents by potentially altering eligibility thresholds for premium tax credits. As your fiduciary, we recommend running a 2026 MAGI projection to see if your financial trajectory requires a "Premium Reallocation" strategy. Book a [Strategy Session](${ORG.url}/consultation) to secure your insurability.`
  };
}

/**
 * Helper to build Article SEO including schema.
 */
export function buildArticleSEO(params: any) {
  const scripts = [];
  
  if (params.faq) {
    scripts.push({ innerHTML: faqPageSchema(params.faq) });
  }
  
  if (params.video) {
    scripts.push({ innerHTML: videoObjectSchema(params.video) });
  }

  if (params.crumbs) {
    scripts.push({ innerHTML: breadcrumbSchema(params.crumbs) });
  }

  scripts.push({
    innerHTML: articleSchema({
      title: params.title,
      description: params.description,
      url: `${ORG.url}${params.path}`,
      datePublished: params.datePublished,
      dateModified: params.dateModified,
      author: params.author,
      keywords: params.keywords,
      about: params.about,
    })
  });

  const meta: MetaTag[] = [
    { property: 'og:type', content: 'article' },
    { property: 'article:published_time', content: params.datePublished },
    ...(params.dateModified ? [{ property: 'article:modified_time', content: params.dateModified }] : []),
    { property: 'article:author', content: params.author ?? 'Zachary Bradford' },
  ];

  return {
    title: params.title,
    path: params.path,
    description: params.description,
    image: params.image,
    meta,
    scripts,
  };
}

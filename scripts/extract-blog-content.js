#!/usr/bin/env node
/**
 * Phase 1 — Blog Content Extraction Script
 *
 * Reads each hardcoded TSX blog post in src/pages/blog/ (skips SanityPost.tsx),
 * extracts metadata using regex, and writes one JSON file per post to migration/.
 *
 * Usage:
 *   npm run extract:blogs
 */

import { readFileSync, readdirSync, mkdirSync, writeFileSync } from 'fs';
import { join, basename } from 'path';
import { fileURLToPath } from 'url';

const ROOT = new URL('..', import.meta.url).pathname;
const BLOG_DIR = join(ROOT, 'src/pages/blog');
const OUT_DIR = join(ROOT, 'migration');

const SKIP = new Set(['SanityPost.tsx']);

// ── Helpers ──────────────────────────────────────────────────────────────────

function extract(content, pattern, group = 1) {
  const m = content.match(pattern);
  return m ? m[group].trim() : null;
}

function extractKeywords(content) {
  // Match the keywords array inside buildArticleSEO({ ... keywords: [...], ... })
  const block = content.match(/keywords\s*:\s*\[([\s\S]*?)\]/);
  if (!block) return [];
  return [...block[1].matchAll(/['"`](.*?)['"`]/g)].map(m => m[1]);
}

function fileToSlug(filename) {
  // Derive a slug from the TSX filename as a fallback
  return filename
    .replace(/\.tsx$/, '')
    .replace(/([A-Z])/g, '-$1')
    .toLowerCase()
    .replace(/^-/, '');
}

// ── Main ──────────────────────────────────────────────────────────────────────

mkdirSync(OUT_DIR, { recursive: true });

const files = readdirSync(BLOG_DIR)
  .filter(f => f.endsWith('.tsx') && !SKIP.has(f))
  .sort();

console.log(`Found ${files.length} blog files to extract:\n`);

const results = [];

for (const file of files) {
  const content = readFileSync(join(BLOG_DIR, file), 'utf8');

  const title       = extract(content, /const title\s*=\s*['"`](.*?)['"`]/);
  const description = extract(content, /const description\s*=\s*['"`](.*?)['"`]/);
  const path        = extract(content, /const path\s*=\s*['"`](.*?)['"`]/);
  const datePublished = extract(content, /const datePublished\s*=\s*['"`](.*?)['"`]/);
  const dateModified  = extract(content, /const dateModified\s*=\s*['"`](.*?)['"`]/);
  const articleSection = extract(content, /articleSection\s*:\s*['"`](.*?)['"`]/);
  const keywords = extractKeywords(content);

  // Derive slug from path field; fall back to filename
  const slug = path ? path.replace(/^\/blog\//, '') : fileToSlug(basename(file, '.tsx'));

  const record = {
    slug,
    sourceFile: file,
    title,
    description,
    path,
    datePublished,
    dateModified,
    articleSection,
    keywords,
    // Sanity target fields (to be populated during Phase 2 upload)
    sanityFields: {
      _type: 'post',
      title,
      'slug.current': slug,
      excerpt: description,
      publishedAt: datePublished ? new Date(datePublished).toISOString() : null,
      status: 'draft',
      'seo.metaTitle': title,
      'seo.metaDescription': description,
      'seo.focusKeyword': keywords[0] ?? null,
      // body: requires manual JSX → Portable Text conversion (Phase 2 manual step)
      body: null,
    },
  };

  const outPath = join(OUT_DIR, `${slug}.json`);
  writeFileSync(outPath, JSON.stringify(record, null, 2));

  const status = [title, description, path, datePublished, dateModified].every(Boolean)
    ? '✓'
    : '⚠ partial';
  console.log(`  ${status}  ${slug}.json  (${keywords.length} keywords)`);
  results.push({ slug, status });
}

console.log(`\n✓ Extracted ${results.length} posts → migration/`);

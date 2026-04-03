#!/usr/bin/env node
// Scans all HTML files in dist/ for JSON-LD schema blocks and validates them.

import { readFileSync, readdirSync, statSync } from 'fs';
import { join } from 'path';

const DIST_DIR = new URL('../dist', import.meta.url).pathname;

function walk(dir) {
  const entries = readdirSync(dir);
  const files = [];
  for (const entry of entries) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      files.push(...walk(full));
    } else if (entry.endsWith('.html')) {
      files.push(full);
    }
  }
  return files;
}

function extractJsonLd(html) {
  const blocks = [];
  const re = /<script\s+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi;
  let match;
  while ((match = re.exec(html)) !== null) {
    blocks.push(match[1].trim());
  }
  return blocks;
}

function validateSchema(schema, file) {
  const errors = [];

  if (!schema['@context']) errors.push('missing @context');
  if (!schema['@type']) errors.push('missing @type');

  const type = schema['@type'];

  if (type === 'InsuranceAgency') {
    if (!schema.name) errors.push('InsuranceAgency missing: name');
    if (!schema.telephone) errors.push('InsuranceAgency missing: telephone');
    if (!schema.areaServed) errors.push('InsuranceAgency missing: areaServed');
  }

  if (type === 'Article' || type === 'BlogPosting') {
    if (!schema.headline) errors.push(`${type} missing: headline`);
    if (!schema.datePublished) errors.push(`${type} missing: datePublished`);
    if (!schema.author) errors.push(`${type} missing: author`);
  }

  if (type === 'BreadcrumbList') {
    if (
      !Array.isArray(schema.itemListElement) ||
      schema.itemListElement.length < 1
    ) {
      errors.push('BreadcrumbList missing: itemListElement with at least 1 item');
    }
  }

  return errors;
}

let totalFiles = 0;
let totalSchemas = 0;
let totalErrors = 0;

const htmlFiles = walk(DIST_DIR);

for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf8');
  const blocks = extractJsonLd(html);
  if (blocks.length === 0) continue;

  totalFiles++;
  const rel = file.replace(DIST_DIR + '/', '');

  for (const block of blocks) {
    totalSchemas++;
    let schema;
    try {
      schema = JSON.parse(block);
    } catch (e) {
      console.error(`  FAIL [${rel}] invalid JSON in JSON-LD block: ${e.message}`);
      totalErrors++;
      continue;
    }

    // Handle @graph arrays
    const schemas = schema['@graph'] ? schema['@graph'] : [schema];
    for (const s of schemas) {
      const errors = validateSchema(s, rel);
      if (errors.length > 0) {
        for (const err of errors) {
          console.error(`  FAIL [${rel}] ${err}`);
          totalErrors++;
        }
      } else {
        console.log(`  PASS [${rel}] @type=${s['@type']}`);
      }
    }
  }
}

console.log(`\nScanned ${htmlFiles.length} HTML files, ${totalSchemas} JSON-LD blocks across ${totalFiles} files with schemas.`);

if (totalErrors > 0) {
  console.error(`\n${totalErrors} schema validation error(s) found. Failing build.`);
  process.exit(1);
} else {
  console.log('All schemas valid.');
}

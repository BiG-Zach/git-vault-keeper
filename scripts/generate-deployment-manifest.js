#!/usr/bin/env node
// Generates public/deployment-manifest.json after prerender.
// Run via: npm run generate:manifest

import { readFileSync, readdirSync, statSync, writeFileSync } from 'fs';
import { join } from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const ROOT = new URL('..', import.meta.url).pathname;
const DIST_DIR = join(ROOT, 'dist');
const PUBLIC_DIR = join(ROOT, 'public');

// --- Helpers ---

function walk(dir) {
  const files = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) files.push(...walk(full));
    else files.push(full);
  }
  return files;
}

function extractJsonLdTypes(html) {
  const types = new Set();
  const re = /<script\s+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi;
  let match;
  while ((match = re.exec(html)) !== null) {
    try {
      const schema = JSON.parse(match[1].trim());
      const schemas = schema['@graph'] ? schema['@graph'] : [schema];
      for (const s of schemas) {
        if (s['@type']) types.add(s['@type']);
      }
    } catch {
      // skip malformed blocks
    }
  }
  return types;
}

// --- Gather data ---

let commitHash = 'unknown';
try {
  commitHash = execSync('git rev-parse HEAD', { cwd: ROOT }).toString().trim();
} catch {
  // not a git repo or git not available
}

const pkg = JSON.parse(readFileSync(join(ROOT, 'package.json'), 'utf8'));

const allFiles = walk(DIST_DIR);
const htmlFiles = allFiles.filter((f) => f.endsWith('.html'));
const prerenderedRoutes = htmlFiles.length;

const schemaTypes = new Set();
for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf8');
  for (const type of extractJsonLdTypes(html)) {
    schemaTypes.add(type);
  }
}

// --- Build manifest ---

const manifest = {
  generated: new Date().toISOString(),
  commit: commitHash,
  buildVersion: pkg.version,
  prerenderedRoutes,
  schemasDeployed: [...schemaTypes].sort(),
  robotsTxt: 'three-tier',
  llmsTxt: true,
  licensedStates: ['FL', 'MI', 'NC', 'AZ', 'TX', 'GA', 'IN'],
};

const output = JSON.stringify(manifest, null, 2);
writeFileSync(join(PUBLIC_DIR, 'deployment-manifest.json'), output);
console.log('Generated public/deployment-manifest.json');
console.log(`  commit:            ${manifest.commit.slice(0, 7)}`);
console.log(`  buildVersion:      ${manifest.buildVersion}`);
console.log(`  prerenderedRoutes: ${manifest.prerenderedRoutes}`);
console.log(`  schemasDeployed:   ${manifest.schemasDeployed.join(', ') || '(none)'}`);

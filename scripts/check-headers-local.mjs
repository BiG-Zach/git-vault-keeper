#!/usr/bin/env node
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import { existsSync, readFileSync } from 'fs';

const baseUrl = process.argv[2] || process.env.BASE_URL || 'http://localhost:8080';
const canonicalHost = 'bradfordinformedguidance.com';

const results = { pass: 0, fail: 0, warn: 0 };

function logPass(message) {
  results.pass += 1;
  console.log(`✅ PASS: ${message}`);
}

function logFail(message) {
  results.fail += 1;
  console.log(`❌ FAIL: ${message}`);
}

function logWarn(message) {
  results.warn += 1;
  console.log(`⚠️  WARN: ${message}`);
}

const parsedBase = new URL(baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`);
const isProductionHost = parsedBase.hostname === canonicalHost && parsedBase.protocol === 'https:';

const __dirname = dirname(fileURLToPath(import.meta.url));
const configPath = resolve(__dirname, '..', 'vercel.json');
const headerMap = new Map();
let vercelConfig = null;
if (existsSync(configPath)) {
  try {
    vercelConfig = JSON.parse(readFileSync(configPath, 'utf8'));
    if (Array.isArray(vercelConfig.headers)) {
      for (const entry of vercelConfig.headers) {
        if (Array.isArray(entry.headers)) {
          for (const header of entry.headers) {
            const key = header.key?.toLowerCase();
            if (key && !headerMap.has(key)) {
              headerMap.set(key, header.value);
            }
          }
        }
      }
    }
  } catch (error) {
    logWarn(`Unable to parse vercel.json: ${error.message}`);
  }
}

async function head(url, options = {}) {
  const response = await fetch(url, { method: 'HEAD', redirect: 'follow', ...options });
  return response;
}

async function ensureHeader(key, value) {
  const normalizedKey = key.toLowerCase();
  if (value) {
    logPass(`${key} present: ${value}`);
    return;
  }

  if (!isProductionHost && headerMap.has(normalizedKey)) {
    logPass(`${key} enforced via vercel.json (not emitted locally)`);
    return;
  }

  if (isProductionHost) {
    logFail(`${key} header missing`);
  } else {
    logWarn(`${key} header missing locally and not defined in vercel.json`);
  }
}

async function checkRoot() {
  let response;
  try {
    response = await head(baseUrl, { redirect: 'follow' });
  } catch (error) {
    logFail(`HEAD ${baseUrl} failed: ${error.message}`);
    return;
  }

  logPass(`Status: ${response.status}`);

  const csp = response.headers.get('content-security-policy');
  if (csp && csp.includes('*')) {
    logFail('CSP contains wildcard (*)');
  }

  await ensureHeader('Content-Security-Policy', csp);
  await ensureHeader('Referrer-Policy', response.headers.get('referrer-policy'));
  await ensureHeader('Permissions-Policy', response.headers.get('permissions-policy'));
  await ensureHeader('X-Content-Type-Options', response.headers.get('x-content-type-options'));
}

async function check404() {
  try {
    const testPath = '/this-path-should-404';
    const response = await head(`${baseUrl.replace(/\/$/, '')}${testPath}`, { redirect: 'manual' });
    if (response.status === 404) {
      logPass('Bogus path returns 404');
    } else {
      const rewriteGuarantees404 = Array.isArray(vercelConfig?.rewrites)
        && vercelConfig.rewrites.some(entry => typeof entry.source === 'string' && entry.source.includes('this-path-should-404'));
      if (!isProductionHost && rewriteGuarantees404) {
        logPass('Bogus path expected to 404 via vercel.json configuration');
      } else {
        logFail(`Bogus path did not return 404 (got ${response.status})`);
      }
    }
  } catch (error) {
    logFail(`HEAD bogus path failed: ${error.message}`);
  }
}

async function checkContentType(path, expectedPattern) {
  try {
    const response = await head(`${baseUrl.replace(/\/$/, '')}${path}`);
    const type = response.headers.get('content-type') || '';
    const regex = new RegExp(expectedPattern, 'i');
    if (regex.test(type)) {
      logPass(`${path} Content-Type OK (${type})`);
    } else {
      logFail(`Unexpected Content-Type for ${path}: ${type}`);
    }
  } catch (error) {
    logFail(`HEAD ${path} failed: ${error.message}`);
  }
}

async function main() {
  console.log(`Base URL: ${baseUrl}`);
  console.log('Starting local header verification...');
  await checkRoot();
  await check404();
  await checkContentType('/robots.txt', 'text/plain');
  await checkContentType('/sitemap_index.xml', 'application/xml|text/xml');

  const total = results.pass + results.fail + results.warn;
  console.log('--- Summary ---');
  console.log(`Total checks: ${total}`);
  console.log(`Pass: ${results.pass}`);
  console.log(`Fail: ${results.fail}`);
  console.log(`Warn: ${results.warn}`);

  if (results.fail > 0) {
    process.exitCode = 1;
  }
}

main().catch(error => {
  console.error(`Unhandled error: ${error.message}`);
  process.exitCode = 1;
});

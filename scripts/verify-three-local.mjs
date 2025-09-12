import fs from 'fs';
import path from 'path';

const ROOT = path.join(process.cwd(), 'dist');
const FILES = [
  path.join(ROOT, 'services', 'health-insurance', 'index.html'),
  path.join(ROOT, 'services', 'life-insurance', 'index.html'),
  path.join(ROOT, 'about', 'index.html')
];

function hasOneH1(html) {
  const matches = html.match(/<h1\b[^>]*>/gi) || [];
  return matches.length >= 1;
}

for (const file of FILES) {
  try {
    const html = fs.readFileSync(file, 'utf8');
    const titleOk = /<title>/i.test(html);
    const metaOk = /name=["']description["']/i.test(html);
    const h1Ok = hasOneH1(html);
    const jsonldOk = /application\/ld\+json/i.test(html);
    const rel = file.replace(process.cwd(), '');
    const canonMatch = html.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i);
    const canonHref = canonMatch ? canonMatch[1] : 'missing';
    console.log(`FILE=${rel} title=${titleOk?'ok':'missing'} meta=${metaOk?'ok':'missing'} h1=${h1Ok?'ok':'missing'} canonical=${canonHref} jsonld=${jsonldOk?'ok':'missing'}`);
  } catch (e) {
    console.log(`FILE=${file} ERROR=${e.message}`);
  }
}

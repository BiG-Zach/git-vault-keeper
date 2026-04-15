
import { createClient } from '@sanity/client';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const client = createClient({
  projectId: 'k8oe8f17',
  dataset: 'production',
  apiVersion: '2021-06-07',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

async function markdownToPortableText(markdown) {
  const blocks = [];
  const lines = markdown.split('\n');

  for (let line of lines) {
    const trimmed = line.trim();
    if (!trimmed) continue;

    if (trimmed.startsWith('# ')) {
      blocks.push({ _type: 'block', style: 'h1', children: [{ _type: 'span', text: trimmed.slice(2) }] });
    } else if (trimmed.startsWith('## ')) {
      blocks.push({ _type: 'block', style: 'h2', children: [{ _type: 'span', text: trimmed.slice(3) }] });
    } else if (trimmed.startsWith('### ')) {
      blocks.push({ _type: 'block', style: 'h3', children: [{ _type: 'span', text: trimmed.slice(4) }] });
    } else if (trimmed.startsWith('**')) {
      blocks.push({ _type: 'block', children: [{ _type: 'span', text: trimmed, marks: ['strong'] }] });
    } else if (trimmed.startsWith('👉')) {
      blocks.push({ _type: 'block', children: [{ _type: 'span', text: trimmed }] });
    } else if (trimmed.startsWith('|')) {
      blocks.push({ _type: 'block', style: 'normal', children: [{ _type: 'span', text: trimmed, marks: ['code'] }] });
    } else {
      blocks.push({ _type: 'block', style: 'normal', children: [{ _type: 'span', text: trimmed }] });
    }
  }
  return blocks;
}

async function main() {
  const filePath = path.join(__dirname, 'article-01-florida-cliff.md');
  const markdown = fs.readFileSync(filePath, 'utf8');
  
  // Strip frontmatter AND the Technical Specifications section
  let bodyMarkdown = markdown.replace(/^---[\s\S]*?---/, '').trim();
  
  // Remove everything from "## Technical Specifications" onwards
  const techSectionIndex = bodyMarkdown.indexOf('## Technical Specifications');
  if (techSectionIndex !== -1) {
    bodyMarkdown = bodyMarkdown.substring(0, techSectionIndex).trim();
  }

  const bodyBlocks = await markdownToPortableText(bodyMarkdown);

  const mutations = [
    {
      patch: {
        id: 'florida-2026-health-insurance-crisis',
        set: {
          body: bodyBlocks,
        },
      },
    },
  ];

  try {
    await client.mutate(mutations);
    console.log('SUCCESS:Body cleaned and updated.');
  } catch (err) {
    console.error('ERROR:' + err.message);
    process.exit(1);
  }
}

main();

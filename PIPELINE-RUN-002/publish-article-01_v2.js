
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
  if (!fs.existsSync(filePath)) {
    console.error('ERROR:Markdown file not found at ' + filePath);
    process.exit(1);
  }
  const markdown = fs.readFileSync(filePath, 'utf8');
  
  const bodyMarkdown = markdown.replace(/^---[\s\S]*?---/, '').trim();
  
  // Strip the technical specs and JSON-LD for the visible body
  const techSectionIndex = bodyMarkdown.indexOf('## Technical Specifications');
  const finalBody = techSectionIndex !== -1 
    ? bodyMarkdown.substring(0, techSectionIndex).trim() 
    : bodyMarkdown;

  const bodyBlocks = await markdownToPortableText(finalBody);

  const mutations = [
    {
      patch: {
        id: 'florida-2026-health-insurance-crisis',
        set: {
          title: 'Florida 2026 Health Insurance Crisis: The Complete Guide to Avoiding the Subsidy Cliff',
          slug: { _type: 'slug', current: 'florida-2026-health-insurance-crisis' },
          status: 'published',
          contentTrack: 'health-insurance',
          publishedAt: '2026-04-15T00:00:00Z',
          seo: {
            metaTitle: 'Florida 2026 Health Insurance Crisis: The Complete Guide to Avoiding the Subsidy Cliff',
            metaDescription: 'Florida families are seeing premiums spike 45-110% after the 2026 subsidy cliff. Licensed broker Zach Bradford reveals 3 strategies to cut your costs right now.'
          },
          body: bodyBlocks,
        },
      },
    },
  ];

  try {
    const result = await client.mutate(mutations);
    console.log('SUCCESS:Document updated. ID: florida-2026-health-insurance-crisis');
  } catch (err) {
    console.error('ERROR:' + err.message);
    process.exit(1);
  }
}

main();

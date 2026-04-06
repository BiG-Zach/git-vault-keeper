import { createClient } from '@sanity/client';
import fs from 'fs';
import crypto from 'crypto';

const client = createClient({
  projectId: 'k8oe8f17',
  dataset: 'production',
  apiVersion: '2026-04-05',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});

const generateKey = () => crypto.randomBytes(6).toString('hex');

async function fixDraftKeys() {
  const articleContent = fs.readFileSync('PIPELINE-RUN-001/article_001_FINAL.md', 'utf8');

  // Split and handle headers properly for Portable Text
  const contentBody = articleContent.split('---')[0]; 
  const lines = contentBody.split('\n\n').filter(p => p.trim() !== "");

  const bodyBlocks = lines.map(text => {
    const isHeaderMatch = text.match(/^(#+)\s*(.*)/);
    const style = isHeaderMatch ? `h${isHeaderMatch[1].length}` : 'normal';
    const cleanText = isHeaderMatch ? isHeaderMatch[2].trim() : text.trim();
    
    return {
      _key: generateKey(),
      _type: 'block',
      style: style,
      children: [
        {
          _key: generateKey(),
          _type: 'span',
          text: cleanText,
          marks: []
        }
      ],
      markDefs: []
    };
  });

  try {
    const result = await client.patch('drafts.blog-2026-florida-aca-subsidy-cliff')
      .set({ body: bodyBlocks })
      .commit();
    
    process.stdout.write(JSON.stringify({ success: true, updatedId: result._id }, null, 2));
  } catch (err) {
    process.stderr.write(JSON.stringify({ success: false, error: err.message }, null, 2));
    process.exit(1);
  }
}

fixDraftKeys();

import { createClient } from '@sanity/client';
import fs from 'fs';

const client = createClient({
  projectId: 'k8oe8f17',
  dataset: 'production',
  apiVersion: '2026-04-05',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});

async function deployDraft() {
  const mutationPayload = JSON.parse(fs.readFileSync('PIPELINE-RUN-001/sanity_mutation_payload_clean.json', 'utf8'));
  const articleContent = fs.readFileSync('PIPELINE-RUN-001/article_001_FINAL.md', 'utf8');

  const bodyBlocks = articleContent.split('\n\n').filter(p => p.trim() !== "").map(text => ({
    _type: 'block',
    children: [
      {
        _key: Math.random().toString(36).substring(7),
        _type: 'span',
        text: text.trim(),
      }
    ]
  }));

  const draftDoc = {
    ...mutationPayload.mutations[0].createOrReplace,
    _id: 'drafts.blog-2026-florida-aca-subsidy-cliff',
    body: bodyBlocks
  };

  try {
    const result = await client.createOrReplace(draftDoc);
    console.log(JSON.stringify({ success: true, result }, null, 2));
  } catch (err) {
    console.error(JSON.stringify({ success: false, error: err.message }, null, 2));
    process.exit(1);
  }
}

deployDraft();

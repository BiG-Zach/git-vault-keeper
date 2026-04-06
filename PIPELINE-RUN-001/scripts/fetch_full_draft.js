import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'k8oe8f17',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});

async function fetchFullDraft() {
  const query = `*[_id == "drafts.blog-2026-florida-aca-subsidy-cliff"][0]{
    title,
    slug,
    seo,
    contentTrack,
    bridgeType,
    excerpt,
    gapDefeated,
    targetQuery,
    status,
    body
  }`;

  try {
    const doc = await client.fetch(query);
    if (!doc) {
      console.error("Document not found.");
      process.exit(1);
    }
    console.log(JSON.stringify(doc, null, 2));
  } catch (err) {
    console.error("Fetch failed:", err.message);
    process.exit(1);
  }
}

fetchFullDraft();

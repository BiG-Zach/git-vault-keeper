import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'k8oe8f17',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});

async function verifyDraft() {
  try {
    const docs = await client.fetch('*[_type == "post"]{title, _id, status, contentTrack}');
    console.log(JSON.stringify(docs, null, 2));
  } catch (err) {
    console.error(JSON.stringify({ success: false, error: err.message }, null, 2));
    process.exit(1);
  }
}

verifyDraft();

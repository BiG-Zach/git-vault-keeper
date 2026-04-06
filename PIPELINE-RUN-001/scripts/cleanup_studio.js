import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'k8oe8f17',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});

async function cleanupStudio() {
  const targets = [
    "Turn Your Florida Health Insurance Savings Into Tax-Free Retirement Income",
    "Test Draft From Script",
    "Why Your Health Insurance Premium Will Double in 2026"
  ];

  try {
    const docs = await client.fetch('*[_type == "post"]{title, _id}');
    const toDelete = docs.filter(doc => targets.some(t => doc.title?.includes(t)));
    
    console.log(`Found ${toDelete.length} documents to delete.`);
    
    for (const doc of toDelete) {
      await client.delete(doc._id);
      console.log(`Deleted: ${doc.title} (${doc._id})`);
    }
  } catch (err) {
    console.error("Cleanup failed:", err.message);
    process.exit(1);
  }
}

cleanupStudio();

import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'k8oe8f17',
  dataset: 'production',
  apiVersion: '2026-04-05',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});

async function updateSchemaFields() {
  const draftId = 'drafts.blog-2026-florida-aca-subsidy-cliff';
  
  // Confirmed schema values from studio/schemaTypes/post.ts:
  // targetState: FL
  // contentTrack: aca_crisis
  // bridgeType: B
  
  try {
    const result = await client.patch(draftId)
      .set({ 
        targetState: 'FL',
        contentTrack: 'aca_crisis',
        bridgeType: 'B'
      })
      .commit();

    console.log(JSON.stringify({ 
      success: true, 
      updatedId: result._id,
      fields: {
        targetState: result.targetState,
        contentTrack: result.contentTrack,
        bridgeType: result.bridgeType
      }
    }, null, 2));
  } catch (err) {
    console.error(JSON.stringify({ success: false, error: err.message }, null, 2));
    process.exit(1);
  }
}

updateSchemaFields();

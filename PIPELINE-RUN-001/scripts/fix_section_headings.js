import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'k8oe8f17',
  dataset: 'production',
  apiVersion: '2026-04-05',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});

async function fixSectionHeadings() {
  const draftId = 'drafts.blog-2026-florida-aca-subsidy-cliff';
  
  try {
    const doc = await client.getDocument(draftId);
    if (!doc) throw new Error("Draft not found");

    let body = JSON.parse(JSON.stringify(doc.body));

    body = body.map(block => {
      if (block._type === 'block' && block.children) {
        block.children = block.children.map(child => {
          if (child._type === 'span' && child.text) {
            // Remove "Section 5: " and "Section 6: " prefixes
            child.text = child.text.replace(/^Section 5:\s*/g, '');
            child.text = child.text.replace(/^Section 6:\s*/g, '');
          }
          return child;
        });
      }
      return block;
    });

    const result = await client.patch(draftId)
      .set({ body: body })
      .commit();

    console.log(JSON.stringify({ success: true, updatedId: result._id }, null, 2));
  } catch (err) {
    console.error(JSON.stringify({ success: false, error: err.message }, null, 2));
    process.exit(1);
  }
}

fixSectionHeadings();

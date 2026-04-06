import { createClient } from '@sanity/client';
import crypto from 'crypto';

const client = createClient({
  projectId: 'k8oe8f17',
  dataset: 'production',
  apiVersion: '2026-04-05',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});

const generateKey = () => crypto.randomBytes(6).toString('hex');

async function updateSanityDraft() {
  const draftId = 'drafts.blog-2026-florida-aca-subsidy-cliff';
  
  try {
    const doc = await client.getDocument(draftId);
    if (!doc) throw new Error("Draft not found");

    let body = JSON.parse(JSON.stringify(doc.body));

    // Correction 1 & 3: Typo "premium premium" and FPL figures
    // Corrected 400% FPL for 2026 (based on 2025 guidelines used for 2026 coverage):
    // Family of 2: $21,640 * 4 = $86,560
    // Family of 3: $27,320 * 4 = $109,280
    // Note: The previous figures ($81k and $103k) were likely 2024/2025 values.
    
    body = body.map(block => {
      if (block._type === 'block' && block.children) {
        block.children = block.children.map(child => {
          if (child._type === 'span' && child.text) {
            let text = child.text;
            
            // Fix Typo 1: "premium premium"
            text = text.replace(/premium premium/g, 'premium');
            
            // Fix Typo 2: "redirecting the redirected premium savings"
            text = text.replace(/redirecting the redirected premium savings/g, 'redirecting the premium savings');
            
            // Fix Fact Check 3: FPL Thresholds
            text = text.replace(/\$81,000/g, '$86,560');
            text = text.replace(/\$103,280/g, '$109,280');
            
            child.text = text;
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

updateSanityDraft();

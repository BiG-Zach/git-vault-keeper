import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'k8oe8f17',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});

async function fetchAndRenderMarkdown() {
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

    // Render Portable Text Body to Markdown
    let markdownBody = "";
    if (doc.body && Array.isArray(doc.body)) {
      doc.body.forEach(block => {
        if (block._type === 'block') {
          const text = block.children ? block.children.map(c => c.text).join('') : '';
          if (block.style === 'h1') markdownBody += `# ${text}\n\n`;
          else if (block.style === 'h2') markdownBody += `## ${text}\n\n`;
          else if (block.style === 'h3') markdownBody += `### ${text}\n\n`;
          else markdownBody += `${text}\n\n`;
        }
      });
    }

    const output = {
      metadata: {
        title: doc.title,
        slug: doc.slug?.current,
        contentTrack: doc.contentTrack,
        bridgeType: doc.bridgeType,
        excerpt: doc.excerpt,
        gapDefeated: doc.gapDefeated,
        targetQuery: doc.targetQuery,
        status: doc.status,
        seo: doc.seo
      },
      content: markdownBody
    };

    console.log(JSON.stringify(output, null, 2));
    console.log("\n--- FULL RENDERED ARTICLE ---\n");
    console.log(markdownBody);

  } catch (err) {
    console.error("Fetch failed:", err.message);
    process.exit(1);
  }
}

fetchAndRenderMarkdown();

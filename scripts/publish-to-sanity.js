#!/usr/bin/env node
// Bradford Informed Guidance | publish-to-sanity.js | v1.0
// OpenClaw SEO Publisher uses this script to push article drafts to Sanity
// Usage: node scripts/publish-to-sanity.js --article='[JSON]'

import { createClient } from '@sanity/client'
import { config } from 'dotenv'
import { resolve } from 'path'
import { readFileSync } from 'fs'

// Load env from project root
config({ path: resolve(process.cwd(), '.env.local') })

const client = createClient({
  projectId: process.env.VITE_SANITY_PROJECT_ID,
  dataset: process.env.VITE_SANITY_DATASET || 'production',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
  apiVersion: '2024-01-01',
})

// Parse article from command line argument or stdin
async function getArticleData() {
  const args = process.argv.slice(2)
  const articleArg = args.find(a => a.startsWith('--article='))
  
  if (articleArg) {
    return JSON.parse(articleArg.replace('--article=', ''))
  }
  
  // If no arg, read from stdin (OpenClaw can pipe JSON)
  const stdinData = readFileSync('/dev/stdin', 'utf-8')
  return JSON.parse(stdinData)
}

function generateSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
    .substring(0, 96)
}

function textToPortableText(text) {
  // Converts plain text paragraphs to Sanity Portable Text format
  return text.split('\n\n').filter(p => p.trim()).map(paragraph => ({
    _type: 'block',
    _key: Math.random().toString(36).substring(2, 9),
    style: 'normal',
    markDefs: [],
    children: [{
      _type: 'span',
      _key: Math.random().toString(36).substring(2, 9),
      text: paragraph.trim(),
      marks: []
    }]
  }))
}

async function publishDraft(article) {
  const slug = article.slug || generateSlug(article.title)
  
  const document = {
    _type: 'post',
    title: article.title,
    slug: {
      _type: 'slug',
      current: slug
    },
    status: 'draft',
    publishedAt: null,
    targetState: article.targetState || 'NATIONAL',
    contentTrack: article.contentTrack || 'aca_crisis',
    bridgeType: article.bridgeType || 'A',
    excerpt: article.excerpt || '',
    body: typeof article.body === 'string' 
      ? textToPortableText(article.body)
      : article.body || [],
    seo: {
      metaTitle: article.seo?.metaTitle || article.title.substring(0, 65),
      metaDescription: article.seo?.metaDescription || article.excerpt?.substring(0, 155) || '',
      focusKeyword: article.seo?.focusKeyword || ''
    },
    targetQuery: article.targetQuery || '',
    gapDefeated: article.gapDefeated || ''
  }

  try {
    const result = await client.create(document)
    console.log(JSON.stringify({
      success: true,
      message: `Draft created successfully`,
      documentId: result._id,
      slug: slug,
      title: article.title,
      reviewUrl: `http://localhost:3333/structure/post;${result._id}`,
      note: 'Review at localhost:3333 then publish to trigger Vercel deploy'
    }, null, 2))
    return result
  } catch (error) {
    console.error(JSON.stringify({
      success: false,
      error: error.message,
      hint: 'Check SANITY_API_TOKEN has Editor permissions'
    }, null, 2))
    process.exit(1)
  }
}

// Main execution
getArticleData()
  .then(publishDraft)
  .catch(err => {
    console.error(JSON.stringify({ success: false, error: err.message }))
    process.exit(1)
  })

// Bradford Informed Guidance | sanity.ts | v1.0
import { createClient } from '@sanity/client'

export const sanityClient = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || 'k8oe8f17',
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  withCredentials: false,
})

export async function getPostBySlug(slug: string) {
 return sanityClient.fetch(
 `*[_type == "post" && slug.current == $slug && status == "published"][0]{
 title,
 slug,
 body,
 excerpt,
 publishedAt,
 targetState,
 contentTrack,
 bridgeType,
 "seo": seo{
 metaTitle,
 metaDescription,
 focusKeyword
 },
 targetQuery,
 gapDefeated
 }`,
 { slug }
 )
}

export async function getAllPublishedPosts() {
 return sanityClient.fetch(
 `*[_type == "post" && status == "published"] | order(publishedAt desc){
 title,
 "slug": slug.current,
 excerpt,
 publishedAt,
 targetState,
 contentTrack
 }`
 )
}
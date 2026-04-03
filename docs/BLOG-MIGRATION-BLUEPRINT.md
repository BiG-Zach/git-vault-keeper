# Blog Migration Blueprint: Hardcoded TSX → Sanity CMS

**Goal:** Move all 17 hardcoded blog posts from `src/pages/blog/*.tsx` into Sanity CMS so the Publisher agent can manage content without code deploys.

**Status:** Phase 1 complete — extraction script written and validated.

---

## The 17 Files to Migrate

| Slug | Source File | Route in routes.tsx |
|------|-------------|----------------------|
| `am-best-insurance-ratings-explained` | `AMBestInsuranceRatingsExplained.tsx` | `/blog/am-best-insurance-ratings-explained` |
| `aetna-cigna-united-comparison-2024` | `AetnaCignaUnitedComparison.tsx` | `/blog/aetna-cigna-united-comparison` |
| `florida-health-insurance-guide-2024` | `FloridaHealthInsuranceGuide2024.tsx` | Redirect → `open-enrollment-2026-guide` |
| `florida-hurricane-insurance-protection` | `FloridaHurricaneInsuranceProtection.tsx` | `/blog/florida-hurricane-insurance-protection` |
| `florida-small-business-health-insurance` | `FloridaSmallBusinessHealthInsurance.tsx` | `/blog/florida-small-business-health-insurance` |
| `health-insurance-deductibles-guide` | `HealthInsuranceDeductiblesGuide.tsx` | `/blog/health-insurance-deductibles-guide` |
| `health-insurance-open-enrollment-checklist` | `HealthInsuranceOpenEnrollmentChecklist.tsx` | `/blog/health-insurance-open-enrollment-checklist` |
| `how-much-life-insurance-calculator` | `HowMuchLifeInsuranceCalculator.tsx` | `/blog/how-much-life-insurance-calculator` |
| `life-insurance-companies-financial-strength` | `LifeInsuranceCompaniesFinancialStrength.tsx` | `/blog/life-insurance-companies-financial-strength` |
| `life-insurance-pre-existing-conditions` | `LifeInsurancePreExistingConditions.tsx` | `/blog/life-insurance-pre-existing-conditions` |
| `life-insurance-young-adults-guide` | `LifeInsuranceYoungAdultsGuide.tsx` | `/blog/life-insurance-young-adults-guide` |
| `michigan-insurance-laws` | `MichiganInsuranceLaws.tsx` | `/blog/michigan-insurance-laws` |
| `north-carolina-best-health-insurance` | `NorthCarolinaBestHealthInsurance.tsx` | `/blog/north-carolina-best-health-insurance` |
| `open-enrollment-2026-guide` | `OpenEnrollment2026Guide.tsx` | `/blog/open-enrollment-2026-guide` |
| `ppo-hmo-epo-plan-comparison` | `PPOHMOEPOPlanComparison.tsx` | `/blog/ppo-hmo-epo-plan-comparison` |
| `tampa-bay-insurance-broker-guide` | `TampaBayInsuranceBrokerGuide.tsx` | `/blog/tampa-bay-insurance-broker-guide` |
| `term-vs-whole-life-insurance-2025` | `TermVsWholeLifeInsurance2024.tsx` | `/blog/term-vs-whole-life-insurance-2025` |

---

## Phase 1 — Content Extraction

**Status:** ✅ Complete

**Script:** `scripts/extract-blog-content.js`
**Run:** `npm run extract:blogs`
**Output:** `migration/[slug].json` (one file per post)

Each JSON file contains:
- `slug` — the URL slug
- `sourceFile` — the TSX filename
- `title`, `description`, `path` — page-level metadata
- `datePublished`, `dateModified` — ISO date strings
- `articleSection` — content category (e.g., "Life Insurance")
- `keywords` — array of SEO keyword phrases
- `sanityFields` — pre-mapped Sanity document fields (ready for Phase 3 upload)

**Note on `body`:** The body content is JSX and cannot be automatically converted to Portable Text. This is the manual step in Phase 2.

**Timeline:** 1 day (done)
**Risk:** Low — read-only, no production changes.
**Rollback:** N/A — no changes to the site.

---

## Phase 2 — Sanity Schema Verification

**Status:** 🔲 Not started

### Required `post` Document Fields

The following fields must exist in the Sanity `post` schema to receive migrated content.
Fields marked ✅ are confirmed present via the GROQ query in `src/lib/sanity.ts`.

| Field | Type | Status | Notes |
|-------|------|--------|-------|
| `title` | `string` | ✅ Verified | Pulled in `getPostBySlug` |
| `slug.current` | `slug` | ✅ Verified | Used as lookup key |
| `body` | `array` (Portable Text) | ✅ Verified | Requires manual JSX conversion |
| `excerpt` | `string` | ✅ Verified | Maps from `description` |
| `publishedAt` | `datetime` | ✅ Verified | Maps from `datePublished` |
| `status` | `string` | ✅ Verified | Set to `"draft"` initially |
| `targetState` | `string` | ✅ Verified | State code (FL, MI, etc.) — optional |
| `contentTrack` | `string` | ✅ Verified | Content funnel track |
| `bridgeType` | `string` | ✅ Verified | Bridge classification |
| `seo.metaTitle` | `string` | ✅ Verified | Maps from `title` |
| `seo.metaDescription` | `string` | ✅ Verified | Maps from `description` |
| `seo.focusKeyword` | `string` | ✅ Verified | First keyword in keywords array |
| `targetQuery` | `string` | ✅ Verified | Search intent query |
| `gapDefeated` | `string` | ✅ Verified | Competitive gap this post closes |

**Fields to add to Sanity schema (not present in current GROQ query):**

| Field | Type | Notes |
|-------|------|-------|
| `articleSection` | `string` | Category label (e.g., "Health Insurance") — used for JSON-LD |
| `keywords` | `array of string` | Full keyword list — enables richer SEO schemas |
| `dateModified` | `datetime` | Last-modified date — distinct from `publishedAt` |

**Estimated schema changes:** Add 3 optional fields to the `post` schema in `studio/`. Low-risk — additive only.

### Manual Step: JSX → Portable Text Conversion

The article body content is currently JSX with Tailwind classes, React components (`<RelatedPosts>`, `<MultimediaOverview>`), and Lucide icons. This cannot be auto-converted.

**Recommended approach:**
1. For each post, paste the rendered HTML into Sanity Studio's block editor as plain text, then apply formatting
2. Or use `@portabletext/html-to-portable-text` to convert rendered HTML from the prerendered `dist/` files
3. Custom Portable Text components in `SanityPost.tsx` will need to handle any custom block types (callouts, stat boxes, etc.)

**Timeline:** 3–5 days (1 developer, manual conversion of 17 posts)
**Risk:** Medium — content fidelity depends on how faithfully JSX is converted. Run visual diff after each post.
**Rollback:** Keep TSX files intact and routes registered until Phase 4.

---

## Phase 3 — Sanity Upload

**Status:** 🔲 Not started

**Prerequisites:** Phase 1 and Phase 2 complete; Sanity schema updated.

### Upload Script Outline

Create `scripts/upload-to-sanity.js` using `@sanity/client` mutations:

```javascript
import { createClient } from '@sanity/client';

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET ?? 'production',
  token: process.env.SANITY_WRITE_TOKEN,  // requires write token
  apiVersion: '2024-01-01',
  useCdn: false,
});

// For each migration/[slug].json:
await client.createOrReplace({
  _id: `blog-${slug}`,
  _type: 'post',
  title: record.sanityFields.title,
  slug: { _type: 'slug', current: record.slug },
  excerpt: record.sanityFields.excerpt,
  publishedAt: record.sanityFields.publishedAt,
  status: 'draft',  // ← always draft; Publisher reviews before publishing
  seo: {
    metaTitle: record.sanityFields['seo.metaTitle'],
    metaDescription: record.sanityFields['seo.metaDescription'],
    focusKeyword: record.sanityFields['seo.focusKeyword'],
  },
  // body: must be set manually in Sanity Studio (Phase 2 manual step)
});
```

**Required env var:** `SANITY_WRITE_TOKEN` — generate a write token in Sanity's management console. Do not commit it; add it to Vercel environment variables.

**Upload strategy:** `createOrReplace` with a deterministic `_id` (`blog-${slug}`) so re-runs are idempotent — safe to run multiple times.

**Status after upload:** All 17 posts land in Sanity as `status: "draft"`. Publisher reviews and publishes each post individually after verifying body content.

**Timeline:** 1 day (script) + Publisher review cycle
**Risk:** Low for metadata fields. Medium for body content (fidelity).
**Rollback:** Delete the draft documents in Sanity Studio. No production routes have changed yet.

---

## Phase 4 — Route Cutover

**Status:** 🔲 Not started

**Prerequisites:** All 17 Sanity posts verified by Publisher, status set to `"published"` in Sanity Studio.

### Step-by-step Cutover

**4a. Verify all posts render via SanityPost.tsx**
Test each URL with the Sanity catch-all route (`blog/:slug`) by temporarily removing one hardcoded route in a dev environment.

**4b. Update `src/utils/routes.tsx`**
Remove the 17 hardcoded blog lazy imports and route entries. Keep only:
```tsx
{ path: 'blog/:slug', element: <SanityPost /> },
```
Keep the two redirect routes (`florida-health-insurance-guide-2024` → `open-enrollment-2026-guide`, `term-vs-whole-life-insurance-2024` → `term-vs-whole-life-insurance-2025`) in `vercel.json` redirects (they're already there).

**4c. Update prerender script**
`scripts/prerender.js` currently has hardcoded blog routes. Update it to fetch published post slugs from Sanity at build time:

```javascript
import { createClient } from '@sanity/client';
const client = createClient({ /* ... */ });
const posts = await client.fetch(`*[_type == "post" && status == "published"]{ "slug": slug.current }`);
const blogRoutes = posts.map(p => `/blog/${p.slug}`);
```

**4d. Update seoRoutes / sitemap generation**
`scripts/generate-sitemap.js` likely has a hardcoded `BLOG_ROUTES` array. Update it to fetch from Sanity in the same pattern as above.

**4e. Remove the 17 TSX files**
```bash
cd src/pages/blog/
rm AMBestInsuranceRatingsExplained.tsx AetnaCignaUnitedComparison.tsx \
   FloridaHealthInsuranceGuide2024.tsx FloridaHurricaneInsuranceProtection.tsx \
   FloridaSmallBusinessHealthInsurance.tsx HealthInsuranceDeductiblesGuide.tsx \
   HealthInsuranceOpenEnrollmentChecklist.tsx HowMuchLifeInsuranceCalculator.tsx \
   LifeInsuranceCompaniesFinancialStrength.tsx LifeInsurancePreExistingConditions.tsx \
   LifeInsuranceYoungAdultsGuide.tsx MichiganInsuranceLaws.tsx \
   NorthCarolinaBestHealthInsurance.tsx OpenEnrollment2026Guide.tsx \
   PPOHMOEPOPlanComparison.tsx TampaBayInsuranceBrokerGuide.tsx \
   TermVsWholeLifeInsurance2024.tsx
# Keep: SanityPost.tsx
```

**4f. Run full build and CI**
```bash
npm run build
npm run test:run
```

The build output should be noticeably smaller (17 fewer JS chunks in `dist/assets/`).

**Timeline:** 1 day (cutover) + 1 day (monitoring)
**Risk:** High — production routes change. Do this during low-traffic hours.

**Rollback plan:** The TSX files are in git history. If Sanity fetch fails or content is broken:
1. `git revert` the routes.tsx and prerender changes
2. Redeploy — hardcoded routes are restored in ~2 minutes

---

## Overall Risk Assessment

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| JSX → Portable Text loses formatting | High | Medium | Visual QA each post; keep TSX until Phase 4 passes |
| Sanity API down during prerender | Low | High | Cache last-known slugs in `public/deployment-manifest.json` |
| SEO rankings drop after cutover | Low | High | Canonical URLs unchanged; no URL changes |
| Sanity write token exposed | Low | High | Use Vercel env vars only; never commit token |
| Body content missing on first deploy | Medium | High | Phase 3 uploads drafts; Phase 4 only runs after Publisher approves all posts |

---

## Rollback Plan (Per Phase)

| Phase | Rollback Action | Time to Restore |
|-------|----------------|-----------------|
| 1 (Extraction) | Delete `migration/` directory | Instant |
| 2 (Schema) | Revert Sanity schema in Studio UI | < 5 minutes |
| 3 (Upload) | Delete draft documents in Sanity Studio | < 5 minutes |
| 4 (Cutover) | `git revert` + redeploy to Vercel | ~2 minutes |

---

## Estimated Timeline

| Phase | Owner | Duration |
|-------|-------|----------|
| Phase 1 — Extraction | Builder agent | ✅ 1 day (done) |
| Phase 2 — Schema + Manual Body | Developer + Publisher | 3–5 days |
| Phase 3 — Upload | Builder agent | 1 day |
| Phase 4 — Cutover | Builder agent + QA | 2 days |
| **Total** | | **~8–10 days** |

---

## Dependencies

- `SANITY_WRITE_TOKEN` environment variable (Phase 3)
- Sanity Studio schema updated with `articleSection`, `keywords`, `dateModified` fields (Phase 2)
- Publisher sign-off on all 17 posts before Phase 4

---

*Generated by Builder agent — 2026-03-21*

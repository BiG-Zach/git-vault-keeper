# ✅ PROMPT VERIFICATION CHECKLIST
## Before Running the Master Prompt

Use this checklist to verify all assumptions in your prompt match the actual project.

---

## 1. PROJECT TYPE ✅

| Assumption | Reality | Status |
|------------|---------|--------|
| ❌ Static site with Markdown | ✅ React SPA (Vite + TypeScript) | **MISMATCH** |
| ❌ Markdown frontmatter for metadata | ✅ React component variables | **MISMATCH** |
| ❌ Template-based schema injection | ✅ Component-based SEO | **MISMATCH** |

**Action Required:** Update all prompt instructions to use React/JSX syntax

---

## 2. FILE STRUCTURE ✅

### Target Article File
```
✅ CONFIRMED: src/pages/blog/TermVsWholeLifeInsurance2024.tsx
   - 783 lines
   - React component with TSX
   - Using buildArticleSEO() helper
```

### Asset Directories
```bash
# Check what exists:
cd /home/user/webapp && ls -la public/

# Current structure:
public/
├── assets/
│   └── backgrounds/    ✅ EXISTS
├── images/             ✅ EXISTS
├── logos/              ✅ EXISTS
└── media/              ❌ DOES NOT EXIST (need to create)
```

**Action Required:** 
```bash
mkdir -p public/media/audio
mkdir -p public/media/video
```

---

## 3. AI DRIVE MOUNT POINT ✅

| Your Prompt | Actual | Status |
|-------------|--------|--------|
| ❌ `/aidrive/` | ✅ `/mnt/aidrive/` | **WRONG PATH** |

**Current AI Drive Status:**
```bash
$ ls -la /mnt/aidrive/
total 8
drwxr-xr-x 2 root root 4096 Oct 14 08:54 .
drwxr-xr-x 3 root root 4096 Oct 14 08:54 ..
# (Empty - files need to be uploaded)
```

**Action Required:** 
1. Upload media files to `/mnt/aidrive/` first
2. Update all prompt references from `/aidrive/` to `/mnt/aidrive/`

---

## 4. SEO IMPLEMENTATION ✅

### Current Implementation
```tsx
// File: src/pages/blog/TermVsWholeLifeInsurance2024.tsx
import SEO from '../../components/SEO';
import { buildArticleSEO } from '../../utils/seoHelpers';

const articleSEO = buildArticleSEO({
  title,
  description,
  path,
  datePublished,
  dateModified,
  articleSection: 'Life Insurance',
  keywords: [...],
});

return (
  <main>
    <SEO 
      title={title}
      description={description}
      path={path}
      image={articleSEO.image}
      meta={articleSEO.meta}
      scripts={articleSEO.scripts}  // ← Schema goes here
    />
  </main>
);
```

**Your Prompt Suggests:** Modifying `<head>` in layout template ❌  
**Correct Approach:** Add scripts to `buildArticleSEO()` call ✅

**Action Required:** Update schema implementation instructions

---

## 5. COMPONENT IMPORTS ✅

### Required Imports for Article
```tsx
// Already present:
import { Link } from 'react-router-dom';  ✅
import SEO from '../../components/SEO';  ✅
import { buildArticleSEO } from '../../utils/seoHelpers';  ✅

// Need to add:
import MultimediaOverview from '../../components/blog/MultimediaOverview';  ❌ (create)
import { generateFAQSchema } from '../../utils/faqSchema';  ❌ (create)
```

---

## 6. METADATA VARIABLES ✅

### Current Values (Lines 8-12)
```tsx
const title = 'Term vs. Whole Life Insurance: 2024 Cost Comparison Guide | Bradford Informed Guidance';
const description = 'Term vs whole life insurance explained: Compare costs, coverage, and cash value. A 35-year-old could save $140K with term life. Find which is right for you in 2024.';
const path = '/blog/term-vs-whole-life-insurance-2024';
const datePublished = '2024-01-10';
const dateModified = '2024-01-15';
```

### Required Changes
```tsx
// Update line 8:
const title = 'Term vs. Whole Life Insurance: 2025 Cost Comparison Guide | Bradford Informed Guidance';
//                                            ^^^^

// Update line 9:
const description = 'Term vs Whole Life Insurance 2025: See why 80% choose term life. Compare the $140,000 cost difference and new 2025 market trends (IUL/VUL surge).';

// Update line 12:
const dateModified = '2025-10-19';
//                   ^^^^^^^^^^^
```

---

## 7. JSX CONTENT LOCATIONS ✅

### Where to Insert Multimedia Component
```tsx
// Find this section (around line 99):
</div>  {/* End of author/meta section */}

// INSERT HERE:
<MultimediaOverview 
  audioSrc="/media/audio/term-vs-whole-life-2025-overview.m4a"
  videoSrc="/media/video/demystifying-life-insurance-2025.mp4"
/>

{/* Table of Contents */}
```

### Title Update Location
```tsx
// Find line 72:
<h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
  Term vs Whole Life Insurance: Complete Comparison Guide 2024
  {/* Change to: ... 2025 */}
</h1>
```

### Last Updated Display
```tsx
// Find line 87:
<span>Last Updated: January 15, 2024</span>
{/* Change to: October 19, 2025 */}
```

---

## 8. INTERNAL LINKS ✅

### Verify Target Articles Exist
```bash
cd /home/user/webapp/src/pages/blog

# Check for these files:
ls -l LifeInsuranceYoungAdultsGuide.tsx  # ❓ Need to verify
ls -l LifeInsurancePreExistingConditions.tsx  # ✅ EXISTS
ls -l IndexedUniversalLifeIULInsurance.tsx  # ❓ Need to verify
ls -l HowMuchLifeInsuranceCalculator.tsx  # ✅ EXISTS
ls -l LifeInsuranceCompaniesFinancialStrength.tsx  # ✅ EXISTS
```

**Action Required:** Verify all target articles exist before adding links

---

## 9. SYNTAX CONVERSION CHECKLIST ✅

### HTML → JSX Conversions Needed

| HTML (Your Prompt) | JSX (Correct) |
|--------------------|---------------|
| `<div class="...">` | `<div className="...">` |
| `<audio controls>` | `<audio controls />` |
| `<source src="...">` | `<source src="..." />` |
| `<img src="...">` | `<img src="..." alt="..." />` |
| `style="padding: 20px;"` | `style={{ padding: '20px' }}` |
| `<br>` | `<br />` |
| `[Link text](url)` | `<Link to="url">Link text</Link>` |

---

## 10. TESTING REQUIREMENTS ✅

### Pre-Commit Tests
```bash
# 1. Type checking
npm run type-check
# Expected: No errors

# 2. Linting
npm run lint
# Expected: No errors (or only warnings)

# 3. Build test
npm run build
# Expected: Successful build

# 4. Dev server
npm run dev
# Expected: Runs on http://localhost:8080
```

### Manual Testing
- [ ] Navigate to article: `/blog/term-vs-whole-life-insurance-2024`
- [ ] Verify multimedia section renders
- [ ] Click audio play button - should play
- [ ] Click video play button - should play
- [ ] Test on mobile viewport (DevTools)
- [ ] Verify internal links navigate correctly
- [ ] View page source - check FAQ schema in `<script>` tag
- [ ] Copy schema JSON → paste into https://validator.schema.org/

---

## 11. MEDIA FILES CHECKLIST ✅

### Before Starting
```bash
# Verify AI Drive files exist
ls -lh /mnt/aidrive/

# Should contain:
# - The_Financial_Protection_Paradox__Record_Premiums,_100_Million_.m4a
# - Demystifying_Life_Insurance.mp4

# If missing:
echo "⚠️  Upload media files to /mnt/aidrive/ first!"
```

### After Copying
```bash
# Verify files in public directory
ls -lh public/media/audio/term-vs-whole-life-2025-overview.m4a
ls -lh public/media/audio/term-vs-whole-life-2025-overview.mp3  # fallback
ls -lh public/media/video/demystifying-life-insurance-2025.mp4

# Check file sizes
# Audio: ~25-30 MB (m4a), ~15-20 MB (mp3)
# Video: ~40-60 MB (optimized mp4)
```

---

## 12. NEW FILES TO CREATE ✅

### 1. Multimedia Component
```
📁 src/components/blog/
   └── MultimediaOverview.tsx  ❌ CREATE NEW
```

### 2. FAQ Schema Utility
```
📁 src/utils/
   └── faqSchema.ts  ❌ CREATE NEW
```

### 3. Asset Directories
```
📁 public/media/
   ├── audio/  ❌ CREATE NEW
   └── video/  ❌ CREATE NEW
```

---

## 13. GIT WORKFLOW ✅

### Before Starting
```bash
# Create backup
cp src/pages/blog/TermVsWholeLifeInsurance2024.tsx \
   src/pages/blog/TermVsWholeLifeInsurance2024.tsx.backup

# Check current branch
git branch
# Ensure on correct branch (main or genspark_ai_developer)
```

### After Changes
```bash
# Stage all changes
git add .

# Commit with descriptive message
git commit -m "feat(blog): Update Term vs Whole Life article with 2025 market data

- Add Q1 2025 statistics (IUL +11%, VUL +41%, market size $3.94B)
- Insert cost misconception crisis section (72% overestimate costs)
- Add employer coverage warning with 55% reliance stat
- Create MultimediaOverview component with audio/video embeds
- Implement FAQ schema markup utility for rich snippets
- Add 5 strategic internal links to related guides
- Update meta description for 2025 SEO optimization
- Change last updated date to October 19, 2025

Technical changes:
- New component: MultimediaOverview.tsx
- New utility: faqSchema.ts
- Updated: TermVsWholeLifeInsurance2024.tsx
- Assets: audio (m4a/mp3), video (mp4)

Expected impact: +40% organic traffic, improved featured snippets"

# Push to remote
git push origin main
```

---

## 14. POST-DEPLOYMENT ✅

### Google Search Console
1. Log in to Google Search Console
2. URL Inspection → Enter article URL
3. Click "Request Indexing"
4. Wait 2-4 hours for re-crawl

### Schema Validation
1. Visit: https://validator.schema.org/
2. Paste article URL or JSON-LD
3. Verify: FAQPage type detected
4. Check: All 5 FAQ questions present
5. Confirm: No errors

### Performance Testing
1. Run Lighthouse audit
2. Target scores:
   - Performance: >85
   - SEO: >95
   - Accessibility: >90
   - Best Practices: >90

---

## ✅ FINAL PRE-EXECUTION CHECKLIST

Before running your master prompt, confirm:

- [ ] Project is React SPA (not static site)
- [ ] Target file exists: `src/pages/blog/TermVsWholeLifeInsurance2024.tsx`
- [ ] AI Drive files uploaded to `/mnt/aidrive/`
- [ ] Prompt uses JSX syntax (not HTML)
- [ ] Prompt uses `/mnt/aidrive/` (not `/aidrive/`)
- [ ] Asset paths use `/media/` structure
- [ ] Schema implementation uses component approach
- [ ] Internal link targets verified to exist
- [ ] Backup created of original file
- [ ] Git branch is correct
- [ ] All dependencies installed: `npm install`
- [ ] Dev server can start: `npm run dev`

**If all checked ✅, proceed with prompt execution!**

---

## 🚨 TROUBLESHOOTING

### Error: "Cannot find module 'MultimediaOverview'"
**Fix:** Create the component file first:
```bash
touch src/components/blog/MultimediaOverview.tsx
```

### Error: "Type error in faqSchema"
**Fix:** Ensure proper TypeScript types:
```tsx
export interface FAQItem {
  question: string;
  answer: string;
}
```

### Error: "Media files not found"
**Fix:** Check file paths in `<source>` tags:
```tsx
// Should be:
<source src="/media/audio/file.m4a" type="audio/mp4" />
// NOT:
<source src="/assets/audio/file.m4a" type="audio/mp4" />
```

### Schema not appearing in page source
**Fix:** Verify scripts array in `buildArticleSEO()`:
```tsx
const articleSEO = buildArticleSEO({
  // ... existing params
  scripts: [/* FAQ schema here */]  // ← Check this
});
```

---

**Last Updated:** October 19, 2025  
**See also:**  
- `PROMPT_OPTIMIZATION_ANALYSIS.md` (full analysis)
- `PROMPT_FIXES_QUICK_REFERENCE.md` (quick fixes)

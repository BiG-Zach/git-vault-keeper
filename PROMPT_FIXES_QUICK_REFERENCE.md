# 🚨 QUICK REFERENCE: Critical Prompt Fixes

## TL;DR - Top 5 Issues to Fix

### 1. ❌ WRONG: Markdown Frontmatter
```yaml
# Your prompt suggests:
---
title: "Term vs Whole Life Insurance: Complete Comparison Guide 2025"
date: "2024-01-15"
---
```
✅ **FIX:** Use React component variables
```tsx
const title = 'Term vs Whole Life Insurance: 2025 Cost Comparison Guide...';
const dateModified = '2025-10-19';
```

---

### 2. ❌ WRONG: AI Drive Path
```bash
# Your prompt uses:
/aidrive/The_Financial_Protection_Paradox...
```
✅ **FIX:** Correct mount point
```bash
/mnt/aidrive/The_Financial_Protection_Paradox...
```

---

### 3. ❌ WRONG: HTML in React
```html
<!-- Your prompt suggests: -->
<div class="multimedia-overview" style="background: linear-gradient(...);">
  <audio controls style="width: 100%;"></audio>
</div>
```
✅ **FIX:** Use JSX syntax
```tsx
<div className="multimedia-overview" style={{ background: 'linear-gradient(...)' }}>
  <audio controls className="w-full" />
</div>
```

---

### 4. ❌ WRONG: Schema in `<head>` Template
```html
<!-- Your prompt suggests adding to layout file: -->
<script type="application/ld+json">
{ "@context": "https://schema.org", ... }
</script>
```
✅ **FIX:** Use component scripts array
```tsx
const articleSEO = buildArticleSEO({
  // ...
  scripts: [{
    type: 'application/ld+json',
    innerHTML: generateFAQSchema(faqs)
  }]
});
```

---

### 5. ❌ WRONG: Markdown Links
```markdown
[Link text](https://example.com)
```
✅ **FIX:** Use React Router
```tsx
<Link to="/blog/some-article" className="text-blue-600">
  Link text
</Link>
```

---

## Asset Path Corrections

| Your Prompt | Should Be |
|-------------|-----------|
| `/assets/audio/...` | `/media/audio/...` |
| `/assets/video/...` | `/media/video/...` |
| `public/assets/audio/` | `public/media/audio/` |
| `public/assets/video/` | `public/media/video/` |

---

## File Operations Checklist

```bash
# ✅ BEFORE starting:
cd /home/user/webapp && pwd
ls -l src/pages/blog/TermVsWholeLifeInsurance2024.tsx  # Verify exists
ls -la /mnt/aidrive/  # Check for media files

# ✅ Create correct directories:
mkdir -p public/media/audio
mkdir -p public/media/video

# ✅ Copy with correct paths:
cp /mnt/aidrive/[filename].m4a public/media/audio/term-vs-whole-life-2025-overview.m4a
cp /mnt/aidrive/[filename].mp4 public/media/video/demystifying-life-insurance-2025.mp4
```

---

## React Component Best Practices

### ❌ Don't use HTML attributes:
```html
<div class="...">
<img src="..." >
<br>
```

### ✅ Use JSX:
```tsx
<div className="...">
<img src="..." alt="..." />
<br />
```

### ❌ Don't use string styles:
```html
<div style="padding: 20px; color: red;">
```

### ✅ Use style objects or Tailwind:
```tsx
<div style={{ padding: '20px', color: 'red' }}>
// OR
<div className="p-5 text-red-500">
```

---

## Component Structure for Multimedia

**Create:** `src/components/blog/MultimediaOverview.tsx`

```tsx
export default function MultimediaOverview({ audioSrc, videoSrc }) {
  return (
    <div className="...">
      <audio controls className="w-full">
        <source src={audioSrc} type="audio/mp4" />
      </audio>
      <video controls className="w-full">
        <source src={videoSrc} type="video/mp4" />
      </video>
    </div>
  );
}
```

**Import in article:**
```tsx
import MultimediaOverview from '../../components/blog/MultimediaOverview';

// Use in JSX:
<MultimediaOverview 
  audioSrc="/media/audio/term-vs-whole-life-2025-overview.m4a"
  videoSrc="/media/video/demystifying-life-insurance-2025.mp4"
/>
```

---

## FAQ Schema Implementation

**Create:** `src/utils/faqSchema.ts`
```tsx
export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
    }))
  });
}
```

**Use in article:**
```tsx
import { generateFAQSchema } from '../../utils/faqSchema';

const faqs = [
  { question: "...", answer: "..." },
  // ...
];

const articleSEO = buildArticleSEO({
  // ... existing params
  scripts: [{ type: 'application/ld+json', innerHTML: generateFAQSchema(faqs) }]
});
```

---

## Testing Commands

```bash
# Type check
npm run type-check

# Lint
npm run lint

# Dev server
npm run dev
# Open: http://localhost:8080/blog/term-vs-whole-life-insurance-2024

# Build
npm run build
```

---

## Pre-Deployment Checklist

- [ ] Audio files copied to `public/media/audio/`
- [ ] Video file copied to `public/media/video/`
- [ ] MultimediaOverview component created
- [ ] FAQ schema utility created
- [ ] Article metadata updated (title, date, description)
- [ ] Internal links added with `<Link>` component
- [ ] Type check passes: `npm run type-check`
- [ ] Linting passes: `npm run lint`
- [ ] Dev server preview looks correct
- [ ] Mobile responsiveness tested
- [ ] Audio/video players work
- [ ] Schema validator shows no errors
- [ ] Git commit created with descriptive message

---

## Common Errors to Avoid

1. ❌ Using `class` instead of `className`
2. ❌ Not self-closing void elements (`<br>` → `<br />`)
3. ❌ String styles instead of objects (`style="..."` → `style={{...}}`)
4. ❌ Markdown links instead of `<Link>` components
5. ❌ Wrong AI Drive path (`/aidrive/` → `/mnt/aidrive/`)
6. ❌ Creating wrong directory structure (`/assets/audio/` → `/media/audio/`)
7. ❌ Not checking if AI Drive files exist before copying
8. ❌ Forgetting to import components (`MultimediaOverview`, `Link`)

---

**See full analysis:** `PROMPT_OPTIMIZATION_ANALYSIS.md`

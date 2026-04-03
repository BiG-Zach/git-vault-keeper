# 🎯 MASTER PROMPT FOR CLAUDE SONNET 4.5 (VS CODE LOCAL)
# TASK: Update "Term vs Whole Life Insurance" Blog Post - 2025 SEO Enhancement

## PROJECT CONTEXT
- **Website:** bradfordinformedguidance.com
- **Tech Stack:** React 18.2 + TypeScript 5.4 + Vite 5.4 + React Router v6
- **Target File:** `src/pages/blog/TermVsWholeLifeInsurance2024.tsx`
- **File Type:** React/TypeScript component (TSX), NOT Markdown
- **Current Status:** Last updated January 15, 2024
- **Goal:** Add 2025 market data, improve SEO, embed multimedia, increase organic traffic by 40%

---

## WORKSPACE VERIFICATION (Execute First)

```bash
# 1. Verify working directory
cd /home/user/webapp && pwd

# 2. Confirm target file exists
ls -l src/pages/blog/TermVsWholeLifeInsurance2024.tsx

# 3. Check public directory structure
ls -la public/

# 4. Verify AI Drive mount point and files
ls -la /mnt/aidrive/

# 5. Review current SEO helper implementation
head -50 src/utils/seoHelpers.ts
```

---

## REQUIRED CHANGES (Execute in Order)

### CHANGE #1: UPDATE ARTICLE METADATA (React Component)

**File:** `src/pages/blog/TermVsWholeLifeInsurance2024.tsx`

**Actions:**

1. **Update Component Variables** (Lines 8-12):
```tsx
// REPLACE:
const title = 'Term vs. Whole Life Insurance: 2024 Cost Comparison Guide | Bradford Informed Guidance';
const dateModified = '2024-01-15';

// WITH:
const title = 'Term vs. Whole Life Insurance: 2025 Cost Comparison Guide | Bradford Informed Guidance';
const dateModified = '2025-10-19';
```

2. **Update Meta Description** (Line 9):
```tsx
// REPLACE:
const description = 'Term vs whole life insurance explained: Compare costs, coverage, and cash value. A 35-year-old could save $140K with term life. Find which is right for you in 2024.';

// WITH:
const description = 'Term vs Whole Life Insurance 2025: See why 80% choose term life. Compare the $140,000 cost difference and new 2025 market trends (IUL/VUL surge).';
```

3. **Update H1 Title** (Line 72):
```tsx
// REPLACE:
<h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
  Term vs Whole Life Insurance: Complete Comparison Guide 2024
</h1>

// WITH:
<h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
  Term vs Whole Life Insurance: Complete Comparison Guide 2025
</h1>
```

4. **Update Last Updated Display** (Line 87):
```tsx
// REPLACE:
<span>Last Updated: January 15, 2024</span>

// WITH:
<span>Last Updated: October 19, 2025</span>
```

---

### CHANGE #2: CREATE MULTIMEDIA OVERVIEW COMPONENT

**Step 1: Copy Media Files from AI Drive**

```bash
# Navigate to project root
cd /home/user/webapp

# Verify AI Drive files exist
if [ -f "/mnt/aidrive/The_Financial_Protection_Paradox__Record_Premiums,_100_Million_.m4a" ]; then
  echo "✅ Audio file found"
else
  echo "⚠️  Audio file not found in AI Drive - please upload first"
fi

if [ -f "/mnt/aidrive/Demystifying_Life_Insurance.mp4" ]; then
  echo "✅ Video file found"
else
  echo "⚠️  Video file not found in AI Drive - please upload first"
fi

# Create media directories
mkdir -p public/media/audio
mkdir -p public/media/video

# Copy files (only if they exist)
[ -f "/mnt/aidrive/The_Financial_Protection_Paradox__Record_Premiums,_100_Million_.m4a" ] && \
  cp "/mnt/aidrive/The_Financial_Protection_Paradox__Record_Premiums,_100_Million_.m4a" \
     public/media/audio/term-vs-whole-life-2025-overview.m4a

[ -f "/mnt/aidrive/Demystifying_Life_Insurance.mp4" ] && \
  cp "/mnt/aidrive/Demystifying_Life_Insurance.mp4" \
     public/media/video/demystifying-life-insurance-2025.mp4

# Convert audio to MP3 fallback (requires ffmpeg)
if command -v ffmpeg &> /dev/null && [ -f "public/media/audio/term-vs-whole-life-2025-overview.m4a" ]; then
  ffmpeg -i public/media/audio/term-vs-whole-life-2025-overview.m4a \
         -acodec libmp3lame -ab 192k \
         public/media/audio/term-vs-whole-life-2025-overview.mp3
fi

# Optimize video for web delivery (requires ffmpeg)
if command -v ffmpeg &> /dev/null && [ -f "public/media/video/demystifying-life-insurance-2025.mp4" ]; then
  ffmpeg -i public/media/video/demystifying-life-insurance-2025.mp4 \
         -vcodec h264 -acodec aac -crf 23 -preset slow -movflags +faststart \
         public/media/video/demystifying-life-insurance-2025-optimized.mp4
  # Replace original with optimized version
  mv public/media/video/demystifying-life-insurance-2025-optimized.mp4 \
     public/media/video/demystifying-life-insurance-2025.mp4
fi

# Verify files were copied
ls -lh public/media/audio/
ls -lh public/media/video/
```

**Step 2: Create Multimedia Component**

**File:** `src/components/blog/MultimediaOverview.tsx`

```tsx
import React from 'react';

interface MultimediaOverviewProps {
  audioSrc: string;
  audioSrcFallback?: string;
  videoSrc: string;
  audioDescription?: string;
  videoDescription?: string;
}

export default function MultimediaOverview({
  audioSrc,
  audioSrcFallback,
  videoSrc,
  audioDescription = "AI-powered summary covering key statistics and market trends",
  videoDescription = "Visual guide with animated cost comparisons and data visualizations"
}: MultimediaOverviewProps) {
  return (
    <div 
      className="multimedia-overview rounded-xl p-6 md:p-8 my-8 shadow-lg"
      style={{
        background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
      }}
    >
      <h3 className="text-2xl font-bold text-slate-900 mb-3 flex items-center gap-2">
        📚 Experience This Guide Your Way
      </h3>
      <p className="text-slate-700 mb-6 leading-relaxed">
        Choose your preferred format: read the full article below, listen to our 8-minute 
        AI-powered overview, or watch the visual breakdown covering 2025 market trends.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Audio Card */}
        <div className="bg-white rounded-lg p-5 shadow-sm">
          <div className="flex items-center mb-4">
            <span className="text-3xl mr-3">🎧</span>
            <div>
              <h4 className="text-lg font-semibold text-slate-900 mb-1">Audio Overview</h4>
              <p className="text-sm text-slate-600">8 minutes • AI-generated summary</p>
            </div>
          </div>
          
          <audio controls className="w-full mt-3">
            <source src={audioSrc} type="audio/mp4" />
            {audioSrcFallback && <source src={audioSrcFallback} type="audio/mpeg" />}
            Your browser does not support the audio element.
          </audio>
          
          <p className="text-sm text-slate-500 mt-3 leading-relaxed">
            <strong>Covers:</strong> {audioDescription}
          </p>
        </div>

        {/* Video Card */}
        <div className="bg-white rounded-lg p-5 shadow-sm">
          <div className="flex items-center mb-4">
            <span className="text-3xl mr-3">🎬</span>
            <div>
              <h4 className="text-lg font-semibold text-slate-900 mb-1">Video Breakdown</h4>
              <p className="text-sm text-slate-600">8 minutes • Visual guide</p>
            </div>
          </div>
          
          <video controls className="w-full rounded mt-3">
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video element.
          </video>
          
          <p className="text-sm text-slate-500 mt-3 leading-relaxed">
            <strong>Features:</strong> {videoDescription}
          </p>
        </div>
      </div>

      <div className="mt-6 pt-6 border-t border-slate-300 text-center">
        <p className="text-slate-600 text-sm">
          📖 <strong>Prefer to read?</strong> Full article below • 15 min read • 
          Updated with October 2025 market data
        </p>
      </div>
    </div>
  );
}
```

**Step 3: Import and Insert Component into Article**

**File:** `src/pages/blog/TermVsWholeLifeInsurance2024.tsx`

**Location:** After line 99 (after the author/meta section, before Table of Contents)

```tsx
// ADD IMPORT at top of file (around line 5):
import MultimediaOverview from '../../components/blog/MultimediaOverview';

// INSERT COMPONENT after the author/meta section:
{/* Multimedia Overview Section */}
<MultimediaOverview
  audioSrc="/media/audio/term-vs-whole-life-2025-overview.m4a"
  audioSrcFallback="/media/audio/term-vs-whole-life-2025-overview.mp3"
  videoSrc="/media/video/demystifying-life-insurance-2025.mp4"
  audioDescription="The $140K cost gap, 72% cost misconception crisis, 2025 market trends (IUL +11%, VUL +41%), and when whole life makes sense."
  videoDescription="Animated cost comparisons, data visualizations, and key statistics from LIMRA/Bankrate 2025 research."
/>

{/* Table of Contents */}
```

---

### CHANGE #3: ADD 2025 MARKET STATISTICS SECTIONS

[Continue with React JSX versions of all content sections...]

### CHANGE #4: CREATE FAQ SCHEMA UTILITY

**File:** `src/utils/faqSchema.ts` (NEW FILE)

```tsx
export interface FAQItem {
  question: string;
  answer: string;
}

export function generateFAQSchema(faqs: FAQItem[]): string {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
  
  return JSON.stringify(schema, null, 2);
}
```

**Update:** `src/pages/blog/TermVsWholeLifeInsurance2024.tsx`

```tsx
// ADD IMPORT:
import { generateFAQSchema } from '../../utils/faqSchema';

// DEFINE FAQ DATA (before return statement):
const faqs = [
  {
    question: "Can I convert a term life policy to a whole life policy later?",
    answer: "Yes, many term policies include a conversion option allowing you to switch to permanent coverage without a new medical exam. This is typically available within the first 10-15 years. Financial advisors often recommend converting term policies in your 50s if you anticipate needing lifetime coverage."
  },
  {
    question: "Is whole life insurance a good investment?",
    answer: "Whole life is generally viewed as insurance with a guaranteed savings component, not a primary investment vehicle. While the cash value grows tax-deferred, returns (typically 2-4%) are usually lower than historical market returns (7-10%). It is best suited for those needing guaranteed growth, forced savings, or maxed-out tax-advantaged accounts."
  },
  // ... add remaining 3 FAQs
];

// UPDATE articleSEO to include FAQ schema:
const articleSEO = buildArticleSEO({
  // ... existing params
  scripts: [
    {
      type: 'application/ld+json',
      innerHTML: generateFAQSchema(faqs)
    }
  ]
});
```

---

### CHANGE #5: ADD INTERNAL LINKS

[Provide React JSX Link component examples...]

---

## VALIDATION & TESTING

```bash
# 1. Type check
npm run type-check

# 2. Lint check
npm run lint

# 3. Start dev server
npm run dev

# 4. Open in browser
# Navigate to: http://localhost:8080/blog/term-vs-whole-life-insurance-2024

# 5. Test multimedia
# - Click audio play button
# - Click video play button
# - Test on mobile viewport (DevTools)

# 6. Validate schema markup
# - View page source
# - Copy FAQ schema JSON
# - Paste into: https://validator.schema.org/
# - Verify: No errors, FAQPage detected

# 7. Test internal links
# - Click each of the 5 internal links
# - Verify they navigate correctly
```

---

## GIT COMMIT

```bash
cd /home/user/webapp

# Stage changes
git add .

# Commit
git commit -m "feat(blog): Update Term vs Whole Life article with 2025 market data

- Add Q1 2025 statistics (IUL +11%, VUL +41%, market size $3.94B)
- Insert cost misconception crisis section (72% overestimate costs)
- Add employer coverage warning with 55% reliance stat
- Create MultimediaOverview component with audio/video embeds
- Implement FAQ schema markup utility for rich snippets
- Add 5 strategic internal links to related guides
- Update meta description for 2025 SEO optimization
- Change last updated date to October 19, 2025
- Migrate multimedia assets from AI Drive to /public/media/

Technical changes:
- New component: MultimediaOverview.tsx
- New utility: faqSchema.ts
- Updated: TermVsWholeLifeInsurance2024.tsx (metadata + content)
- Assets: 2 audio files (m4a/mp3), 1 video file (mp4)

Expected impact: +40% organic traffic, improved featured snippet chances"

# Push
git push origin main

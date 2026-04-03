# 🎯 MASTER PROMPT FOR CLAUDE SONNET 4.5 (VS CODE LOCAL)
# TASK: Update "Term vs Whole Life Insurance" Blog Post - 2025 SEO Enhancement
# MEDIA: Google Drive hosted files

## PROJECT CONTEXT
- **Website:** bradfordinformedguidance.com
- **Tech Stack:** React 18.2 + TypeScript 5.4 + Vite 5.4 + React Router v6
- **Target File:** `src/pages/blog/TermVsWholeLifeInsurance2024.tsx`
- **File Type:** React/TypeScript component (TSX), NOT Markdown
- **Current Status:** Last updated January 15, 2024
- **Goal:** Add 2025 market data, improve SEO, embed multimedia, increase organic traffic by 40%
- **Media Hosting:** Google Drive (URLs to be provided)

---

## WORKSPACE VERIFICATION (Execute First)

```bash
# 1. Verify working directory
cd /home/user/webapp && pwd

# 2. Confirm target file exists
ls -l src/pages/blog/TermVsWholeLifeInsurance2024.tsx

# 3. Check public directory structure
ls -la public/

# 4. Review current SEO helper implementation
head -50 src/utils/seoHelpers.ts
```

---

## MEDIA FILES CONFIGURATION

**IMPORTANT:** Before executing this prompt, the user will provide Google Drive public URLs for:

1. **Audio File:** `The_Financial_Protection_Paradox__Record_Premiums,_100_Million_.m4a`
   - Google Drive URL: `[USER WILL PROVIDE]`
   - Direct download link format: `https://drive.google.com/uc?export=download&id=[FILE_ID]`

2. **Video File:** `Demystifying_Life_Insurance.mp4`
   - Google Drive URL: `[USER WILL PROVIDE]`
   - Direct download link format: `https://drive.google.com/uc?export=download&id=[FILE_ID]`

**Action Required:** Ask user for these URLs before proceeding, or use placeholder URLs and document that they need updating.

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

### CHANGE #2: CREATE MULTIMEDIA OVERVIEW COMPONENT (Google Drive URLs)

**Step 1: Create Multimedia Component with External URL Support**

**File:** `src/components/blog/MultimediaOverview.tsx` (NEW FILE)

```tsx
import React from 'react';

interface MultimediaOverviewProps {
  audioUrl: string;
  videoUrl: string;
  audioDescription?: string;
  videoDescription?: string;
}

export default function MultimediaOverview({
  audioUrl,
  videoUrl,
  audioDescription = "The $140K cost gap, 72% cost misconception crisis, 2025 market trends (IUL +11%, VUL +41%), and when whole life makes sense.",
  videoDescription = "Animated cost comparisons, data visualizations, and key statistics from LIMRA/Bankrate 2025 research."
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
            <source src={audioUrl} type="audio/mp4" />
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
            <source src={videoUrl} type="video/mp4" />
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

**Step 2: Insert Component into Article**

**File:** `src/pages/blog/TermVsWholeLifeInsurance2024.tsx`

**Location:** After line 99 (after the author/meta section, before Table of Contents)

```tsx
// ADD IMPORT at top of file (around line 5):
import MultimediaOverview from '../../components/blog/MultimediaOverview';

// INSERT COMPONENT after the author/meta section (around line 99):

{/* Multimedia Overview Section */}
<MultimediaOverview
  audioUrl="https://drive.google.com/uc?export=download&id=AUDIO_FILE_ID_HERE"
  videoUrl="https://drive.google.com/uc?export=download&id=VIDEO_FILE_ID_HERE"
/>

{/* Table of Contents */}
```

**IMPORTANT NOTE:** Replace `AUDIO_FILE_ID_HERE` and `VIDEO_FILE_ID_HERE` with actual Google Drive file IDs provided by user.

**How to extract Google Drive file ID:**
- From URL like: `https://drive.google.com/file/d/1ABC123xyz/view?usp=sharing`
- Extract ID: `1ABC123xyz`
- Direct link: `https://drive.google.com/uc?export=download&id=1ABC123xyz`

---

### CHANGE #3: ADD 2025 MARKET STATISTICS

**File:** `src/pages/blog/TermVsWholeLifeInsurance2024.tsx`

**Location:** After "Quick Answer" section or Table of Contents, create new section

**Insert this content:**

```tsx
{/* 2025 Market Landscape Section */}
<section className="mb-12">
  <h2 className="text-3xl font-bold text-slate-900 mb-6">
    The 2025 Life Insurance Landscape: What Changed
  </h2>
  
  <p className="text-lg text-slate-700 leading-relaxed mb-6">
    The life insurance market experienced seismic shifts in 2025, driven by post-pandemic 
    awareness and evolving consumer preferences. Here's what the latest data reveals:
  </p>

  <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
    <h3 className="text-xl font-semibold text-slate-900 mb-4">
      Market Performance (Q1 2025):
    </h3>
    <ul className="space-y-2 text-slate-700">
      <li className="flex items-start">
        <span className="font-semibold mr-2">•</span>
        <span>Total new annualized premiums: <strong>$3.94 billion</strong> (up 8% year-over-year)</span>
      </li>
      <li className="flex items-start">
        <span className="font-semibold mr-2">•</span>
        <span>Whole life insurance: <strong>37% market share</strong> ($1.48 billion in new premiums)</span>
      </li>
      <li className="flex items-start">
        <span className="font-semibold mr-2">•</span>
        <span>Term life insurance: <strong>19% market share</strong> ($738 million in new premiums)</span>
      </li>
      <li className="flex items-start">
        <span className="font-semibold mr-2">•</span>
        <span>Combined individual life insurance sales: <strong>$16.2 billion in 2024</strong> (fourth consecutive record year)</span>
      </li>
    </ul>
  </div>

  <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 mb-6">
    <h3 className="text-xl font-semibold text-slate-900 mb-4">
      The Hybrid Product Surge:
    </h3>
    <ul className="space-y-2 text-slate-700">
      <li className="flex items-start">
        <span className="font-semibold mr-2">•</span>
        <span><strong>Indexed Universal Life (IUL):</strong> +11% growth to $959 million (24% market share)</span>
      </li>
      <li className="flex items-start">
        <span className="font-semibold mr-2">•</span>
        <span><strong>Variable Universal Life (VUL):</strong> +41% explosion to $533 million (14% market share)</span>
      </li>
      <li className="flex items-start">
        <span className="font-semibold mr-2">•</span>
        <span><strong>Final Expense Insurance:</strong> +16% growth to $1.05 billion (over 1 million policies sold)</span>
      </li>
    </ul>
  </div>

  <p className="text-lg text-slate-700 leading-relaxed mb-4">
    These numbers tell a clear story: while whole life maintains premium volume leadership, 
    consumers increasingly demand affordable, flexible protection—and the industry is responding 
    with hybrid products offering both death benefit protection and accumulation features.
  </p>

  <p className="text-sm text-slate-500 italic">
    Source: LIMRA Q1 2025 Market Report, Insurance Business Magazine, Bankrate 2025 Analysis
  </p>
</section>

{/* Cost Comparison 2025 Section */}
<section className="mb-12">
  <h2 className="text-3xl font-bold text-slate-900 mb-6">
    Real-World Cost Comparison: 2025 Rates
  </h2>
  
  <p className="text-lg text-slate-700 leading-relaxed mb-6">
    Let's examine the actual numbers for a healthy 35-year-old non-smoker seeking $500,000 in coverage:
  </p>

  <div className="grid md:grid-cols-2 gap-6 mb-8">
    {/* Term Life Card */}
    <div className="bg-green-50 border-2 border-green-500 rounded-lg p-6">
      <h3 className="text-2xl font-bold text-green-900 mb-4 flex items-center gap-2">
        <CheckCircle className="w-6 h-6" />
        30-Year Term Life Insurance
      </h3>
      <div className="space-y-3 text-slate-700">
        <div className="flex justify-between items-center border-b border-green-200 pb-2">
          <span>Monthly Premium:</span>
          <span className="text-2xl font-bold text-green-700">$35</span>
        </div>
        <div className="flex justify-between items-center border-b border-green-200 pb-2">
          <span>Annual Cost:</span>
          <span className="font-semibold">$420</span>
        </div>
        <div className="flex justify-between items-center border-b border-green-200 pb-2">
          <span>30-Year Total Paid:</span>
          <span className="font-semibold">$12,600</span>
        </div>
        <div className="flex justify-between items-center border-b border-green-200 pb-2">
          <span>Death Benefit:</span>
          <span className="font-semibold">$500,000</span>
        </div>
        <div className="flex justify-between items-center">
          <span>Cash Value:</span>
          <span className="font-semibold">$0 (pure protection)</span>
        </div>
      </div>
    </div>

    {/* Whole Life Card */}
    <div className="bg-amber-50 border-2 border-amber-500 rounded-lg p-6">
      <h3 className="text-2xl font-bold text-amber-900 mb-4 flex items-center gap-2">
        <DollarSign className="w-6 h-6" />
        Whole Life Insurance
      </h3>
      <div className="space-y-3 text-slate-700">
        <div className="flex justify-between items-center border-b border-amber-200 pb-2">
          <span>Monthly Premium:</span>
          <span className="text-2xl font-bold text-amber-700">$485</span>
        </div>
        <div className="flex justify-between items-center border-b border-amber-200 pb-2">
          <span>Annual Cost:</span>
          <span className="font-semibold">$5,820</span>
        </div>
        <div className="flex justify-between items-center border-b border-amber-200 pb-2">
          <span>30-Year Total Paid:</span>
          <span className="font-semibold">$174,600</span>
        </div>
        <div className="flex justify-between items-center border-b border-amber-200 pb-2">
          <span>Death Benefit:</span>
          <span className="font-semibold">$500,000</span>
        </div>
        <div className="flex justify-between items-center">
          <span>Cash Value at Year 30:</span>
          <span className="font-semibold">~$180,000</span>
        </div>
      </div>
    </div>
  </div>

  <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
    <h3 className="text-xl font-semibold text-slate-900 mb-4">
      The Shocking Reality:
    </h3>
    <ul className="space-y-2 text-slate-700">
      <li className="flex items-start">
        <span className="font-semibold mr-2">•</span>
        <span><strong>Premium Difference:</strong> $450/month ($5,400/year)</span>
      </li>
      <li className="flex items-start">
        <span className="font-semibold mr-2">•</span>
        <span><strong>30-Year Cost Gap:</strong> $162,000</span>
      </li>
      <li className="flex items-start">
        <span className="font-semibold mr-2">•</span>
        <span><strong>Premium Multiple:</strong> 14x more expensive for identical death benefit</span>
      </li>
      <li className="flex items-start">
        <span className="font-semibold mr-2">•</span>
        <span><strong>Industry Average:</strong> Whole life costs 8 times more than term for same coverage</span>
      </li>
    </ul>
  </div>

  <p className="text-lg text-slate-700 leading-relaxed mb-4">
    This 14-fold difference isn't a pricing anomaly—it reflects whole life's permanent coverage 
    and cash value accumulation versus term's temporary protection. But it also raises a critical 
    question: is the forced savings component worth the dramatically higher cost?
  </p>

  <p className="text-sm text-slate-500 italic">
    Source: The Zebra Life Insurance Statistics 2025, PolicyAdvisor Rate Analysis
  </p>
</section>

{/* Cost Misconception Crisis Section */}
<section className="mb-12">
  <h2 className="text-3xl font-bold text-slate-900 mb-6">
    The Cost Misconception Crisis: Why 100 Million Americans Remain Uninsured
  </h2>
  
  <p className="text-lg text-slate-700 leading-relaxed mb-6">
    The most pervasive barrier to life insurance ownership in 2025 isn't affordability—it's 
    <strong> misinformation about affordability</strong>. The industry faces a paradox: record 
    premium growth alongside a massive protection gap affecting 100 million Americans.
  </p>

  <div className="bg-red-100 border-2 border-red-600 rounded-lg p-6 mb-6">
    <h3 className="text-2xl font-bold text-red-900 mb-4">
      The Staggering Cost Overestimation Problem
    </h3>
    
    <div className="space-y-4 text-slate-800">
      <p className="text-lg">
        <strong>The Data is Alarming:</strong>
      </p>
      <ul className="space-y-3 ml-4">
        <li className="flex items-start">
          <span className="font-bold text-red-600 mr-2">•</span>
          <span><strong>72% of Americans</strong> dramatically overestimate the cost of basic term life insurance by <strong>3-5x</strong> the actual price</span>
        </li>
        <li className="flex items-start">
          <span className="font-bold text-red-600 mr-2">•</span>
          <span><strong>Young adults ages 18-30</strong> overestimate costs by <strong>10-12 times</strong>—many believe a $250,000 policy costs $1,000+ annually when the actual median is just <strong>$165/year</strong> ($13.75/month)</span>
        </li>
        <li className="flex items-start">
          <span className="font-bold text-red-600 mr-2">•</span>
          <span><strong>Only 10% of consumers</strong> correctly estimated the true cost for a healthy 30-year-old</span>
        </li>
        <li className="flex items-start">
          <span className="font-bold text-red-600 mr-2">•</span>
          <span><strong>46% cite "cost" as the primary barrier</strong> to purchasing coverage, yet they're basing this on completely false assumptions</span>
        </li>
      </ul>
    </div>
  </div>

  <p className="text-sm text-slate-500 italic mb-6">
    Source: Bankrate Life Insurance Statistics 2025, LIMRA Cost Perception Study
  </p>

  <h3 className="text-2xl font-semibold text-slate-900 mb-4">
    The Human Cost of Misconception
  </h3>

  <p className="text-lg text-slate-700 leading-relaxed mb-4">
    This isn't just a pricing problem—it's a <strong>protection crisis</strong>:
  </p>

  <ul className="space-y-3 mb-6 text-slate-700 ml-6">
    <li className="flex items-start">
      <span className="font-semibold mr-2">•</span>
      <span><strong>42% of American adults</strong> (approximately 100 million people) believe they lack adequate life insurance coverage</span>
    </li>
    <li className="flex items-start">
      <span className="font-semibold mr-2">•</span>
      <span><strong>40% of adults</strong> say their loved ones would be "barely" or "not at all" financially secure if the primary wage earner died unexpectedly</span>
    </li>
    <li className="flex items-start">
      <span className="font-semibold mr-2">•</span>
      <span><strong>47% acknowledge</strong> they would have <strong>trouble paying living expenses within 6 months</strong> of their primary wage earner's death</span>
    </li>
    <li className="flex items-start">
      <span className="font-semibold mr-2">•</span>
      <span><strong>Americans with life insurance are 4x more confident</strong> in their family's financial security (47% vs 12% of those without coverage)</span>
    </li>
  </ul>

  <p className="text-sm text-slate-500 italic mb-6">
    Source: Insurance Barometer Study 2025, Life Happens Foundation Research
  </p>

  <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-6">
    <h3 className="text-xl font-semibold text-slate-900 mb-3">
      Reality Check Example:
    </h3>
    <div className="space-y-2 text-slate-700">
      <p><strong>What most people assume:</strong> $200-300/month for adequate coverage</p>
      <p><strong>Actual cost for healthy 35-year-old:</strong> $35/month for $500,000 term life</p>
      <p><strong>That's less than:</strong> 2 streaming services, weekly meal delivery, daily coffee habit</p>
    </div>
  </div>

  <p className="text-lg text-slate-700 leading-relaxed font-semibold">
    Don't let a misconception leave your family unprotected. Get real quotes—you'll likely be 
    shocked by how affordable comprehensive protection actually is.
  </p>
</section>

{/* Employer Coverage Warning Section */}
<section className="mb-12">
  <div className="bg-amber-50 border-2 border-amber-500 rounded-lg p-8">
    <h2 className="text-3xl font-bold text-amber-900 mb-6 flex items-center gap-3">
      <span>⚠️</span>
      Critical Mistake: The Employer Coverage Trap
    </h2>
    
    <p className="text-lg text-slate-800 font-semibold mb-6">
      <strong>55% of working adults</strong> rely exclusively on employer-provided life insurance—and 
      most are <strong>dramatically underinsured</strong> without realizing it.
    </p>

    <h3 className="text-2xl font-semibold text-slate-900 mb-4">
      Why Employer Coverage Falls Dangerously Short
    </h3>

    <div className="bg-white rounded-lg p-6 mb-6">
      <h4 className="text-xl font-semibold text-slate-900 mb-3">
        The Typical Scenario:
      </h4>
      <ul className="space-y-2 text-slate-700">
        <li className="flex justify-between items-center">
          <span><strong>Employer Provides:</strong></span>
          <span>1-2x annual salary coverage</span>
        </li>
        <li className="flex justify-between items-center">
          <span><strong>Experts Recommend:</strong></span>
          <span>10x annual salary coverage</span>
        </li>
        <li className="flex justify-between items-center">
          <span><strong>The Gap:</strong></span>
          <span className="text-red-600 font-bold">80-90% underinsured</span>
        </li>
      </ul>
    </div>

    <div className="bg-red-50 border-l-4 border-red-600 p-6 mb-6">
      <h4 className="text-xl font-semibold text-slate-900 mb-3">
        Real-World Example:
      </h4>
      <p className="text-slate-700 mb-3">
        A professional earning <strong>$75,000 annually</strong> receives:
      </p>
      <ul className="space-y-2 text-slate-700 ml-4">
        <li>• <strong>Employer Coverage:</strong> $150,000 (2x salary)</li>
        <li>• <strong>Recommended Coverage:</strong> $750,000 (10x salary)</li>
        <li>• <strong className="text-red-700">Protection Shortfall: $600,000</strong></li>
      </ul>
      <p className="text-slate-700 mt-4">
        For a family with a mortgage, children, and ongoing living expenses, this $150,000 death 
        benefit might cover 2-3 years of basic expenses—<strong>nowhere near sufficient</strong> for 
        long-term financial security.
      </p>
    </div>

    <h3 className="text-2xl font-semibold text-slate-900 mb-4">
      The Three Fatal Flaws of Employer-Only Coverage
    </h3>

    <div className="space-y-4 mb-6">
      <div className="bg-white rounded-lg p-5">
        <h4 className="text-lg font-semibold text-slate-900 mb-2">
          1. Catastrophic Portability Risk
        </h4>
        <ul className="space-y-1 text-slate-700 ml-4">
          <li>• Coverage terminates when employment ends (resignation, layoff, retirement)</li>
          <li>• During the COVID-19 pandemic, millions lost both jobs and insurance protection simultaneously</li>
          <li>• Most people don't qualify for conversion to individual policies (requires medical underwriting at higher rates)</li>
        </ul>
      </div>

      <div className="bg-white rounded-lg p-5">
        <h4 className="text-lg font-semibold text-slate-900 mb-2">
          2. Zero Control Over Coverage Terms
        </h4>
        <ul className="space-y-1 text-slate-700 ml-4">
          <li>• Employers choose policy features, coverage amounts, and carriers</li>
          <li>• Beneficiary options may be limited</li>
          <li>• No customization for family-specific needs</li>
          <li>• Coverage amounts rarely keep pace with income growth or lifestyle inflation</li>
        </ul>
      </div>

      <div className="bg-white rounded-lg p-5">
        <h4 className="text-lg font-semibold text-slate-900 mb-2">
          3. False Sense of Security
        </h4>
        <ul className="space-y-1 text-slate-700 ml-4">
          <li>• "I have life insurance through work" creates dangerous complacency</li>
          <li>• Employees rarely review actual coverage amounts versus needs</li>
          <li>• Many discover inadequacy only when filing claims after tragedy</li>
        </ul>
      </div>
    </div>

    <p className="text-sm text-slate-500 italic mb-6">
      Source: 2025 Employee Benefits Research, LIMRA Workplace Coverage Analysis
    </p>

    <div className="bg-green-50 border-l-4 border-green-600 p-6">
      <h3 className="text-xl font-semibold text-slate-900 mb-3">
        The Solution: The Supplemental Strategy
      </h3>
      
      <p className="text-slate-700 mb-4 font-semibold">
        Don't abandon employer coverage—supplement it strategically:
      </p>

      <ol className="space-y-2 text-slate-700 ml-6 mb-4">
        <li>1. <strong>Keep employer coverage</strong> (it's typically free or low-cost)</li>
        <li>2. <strong>Add individual term life insurance</strong> to bridge the gap</li>
        <li>3. <strong>Portable protection</strong> that follows you regardless of employment</li>
        <li>4. <strong>Total coverage</strong> should equal 10x annual income</li>
      </ol>

      <div className="bg-white rounded p-4 mb-4">
        <h4 className="font-semibold text-slate-900 mb-2">Example Supplemental Strategy:</h4>
        <ul className="space-y-1 text-slate-700">
          <li>• Employer coverage: $150,000</li>
          <li>• Individual 30-year term: $600,000</li>
          <li>• Total protection: $750,000</li>
          <li>• Additional cost: ~$45/month for individual term</li>
        </ul>
      </div>

      <p className="text-slate-700">
        Use our free calculator to calculate exactly how much coverage you need based on your 
        specific family situation.
      </p>
    </div>
  </div>
</section>
```

---

### CHANGE #4: ADD FAQ SCHEMA UTILITY

**Step 1: Create FAQ Schema Utility**

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

**Step 2: Update Article with FAQ Schema**

**File:** `src/pages/blog/TermVsWholeLifeInsurance2024.tsx`

```tsx
// ADD IMPORT at top of file:
import { generateFAQSchema } from '../../utils/faqSchema';

// DEFINE FAQ DATA (before return statement, around line 30):
const faqs = [
  {
    question: "Can I convert a term life policy to a whole life policy later?",
    answer: "Yes, many term policies include a conversion option allowing you to switch to permanent coverage without a new medical exam. This is typically available within the first 10-15 years. Financial advisors often recommend converting term policies in your 50s if you anticipate needing lifetime coverage."
  },
  {
    question: "Is whole life insurance a good investment?",
    answer: "Whole life is generally viewed as insurance with a guaranteed savings component, not a primary investment vehicle. While the cash value grows tax-deferred, returns (typically 2-4%) are usually lower than historical market returns (7-10%). It is best suited for those needing guaranteed growth, forced savings, or maxed-out tax-advantaged accounts."
  },
  {
    question: "What happens when my term policy expires?",
    answer: "When the term ends, you have several options: you can let the policy lapse if coverage is no longer needed, renew it annually at significantly higher rates, or convert it to permanent coverage (if the rider is available and still within the conversion period). Planning for this transition is essential."
  },
  {
    question: "Should a 30-year-old get term or whole life insurance?",
    answer: "For 95% of 30-year-olds, term life is the recommended choice. Term offers significantly more coverage for temporary needs and costs substantially less—often $25–$40/month versus $350–$450/month for whole life. The premium difference can be invested for potentially higher returns."
  },
  {
    question: "Can I have both term and whole life insurance?",
    answer: "Yes, the 'Layering' strategy combines a small whole life policy ($50K–$100K) for permanent needs (like final expenses) with a large term policy ($500K–$1M) for temporary needs (like mortgages or childcare). This strategy provides maximum coverage during peak responsibility years affordably."
  }
];

// UPDATE articleSEO to include FAQ schema (around line 13-29):
const articleSEO = buildArticleSEO({
  title,
  description,
  path,
  datePublished,
  dateModified,
  articleSection: 'Life Insurance',
  keywords: [
    'term vs whole life insurance',
    'term life insurance',
    'whole life insurance',
    'life insurance comparison',
    'term vs whole life cost',
    'term vs whole life pros and cons',
    'buy term invest the difference',
  ],
});

// ADD FAQ SCHEMA to SEO scripts
// Modify the SEO component call (around line 34-40) to include scripts:
<SEO 
  title={title}
  description={description}
  path={path}
  image={articleSEO.image}
  meta={articleSEO.meta}
  scripts={[
    ...(articleSEO.scripts || []),
    {
      type: 'application/ld+json',
      innerHTML: generateFAQSchema(faqs)
    }
  ]}
/>
```

---

### CHANGE #5: ADD INTERNAL LINKS

**File:** `src/pages/blog/TermVsWholeLifeInsurance2024.tsx`

**Instructions:** Locate these sections and add internal links using React Router's `<Link>` component.

**Import Required:**
```tsx
// Already imported at top:
import { Link } from 'react-router-dom';
```

**Link #1: After "Should a 30-year-old get term or whole life insurance?" FAQ**

Find the answer text and add after it:
```tsx
<p>
  For 95% of 30-year-olds, term life is the recommended choice. Term offers significantly 
  more coverage for temporary needs and costs substantially less. Learn more in our comprehensive{' '}
  <Link 
    to="/blog/life-insurance-young-adults-guide" 
    className="text-blue-600 hover:text-blue-700 underline font-medium"
  >
    Life Insurance Guide for Young Adults
  </Link>
  , which addresses cost misconceptions and delayed purchase decisions among millennials and Gen Z.
</p>
```

**Link #2: In Cost Misconception Crisis Section**

At the end of that section, add:
```tsx
<p className="text-lg text-slate-700 leading-relaxed">
  Don't let a misconception leave your family unprotected. Get real quotes—you'll likely be 
  shocked by how affordable comprehensive protection actually is.{' '}
  <Link 
    to="/blog/life-insurance-pre-existing-conditions" 
    className="text-blue-600 hover:text-blue-700 underline font-medium"
  >
    Learn about your options if you have pre-existing health conditions
  </Link>
  .
</p>
```

**Link #3: In 2025 Market Landscape Section**

Make "Indexed Universal Life (IUL)" a hyperlink:
```tsx
<li className="flex items-start">
  <span className="font-semibold mr-2">•</span>
  <span>
    <Link 
      to="/blog/indexed-universal-life-iul-insurance" 
      className="text-blue-600 hover:text-blue-700 underline font-medium"
    >
      <strong>Indexed Universal Life (IUL):</strong>
    </Link>
    {' '}+11% growth to $959 million (24% market share)
  </span>
</li>
```

**Link #4: In Employer Coverage Section**

At the end where it says "Use our free calculator":
```tsx
<p className="text-slate-700">
  Use our{' '}
  <Link 
    to="/blog/how-much-life-insurance-calculator" 
    className="text-blue-600 hover:text-blue-700 underline font-medium"
  >
    free calculator to calculate exactly how much coverage you need
  </Link>
  {' '}based on your specific family situation.
</p>
```

**Link #5: In final CTA section**

Add new paragraph before "We'll help you:":
```tsx
<p className="mb-4">
  Before choosing a carrier, review our{' '}
  <Link 
    to="/blog/life-insurance-companies-financial-strength" 
    className="text-blue-600 hover:text-blue-700 underline font-medium"
  >
    Life Insurance Companies Financial Strength Guide
  </Link>
  {' '}to ensure you're selecting a financially stable insurer with strong claims-paying ability.
</p>
```

---

## VALIDATION & TESTING

After implementing all changes:

```bash
# 1. Type check
cd /home/user/webapp && npm run type-check

# 2. Lint check
npm run lint

# 3. Start dev server
npm run dev
# Open: http://localhost:8080/blog/term-vs-whole-life-insurance-2024

# 4. Test multimedia
# - Click audio play button (should stream from Google Drive)
# - Click video play button (should stream from Google Drive)
# - Test on mobile viewport (DevTools)

# 5. Validate schema markup
# - View page source
# - Find FAQ schema JSON in <script> tag
# - Copy JSON
# - Paste into: https://validator.schema.org/
# - Verify: No errors, FAQPage type detected, 5 questions present

# 6. Test internal links
# - Click each of the 5 internal links
# - Verify they navigate correctly (or return 404 if target doesn't exist yet)
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
- Create MultimediaOverview component with Google Drive-hosted audio/video
- Implement FAQ schema markup utility for rich snippets
- Add 5 strategic internal links to related guides
- Update meta description for 2025 SEO optimization
- Change last updated date to October 19, 2025

Technical changes:
- New component: MultimediaOverview.tsx (Google Drive URLs)
- New utility: faqSchema.ts
- Updated: TermVsWholeLifeInsurance2024.tsx (metadata + content)
- Media: Hosted on Google Drive (public URLs)

Expected impact: +40% organic traffic, improved featured snippet chances"

# Push
git push origin main
```

---

## POST-EXECUTION NOTES

### Google Drive URL Configuration

After Google Drive upload is complete, update the multimedia component URLs:

1. Get shareable links for both files from Google Drive
2. Convert to direct download links:
   - From: `https://drive.google.com/file/d/FILE_ID/view?usp=sharing`
   - To: `https://drive.google.com/uc?export=download&id=FILE_ID`
3. Update the `MultimediaOverview` component call in the article

### Alternative: Google Drive Embed

If direct download links don't work for streaming, consider using Google Drive's embed feature:

**For Video:**
```tsx
<iframe
  src="https://drive.google.com/file/d/VIDEO_FILE_ID/preview"
  width="100%"
  height="315"
  allow="autoplay"
  className="rounded"
></iframe>
```

**For Audio:**
Google Drive doesn't support audio embed well. Consider:
1. Use Anchor.fm or SoundCloud for audio hosting
2. Or convert to MP3 and host on Vercel
3. Or use direct download link (works for most browsers)

### Testing Notes

- Google Drive streaming may have rate limits
- Test in incognito mode to verify public access
- Consider downloading files and hosting on Vercel CDN for better performance
- Monitor Google Drive bandwidth usage

---

## SUCCESS CRITERIA

✅ Article metadata updated (title includes "2025")
✅ Last updated date shows "October 19, 2025"
✅ MultimediaOverview component created
✅ FAQ schema utility created
✅ All 2025 market statistics added
✅ Cost comparison section updated
✅ 5 internal links added
✅ No TypeScript errors
✅ No ESLint errors
✅ Audio player loads (streams from Google Drive)
✅ Video player loads (streams from Google Drive)
✅ Schema validator shows FAQPage with 5 questions
✅ Git commit created

---

**Ready to execute!** Once you provide the Google Drive URLs, paste this entire prompt into Kilo Code.

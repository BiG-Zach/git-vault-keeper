# 🟡 PROFESSIONAL TONE IMPROVEMENTS - Medium Priority

**Use this prompt in Cursor/Codex after completing critical fixes.**

---

## Instructions for Cursor

Copy everything below the line into Cursor chat:

---

I need you to improve the professional tone across remaining homepage components. Make ONLY text content changes. DO NOT modify layouts, styles, component structure, or functionality.

## File 1: src/components/HowItWorks.tsx

### Change 1 - Update Steps Array (Lines 7-23)

Find this code:
```typescript
const steps = [
  {
    number: 1,
    title: "Understand",
    description: "We learn about your needs, network preferences, and budget.",
  },
  {
    number: 2,
    title: "Compare",
    description: "We compare plans from top carriers and PPO networks.",
  },
  {
    number: 3,
    title: "Enroll",
    description: "Choose confidently and get help with enrollment and next steps.",
  },
];
```

Replace with:
```typescript
const steps = [
  {
    number: 1,
    title: "Assessment",
    description: "Evaluate coverage needs, budget parameters, and network preferences.",
  },
  {
    number: 2,
    title: "Analysis",
    description: "Compare available plans from A-rated carriers and PPO networks.",
  },
  {
    number: 3,
    title: "Enrollment",
    description: "Professional enrollment support and policy activation assistance.",
  },
];
```

### Change 2 - Update Section Title (Line 44)

Find:
```typescript
<h2>How It Works</h2>
```

Replace with:
```typescript
<h2>Enrollment Process</h2>
```

### Change 3 - Update Section Description (Line 53)

Find:
```typescript
<p>Getting the right insurance coverage shouldn't be complicated. Our simple 3-step process makes it easy.</p>
```

Replace with:
```typescript
<p>Three-step consultation and enrollment process with licensed insurance professionals.</p>
```

### Change 4 - Update CTA Button (Line 122)

Find:
```typescript
Start Step 1 Now
```

Replace with:
```typescript
Request Consultation
```

### Change 5 - Update Supporting Text (Line 125)

Find:
```typescript
Free consultation • No obligation • Licensed advisors
```

Replace with:
```typescript
Licensed professionals • Multi-state coverage • Year-round enrollment
```

---

## File 2: src/components/About.tsx

### Update About Content (Lines 11-14)

Find this code:
```typescript
<h2 className="text-3xl md:text-4xl font-bold mb-4">About Bradford Informed Guidance</h2>
<p className="text-lg">
  Founded on integrity and driven by results, we help clients across the country secure protection they can count on—while delivering the personal service they deserve.
</p>
```

Replace with:
```typescript
<h2 className="text-3xl md:text-4xl font-bold mb-4">About Bradford Informed Guidance</h2>
<p className="text-lg">
  Independent insurance brokerage serving FL, MI, NC, AZ, TX, and GA. Licensed professionals specializing in health and life insurance solutions with A-rated carrier partnerships.
</p>
```

---

## File 3: src/components/OurCarriers.tsx

### Update Carriers Content (Lines 11-14)

Find this code:
```typescript
<h2 className="text-3xl md:text-4xl font-bold mb-6">Our Trusted Carriers</h2>
<p className="text-lg">
  We partner directly with the nation's top-rated carriers to bring you robust, flexible, and affordable coverage options.
</p>
```

Replace with:
```typescript
<h2 className="text-3xl md:text-4xl font-bold mb-6">Carrier Partnerships</h2>
<p className="text-lg">
  Direct appointments with A-rated carriers including Aetna, Cigna, UnitedHealthcare, Blue Cross Blue Shield, and additional regional providers.
</p>
```

---

## File 4: src/components/luxury/AuthoritySection.tsx

### Change 1 - Update Achievements Array (Lines 9-34)

Find this code:
```typescript
const achievements = [
  {
    icon: Award,
    number: "15+",
    label: "Years Experience",
    description: "Industry expertise since 2008"
  },
  {
    icon: Users,
    number: "5,000+",
    label: "Families Served",
    description: "Trusted by thousands nationwide"
  },
  {
    icon: TrendingUp,
    number: "$2.5B",
    label: "Coverage Written",
    description: "Protecting families' financial futures"
  },
  {
    icon: Calendar,
    number: "365",
    label: "Days Support",
    description: "Year-round expert guidance"
  }
];
```

Replace with:
```typescript
const achievements = [
  {
    icon: Award,
    number: "15+",
    label: "Years Licensed",
    description: "Insurance professionals since 2008"
  },
  {
    icon: Users,
    number: "5,000+",
    label: "Clients Served",
    description: "Multi-state client base"
  },
  {
    icon: TrendingUp,
    number: "$2.5B",
    label: "Coverage Volume",
    description: "Total policy face amounts"
  },
  {
    icon: Calendar,
    number: "6",
    label: "Licensed States",
    description: "FL, MI, NC, AZ, TX, GA"
  }
];
```

### Change 2 - Update Certifications Array (Lines 36-41)

Find this code:
```typescript
const certifications = [
  { name: "Licensed Insurance Agent", code: `NPN ${BRAND.npn}` },
  { name: "Health Insurance Specialist", code: "Certified 2023" },
  { name: "Life Insurance Expert", code: "Advanced Certification" },
  { name: "Customer Service Excellence", code: "5-Star Rating" }
];
```

Replace with:
```typescript
const certifications = [
  { name: "Licensed Insurance Professional", code: `NPN ${BRAND.npn}` },
  { name: "Health Insurance Appointments", code: "Multi-Carrier" },
  { name: "Life Insurance Appointments", code: "Multi-Carrier" },
  { name: "A-Rated Carrier Partnerships", code: "Direct Appointments" }
];
```

### Change 3 - Update Awards Array (Lines 43-48)

Find this code:
```typescript
const awards = [
  "BBB A+ Rating",
  "Top Insurance Partner 2023",
  "Customer Choice Award",
  "Excellence in Service"
];
```

Replace with:
```typescript
const awards = [
  "BBB A+ Rating",
  "Licensed in Six States",
  "A-Rated Carrier Partnerships",
  "Year-Round Enrollment Support"
];
```

---

## File 5: src/components/FAQ.tsx (Additional Updates)

### Change 1 - Update Section Title (Line 40)

Find:
```typescript
<h2>Frequently Asked Questions</h2>
```

Replace with:
```typescript
<h2>Common Questions</h2>
```

### Change 2 - Update Section Description (Line 49)

Find:
```typescript
<p>Get answers to common questions about our services and coverage options</p>
```

Replace with:
```typescript
<p>Coverage options, licensing, and enrollment process information.</p>
```

### Change 3 - Update CTA Section (Lines 123-136)

Find this code:
```typescript
<h3 className="text-xl font-semibold text-slate-900 leading-tight mb-3">
  Still have questions?
</h3>
<p className="text-slate-600 mb-6">
  Our licensed advisors are here to help. Schedule a free consultation to get personalized answers.
</p>
<motion.button>
  Let's Talk
</motion.button>
```

Replace with:
```typescript
<h3 className="text-xl font-semibold text-slate-900 leading-tight mb-3">
  Additional Questions?
</h3>
<p className="text-slate-600 mb-6">
  Licensed insurance professionals available for consultation.
</p>
<motion.button>
  Schedule Consultation
</motion.button>
```

---

## Verification

After making these changes, verify:

1. ✅ All casual titles replaced with professional equivalents
2. ✅ All "we" statements converted to institutional voice
3. ✅ No defensive language ("no obligation," "free")
4. ✅ No emotional appeals ("truly understand," "deserve")
5. ✅ Specific carriers named instead of vague claims
6. ✅ Concrete facts instead of marketing adjectives
7. ✅ Statistics clarified with proper labels
8. ✅ Last achievement changed to "6 Licensed States"

---

**Impact**: These changes improve professional credibility and reduce word count by approximately 40-50% across these sections.

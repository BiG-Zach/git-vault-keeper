# 🎯 ALL-IN-ONE CURSOR PROMPT - Complete Homepage Professionalization

**Copy this ENTIRE file into Cursor Chat to implement all changes at once.**

---

I need you to professionalize all homepage content by making the text changes specified below. These changes remove legal liability exposure, correct geographic inaccuracies, and improve professional tone.

**CRITICAL RULES:**
- Make ONLY text content changes
- DO NOT modify any layouts, styles, or component structure
- DO NOT change functionality, routing, or build config
- Preserve all classNames, imports, and JSX structure
- Only replace the exact text specified

---

## File 1: src/components/luxury/RiskReversalSection.tsx

### Line 9-28: Replace guarantees array
FIND:
```typescript
const guarantees = [
  {
    icon: Shield,
    title: "My Personal Guarantee",
    description: "Not happy with your coverage? I'll make it right or get your money back. Period.",
    badge: "30-Day Promise"
  },
  {
    icon: Clock,
    title: "Always Free to You",
    description: "Professional broker services at no cost. I work for you, not the insurance companies.",
    badge: "Always Free"
  },
  {
    icon: CheckCircle,
    title: "Your Personal Advocate",
    description: "Dedicated licensed professional fighting for your best interests every step of the way.",
    badge: "Licensed Pros"
  }
];
```

REPLACE WITH:
```typescript
const guarantees = [
  {
    icon: Shield,
    title: "Service Commitment",
    description: "Licensed professionals provide ongoing policy support and carrier advocacy throughout coverage duration.",
    badge: "Year-Round Support"
  },
  {
    icon: Clock,
    title: "No-Cost Consultation",
    description: "Broker services provided at no charge to clients. Compensation received through carrier partnerships.",
    badge: "No Client Fees"
  },
  {
    icon: CheckCircle,
    title: "Professional Guidance",
    description: "Licensed insurance professionals represent client interests in carrier negotiations and policy servicing.",
    badge: "Licensed Advisors"
  }
];
```

### Line 60-67: Replace header text
FIND:
```typescript
<h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 font-luxury-serif">
  Your Peace of Mind is
  <span className="block gradient-text-luxury">Guaranteed</span>
</h2>

<p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
  As your independent broker, I stake my reputation on finding you better coverage. That's why I guarantee your complete satisfaction with zero risk.
</p>
```

REPLACE WITH:
```typescript
<h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 font-luxury-serif">
  Professional Service
  <span className="block gradient-text-luxury">Standards</span>
</h2>

<p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
  Independent brokerage committed to comprehensive carrier comparison, transparent pricing disclosure, and ongoing policy support.
</p>
```

### Line 114-120: Replace CTA section
FIND:
```typescript
<h3 className="text-2xl lg:text-3xl font-bold text-white mb-6 font-luxury-serif">
  Ready to Experience the Difference?
</h3>

<p className="text-slate-300 mb-8 leading-relaxed">
  Join thousands of satisfied families who've discovered better coverage, significant savings, and exceptional service. 
  Your journey to better health insurance starts with a simple, no-obligation quote.
</p>
```

REPLACE WITH:
```typescript
<h3 className="text-2xl lg:text-3xl font-bold text-white mb-6 font-luxury-serif">
  Request Coverage Analysis
</h3>

<p className="text-slate-300 mb-8 leading-relaxed">
  Licensed professionals serving clients across six states with A-rated carrier partnerships and year-round enrollment options.
</p>
```

---

## File 2: src/components/luxury/LuxuryHero.tsx

### Line 48-49: Replace H1 text
FIND:
```typescript
<span className="block mb-4 bg-gradient-to-br from-white to-gray-50 bg-clip-text text-transparent">Affordable Health &</span>
<span className="block gradient-text-luxury font-luxury-serif">Life Insurance</span>
```

REPLACE WITH:
```typescript
<span className="block mb-4 bg-gradient-to-br from-white to-gray-50 bg-clip-text text-transparent">Professional Health &</span>
<span className="block gradient-text-luxury font-luxury-serif">Life Insurance Guidance</span>
```

### Line 60: Replace H2 text
FIND:
```typescript
Compare Today's Top-Rated Plans in 60 Seconds - No Medical Exams
```

REPLACE WITH:
```typescript
Licensed Broker | PPO Options | Multi-State Coverage
```

### Line 71: Replace paragraph text
FIND:
```typescript
Stop overpaying for health insurance. As a licensed broker, I've helped thousands of families find premium PPO coverage with $0 deductibles and next-day approval. Get your personalized quote now and discover why families save an average of $2,400 annually.
```

REPLACE WITH:
```typescript
Independent insurance brokerage specializing in PPO health plans with $0 deductible options. Licensed professionals provide personalized quotes in FL, MI, NC, AZ, TX, and GA. Average client savings: $2,400 annually.
```

---

## File 3: src/components/FAQ.tsx

### Line 7-14: Replace entire FAQ array
FIND:
```typescript
const ITEMS: QA[] = [
  { q: 'Which states do you currently serve?', a: 'Florida, Michigan, and North Carolina — with more coming soon as we expand nationwide.' },
  { q: 'Do you work with PPO networks?', a: 'Yes — Aetna, Cigna, First Health, Multiplan, and United (availability varies by plan and location).' },
  { q: 'What makes Bradford Informed Guidance different?', a: 'We combine personalized service with A-rated carriers, year-round enrollment, and transparent pricing. No hidden fees, no pressure — just honest guidance from licensed professionals who truly understand your needs.' },
  { q: 'Can I really enroll any time of year?', a: 'Absolutely! Unlike ACA marketplace plans, our private health insurance options allow year-round enrollment with coverage starting as soon as the next month. No waiting for open enrollment periods.' },
  { q: 'What types of coverage can you help with?', a: 'Health and life insurance for individuals, families, and small businesses. We specialize in solutions for self-employed, early retirees, and those between jobs.' },
  { q: 'How much does a consultation cost?', a: 'It\'s completely free. We\'ll discuss your needs, compare options, and present plans that fit your budget — no obligation.' },
];
```

REPLACE WITH:
```typescript
const ITEMS: QA[] = [
  { q: 'Which states are currently served?', a: 'Licensed in Florida, Michigan, North Carolina, Arizona, Texas, and Georgia.' },
  { q: 'Which PPO networks are available?', a: 'Aetna, Cigna, First Health, Multiplan, and United (availability varies by plan and state).' },
  { q: 'What distinguishes Bradford Informed Guidance?', a: 'A-rated carrier partnerships, year-round enrollment options, transparent pricing structure, and licensed professional guidance.' },
  { q: 'Is year-round enrollment available?', a: 'Yes. Private health insurance plans offer year-round enrollment with coverage effective the following month, independent of ACA marketplace enrollment periods.' },
  { q: 'What coverage types are offered?', a: 'Individual, family, and small business health insurance. Life insurance solutions for estate planning and income protection.' },
  { q: 'What is the consultation cost?', a: 'No-cost consultation services. Licensed broker compensation provided by carrier partnerships.' },
];
```

### Line 40: Replace section title
FIND:
```typescript
Frequently Asked Questions
```

REPLACE WITH:
```typescript
Common Questions
```

### Line 49: Replace section description
FIND:
```typescript
Get answers to common questions about our services and coverage options
```

REPLACE WITH:
```typescript
Coverage options, licensing, and enrollment process information.
```

### Line 123: Replace CTA heading
FIND:
```typescript
Still have questions?
```

REPLACE WITH:
```typescript
Additional Questions?
```

### Line 126: Replace CTA description
FIND:
```typescript
Our licensed advisors are here to help. Schedule a free consultation to get personalized answers.
```

REPLACE WITH:
```typescript
Licensed insurance professionals available for consultation.
```

### Line 135: Replace button text
FIND:
```typescript
Let's Talk
```

REPLACE WITH:
```typescript
Schedule Consultation
```

---

## File 4: src/components/HowItWorks.tsx

### Line 7-23: Replace steps array
FIND:
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

REPLACE WITH:
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

### Line 44: Replace section title
FIND:
```typescript
How It Works
```

REPLACE WITH:
```typescript
Enrollment Process
```

### Line 53: Replace section description
FIND:
```typescript
Getting the right insurance coverage shouldn't be complicated. Our simple 3-step process makes it easy.
```

REPLACE WITH:
```typescript
Three-step consultation and enrollment process with licensed insurance professionals.
```

### Line 122: Replace button text
FIND:
```typescript
Start Step 1 Now
```

REPLACE WITH:
```typescript
Request Consultation
```

### Line 125: Replace supporting text
FIND:
```typescript
Free consultation • No obligation • Licensed advisors
```

REPLACE WITH:
```typescript
Licensed professionals • Multi-state coverage • Year-round enrollment
```

---

## File 5: src/components/About.tsx

### Line 12-14: Replace paragraph
FIND:
```typescript
<p className="text-lg">
  Founded on integrity and driven by results, we help clients across the country secure protection they can count on—while delivering the personal service they deserve.
</p>
```

REPLACE WITH:
```typescript
<p className="text-lg">
  Independent insurance brokerage serving FL, MI, NC, AZ, TX, and GA. Licensed professionals specializing in health and life insurance solutions with A-rated carrier partnerships.
</p>
```

---

## File 6: src/components/OurCarriers.tsx

### Line 11-14: Replace heading and paragraph
FIND:
```typescript
<h2 className="text-3xl md:text-4xl font-bold mb-6">Our Trusted Carriers</h2>
<p className="text-lg">
  We partner directly with the nation's top-rated carriers to bring you robust, flexible, and affordable coverage options.
</p>
```

REPLACE WITH:
```typescript
<h2 className="text-3xl md:text-4xl font-bold mb-6">Carrier Partnerships</h2>
<p className="text-lg">
  Direct appointments with A-rated carriers including Aetna, Cigna, UnitedHealthcare, Blue Cross Blue Shield, and additional regional providers.
</p>
```

---

## File 7: src/components/Hero.tsx

### Line 14-15: Replace default props
FIND:
```typescript
title = 'Smarter Health & Life Insurance — Protection That Moves With You',
subtitle = 'Clear, affordable options for self-employed, families, and early retirees. Licensed in FL, MI, and NC — expanding nationwide.'
```

REPLACE WITH:
```typescript
title = 'Health & Life Insurance Solutions',
subtitle = 'Licensed broker serving individuals, families, and small businesses in FL, MI, NC, AZ, TX, and GA.'
```

### Line 100: Replace button text
FIND:
```typescript
Schedule Free Consultation
```

REPLACE WITH:
```typescript
Request Consultation
```

### Line 110: Replace button text
FIND:
```typescript
See Your Options
```

REPLACE WITH:
```typescript
View Coverage Options
```

---

## File 8: src/components/luxury/AuthoritySection.tsx

### Line 9-34: Replace achievements array
FIND:
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

REPLACE WITH:
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

### Line 36-41: Replace certifications array
FIND:
```typescript
const certifications = [
  { name: "Licensed Insurance Agent", code: `NPN ${BRAND.npn}` },
  { name: "Health Insurance Specialist", code: "Certified 2023" },
  { name: "Life Insurance Expert", code: "Advanced Certification" },
  { name: "Customer Service Excellence", code: "5-Star Rating" }
];
```

REPLACE WITH:
```typescript
const certifications = [
  { name: "Licensed Insurance Professional", code: `NPN ${BRAND.npn}` },
  { name: "Health Insurance Appointments", code: "Multi-Carrier" },
  { name: "Life Insurance Appointments", code: "Multi-Carrier" },
  { name: "A-Rated Carrier Partnerships", code: "Direct Appointments" }
];
```

### Line 43-48: Replace awards array
FIND:
```typescript
const awards = [
  "BBB A+ Rating",
  "Top Insurance Partner 2023",
  "Customer Choice Award",
  "Excellence in Service"
];
```

REPLACE WITH:
```typescript
const awards = [
  "BBB A+ Rating",
  "Licensed in Six States",
  "A-Rated Carrier Partnerships",
  "Year-Round Enrollment Support"
];
```

---

## File 9: src/pages/Home.tsx

### Line 113-123: Replace tablet hero content
FIND:
```typescript
<h1 className="text-[clamp(26px,5vw,34px)] md:text-5xl lg:text-6xl leading-[1.15] tracking-[-0.01em] mb-[10px] font-bold text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]">
  Private Health & Life Guidance. Clear. Fast. Year-Round.
</h1>
<p className="mt-3 text-white/90 text-lg">
  Licensed in {BRAND.licensed} • NPN {BRAND.npn} • Medically underwritten options with PPO networks.
</p>
<div className="mt-5 flex gap-3">
  <a href="/lead" className="btn-primary" data-gtm={`${BRAND.gtm.quote}_home`}>Get My Quote</a>
  <a href={BRAND.phoneTel} className="btn-secondary" data-gtm={`${BRAND.gtm.call}_home`}>Call Now</a>
</div>
<div className="mt-5 text-white/85 text-sm">Avg first options in 45–90 mins • {BRAND.hours}</div>
```

REPLACE WITH:
```typescript
<h1 className="text-[clamp(26px,5vw,34px)] md:text-5xl lg:text-6xl leading-[1.15] tracking-[-0.01em] mb-[10px] font-bold text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]">
  Professional Health & Life Insurance Guidance
</h1>
<p className="mt-3 text-white/90 text-lg">
  Licensed in {BRAND.licensed} • NPN {BRAND.npn} • PPO network options available.
</p>
<div className="mt-5 flex gap-3">
  <a href="/lead" className="btn-primary" data-gtm={`${BRAND.gtm.quote}_home`}>Request Quote</a>
  <a href={BRAND.phoneTel} className="btn-secondary" data-gtm={`${BRAND.gtm.call}_home`}>Contact</a>
</div>
<div className="mt-5 text-white/85 text-sm">Licensed professionals • {BRAND.hours}</div>
```

---

## VERIFICATION CHECKLIST

After making all changes, verify:

### Legal Compliance
- [ ] Search entire project for "guarantee" - should be ZERO instances
- [ ] Search for "money back" - should be ZERO instances
- [ ] Search for "I'll make it right" - should be ZERO instances
- [ ] No first-person "I," "my," "me" in service commitments

### Geographic Accuracy
- [ ] All state mentions show: FL, MI, NC, AZ, TX, GA (6 states)
- [ ] No "expanding nationwide" language
- [ ] No "across the country" language

### Professional Tone
- [ ] No "Stop overpaying" or similar imperatives
- [ ] No "truly understand" or emotional appeals
- [ ] No "no hidden fees," "no pressure," "no obligation"
- [ ] No "completely free" over-qualifications
- [ ] All "we" converted to institutional voice

### Technical
- [ ] No layout changes
- [ ] No styling modifications
- [ ] No component structure changes
- [ ] All imports preserved
- [ ] All classNames unchanged

---

## EXPECTED RESULTS

- **Word Count**: Reduced from ~3,200 to ~1,600 words (50% reduction)
- **Legal Compliance**: Zero liability exposure
- **Geographic Accuracy**: All 6 states correctly listed
- **Professional Tone**: Institutional voice throughout
- **User Experience**: Clearer, more scannable content

---

**After implementing, run `npm run dev` and verify homepage renders correctly.**

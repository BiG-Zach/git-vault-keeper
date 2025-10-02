# 🔴 CRITICAL FIXES - Legal Compliance & Geographic Accuracy

**Use this prompt in Cursor/Codex to fix the most urgent issues immediately.**

---

## Instructions for Cursor

Copy everything below the line into Cursor chat, then let it make the changes:

---

I need you to fix critical legal liability issues and geographic inaccuracies in my homepage. Make ONLY the text content changes specified below. DO NOT modify any layouts, styles, component structure, or functionality.

## File 1: src/components/luxury/RiskReversalSection.tsx

### Change 1 - Remove Personal Guarantee (Lines 9-28)

Find this code:
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

Replace with:
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

### Change 2 - Remove Guarantee Language in Header (Lines 60-67)

Find this code:
```typescript
<h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 font-luxury-serif">
  Your Peace of Mind is
  <span className="block gradient-text-luxury">Guaranteed</span>
</h2>

<p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
  As your independent broker, I stake my reputation on finding you better coverage. That's why I guarantee your complete satisfaction with zero risk.
</p>
```

Replace with:
```typescript
<h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 font-luxury-serif">
  Professional Service
  <span className="block gradient-text-luxury">Standards</span>
</h2>

<p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
  Independent brokerage committed to comprehensive carrier comparison, transparent pricing disclosure, and ongoing policy support.
</p>
```

### Change 3 - Update CTA Section (Lines 114-120)

Find this code:
```typescript
<h3 className="text-2xl lg:text-3xl font-bold text-white mb-6 font-luxury-serif">
  Ready to Experience the Difference?
</h3>

<p className="text-slate-300 mb-8 leading-relaxed">
  Join thousands of satisfied families who've discovered better coverage, significant savings, and exceptional service. 
  Your journey to better health insurance starts with a simple, no-obligation quote.
</p>
```

Replace with:
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

### Change 1 - Update H1 Title (Lines 48-49)

Find this code:
```typescript
<span className="block mb-4 bg-gradient-to-br from-white to-gray-50 bg-clip-text text-transparent">Affordable Health &</span>
<span className="block gradient-text-luxury font-luxury-serif">Life Insurance</span>
```

Replace with:
```typescript
<span className="block mb-4 bg-gradient-to-br from-white to-gray-50 bg-clip-text text-transparent">Professional Health &</span>
<span className="block gradient-text-luxury font-luxury-serif">Life Insurance Guidance</span>
```

### Change 2 - Update H2 Subtitle (Line 60)

Find this code:
```typescript
<h2 className="text-2xl lg:text-3xl xl:text-4xl font-luxury-sans font-normal text-white/95 leading-relaxed">
  Compare Today's Top-Rated Plans in 60 Seconds - No Medical Exams
</h2>
```

Replace with:
```typescript
<h2 className="text-2xl lg:text-3xl xl:text-4xl font-luxury-sans font-normal text-white/95 leading-relaxed">
  Licensed Broker | PPO Options | Multi-State Coverage
</h2>
```

### Change 3 - Update Main Paragraph (Line 71)

Find this code:
```typescript
<p className="text-lg lg:text-xl font-luxury-sans text-white/90 leading-relaxed max-w-2xl lg:max-w-xl antialiased">
  Stop overpaying for health insurance. As a licensed broker, I've helped thousands of families find premium PPO coverage with $0 deductibles and next-day approval. Get your personalized quote now and discover why families save an average of $2,400 annually.
</p>
```

Replace with:
```typescript
<p className="text-lg lg:text-xl font-luxury-sans text-white/90 leading-relaxed max-w-2xl lg:max-w-xl antialiased">
  Independent insurance brokerage specializing in PPO health plans with $0 deductible options. Licensed professionals provide personalized quotes in FL, MI, NC, AZ, TX, and GA. Average client savings: $2,400 annually.
</p>
```

---

## File 3: src/components/FAQ.tsx

### Change 1 - Update FAQ Items Array (Lines 7-14)

Find this entire array:
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

Replace with:
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

---

## File 4: src/components/Hero.tsx

### Change 1 - Update Default Props (Lines 14-15)

Find this code:
```typescript
const Hero = ({
  title = 'Smarter Health & Life Insurance — Protection That Moves With You',
  subtitle = 'Clear, affordable options for self-employed, families, and early retirees. Licensed in FL, MI, and NC — expanding nationwide.'
}: HeroProps) => {
```

Replace with:
```typescript
const Hero = ({
  title = 'Health & Life Insurance Solutions',
  subtitle = 'Licensed broker serving individuals, families, and small businesses in FL, MI, NC, AZ, TX, and GA.'
}: HeroProps) => {
```

### Change 2 - Update CTA Buttons (Lines 100, 110)

Find button text:
```typescript
Schedule Free Consultation
```

Replace with:
```typescript
Request Consultation
```

Find button text:
```typescript
See Your Options
```

Replace with:
```typescript
View Coverage Options
```

---

## File 5: src/pages/Home.tsx

### Update Tablet Hero (Lines 113-123)

Find this code:
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

Replace with:
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

## Verification

After making these changes, verify:

1. ✅ No "guarantee" language anywhere
2. ✅ No "money back" promises
3. ✅ No first-person "I" or "my" in service commitments
4. ✅ All state lists show: FL, MI, NC, AZ, TX, GA
5. ✅ No "Stop overpaying" or other imperatives
6. ✅ No layout or styling changes
7. ✅ All buttons and links still functional

---

**CRITICAL**: These changes remove legal liability exposure and correct geographic inaccuracies. Implement immediately.

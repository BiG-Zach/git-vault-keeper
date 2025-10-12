export type RelatedContentItem = {
  title: string;
  description: string;
  href: string;
  category?: string;
};

export const RELATED_CONTENT: Record<string, RelatedContentItem> = {
  '/blog/term-vs-whole-life-insurance-2024': {
    title: 'Term vs Whole Life Insurance: The $50,000 Decision',
    description: 'Compare permanent and temporary coverage with real cost scenarios to choose the right policy.',
    href: '/blog/term-vs-whole-life-insurance-2024',
    category: 'Life Insurance',
  },
  '/blog/florida-health-insurance-guide-2024': {
    title: 'Florida Health Insurance Guide 2024',
    description: 'Understand Florida marketplace rules, private plan options, and cost benchmarks for 2024.',
    href: '/blog/florida-health-insurance-guide-2024',
    category: 'Florida Coverage',
  },
  '/blog/life-insurance-young-adults-guide': {
    title: 'Life Insurance Guide for Young Adults',
    description: 'See why early coverage creates lifetime savings and protects future goals.',
    href: '/blog/life-insurance-young-adults-guide',
    category: 'Life Insurance',
  },
  '/blog/how-much-life-insurance-calculator': {
    title: 'How Much Life Insurance Do You Need?',
    description: 'Use our framework to calculate income replacement, debts, and future obligations.',
    href: '/blog/how-much-life-insurance-calculator',
    category: 'Life Insurance',
  },
  '/blog/life-insurance-pre-existing-conditions': {
    title: 'Life Insurance with Pre-Existing Conditions',
    description: 'Navigate underwriting tiers, medical records, and carrier options with health challenges.',
    href: '/blog/life-insurance-pre-existing-conditions',
    category: 'Life Insurance',
  },
  '/blog/ppo-hmo-epo-plan-comparison': {
    title: 'PPO vs HMO vs EPO Plan Comparison',
    description: 'Break down network rules, referrals, and costs to match the right plan format to your needs.',
    href: '/blog/ppo-hmo-epo-plan-comparison',
    category: 'Health Insurance',
  },
  '/blog/health-insurance-deductibles-guide': {
    title: 'Health Insurance Deductibles Guide',
    description: 'Learn how deductibles, copays, and out-of-pocket maxes work together on modern plans.',
    href: '/blog/health-insurance-deductibles-guide',
    category: 'Health Insurance',
  },
  '/blog/health-insurance-open-enrollment-checklist': {
    title: 'Health Insurance Open Enrollment Checklist',
    description: 'Follow this 14-point checklist to move through open enrollment with clarity and confidence.',
    href: '/blog/health-insurance-open-enrollment-checklist',
    category: 'Health Insurance',
  },
  '/blog/tampa-bay-insurance-broker-guide': {
    title: 'Tampa Bay Insurance Broker Guide',
    description: 'Explore Tampa Bay carrier availability, local pricing, and how an independent broker helps.',
    href: '/blog/tampa-bay-insurance-broker-guide',
    category: 'Florida Coverage',
  },
  '/blog/michigan-insurance-laws': {
    title: 'Michigan Insurance Laws Explained',
    description: 'Stay compliant with Michigan insurance requirements for individuals and small businesses.',
    href: '/blog/michigan-insurance-laws',
    category: 'State Compliance',
  },
  '/blog/north-carolina-best-health-insurance': {
    title: 'North Carolina Health Insurance Guide',
    description: 'Compare ACA, private, and small-group health plan options throughout North Carolina.',
    href: '/blog/north-carolina-best-health-insurance',
    category: 'State Coverage',
  },
  '/blog/florida-hurricane-insurance-protection': {
    title: 'Florida Hurricane Insurance Protection Guide',
    description: 'Coordinate homeowners, flood, and health protections ahead of hurricane season.',
    href: '/blog/florida-hurricane-insurance-protection',
    category: 'Florida Coverage',
  },
  '/blog/aetna-cigna-united-comparison': {
    title: 'Aetna vs Cigna vs UnitedHealthcare Comparison',
    description: 'See how the major national carriers differ on networks, underwriting, and pricing.',
    href: '/blog/aetna-cigna-united-comparison',
    category: 'Carrier Insights',
  },
  '/blog/am-best-insurance-ratings-explained': {
    title: 'AM Best Insurance Ratings Explained',
    description: 'Decode AM Best financial ratings to gauge insurer stability before you apply.',
    href: '/blog/am-best-insurance-ratings-explained',
    category: 'Carrier Insights',
  },
  '/blog/florida-small-business-health-insurance': {
    title: 'Florida Small Business Health Insurance',
    description: 'Compare ICHRA, group, and association plans tailored for Florida employers.',
    href: '/blog/florida-small-business-health-insurance',
    category: 'Florida Coverage',
  },
  '/blog/life-insurance-companies-financial-strength': {
    title: 'Life Insurance Companies Financial Strength Guide',
    description: 'Review top carrier financial grades, balance sheets, and claims histories.',
    href: '/blog/life-insurance-companies-financial-strength',
    category: 'Carrier Insights',
  },
  '/life-insurance': {
    title: 'Life Insurance Advisory Services',
    description: 'Layer term and permanent coverage with a concierge advisor guiding every decision.',
    href: '/life-insurance',
    category: 'Services',
  },
  '/health-insurance': {
    title: 'Health Insurance Advisory Services',
    description: 'Get concierge support comparing private, group, and marketplace plans in every licensed state.',
    href: '/health-insurance',
    category: 'Services',
  },
  '/quote': {
    title: 'Schedule Your Insurance Consultation',
    description: 'Book a 30-minute discovery call to compare carriers, quotes, and underwriting pathways.',
    href: '/quote',
    category: 'Get Started',
  },
};

export function getRelatedItems(slugs: string[]) {
  return slugs
    .map((slug) => {
      const item = RELATED_CONTENT[slug];
      if (!item && process.env.NODE_ENV !== 'production') {
        // eslint-disable-next-line no-console
        console.warn(`[RelatedContent] Missing related content entry for slug: ${slug}`);
      }
      return item ? { slug, ...item } : null;
    })
    .filter(Boolean) as Array<RelatedContentItem & { slug: string }>;
}

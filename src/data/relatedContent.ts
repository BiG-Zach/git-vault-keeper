export type RelatedContentItem = {
  title: string;
  description: string;
  href: string;
  category?: string;
};

export const RELATED_CONTENT: Record<string, RelatedContentItem> = {
  '/blog/term-vs-whole-life-insurance-2025': {
    title: 'Term vs. Whole Life Insurance: 2025 Cost Comparison Guide',
    description: 'See why 80% choose term life. Compare the $140,000 cost difference and new 2025 market trends (IUL +11%, VUL +41%).',
    href: '/blog/term-vs-whole-life-insurance-2025',
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
  // Core Service Pages
  '/carriers': {
    title: 'Insurance Carriers We Partner With',
    description: 'Explore our relationships with A+ rated national and regional carriers across all states.',
    href: '/carriers',
    category: 'Services',
  },
  '/our-process': {
    title: 'Our Insurance Advisory Process',
    description: 'See how we guide clients through discovery, comparison, and enrollment in 4 clear steps.',
    href: '/our-process',
    category: 'Services',
  },
  '/about': {
    title: 'About Bradford Informed Guidance',
    description: 'Meet your licensed advisor and learn about our independent brokerage approach.',
    href: '/about',
    category: 'About Us',
  },
  '/contact': {
    title: 'Contact Our Advisory Team',
    description: 'Reach out for immediate questions or schedule a detailed consultation call.',
    href: '/contact',
    category: 'Get Started',
  },
  // State-Specific Pages
  '/states/fl': {
    title: 'Florida Health & Life Insurance Services',
    description: 'Licensed Florida insurance broker with specialized expertise in state regulations and carriers.',
    href: '/states/fl',
    category: 'State Services',
  },
  '/states/mi': {
    title: 'Michigan Health & Life Insurance Services',
    description: 'Comprehensive insurance guidance for Michigan residents with local carrier knowledge.',
    href: '/states/mi',
    category: 'State Services',
  },
  '/states/nc': {
    title: 'North Carolina Health & Life Insurance Services',
    description: 'Professional insurance advisory services tailored to North Carolina regulations.',
    href: '/states/nc',
    category: 'State Services',
  },
  '/states/az': {
    title: 'Arizona Health & Life Insurance Services',
    description: 'Expert insurance guidance for Arizona families with desert-state expertise.',
    href: '/states/az',
    category: 'State Services',
  },
  '/states/tx': {
    title: 'Texas Health & Life Insurance Services',
    description: 'Large-state insurance solutions with Texas-specific carrier relationships.',
    href: '/states/tx',
    category: 'State Services',
  },
  '/states/ga': {
    title: 'Georgia Health & Life Insurance Services',
    description: 'Georgia-focused insurance advisory with deep knowledge of regional options.',
    href: '/states/ga',
    category: 'State Services',
  },
  // Additional State Pages (All 51 States)
  '/states/al': {
    title: 'Alabama Health & Life Insurance Services',
    description: 'Expert insurance guidance for Alabama residents with local market knowledge.',
    href: '/states/al',
    category: 'State Services',
  },
  '/states/ak': {
    title: 'Alaska Health & Life Insurance Services',
    description: 'Specialized insurance solutions for Alaska families and individuals.',
    href: '/states/ak',
    category: 'State Services',
  },
  '/states/ar': {
    title: 'Arkansas Health & Life Insurance Services',
    description: 'Comprehensive insurance advisory for Arkansas residents.',
    href: '/states/ar',
    category: 'State Services',
  },
  '/states/ca': {
    title: 'California Health & Life Insurance Services',
    description: 'Navigate California insurance options with expert guidance.',
    href: '/states/ca',
    category: 'State Services',
  },
  '/states/co': {
    title: 'Colorado Health & Life Insurance Services',
    description: 'Colorado insurance solutions tailored to mountain state needs.',
    href: '/states/co',
    category: 'State Services',
  },
  '/states/ct': {
    title: 'Connecticut Health & Life Insurance Services',
    description: 'Professional insurance guidance for Connecticut families.',
    href: '/states/ct',
    category: 'State Services',
  },
  '/states/de': {
    title: 'Delaware Health & Life Insurance Services',
    description: 'Delaware-focused insurance advisory with personalized service.',
    href: '/states/de',
    category: 'State Services',
  },
  '/states/dc': {
    title: 'Washington DC Health & Life Insurance Services',
    description: 'Expert insurance guidance for District of Columbia residents.',
    href: '/states/dc',
    category: 'State Services',
  },
  '/states/hi': {
    title: 'Hawaii Health & Life Insurance Services',
    description: 'Island-specific insurance solutions for Hawaii residents.',
    href: '/states/hi',
    category: 'State Services',
  },
  '/states/id': {
    title: 'Idaho Health & Life Insurance Services',
    description: 'Comprehensive insurance guidance for Idaho families.',
    href: '/states/id',
    category: 'State Services',
  },
  '/states/il': {
    title: 'Illinois Health & Life Insurance Services',
    description: 'Illinois insurance advisory with Chicago and statewide expertise.',
    href: '/states/il',
    category: 'State Services',
  },
  '/states/in': {
    title: 'Indiana Health & Life Insurance Services',
    description: 'Professional insurance guidance for Indiana residents.',
    href: '/states/in',
    category: 'State Services',
  },
  '/states/ia': {
    title: 'Iowa Health & Life Insurance Services',
    description: 'Iowa-focused insurance solutions with local market knowledge.',
    href: '/states/ia',
    category: 'State Services',
  },
  '/states/ks': {
    title: 'Kansas Health & Life Insurance Services',
    description: 'Expert insurance advisory for Kansas families and businesses.',
    href: '/states/ks',
    category: 'State Services',
  },
  '/states/ky': {
    title: 'Kentucky Health & Life Insurance Services',
    description: 'Kentucky insurance guidance with regional expertise.',
    href: '/states/ky',
    category: 'State Services',
  },
  '/states/la': {
    title: 'Louisiana Health & Life Insurance Services',
    description: 'Louisiana-specific insurance solutions and advisory services.',
    href: '/states/la',
    category: 'State Services',
  },
  '/states/me': {
    title: 'Maine Health & Life Insurance Services',
    description: 'Comprehensive insurance guidance for Maine residents.',
    href: '/states/me',
    category: 'State Services',
  },
  '/states/md': {
    title: 'Maryland Health & Life Insurance Services',
    description: 'Maryland insurance advisory with Baltimore and statewide coverage.',
    href: '/states/md',
    category: 'State Services',
  },
  '/states/ma': {
    title: 'Massachusetts Health & Life Insurance Services',
    description: 'Expert insurance guidance for Massachusetts families.',
    href: '/states/ma',
    category: 'State Services',
  },
  '/states/mn': {
    title: 'Minnesota Health & Life Insurance Services',
    description: 'Minnesota-focused insurance solutions with local expertise.',
    href: '/states/mn',
    category: 'State Services',
  },
  '/states/ms': {
    title: 'Mississippi Health & Life Insurance Services',
    description: 'Professional insurance advisory for Mississippi residents.',
    href: '/states/ms',
    category: 'State Services',
  },
  '/states/mo': {
    title: 'Missouri Health & Life Insurance Services',
    description: 'Missouri insurance guidance with St. Louis and Kansas City expertise.',
    href: '/states/mo',
    category: 'State Services',
  },
  '/states/mt': {
    title: 'Montana Health & Life Insurance Services',
    description: 'Montana-specific insurance solutions for Big Sky Country.',
    href: '/states/mt',
    category: 'State Services',
  },
  '/states/ne': {
    title: 'Nebraska Health & Life Insurance Services',
    description: 'Expert insurance guidance for Nebraska families and businesses.',
    href: '/states/ne',
    category: 'State Services',
  },
  '/states/nv': {
    title: 'Nevada Health & Life Insurance Services',
    description: 'Nevada insurance advisory with Las Vegas and statewide coverage.',
    href: '/states/nv',
    category: 'State Services',
  },
  '/states/nh': {
    title: 'New Hampshire Health & Life Insurance Services',
    description: 'New Hampshire-focused insurance solutions and guidance.',
    href: '/states/nh',
    category: 'State Services',
  },
  '/states/nj': {
    title: 'New Jersey Health & Life Insurance Services',
    description: 'Comprehensive insurance advisory for New Jersey residents.',
    href: '/states/nj',
    category: 'State Services',
  },
  '/states/nm': {
    title: 'New Mexico Health & Life Insurance Services',
    description: 'New Mexico insurance guidance with regional expertise.',
    href: '/states/nm',
    category: 'State Services',
  },
  '/states/ny': {
    title: 'New York Health & Life Insurance Services',
    description: 'Expert insurance advisory for New York families and businesses.',
    href: '/states/ny',
    category: 'State Services',
  },
  '/states/nd': {
    title: 'North Dakota Health & Life Insurance Services',
    description: 'North Dakota-specific insurance solutions and guidance.',
    href: '/states/nd',
    category: 'State Services',
  },
  '/states/oh': {
    title: 'Ohio Health & Life Insurance Services',
    description: 'Ohio insurance advisory with Cleveland, Columbus, and statewide expertise.',
    href: '/states/oh',
    category: 'State Services',
  },
  '/states/ok': {
    title: 'Oklahoma Health & Life Insurance Services',
    description: 'Professional insurance guidance for Oklahoma residents.',
    href: '/states/ok',
    category: 'State Services',
  },
  '/states/or': {
    title: 'Oregon Health & Life Insurance Services',
    description: 'Oregon-focused insurance solutions with Portland and statewide coverage.',
    href: '/states/or',
    category: 'State Services',
  },
  '/states/pa': {
    title: 'Pennsylvania Health & Life Insurance Services',
    description: 'Pennsylvania insurance advisory with Philadelphia and Pittsburgh expertise.',
    href: '/states/pa',
    category: 'State Services',
  },
  '/states/ri': {
    title: 'Rhode Island Health & Life Insurance Services',
    description: 'Expert insurance guidance for Rhode Island families.',
    href: '/states/ri',
    category: 'State Services',
  },
  '/states/sc': {
    title: 'South Carolina Health & Life Insurance Services',
    description: 'South Carolina insurance solutions with local market knowledge.',
    href: '/states/sc',
    category: 'State Services',
  },
  '/states/sd': {
    title: 'South Dakota Health & Life Insurance Services',
    description: 'Comprehensive insurance advisory for South Dakota residents.',
    href: '/states/sd',
    category: 'State Services',
  },
  '/states/tn': {
    title: 'Tennessee Health & Life Insurance Services',
    description: 'Tennessee insurance guidance with Nashville and Memphis expertise.',
    href: '/states/tn',
    category: 'State Services',
  },
  '/states/ut': {
    title: 'Utah Health & Life Insurance Services',
    description: 'Utah-focused insurance solutions with Salt Lake City and statewide coverage.',
    href: '/states/ut',
    category: 'State Services',
  },
  '/states/vt': {
    title: 'Vermont Health & Life Insurance Services',
    description: 'Professional insurance guidance for Vermont residents.',
    href: '/states/vt',
    category: 'State Services',
  },
  '/states/va': {
    title: 'Virginia Health & Life Insurance Services',
    description: 'Virginia insurance advisory with Richmond and statewide expertise.',
    href: '/states/va',
    category: 'State Services',
  },
  '/states/wa': {
    title: 'Washington Health & Life Insurance Services',
    description: 'Washington insurance solutions with Seattle and statewide coverage.',
    href: '/states/wa',
    category: 'State Services',
  },
  '/states/wv': {
    title: 'West Virginia Health & Life Insurance Services',
    description: 'Expert insurance guidance for West Virginia families.',
    href: '/states/wv',
    category: 'State Services',
  },
  '/states/wi': {
    title: 'Wisconsin Health & Life Insurance Services',
    description: 'Wisconsin insurance advisory with Milwaukee and statewide expertise.',
    href: '/states/wi',
    category: 'State Services',
  },
  '/states/wy': {
    title: 'Wyoming Health & Life Insurance Services',
    description: 'Wyoming-specific insurance solutions for Cowboy State residents.',
    href: '/states/wy',
    category: 'State Services',
  },
  // Resources Hub
  '/resources': {
    title: 'Insurance Resources & Educational Guides',
    description: 'Comprehensive library of insurance guides, articles, and tools to help you make informed decisions.',
    href: '/resources',
    category: 'Resources',
  },
};

export function getRelatedItems(slugs: string[]) {
  return slugs
    .map((slug) => {
      const item = RELATED_CONTENT[slug];
      if (!item && process.env.NODE_ENV !== 'production') {
        console.warn(`[RelatedContent] Missing related content entry for slug: ${slug}`);
      }
      return item ? { slug, ...item } : null;
    })
    .filter(Boolean) as Array<RelatedContentItem & { slug: string }>;
}

import { useState } from 'react';
import { BookOpen } from 'lucide-react';
import SEO from '../components/SEO';
import PremiumKnowledgeCategories from '../components/resources/PremiumKnowledgeCategories';
import PremiumBlogGrid from '../components/resources/PremiumBlogGrid';
import { organizationSchema, itemListSchema, breadcrumbSchema } from '../utils/schema';

export interface BlogPost {
  slug: string;
  title: string;
  preview: string;
  wordCount: string;
  category: string;
  readTime: string;
  updated: string;
  states?: string[];
}

// eslint-disable-next-line react-refresh/only-export-components
export const blogPosts: { [key: string]: BlogPost[] } = {
  'life-insurance': [
    {
      slug: 'term-vs-whole-life-insurance-2025',
      title: 'Term vs. Whole Life Insurance: 2025 Cost Comparison Guide',
      preview: 'See why 80% choose term life. Compare the $140,000 cost difference and new 2025 market trends (IUL +11%, VUL +41%).',
      wordCount: '3,500 words',
      category: 'Life Insurance',
      readTime: '15 min read',
      updated: 'Oct 2025',
      states: ['All']
    },
    {
      slug: 'life-insurance-young-adults-guide',
      title: 'Why Smart 25-Year-Olds Buy Life Insurance Now',
      preview: 'The earlier you start, the more you save. See exactly how much waiting costs you.',
      wordCount: '1,800 words',
      category: 'Life Insurance',
      readTime: '9 min read',
      updated: 'Jan 2024',
      states: ['All']
    },
    {
      slug: 'life-insurance-pre-existing-conditions',
      title: 'Life Insurance with Health Issues: Your Complete Options Guide',
      preview: 'Pre-existing conditions do not mean no coverage. Here is how to get approved.',
      wordCount: '2,500 words',
      category: 'Life Insurance',
      readTime: '13 min read',
      updated: 'Dec 2023',
      states: ['All']
    },
    {
      slug: 'how-much-life-insurance-calculator',
      title: 'How Much Life Insurance Do You Really Need? (Free Calculator)',
      preview: 'Use our professional calculator to determine your exact coverage needs in under 5 minutes.',
      wordCount: '1,600 words',
      category: 'Life Insurance',
      readTime: '8 min read',
      updated: 'Jan 2024',
      states: ['All']
    }
  ],
  'health-insurance': [
    {
      slug: 'open-enrollment-2026-guide',
      title: 'Open Enrollment 2026: The Complete Guide to Avoiding Costly ACA Marketplace Mistakes',
      preview: 'Avoid the $30,000 auto-renewal mistake. Open Enrollment 2026 runs Nov 1-Jan 15. Learn about subsidy cliff, premium increases, and deadline strategies.',
      wordCount: '3,800 words',
      category: 'Health Insurance',
      readTime: '18 min read',
      updated: 'Oct 2025',
      states: ['All']
    },
    {
      slug: 'ppo-hmo-epo-plan-comparison',
      title: 'PPO vs HMO vs EPO: Choose the Right Plan Type for Your Family',
      preview: 'Stop overpaying for the wrong plan. Here is how to choose the best option for your needs.',
      wordCount: '2,200 words',
      category: 'Health Insurance',
      readTime: '11 min read',
      updated: 'Dec 2023',
      states: ['All']
    },
    {
      slug: 'health-insurance-deductibles-guide',
      title: 'Health Insurance Deductibles: How to Lower Your Out-of-Pocket Costs',
      preview: 'Smart strategies to reduce your healthcare expenses while maintaining excellent coverage.',
      wordCount: '1,900 words',
      category: 'Health Insurance',
      readTime: '10 min read',
      updated: 'Jan 2024',
      states: ['All']
    },
    {
      slug: 'health-insurance-open-enrollment-checklist',
      title: 'Health Insurance Open Enrollment: Your Complete Success Checklist',
      preview: 'Do not miss critical deadlines. Our step-by-step checklist ensures you get the best coverage.',
      wordCount: '2,100 words',
      category: 'Health Insurance',
      readTime: '11 min read',
      updated: 'Nov 2023',
      states: ['All']
    }
  ],
  'local-market': [
    {
      slug: 'florida-insurance-broker-guide',
      title: 'Florida Insurance Broker: Insider Market Guide',
      preview: 'Why Florida families choose a multi-state broker over online quotes. Exclusive Sunshine State insights.',
      wordCount: '2,400 words',
      category: 'Local Market',
      readTime: '12 min read',
      updated: 'Jan 2024',
      states: ['Florida']
    },
    {
      slug: 'georgia-insurance-laws',
      title: 'Georgia Insurance Laws: What Every Resident Must Know',
      preview: 'Stay compliant and protected. Georgia\'s latest insurance requirements explained simply.',
      wordCount: '2,000 words',
      category: 'Local Market',
      readTime: '10 min read',
      updated: 'Dec 2023',
      states: ['Georgia']
    },
    {
      slug: 'south-carolina-best-health-insurance',
      title: 'South Carolina\'s Best Health Insurance Plans: 2024 Rankings',
      preview: 'Independent analysis of South Carolina\'s top health plans based on coverage, cost, and satisfaction.',
      wordCount: '2,300 words',
      category: 'Local Market',
      readTime: '12 min read',
      updated: 'Jan 2024',
      states: ['South Carolina']
    },
    {
      slug: 'tennessee-health-insurance-market-guide',
      title: 'Tennessee Health Insurance: Market Trends for 2024',
      preview: 'Understand Tennessee\'s evolving health insurance landscape and the carriers leading the market.',
      wordCount: '2,100 words',
      category: 'Local Market',
      readTime: '11 min read',
      updated: 'Jan 2024',
      states: ['Tennessee']
    }
  ],
  'carrier-comparisons': [
    {
      slug: 'aetna-vs-cigna-ppo-comparison',
      title: 'Aetna vs Cigna: PPO Networks Compared for Multi-State Families',
      preview: 'Side-by-side breakdown of Aetna and Cigna PPO networks for six-state coverage shoppers.',
      wordCount: '2,800 words',
      category: 'Carrier Analysis',
      readTime: '14 min read',
      updated: 'Jan 2024',
      states: ['All']
    },
    {
      slug: 'aetna-provider-network-analysis',
      title: 'Aetna Provider Network: Southern Market Deep Dive',
      preview: 'How Aetna supports families across Georgia, South Carolina, Tennessee, Alabama, and Texas with PPO access.',
      wordCount: '1,700 words',
      category: 'Carrier Analysis',
      readTime: '9 min read',
      updated: 'Dec 2023',
      states: ['Georgia', 'South Carolina', 'Tennessee', 'Alabama', 'Texas']
    },
    {
      slug: 'texas-small-business-health-insurance',
      title: 'Small Business Health Insurance Texas: Top 10 Best Options',
      preview: 'Attract and retain top talent with competitive health benefits. Texas small business guide.',
      wordCount: '2,500 words',
      category: 'Carrier Analysis',
      readTime: '13 min read',
      updated: 'Jan 2024',
      states: ['Texas']
    },
    {
      slug: 'life-insurance-companies-financial-strength',
      title: 'Life Insurance Companies Ranked by Financial Strength 2024',
      preview: 'Protect your family\'s future by choosing financially stable insurers. Our complete rankings.',
      wordCount: '2,200 words',
      category: 'Carrier Analysis',
      readTime: '11 min read',
      updated: 'Jan 2024',
      states: ['All']
    }
  ]
};

export default function ResourcesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Articles', count: 16 },
    { id: 'life-insurance', name: 'Life Insurance', count: 4 },
    { id: 'health-insurance', name: 'Health Insurance', count: 4 },
    { id: 'local-market', name: 'Local Market', count: 4 },
    { id: 'carrier-comparisons', name: 'Carrier Analysis', count: 4 }
  ];

  const getAllPosts = () => {
    if (selectedCategory === 'all') {
      return Object.values(blogPosts).flat();
    }
    return blogPosts[selectedCategory] || [];
  };

  const filteredPosts = getAllPosts();

  const allPosts = Object.values(blogPosts).flat();
  const blogItemList = allPosts.map(post => ({
    name: post.title,
    url: `/blog/${post.slug}`,
    description: post.preview,
  }));

  const structuredData = [
    organizationSchema(),
    itemListSchema({
      name: 'Insurance Knowledge Center',
      description: 'Expert guides on health and life insurance',
      items: blogItemList
    }),
    breadcrumbSchema([
      { name: 'Home', item: 'https://bradfordinformedguidance.com/' },
      { name: 'Resources', item: 'https://bradfordinformedguidance.com/resources' },
    ]),
  ];

  return (
    <main className="bg-slate-950 selection:bg-emerald-500/30 min-h-screen">
      <SEO
        title="Insurance Knowledge Center | Expert Guides & Insights"
        description="Expert insurance guidance from Zach Bradford, licensed across 7 states. Life, health, and carrier insights for 1,000+ families."
        path="/resources"
        scripts={structuredData.map(data => ({ type: 'application/ld+json', innerHTML: data }))}
      />

      {/* LUXURY SPLIT HERO */}
      <section className="relative min-h-[70vh] flex items-center pt-32 pb-20 overflow-hidden bg-slate-950">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero/resources-hero-desktop.webp"
            alt="Financial intelligence and insurance strategy"
            className="w-full h-full object-cover object-center opacity-20 mix-blend-luminosity"
            onError={(e) => { e.currentTarget.src = '/assets/backgrounds/happy-family-beach-hero.webp'; }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/40 z-10" />
          <div className="absolute top-1/4 -left-32 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-[150px] pointer-events-none" />
        </div>

        <div className="container relative z-20 mx-auto px-6">
          <div className="max-w-4xl space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-sm">
              <BookOpen className="w-4 h-4 text-emerald-400" />
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                The Knowledge Center
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-serif font-bold leading-tight drop-shadow-lg text-white">
              Financial Intelligence. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
                Actionable Strategy.
              </span>
            </h1>
            
            <p className="text-xl text-slate-300 leading-relaxed font-light max-w-2xl">
              Decode the complexities of the healthcare market and life insurance vehicles. Authored directly by Zach Bradford for families across 7 states.
            </p>
          </div>
        </div>
      </section>

      {/* CATEGORIES OVERVIEW */}
      <section className="py-12 bg-slate-900 border-t border-white/5 relative">
        <div className="container mx-auto px-6 max-w-7xl">
           <PremiumKnowledgeCategories blogPosts={blogPosts} />
        </div>
      </section>

      {/* LUXURY CATEGORY FILTER */}
      <section className="py-12 bg-slate-950 relative border-t border-white/5">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-500 flex items-center gap-2 ${
                  selectedCategory === category.id
                    ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 shadow-[0_0_30px_rgba(16,185,129,0.15)] scale-105'
                    : 'bg-white/5 text-slate-400 border border-white/10 hover:bg-white/10 hover:text-slate-200'
                }`}
              >
                {category.name}
                <span className={`text-xs px-2 py-0.5 rounded-full ${
                  selectedCategory === category.id ? 'bg-emerald-500/20 text-emerald-300' : 'bg-white/10 text-slate-500'
                }`}>
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG GRID */}
      <section className="pb-24 bg-slate-950 relative">
        <div className="container mx-auto px-6 max-w-7xl">
           <PremiumBlogGrid 
             posts={filteredPosts}
             selectedCategory={selectedCategory}
             categories={categories}
           />
        </div>
      </section>
    </main>
  );
}

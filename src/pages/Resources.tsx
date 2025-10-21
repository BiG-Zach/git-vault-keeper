import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, Shield, Users } from 'lucide-react';
import SEO from '../components/SEO';
import ResourcesHero from '../components/headers/ResourcesHero';
import ResourcesStatisticsSection from '../components/resources/ResourcesStatisticsSection';
import PremiumKnowledgeCategories from '../components/resources/PremiumKnowledgeCategories';
import ExpertAuthoritySection from '../components/resources/ExpertAuthoritySection';
import PremiumBlogGrid from '../components/resources/PremiumBlogGrid';
import ResourcesAuthorCTA from '../components/resources/ResourcesAuthorCTA';
import { organizationSchema, itemListSchema } from '../utils/schema';

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

export default function Resources() {
  const [searchTerm, setSearchTerm] = useState('');
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

  const matchesSearch = (post: BlogPost) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.preview.toLowerCase().includes(searchTerm.toLowerCase());

  const filteredPosts = getAllPosts().filter(post => matchesSearch(post));

  // Build ItemList schema for all blog posts
  const allPosts = Object.values(blogPosts).flat();
  const blogItemList = allPosts.map(post => ({
    name: post.title,
    url: `/blog/${post.slug}`,
    description: post.preview,
  }));

  const structuredData = [
    organizationSchema(),
    itemListSchema({
      name: 'Insurance Knowledge Base Articles',
      description: 'Comprehensive insurance guides covering health insurance, life insurance, and carrier comparisons',
      items: blogItemList,
    }),
  ];

  return (
    <main id="content" className="has-sticky-cta">
      <SEO
        title="Your Complete Insurance Knowledge Center | Bradford Informed Guidance"
        description="Expert insurance guidance from Zach Bradford, licensed across FL, GA, SC, TN, AL, and TX. Life, health, and carrier insights for 1,000+ families since 2016."
        path="/resources"
        image="/images/hero/resources-hero-retina.webp"
        meta={[
          {
            property: 'og:image:alt',
            content: 'Open laptop and insurance resources curated by Bradford Informed Guidance'
          },
          {
            name: 'twitter:image:alt',
            content: 'Open laptop and insurance resources curated by Bradford Informed Guidance'
          }
        ]}
        scripts={structuredData.map(data => ({
          type: 'application/ld+json',
          innerHTML: data
        }))}
      />
      
      {/* Enhanced Hero Section (Light) */}
      <ResourcesHero />

      {/* NEW: Knowledge Statistics Section (Dark) */}
      <ResourcesStatisticsSection />

      {/* Enhanced Search Section (Light) */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search insurance topics..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-200 bg-white/80 backdrop-blur-sm text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
            />
          </div>
        </div>
      </section>
      {/* Featured Article Spotlight */}
      <section className="py-12 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Featured Guide</h2>
            <p className="text-slate-600">Most comprehensive resource this month</p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 max-w-2xl mx-auto">
            <div className="text-sm text-blue-600 font-semibold mb-2">🏆 MOST COMPREHENSIVE</div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Open Enrollment 2026: The Complete Guide to Avoiding Costly ACA Marketplace Mistakes</h3>
            <p className="text-slate-600 mb-4">Avoid the $30,000 auto-renewal mistake. Open Enrollment 2026 runs Nov 1-Jan 15. Learn about subsidy cliff, premium increases, and deadline strategies.</p>
            <div className="flex items-center justify-between">
              <div className="flex gap-4 text-sm text-slate-500">
                <span>3,800 words</span>
                <span>18 min read</span>
                <span>Updated Oct 2025</span>
              </div>
              <Link
                to="/blog/open-enrollment-2026-guide"
                className="text-blue-600 font-semibold hover:text-blue-700"
              >
                Read Guide →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Explore More Resources</h2>
            <p className="text-slate-600">Additional tools and information to help you make informed decisions</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              to="/states"
              className="group bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-lg hover:border-emerald-300 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center group-hover:bg-emerald-200 transition-colors">
                  <MapPin className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">State Directory</h3>
              </div>
              <p className="text-slate-600 text-sm">
                Find licensed advisors and coverage options in all 50 states
              </p>
            </Link>

            <Link
              to="/carriers"
              className="group bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-lg hover:border-blue-300 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Our Carriers</h3>
              </div>
              <p className="text-slate-600 text-sm">
                Explore our partnerships with A+ rated insurance carriers
              </p>
            </Link>

            <Link
              to="/our-process"
              className="group bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-lg hover:border-purple-300 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Our Process</h3>
              </div>
              <p className="text-slate-600 text-sm">
                See how we guide clients through discovery and enrollment
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced Category Navigation (Light) */}
      <section className="py-8 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg transform scale-105'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:shadow-md'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>


      {/* Premium Knowledge Categories Section (Light) */}
      <PremiumKnowledgeCategories blogPosts={blogPosts} />

      {/* NEW: Expert Authority Section (Dark) */}
      <ExpertAuthoritySection />

      {/* Enhanced Blog Grid Section (Light) */}
      <PremiumBlogGrid 
        posts={filteredPosts} 
        selectedCategory={selectedCategory}
        categories={categories}
      />

      {/* NEW: Author CTA Section (Dark) */}
      <ResourcesAuthorCTA />
    </main>
  );
}



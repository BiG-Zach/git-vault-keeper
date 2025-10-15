import { useState } from 'react';
import { Search } from 'lucide-react';
import SEO from '../components/SEO';
import ResourcesHero from '../components/headers/ResourcesHero';
import ResourcesStatisticsSection from '../components/resources/ResourcesStatisticsSection';
import PremiumKnowledgeCategories from '../components/resources/PremiumKnowledgeCategories';
import ExpertAuthoritySection from '../components/resources/ExpertAuthoritySection';
import PremiumBlogGrid from '../components/resources/PremiumBlogGrid';
import ResourcesAuthorCTA from '../components/resources/ResourcesAuthorCTA';

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
      slug: 'term-vs-whole-life-insurance-2024',
      title: 'Term vs Whole Life Insurance: The $50,000 Decision',
      preview: 'Discover which life insurance type could save your family thousands while providing better protection.',
      wordCount: '2,200 words',
      category: 'Life Insurance',
      readTime: '11 min read',
      updated: 'Jan 2024',
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
      slug: 'florida-health-insurance-guide-2024',
      title: 'Florida Health Insurance: Complete 2024 Market Guide',
      preview: 'Everything Florida residents need to know about health insurance options, costs, and enrollment.',
      wordCount: '3,000 words',
      category: 'Health Insurance',
      readTime: '15 min read',
      updated: 'Jan 2024',
      states: ['Florida']
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
  const [selectedState, setSelectedState] = useState('all');

  const categories = [
    { id: 'all', name: 'All Articles', count: 16 },
    { id: 'life-insurance', name: 'Life Insurance', count: 4 },
    { id: 'health-insurance', name: 'Health Insurance', count: 4 },
    { id: 'local-market', name: 'Local Market', count: 4 },
    { id: 'carrier-comparisons', name: 'Carrier Analysis', count: 4 }
  ];

  const stateFilters = [
    { id: 'all', name: 'All States' },
    { id: 'Florida', name: 'Florida' },
    { id: 'Georgia', name: 'Georgia' },
    { id: 'South Carolina', name: 'South Carolina' },
    { id: 'Tennessee', name: 'Tennessee' },
    { id: 'Alabama', name: 'Alabama' },
    { id: 'Texas', name: 'Texas' }
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

  const matchesState = (post: BlogPost) => {
    if (selectedState === 'all') return true;
    if (!post.states || post.states.includes('All')) return true;
    return post.states.includes(selectedState);
  };
  const filteredPosts = getAllPosts().filter(post => matchesSearch(post) && matchesState(post));


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
            <h3 className="text-xl font-bold text-slate-900 mb-3">Florida Health Insurance: Complete 2024 Market Guide</h3>
            <p className="text-slate-600 mb-4">Everything Florida residents need to know about health insurance options, costs, and enrollment.</p>
            <div className="flex items-center justify-between">
              <div className="flex gap-4 text-sm text-slate-500">
                <span>3,000 words</span>
                <span>15 min read</span>
                <span>Updated Jan 2024</span>
              </div>
              <button className="text-blue-600 font-semibold hover:text-blue-700">Read Guide →</button>
            </div>
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
                onClick={() => {
                  setSelectedCategory(category.id);
                  setSelectedState('all');
                }}
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

      <section className="py-6 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {stateFilters.map((state) => (
              <button
                key={state.id}
                onClick={() => setSelectedState(state.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedState === state.id
                    ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-lg transform scale-105'
                    : 'bg-emerald-50 text-emerald-800 hover:bg-emerald-100 hover:shadow-md'
                }`}
              >
                {state.name}
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



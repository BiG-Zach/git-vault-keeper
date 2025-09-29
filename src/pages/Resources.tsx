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
}

export const blogPosts: { [key: string]: BlogPost[] } = {
  'life-insurance': [
    {
      slug: 'term-vs-whole-life-insurance-2024',
      title: 'Term vs Whole Life Insurance: The $50,000 Decision',
      preview: 'Discover which life insurance type could save your family thousands while providing better protection.',
      wordCount: '2,200 words',
      category: 'Life Insurance',
      readTime: '11 min read',
      updated: 'Jan 2024'
    },
    {
      slug: 'life-insurance-young-adults-guide',
      title: 'Why Smart 25-Year-Olds Buy Life Insurance Now',
      preview: 'The earlier you start, the more you save. See exactly how much waiting costs you.',
      wordCount: '1,800 words',
      category: 'Life Insurance',
      readTime: '9 min read',
      updated: 'Jan 2024'
    },
    {
      slug: 'life-insurance-pre-existing-conditions',
      title: 'Life Insurance with Health Issues: Your Complete Options Guide',
      preview: 'Pre-existing conditions don\'t mean no coverage. Here\'s how to get approved.',
      wordCount: '2,500 words',
      category: 'Life Insurance',
      readTime: '13 min read',
      updated: 'Dec 2023'
    },
    {
      slug: 'how-much-life-insurance-calculator',
      title: 'How Much Life Insurance Do You Really Need? (Free Calculator)',
      preview: 'Use our professional calculator to determine your exact coverage needs in under 5 minutes.',
      wordCount: '1,600 words',
      category: 'Life Insurance',
      readTime: '8 min read',
      updated: 'Jan 2024'
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
      updated: 'Jan 2024'
    },
    {
      slug: 'ppo-hmo-epo-plan-comparison',
      title: 'PPO vs HMO vs EPO: Choose the Right Plan Type for Your Family',
      preview: 'Stop overpaying for the wrong plan. Here\'s how to choose the best option for your needs.',
      wordCount: '2,200 words',
      category: 'Health Insurance',
      readTime: '11 min read',
      updated: 'Dec 2023'
    },
    {
      slug: 'health-insurance-deductibles-guide',
      title: 'Health Insurance Deductibles: How to Lower Your Out-of-Pocket Costs',
      preview: 'Smart strategies to reduce your healthcare expenses while maintaining excellent coverage.',
      wordCount: '1,900 words',
      category: 'Health Insurance',
      readTime: '10 min read',
      updated: 'Jan 2024'
    },
    {
      slug: 'health-insurance-open-enrollment-checklist',
      title: 'Health Insurance Open Enrollment: Your Complete Success Checklist',
      preview: 'Don\'t miss critical deadlines. Our step-by-step checklist ensures you get the best coverage.',
      wordCount: '2,100 words',
      category: 'Health Insurance',
      readTime: '11 min read',
      updated: 'Nov 2023'
    }
  ],
  'local-market': [
    {
      slug: 'tampa-bay-insurance-broker-guide',
      title: 'Tampa Bay Insurance: Local Broker\'s Insider Market Guide',
      preview: 'Why Tampa Bay families choose local brokers over online quotes. Exclusive market insights.',
      wordCount: '2,400 words',
      category: 'Local Market',
      readTime: '12 min read',
      updated: 'Jan 2024'
    },
    {
      slug: 'michigan-insurance-laws',
      title: 'Michigan Insurance Laws: What Every Resident Must Know',
      preview: 'Stay compliant and protected. Michigan\'s latest insurance requirements explained simply.',
      wordCount: '2,000 words',
      category: 'Local Market',
      readTime: '10 min read',
      updated: 'Dec 2023'
    },
    {
      slug: 'north-carolina-best-health-insurance',
      title: 'North Carolina\'s Best Health Insurance Plans: 2024 Rankings',
      preview: 'Independent analysis of NC\'s top health plans based on coverage, cost, and customer satisfaction.',
      wordCount: '2,300 words',
      category: 'Local Market',
      readTime: '12 min read',
      updated: 'Jan 2024'
    },
    {
      slug: 'florida-hurricane-insurance-protection',
      title: 'Florida Hurricane Insurance: Complete Protection Strategy',
      preview: 'Protect your property and family during hurricane season. Essential coverage guide for Florida residents.',
      wordCount: '2,600 words',
      category: 'Local Market',
      readTime: '13 min read',
      updated: 'Nov 2023'
    }
  ],
  'carrier-comparisons': [
    {
      slug: 'aetna-cigna-united-comparison',
      title: 'Aetna vs Cigna vs UnitedHealthcare: 2024 Independent Analysis',
      preview: 'Which major insurer offers the best value? Our comprehensive comparison reveals the winner.',
      wordCount: '2,800 words',
      category: 'Carrier Analysis',
      readTime: '14 min read',
      updated: 'Jan 2024'
    },
    {
      slug: 'am-best-insurance-ratings-explained',
      title: 'Insurance Company Ratings: What AM Best Scores Really Mean',
      preview: 'Decode insurance company financial strength ratings to choose the most stable carriers.',
      wordCount: '1,700 words',
      category: 'Carrier Analysis',
      readTime: '9 min read',
      updated: 'Dec 2023'
    },
    {
      slug: 'florida-small-business-health-insurance',
      title: 'Small Business Health Insurance Florida: Top 10 Best Options',
      preview: 'Attract and retain top talent with competitive health benefits. Florida small business guide.',
      wordCount: '2,500 words',
      category: 'Carrier Analysis',
      readTime: '13 min read',
      updated: 'Jan 2024'
    },
    {
      slug: 'life-insurance-companies-financial-strength',
      title: 'Life Insurance Companies Ranked by Financial Strength 2024',
      preview: 'Protect your family\'s future by choosing financially stable insurers. Our complete rankings.',
      wordCount: '2,200 words',
      category: 'Carrier Analysis',
      readTime: '11 min read',
      updated: 'Jan 2024'
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

  const filteredPosts = getAllPosts().filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.preview.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main id="content" className="has-sticky-cta">
      <SEO 
        title="Your Complete Insurance Knowledge Center | Bradford Informed Guidance"
        description="Expert insurance guidance from Zach Bradford, Licensed FL Broker W347851. Life insurance, health insurance, and local market expertise for 1,000+ families since 2016."
        path="/resources"
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
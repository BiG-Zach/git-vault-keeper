import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Shield, Cross, MapPin, Scale, Clock, User, Star } from 'lucide-react';
import SEO from '../components/SEO';
import ResourcesHero from '../components/headers/ResourcesHero';

interface BlogPost {
  slug: string;
  title: string;
  preview: string;
  wordCount: string;
  category: string;
  readTime: string;
  updated: string;
}

const blogPosts: { [key: string]: BlogPost[] } = {
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
      slug: 'open-enrollment-checklist-2024',
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
      slug: 'michigan-insurance-requirements-2024',
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
      slug: 'aetna-cigna-united-comparison-2024',
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
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container-default relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <Star className="w-4 h-4 text-yellow-400 mr-2" />
              <span className="text-sm font-medium">Trusted by 1,000+ Florida families since 2016</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Your Complete Insurance
              <span className="block text-blue-200">Knowledge Center</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              Expert guidance from Zach Bradford, Licensed FL Broker W347851 | 8+ Years Experience
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search insurance topics..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent"
                />
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendly.com/bradfordinformedguidance"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-900 font-semibold rounded-xl hover:bg-blue-50 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <User className="w-5 h-5 mr-2" />
                Schedule Free Consultation
              </a>
              <a
                href="tel:+16893256570"
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-500 transition-colors"
              >
                Call (689) 325-6570
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="py-8 bg-white border-b border-slate-200">
        <div className="container-default">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 4 Streamlined Categories */}
      <section className="py-16 bg-slate-50">
        <div className="container-default">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Premium Insurance Knowledge Hub
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Streamlined expertise across four core areas to help you make informed insurance decisions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Life Insurance Mastery */}
            <div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-slate-100">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">Life Insurance Mastery</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Complete guides on term life, whole life, and universal life insurance options.
              </p>
              <div className="space-y-3">
                {blogPosts['life-insurance'].map((post, index) => (
                  <Link
                    key={index}
                    to={`/blog/${post.slug}`}
                    className="block p-3 rounded-lg hover:bg-slate-50 transition-colors group/item"
                  >
                    <div className="font-medium text-slate-900 group-hover/item:text-emerald-600 transition-colors">
                      {post.title}
                    </div>
                    <div className="text-sm text-slate-500 mt-1">{post.readTime}</div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Health Insurance Authority */}
            <div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-slate-100">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Cross className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">Health Insurance Authority</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Navigate ACA plans, Medicare, and employer coverage with expert guidance.
              </p>
              <div className="space-y-3">
                {blogPosts['health-insurance'].map((post, index) => (
                  <Link
                    key={index}
                    to={`/blog/${post.slug}`}
                    className="block p-3 rounded-lg hover:bg-slate-50 transition-colors group/item"
                  >
                    <div className="font-medium text-slate-900 group-hover/item:text-blue-600 transition-colors">
                      {post.title}
                    </div>
                    <div className="text-sm text-slate-500 mt-1">{post.readTime}</div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Local Market Intelligence */}
            <div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-slate-100">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">Local Market Intelligence</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                State-specific guides for Florida, Michigan, and North Carolina markets.
              </p>
              <div className="space-y-3">
                {blogPosts['local-market'].map((post, index) => (
                  <Link
                    key={index}
                    to={`/blog/${post.slug}`}
                    className="block p-3 rounded-lg hover:bg-slate-50 transition-colors group/item"
                  >
                    <div className="font-medium text-slate-900 group-hover/item:text-purple-600 transition-colors">
                      {post.title}
                    </div>
                    <div className="text-sm text-slate-500 mt-1">{post.readTime}</div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Carrier Comparisons & Expert Analysis */}
            <div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-slate-100">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Scale className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">Carrier Comparisons & Expert Analysis</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Independent analysis and side-by-side carrier comparisons.
              </p>
              <div className="space-y-3">
                {blogPosts['carrier-comparisons'].map((post, index) => (
                  <Link
                    key={index}
                    to={`/blog/${post.slug}`}
                    className="block p-3 rounded-lg hover:bg-slate-50 transition-colors group/item"
                  >
                    <div className="font-medium text-slate-900 group-hover/item:text-amber-600 transition-colors">
                      {post.title}
                    </div>
                    <div className="text-sm text-slate-500 mt-1">{post.readTime}</div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container-default">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              {selectedCategory === 'all' ? 'All Articles' : categories.find(c => c.id === selectedCategory)?.name}
            </h2>
            <p className="text-slate-600">
              {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} found
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <Link
                key={index}
                to={`/blog/${post.slug}`}
                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-slate-100"
              >
                <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-600 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    {post.preview}
                  </p>
                  <div className="flex items-center justify-between text-sm text-slate-500">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                    <span>Updated {post.updated}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Author Section */}
      <section className="py-16 bg-slate-50">
        <div className="container-default">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
              <User className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              About Your Insurance Expert
            </h2>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Zach Bradford is a licensed insurance broker (FL License W347851) with 8+ years of experience 
              helping families across Florida, Michigan, and North Carolina find the right insurance coverage. 
              Trusted by over 1,000 families since 2016.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendly.com/bradfordinformedguidance"
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Schedule Free Consultation
              </a>
              <a
                href="tel:+16893256570"
                className="inline-flex items-center px-8 py-4 bg-slate-200 text-slate-900 font-semibold rounded-xl hover:bg-slate-300 transition-colors"
              >
                Call (689) 325-6570
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Cross, MapPin, Scale, ArrowRight } from 'lucide-react';

interface BlogPost {
  slug: string;
  title: string;
  preview: string;
  wordCount: string;
  category: string;
  readTime: string;
  updated: string;
}

interface PremiumKnowledgeCategoriesProps {
  blogPosts: { [key: string]: BlogPost[] };
}

const categories = [
  {
    id: 'life-insurance',
    title: 'Life Insurance Mastery',
    description: 'Complete guides on term life, whole life, and universal life insurance options.',
    icon: <Shield className="w-8 h-8" />,
    gradient: 'from-emerald-500 to-emerald-600',
    hoverColor: 'emerald-600'
  },
  {
    id: 'health-insurance',
    title: 'Health Insurance Authority',
    description: 'Navigate ACA plans, Medicare, and employer coverage with expert guidance.',
    icon: <Cross className="w-8 h-8" />,
    gradient: 'from-blue-500 to-blue-600',
    hoverColor: 'blue-600'
  },
  {
    id: 'local-market',
    title: 'Local Market Intelligence',
    description: 'State-specific guides for Florida, Georgia, South Carolina, Tennessee, Alabama, and Texas markets.',
    icon: <MapPin className="w-8 h-8" />,
    gradient: 'from-purple-500 to-purple-600',
    hoverColor: 'purple-600'
  },
  {
    id: 'carrier-comparisons',
    title: 'Carrier Analysis & Comparisons',
    description: 'Independent analysis and side-by-side carrier comparisons.',
    icon: <Scale className="w-8 h-8" />,
    gradient: 'from-amber-500 to-amber-600',
    hoverColor: 'amber-600'
  }
];

export default function PremiumKnowledgeCategories({ blogPosts }: PremiumKnowledgeCategoriesProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0,0,0,0.1) 1px, transparent 0)`,
          backgroundSize: '24px 24px'
        }} />
      </div>
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-luxury-serif text-slate-900 mb-6">
            Premium Insurance Knowledge Hub
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Streamlined expertise across four core areas to help you make informed insurance decisions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ 
                duration: 0.6, 
                ease: "easeOut", 
                delay: prefersReducedMotion ? 0 : index * 0.1 
              }}
              className="group"
            >
              <div className="bg-white/80 backdrop-blur-sm border border-slate-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 h-full relative overflow-hidden">
                {/* Glass morphism overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent pointer-events-none" />
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-br ${category.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {category.icon}
                    <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 text-slate-900 font-luxury-serif">
                    {category.title}
                  </h3>
                  
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {category.description}
                  </p>
                  
                  <div className="space-y-3">
                    {blogPosts[category.id]?.slice(0, 3).map((post, postIndex) => (
                      <Link
                        key={postIndex}
                        to={`/blog/${post.slug}`}
                        className="block p-3 rounded-lg hover:bg-slate-50/80 transition-all duration-300 group/item border border-transparent hover:border-slate-200"
                      >
                        <div className={`font-medium text-slate-900 group-hover/item:text-${category.hoverColor} transition-colors text-sm leading-tight`}>
                          {post.title}
                        </div>
                        <div className="text-xs text-slate-500 mt-1 flex items-center gap-2">
                          <span>{post.readTime}</span>
                          <ArrowRight className="w-3 h-3 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                        </div>
                      </Link>
                    ))}
                  </div>
                  
                  {blogPosts[category.id]?.length > 3 && (
                    <Link
                      to="/resources"
                      className={`inline-flex items-center gap-2 mt-4 text-sm font-medium text-${category.hoverColor} hover:underline`}
                    >
                      View all articles
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
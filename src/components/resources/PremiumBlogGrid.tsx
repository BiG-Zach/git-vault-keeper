import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Clock, TrendingUp, Star, ArrowRight } from 'lucide-react';

interface BlogPost {
  slug: string;
  title: string;
  preview: string;
  wordCount: string;
  category: string;
  readTime: string;
  updated: string;
}

interface PremiumBlogGridProps {
  posts: BlogPost[];
  selectedCategory: string;
  categories: Array<{ id: string; name: string; count: number }>;
}

const getCategoryGradient = (category: string) => {
  switch (category) {
    case 'Life Insurance':
      return 'from-emerald-500 to-emerald-600';
    case 'Health Insurance':
      return 'from-blue-500 to-blue-600';
    case 'Local Market':
      return 'from-purple-500 to-purple-600';
    case 'Carrier Analysis':
      return 'from-amber-500 to-amber-600';
    default:
      return 'from-slate-500 to-slate-600';
  }
};

export default function PremiumBlogGrid({ posts, selectedCategory, categories }: PremiumBlogGridProps) {
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
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4 font-luxury-serif">
            {selectedCategory === 'all' ? 'All Expert Articles' : categories.find(c => c.id === selectedCategory)?.name}
          </h2>
          <p className="text-slate-600 text-lg">
            {posts.length} article{posts.length !== 1 ? 's' : ''} found • Updated regularly with latest insights
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={`${post.slug}-${index}`}
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
              <Link
                to={`/blog/${post.slug}`}
                className="block bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 h-full"
              >
                {/* Premium header with gradient */}
                <div className={`h-48 bg-gradient-to-br ${getCategoryGradient(post.category)} relative overflow-hidden`}>
                  {/* Glass morphism overlay */}
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
                  
                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full border border-white/30">
                      {post.category}
                    </span>
                  </div>
                  
                  {/* Featured badge for important articles */}
                  {index < 3 && (
                    <div className="absolute top-4 right-4">
                      <div className="flex items-center gap-1 bg-yellow-400/20 backdrop-blur-sm text-yellow-100 px-2 py-1 rounded-full text-xs">
                        <Star className="w-3 h-3" />
                        <span>Featured</span>
                      </div>
                    </div>
                  )}
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  
                  {/* Article stats */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between text-white/90 text-xs">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" />
                        <span>{post.updated}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6 relative">
                  {/* Glass morphism overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent pointer-events-none rounded-b-xl" />
                  
                  <div className="relative z-10">
                    <h3 className="font-bold text-lg text-slate-900 mb-3 group-hover:text-blue-600 transition-colors font-luxury-serif leading-tight">
                      {post.title}
                    </h3>
                    
                    <p className="text-slate-600 mb-4 leading-relaxed text-sm">
                      {post.preview}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-xs text-slate-500 font-medium">
                        {post.wordCount}
                      </div>
                      
                      <div className="flex items-center gap-2 text-blue-600 font-medium text-sm group-hover:gap-3 transition-all duration-300">
                        <span>Read Article</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Load more indicator or pagination could go here */}
        {posts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="text-center py-12"
          >
            <div className="text-slate-400 text-lg">
              No articles found matching your search criteria.
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
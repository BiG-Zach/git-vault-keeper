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
  states?: string[];
}

interface PremiumBlogGridProps {
  posts?: BlogPost[];
  selectedCategory?: string;
  categories?: Array<{ id: string; name: string; count: number }>;
}

const getCategoryGradient = (category: string) => {
  switch (category) {
    case 'Life Insurance':
      return 'from-emerald-500/20 to-emerald-900/40 border-emerald-500/30 text-emerald-400';
    case 'Health Insurance':
      return 'from-blue-500/20 to-blue-900/40 border-blue-500/30 text-blue-400';
    case 'Local Market':
      return 'from-purple-500/20 to-purple-900/40 border-purple-500/30 text-purple-400';
    case 'Carrier Analysis':
      return 'from-amber-500/20 to-amber-900/40 border-amber-500/30 text-amber-400';
    default:
      return 'from-slate-500/20 to-slate-800/40 border-slate-500/30 text-slate-400';
  }
};

export default function PremiumBlogGrid({ posts = [], selectedCategory = 'all', categories = [] }: PremiumBlogGridProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="relative w-full">
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 tracking-tight">
          {selectedCategory === 'all' ? 'The Strategy Archive' : categories.find(c => c.id === selectedCategory)?.name || 'Articles'}
        </h2>
        <p className="text-slate-400 text-lg md:text-xl font-light max-w-2xl mx-auto">
          {posts.length} {posts.length === 1 ? 'insight' : 'insights'} available. Curated intel for the modern policyholder.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 relative z-10">
        {posts.map((post, index) => (
          <motion.div
            key={`${post.slug}-${index}`}
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ 
              duration: 0.7, 
              ease: [0.21, 0.47, 0.32, 0.98], 
              delay: prefersReducedMotion ? 0 : (index % 3) * 0.15 
            }}
            className="group h-full"
          >
            <Link
              to={`/blog/${post.slug}`}
              className="flex flex-col h-full bg-slate-900/50 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden transition-all duration-500 hover:bg-slate-800/50 hover:border-emerald-500/30 hover:shadow-[0_8px_30px_rgba(16,185,129,0.1)] hover:-translate-y-1 relative"
            >
              {/* Subtle top gradient glow on hover */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500/0 to-transparent group-hover:via-emerald-500/50 transition-all duration-700" />
              
              <div className="p-8 flex flex-col flex-grow relative z-10">
                {/* Meta Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border bg-gradient-to-br ${getCategoryGradient(post.category)}`}>
                    {post.category}
                  </div>
                  {index < 2 && selectedCategory === 'all' && (
                     <div className="flex items-center gap-1.5 text-amber-400 text-xs font-bold tracking-widest uppercase">
                       <Star className="w-3.5 h-3.5 fill-amber-400" />
                       Featured
                     </div>
                  )}
                </div>
                
                {/* Content */}
                <div className="flex-grow">
                  <h3 className="text-2xl font-serif font-bold text-slate-100 mb-4 group-hover:text-emerald-300 transition-colors duration-300 leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed font-light mb-8 line-clamp-3">
                    {post.preview}
                  </p>
                </div>
                
                {/* Footer Data */}
                <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between text-xs text-slate-500 font-medium">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-slate-600" />
                      {post.readTime}
                    </div>
                    <div className="flex items-center gap-1.5 hidden sm:flex">
                      <TrendingUp className="w-4 h-4 text-slate-600" />
                      {post.updated}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-emerald-400 group-hover:text-emerald-300 transition-colors">
                    <span className="uppercase tracking-wider font-bold text-[10px]">Read</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {posts.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-24 border border-white/5 rounded-3xl bg-slate-900/30 backdrop-blur-sm"
        >
          <div className="text-slate-400 text-xl font-light">
            No intel available for this category yet.
          </div>
        </motion.div>
      )}
    </div>
  );
}

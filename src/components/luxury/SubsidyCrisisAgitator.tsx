'use strict'
// Bradford Informed Guidance | SubsidyCrisisAgitator | v1.0

import { motion, Variants } from 'framer-motion';
import { Link } from 'react-router-dom';

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: 'easeOut' } 
  },
};

export default function SubsidyCrisisAgitator() {
  return (
    <section className="py-24 bg-slate-900 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif font-bold text-white mb-4">
            The 2026 Subsidy Cliff Is Real. Here's What's Coming.
          </h2>
          <p className="text-slate-400 font-light max-w-2xl mx-auto text-center">
            Enhanced premium tax credits expire December 31, 2025. For millions of Americans, that means premiums double overnight — unless you act now.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {/* Card 1 */}
          <motion.div 
            variants={cardVariants}
            className="bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl rounded-2xl p-8 flex flex-col justify-between"
          >
            <div>
              <div className="text-amber-400 font-black text-5xl mb-4">$4,800+</div>
              <p className="text-white mb-6">
                Average annual premium increase for families losing enhanced subsidies
              </p>
            </div>
            <div className="text-slate-500 text-xs mt-auto">
              Source: <a href="https://www.kff.org" target="_blank" rel="noopener noreferrer" className="hover:text-slate-400 transition-colors">KFF.org</a>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            variants={cardVariants}
            className="bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl rounded-2xl p-8 flex flex-col justify-between"
          >
            <div>
              <div className="text-amber-400 font-black text-5xl mb-4">3.4M</div>
              <p className="text-white mb-6">
                Americans in Florida alone who will face premium shock in 2026
              </p>
            </div>
            <div className="text-slate-500 text-xs mt-auto">
              Source: <a href="https://www.cms.gov" target="_blank" rel="noopener noreferrer" className="hover:text-slate-400 transition-colors">CMS.gov</a>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            variants={cardVariants}
            className="bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl rounded-2xl p-8 flex flex-col justify-between"
          >
            <div>
              <div className="text-emerald-400 font-black text-5xl mb-4">60 Days</div>
              <p className="text-white mb-6">
                Special Enrollment window to lock in coverage before the cliff hits
              </p>
            </div>
            <div className="text-slate-500 text-xs mt-auto">
              Source: <a href="https://www.healthcare.gov" target="_blank" rel="noopener noreferrer" className="hover:text-slate-400 transition-colors">Healthcare.gov</a>
            </div>
          </motion.div>
        </motion.div>

        <div className="mt-12 text-center">
          <Link 
            to="/health-insurance" 
            className="inline-flex items-center text-emerald-400 hover:text-emerald-300 text-sm transition-colors"
          >
            Learn how to protect your coverage &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
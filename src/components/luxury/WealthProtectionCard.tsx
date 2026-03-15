'use strict'
// Bradford Informed Guidance | WealthProtectionCard | v1.0

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowDownRight } from 'lucide-react';

const cardVariants = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.7, ease: 'easeOut' }
  },
};

export default function WealthProtectionCard() {
  return (
    <section className="py-20 bg-slate-950 border-t border-white/5 px-4 sm:px-6 lg:px-8">
      <motion.div 
        className="max-w-4xl mx-auto bg-white/5 backdrop-blur-xl border border-amber-500/20 shadow-2xl rounded-3xl p-10 md:p-16"
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Copy */}
          <div>
            <div className="inline-block bg-amber-500/10 text-amber-400 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-amber-500/20 mb-6">
              Premium Strategy
            </div>
            
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
              We Found Your Savings. Now Let's Make Them Work.
            </h2>
            
            <p className="text-slate-300 font-light leading-relaxed mb-8">
              Most clients save $200–$400/month when we optimize their health plan.
              Instead of letting that money vanish, Zach helps redirect it into an
              Indexed Universal Life policy — building tax-free retirement income
              while locking in your insurability today.
            </p>

            <ul className="space-y-4 mb-10">
              <li className="flex items-start">
                <ShieldCheck color="#F59E0B" strokeWidth={1.5} className="flex-shrink-0 mr-3 mt-1 w-5 h-5" />
                <span className="text-slate-300">Tax-free cash value growth linked to market index</span>
              </li>
              <li className="flex items-start">
                <ShieldCheck color="#F59E0B" strokeWidth={1.5} className="flex-shrink-0 mr-3 mt-1 w-5 h-5" />
                <span className="text-slate-300">Living benefits — pays out on critical illness diagnosis</span>
              </li>
              <li className="flex items-start">
                <ShieldCheck color="#F59E0B" strokeWidth={1.5} className="flex-shrink-0 mr-3 mt-1 w-5 h-5" />
                <span className="text-slate-300">Retirement income that supplements Medicare</span>
              </li>
            </ul>

            <Link 
              to="/life-insurance" 
              className="inline-block bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-8 py-4 rounded-xl shadow-[0_0_30px_-5px_rgba(245,158,11,0.4)] hover:scale-105 transition-all text-sm uppercase tracking-wide"
            >
              Explore Wealth Protection Options &rarr;
            </Link>
          </div>

          {/* Right Column: Visual Stat Block */}
          <div className="hidden md:flex flex-col justify-center items-center text-center h-full">
            <div className="text-6xl font-black text-amber-400 mb-2">$300/mo</div>
            <div className="text-slate-400 text-sm mb-6">saved on health premiums</div>
            
            <ArrowDownRight size={48} strokeWidth={1.5} className="text-amber-500/50 mb-6" />
            
            <div className="text-emerald-400 font-bold text-xl mb-12">
              = $3,600/yr into your IUL
            </div>
            
            <div className="text-slate-500 text-xs mt-auto">
              Illustrative example. Individual results vary.
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
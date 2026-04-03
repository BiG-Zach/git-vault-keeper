import React from 'react';
import { motion } from 'framer-motion';
import { PhoneOff, Clock, CreditCard, ShieldCheck } from 'lucide-react';

export default function RiskReversalSection() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#64748b 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 text-white text-xs font-bold uppercase tracking-widest mb-6 shadow-lg">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            The Concierge Protocol
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
            We Set The Standard. <br />
            <span className="text-emerald-600">Others Just Follow.</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Most brokers hand you off to a call center. We handle you with care.
            Here is our promise to every family we serve.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-auto lg:h-[500px]">
          
          {/* Card 1: No Call Centers (Hero) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1 bg-white rounded-3xl p-8 border border-slate-200 shadow-xl flex flex-col justify-between overflow-hidden relative group hover:shadow-2xl transition-all duration-500"
          >
            <div className="absolute top-0 right-0 p-32 bg-rose-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2 group-hover:bg-rose-100 transition-colors duration-500" />
            
            <div className="relative z-10">
              <div className="w-12 h-12 bg-rose-100 rounded-2xl flex items-center justify-center mb-6 text-rose-600">
                <PhoneOff className="w-6 h-6" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">Zero <br />Call Centers.</h3>
              <p className="text-slate-500 leading-relaxed">
                You will never speak to a robot or a scripted agent. You get direct access to a licensed professional who knows your name, your family, and your policy.
              </p>
            </div>
            
            <div className="mt-8 pt-8 border-t border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Direct Line Access</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column Stack */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            
            {/* Card 2: Speed (Horizontal) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex-1 bg-slate-900 rounded-3xl p-8 shadow-xl relative overflow-hidden group flex flex-col md:flex-row items-center gap-8"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="flex-1 relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-emerald-400" />
                  <span className="text-emerald-400 font-bold uppercase tracking-wider text-xs">Speed Guarantee</span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">45-Minute Quotes.</h3>
                <p className="text-slate-400">
                  We don't make you wait. Get a full market analysis in under an hour.
                </p>
              </div>

              {/* Visual Timeline Animation */}
              <div className="w-full md:w-1/3 bg-white/10 rounded-xl h-2 relative overflow-hidden">
                <div className="absolute inset-y-0 left-0 bg-emerald-500 w-3/4 animate-pulse rounded-full" />
              </div>
            </motion.div>

            {/* Card 3: Cost (Horizontal) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex-1 bg-white rounded-3xl p-8 border border-slate-200 shadow-xl relative overflow-hidden group flex flex-col md:flex-row items-center gap-8"
            >
              <div className="absolute top-0 left-0 p-32 bg-blue-50 rounded-full blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2 group-hover:bg-blue-100 transition-colors duration-500" />
              
              <div className="flex-1 relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <CreditCard className="w-6 h-6 text-blue-600" />
                  <span className="text-blue-600 font-bold uppercase tracking-wider text-xs">Zero Client Fees</span>
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-2">100% Free Service.</h3>
                <p className="text-slate-500">
                  We are compensated directly by the carriers. You pay exactly the same rate as going direct—but you get us in your corner for free.
                </p>
              </div>
              
              <div className="text-5xl font-bold text-slate-200 group-hover:text-blue-100 transition-colors duration-500">
                $0
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}
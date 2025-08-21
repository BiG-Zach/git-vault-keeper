import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Star, TrendingUp, Shield } from 'lucide-react';

const PremiumCarriers = () => {
  const prefersReducedMotion = useReducedMotion();

  const carriers = [
    { src: "/logos/carriers/aetna.webp", alt: "Aetna", rating: "A+", partnership: "Premier Partner since 2019" },
    { src: "/logos/carriers/cigna.webp", alt: "Cigna", rating: "A+", partnership: "Strategic Alliance" },
    { src: "/logos/carriers/americo.webp", alt: "Americo", rating: "A", partnership: "Preferred Partner" },
    { src: "/logos/carriers/multiplan.webp", alt: "MultiPlan", rating: "A+", partnership: "Network Provider" },
    { src: "/logos/carriers/allstate.webp", alt: "Allstate", rating: "A+", partnership: "Elite Partner" },
    { src: "/logos/carriers/unitedhealthcare.webp", alt: "UnitedHealthcare", rating: "A+", partnership: "Premier Network" },
    { src: "/logos/carriers/firsthealth.webp", alt: "First Health", rating: "A", partnership: "PPO Alliance" },
    { src: "/logos/carriers/bluecrossblueshield.png", alt: "Blue Cross Blue Shield", rating: "A+", partnership: "National Partner" },
    { src: "/logos/carriers/sgic.webp", alt: "SGIC", rating: "A", partnership: "Regional Partner" },
    { src: "/logos/carriers/mutualofomaha.webp", alt: "Mutual of Omaha", rating: "A+", partnership: "Life Insurance Partner" },
    { src: "/logos/carriers/pal.webp", alt: "Philadelphia American Life", rating: "A", partnership: "Specialty Provider" },
    { src: "/logos/carriers/aflac.webp", alt: "Aflac", rating: "A+", partnership: "Supplemental Partner" }
  ];

  const stats = [
    { number: "12", label: "A+ Rated Carriers", icon: Star },
    { number: "98%", label: "Customer Satisfaction", icon: TrendingUp },
    { number: "$2.5B", label: "Coverage Written", icon: Shield }
  ];

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-accent)_1px,_transparent_1px)] bg-[length:24px_24px]" />
      </div>

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12 lg:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 text-sm font-medium mb-4">
            <Shield className="w-4 h-4" />
            <span>Premium Partner Network</span>
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-4 font-luxury-serif">
            Trusted by <span className="gradient-text-luxury">Leading Carriers</span>
          </h2>
          
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            We partner exclusively with A+ rated insurance carriers to ensure your coverage is backed by financial strength and stability.
          </p>
        </motion.div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 lg:mb-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-white rounded-2xl p-6 shadow-premium border border-slate-200 hover:shadow-luxury transition-shadow duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-xl mb-4">
                  <stat.icon className="w-6 h-6 text-emerald-600" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-slate-900 gradient-text-luxury mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Carriers Grid */}
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6"
        >
          {carriers.map((carrier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative"
            >
              <div className="bg-white rounded-2xl p-6 lg:p-8 border border-slate-200 hover:border-emerald-300 hover:shadow-premium transition-all duration-300 h-full flex flex-col items-center justify-center group-hover:scale-105">
                {/* Rating Badge */}
                <div className="absolute top-3 right-3 bg-emerald-100 text-emerald-800 text-xs font-bold px-2 py-1 rounded-full">
                  A (Excellent) AM Best Rated
                </div>
                
                {/* Logo */}
                <div className="w-full max-w-[120px] h-12 lg:h-16 flex items-center justify-center mb-4">
                  <img
                    src={carrier.src}
                    alt={carrier.alt}
                    className="max-w-full max-h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                    loading="lazy"
                  />
                </div>
                
                {/* Partnership info - shows on hover on desktop */}
                <div className="absolute inset-x-0 bottom-0 bg-slate-900 text-white p-3 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-full group-hover:translate-y-0 hidden lg:block">
                  <p className="text-xs font-medium text-center">{carrier.partnership}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Awards & Certifications */}
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="mt-12 lg:mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-slate-50 to-emerald-50 rounded-2xl p-8 lg:p-12 border border-slate-200">
            <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-6">Industry Recognition</h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 items-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-3 shadow-sm">
                  <span className="text-2xl font-bold text-emerald-600">A+</span>
                </div>
                <p className="text-sm font-medium text-slate-700">BBB Rating</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-3 shadow-sm">
                  <Star className="w-8 h-8 text-yellow-500" />
                </div>
                <p className="text-sm font-medium text-slate-700">5-Star Service</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-3 shadow-sm">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <p className="text-sm font-medium text-slate-700">Licensed Professional</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-3 shadow-sm">
                  <TrendingUp className="w-8 h-8 text-emerald-600" />
                </div>
                <p className="text-sm font-medium text-slate-700">Industry Leader</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PremiumCarriers;
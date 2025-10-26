import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Star, TrendingUp, Shield } from 'lucide-react';
import CitationLinks from '../CitationLinks';

const PremiumCarriers = () => {
  const prefersReducedMotion = useReducedMotion();

  const carriers = [
    { src: "/logos/carriers/unitedhealthcare.webp", alt: "UnitedHealthcare", rating: "A+ (Superior)", partnership: "Premier Network", citation: "[8][9][10][11]" },
    { src: "/logos/carriers/mutualofomaha.webp", alt: "Mutual of Omaha", rating: "A+ (Superior)", partnership: "#1 J.D. Power 2025", citation: "[16][17][19][20]", badge: "TOP RATED" },
    { src: "/logos/carriers/aflac.webp", alt: "Aflac", rating: "A+ (Superior)", partnership: "Supplemental Leader", citation: "[21][22][23][24]" },
    { src: "/logos/carriers/bluecrossblueshield.png", alt: "Blue Cross Blue Shield", rating: "A+ (Superior)", partnership: "National Partner", citation: "[13][14][15]" },
    { src: "/logos/carriers/allstate.webp", alt: "Allstate Health", rating: "A+ (Superior)", partnership: "Elite Partner", citation: "[41][42][43]" },
    { src: "/logos/carriers/aetna.webp", alt: "Aetna", rating: "A (Excellent)", partnership: "Premier Partner", citation: "[1][3][4]" },
    { src: "/logos/carriers/cigna.webp", alt: "Cigna", rating: "A (Excellent)", partnership: "Strategic Alliance", citation: "[5][6][7]" },
    { src: "/logos/carriers/medical-mutual.webp", alt: "Medical Mutual", rating: "A (Excellent)", partnership: "4.5 Star Medicare", citation: "[35][36][37]", badge: "NEW" },
    { src: "/logos/carriers/americo.webp", alt: "Americo", rating: "A (Excellent)", partnership: "Preferred Partner", citation: "[25][26][27][28]" },
    { src: "/logos/carriers/illinois-mutual.webp", alt: "Illinois Mutual", rating: "A- (Excellent)", partnership: "Upgraded Oct 2025", citation: "[29][30][31][32]", badge: "NEW" },
    { src: "/logos/carriers/pal.webp", alt: "Philadelphia American Life", rating: "A- (Excellent)", partnership: "Specialty Provider", citation: "[33][34]" },
    { src: "/logos/carriers/sgic.webp", alt: "SGIC", rating: "B++ (Good)", partnership: "Regional Partner", citation: "[38][39][40]" },
    { src: "/logos/carriers/multiplan.webp", alt: "MultiPlan PPO", rating: "PPO Network", partnership: "1.4M+ Providers", citation: "[46][47][48]", isNetwork: true },
    { src: "/logos/carriers/firsthealth.webp", alt: "First Health PPO", rating: "PPO Network", partnership: "1M+ Providers", citation: "[44][45]", isNetwork: true }
  ];

  const stats = [
    { number: "10", label: "A to A+ Rated Carriers & 6 PPO Networks", icon: Star, citation: "[1][5][8][16][21][29][35]" },
    { number: "98%", label: "Client Satisfaction Rate", icon: TrendingUp },
    { number: "$2.5B", label: "Coverage Written", icon: Shield }
  ];

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Visual Masterpiece Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Gradient Orbs */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-emerald-400/20 via-sky-300/15 to-transparent rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-br from-blue-400/15 via-emerald-300/20 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-3/4 w-64 h-64 bg-gradient-to-br from-cyan-300/10 via-emerald-400/15 to-transparent rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        {/* Premium Light Rays */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-emerald-200/40 to-transparent transform -rotate-12" />
          <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-sky-200/30 to-transparent transform rotate-12" />
          <div className="absolute top-0 left-2/3 w-px h-full bg-gradient-to-b from-transparent via-cyan-200/25 to-transparent transform -rotate-6" />
        </div>

        {/* Floating Geometric Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/6 left-1/6 w-4 h-4 border border-emerald-300/50 rotate-45 animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '3s' }} />
          <div className="absolute top-2/3 right-1/5 w-6 h-6 border border-sky-300/40 rounded-full animate-ping" style={{ animationDelay: '1.5s', animationDuration: '4s' }} />
          <div className="absolute bottom-1/4 left-1/2 w-3 h-3 bg-cyan-300/30 rounded-full animate-pulse" style={{ animationDelay: '2.5s' }} />
          <div className="absolute top-1/3 right-1/3 w-5 h-5 border-2 border-emerald-400/30 transform rotate-45 animate-spin" style={{ animationDuration: '8s' }} />
        </div>

        {/* Luxury Texture Pattern */}
        <div className="absolute inset-0 opacity-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,_hsl(var(--emerald-300))_1px,_transparent_1px)] bg-[length:48px_48px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,_hsl(var(--sky-300))_0.5px,_transparent_0.5px)] bg-[length:32px_32px]" style={{ transform: 'rotate(45deg)' }} />
        </div>

        {/* Connected Particle Network */}
        <svg className="absolute inset-0 w-full h-full opacity-15" preserveAspectRatio="none">
          <defs>
            <linearGradient id="networkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--emerald-400))" stopOpacity="0.3" />
              <stop offset="50%" stopColor="hsl(var(--sky-400))" stopOpacity="0.2" />
              <stop offset="100%" stopColor="hsl(var(--cyan-400))" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <line x1="10%" y1="20%" x2="30%" y2="35%" stroke="url(#networkGradient)" strokeWidth="0.5" opacity="0.6" />
          <line x1="30%" y1="35%" x2="60%" y2="25%" stroke="url(#networkGradient)" strokeWidth="0.5" opacity="0.4" />
          <line x1="60%" y1="25%" x2="85%" y2="45%" stroke="url(#networkGradient)" strokeWidth="0.5" opacity="0.5" />
          <line x1="20%" y1="70%" x2="45%" y2="80%" stroke="url(#networkGradient)" strokeWidth="0.5" opacity="0.3" />
          <line x1="45%" y1="80%" x2="80%" y2="70%" stroke="url(#networkGradient)" strokeWidth="0.5" opacity="0.4" />
          <circle cx="10%" cy="20%" r="2" fill="hsl(var(--emerald-400))" opacity="0.6" />
          <circle cx="30%" cy="35%" r="1.5" fill="hsl(var(--sky-400))" opacity="0.5" />
          <circle cx="60%" cy="25%" r="2.5" fill="hsl(var(--cyan-400))" opacity="0.4" />
          <circle cx="85%" cy="45%" r="1.5" fill="hsl(var(--emerald-400))" opacity="0.5" />
          <circle cx="20%" cy="70%" r="2" fill="hsl(var(--sky-400))" opacity="0.3" />
          <circle cx="45%" cy="80%" r="1.5" fill="hsl(var(--cyan-400))" opacity="0.4" />
          <circle cx="80%" cy="70%" r="2" fill="hsl(var(--emerald-400))" opacity="0.5" />
        </svg>

        {/* Premium Shimmer Effect */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 animate-pulse" style={{ animationDuration: '6s' }} />
        </div>
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
            Trusted by <span className="gradient-text-luxury">A to A+ Rated Insurance Giants</span>
          </h2>
          
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            I partner with top-rated insurance carriers rated A- to A+ by AM Best<CitationLinks citations="[1][5][8][16][21][29][35]" /> and access to 6 major PPO networks<CitationLinks citations="[44][47]" />. Your coverage is backed by billions in reserves and guaranteed claim-paying ability.
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
                {stat.citation && (
                  <div className="mt-2 text-xs">
                    <CitationLinks citations={stat.citation} />
                  </div>
                )}
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
                
                {/* Badge for new carriers */}
                {carrier.badge && (
                  <div className="absolute -top-2 -right-2 z-10">
                    <span className={carrier.badge === 'NEW' ? 'new-badge' : 'inline-block bg-yellow-500 text-slate-900 px-2 py-1 rounded text-xs font-bold'}>
                      {carrier.badge}
                    </span>
                  </div>
                )}
                
                {/* Logo */}
                <div className="w-full max-w-[120px] h-12 lg:h-16 flex items-center justify-center mb-4">
                  <img
                    src={carrier.src}
                    alt={carrier.alt}
                    className="max-w-full max-h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                    loading="lazy"
                  />
                </div>
                
                {/* Rating Badge */}
                {carrier.rating && (
                  <div className="mb-2">
                    <span className={`rating-badge ${
                      carrier.rating.includes('A+') ? 'a-plus' :
                      carrier.rating.includes('A (') ? 'a' :
                      carrier.rating.includes('A-') ? 'a-minus' :
                      carrier.rating.includes('B++') ? 'b-plus' :
                      'bg-slate-200 text-slate-700'
                    }`}>
                      {carrier.rating}
                    </span>
                  </div>
                )}
                
                {/* Partnership info - shows on hover on desktop */}
                <div className="absolute inset-x-0 bottom-0 bg-slate-900 text-white p-3 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-full group-hover:translate-y-0 hidden lg:block">
                  <p className="text-xs font-medium text-center">{carrier.partnership}</p>
                  {carrier.citation && (
                   <p className="text-xs text-center mt-1">
                     <CitationLinks citations={carrier.citation} className="text-blue-300" />
                   </p>
                 )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Updated Disclaimer with Citations */}
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          className="text-center mt-8"
        >
          <p className="text-sm text-slate-500 font-medium">
            Partner with 10 insurance carriers rated A- to A+ by AM Best<CitationLinks citations="[1][5][8][16][21][29][35]" /> and access to 6 major PPO networks<CitationLinks citations="[44][47]" />
          </p>
          <p className="text-xs text-slate-400 mt-2">
            Combined assets exceeding $500 billion<CitationLinks citations="[3][6][10][14][22]" /> • Includes #1 ranked carrier in J.D. Power 2025 study<CitationLinks citations="[20]" />
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default PremiumCarriers;
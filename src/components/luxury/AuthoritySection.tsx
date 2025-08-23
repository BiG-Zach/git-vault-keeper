import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Award, Users, TrendingUp, Calendar, MapPin, Phone } from 'lucide-react';
import { BRAND } from '../../lib/brand';

const AuthoritySection = () => {
  const prefersReducedMotion = useReducedMotion();

  const achievements = [
    {
      icon: Award,
      number: "15+",
      label: "Years Experience",
      description: "Industry expertise since 2008"
    },
    {
      icon: Users,
      number: "5,000+",
      label: "Families Served",
      description: "Trusted by thousands nationwide"
    },
    {
      icon: TrendingUp,
      number: "$2.5B",
      label: "Coverage Written",
      description: "Protecting families' financial futures"
    },
    {
      icon: Calendar,
      number: "365",
      label: "Days Support",
      description: "Year-round expert guidance"
    }
  ];

  const certifications = [
    { name: "Licensed Insurance Agent", code: `NPN ${BRAND.npn}` },
    { name: "Health Insurance Specialist", code: "Certified 2023" },
    { name: "Life Insurance Expert", code: "Advanced Certification" },
    { name: "Customer Service Excellence", code: "5-Star Rating" }
  ];

  const awards = [
    "BBB A+ Rating",
    "Top Insurance Partner 2023",
    "Customer Choice Award",
    "Excellence in Service"
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Luxury background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,rgba(34,197,94,0.1)_0%,transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,rgba(59,130,246,0.1)_0%,transparent_50%)]" />
        {/* Visual Masterpiece Background */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full overflow-hidden">
          {/* Animated Gradient Orbs */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-emerald-400/20 via-cyan-300/15 to-transparent rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-br from-blue-400/15 via-emerald-300/20 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
            <div className="absolute top-2/3 left-3/5 w-64 h-64 bg-gradient-to-br from-cyan-300/10 via-blue-400/15 to-transparent rounded-full blur-2xl animate-pulse" style={{ animationDelay: '4s' }} />
          </div>

          {/* Dynamic Light Rays */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-1/5 w-px h-full bg-gradient-to-b from-transparent via-emerald-300/50 to-transparent transform -rotate-15 animate-pulse" style={{ animationDuration: '5s' }} />
            <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-cyan-300/40 to-transparent transform rotate-15 animate-pulse" style={{ animationDelay: '1.5s', animationDuration: '6s' }} />
            <div className="absolute top-0 left-2/3 w-px h-full bg-gradient-to-b from-transparent via-blue-300/35 to-transparent transform -rotate-8 animate-pulse" style={{ animationDelay: '3s', animationDuration: '7s' }} />
          </div>

          {/* Floating Geometric Elements */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/6 left-1/6 w-4 h-4 border-2 border-emerald-400/60 rotate-45 animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }} />
            <div className="absolute top-1/2 right-1/6 w-5 h-5 border border-cyan-400/50 rounded-full animate-ping" style={{ animationDelay: '2s', animationDuration: '5s' }} />
            <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-blue-400/40 rounded-full animate-pulse" style={{ animationDelay: '3s' }} />
            <div className="absolute top-1/4 right-1/3 w-6 h-6 border-2 border-emerald-500/40 transform rotate-45 animate-spin" style={{ animationDuration: '15s' }} />
            <div className="absolute bottom-1/6 right-1/5 w-3 h-3 bg-gradient-to-br from-cyan-400/30 to-blue-400/20 rounded-full animate-ping" style={{ animationDelay: '4s', animationDuration: '6s' }} />
            <div className="absolute top-3/4 left-1/5 w-4 h-4 border border-emerald-300/40 rounded-full animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '3.5s' }} />
          </div>

          {/* Premium Dot Matrix Pattern */}
          <div className="absolute inset-0 opacity-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,_rgba(16,185,129,0.3)_1px,_transparent_1px)] bg-[length:45px_45px]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,_rgba(34,211,238,0.2)_0.8px,_transparent_0.8px)] bg-[length:35px_35px]" style={{ transform: 'rotate(30deg)' }} />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_20%,_rgba(59,130,246,0.15)_0.6px,_transparent_0.6px)] bg-[length:50px_50px]" style={{ transform: 'rotate(-20deg)' }} />
          </div>

          {/* Advanced Network Connections */}
          <svg className="absolute inset-0 w-full h-full opacity-15" preserveAspectRatio="none">
            <defs>
              <linearGradient id="authorityNetworkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(16,185,129,0.4)" />
                <stop offset="50%" stopColor="rgba(34,211,238,0.3)" />
                <stop offset="100%" stopColor="rgba(59,130,246,0.2)" />
              </linearGradient>
              <filter id="authorityGlow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge> 
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            <line x1="12%" y1="20%" x2="38%" y2="35%" stroke="url(#authorityNetworkGradient)" strokeWidth="1" filter="url(#authorityGlow)" />
            <line x1="38%" y1="35%" x2="70%" y2="25%" stroke="url(#authorityNetworkGradient)" strokeWidth="0.8" filter="url(#authorityGlow)" />
            <line x1="70%" y1="25%" x2="88%" y2="45%" stroke="url(#authorityNetworkGradient)" strokeWidth="0.9" filter="url(#authorityGlow)" />
            <line x1="22%" y1="70%" x2="55%" y2="80%" stroke="url(#authorityNetworkGradient)" strokeWidth="0.7" filter="url(#authorityGlow)" />
            <line x1="55%" y1="80%" x2="85%" y2="70%" stroke="url(#authorityNetworkGradient)" strokeWidth="0.8" filter="url(#authorityGlow)" />
            <line x1="15%" y1="50%" x2="45%" y2="60%" stroke="url(#authorityNetworkGradient)" strokeWidth="0.6" filter="url(#authorityGlow)" />
            <circle cx="12%" cy="20%" r="3" fill="rgba(16,185,129,0.6)" filter="url(#authorityGlow)" />
            <circle cx="38%" cy="35%" r="2.5" fill="rgba(34,211,238,0.5)" filter="url(#authorityGlow)" />
            <circle cx="70%" cy="25%" r="3.5" fill="rgba(59,130,246,0.4)" filter="url(#authorityGlow)" />
            <circle cx="88%" cy="45%" r="2.5" fill="rgba(16,185,129,0.5)" filter="url(#authorityGlow)" />
            <circle cx="22%" cy="70%" r="3" fill="rgba(34,211,238,0.4)" filter="url(#authorityGlow)" />
            <circle cx="55%" cy="80%" r="2" fill="rgba(59,130,246,0.5)" filter="url(#authorityGlow)" />
            <circle cx="85%" cy="70%" r="3" fill="rgba(16,185,129,0.5)" filter="url(#authorityGlow)" />
            <circle cx="15%" cy="50%" r="2.5" fill="rgba(34,211,238,0.4)" filter="url(#authorityGlow)" />
            <circle cx="45%" cy="60%" r="2" fill="rgba(59,130,246,0.3)" filter="url(#authorityGlow)" />
          </svg>

          {/* Luxury Shimmer Effects */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent transform -skew-x-12 animate-pulse" style={{ animationDuration: '10s' }} />
          </div>
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-sm font-medium mb-6">
            <Award className="w-4 h-4" />
            <span>Industry Leadership</span>
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 font-luxury-serif">
            Why <span className="gradient-text-luxury">Bradford</span> Leads
          </h2>
          
          <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            With over 15 years of experience and thousands of satisfied families, Bradford has established itself as the trusted leader in health and life insurance guidance.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left: Professional Photo & Bio */}
          <motion.div
            initial={{ opacity: 0, x: prefersReducedMotion ? 0 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <div className="relative inline-block mb-8">
              {/* Professional photo placeholder - replace with actual photo */}
              <div className="w-64 h-80 lg:w-72 lg:h-96 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl border border-white/20 flex items-center justify-center group hover:border-emerald-500/30 transition-all duration-500">
                <div className="text-center text-slate-300">
                  <Users className="w-16 h-16 mx-auto mb-4 text-emerald-400" />
                  <p className="font-semibold text-white">Professional Photo</p>
                  <p className="text-sm">Coming Soon</p>
                </div>
              </div>
              
              {/* Floating certifications */}
              <div className="absolute -right-4 top-8 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hidden lg:block">
                <div className="text-center">
                  <Award className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
                  <div className="text-xs font-semibold text-white">Licensed</div>
                  <div className="text-xs text-slate-300">NPN {BRAND.npn}</div>
                </div>
              </div>
              
              <div className="absolute -left-4 bottom-8 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hidden lg:block">
                <div className="text-center">
                  <TrendingUp className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
                  <div className="text-xs font-semibold text-white">15+ Years</div>
                  <div className="text-xs text-slate-300">Experience</div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 font-luxury-serif">
              Meet Bradford's Leadership Team
            </h3>
            
            <p className="text-slate-300 leading-relaxed mb-6">
              Our team of licensed professionals brings decades of combined experience in health and life insurance. 
              We've helped thousands of families navigate the complex world of insurance, always putting their needs first.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm text-slate-300">
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span>Licensed in {BRAND.licensed}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-300">
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Available {BRAND.hours}</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Achievements & Credentials */}
          <motion.div
            initial={{ opacity: 0, x: prefersReducedMotion ? 0 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Achievement Stats */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-emerald-500/30 hover:bg-white/10 transition-all duration-500 group"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    <achievement.icon className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div className="text-2xl lg:text-3xl font-bold text-white mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-sm font-semibold text-slate-200 mb-1">
                    {achievement.label}
                  </div>
                  <div className="text-xs text-slate-400">
                    {achievement.description}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Certifications */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 lg:p-8 border border-white/10 hover:border-emerald-500/30 transition-all duration-500">
              <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Award className="w-5 h-5 text-emerald-400" />
                Professional Certifications
              </h4>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center justify-between py-2 border-b border-white/10 last:border-0">
                    <span className="font-medium text-slate-200">{cert.name}</span>
                    <span className="text-sm text-slate-300 bg-white/10 px-3 py-1 rounded-full">
                      {cert.code}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Awards */}
            <div className="bg-gradient-to-br from-emerald-500/10 to-blue-500/10 backdrop-blur-md rounded-2xl p-6 lg:p-8 border border-white/10 hover:border-emerald-500/30 transition-all duration-500">
              <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-emerald-400" />
                Industry Recognition
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {awards.map((award, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-slate-300">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                    <span>{award}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default AuthoritySection;
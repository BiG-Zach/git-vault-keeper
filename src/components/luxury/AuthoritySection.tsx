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
    <section className="py-16 lg:py-24 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-primary)_1px,_transparent_1px)] bg-[length:32px_32px]" />
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6">
            <Award className="w-4 h-4" />
            <span>Industry Leadership</span>
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6 font-luxury-serif">
            Why <span className="gradient-text-luxury">Bradford</span> Leads
          </h2>
          
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
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
              <div className="w-64 h-80 lg:w-72 lg:h-96 bg-gradient-to-br from-slate-200 to-slate-300 rounded-2xl shadow-luxury border border-slate-200 flex items-center justify-center">
                <div className="text-center text-slate-600">
                  <Users className="w-16 h-16 mx-auto mb-4" />
                  <p className="font-semibold">Professional Photo</p>
                  <p className="text-sm">Coming Soon</p>
                </div>
              </div>
              
              {/* Floating certifications */}
              <div className="absolute -right-4 top-8 bg-white rounded-xl p-4 shadow-premium border border-slate-200 hidden lg:block">
                <div className="text-center">
                  <Award className="w-6 h-6 text-emerald-600 mx-auto mb-2" />
                  <div className="text-xs font-semibold text-slate-900">Licensed</div>
                  <div className="text-xs text-slate-600">NPN {BRAND.npn}</div>
                </div>
              </div>
              
              <div className="absolute -left-4 bottom-8 bg-white rounded-xl p-4 shadow-premium border border-slate-200 hidden lg:block">
                <div className="text-center">
                  <TrendingUp className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                  <div className="text-xs font-semibold text-slate-900">15+ Years</div>
                  <div className="text-xs text-slate-600">Experience</div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4 font-luxury-serif">
              Meet Bradford's Leadership Team
            </h3>
            
            <p className="text-slate-600 leading-relaxed mb-6">
              Our team of licensed professionals brings decades of combined experience in health and life insurance. 
              We've helped thousands of families navigate the complex world of insurance, always putting their needs first.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm text-slate-600">
                <MapPin className="w-4 h-4 text-emerald-600" />
                <span>Licensed in {BRAND.licensed}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-600">
                <Phone className="w-4 h-4 text-emerald-600" />
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
                  className="bg-white rounded-xl p-6 shadow-premium border border-slate-200 hover:shadow-luxury transition-shadow duration-300"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-xl mb-4">
                    <achievement.icon className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div className="text-2xl lg:text-3xl font-bold text-slate-900 gradient-text-luxury mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-sm font-semibold text-slate-700 mb-1">
                    {achievement.label}
                  </div>
                  <div className="text-xs text-slate-500">
                    {achievement.description}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Certifications */}
            <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 lg:p-8 border border-slate-200">
              <h4 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Award className="w-5 h-5 text-emerald-600" />
                Professional Certifications
              </h4>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center justify-between py-2 border-b border-slate-200 last:border-0">
                    <span className="font-medium text-slate-700">{cert.name}</span>
                    <span className="text-sm text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                      {cert.code}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Awards */}
            <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl p-6 lg:p-8 border border-slate-200">
              <h4 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-blue-600" />
                Industry Recognition
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {awards.map((award, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-slate-700">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full" />
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
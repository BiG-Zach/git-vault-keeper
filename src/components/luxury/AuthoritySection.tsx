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





        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-6 relative z-10">

      </div>
    </section>
  );
};

export default AuthoritySection;
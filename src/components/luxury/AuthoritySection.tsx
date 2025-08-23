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


          {/* Premium Dot Matrix Pattern */}
          <div className="absolute inset-0 opacity-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,_rgba(16,185,129,0.3)_1px,_transparent_1px)] bg-[length:45px_45px]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,_rgba(34,211,238,0.2)_0.8px,_transparent_0.8px)] bg-[length:35px_35px]" style={{ transform: 'rotate(30deg)' }} />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_20%,_rgba(59,130,246,0.15)_0.6px,_transparent_0.6px)] bg-[length:50px_50px]" style={{ transform: 'rotate(-20deg)' }} />
          </div>


        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-6 relative z-10">

      </div>
    </section>
  );
};

export default AuthoritySection;
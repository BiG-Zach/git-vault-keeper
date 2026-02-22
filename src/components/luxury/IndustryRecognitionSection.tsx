import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, Zap, TrendingUp, ShieldCheck, MapPin } from 'lucide-react';
import { BRAND } from '../../lib/brand';

// Simple CountUp Component
const CountUp = ({ end, duration = 2, prefix = "", suffix = "" }: { end: number; duration?: number; prefix?: string; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  useEffect(() => {
    if (!isInView) return;
    
    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / (duration * 1000), 1);
      
      // Easing function for smooth deceleration
      const easeOutQuart = 1 - Math.pow(1 - percentage, 4);
      
      setCount(Math.floor(easeOutQuart * end));

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, end, duration]);

  return <span ref={ref}>{prefix}{count.toLocaleString()}{suffix}</span>;
};

const recognitions = [
  { 
    icon: Star, 
    value: 98,
    staticValue: "98%", // Force static value to prevent 0% flash
    suffix: "%",
    label: "Client Satisfaction",
    desc: "Consistently rated 5-stars for service.",
    accent: "text-amber-400",
    border: "group-hover:border-amber-500/50"
  },
  { 
    icon: Zap, 
    value: 24,
    suffix: "hr",
    label: "Response Time",
    desc: "Guaranteed quotes within one day.",
    accent: "text-cyan-400",
    border: "group-hover:border-cyan-500/50"
  },
  { 
    icon: TrendingUp, 
    value: 2400,
    prefix: "$",
    label: "Avg. Annual Savings",
    desc: "Optimizing coverage for premium value.",
    accent: "text-emerald-400",
    border: "group-hover:border-emerald-500/50"
  },
  { 
    icon: MapPin, 
    value: 7,
    label: "Licensed States",
    desc: "FL • MI • NC • AZ • TX • GA • IN",
    accent: "text-rose-400",
    border: "group-hover:border-rose-500/50"
  },
  { 
    icon: ShieldCheck, 
    staticValue: "A+",
    label: "Carrier Access",
    desc: "Exclusive enterprise partnerships.",
    accent: "text-purple-400",
    border: "group-hover:border-purple-500/50"
  }
];

export default function IndustryRecognitionSection() {
  return (
    <section className="relative py-32 bg-slate-950 overflow-hidden">
      
      {/* Cinematic Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)]" />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 tracking-tight"
          >
            By The Numbers.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-400 max-w-2xl mx-auto font-light"
          >
            Results matter. Here is the measurable impact we deliver every day.
          </motion.p>
        </div>

        {/* The Power Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {recognitions.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-full"
            >
              <div className={`h-full p-8 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-xl transition-all duration-500 hover:bg-white/[0.04] hover:-translate-y-1 hover:shadow-2xl ${item.border}`}>
                
                {/* Icon */}
                <div className={`mb-6 opacity-50 group-hover:opacity-100 transition-opacity duration-300`}>
                  <item.icon className={`w-8 h-8 ${item.accent}`} strokeWidth={1.5} />
                </div>
                
                {/* Value */}
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tighter">
                  {item.staticValue ? (
                    <span>{item.staticValue}</span>
                  ) : (
                    <CountUp end={item.value || 0} prefix={item.prefix} suffix={item.suffix} />
                  )}
                </div>
                
                {/* Label */}
                <p className={`text-xs font-bold uppercase tracking-widest mb-4 ${item.accent} opacity-80`}>
                  {item.label}
                </p>
                
                <p className="text-sm text-slate-500 leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
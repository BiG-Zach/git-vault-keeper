import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, MapPin, ChevronLeft, ChevronRight, ShieldCheck } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Jenkins",
    location: "Austin, TX",
    role: "Freelance Designer",
    quote: "I honestly thought I was stuck with that expensive Marketplace plan forever. Zach looked at my situation and said 'No, we can do better.' He got me into a UnitedHealthcare PPO that actually covers my chiropractor. My premium dropped by $400 a month.",
    impact: "Saved $4,800/yr",
    carrier: "UnitedHealthcare",
    rating: 5,
    initials: "SJ",
    gradient: "from-pink-500 to-rose-500"
  },
  {
    name: "The Garcia Family",
    location: "Tampa, FL",
    role: "Business Owners",
    quote: "Our old plan had a $14,000 deductible. It was basically useless unless we had a catastrophe. Bradford switched us to a Cigna plan where we actually have $0 deductible for accidents. Finally feel like we can let the kids play sports without worrying.",
    impact: "Better Coverage",
    carrier: "Cigna PPO",
    rating: 5,
    initials: "TG",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    name: "James D.",
    location: "Phoenix, AZ",
    role: "Retired (58)",
    quote: "I retired early and lost my corporate benefits. I was terrified of being uninsured before 65. Every other broker just tried to sell me junk indemnity plans. Zach explained the difference and set me up with a real PPO network. The peace of mind is worth every penny.",
    impact: "Kept His Doctors",
    carrier: "Aetna",
    rating: 5,
    initials: "JD",
    gradient: "from-emerald-500 to-green-500"
  },
  {
    name: "Emily Roberts",
    location: "Charlotte, NC",
    role: "Consultant",
    quote: "I didn't even know medically underwritten plans existed. I'm healthy, so why was I paying for everyone else's sick care? The application was easy, and now my coverage travels with me when I visit clients in other states.",
    impact: "Nationwide Access",
    carrier: "Blue Cross Blue Shield",
    rating: 5,
    initials: "ER",
    gradient: "from-purple-500 to-indigo-500"
  }
];

export default function LuxuryTestimonialsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      
      {/* Editorial Background */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-emerald-50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-blue-50 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-emerald-700 text-xs font-bold uppercase tracking-widest mb-6 shadow-sm">
            <Star className="w-4 h-4 fill-emerald-500 text-emerald-500" />
            Client Success Stories
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
            Real Families. <br className="md:hidden" />
            <span className="text-emerald-600">Real Impact.</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            We don't just sell policies. We change financial futures. 
            Hear from the families we've protected across the country.
          </p>
        </div>

        {/* The Carousel */}
        <div className="relative max-w-7xl mx-auto">
          
          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -left-4 -translate-y-1/2 z-20 hidden md:block">
            <button 
              onClick={() => scroll('left')}
              className="p-3 rounded-full bg-white border border-slate-200 shadow-lg hover:bg-emerald-50 hover:text-emerald-600 transition-all duration-300 hover:scale-110"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          </div>
          <div className="absolute top-1/2 -right-4 -translate-y-1/2 z-20 hidden md:block">
            <button 
              onClick={() => scroll('right')}
              className="p-3 rounded-full bg-white border border-slate-200 shadow-lg hover:bg-emerald-50 hover:text-emerald-600 transition-all duration-300 hover:scale-110"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Scroll Container */}
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto gap-6 pb-12 snap-x snap-mandatory hide-scrollbar px-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((item, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 w-[85vw] md:w-[450px] snap-center"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="h-full bg-white rounded-3xl p-8 border border-slate-100 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col relative group"
                >
                  
                  {/* Quote Icon */}
                  <div className="absolute top-8 right-8 text-slate-100 group-hover:text-emerald-50 transition-colors duration-300">
                    <Quote className="w-12 h-12 rotate-180 fill-current" />
                  </div>

                  {/* Plan / Carrier Badge (Replaces Generic Verified) */}
                  <div className="inline-flex items-center gap-1.5 mb-6 text-[10px] font-bold text-slate-500 uppercase tracking-wider bg-slate-50 px-3 py-1 rounded-full w-fit border border-slate-100">
                    <ShieldCheck className="w-3 h-3 text-emerald-500" />
                    Plan: <span className="text-slate-900">{item.carrier}</span>
                  </div>

                  {/* The Story */}
                  <blockquote className="text-slate-700 text-lg leading-relaxed mb-8 flex-grow relative z-10 font-medium font-sans">
                    "{item.quote}"
                  </blockquote>

                  {/* The Impact Highlight */}
                  <div className="mb-8 p-4 bg-slate-50 rounded-xl border border-slate-100 group-hover:bg-emerald-50/50 group-hover:border-emerald-100 transition-colors duration-300">
                    <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider mb-1">The Result</p>
                    <p className="text-emerald-700 font-bold text-lg">{item.impact}</p>
                  </div>

                  {/* Author Info */}
                  <div className="flex items-center gap-4 mt-auto pt-6 border-t border-slate-50">
                    {/* Dynamic Avatar Initials with Gradients */}
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white font-serif font-bold text-lg shadow-md`}>
                      {item.initials}
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 text-sm">{item.name}</div>
                      <div className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3 h-3" />
                        {item.location}
                      </div>
                    </div>
                    
                    {/* Star Rating */}
                    <div className="ml-auto flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>

                </motion.div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
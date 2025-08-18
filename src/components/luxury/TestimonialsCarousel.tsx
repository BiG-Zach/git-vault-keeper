import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, MapPin, CheckCircle } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  title?: string;
  location: string;
  quote: string;
  rating: number;
  avatar: string;
  verified: boolean;
  savings?: string;
  state: 'FL' | 'MI' | 'NC';
}

const TestimonialsCarousel = () => {
  const prefersReducedMotion = useReducedMotion();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Martinez",
      title: "Working Mother",
      location: "Tampa, FL",
      quote: "Bradford found us coverage that actually fits our budget and keeps our pediatrician. The process was so smooth and transparent - exactly what we needed as busy parents.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b5e5?w=150&h=150&fit=crop&crop=face",
      verified: true,
      savings: "$210/month",
      state: "FL"
    },
    {
      id: 2,
      name: "Michael Thompson",
      title: "Self-Employed",
      location: "Detroit, MI",
      quote: "As someone who's self-employed, finding affordable health insurance was always stressful. Bradford made it simple and found me better coverage for less money. No pressure, just results.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      verified: true,
      savings: "$185/month",
      state: "MI"
    },
    {
      id: 3,
      name: "Jennifer & David Chen",
      title: "Young Professionals",
      location: "Raleigh, NC",
      quote: "We were overwhelmed by all the insurance options until we found Bradford. They explained everything clearly and enrollment took just 15 minutes. Best decision we made this year.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1515496281361-241a540151a5?w=150&h=150&fit=crop&crop=face",
      verified: true,
      savings: "$156/month",
      state: "NC"
    },
    {
      id: 4,
      name: "Linda Rodriguez",
      title: "Registered Nurse",
      location: "Orlando, FL",
      quote: "Working in healthcare, I know good coverage when I see it. Bradford understood our specific needs and found a plan that covers all our doctors and prescriptions perfectly.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face",
      verified: true,
      savings: "$198/month",
      state: "FL"
    },
    {
      id: 5,
      name: "Robert Wilson",
      title: "Retiree",
      location: "Sarasota, FL",
      quote: "After retirement, navigating Medicare supplements was confusing. Bradford's team provided real help from real people - not just a website. They made everything clear and simple.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      verified: true,
      savings: "$145/month",
      state: "FL"
    },
    {
      id: 6,
      name: "Carlos Hernandez",
      title: "Contractor",
      location: "Miami, FL",
      quote: "I was paying way too much for basic coverage. Bradford didn't just find me a lower premium - they found lower total costs with better benefits. That's the difference.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      verified: true,
      savings: "$234/month",
      state: "FL"
    }
  ];

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(nextTestimonial, 6000);
    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-emerald-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl" />
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 text-sm font-medium mb-6">
            <Star className="w-4 h-4" />
            <span>Real Stories, Real Savings</span>
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6 font-luxury-serif">
            What <span className="gradient-text-luxury">Families</span> Say
          </h2>
          
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Hear from real families across Florida, Michigan, and North Carolina who've found better coverage and significant savings.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-3xl shadow-luxury border border-slate-200 overflow-hidden">
            {/* Testimonial Content */}
            <div className="relative h-[400px] lg:h-[350px]">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 }
                  }}
                  className="absolute inset-0 p-8 lg:p-12"
                >
                  <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 h-full">
                    {/* Avatar and Info */}
                    <div className="flex-shrink-0 text-center lg:text-left">
                      <div className="relative inline-block mb-4">
                        <img
                          src={current.avatar}
                          alt={current.name}
                          className="w-20 h-20 lg:w-24 lg:h-24 rounded-full object-cover shadow-premium"
                        />
                        {current.verified && (
                          <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                            <CheckCircle className="w-5 h-5 text-white" />
                          </div>
                        )}
                      </div>
                      
                      <h3 className="text-xl font-bold text-slate-900 mb-1">
                        {current.name}
                      </h3>
                      
                      {current.title && (
                        <p className="text-sm text-slate-600 mb-2">
                          {current.title}
                        </p>
                      )}
                      
                      <div className="flex items-center justify-center lg:justify-start gap-1 text-sm text-slate-500 mb-3">
                        <MapPin className="w-4 h-4" />
                        <span>{current.location}</span>
                      </div>
                      
                      {current.savings && (
                        <div className="inline-flex items-center gap-1 px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm font-semibold">
                          <span>Saved {current.savings}</span>
                        </div>
                      )}
                    </div>

                    {/* Quote Content */}
                    <div className="flex-1 flex flex-col justify-center">
                      {/* Rating */}
                      <div className="flex items-center gap-1 mb-4 justify-center lg:justify-start">
                        {[...Array(current.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      
                      {/* Quote */}
                      <blockquote className="text-lg lg:text-xl text-slate-700 leading-relaxed text-center lg:text-left font-medium">
                        "{current.quote}"
                      </blockquote>
                      
                      {/* State Badge */}
                      <div className="mt-6 flex justify-center lg:justify-start">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 rounded-full text-sm text-slate-600">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                          <span>Verified {current.state} Customer</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-between p-6 bg-slate-50 border-t border-slate-200">
              {/* Previous Button */}
              <button
                onClick={prevTestimonial}
                className="flex items-center justify-center w-12 h-12 bg-white hover:bg-emerald-50 border border-slate-200 hover:border-emerald-300 rounded-xl transition-all duration-300 group"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 text-slate-600 group-hover:text-emerald-600" />
              </button>

              {/* Dots Indicator */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'bg-emerald-500 scale-125'
                        : 'bg-slate-300 hover:bg-slate-400'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              {/* Next Button */}
              <button
                onClick={nextTestimonial}
                className="flex items-center justify-center w-12 h-12 bg-white hover:bg-emerald-50 border border-slate-200 hover:border-emerald-300 rounded-xl transition-all duration-300 group"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5 text-slate-600 group-hover:text-emerald-600" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Social Proof Stats */}
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-12 lg:mt-16 text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-premium border border-slate-200">
              <div className="text-3xl font-bold text-emerald-600 mb-2">4.9/5</div>
              <div className="text-sm text-slate-600">Average Rating</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-premium border border-slate-200">
              <div className="text-3xl font-bold text-emerald-600 mb-2">98%</div>
              <div className="text-sm text-slate-600">Satisfaction Rate</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-premium border border-slate-200">
              <div className="text-3xl font-bold text-emerald-600 mb-2">$195</div>
              <div className="text-sm text-slate-600">Avg Monthly Savings</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
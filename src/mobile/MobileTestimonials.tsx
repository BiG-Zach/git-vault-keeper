import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import styles from './MobileTestimonialsPolish.module.css';

const testimonials = [
  {
    name: 'Sarah M.',
    location: 'Tampa, FL',
    rating: 5,
    text: 'Kept our doctors and cut our costs by $210 per month. The whole process was seamless and Bradford made it so easy to understand our options.',
    verified: true
  },
  {
    name: 'Mike R.',
    location: 'Detroit, MI',
    rating: 5,
    text: 'Quick, clear, and zero pressure. I was dreading insurance shopping but Bradford made it actually pleasant. Got coverage that fits my budget perfectly.',
    verified: true
  },
  {
    name: 'Jennifer & Tom K.',
    location: 'Raleigh, NC',
    rating: 5,
    text: 'Enrollment was simple from start to finish. Having a real person guide us through everything made all the difference. Highly recommend Bradford.',
    verified: true
  }
];

export default function MobileTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-advance every 6 seconds
  useEffect(() => {
    const timer = setInterval(nextTestimonial, 6000);
    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <section className={styles.testimonialsSection} aria-label="Customer testimonials">
      <div className={styles.testimonialsContainer}>
        <motion.h2 
          className={styles.testimonialsHeading}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Real Results From Real Families
        </motion.h2>

        <div className={styles.testimonialsCarousel}>
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className={styles.testimonialCard}
            >
              <div className={styles.testimonialRating}>
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className={styles.testimonialStar} fill="currentColor" />
                ))}
              </div>
              
              <p className={styles.testimonialText}>
                "{testimonials[currentIndex].text}"
              </p>
              
              <div className={styles.testimonialAuthor}>
                <div className={styles.testimonialAuthorName}>
                  {testimonials[currentIndex].name}
                </div>
                <div className={styles.testimonialAuthorLocation}>
                  {testimonials[currentIndex].location}
                </div>
                {testimonials[currentIndex].verified && (
                  <div className={styles.testimonialVerified}>
                    ✓ Verified Customer
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          <div className={styles.testimonialsControls}>
            <button 
              onClick={prevTestimonial}
              className={styles.testimonialButton}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className={styles.testimonialButtonIcon} />
            </button>
            
            <div className={styles.testimonialDots}>
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`${styles.testimonialDot} ${
                    index === currentIndex ? styles.testimonialDotActive : ''
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className={styles.testimonialButton}
              aria-label="Next testimonial"
            >
              <ChevronRight className={styles.testimonialButtonIcon} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
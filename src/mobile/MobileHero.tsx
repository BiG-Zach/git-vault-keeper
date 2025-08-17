import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeroForm from "../components/HeroForm";
import s from "./MobileHeroPolish.module.css";

export default function MobileHero() {
  const [showModal, setShowModal] = useState(false);
  const [currentFactIndex, setCurrentFactIndex] = useState(0);
  
  const alternatingFacts = [
    "The average ER visit costs over $2,200 without insurance.",
    "A family kept their home because life insurance paid off the mortgage.",
    "A broken arm can lead to a $16,000 surgery bill if you're uninsured.",
    "Parents secured their children's college education through life insurance benefits.",
    "An appendectomy without coverage can leave you with a $52,000 hospital bill.",
    "A cancer survivor received a $50,000 critical illness payout that covered expenses during recovery.",
    "Childbirth without insurance often runs $30,000 or more.",
    "A self-employed professional saved over $8,000 a year with tax-deductible premiums.",
    "A heart attack can rack up $38,500 in medical costs for the uninsured.",
    "A mother avoided bankruptcy when health insurance covered her $85,000 surgery.",
    "Cancer treatment can drain $10,000+ out-of-pocket every year.",
    "A widow received life insurance benefits within 60 days of approval, easing financial stress.",
    "A single vial of insulin can cost $300 or more without coverage.",
    "A family business stayed afloat thanks to life insurance replacing lost income.",
    "62% of uninsured adults are already struggling with medical debt.",
    "An emergency surgery was fully covered, saving a family from financial devastation."
  ];

  // Global modal state for sticky CTA
  useEffect(() => {
    const handleOpenModal = () => setShowModal(true);
    window.addEventListener('openHeroModal', handleOpenModal);
    return () => window.removeEventListener('openHeroModal', handleOpenModal);
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [showModal]);

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setShowModal(false);
    };
    if (showModal) {
      document.addEventListener('keydown', handleEscape);
    }
    return () => document.removeEventListener('keydown', handleEscape);
  }, [showModal]);

  // Rotate alternating facts every 17 seconds (14s scroll + 3s pause)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFactIndex((prev) => (prev + 1) % alternatingFacts.length);
    }, 17000);
    return () => clearInterval(interval);
  }, [alternatingFacts.length]);

  return (
    <>
      <section className={s.hero} aria-label="Mobile hero">
        <div className={s.bg} aria-hidden="true" />
        <div className={s.inner}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={s.heroText}
          >
            <h1 className={s.heroHeadline}>
              Secure Your Tomorrow, Starting Today
            </h1>
            <p className={s.heroSubheadline}>
              Instant quotes, next-day protection, ongoing expert guidance — so your family's future is never left to chance.
            </p>
          </motion.div>
        </div>

        {/* Horizontal scrolling ticker carousel */}
        <div className={s.urgencyCarousel}>
          <div className={s.carouselContainer}>
            <motion.div
              key={currentFactIndex}
              initial={{ x: "100%" }}
              animate={{ x: "-100%" }}
              transition={{ 
                duration: 14, 
                ease: "linear",
                delay: 0
              }}
              className={s.carouselText}
            >
              {alternatingFacts[currentFactIndex]}
            </motion.div>
          </div>
        </div>

        {/* Sentinel for sticky CTA visibility detection */}
        <div data-hero-sentinel className={s.heroSentinel} />
      </section>

      {/* Modal for Hero Form */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className={s.modalOverlay}
            onClick={(e) => {
              if (e.target === e.currentTarget) setShowModal(false);
            }}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className={s.modalCard}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowModal(false)}
                className={s.modalClose}
                aria-label="Close modal"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className={s.modalContent}>
                <HeroForm />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
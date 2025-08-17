import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeroForm from "../components/HeroForm";
import s from "./MobileHeroPolish.module.css";

export default function MobileHero() {
  const [showModal, setShowModal] = useState(false);
  const [currentFactIndex, setCurrentFactIndex] = useState(0);
  
  const urgencyFacts = [
    "Emergency room visit: $2,200 without insurance",
    "Broken arm surgery: $16,000 uninsured",
    "Appendectomy bill: $52,000 uninsured", 
    "Childbirth without insurance: $30,000",
    "Heart attack treatment: $38,500 uninsured",
    "Cancer treatment: $10,000+ yearly out-of-pocket",
    "Single insulin vial: $300+ without insurance",
    "62% of uninsured adults carry medical debt"
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

  // Rotate urgency facts every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFactIndex((prev) => (prev + 1) % urgencyFacts.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [urgencyFacts.length]);

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

        {/* Animated urgency facts overlay */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className={s.urgencyOverlay}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentFactIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className={s.urgencyText}
            >
              {urgencyFacts[currentFactIndex]}
            </motion.div>
          </AnimatePresence>
        </motion.div>

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
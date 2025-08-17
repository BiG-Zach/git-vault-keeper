import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeroForm from "../components/HeroForm";
import s from "./MobileHeroPolish.module.css";

export default function MobileHero() {
  const [showModal, setShowModal] = useState(false);

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


        {/* Industry dominance stat overlay */}
        <div className={s.statOverlay}>
          <div className={s.statNumber}>87%</div>
          <div className={s.statText}>of families overpay without expert guidance</div>
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
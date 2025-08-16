import React from "react";
import { motion } from "framer-motion";
import HeroForm from "../components/HeroForm";
import styles from "./MobileHeroPolish.module.css";

export default function MobileHero() {
  return (
    <section className={styles.heroContainer} aria-label="Mobile hero with quote form">
      <div className={styles.heroBackground} />
      <div className={styles.heroContent}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={styles.heroText}
        >
          <h1 className={styles.heroHeadline}>
            Premium Health & Life Coverage
          </h1>
          <p className={styles.heroSubheadline}>
            Clear. Fast. Year-round guidance from licensed agents.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={styles.heroFormWrapper}
        >
          <HeroForm />
        </motion.div>
      </div>

      {/* Sentinel for sticky CTA visibility detection */}
      <div data-hero-sentinel className={styles.heroSentinel} />
    </section>
  );
}
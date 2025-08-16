import React from "react";
import { motion } from "framer-motion";
import HeroForm from "../components/HeroForm";
import s from "./MobileHeroPolish.module.css";

export default function MobileHero() {
  return (
    <section className={s.hero} aria-label="Mobile hero with quote form">
      <div className={s.bg} aria-hidden="true" />
      <div className={s.inner}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={s.heroText}
        >
          <h1 className={s.heroHeadline}>
            Premium Health & Life Coverage
          </h1>
          <p className={s.heroSubheadline}>
            Clear. Fast. Year-round guidance from licensed agents.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={s.formWrap}
        >
          <HeroForm />
        </motion.div>
      </div>

      {/* Sentinel for sticky CTA visibility detection */}
      <div data-hero-sentinel className={s.heroSentinel} />
    </section>
  );
}
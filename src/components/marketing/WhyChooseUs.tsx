import { motion, useReducedMotion } from "framer-motion";
import React from "react";
import {
  NetworkIcon,
  ShieldStarIcon,
  HandHeartIcon
} from "../ui/CustomIcons";

type Item = {
  title: string;
  body: string;
  icon: React.ReactNode;
  aria: string;
};

const items: Item[] = [
  {
    title: "Personalized Local Service",
    body: "You get the dedicated attention of a local, independent agent who understands your community and is committed to your family's well-being.",
    icon: <HandHeartIcon aria-hidden={true} className="h-6 w-6" />,
    aria: "Personalized Local Service",
  },
  {
    title: "Enterprise-Level Resources",
    body: "Our strategic partnership with Best Insurance Group gives you access to exclusive carrier networks and enhanced buying power, simplifying your options.",
    icon: <NetworkIcon aria-hidden={true} className="h-6 w-6" />,
    aria: "Enterprise-Level Resources",
  },
  {
    title: "The Best of Both Worlds",
    body: "We combine the trust and accessibility of a local advisor with the strength and resources of a national leader. It's the way insurance should be.",
    icon: <ShieldStarIcon aria-hidden={true} className="h-6 w-6" />,
    aria: "The Best of Both Worlds",
  },
];

export default function WhyChooseUs() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div aria-labelledby="why-choose-us">
      <div className="text-center mb-8 md:mb-10">
        <div className="flex flex-col items-center gap-3">
          <motion.h2
            id="why-choose-us"
            className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 leading-tight"
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            Your Local Advocate, Backed by National Strength
          </motion.h2>
          <motion.div
            className="inline-flex items-center gap-2 rounded-full border border-emerald-200/70 bg-white px-3 py-1 text-xs uppercase tracking-wide text-emerald-700 shadow-sm"
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.05 }}
            aria-label="Partnered with Best Insurance Group"
          >
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-600 text-white font-semibold">BiG</span>
            <span className="font-semibold text-emerald-800 normal-case tracking-normal">Best Insurance Group</span>
          </motion.div>
        </div>
        <motion.p
          className="mt-3 text-slate-600 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45, ease: "easeOut", delay: 0.12 }}
        >
          Bradford Informed Guidance pairs hometown advocacy with the national-scale resources of Best Insurance Group, so every recommendation is backed by trusted carriers and enterprise-level support.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {items.map((item, index) => (
          <motion.article
            key={item.title}
            aria-label={item.aria}
            className="group rounded-2xl ring-1 ring-slate-200/70 bg-white hover:shadow-lg/20 hover:ring-slate-300 transition-all duration-300 p-5 md:p-6 cursor-pointer"
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.45,
              ease: "easeOut",
              delay: prefersReducedMotion ? 0 : index * 0.06
            }}
            whileHover={prefersReducedMotion ? {} : { y: -2 }}
          >
            <div className="flex items-start gap-3">
              <div className="size-9 md:size-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-100 group-hover:text-emerald-700 transition-colors duration-300">
                {item.icon}
              </div>
              <div className="flex-1">
                <h3
                  className="text-base md:text-lg font-semibold text-slate-900 group-hover:text-emerald-900 transition-colors duration-300 leading-tight mb-1"
                  aria-describedby={`${item.title.replace(/\s+/g, '-').toLowerCase()}-desc`}
                >
                  {item.title}
                </h3>
                <p
                  id={`${item.title.replace(/\s+/g, '-').toLowerCase()}-desc`}
                  className="text-sm leading-6 text-slate-600 group-hover:text-slate-700 transition-colors duration-300"
                >
                  {item.body}
                </p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}

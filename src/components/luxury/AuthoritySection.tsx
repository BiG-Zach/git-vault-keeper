import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ShieldCheck, Award, Clock, Users, MapPin } from 'lucide-react';
import { BRAND } from '../../lib/brand';

const highlights = [
  {
    icon: ShieldCheck,
    title: "Verified Licensing",
    description: `NPN ${BRAND.npn} • ${BRAND.licensed}`,
  },
  {
    icon: Clock,
    title: "Concierge Response Times",
    description: "Quotes in 45–90 minutes with same-day follow up.",
  },
  {
    icon: Users,
    title: "Independent Guidance",
    description: "Personalized underwriting strategies for families, entrepreneurs, and retirees.",
  },
];

const proofPoints = [
  {
    label: "Carrier Partnerships",
    value: "Aetna, Cigna, UnitedHealthcare, Blue Cross Blue Shield, Americo, Mutual of Omaha, and more A-rated providers.",
  },
  {
    label: "Best Insurance Group Partner",
    value: "Enterprise resources paired with the accountability of an independent broker since 2020.",
  },
  {
    label: "Year-Round Availability",
    value: "Private health, life, and supplemental solutions with Mon-Sun, 8:00 AM - 8:00 PM EST availability.",
  },
];

export default function AuthoritySection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16 lg:py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(34,197,94,0.12)_0%,transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(59,130,246,0.12)_0%,transparent_55%)]" />
      </div>

      <div className="relative z-10 container mx-auto max-w-6xl px-4 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-12 lg:flex-row lg:items-start"
        >
          <div className="w-full lg:max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-200">
              <MapPin className="h-4 w-4" />
              Licensed & Verified
            </div>
            <h2 className="mt-6 font-luxury-serif text-3xl text-white md:text-4xl lg:text-5xl">
              Enterprise resources with licensed, independent stewardship.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-emerald-100/80">
              Bradford Informed Guidance partners with Best Insurance Group to deliver concierge support, transparent pricing, and A-rated carrier access across six states. Every consultation is led directly by a licensed professional—no call centers or hand-offs.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={BRAND.verification.trustMyProducer}
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:border-emerald-300/40 hover:bg-white/15"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ShieldCheck className="h-4 w-4 text-emerald-300" />
                Verify on TrustMyProducer
              </a>
              <a
                href={BRAND.verification.nipr}
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:border-sky-300/40 hover:bg-white/15"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Award className="h-4 w-4 text-sky-300" />
                Confirm via NIPR Registry
              </a>
            </div>
          </div>

          <div className="w-full flex-1">
            <div className="grid gap-6 md:grid-cols-2">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: prefersReducedMotion ? 0 : index * 0.08 }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/15">
                    <highlight.icon className="h-6 w-6 text-emerald-300" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-white">{highlight.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-emerald-100/80">{highlight.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
              {proofPoints.map((point) => (
                <div key={point.label} className="border-b border-white/10 pb-4 last:border-b-0 last:pb-0">
                  <p className="text-sm font-semibold uppercase tracking-wide text-emerald-200">{point.label}</p>
                  <p className="mt-1 text-sm leading-relaxed text-emerald-100/80">{point.value}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

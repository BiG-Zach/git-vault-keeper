import React from "react";
import { CheckCircle } from "lucide-react";

const VALUES = [
  {
    title: "Guidance, Not Sales",
    description: "We're here to educate and advise, ensuring you make informed decisions without pressure.",
  },
  {
    title: "Clarity, Not Confusion",
    description: "We translate complex insurance jargon into simple, clear options.",
  },
  {
    title: "Advocacy, Not Apathy",
    description: "We work for you, not the insurance companies, to find the best possible outcomes.",
  }
];

export default function MissionValues() {
  return (
    <section className="py-20 md:py-24 bg-slate-900 text-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
            Our Commitment to You
          </h2>
          <p className="text-white/70 text-base md:text-lg">
            Every recommendation is grounded in professional integrity, clear communication, and unwavering client advocacy.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {VALUES.map((value) => (
            <div
              key={value.title}
              className="group h-full rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg transition hover:border-white/20 hover:bg-white/10"
            >
              <div className="flex items-center gap-3 text-[hsl(157,72%,53%)] mb-4">
                <CheckCircle className="h-6 w-6" aria-hidden />
                <span className="text-sm font-semibold uppercase tracking-wide text-white/70">
                  {value.title}
                </span>
              </div>
              <p className="text-white/80 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from "react";
import MobileHero from "./MobileHero";
import MobileStickyCTA from "./MobileStickyCTA";
import FloatingConsultation from "./FloatingConsultation";

export default function MobileHome() {
  return (
    <main className="relative">
      <MobileHero />
      <MobileStickyCTA />
      <FloatingConsultation />
    </main>
  );
}
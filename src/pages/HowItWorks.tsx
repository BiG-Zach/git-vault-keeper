import SEO from "../components/SEO";
import OurProcessHero from "../components/headers/OurProcessHero";
import ProcessStatisticsSection from "../components/process/ProcessStatisticsSection";
import PremiumProcessSteps from "../components/process/PremiumProcessSteps";
import PersonalGuaranteeSection from "../components/process/PersonalGuaranteeSection";
import EnhancedProcessTrust from "../components/process/EnhancedProcessTrust";
import PremiumProcessFAQ from "../components/process/PremiumProcessFAQ";
import { StructuredData } from "../components/StructuredData";
import { localBusinessSchema, serviceSchema, breadcrumbSchema } from "../utils/schema";

const faqData = {
  "@type": "FAQPage" as const,
  mainEntity: [
    {
      "@type": "Question" as const,
      name: "How long does your process take?",
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: "Most clients get their perfect plan within 48 hours. I handle all the research and paperwork, so the process is quick and effortless for you.",
      },
    },
    {
      "@type": "Question" as const,
      name: "How do you get paid? Are there any fees for me?",
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: "There are absolutely no fees for my services. As a licensed broker, I am compensated directly by the insurance carriers after I help you enroll. My guidance is always free to you.",
      },
    },
  ],
};

// This page now uses the premium component structure

export default function HowItWorksPage() {
  return (
    <>
      <SEO
        title="How I Help You Get Insurance Coverage FL MI NC | Licensed Broker Zach Bradford"
        description="Licensed insurance broker Zach Bradford's proven 4-step process for Florida, Michigan & North Carolina residents. Free consultation, next-day approval available."
        path="/our-process"
        scripts={[
          { innerHTML: localBusinessSchema('FL', {
            streetAddress: '4200 W Cypress St',
            addressLocality: 'Tampa',
            addressRegion: 'FL',
            postalCode: '33607'
          }, '(689) 325-6570') },
          { innerHTML: serviceSchema(['Health Insurance', 'Life Insurance', 'Insurance Consultation']) },
          { innerHTML: breadcrumbSchema([
            { name: 'Home', item: 'https://www.bradfordinformedguidance.com/' },
            { name: 'Our Process', item: 'https://www.bradfordinformedguidance.com/our-process' }
          ]) }
        ]}
      />

      <StructuredData schema={faqData} />

      <OurProcessHero />

      <main className="min-h-screen">
        {/* Process Statistics - Dark Section */}
        <ProcessStatisticsSection />
        
        {/* Premium Process Steps - Light Section */}
        <PremiumProcessSteps />
        
        {/* Personal Guarantee - Dark Section */}
        <PersonalGuaranteeSection />
        
        {/* Enhanced Trust Section - Dark Section */}
        <EnhancedProcessTrust />
        
        {/* Premium FAQ & CTA - Light Section */}
        <PremiumProcessFAQ />
      </main>
    </>
  );
}
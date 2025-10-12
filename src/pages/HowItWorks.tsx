import SEO from "../components/SEO";
import OurProcessHero from "../components/headers/OurProcessHero";
import ProcessStatisticsSection from "../components/process/ProcessStatisticsSection";
import PremiumProcessSteps from "../components/process/PremiumProcessSteps";
import PersonalGuaranteeSection from "../components/process/PersonalGuaranteeSection";
import EnhancedProcessTrust from "../components/process/EnhancedProcessTrust";
import PremiumProcessFAQ from "../components/process/PremiumProcessFAQ";
import { localBusinessSchema, serviceSchema, breadcrumbSchema } from "../utils/schema";

// This page now uses the premium component structure

export default function HowItWorksPage() {

  return (
    <>
      <SEO
        title="How I Help You Get Insurance Coverage - 6 States Licensed | 24-Hour Response Guarantee"
        description="Licensed insurance broker's proven 4-step process across FL, GA, SC, TN, AL, TX. 24-hour response guarantee, same-day enrollment assistance. 8 years experience."
        path="/our-process"
        image="/images/hero/our-process-hero-retina.webp"
        meta={[
          {
            property: 'og:image:alt',
            content: 'Bradford Informed Guidance insurance process overview with client meeting'
          },
          {
            name: 'twitter:image:alt',
            content: 'Bradford Informed Guidance insurance process overview with client meeting'
          }
        ]}
        scripts={[
          { innerHTML: localBusinessSchema('FL', {
            streetAddress: '4200 W Cypress St',
            addressLocality: 'Tampa',
            addressRegion: 'FL',
            postalCode: '33607'
          }, '(689) 325-6570') },
          { innerHTML: serviceSchema(['Health Insurance', 'Life Insurance', 'Insurance Consultation'], '/images/hero/our-process-hero-retina.webp') },
          { innerHTML: breadcrumbSchema([
            { name: 'Home', item: 'https://www.bradfordinformedguidance.com/' },
            { name: 'Our Process', item: 'https://www.bradfordinformedguidance.com/our-process' }
          ]) }
        ]}
      />

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

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
        title="How I Help You Get Insurance Coverage Across Six States | Licensed Broker Zach Bradford"
        description="Licensed insurance broker Zach Bradford's proven 4-step process for families across Florida, Georgia, South Carolina, Tennessee, Alabama, and Texas. Free consultation, next-day approval available."
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

import SEO from "../components/SEO";
import ContactHero from "../components/headers/ContactHero";
import ContactStatisticsSection from "../components/contact/ContactStatisticsSection";
import PremiumContactMethods from "../components/contact/PremiumContactMethods";
import ContactTrustSignals from "../components/contact/ContactTrustSignals";
import EnhancedMessageForm from "../components/contact/EnhancedMessageForm";
import OfficeLocationLuxury from "../components/contact/OfficeLocationLuxury";
import PersonalGuaranteeSection from "../components/contact/PersonalGuaranteeSection";
import { localBusinessSchema, serviceSchema, breadcrumbSchema } from "../utils/schema";

export default function ContactPage() {
  return (
    <>
      <SEO
        title="Contact Zach Bradford - Licensed Insurance Broker FL MI NC | (689) 325-6570"
        description="Contact licensed insurance broker Zach Bradford directly. Serving Florida, Michigan, North Carolina. Call (689) 325-6570 or schedule free consultation today."
        path="/contact"
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
            { name: 'Contact', item: 'https://www.bradfordinformedguidance.com/contact' }
          ]) }
        ]}
      />

      <ContactHero />

      <main>
        {/* Contact Statistics Section (Dark) */}
        <ContactStatisticsSection />

        {/* Premium Contact Methods (Light) */}
        <PremiumContactMethods />

        {/* Trust Signals Section (Light) - Reduces form friction */}
        <ContactTrustSignals />

        {/* Enhanced Message Form (Light) */}
        <EnhancedMessageForm />

        {/* Office Location (Dark) */}
        <OfficeLocationLuxury />

        {/* Personal Guarantee Section (Dark) */}
        <PersonalGuaranteeSection />
      </main>
    </>
  );
}
import SEO from '../components/SEO';
import Hero from '../components/marketing/Hero';
import WhyChooseUs from '../components/marketing/WhyChooseUs';
import HowItWorks from '../components/marketing/HowItWorks';
import TestimonialsReel from '../components/marketing/TestimonialsReel';
import USAvailability from '../components/marketing/USAvailability';
import { trackConversion } from '../lib/analytics';

export default function HomePage() {
  return (
    <>
      <SEO
        title="Health & Life Insurance FL MI NC | Licensed Broker Zach Bradford"
        description="Licensed insurance broker in FL, MI, & NC. Get instant health & life insurance quotes from top carriers. Expert guidance since 2016."
        path="/"
      />
      <main id="content">
        {/* Force redeploy at new timestamp */}
        <Hero
            title="Secure Your Tomorrow, Starting Today"
            subtitle="Instant quotes, next-day protection, ongoing expert guidance—so your family's future is never left to chance."
            primaryCtaText="Schedule Free Consultation"
            primaryCtaLink="/contact"
            // The analytics call remains for the main CTA, but without any A/B variant data.
            onPrimaryCtaClick={() => trackConversion({ eventName: 'hero_cta_click' })}
        />
        <WhyChooseUs />
        <HowItWorks />
        <TestimonialsReel />
        <USAvailability />
      </main>
    </>
  );
}

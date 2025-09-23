import SEO from '../components/SEO';
import Hero from '../components/marketing/Hero';
import WhyChooseUs from '../components/marketing/WhyChooseUs';
import HowItWorks from '../components/marketing/HowItWorks';
import TestimonialsReel from '../components/marketing/TestimonialsReel';
import USAvailability from '../components/marketing/USAvailability';
import { trackConversion } from '../lib/analytics';

export default function HomeVariantB() {
  return (
    <>
      <SEO
        title="Get Your Free Insurance Quote | Bradford Informed Guidance"
        description="Find affordable health and life insurance in minutes. Compare top-rated PPO plans and get your free, no-obligation quote from a licensed expert."
        path="/"
      />
      <main id="content">
        <Hero
            title="Get Your Free Insurance Quote Today"
            subtitle="Compare top-rated PPO plans in minutes. See how much you can save with a no-obligation consultation from a licensed expert."
            primaryCtaText="Get My Free Quote"
            primaryCtaLink="/quote"
            onPrimaryCtaClick={() => trackConversion({ eventName: 'hero_cta_click', variant: 'B' })}
        />
        <WhyChooseUs />
        <HowItWorks />
        <TestimonialsReel />
        <USAvailability />
      </main>
    </>
  );
}

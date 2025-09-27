import SEO from '../components/SEO';
import Hero from '../components/marketing/Hero';
import WhyChooseUs from '../components/marketing/WhyChooseUs';
import HowItWorks from '../components/marketing/HowItWorks';
import TestimonialsReel from '../components/marketing/TestimonialsReel';
import USAvailability from '../components/marketing/USAvailability';
import { trackConversion } from '../lib/analytics';

/**
 * The primary homepage component, representing Variant A.
 * The A/B testing controller logic has been removed from this file to allow for
 * static analysis and direct visual editing in tools like Lovable Dev.
 */
export default function Home() {
    return (
        <>
            <SEO
                title="Health & Life Insurance FL MI NC | Licensed Broker Zach Bradford"
                description="Licensed insurance broker in FL, MI, & NC. Get instant health & life insurance quotes from top carriers. Expert guidance since 2016."
                path="/"
            />
            <main id="content">
                <Hero
                    title="Secure Your Tomorrow, Starting Today"
                    subtitle="Instant quotes, next-day protection, ongoing expert guidance—so your family's future is never left to chance."
                    primaryCtaText="Schedule Free Consultation"
                    primaryCtaLink="/contact"
                    onPrimaryCtaClick={() => trackConversion({ eventName: 'hero_cta_click', variant: 'A' })}
                />
                <WhyChooseUs />
                <HowItWorks />
                <TestimonialsReel />
                <USAvailability />
            </main>
        </>
    );
}

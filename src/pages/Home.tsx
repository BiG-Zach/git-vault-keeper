import SEO from '../components/SEO';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import TestimonialsCarousel from '../components/TestimonialsCarousel';
import CoverageMap from '../components/CoverageMap';
import OurCarriers from '../components/OurCarriers';

export default function Home() {
  return (
    <>
      <SEO
        title="Concierge Health & Life Insurance | Bradford Informed Guidance"
        description="Smarter insurance coverage across FL, MI, NC, AZ, GA, & TX. Custom PPO health and life strategies for professionals, families, and early retirees."
        path="/"
      />
      <Hero />
      <OurCarriers />
      <HowItWorks />
      <TestimonialsCarousel />
      <CoverageMap />
    </>
  );
}

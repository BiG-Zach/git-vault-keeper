import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import Testimonials from '../components/social/Testimonials';
import Team from '../components/about/Team';
import CarrierLogos from '../components/carriers/CarrierLogos';
import ExpansionTracker from '../components/ExpansionTracker/ExpansionTracker';

export default function HomePage() {
  return (
    <>
      <SEO
        title="Health & Life Insurance FL MI NC | Licensed Broker Zach Bradford"
        description="Licensed insurance broker in FL, MI, & NC. Get instant health & life insurance quotes from top carriers. Expert guidance since 2016."
        path="/"
      />
      <Header />
      <main id="content">
        <Hero />
        <Testimonials />
        <Team />
        <CarrierLogos />
        <ExpansionTracker />
      </main>
      <Footer />
    </>
  );
}

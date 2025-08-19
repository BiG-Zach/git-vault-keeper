import { Calendar, FileText } from 'lucide-react';
import { Button } from '../components/ui/button';
import NetworkCard, { type Network } from "../components/carriers/NetworkCard";
import CarrierCard, { type Carrier } from "../components/carriers/CarrierCard";
import NetworkFAQ from "../components/carriers/FAQ";
import StickyBottomCTA from "../components/carriers/StickyBottomCTA";
import { BRAND } from "../lib/brand";

// PPO Networks Data
const NETWORKS: Network[] = [
  {
    name: "Aetna PPO Network",
    logoSrc: "/logos/carriers/aetna.webp",
    description: "Extensive nationwide PPO network with comprehensive provider access and quality healthcare facilities",
    highlights: ["Hospital affiliations", "Specialist access", "Preventive care"],
    lookupUrl: "https://www.goperspecta.com/PDN/allstatehealth/public/ProviderSearch/Main"
  },
  {
    name: "Cigna PPO Network", 
    logoSrc: "/logos/carriers/cigna.webp",
    description: "Comprehensive PPO network focused on wellness programs and integrated healthcare solutions",
    highlights: ["Wellness focus", "Mental health providers", "Telehealth options"],
    lookupUrl: "https://sarhcpdir.cigna.com/web/public/consumer/directory/search?consumerCode=HDC016"
  },
  {
    name: "First Health PPO Network",
    logoSrc: "/logos/carriers/firsthealth.webp", 
    description: "Established PPO network providing reliable access to quality healthcare providers nationwide",
    highlights: ["Geographic coverage", "Specialty care", "Established relationships"],
    lookupUrl: "https://providerlocator.firsthealth.com/LocateProvider/SelectNetworkType"
  },
  {
    name: "MultiPlan PPO Network",
    logoSrc: "/logos/carriers/multiplan.webp",
    description: "One of America's oldest PPO networks with extensive provider relationships and competitive rates", 
    highlights: ["Broad provider base", "Cost-effective solutions", "Nationwide coverage"],
    lookupUrl: "https://providerlocator.com/DirectoryDisclaimerPage.aspx?RedirectURL=%2fMembers%2fdefault.aspx%3f"
  },
  {
    name: "UnitedHealthcare PPO Network",
    logoSrc: "/logos/carriers/unitedhealthcare.webp",
    description: "The nation's largest PPO network offering unmatched provider access and innovative healthcare solutions",
    highlights: ["Largest network", "Cutting-edge technology", "Comprehensive care options"],
    lookupUrl: "https://www.uhc.com/find-a-doctor"
  },
  {
    name: "Blue Cross Blue Shield PPO Network", 
    logoSrc: "/logos/carriers/bluecrossblueshield.png",
    description: "Trusted community-focused PPO network with strong local provider relationships and comprehensive coverage",
    highlights: ["Local community focus", "Established relationships", "Comprehensive provider network"],
    lookupUrl: "https://provider.bcbs.com/app/public/#/one/city=&state=&postalCode=&country=&insurerCode=BCBSA_I&brandCode=BCBSANDHF&alphaPrefix=&bcbsaProductId"
  }
];

// Insurance Carriers Data
const CARRIERS: Carrier[] = [
  {
    name: "Allstate Health Solutions",
    logoSrc: "/logos/carriers/allstate.webp", 
    description: "Flexible health solutions with broad PPO access and member-first service.",
    rating: "AM Best: A+",
    specialties: ["Health", "PPO"]
  },
  {
    name: "UnitedHealthcare",
    logoSrc: "/logos/carriers/unitedhealthcare.webp",
    description: "Nationwide strength with extensive provider access and digital care innovation.",
    rating: "AM Best: A+", 
    specialties: ["Health", "PPO", "Telehealth"]
  },
  {
    name: "Mutual of Omaha",
    logoSrc: "/logos/carriers/mutualofomaha.webp",
    description: "Financially strong life and health products backed by a century of service.",
    rating: "AM Best: A+",
    specialties: ["Life", "Supplemental"]
  },
  {
    name: "Americo",
    logoSrc: "/logos/carriers/americo.webp",
    description: "Competitive life solutions with simplified underwriting options.",
    specialties: ["Life"]
  },
  {
    name: "SGIC",
    logoSrc: "/logos/carriers/sgic.webp", 
    description: "Modern health benefits with practical, everyday value.",
    specialties: ["Health"]
  },
  {
    name: "Aflac",
    logoSrc: "/logos/carriers/aflac.webp",
    description: "Supplemental benefits that pay you cash for covered events.",
    specialties: ["Supplemental"]
  },
  {
    name: "Philadelphia American Life",
    logoSrc: "/logos/carriers/pal.webp",
    description: "Focused health offerings with member-centric support.",
    specialties: ["Health"]
  },
  {
    name: "Blue Cross Blue Shield",
    logoSrc: "/logos/carriers/bluecrossblueshield.png",
    description: "Community-rooted coverage with trusted local provider networks.",
    specialties: ["Health", "PPO"]
  }
];

export default function CarriersPage() {
  return (
    <>
      {/* Hero Section */}
      <header className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        {/* Responsive Hero Image */}
        <picture>
          <source 
            media="(min-width: 1920px)" 
            srcSet="/images/hero/carriers-hero-retina.webp" 
            type="image/webp" 
          />
          <source 
            media="(min-width: 768px)" 
            srcSet="/images/hero/carriers-hero-desktop.webp" 
            type="image/webp" 
          />
          <source 
            media="(max-width: 767px)" 
            srcSet="/images/hero/carriers-hero-mobile.webp" 
            type="image/webp" 
          />
          <img 
            src="/images/hero/carriers-hero-desktop.webp" 
            alt="Insurance professionals and healthcare providers working together" 
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
          />
        </picture>

        {/* Light white gradient overlay for professional appearance */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.1) 100%)' }} />
        
        {/* Hero Content - Positioned left to give shield breathing room */}
        <div className="relative z-10 text-left md:text-center px-4 max-w-6xl mx-auto md:ml-auto md:mr-[20%]">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.1)', WebkitTextStroke: '1px rgba(0,0,0,0.3)' }}>
            Our Trusted Insurance Partners & 
            <span className="block bg-gradient-to-r from-brand-jade-600 to-brand-sky-600 bg-clip-text text-transparent" style={{ WebkitTextStroke: '1px rgba(0,0,0,0.3)' }}>
              Provider Networks
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-800 max-w-4xl md:mx-auto font-medium leading-relaxed mb-8" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
            Access to top-rated carriers and <span className="text-brand-jade-600 font-bold">6 extensive PPO networks</span> nationwide
          </p>
          
          {/* Premium accent line */}
          <div className="w-24 h-1 bg-gradient-to-r from-brand-jade-300 to-brand-sky-300 rounded-full md:mx-auto" />
        </div>
      </header>

      <main className="container mx-auto px-4 py-10 md:py-12">

        {/* PPO Networks Section */}
        <section className="mb-20 relative">
          {/* Section background */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/50 via-brand-jade-500/5 to-white/50 rounded-3xl" />
          
          <div className="relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Find Your Doctor in Our 
                <span className="bg-gradient-to-r from-brand-jade-600 to-brand-sky-600 bg-clip-text text-transparent"> Premium PPO Networks</span>
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto font-medium">
                Verify your healthcare providers are in-network before choosing your plan with our <span className="text-brand-jade-600 font-bold">direct provider lookup tools</span>
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {NETWORKS.map((network) => (
                <NetworkCard key={network.name} network={network} />
              ))}
            </div>

            <NetworkFAQ />
          </div>
        </section>

        {/* Insurance Carriers Section */}
        <section className="mb-20 relative">
          {/* Section background */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/50 via-brand-sky-500/5 to-white/50 rounded-3xl" />
          
          <div className="relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our 
                <span className="bg-gradient-to-r from-brand-sky-600 to-brand-jade-600 bg-clip-text text-transparent"> Trusted Insurance Carrier</span> Partners
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto font-medium">
                <span className="text-brand-success-500 font-bold">A+ rated carriers</span> providing comprehensive health and life coverage solutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {CARRIERS.map((carrier) => (
                <CarrierCard key={carrier.name} carrier={carrier} />
              ))}
            </div>
          </div>
        </section>

        {/* Footer CTA Section */}
        <section className="relative rounded-3xl border border-gray-200 bg-white p-12 text-center shadow-sm">
          {/* Clean solid background */}
          <div className="absolute inset-0 bg-gray-50" />
          
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Find Your 
              <span className="bg-gradient-to-r from-brand-jade-600 to-brand-sky-600 bg-clip-text text-transparent"> Perfect Coverage?</span>
            </h2>
            <p className="text-gray-700 mb-10 max-w-3xl mx-auto text-lg font-medium leading-relaxed">
              Let Bradford guide you through our network of trusted carriers and help you find the right coverage for your family with <span className="text-brand-jade-600 font-bold">personalized expert guidance</span>.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button
                asChild
                size="lg"
                className="bg-brand-jade-500 text-white hover:bg-brand-jade-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-jade-500 focus-visible:ring-offset-2 disabled:opacity-60 disabled:pointer-events-none bg-[#12bfae] hover:bg-[#0ea99d] px-10 py-5 text-lg"
              >
                <a
                  href={BRAND.phoneTel}
                  data-gtm="carriers_footer_cta"
                  data-action="schedule"
                >
                  <Calendar className="h-6 w-6 mr-2" />
                  Schedule Consultation
                </a>
              </Button>
              
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-brand-sky-500 bg-white text-brand-sky-600 hover:bg-brand-sky-50 hover:border-brand-sky-600 px-10 py-5 text-lg"
              >
                <a
                  href="/quote"
                  data-gtm="carriers_footer_cta" 
                  data-action="quote"
                >
                  <FileText className="h-6 w-6 mr-2" />
                  Get Quote
                </a>
              </Button>
            </div>

            <div className="mt-10 pt-8 border-t border-white/20 text-sm text-gray-600">
              Prefer a human? <a className="underline hover:text-brand-jade-600 transition-colors font-semibold" href={BRAND.phoneTel} data-gtm={`${BRAND.gtm.call}_carriers`}>Call {BRAND.phoneHuman}</a>.
            </div>
          </div>
        </section>
      </main>

      <StickyBottomCTA />
    </>
  );
}
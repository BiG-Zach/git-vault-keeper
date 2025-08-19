import { Calendar, FileText } from 'lucide-react';
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
      <main className="container mx-auto px-4 py-10 md:py-12">
        {/* Hero Section */}
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-ink-900 mb-4">
            Our Trusted Insurance Partners & Provider Networks
          </h1>
          <p className="text-lg text-ink-900/70 max-w-3xl mx-auto">
            Access to top-rated carriers and 6 extensive PPO networks nationwide
          </p>
        </header>

        {/* PPO Networks Section */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-ink-900 mb-4">Find Your Doctor in Our PPO Networks</h2>
            <p className="text-lg text-ink-900/70 max-w-2xl mx-auto">
              Verify your healthcare providers are in-network before choosing your plan
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {NETWORKS.map((network) => (
              <NetworkCard key={network.name} network={network} />
            ))}
          </div>

          <NetworkFAQ />
        </section>

        {/* Insurance Carriers Section */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-ink-900 mb-4">Our Trusted Insurance Carrier Partners</h2>
            <p className="text-lg text-ink-900/70 max-w-2xl mx-auto">
              A+ rated carriers providing comprehensive health and life coverage solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {CARRIERS.map((carrier) => (
              <CarrierCard key={carrier.name} carrier={carrier} />
            ))}
          </div>
        </section>

        {/* Footer CTA Section */}
        <section className="rounded-2xl border border-surface-glassLine/20 bg-surface-glass backdrop-blur-sm p-8 text-center">
          <h2 className="text-2xl font-bold text-ink-900 mb-4">Ready to Find Your Perfect Coverage?</h2>
          <p className="text-ink-900/70 mb-6 max-w-2xl mx-auto">
            Let Bradford guide you through our network of trusted carriers and help you find the right coverage for your family.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={BRAND.phoneTel}
              className="inline-flex items-center gap-2 rounded-xl bg-brand-jade-500 px-8 py-4 text-base font-medium text-white hover:bg-brand-jade-600 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-jade-500 focus:ring-offset-2"
              data-gtm="carriers_footer_cta"
              data-action="schedule"
            >
              <Calendar className="h-5 w-5" />
              Schedule Consultation
            </a>
            
            <a
              href="/quote"
              className="inline-flex items-center gap-2 rounded-xl border border-brand-sky-500/30 bg-brand-sky-500/10 px-8 py-4 text-base font-medium text-brand-sky-600 hover:bg-brand-sky-500/20 transition-colors"
              data-gtm="carriers_footer_cta" 
              data-action="quote"
            >
              <FileText className="h-5 w-5" />
              Get Quote
            </a>
          </div>

          <div className="mt-8 pt-6 border-t border-surface-glassLine/20 text-sm text-ink-900/60">
            Prefer a human? <a className="underline hover:text-ink-900" href={BRAND.phoneTel} data-gtm={`${BRAND.gtm.call}_carriers`}>Call {BRAND.phoneHuman}</a>.
          </div>
        </section>
      </main>

      <StickyBottomCTA />
    </>
  );
}
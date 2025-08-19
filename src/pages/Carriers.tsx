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
        <header className="mb-16 text-center relative">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-jade-500/5 via-brand-sky-500/5 to-brand-jade-500/5 rounded-3xl blur-3xl" />
          
          <div className="relative z-10">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-brand-jade-600 to-brand-sky-600 bg-clip-text text-transparent mb-6 leading-tight">
              Our Trusted Insurance Partners & Provider Networks
            </h1>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto font-medium leading-relaxed">
              Access to top-rated carriers and <span className="text-brand-jade-600 font-bold">6 extensive PPO networks</span> nationwide
            </p>
            
            {/* Premium accent line */}
            <div className="mt-8 mx-auto w-24 h-1 bg-gradient-to-r from-brand-jade-500 to-brand-sky-500 rounded-full" />
          </div>
        </header>

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
        <section className="relative overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-md p-12 text-center shadow-luxury">
          {/* Premium background effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-jade-500/10 via-brand-sky-500/5 to-brand-jade-500/10" />
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-brand-jade-500/20 to-brand-sky-500/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gradient-to-br from-brand-sky-500/20 to-brand-jade-500/20 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Find Your 
              <span className="bg-gradient-to-r from-brand-jade-600 to-brand-sky-600 bg-clip-text text-transparent"> Perfect Coverage?</span>
            </h2>
            <p className="text-gray-700 mb-10 max-w-3xl mx-auto text-lg font-medium leading-relaxed">
              Let Bradford guide you through our network of trusted carriers and help you find the right coverage for your family with <span className="text-brand-jade-600 font-bold">personalized expert guidance</span>.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href={BRAND.phoneTel}
                className="group relative inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-brand-jade-500 to-brand-jade-600 px-10 py-5 text-lg font-bold text-white hover:from-brand-jade-600 hover:to-brand-jade-500 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-brand-jade-500/50 focus:ring-offset-2 shadow-xl hover:shadow-2xl hover:scale-105 transform-gpu"
                data-gtm="carriers_footer_cta"
                data-action="schedule"
              >
                {/* Button glow effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-brand-jade-400 to-brand-jade-500 opacity-0 group-hover:opacity-75 transition-opacity duration-300 blur-md" />
                
                <Calendar className="h-6 w-6 relative z-10" />
                <span className="relative z-10">Schedule Consultation</span>
                
                {/* Shine effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transform -skew-x-12 group-hover:translate-x-full transition-all duration-700" />
              </a>
              
              <a
                href="/quote"
                className="group relative inline-flex items-center gap-3 rounded-xl border-2 border-brand-sky-500/50 bg-white/20 backdrop-blur-sm px-10 py-5 text-lg font-bold text-brand-sky-600 hover:bg-brand-sky-500/20 hover:border-brand-sky-500 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
                data-gtm="carriers_footer_cta" 
                data-action="quote"
              >
                <FileText className="h-6 w-6" />
                Get Quote
              </a>
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
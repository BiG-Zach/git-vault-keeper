import { Calendar, FileText } from 'lucide-react';
import { Button } from '../components/ui/button';
import NetworkCard, { type Network } from "../components/carriers/NetworkCard";
import CarrierCard, { type Carrier } from "../components/carriers/CarrierCard";
import NetworkFAQ from "../components/carriers/FAQ";
import StickyBottomCTA from "../components/carriers/StickyBottomCTA";
import SEO from "../components/SEO";
import { organizationSchema, localBusinessSchema, serviceSchema, websiteSchema } from "../utils/schema";
import { BRAND } from "../lib/brand";

// PPO Networks Data - SEO Optimized
const NETWORKS: Network[] = [
  {
    name: "Aetna PPO Network",
    logoSrc: "/logos/carriers/aetna.webp",
    description: "Extensive nationwide PPO network with comprehensive provider access and quality healthcare facilities. Serving Florida, Michigan, and North Carolina with over 1.2 million providers.",
    rating: "A (Excellent) AM Best Rated",
    highlights: ["Hospital affiliations: 50,000+ nationwide", "Specialist access: No referrals required", "Preventive care: 100% covered in-network"],
    lookupUrl: "https://www.goperspecta.com/PDN/allstatehealth/public/ProviderSearch/Main"
  },
  {
    name: "Cigna PPO Network", 
    logoSrc: "/logos/carriers/cigna.webp",
    description: "Comprehensive PPO network focused on wellness programs and integrated healthcare solutions. Strong coverage in FL, MI, NC metro areas.",
    rating: "A (Excellent) AM Best Rated",
    highlights: ["Wellness focus: Mental health and telehealth", "Mental health providers: Extensive network", "Telehealth options: 24/7 virtual care"],
    lookupUrl: "https://sarhcpdir.cigna.com/web/public/consumer/directory/search?consumerCode=HDC016"
  },
  {
    name: "First Health PPO Network",
    logoSrc: "/logos/carriers/firsthealth.webp", 
    description: "Established PPO network providing reliable access to quality healthcare providers nationwide with strong local provider relationships.",
    rating: "Aetna Subsidiary Network",
    highlights: ["Geographic coverage: Nationwide reach", "Specialty care: Wide specialist network", "Comprehensive provider network: Quality focused"],
    lookupUrl: "https://providerlocator.firsthealth.com/LocateProvider/SelectNetworkType"
  },
  {
    name: "MultiPlan PPO Network",
    logoSrc: "/logos/carriers/multiplan.webp",
    description: "One of America's oldest PPO networks with extensive provider relationships and competitive rates. Broad coverage across all licensed markets.", 
    rating: "America's Largest Independent Network",
    highlights: ["Broad provider base: Extensive relationships", "Cost-effective solutions: Competitive pricing", "Nationwide coverage: All 50 states"],
    lookupUrl: "https://providerlocator.com/DirectoryDisclaimerPage.aspx?RedirectURL=%2fMembers%2fdefault.aspx%3f"
  },
  {
    name: "UnitedHealthcare PPO Network",
    logoSrc: "/logos/carriers/unitedhealthcare.webp",
    description: "The nation's largest PPO network offering unmatched provider access and innovative healthcare solutions. Premium coverage across all three licensed states.",
    rating: "A+ (Superior) AM Best Rated",
    highlights: ["Largest network: 1.3+ million providers", "Cutting-edge technology: Advanced care coordination", "Comprehensive care options: Full spectrum coverage"],
    lookupUrl: "https://www.uhc.com/find-a-doctor"
  },
  {
    name: "Blue Cross Blue Shield PPO Network", 
    logoSrc: "/logos/carriers/bluecrossblueshield.png",
    description: "Trusted community-focused PPO network with strong local provider relationships and comprehensive coverage throughout Florida, Michigan, and North Carolina.",
    rating: "A (Excellent) AM Best Rated",
    highlights: ["Local community focus: Regional expertise", "Established relationships: Trusted local providers", "Comprehensive provider network: Wide geographic coverage"],
    lookupUrl: "https://provider.bcbs.com/app/public/#/one/city=&state=&postalCode=&country=&insurerCode=BCBSA_I&brandCode=BCBSANDHF&alphaPrefix=&bcbsaProductId"
  }
];

// Insurance Carriers Data
const CARRIERS: Carrier[] = [
  {
    name: "Allstate Health",
    logoSrc: "/logos/carriers/allstate.webp", 
    description: "Flexible health solutions with broad PPO access and member-first service.",
    rating: "A+ (Superior) AM Best Rated",
    specialties: ["Health", "PPO", "Fast issue"]
  },
  {
    name: "UnitedHealthcare",
    logoSrc: "/logos/carriers/unitedhealthcare.webp",
    description: "Nationwide strength with extensive provider access and digital care innovation.",
    rating: "A+ (Superior) AM Best Rated", 
    specialties: ["Health", "PPO", "Largest network"]
  },
  {
    name: "Mutual of Omaha",
    logoSrc: "/logos/carriers/mutualofomaha.webp",
    description: "Financially strong life and health products backed by a century of service.",
    rating: "A+ (Superior) AM Best Rated",
    specialties: ["Life", "Supplemental", "Living benefits"]
  },
  {
    name: "Americo",
    logoSrc: "/logos/carriers/americo.webp",
    description: "Competitive life solutions with simplified underwriting options.",
    rating: "A- (Excellent) AM Best Rated",
    specialties: ["Life", "Annuities"]
  },
  {
    name: "SGIC",
    logoSrc: "/logos/carriers/sgic.webp", 
    description: "Modern health benefits with practical, everyday value.",
    rating: "B++ (Good) AM Best Rated",
    specialties: ["Health", "Regional focus"]
  },
  {
    name: "Aflac",
    logoSrc: "/logos/carriers/aflac.webp",
    description: "Supplemental benefits that pay you cash for covered events.",
    rating: "A+ (Superior) AM Best Rated",
    specialties: ["Supplemental", "Cash payouts"]
  },
  {
    name: "Philadelphia American Life",
    logoSrc: "/logos/carriers/pal.webp",
    description: "Focused health offerings with member-centric support.",
    rating: "A- (Excellent) AM Best Rated",
    specialties: ["Health", "Cost-effective"]
  },
  {
    name: "Blue Cross Blue Shield",
    logoSrc: "/logos/carriers/bluecrossblueshield.png",
    description: "Community-rooted coverage with trusted local provider networks.",
    rating: "A (Excellent) AM Best Rated",
    specialties: ["Health", "PPO", "Nationwide coverage"]
  }
];

export default function CarriersPage() {
  const structuredData = [
    organizationSchema(),
    localBusinessSchema('FL', {
      streetAddress: 'Licensed & Bonded',
      addressLocality: 'Florida, Michigan, North Carolina',
      addressRegion: 'FL, MI, NC',
      postalCode: 'Multi-State',
      addressCountry: 'US'
    }, BRAND.phoneHuman),
    serviceSchema(['PPO Insurance Networks', 'Health Insurance', 'Life Insurance', 'Insurance Broker Services']),
    websiteSchema()
  ];

  return (
    <>
      <SEO 
        title="PPO Insurance Networks FL MI NC | Licensed Broker"
        description="Compare top PPO networks: Aetna, Cigna, UnitedHealthcare, Blue Cross. Licensed broker serving Florida, Michigan, North Carolina. Next-day approval available."
        path="/carriers"
        scripts={structuredData.map(data => ({ type: 'application/ld+json', innerHTML: data }))}
        meta={[
          { name: 'keywords', content: 'PPO insurance networks, Florida health insurance, Michigan insurance broker, North Carolina PPO, Aetna network, Cigna providers, UnitedHealthcare PPO, Blue Cross Blue Shield' },
          { property: 'og:type', content: 'website' },
          { property: 'og:title', content: 'PPO Insurance Networks FL MI NC | Licensed Broker | Bradford Informed Guidance' },
          { property: 'og:description', content: 'Compare top PPO networks: Aetna, Cigna, UnitedHealthcare, Blue Cross. Licensed broker serving Florida, Michigan, North Carolina. Next-day approval available.' },
          { name: 'twitter:title', content: 'PPO Insurance Networks FL MI NC | Licensed Broker' },
          { name: 'twitter:description', content: 'Compare top PPO networks: Aetna, Cigna, UnitedHealthcare, Blue Cross. Licensed broker serving Florida, Michigan, North Carolina.' }
        ]}
      />

      {/* Hero Section */}
      <header className="relative h-screen max-h-[800px] min-h-[600px] flex items-center justify-center overflow-hidden">
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
            className="absolute inset-0 w-full h-full object-cover object-center"
            loading="eager"
          />
        </picture>

        
        {/* Hero Content - Left positioned for maximum conversion impact */}
        <div className="relative z-10 text-left px-4 max-w-6xl mx-auto">
          <div className="w-3/5 ml-10">
            {/* Main Headline - SEO Optimized */}
            <h1 className="text-[42px] font-bold text-white leading-[1.2] mb-4" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
              Trusted PPO Insurance Networks in Florida, Michigan & North Carolina
            </h1>
            
            {/* Subheadline - SEO Enhanced */}
            <h2 className="text-[24px] font-semibold text-white opacity-95 mt-4 mb-5">
              Licensed Broker Connecting You to Top-Rated Carriers Nationwide
            </h2>
            
            {/* Value Proposition - Enhanced */}
            <p className="text-[18px] text-white opacity-90 mt-5 mb-3">
              Access 6 extensive PPO networks • A+ rated carriers • Next-day approval • Licensed & bonded in FL, MI, NC
            </p>
            
            {/* Trust Indicator - Local SEO */}
            <p className="text-[16px] font-medium text-white opacity-85 mt-3">
              20+ Years Combined Experience • Licensed & Bonded Insurance Broker
            </p>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-10 md:py-12">

        {/* PPO Networks Section */}
        <section className="mb-20 relative">
          {/* Section background */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/50 via-big-green-500/5 to-white/50 rounded-3xl" />
          
          <div className="relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-big-navy-500">
                Find Your Doctor in Our Premium PPO Networks
              </h2>
              <p className="text-xl text-big-neutral-800 max-w-3xl mx-auto leading-relaxed">
                Access over 1.3 million healthcare providers nationwide through our trusted PPO network partnerships in Florida, Michigan, and North Carolina.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
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
          <div className="absolute inset-0 bg-gradient-to-r from-white/50 via-big-navy-500/5 to-white/50 rounded-3xl" />
          
          <div className="relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-big-navy-500">
                Our Trusted Insurance Carriers
              </h2>
              <p className="text-xl text-big-neutral-800 max-w-3xl mx-auto leading-relaxed">
                We partner with A+ rated insurance carriers to provide you with comprehensive coverage options and competitive rates across health, life, and supplemental insurance.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
              {CARRIERS.map((carrier) => (
                <CarrierCard key={carrier.name} carrier={carrier} />
              ))}
            </div>
          </div>
        </section>

        {/* Footer CTA Section */}
        <section className="relative rounded-3xl border border-gray-200 bg-white p-12 text-center shadow-sm">
          {/* Clean solid background */}
          <div className="absolute inset-0 bg-big-neutral-50" />
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-big-navy-500">Ready to Find Your Perfect Coverage?</h2>
            <p className="text-lg text-big-neutral-800 max-w-2xl mx-auto mb-8">
              Our licensed brokers are standing by to help you compare options and find the right insurance plan for your needs. Get personalized recommendations from carriers serving Florida, Michigan, and North Carolina.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button
                asChild
                size="lg"
                className="bg-big-navy-500 text-white hover:bg-big-orange-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-big-navy-500 focus-visible:ring-offset-2 disabled:opacity-60 disabled:pointer-events-none px-10 py-5 text-lg transition-all duration-300"
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
                className="border-2 border-big-orange-500 bg-white text-big-orange-500 hover:bg-big-orange-50 hover:border-big-orange-600 px-10 py-5 text-lg transition-all duration-300"
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

            <p className="text-sm text-slate-500 mt-8">
              Licensed and bonded in FL, MI, and NC. Plans to expand nationwide coming soon.
            </p>
          </div>
        </section>
      </main>

      
    </>
  );
}
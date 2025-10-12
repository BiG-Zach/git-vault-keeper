import { CheckCircle, BarChart3, Search, Shield, Phone, Award, Calendar, Download, FileText } from 'lucide-react';

import { Link } from 'react-router-dom';

import PremiumNetworkCard, { type Network } from "../components/carriers/PremiumNetworkCard";

import LuxuryCarrierCard, { type Carrier } from "../components/carriers/LuxuryCarrierCard";


import PremiumCarriersFAQ from "../components/carriers/PremiumCarriersFAQ";

import CarriersFooterCTA from "../components/carriers/CarriersFooterCTA";

import SEO from "../components/SEO";

import { organizationSchema, localBusinessSchema, serviceSchema, websiteSchema } from "../utils/schema";

import { BRAND } from "../lib/brand";



// PPO Networks Data - SEO Optimized

const NETWORKS: Network[] = [

  {

    name: "Aetna PPO Network",

    logoSrc: "/logos/carriers/aetna.webp",

    description: "Extensive nationwide PPO network with comprehensive provider access and quality healthcare facilities. Serving families across Florida, Michigan, North Carolina, Arizona, Texas, and Georgia with over 1.2 million providers.",

    rating: "A (Excellent) AM Best Rated",

    highlights: ["Hospital affiliations: 50,000+ nationwide", "Specialist access: No referrals required", "Preventive care: 100% covered in-network"],

    lookupUrl: "https://www.goperspecta.com/PDN/allstatehealth/public/ProviderSearch/Main"

  },

  {

    name: "Cigna PPO Network", 

    logoSrc: "/logos/carriers/cigna.webp",

    description: "Comprehensive PPO network focused on wellness programs and integrated healthcare solutions. Strong coverage across FL, MI, NC, AZ, TX, and GA metro areas.",

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

    description: "The nation's largest PPO network offering unmatched provider access and innovative healthcare solutions. Premier coverage across all six licensed states.",

    rating: "A+ (Superior) AM Best Rated",

    highlights: ["Largest network: 1.3+ million providers", "Cutting-edge technology: Advanced care coordination", "Comprehensive care options: Full spectrum coverage"],

    lookupUrl: "https://www.uhc.com/find-a-doctor"

  },

  {

    name: "Blue Cross Blue Shield PPO Network", 

    logoSrc: "/logos/carriers/bluecrossblueshield.png",

    description: "Trusted community-focused PPO network with strong local provider relationships and comprehensive coverage throughout Florida, Michigan, North Carolina, Arizona, Texas, and Georgia.",

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

    description: "Known for rapid underwriting and same-week approvals. Ideal for families needing immediate coverage with competitive PPO rates and no waiting periods for pre-existing conditions after 12 months.",

    rating: "A+ (Superior) AM Best Rated",

    specialties: ["Health", "PPO", "Fast issue"]

  },

  {

    name: "UnitedHealthcare",

    logoSrc: "/logos/carriers/unitedhealthcare.webp",

    description: "America's largest PPO network with 1.3+ million providers. Features Rally Health app for wellness tracking, virtual visits included, and exceptional out-of-state coverage for snowbirds and frequent travelers.",

    rating: "A+ (Superior) AM Best Rated",

    specialties: ["Health", "PPO", "Largest network"]

  },

  {

    name: "Mutual of Omaha",

    logoSrc: "/logos/carriers/mutualofomaha.webp",

    description: "Industry leader in living benefits riders, allowing early access to death benefit for chronic, critical, or terminal illness. Perfect for layering life insurance with long-term care protection without separate policies.",

    rating: "A+ (Superior) AM Best Rated",

    specialties: ["Life", "Supplemental", "Living benefits"]

  },

  {

    name: "Americo",

    logoSrc: "/logos/carriers/americo.webp",

    description: "Simplified issue whole life insurance with no medical exams for applicants aged 50-85. Guaranteed acceptance final expense plans provide dignified funeral coverage regardless of health history.",

    rating: "A- (Excellent) AM Best Rated",

    specialties: ["Life", "Annuities"]

  },

  {

    name: "SGIC",

    logoSrc: "/logos/carriers/sgic.webp",

    description: "Budget-conscious major medical with lower premiums than national carriers. Strong regional presence in Southern states with excellent hospital networks in FL, GA, and TX metro areas.",

    rating: "B++ (Good) AM Best Rated",

    specialties: ["Health", "Regional focus"]

  },

  {

    name: "Aflac",

    logoSrc: "/logos/carriers/aflac.webp",

    description: "Cash indemnity plans paying directly to you—not the hospital. Covers gaps in major medical like deductibles, copays, and lost income during hospitalization. No network restrictions.",

    rating: "A+ (Superior) AM Best Rated",

    specialties: ["Supplemental", "Cash payouts"]

  },

  {

    name: "Philadelphia American Life",

    logoSrc: "/logos/carriers/pal.webp",

    description: "Underwriting flexibility for applicants with pre-existing conditions or complex medical histories. Offers modified plans when other carriers decline, ensuring coverage accessibility for high-risk individuals.",

    rating: "A- (Excellent) AM Best Rated",

    specialties: ["Health", "Cost-effective"]

  },

  {

    name: "Blue Cross Blue Shield",

    logoSrc: "/logos/carriers/bluecrossblueshield.png",

    description: "State-specific plans with deep local provider relationships in each licensed market. Known for transparent pricing, strong hospital negotiations, and community-focused member advocacy programs.",

    rating: "A (Excellent) AM Best Rated",

    specialties: ["Health", "PPO", "Nationwide coverage"]

  }

];



export default function CarriersPage() {

  const structuredData = [

    organizationSchema(),

    localBusinessSchema('FL', {

      streetAddress: '4200 W Cypress St',

      addressLocality: 'Tampa',

      addressRegion: 'FL',

      postalCode: '33607',

      addressCountry: 'US'

    }, BRAND.phoneHuman),

    serviceSchema(['PPO Insurance Networks', 'Health Insurance', 'Life Insurance', 'Insurance Broker Services']),

    websiteSchema()

  ];



  return (

    <>

      <SEO 

        title="PPO Insurance Networks - 6 States Licensed Broker | 15+ A-Rated Carriers"

        description="Compare 15+ A-rated carriers across FL, MI, NC, AZ, TX, GA. Best Insurance Group partner with 24-hour response guarantee. Licensed broker since 2017."

        path="/carriers"

        scripts={structuredData.map(data => ({ type: 'application/ld+json', innerHTML: data }))}

        meta={[

          { name: 'keywords', content: 'PPO insurance networks, multi-state insurance broker, Florida Michigan North Carolina Arizona Texas Georgia, Best Insurance Group partner, A-rated carriers, licensed broker' },

          { property: 'og:type', content: 'website' },

          { property: 'og:title', content: 'PPO Insurance Networks - 6 States Licensed Broker | 15+ A-Rated Carriers | Bradford Informed Guidance' },

          { property: 'og:description', content: 'Compare 15+ A-rated carriers across FL, MI, NC, AZ, TX, GA. Best Insurance Group partner with 24-hour response guarantee. Licensed broker since 2017.' },

          { name: 'twitter:title', content: 'PPO Insurance Networks - 6 States Licensed Broker | 15+ A-Rated Carriers' },

          { name: 'twitter:description', content: 'Compare 15+ A-rated carriers across FL, MI, NC, AZ, TX, GA with 24-hour response guarantee.' }

        ]}

      />

      {/* Sticky Section Navigation */}

      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm hidden lg:block">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex items-center justify-center gap-8 py-3">

            <a href="#ppo-networks" className="text-sm font-semibold text-slate-700 hover:text-emerald-600 transition-colors duration-200 flex items-center gap-2">

              <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>

              PPO Networks

            </a>

            <a href="#insurance-carriers" className="text-sm font-semibold text-slate-700 hover:text-cyan-600 transition-colors duration-200 flex items-center gap-2">

              <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>

              Insurance Carriers

            </a>

            <a href="/contact" className="text-sm font-semibold bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-4 py-2 rounded-full hover:shadow-lg transition-all duration-200">

              Get Started

            </a>

          </div>

        </div>

      </nav>

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

        {/* Dark gradient overlay for better text contrast */}

        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40 z-[5]" />



        

        {/* Hero Content - Strategically positioned for maximum visual impact */}

        <div className="relative z-10 w-full px-6 max-w-7xl mx-auto">

          <div className="text-center max-w-5xl mx-auto pt-12 relative">

            {/* Premium content container */}

            <div className="relative z-10 px-4 sm:px-6 md:px-8 py-8 md:py-12">



              {/* Top accent line */}

              <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto mb-6 md:mb-8 rounded-full"></div>



              {/* Main Headlines - Professional and factual */}

              <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 md:mb-6 tracking-tight"

                  style={{

                    textShadow: '0 2px 4px rgba(0,0,0,0.8)'

                  }}>

                <span className="block">

                  Licensed Insurance Broker with

                </span>

                <span className="block bg-gradient-to-r from-emerald-300 via-cyan-200 to-teal-300 bg-clip-text text-transparent">

                  Comprehensive Carrier Access

                </span>

              </h1>



              {/* Subheadline - Professional credentials */}

              <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-white mt-4 md:mt-6 mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed"

                  style={{

                    textShadow: '0 2px 4px rgba(0,0,0,0.8)'

                  }}>

                Professional guidance across FL, MI, NC, AZ, TX & GA

              </h2>



              {/* Factual Value Proposition */}

              <div className="mt-4 md:mt-6 mb-6 md:mb-8">

                <p className="text-sm sm:text-base md:text-lg text-white font-medium max-w-3xl mx-auto leading-relaxed"

                   style={{

                     textShadow: '0 2px 4px rgba(0,0,0,0.8)'

                   }}>

                  Licensed analysis shows qualified applicants typically save up to 50% compared to marketplace rates when properly matched. Access to 15+ A-rated carriers with independent, unbiased recommendations.

                </p>

              </div>





              {/* Professional trust indicators */}

              <div className="flex flex-wrap justify-center gap-3 md:gap-4 mt-6 md:mt-8 text-xs sm:text-sm text-white">

                {/* Primary credential - Most prominent */}

                <div className="flex items-center gap-2 px-4 md:px-5 py-2.5 md:py-3 rounded-full bg-white/20 backdrop-blur-md border-2 border-white/40 shadow-lg">

                  <div className="w-2.5 h-2.5 bg-emerald-400 rounded-full"></div>

                  <span className="font-semibold">6-State Licensed Broker</span>

                </div>

                <div className="flex items-center gap-2 px-3 md:px-4 py-2 md:py-2.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/30">

                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>

                  <span>15+ A-Rated Carriers</span>

                </div>

                <div className="flex items-center gap-2 px-3 md:px-4 py-2 md:py-2.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/30">

                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>

                  <span>Independent Analysis</span>

                </div>

              </div>

            </div>

            

          </div>

        </div>

      </header>



      {/* Trust Signals Bar */}
      <section className="relative py-6 bg-gradient-to-r from-slate-100 to-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 text-sm">
            <div className="flex items-center gap-2 text-slate-700">
              <Shield className="w-5 h-5 text-emerald-600" />
              <span><strong>Licensed & Bonded</strong> in 6 States</span>
            </div>
            <div className="flex items-center gap-2 text-slate-700">
              <Award className="w-5 h-5 text-emerald-600" />
              <span><strong>8+ Years</strong> Experience</span>
            </div>
            <div className="flex items-center gap-2 text-slate-700">
              <CheckCircle className="w-5 h-5 text-emerald-600" />
              <span><strong>A+ Rated</strong> Carriers Only</span>
            </div>
            <div className="flex items-center gap-2 text-slate-700">
              <Phone className="w-5 h-5 text-emerald-600" />
              <span><strong>15-20 Min</strong> Consultations</span>
            </div>
          </div>
        </div>
      </section>

      {/* PPO Networks Section - Light Theme */}

      <section id="ppo-networks" className="relative py-16 md:py-24 overflow-hidden" aria-labelledby="networks-heading">

        {/* Premium light background */}

        <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-white">

          {/* Radial dot pattern */}

          <div 

            className="absolute inset-0 opacity-40"

            style={{

              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(34, 197, 94, 0.08) 1px, transparent 0)`,

              backgroundSize: '32px 32px'

            }}

          />

          {/* Gradient overlays */}

          <div className="absolute inset-0 bg-gradient-to-r from-emerald-50/50 via-transparent to-cyan-50/50" />

          <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-100/20 rounded-full blur-3xl" />

          <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-100/20 rounded-full blur-3xl" />

        </div>

        

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-16 relative">

            {/* Decorative background glow */}

            <div className="absolute inset-0 -z-10">

              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-gradient-radial from-emerald-500/15 via-emerald-500/5 to-transparent rounded-full blur-3xl opacity-60" />

              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-radial from-cyan-500/10 via-cyan-500/3 to-transparent rounded-full blur-2xl opacity-40" />

            </div>



            {/* Floating decorative elements */}

            <div className="absolute -top-20 left-1/4 w-32 h-32 bg-gradient-to-br from-emerald-400/15 to-cyan-400/15 rounded-full blur-3xl opacity-50" />

            <div className="absolute -top-10 right-1/3 w-24 h-24 bg-gradient-to-br from-cyan-400/10 to-emerald-400/10 rounded-full blur-2xl opacity-30" />

            

            {/* Premium badge with enhanced design */}

            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-50 via-white to-cyan-50 rounded-full px-8 py-4 mb-12 border border-emerald-200/50 backdrop-blur-sm shadow-2xl relative overflow-hidden">

              {/* Badge glow effect */}

              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-transparent to-cyan-500/10 rounded-full" />

              

              {/* Accent dots */}

              <div className="w-3 h-3 bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full shadow-lg" />

              <span className="text-emerald-800 font-bold text-sm tracking-wider relative z-10">PREMIUM PPO NETWORKS</span>

              <div className="w-3 h-3 bg-gradient-to-r from-cyan-500 to-cyan-400 rounded-full shadow-lg" />

              

              {/* Shimmer effect */}

              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 animate-shimmer" />

            </div>

            

            {/* Enhanced main heading with multiple gradient layers */}

            <h2 id="networks-heading" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 md:mb-8 text-slate-900 leading-tight relative">

              <span className="block relative">

                Find Your Doctor in Our

                <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500/10 via-transparent to-cyan-500/10 rounded-lg blur-xl opacity-60" />

              </span>

              <span className="block relative mt-2">

                <span className="relative inline-block">

                  <span className="bg-gradient-to-r from-cyan-500 via-sky-400 to-teal-500 bg-clip-text text-transparent font-black tracking-tight">

                    Exclusive Network Partners

                  </span>

                  {/* Multiple gradient underlayers for depth */}

                  <div className="absolute -bottom-4 left-0 right-0 h-2 bg-gradient-to-r from-emerald-500/80 via-emerald-400/60 to-cyan-500/80 rounded-full opacity-60 blur-sm" />

                  <div className="absolute -bottom-3 left-4 right-4 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full opacity-80" />

                  


                </span>

              </span>

            </h2>

            

            {/* Enhanced description with premium styling */}

            <div className="max-w-5xl mx-auto relative">

              <p className="text-xl sm:text-2xl lg:text-3xl text-slate-700 leading-relaxed mb-4 font-medium">

                Access over <span className="text-emerald-600 font-bold bg-emerald-50 px-2 py-1 rounded-md">1.3 million</span> healthcare providers nationwide through our 

                <span className="relative inline-block text-slate-900 font-bold mx-2">

                  trusted PPO network partnerships

                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full opacity-70" />

                </span>.

              </p>

              <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed">

                <span className="inline-flex items-center gap-2 bg-slate-100 px-3 py-1 rounded-full">

                  <div className="w-2 h-2 bg-emerald-500 rounded-full" />

                  <span className="font-semibold text-slate-800">Licensed and serving</span>

                </span>

                <span className="mx-2 font-bold text-slate-900">Florida, Michigan, North Carolina, Arizona, Texas, and Georgia</span>

                with <span className="text-emerald-600 font-semibold">excellence</span>.

              </p>

            </div>



            {/* Decorative bottom elements */}

            <div className="flex justify-center items-center gap-8 mt-12">

              <div className="hidden md:block w-32 h-0.5 bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />

              <div className="flex items-center gap-3">

                <div className="w-4 h-4 bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full shadow-lg" />

                <div className="w-3 h-3 bg-gradient-to-r from-cyan-500 to-cyan-400 rounded-full shadow-lg" />

                <div className="w-4 h-4 bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full shadow-lg" />

              </div>

              <div className="hidden md:block w-32 h-0.5 bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />

            </div>

          </div>

          

          <div className="max-w-3xl mx-auto text-center mb-12">

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">

              Access to the Nation's Top Carriers

            </h2>

            <p className="mt-4 text-lg md:text-xl text-slate-600 leading-relaxed">

              My Best Insurance Group partnership since 2020 gives you three critical advantages: (1) <strong>Savings for Qualified Applicants</strong> - if you're healthy and don't qualify for ACA subsidies, private health plans can save up to 50% compared to unsubsidized marketplace insurance, (2) <strong>Carrier Access</strong> - direct relationships with underwriting desks mean faster approvals and priority case reviews, and (3) <strong>Claims Advocacy</strong> - dedicated support team intervenes when carriers delay or deny legitimate claims. I compare all options across Florida, Michigan, North Carolina, Arizona, Texas, and Georgia to find your best fit.

            </p>

            <div className="mt-8 p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border-2 border-blue-200 shadow-sm">
              <h4 className="font-bold text-blue-900 mb-4 text-lg flex items-center gap-2">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">?</div>
                Understanding Networks vs. Carriers
              </h4>
              <div className="grid md:grid-cols-2 gap-6 text-sm">
                <div className="bg-white rounded-lg p-4 border border-blue-100">
                  <h5 className="font-bold text-blue-800 mb-2">PPO Network (Who You See)</h5>
                  <p className="text-slate-700 leading-relaxed">
                    A <strong>PPO Network</strong> is the directory of doctors, hospitals, and specialists you can visit. Think of it as the "provider list." Examples: Aetna PPO, Cigna PPO, UnitedHealthcare PPO. You search these networks to verify your doctor is in-network.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-cyan-100">
                  <h5 className="font-bold text-cyan-800 mb-2">Insurance Carrier (Who Pays)</h5>
                  <p className="text-slate-700 leading-relaxed">
                    An <strong>Insurance Carrier</strong> is the company that underwrites your policy, collects premiums, and pays claims. Examples: Allstate Health, Blue Cross Blue Shield. They issue your insurance card and process your medical bills.
                  </p>
                </div>
              </div>
              <p className="mt-4 text-slate-600 text-sm italic">
                <strong>Key Insight:</strong> Multiple insurance carriers can use the same PPO network. For example, both Allstate Health and Philadelphia American Life might offer plans using the Aetna PPO Network—but with different premiums, deductibles, and benefits.
              </p>
            </div>

            <div className="mt-8 p-6 bg-emerald-50 rounded-xl border border-emerald-200">
              <h4 className="font-semibold text-emerald-900 mb-3">Related Information</h4>
              <div className="flex flex-wrap gap-4 text-sm">
                <Link to="/health-insurance" className="text-emerald-600 hover:text-emerald-700 font-medium">
                  → Health Insurance Plans & Coverage
                </Link>
                <Link to="/process" className="text-emerald-600 hover:text-emerald-700 font-medium">
                  → My 4-Step Process
                </Link>
                <Link to="/contact" className="text-emerald-600 hover:text-emerald-700 font-medium">
                  → Schedule Free Consultation
                </Link>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm text-slate-600">

              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 border border-emerald-100">Florida - ACA and PPO depth</span>

              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 border border-emerald-100">Michigan - Major medical and Medicare solutions</span>

              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 border border-emerald-100">North Carolina - BlueCross BlueShield and UHC strength</span>

              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 border border-emerald-100">Arizona - Multi-carrier network diversity</span>

              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 border border-emerald-100">Texas - Enterprise-level plans for growing families</span>

              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 border border-emerald-100">Georgia - Regional PPO and small group solutions</span>

            </div>

          </div>



          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">

            {NETWORKS.map((network, index) => (

              <PremiumNetworkCard key={network.name} network={network} index={index} />

            ))}

          </div>

        </div>

      </section>

      {/* Educational Content Section - Information Gain Enhancement */}
      <section className="relative py-16 overflow-hidden bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-emerald-100 rounded-full px-6 py-3 mb-8">
              <div className="w-2 h-2 bg-emerald-500 rounded-full" />
              <span className="text-emerald-700 font-bold text-sm">EXPERT GUIDANCE</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4 md:mb-6">
              How to Choose the Right PPO Network
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-4">
              Not all PPO networks are created equal. Here's my professional guidance on selecting the network that works best for your specific needs across FL, MI, NC, AZ, TX, and GA.
            </p>
          </div>

          {/* Educational Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Network Selection Criteria */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200">
              <h3 className="text-xl md:text-2xl font-semibold text-slate-900 mb-4 md:mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                </div>
                Network Selection Criteria
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Provider Density & Geographic Coverage</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    I verify that your primary care physician, specialists, and preferred hospitals are included in each network. This is especially important when you live near state borders or travel frequently between our licensed states.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Referral Requirements</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    PPO networks don't require referrals, but some plans within networks have different specialist access rules. I explain exactly what each plan allows before you enroll.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Network Stability & Provider Relations</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Best Insurance Group provides proprietary network adequacy reports showing provider density, hospital quality ratings, and network stability metrics. This data—unavailable to individual agents or consumers—reveals which networks have the strongest provider relationships and lowest out-of-network claim rates in your zip code.
                  </p>
                </div>
              </div>
            </div>

            {/* Decision Framework */}
            <div className="bg-slate-900 rounded-2xl p-6 md:p-8 text-white">
              <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-white" />
                </div>
                My Decision Framework
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center text-sm font-bold mt-0.5">1</div>
                  <div>
                    <p className="font-semibold text-emerald-300">Doctor Network Check</p>
                    <p className="text-slate-300 text-sm">I verify your current doctors are covered and help you find new ones if needed.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center text-sm font-bold mt-0.5">2</div>
                  <div>
                    <p className="font-semibold text-emerald-300">Hospital Access Analysis</p>
                    <p className="text-slate-300 text-sm">I ensure your preferred hospitals and emergency facilities are in-network.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center text-sm font-bold mt-0.5">3</div>
                  <div>
                    <p className="font-semibold text-emerald-300">Cost-Benefit Comparison</p>
                    <p className="text-slate-300 text-sm">I compare network costs against your usage patterns to find the best value.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center text-sm font-bold mt-0.5">4</div>
                  <div>
                    <p className="font-semibold text-emerald-300">Multi-State Consideration</p>
                    <p className="text-slate-300 text-sm">If you travel or have family across our 6 licensed states, I ensure network continuity.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Provider Search Tips */}
          <div className="mt-12 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl p-6 md:p-8 text-white">
            <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">Provider Search Strategies & Best Practices</h3>

            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <Search className="w-5 h-5" />
                  Search Techniques
                </h4>
                <ul className="space-y-2 text-sm text-emerald-100">
                  <li>• Use multiple search terms (doctor name, practice name, hospital affiliation)</li>
                  <li>• Verify provider is accepting new patients</li>
                  <li>• Check if provider has moved practices recently</li>
                  <li>• Confirm office locations match your needs</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Verification Steps
                </h4>
                <ul className="space-y-2 text-sm text-emerald-100">
                  <li>• Call provider office to confirm network participation</li>
                  <li>• Ask about any restrictions or limitations</li>
                  <li>• Verify effective dates of network participation</li>
                  <li>• Get confirmation of coverage for your specific plan</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  When I Help
                </h4>
                <ul className="space-y-2 text-sm text-emerald-100">
                  <li>• Network directories show conflicting information</li>
                  <li>• Provider office gives different coverage details</li>
                  <li>• You need specialists in multiple states</li>
                  <li>• Network adequacy concerns for your conditions</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Decision Support Checklist */}
          <div className="mt-12 bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 md:p-8 shadow-lg border-2 border-slate-200">
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <CheckCircle className="w-7 h-7 text-emerald-600" />
              Your Pre-Consultation Checklist
            </h3>

            <p className="text-slate-700 mb-6">
              Gather this information before our call to maximize our time together and ensure accurate recommendations:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-bold text-slate-900 mb-3 pb-2 border-b-2 border-emerald-200">Doctor & Provider Information</h4>
                <div className="space-y-2">
                  <label className="flex items-start gap-2 text-sm">
                    <input type="checkbox" className="mt-0.5 text-emerald-600" disabled />
                    <span className="text-slate-700">Primary care physician name and practice</span>
                  </label>
                  <label className="flex items-start gap-2 text-sm">
                    <input type="checkbox" className="mt-0.5 text-emerald-600" disabled />
                    <span className="text-slate-700">Specialist names (if seeing regularly)</span>
                  </label>
                  <label className="flex items-start gap-2 text-sm">
                    <input type="checkbox" className="mt-0.5 text-emerald-600" disabled />
                    <span className="text-slate-700">Preferred hospital(s) for emergency/major care</span>
                  </label>
                  <label className="flex items-start gap-2 text-sm">
                    <input type="checkbox" className="mt-0.5 text-emerald-600" disabled />
                    <span className="text-slate-700">Current prescriptions (names & dosages)</span>
                  </label>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-bold text-slate-900 mb-3 pb-2 border-b-2 border-cyan-200">Coverage & Financial Details</h4>
                <div className="space-y-2">
                  <label className="flex items-start gap-2 text-sm">
                    <input type="checkbox" className="mt-0.5 text-cyan-600" disabled />
                    <span className="text-slate-700">Household income (for subsidy check)</span>
                  </label>
                  <label className="flex items-start gap-2 text-sm">
                    <input type="checkbox" className="mt-0.5 text-cyan-600" disabled />
                    <span className="text-slate-700">Current coverage end date (if applicable)</span>
                  </label>
                  <label className="flex items-start gap-2 text-sm">
                    <input type="checkbox" className="mt-0.5 text-cyan-600" disabled />
                    <span className="text-slate-700">Monthly budget for premiums</span>
                  </label>
                  <label className="flex items-start gap-2 text-sm">
                    <input type="checkbox" className="mt-0.5 text-cyan-600" disabled />
                    <span className="text-slate-700">Deductible preference (low vs. high)</span>
                  </label>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-emerald-50 rounded-lg border border-emerald-200">
              <p className="text-sm text-slate-700">
                <strong className="text-emerald-900">Pro Tip:</strong> If you don't have all this information, that's okay! I'll help you gather it during our consultation. The more you have ready, the faster we can compare options and find your best match.
              </p>
            </div>
          </div>

          {/* Real-World Decision Framework */}
          <div className="mt-12 bg-white rounded-2xl p-6 md:p-8 shadow-lg border-2 border-emerald-200">
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-6">Real-World Comparison: How I Match Clients to Networks</h3>

            <div className="space-y-6">
              <div className="border-l-4 border-emerald-500 pl-4">
                <h4 className="font-bold text-slate-900 mb-2">Example 1: Young Family in Tampa, FL</h4>
                <p className="text-slate-700 text-sm mb-2"><strong>Needs:</strong> Pediatrician visits, maternity planning, affordable premiums</p>
                <p className="text-slate-700 text-sm mb-2"><strong>My Recommendation:</strong> Blue Cross Blue Shield PPO with Allstate Health carrier</p>
                <p className="text-slate-600 text-sm italic">Why: BCBS network includes all Tampa General, AdventHealth, and BayCare pediatricians. Allstate offers 30% lower premiums than UnitedHealthcare for same network. Maternity covered with $3,500 deductible vs. $6,000 with national carriers.</p>
              </div>

              <div className="border-l-4 border-cyan-500 pl-4">
                <h4 className="font-bold text-slate-900 mb-2">Example 2: Self-Employed Professional in Charlotte, NC</h4>
                <p className="text-slate-700 text-sm mb-2"><strong>Needs:</strong> Specialist access (cardiologist), low deductible, national travel coverage</p>
                <p className="text-slate-700 text-sm mb-2"><strong>My Recommendation:</strong> UnitedHealthcare PPO with UHC carrier</p>
                <p className="text-slate-600 text-sm italic">Why: UHC network includes Sanger Heart & Vascular Institute (top-rated cardiology). National coverage for business travel to Texas and Arizona. Rally Health app included for wellness tracking. Higher premium justified by specialist quality and travel flexibility.</p>
              </div>

              <div className="border-l-4 border-emerald-500 pl-4">
                <h4 className="font-bold text-slate-900 mb-2">Example 3: Retiree (Age 62) in Phoenix, AZ</h4>
                <p className="text-slate-700 text-sm mb-2"><strong>Needs:</strong> Bridge to Medicare, chronic condition management, prescription coverage</p>
                <p className="text-slate-700 text-sm mb-2"><strong>My Recommendation:</strong> Aetna PPO with Philadelphia American Life carrier</p>
                <p className="text-slate-600 text-sm italic">Why: PAL accepts pre-existing conditions without rate-ups. Aetna network covers Mayo Clinic Arizona and Banner Health (both critical for ongoing care). 3-year rate lock available. Plan designed to terminate seamlessly at Medicare eligibility (age 65).</p>
              </div>
            </div>
          </div>

          {/* Strategic CTA after Educational Content */}
          <div className="mt-12 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl p-6 md:p-8 text-center shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Find Your Perfect Network Match?</h3>
            <p className="text-emerald-50 text-base md:text-lg mb-6 max-w-2xl mx-auto">
              I'll analyze your doctors, budget, and coverage needs to recommend the optimal carrier-network combination for your situation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://calendly.com/bradfordinformedguidance"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-emerald-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-emerald-50 transition-all duration-300 hover:scale-105 shadow-lg w-full sm:w-auto justify-center"
              >
                <Phone className="w-5 h-5" />
                Schedule Free Consultation
              </a>
              <a
                href={`tel:${BRAND.phoneTel}`}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all duration-300 hover:scale-105 w-full sm:w-auto justify-center"
              >
                <Phone className="w-5 h-5" />
                Call {BRAND.phoneHuman}
              </a>
            </div>
            <p className="text-emerald-100 text-sm mt-4">
              ⚡ Most consultations completed in 15-20 minutes  •  📞 No obligation  •  🎯 Personalized recommendations
            </p>
          </div>
        </div>
      </section>

      {/* Lead Qualification Widget */}
      <section className="relative py-12 bg-gradient-to-br from-emerald-50 to-cyan-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border-2 border-emerald-200">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 text-center">Which Coverage Are You Looking For?</h3>
            <p className="text-slate-600 text-center mb-6">Choose your primary need so I can prepare relevant options for your consultation:</p>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <a
                href="https://calendly.com/bradfordinformedguidance"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 bg-gradient-to-br from-emerald-50 to-white border-2 border-emerald-200 rounded-xl hover:border-emerald-400 hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold text-slate-900 mb-2">Health Insurance</h4>
                <p className="text-sm text-slate-600 mb-3">PPO plans, ACA marketplace, private health</p>
                <span className="text-emerald-600 font-semibold text-sm">Schedule Consultation →</span>
              </a>

              <a
                href="https://calendly.com/bradfordinformedguidance"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 bg-gradient-to-br from-cyan-50 to-white border-2 border-cyan-200 rounded-xl hover:border-cyan-400 hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold text-slate-900 mb-2">Life Insurance</h4>
                <p className="text-sm text-slate-600 mb-3">Term, whole life, living benefits riders</p>
                <span className="text-cyan-600 font-semibold text-sm">Schedule Consultation →</span>
              </a>

              <a
                href="https://calendly.com/bradfordinformedguidance"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 bg-gradient-to-br from-emerald-50 to-white border-2 border-emerald-200 rounded-xl hover:border-emerald-400 hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold text-slate-900 mb-2">Not Sure Yet</h4>
                <p className="text-sm text-slate-600 mb-3">Explore all options, compare coverage</p>
                <span className="text-emerald-600 font-semibold text-sm">Schedule Consultation →</span>
              </a>
            </div>

            <div className="text-center pt-4 border-t border-slate-200">
              <p className="text-sm text-slate-600 mb-3">Prefer to talk first?</p>
              <a
                href={`tel:${BRAND.phoneTel}`}
                className="inline-flex items-center gap-2 text-emerald-600 font-bold hover:text-emerald-700 transition-colors"
              >
                <Phone className="w-4 h-4" />
                Call {BRAND.phoneHuman} for immediate assistance
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* State Market Insights Section */}
      <section className="relative py-16 md:py-20 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Dark background with subtle pattern */}
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-cyan-500/20 rounded-full px-6 py-3 mb-8">
              <BarChart3 className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-300 font-bold text-sm">STATE MARKET INTELLIGENCE</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Local Market Insights Across
              <span className="block gradient-text-luxury">Our Six Licensed States</span>
            </h2>

            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Understanding state-specific carrier dynamics, hospital networks, and pricing trends helps you make informed decisions based on where you live.
            </p>
          </div>

          {/* State Insights Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Florida */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-emerald-400/30 transition-colors">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">FL</div>
                Florida
              </h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li><strong className="text-emerald-400">Top Networks:</strong> UHC, Aetna, BCBS</li>
                <li><strong className="text-emerald-400">Major Hospitals:</strong> Mayo, Cleveland Clinic, Baptist Health, AdventHealth</li>
                <li><strong className="text-emerald-400">Pricing:</strong> Competitive ACA marketplace, strong private plan options</li>
                <li><strong className="text-emerald-400">Specialty:</strong> Retiree bridge-to-Medicare plans, snowbird coverage</li>
              </ul>
            </div>

            {/* Michigan */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-cyan-400/30 transition-colors">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <div className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">MI</div>
                Michigan
              </h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li><strong className="text-cyan-400">Top Networks:</strong> BCBSM (dominant), UHC, Aetna</li>
                <li><strong className="text-cyan-400">Major Hospitals:</strong> Henry Ford, Beaumont, U of M Health, Spectrum</li>
                <li><strong className="text-cyan-400">Pricing:</strong> Higher premiums vs. national average, strong employer market</li>
                <li><strong className="text-cyan-400">Specialty:</strong> Auto industry retiree coordination, extended COBRA options</li>
              </ul>
            </div>

            {/* North Carolina */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-emerald-400/30 transition-colors">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">NC</div>
                North Carolina
              </h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li><strong className="text-emerald-400">Top Networks:</strong> BCBSNC (largest), UHC, Aetna</li>
                <li><strong className="text-emerald-400">Major Hospitals:</strong> Duke, UNC Health, Atrium, Wake Forest Baptist</li>
                <li><strong className="text-emerald-400">Pricing:</strong> Competitive Triangle/Charlotte markets, limited rural options</li>
                <li><strong className="text-emerald-400">Specialty:</strong> Academic medical center access, Research Triangle professionals</li>
              </ul>
            </div>

            {/* Arizona */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-cyan-400/30 transition-colors">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <div className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">AZ</div>
                Arizona
              </h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li><strong className="text-cyan-400">Top Networks:</strong> UHC, Aetna, BCBS Arizona</li>
                <li><strong className="text-cyan-400">Major Hospitals:</strong> Mayo Clinic, Banner Health, HonorHealth, Dignity Health</li>
                <li><strong className="text-cyan-400">Pricing:</strong> Moderate premiums, excellent private plan savings</li>
                <li><strong className="text-cyan-400">Specialty:</strong> Retiree-focused plans, winter resident coverage</li>
              </ul>
            </div>

            {/* Texas */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-emerald-400/30 transition-colors">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">TX</div>
                Texas
              </h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li><strong className="text-emerald-400">Top Networks:</strong> UHC, Aetna, BCBS Texas</li>
                <li><strong className="text-emerald-400">Major Hospitals:</strong> MD Anderson, Methodist, Baylor Scott & White, Texas Health</li>
                <li><strong className="text-emerald-400">Pricing:</strong> Most competitive pricing nationwide for healthy applicants</li>
                <li><strong className="text-emerald-400">Specialty:</strong> Self-employed/contractor plans, large family coverage</li>
              </ul>
            </div>

            {/* Georgia */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-cyan-400/30 transition-colors">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <div className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">GA</div>
                Georgia
              </h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li><strong className="text-cyan-400">Top Networks:</strong> UHC, Aetna, Ambetter (regional)</li>
                <li><strong className="text-cyan-400">Major Hospitals:</strong> Emory, Piedmont, Northside, WellStar</li>
                <li><strong className="text-cyan-400">Pricing:</strong> Moderate premiums in Atlanta metro, budget options in rural areas</li>
                <li><strong className="text-cyan-400">Specialty:</strong> Small business group plans, regional carrier expertise</li>
              </ul>
            </div>
          </div>

          {/* Actionable Insight */}
          <div className="mt-12 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-400/30 rounded-xl p-6 md:p-8">
            <h4 className="text-xl font-bold text-white mb-4">How I Use This Intelligence</h4>
            <p className="text-slate-200 leading-relaxed mb-6">
              During your consultation, I reference proprietary network adequacy reports from Best Insurance Group that show provider density, hospital quality ratings, and claims payment speed for your specific zip code. This data reveals which carriers offer the strongest networks in your area—information unavailable to individual consumers or direct-to-carrier shoppers. I combine this intelligence with your specific doctors, budget, and health needs to recommend the optimal carrier-network combination.
            </p>

            {/* Inline CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 border-t border-white/20">
              <a
                href="https://calendly.com/bradfordinformedguidance"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-full font-bold hover:bg-emerald-50 transition-all duration-300 hover:scale-105 shadow-lg w-full sm:w-auto justify-center"
              >
                Get Your State-Specific Analysis
              </a>
              <a
                href={`tel:${BRAND.phoneTel}`}
                className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-bold hover:bg-white/10 transition-all duration-300 w-full sm:w-auto justify-center"
              >
                <Phone className="w-4 h-4" />
                {BRAND.phoneHuman}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Carriers Section - Dark Theme */}

      <section id="insurance-carriers" className="relative py-16 md:py-24 overflow-hidden" aria-labelledby="carriers-heading">

        {/* Dark luxury background */}

        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">

          {/* Pattern overlay */}

          <div 

            className="absolute inset-0 opacity-20"

            style={{

              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)`,

              backgroundSize: '20px 20px'

            }}

          />

          {/* Gradient accents */}

          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-transparent to-cyan-500/5" />

          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />

          <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

        </div>

        

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-16">

            {/* Premium badge */}

            <div className="inline-flex items-center gap-2 bg-emerald-500/20 rounded-full px-6 py-3 mb-8">

              <div className="w-2 h-2 bg-emerald-400 rounded-full" />

              <span className="text-emerald-300 font-bold text-sm">A+ Rated Insurance Carriers</span>

            </div>

            

            <h2 id="carriers-heading" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-white">

              My Trusted

              <span className="block gradient-text-luxury">Insurance Partners</span>

            </h2>

            <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed px-4">

              As your licensed health and life insurance broker, I partner exclusively with A+ rated insurance carriers to provide you with comprehensive coverage options, competitive rates, and reliable claim processing across health, life, and supplemental insurance.

            </p>

          </div>

          

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

            {CARRIERS.map((carrier, index) => (

              <LuxuryCarrierCard key={carrier.name} carrier={carrier} index={index} />

            ))}

          </div>

        </div>

      </section>



      {/* Downloadable Resources / Lead Magnets */}
      <section className="relative py-16 bg-gradient-to-br from-white to-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-emerald-100 rounded-full px-6 py-3 mb-6">
              <Download className="w-5 h-5 text-emerald-600" />
              <span className="text-emerald-700 font-bold text-sm">FREE RESOURCES</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Helpful Guides & Resources
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Download these free resources to help you make informed coverage decisions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Resource 1 */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-slate-200 hover:border-emerald-300 transition-all duration-300 hover:shadow-xl">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">PPO Network Comparison Guide</h3>
              <p className="text-slate-600 text-sm mb-4">
                Side-by-side comparison of 6 major PPO networks across all licensed states with provider counts and hospital systems.
              </p>
              <a
                href="https://calendly.com/bradfordinformedguidance"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors text-sm"
              >
                <Download className="w-4 h-4" />
                Request During Consultation
              </a>
            </div>

            {/* Resource 2 */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-slate-200 hover:border-cyan-300 transition-all duration-300 hover:shadow-xl">
              <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">State-by-State Carrier Matrix</h3>
              <p className="text-slate-600 text-sm mb-4">
                Detailed breakdown of which carriers operate in FL, MI, NC, AZ, TX, and GA with pricing tiers and network access.
              </p>
              <a
                href="https://calendly.com/bradfordinformedguidance"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-cyan-600 font-semibold hover:text-cyan-700 transition-colors text-sm"
              >
                <Download className="w-4 h-4" />
                Request During Consultation
              </a>
            </div>

            {/* Resource 3 */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-slate-200 hover:border-emerald-300 transition-all duration-300 hover:shadow-xl">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Pre-Consultation Checklist</h3>
              <p className="text-slate-600 text-sm mb-4">
                Comprehensive checklist of information to gather before your consultation for faster, more accurate recommendations.
              </p>
              <a
                href="https://calendly.com/bradfordinformedguidance"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors text-sm"
              >
                <Download className="w-4 h-4" />
                Request During Consultation
              </a>
            </div>
          </div>

          <div className="mt-10 text-center p-6 bg-gradient-to-r from-emerald-50 to-cyan-50 rounded-xl border border-emerald-200">
            <p className="text-slate-700 mb-4">
              <strong>Want personalized recommendations instead?</strong> Skip the reading and let me analyze your specific situation.
            </p>
            <a
              href="https://calendly.com/bradfordinformedguidance"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-6 py-3 rounded-full font-bold hover:from-emerald-600 hover:to-cyan-600 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Calendar className="w-5 h-5" />
              Schedule Your Free Consultation
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section - Dark Theme (10%) */}

      <PremiumCarriersFAQ />



      {/* Footer CTA Section - Light Theme (40%) */}

      <CarriersFooterCTA />

      {/* Mobile Sticky CTA Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t-2 border-emerald-200 shadow-2xl">
        <div className="px-4 py-3">
          <div className="flex gap-2">
            <a
              href={`tel:${BRAND.phoneTel}`}
              className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-4 py-3 rounded-xl font-bold text-sm hover:from-emerald-600 hover:to-cyan-600 transition-all duration-300 shadow-lg"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
            <a
              href="https://calendly.com/bradfordinformedguidance"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 bg-white border-2 border-emerald-500 text-emerald-600 px-4 py-3 rounded-xl font-bold text-sm hover:bg-emerald-50 transition-all duration-300"
            >
              <Calendar className="w-4 h-4" />
              Schedule
            </a>
          </div>
          <p className="text-xs text-center text-slate-600 mt-2">Free consultation • No obligation • Licensed in 6 states</p>
        </div>
      </div>



    </>

  );

}













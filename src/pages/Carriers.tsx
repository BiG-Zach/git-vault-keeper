import { Calendar, FileText, CheckCircle, BarChart3, Search, Shield, Phone } from 'lucide-react';

import { Link } from 'react-router-dom';

import { Button } from '../components/ui/button';

import PremiumNetworkCard, { type Network } from "../components/carriers/PremiumNetworkCard";

import LuxuryCarrierCard, { type Carrier } from "../components/carriers/LuxuryCarrierCard";

import CarriersStatisticsSection from "../components/carriers/CarriersStatisticsSection";

import PremiumCarriersFAQ from "../components/carriers/PremiumCarriersFAQ";

import CarriersFooterCTA from "../components/carriers/CarriersFooterCTA";

import StickyBottomCTA from "../components/carriers/StickyBottomCTA";

import SEO from "../components/SEO";

import { organizationSchema, localBusinessSchema, serviceSchema, websiteSchema } from "../utils/schema";

import { BRAND } from "../lib/brand";



// PPO Networks Data - SEO Optimized

const NETWORKS: Network[] = [

  {

    name: "Aetna PPO Network",

    logoSrc: "/logos/carriers/aetna.webp",

    description: "Extensive nationwide PPO network with comprehensive provider access and quality healthcare facilities. Serving families across Florida, Georgia, South Carolina, Tennessee, Alabama, and Texas with over 1.2 million providers.",

    rating: "A (Excellent) AM Best Rated",

    highlights: ["Hospital affiliations: 50,000+ nationwide", "Specialist access: No referrals required", "Preventive care: 100% covered in-network"],

    lookupUrl: "https://www.goperspecta.com/PDN/allstatehealth/public/ProviderSearch/Main"

  },

  {

    name: "Cigna PPO Network", 

    logoSrc: "/logos/carriers/cigna.webp",

    description: "Comprehensive PPO network focused on wellness programs and integrated healthcare solutions. Strong coverage across FL, GA, SC, TN, AL, and TX metro areas.",

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

    description: "Trusted community-focused PPO network with strong local provider relationships and comprehensive coverage throughout Florida, Georgia, South Carolina, Tennessee, Alabama, and Texas.",

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

        description="Compare 15+ A-rated carriers across FL, GA, SC, TN, AL, TX. Best Insurance Group partner with 24-hour response guarantee. Licensed broker since 2017."

        path="/carriers"

        scripts={structuredData.map(data => ({ type: 'application/ld+json', innerHTML: data }))}

        meta={[

          { name: 'keywords', content: 'PPO insurance networks, multi-state insurance broker, Florida Georgia South Carolina Tennessee Alabama Texas, Best Insurance Group partner, A-rated carriers, licensed broker' },

          { property: 'og:type', content: 'website' },

          { property: 'og:title', content: 'PPO Insurance Networks - 6 States Licensed Broker | 15+ A-Rated Carriers | Bradford Informed Guidance' },

          { property: 'og:description', content: 'Compare 15+ A-rated carriers across FL, GA, SC, TN, AL, TX. Best Insurance Group partner with 24-hour response guarantee. Licensed broker since 2017.' },

          { name: 'twitter:title', content: 'PPO Insurance Networks - 6 States Licensed Broker | 15+ A-Rated Carriers' },

          { name: 'twitter:description', content: 'Compare 15+ A-rated carriers across FL, GA, SC, TN, AL, TX with 24-hour response guarantee.' }

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



        

        {/* Hero Content - Strategically positioned for maximum visual impact */}

        <div className="relative z-10 w-full px-6 max-w-7xl mx-auto">

          <div className="text-center max-w-5xl mx-auto pt-12 relative">

            {/* Floating decorative elements */}

            <div className="absolute -top-8 left-1/4 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-2xl animate-pulse"></div>

            <div className="absolute -top-12 right-1/3 w-24 h-24 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-full blur-xl animate-pulse delay-700"></div>

            

            {/* Premium content container - Background removed for hero image visibility */}

            <div className="relative z-10 px-8 py-12"

                 style={{

                   animation: 'fade-in 1s ease-out'

                 }}>

              

              {/* Animated top accent line */}

              <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-8 rounded-full opacity-80"

                   style={{ animation: 'scale-in 0.8s ease-out 0.3s both' }}></div>

              

              {/* Main Headlines - Enhanced with premium messaging and animations */}

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[0.95] mb-8 tracking-tight" 

                  style={{ 

                    textShadow: '0 8px 24px rgba(0,0,0,0.7), 0 4px 8px rgba(0,0,0,0.5)',

                    transform: 'translateY(-10px)',

                    animation: 'fade-in 1.2s ease-out 0.2s both'

                  }}>

                <span className="block bg-gradient-to-r from-cyan-300 via-sky-200 to-teal-300 bg-clip-text text-transparent hover:scale-105 transition-transform duration-500">

                  Premium PPO Networks That Actually Work

                </span>

                <span className="block text-3xl md:text-4xl lg:text-5xl font-semibold opacity-95 mt-4"

                      style={{ animation: 'fade-in 1.2s ease-out 0.4s both' }}>

                  Licensed in Florida, Georgia, South Carolina, Tennessee, Alabama & Texas

                </span>

              </h1>

              

              {/* Subheadline - Enhanced authority positioning with premium styling */}

              <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-white opacity-90 mt-8 mb-6 max-w-4xl mx-auto leading-relaxed"

                  style={{ 

                    textShadow: '0 4px 12px rgba(0,0,0,0.6)',

                    animation: 'fade-in 1.2s ease-out 0.6s both'

                  }}>

                Licensed six-state broker delivering A+ rated carrier access through Best Insurance Group

              </h2>

              

              {/* Enhanced Value Proposition - Premium benefits with advanced glassmorphism */}

              <div className="mt-10 mb-8"

                   style={{ animation: 'fade-in 1.2s ease-out 0.8s both' }}>

                <div className="relative group">

                  <p className="text-lg md:text-xl text-white font-medium opacity-95 max-w-4xl mx-auto leading-relaxed px-8 py-6 hover:scale-[1.02] transition-transform duration-300"

                     style={{ 

                       textShadow: '0 2px 8px rgba(0,0,0,0.5)',

                       background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)',

                       backdropFilter: 'blur(16px)',

                       borderRadius: '20px',

                       border: '1px solid rgba(255,255,255,0.3)',

                       boxShadow: '0 12px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.3)',

                       transition: 'all 0.3s ease'

                     }}>

                    Access to 15+ A-rated carriers across 6 states - Best Insurance Group partnership since 2020 - 24-hour response guarantee - Licensed & bonded professional serving FL, GA, SC, TN, AL, TX

                  </p>

                  

                  {/* Decorative corner elements */}

                  <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-white/30 rounded-tl-lg"></div>

                  <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-white/30 rounded-tr-lg"></div>

                  <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-white/30 rounded-bl-lg"></div>

                  <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-white/30 rounded-br-lg"></div>

                </div>

              </div>

              

              {/* Premium trust indicators with animations */}

              <div className="flex flex-wrap justify-center gap-6 mt-12 text-sm text-white/80"

                   style={{ animation: 'fade-in 1.2s ease-out 1s both' }}>

                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300">

                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>

                  <span>A+ Financial Ratings</span>

                </div>

                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300">

                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-150"></div>

                  <span>Licensed Professional</span>

                </div>

                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300">

                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse delay-300"></div>

                  <span>Same-Day Approval</span>

                </div>

              </div>

            </div>

            

          </div>

        </div>

      </header>



      {/* PPO Networks Section - Light Theme (20%) */}

      <section className="relative py-20 overflow-hidden">

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

            <div className="absolute -top-20 left-1/4 w-32 h-32 bg-gradient-to-br from-emerald-400/20 to-cyan-400/20 rounded-full blur-xl opacity-60 animate-pulse" />

            <div className="absolute -top-10 right-1/3 w-24 h-24 bg-gradient-to-br from-cyan-400/15 to-emerald-400/15 rounded-full blur-lg opacity-40 animate-pulse delay-700" />

            

            {/* Premium badge with enhanced design */}

            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-50 via-white to-cyan-50 rounded-full px-8 py-4 mb-12 border border-emerald-200/50 backdrop-blur-sm shadow-2xl relative overflow-hidden">

              {/* Badge glow effect */}

              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-transparent to-cyan-500/10 rounded-full" />

              

              {/* Animated dots */}

              <div className="w-3 h-3 bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full animate-pulse shadow-lg" />

              <span className="text-emerald-800 font-bold text-sm tracking-wider relative z-10">PREMIUM PPO NETWORKS</span>

              <div className="w-3 h-3 bg-gradient-to-r from-cyan-500 to-cyan-400 rounded-full animate-pulse delay-500 shadow-lg" />

              

              {/* Shimmer effect */}

              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 animate-shimmer" />

            </div>

            

            {/* Enhanced main heading with multiple gradient layers */}

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 text-slate-900 leading-tight relative">

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

                  

                  {/* Sparkle effects */}

                  <div className="absolute -top-6 left-1/4 w-2 h-2 bg-emerald-400 rounded-full animate-ping opacity-75" />

                  <div className="absolute -top-4 right-1/3 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping delay-300 opacity-60" />

                  <div className="absolute -bottom-8 right-1/4 w-2 h-2 bg-emerald-500 rounded-full animate-ping delay-700 opacity-70" />

                </span>

              </span>

            </h2>

            

            {/* Enhanced description with premium styling */}

            <div className="max-w-5xl mx-auto relative">

              <p className="text-2xl lg:text-3xl text-slate-700 leading-relaxed mb-4 font-medium">

                Access over <span className="text-emerald-600 font-bold bg-emerald-50 px-2 py-1 rounded-md">1.3 million</span> healthcare providers nationwide through our 

                <span className="relative inline-block text-slate-900 font-bold mx-2">

                  trusted PPO network partnerships

                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full opacity-70" />

                </span>.

              </p>

              <p className="text-lg lg:text-xl text-slate-600 leading-relaxed">

                <span className="inline-flex items-center gap-2 bg-slate-100 px-3 py-1 rounded-full">

                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />

                  <span className="font-semibold text-slate-800">Licensed and serving</span>

                </span>

                <span className="mx-2 font-bold text-slate-900">Florida, Georgia, South Carolina, Tennessee, Alabama, and Texas</span>

                with <span className="text-emerald-600 font-semibold">excellence</span>.

              </p>

            </div>



            {/* Decorative bottom elements */}

            <div className="flex justify-center items-center gap-8 mt-12">

              <div className="hidden md:block w-32 h-0.5 bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />

              <div className="flex items-center gap-3">

                <div className="w-4 h-4 bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full shadow-lg animate-pulse" />

                <div className="w-3 h-3 bg-gradient-to-r from-cyan-500 to-cyan-400 rounded-full shadow-lg animate-pulse delay-300" />

                <div className="w-4 h-4 bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full shadow-lg animate-pulse delay-700" />

              </div>

              <div className="hidden md:block w-32 h-0.5 bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />

            </div>

          </div>

          

          <div className="max-w-3xl mx-auto text-center mb-12">

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">

              Access to the Nation's Top Carriers

            </h2>

            <p className="mt-4 text-lg md:text-xl text-slate-600 leading-relaxed">

              Navigating the landscape of insurance carriers can be overwhelming. As your advocate, we provide access to a wide range of trusted national and regional providers. Our partnership with Best Insurance Group unlocks exclusive networks, giving you more high-quality options to choose from. We'll help you compare these carriers to find the perfect fit for your budget and healthcare needs while respecting state-specific regulations in Florida, Georgia, South Carolina, Tennessee, Alabama, and Texas.

            </p>

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

              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 border border-emerald-100">Georgia - Regional PPO and small group solutions</span>

              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 border border-emerald-100">South Carolina - BlueCross BlueShield specialists</span>

              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 border border-emerald-100">Tennessee - Multi-carrier hospital networks</span>

              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 border border-emerald-100">Alabama - Supplemental coverage with PPO access</span>

              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 border border-emerald-100">Texas - Enterprise-level plans for growing families</span>

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
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-emerald-700 font-bold text-sm">EXPERT GUIDANCE</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              How to Choose the Right PPO Network
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Not all PPO networks are created equal. Here's my professional guidance on selecting the network that works best for your specific needs across FL, GA, SC, TN, AL, and TX.
            </p>
          </div>

          {/* Educational Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Network Selection Criteria */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
              <h3 className="text-2xl font-semibold text-slate-900 mb-6 flex items-center gap-3">
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
                    Through my Best Insurance Group partnership, I have access to network adequacy reports and can tell you which networks have the strongest provider relationships in your area.
                  </p>
                </div>
              </div>
            </div>

            {/* Decision Framework */}
            <div className="bg-slate-900 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
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
          <div className="mt-12 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-semibold mb-6">Provider Search Strategies & Best Practices</h3>
            
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
        </div>
      </section>

      {/* Statistics Section - Dark Theme (15%) */}

      <CarriersStatisticsSection />



      {/* Insurance Carriers Section - Dark Theme (15%) */}

      <section className="relative py-20 overflow-hidden">

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

              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />

              <span className="text-emerald-300 font-bold text-sm">A+ Rated Insurance Carriers</span>

            </div>

            

            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">

              My Trusted

              <span className="block gradient-text-luxury">Insurance Partners</span>

            </h2>

            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">

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



      {/* FAQ Section - Dark Theme (10%) */}

      <PremiumCarriersFAQ />



      {/* Footer CTA Section - Light Theme (40%) */}

      <CarriersFooterCTA />



      

    </>

  );

}













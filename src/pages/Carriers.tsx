import { CheckCircle, BarChart3, Search, Shield, Phone, Award, Calendar, Download, FileText, Filter, X, MapPin, Star, DollarSign, Calculator } from 'lucide-react';

import { Link } from 'react-router-dom';

import { lazy, Suspense, useState, useEffect } from 'react';

import PremiumNetworkCard, { type Network } from "../components/carriers/PremiumNetworkCard";

import LuxuryCarrierCard, { type Carrier } from "../components/carriers/LuxuryCarrierCard";


// Lazy load heavy components for better initial bundle size

const PremiumCarriersFAQ = lazy(() => import("../components/carriers/PremiumCarriersFAQ"));

const CarriersFooterCTA = lazy(() => import("../components/carriers/CarriersFooterCTA"));


import SEO from "../components/SEO";

import { organizationSchema, localBusinessSchema, serviceSchema, websiteSchema } from "../utils/schema";

import { BRAND } from "../lib/brand";



// PPO Networks Data - SEO Optimized

const NETWORKS: Network[] = [

  {

    name: "Aetna PPO Network",

    logoSrc: "/logos/carriers/aetna.webp",

    description: "Extensive nationwide PPO network with comprehensive provider access and quality healthcare facilities. Serving families nationwide with over 1.3M+ providers.",

    rating: "A (Excellent) AM Best Rated",

    highlights: ["Hospital affiliations: 50,000+ nationwide", "Specialist access: No referrals required", "Preventive care: 100% covered in-network"],

    lookupUrl: "https://www.goperspecta.com/PDN/allstatehealth/public/ProviderSearch/Main"

  },

  {

    name: "Cigna PPO Network", 

    logoSrc: "/logos/carriers/cigna.webp",

    description: "Comprehensive PPO network focused on wellness programs and integrated healthcare solutions. Strong coverage across licensed metro areas.",

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

    description: "One of America's oldest PPO networks with extensive provider relationships and competitive rates. Broad coverage nationwide.",

    rating: "America's Largest Independent Network",

    highlights: ["Broad provider base: Extensive relationships", "Cost-effective solutions: Competitive pricing", "Nationwide coverage: All 50 states"],

    lookupUrl: "https://providerlocator.com/DirectoryDisclaimerPage.aspx?RedirectURL=%2fMembers%2fdefault.aspx%3f"

  },

  {

    name: "UnitedHealthcare PPO Network",

    logoSrc: "/logos/carriers/unitedhealthcare.webp",

    description: "The nation's largest PPO network offering unmatched provider access and innovative healthcare solutions. Premier nationwide coverage.",

    rating: "A+ (Superior) AM Best Rated",

    highlights: ["Largest network: 1.3+ million providers", "Cutting-edge technology: Advanced care coordination", "Comprehensive care options: Full spectrum coverage"],

    lookupUrl: "https://www.uhc.com/find-a-doctor"

  },

  {

    name: "Blue Cross Blue Shield PPO Network", 

    logoSrc: "/logos/carriers/bluecrossblueshield.png",

    description: "Trusted community-focused PPO network with strong local provider relationships and comprehensive coverage throughout licensed markets.",

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

  // Enhanced Structured Data for SEO

  const breadcrumbSchema = JSON.stringify({

    "@context": "https://schema.org",

    "@type": "BreadcrumbList",

    "itemListElement": [

      {

        "@type": "ListItem",

        "position": 1,

        "name": "Home",

        "item": "https://bradfordinformedguidance.com"

      },

      {

        "@type": "ListItem",

        "position": 2,

        "name": "Insurance Carriers & PPO Networks",

        "item": "https://bradfordinformedguidance.com/carriers"

      }

    ]

  });



  const faqPageSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is a PPO network and how does it benefit me?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A PPO (Preferred Provider Organization) network gives you the flexibility to see any healthcare provider, but offers significant cost savings when you choose in-network providers. You do not need referrals to see specialists, and you have access to a vast network of doctors, hospitals, and healthcare facilities across Florida, Michigan, North Carolina, Arizona, Texas, and Georgia."
        }
      },
      {
        "@type": "Question",
        "name": "Can I keep my current doctor with these PPO networks?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most likely, yes. Our PPO networks include over 1.3 million healthcare providers nationwide. Use the Find Your Doctor links on each network card above to verify if your current physician is in-network. We also verify your doctor's network status during your consultation so you feel confident before you enroll."
        }
      },
      {
        "@type": "Question",
        "name": "Why work with a multi-carrier broker instead of a single carrier agent?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "As a multi-carrier broker, I compare 15+ A-rated carriers across Florida, Michigan, North Carolina, Arizona, Texas, and Georgia. You see every competitive option in one consultation without pressure from a single insurer, and you receive unbiased guidance tailored to your household's priorities."
        }
      },
      {
        "@type": "Question",
        "name": "Do I pay extra fees for broker services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, my services are completely free to you. I'm compensated directly by the insurance carriers when you enroll, so there are no broker fees, enrollment fees, or service charges. You pay the same premium whether you buy direct from the carrier or work with me - but with me, you get ongoing support, multiple carrier access, and advocacy at no additional cost."
        }
      },
      {
        "@type": "Question",
        "name": "What's the difference between working with a broker vs. buying direct from insurance companies?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "When you work with me as your broker, you get access to multiple carriers and can compare options side-by-side without bias. Insurance companies only show you their products. I provide ongoing support for claims, renewals, and changes at no extra cost - my compensation comes from the carriers, not your pocket. Plus, with my Best Insurance Group partnership, I often have access to exclusive plans and faster underwriting that aren't available to the public."
        }
      },
      {
        "@type": "Question",
        "name": "How do you ensure I get the best rate available?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "I have access to 15+ A-rated carriers through my Best Insurance Group partnership, which means I can compare rates across the entire market, not just one company. I also verify subsidy eligibility for ACA plans and check for any available discounts or wellness program benefits. My 8 years of experience helps me identify the best value - sometimes the lowest premium isn't actually the best deal when you factor in deductibles, networks, and coverage."
        }
      },
      {
        "@type": "Question",
        "name": "I'm in Florida - which PPO networks have the best hospital coverage in my area?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Florida has excellent PPO network depth. In South Florida (Miami/Ft. Lauderdale), UnitedHealthcare and Aetna dominate with comprehensive hospital networks including Baptist Health, Memorial Healthcare, and Cleveland Clinic Florida. In Central Florida (Tampa/Orlando), Blue Cross Blue Shield has strong relationships with AdventHealth, BayCare, and Orlando Health systems. North Florida (Jacksonville/Tallahassee) sees strong coverage from Cigna and First Health with Mayo Clinic and UF Health access. I analyze your specific zip code and preferred hospitals to recommend the optimal network."
        }
      },
      {
        "@type": "Question",
        "name": "I'm in Texas - which carriers offer the best rates for self-employed individuals?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Texas has a competitive health insurance market with several strong options for self-employed professionals. Allstate Health typically offers the most aggressive pricing in Dallas/Fort Worth and Houston for healthy applicants under 50. SGIC provides budget-friendly major medical with solid networks in San Antonio and Austin. UnitedHealthcare dominates the premium segment with the largest provider network. For those not qualifying for ACA subsidies, I'll compare private health plans that often save 40-50% versus marketplace rates. Each consultation includes a side-by-side rate comparison specific to your county and age."
        }
      },
      {
        "@type": "Question",
        "name": "How does Michigan's health insurance market differ from other states?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Michigan has unique market dynamics. Blue Cross Blue Shield of Michigan holds the strongest provider relationships, especially with major systems like Henry Ford, Beaumont, and U of M Health. Priority Health (not available in all our states) dominates West Michigan. For Metro Detroit residents, I typically recommend UnitedHealthcare or Aetna PPO for maximum flexibility. Michigan also has strong ACA marketplace competition, so I always compare both private plans and subsidized marketplace options. Retirees under 65 should know Michigan allows COBRA continuation longer than federal requirements - I help navigate these options during our consultation."
        }
      },
      {
        "@type": "Question",
        "name": "I live in North Carolina - what should I know about Blue Cross Blue Shield's dominance here?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "North Carolina has unique market dynamics where Blue Cross Blue Shield of North Carolina (BCBSNC) historically held near-monopoly status. While competition has increased, BCBSNC still maintains the strongest relationships with major systems like Duke Health, UNC Health, Atrium Health (formerly Carolinas HealthCare), and Wake Forest Baptist. However, UnitedHealthcare and Aetna have expanded aggressively in Charlotte, Raleigh-Durham, and Greensboro with competitive pricing. For Western NC (Asheville/mountain regions), I often recommend BCBSNC for provider depth. Triangle and Charlotte residents have more carrier flexibility - I compare all options to ensure you're not overpaying for the Blue Cross name when equally strong networks exist."
        }
      },
      {
        "@type": "Question",
        "name": "How does coverage work when I travel to other states?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most PPO networks I recommend provide nationwide coverage, which is perfect for travel. Emergency care is always covered regardless of location. For routine care while traveling, I ensure your plan includes out-of-network benefits or has reciprocal agreements with providers in other states. Since I'm licensed in FL, MI, NC, AZ, TX, and GA, I can help coordinate coverage if you're moving between these states."
        }
      },
      {
        "@type": "Question",
        "name": "What if I need to file a claim - how does that work with a broker?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "This is where working with a broker really pays off. I act as your advocate throughout the claims process. While you'll still file claims directly with your insurance carrier, I help resolve any issues that arise, understand claim denials, and ensure you're getting the benefits you're entitled to. I've helped clients navigate everything from routine claim questions to complex appeals across all 6 states I serve."
        }
      }
    ]
  });



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

    websiteSchema(),

    breadcrumbSchema,

    faqPageSchema

  ];

  // Tabbed Interface State Management
  const [activeTab, setActiveTab] = useState<'networks' | 'carriers' | 'guidance' | 'faq'>('networks');
  const [showAllNetworks, setShowAllNetworks] = useState(false);
  const [showAllCarriers, setShowAllCarriers] = useState(false);
  const [accordionState, setAccordionState] = useState({
    criteria: true,
    framework: true
  });
  const [showQuiz, setShowQuiz] = useState(false);

  // URL Hash Routing for tabs
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.replace('#', '');
      if (['networks', 'carriers', 'guidance', 'faq'].includes(hash)) {
        setActiveTab(hash as typeof activeTab);
      }

      const handleHashChange = () => {
        const newHash = window.location.hash.replace('#', '');
        if (['networks', 'carriers', 'guidance', 'faq'].includes(newHash)) {
          setActiveTab(newHash as typeof activeTab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      };

      window.addEventListener('hashchange', handleHashChange);
      return () => window.removeEventListener('hashchange', handleHashChange);
    }
  }, []);

  // Smart Filtering State Management
  const [filterState, setFilterState] = useState({
    searchTerm: '',
    selectedState: 'all',
    coverageType: 'all', // health, life, supplemental
    specialty: 'all',
    showFilters: false
  });

  // Filtered Carriers based on user preferences
  const filteredCarriers = CARRIERS.filter(carrier => {
    const matchesSearch = carrier.name.toLowerCase().includes(filterState.searchTerm.toLowerCase()) ||
                         carrier.description.toLowerCase().includes(filterState.searchTerm.toLowerCase());

    const matchesCoverageType = filterState.coverageType === 'all' ||
                                carrier.specialties.some(s =>
                                  s.toLowerCase().includes(filterState.coverageType.toLowerCase())
                                );

    const matchesSpecialty = filterState.specialty === 'all' ||
                            carrier.specialties.some(s =>
                              s.toLowerCase().includes(filterState.specialty.toLowerCase())
                            );

    return matchesSearch && matchesCoverageType && matchesSpecialty;
  });

  // Filtered Networks based on user preferences
  const filteredNetworks = NETWORKS.filter(network => {
    const matchesSearch = network.name.toLowerCase().includes(filterState.searchTerm.toLowerCase()) ||
                         network.description.toLowerCase().includes(filterState.searchTerm.toLowerCase());

    return matchesSearch;
  });

  // Personalized carrier recommendations with detailed reasoning
  const getPersonalizedRecommendations = (userState: string) => {
    const recommendations = {
      'FL': [
        { name: 'Allstate Health', reason: 'Fast approval times (same week) and strong PPO network throughout FL metro areas', badge: 'Fast Issue' },
        { name: 'UnitedHealthcare', reason: 'Largest provider network with 1.3M+ providers, excellent snowbird coverage', badge: 'Best Network' },
        { name: 'Blue Cross Blue Shield', reason: 'Deep local relationships in FL, strong community hospital networks', badge: 'Local Favorite' }
      ],
      'MI': [
        { name: 'Blue Cross Blue Shield', reason: 'Premier MI carrier with unmatched local provider relationships since 1939', badge: 'Local Leader' },
        { name: 'UnitedHealthcare', reason: 'Extensive coverage in Detroit, Grand Rapids, Ann Arbor metro areas', badge: 'Best Metro' },
        { name: 'Mutual of Omaha', reason: 'Excellent living benefits for MI families planning long-term care', badge: 'Living Benefits' }
      ],
      'NC': [
        { name: 'Blue Cross Blue Shield', reason: 'Top-rated in NC with strong Charlotte, Raleigh-Durham, Greensboro networks', badge: 'Top Rated' },
        { name: 'Cigna', reason: 'Exceptional mental health and telehealth services for NC residents', badge: 'Wellness Focus' },
        { name: 'UnitedHealthcare', reason: 'Strong specialty care access in Research Triangle Park area', badge: 'Specialist Access' }
      ],
      'AZ': [
        { name: 'UnitedHealthcare', reason: 'Best coverage in Phoenix, Tucson, Scottsdale with extensive provider access', badge: 'Best Overall' },
        { name: 'Aetna', reason: 'Comprehensive preventive care network, excellent for active AZ lifestyles', badge: 'Preventive Care' },
        { name: 'Blue Cross Blue Shield', reason: 'Strong regional coverage throughout AZ rural and urban areas', badge: 'Statewide' }
      ],
      'TX': [
        { name: 'Blue Cross Blue Shield', reason: 'Dominant TX presence in Houston, Dallas, Austin, San Antonio', badge: 'TX Leader' },
        { name: 'UnitedHealthcare', reason: 'Top-tier specialist networks in major TX medical centers', badge: 'Specialist Network' },
        { name: 'SGIC', reason: 'Budget-friendly option for TX residents, lower premiums than national carriers', badge: 'Best Value' }
      ],
      'GA': [
        { name: 'Blue Cross Blue Shield', reason: 'Leading GA carrier with exceptional Atlanta metro and statewide coverage', badge: 'GA Leader' },
        { name: 'SGIC', reason: 'Cost-effective major medical with strong regional hospital networks in GA', badge: 'Budget Choice' },
        { name: 'UnitedHealthcare', reason: 'Premium provider access in Atlanta, Savannah, Augusta metro areas', badge: 'Premium Network' }
      ]
    };
    return recommendations[userState as keyof typeof recommendations] || [];
  };

  // Coverage Calculator State
  const [calculatorState, setCalculatorState] = useState({
    age: 35,
    familySize: 1,
    state: 'FL',
    healthStatus: 'good',
    tobaccoUse: false,
    deductiblePreference: 'medium', // low, medium, high
    preExistingConditions: false,
    showEstimate: false
  });

  // CRM & Lead Attribution - UTM Tracking
  const getUTMParameters = () => {
    if (typeof window === 'undefined') return '';
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.toString();
  };

  const buildCalendlyURL = (source: string) => {
    const baseURL = 'https://calendly.com/bradfordinformedguidance';
    const params = new URLSearchParams();

    // Add page-level UTM parameters
    params.append('utm_source', 'website');
    params.append('utm_medium', 'carriers_page');
    params.append('utm_campaign', 'carrier_comparison');
    params.append('utm_content', source);

    // Preserve existing UTM parameters from URL if they exist
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      urlParams.forEach((value, key) => {
        if (key.startsWith('utm_') && !params.has(key)) {
          params.append(key, value);
        }
      });
    }

    // Add lead source for CRM attribution
    params.append('a1', source); // Calendly custom field for lead source

    return `${baseURL}?${params.toString()}`;
  };

  const buildPhoneTrackingURL = (source: string) => {
    // Log to dataLayer for Google Analytics/Tag Manager
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: 'phone_click',
        event_category: 'engagement',
        event_label: source,
        page_location: window.location.href
      });
    }
    return `tel:${BRAND.phoneTel}`;
  };

  // Simple premium estimation logic
  const calculateEstimate = () => {
    let baseRate = 350; // Base monthly rate

    // Age adjustment (progressive scaling)
    if (calculatorState.age > 60) baseRate += 250;
    else if (calculatorState.age > 50) baseRate += 150;
    else if (calculatorState.age > 40) baseRate += 75;
    else if (calculatorState.age < 30) baseRate -= 50;

    // Family size
    baseRate += (calculatorState.familySize - 1) * 250;

    // Health status
    if (calculatorState.healthStatus === 'excellent') baseRate *= 0.85;
    else if (calculatorState.healthStatus === 'fair') baseRate *= 1.15;
    else if (calculatorState.healthStatus === 'poor') baseRate *= 1.35;

    // Tobacco use (major factor - typically 20-50% increase)
    if (calculatorState.tobaccoUse) {
      baseRate *= 1.35;
    }

    // Pre-existing conditions
    if (calculatorState.preExistingConditions) {
      baseRate *= 1.25;
    }

    // Deductible preference affects premium inversely
    if (calculatorState.deductiblePreference === 'low') {
      baseRate *= 1.4; // Low deductible = higher premium
    } else if (calculatorState.deductiblePreference === 'high') {
      baseRate *= 0.75; // High deductible = lower premium
    }

    // State adjustments
    const stateMultipliers: Record<string, number> = {
      'FL': 1.1,
      'TX': 1.05,
      'NC': 0.95,
      'MI': 1.0,
      'GA': 1.0,
      'AZ': 1.05
    };

    baseRate *= stateMultipliers[calculatorState.state] || 1.0;

    return {
      low: Math.round(baseRate * 0.7),
      mid: Math.round(baseRate),
      high: Math.round(baseRate * 1.3)
    };
  };

  return (

    <>

      <SEO

        title="Independent Insurance Broker | Compare 15+ A-Rated Carriers - 6 States"

        description="Expert independent broker serving 6 licensed states. I work for you—not insurance companies. Most families save 30-50% with personalized service you can trust."

        path="/carriers"

        scripts={structuredData.map(data => ({ type: 'application/ld+json', innerHTML: data }))}

        meta={[

          { name: 'keywords', content: 'PPO insurance networks, multi-state insurance broker, Florida Michigan North Carolina Arizona Texas Georgia, Best Insurance Group partner, A-rated carriers, licensed broker' },

          { property: 'og:type', content: 'website' },

          { property: 'og:title', content: 'Independent Insurance Broker | Compare 15+ A-Rated Carriers - 6 States | Bradford Informed Guidance' },

          { property: 'og:description', content: 'Expert independent broker serving 6 licensed states. I work for you—not insurance companies. Most families save 30-50% with personalized service.' },

          { name: 'twitter:title', content: 'Independent Insurance Broker | Compare 15+ A-Rated Carriers - 6 States' },

          { name: 'twitter:description', content: 'Expert independent broker. I work for you—not insurance companies. Most families save 30-50% compared to going direct.' }

        ]}

      />

      {/* Hero Section - Optimized for Core Web Vitals */}

      <header className="relative h-screen max-h-[800px] min-h-[600px] flex items-center justify-center overflow-hidden" role="banner">

        {/* Optimized Responsive Hero Image with Preload */}

        <picture>

          <source

            media="(min-width: 1920px)"

            srcSet="/images/hero/carriers-hero-retina.webp"

            type="image/webp"

            width="1920"

            height="800"

          />

          <source

            media="(min-width: 768px)"

            srcSet="/images/hero/carriers-hero-desktop.webp"

            type="image/webp"

            width="1200"

            height="800"

          />

          <source

            media="(max-width: 767px)"

            srcSet="/images/hero/carriers-hero-mobile.webp"

            type="image/webp"

            width="768"

            height="600"

          />

          <img

            src="/images/hero/carriers-hero-desktop.webp"

            alt="Insurance professionals and healthcare providers working together to help families find comprehensive PPO coverage"

            className="absolute inset-0 w-full h-full object-cover object-center"

            loading="eager"

            fetchPriority="high"

            decoding="async"

            width="1200"

            height="800"

          />

        </picture>

        {/* Dark gradient overlay for better text contrast */}

        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40 z-[5]" aria-hidden="true" />



        

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

                Expert guidance across Florida, Michigan, North Carolina, Arizona, Texas & Georgia

              </h2>



              {/* Factual Value Proposition */}

              <div className="mt-4 md:mt-6 mb-6 md:mb-8">

                <p className="text-sm sm:text-base md:text-lg text-white font-medium max-w-3xl mx-auto leading-relaxed"

                   style={{

                     textShadow: '0 2px 4px rgba(0,0,0,0.8)'

                   }}>

                  As an independent broker, I work for you—not the insurance companies. I compare 15+ A-rated carriers to find better coverage at lower costs, with personalized service you can trust. Most families save 30-50% compared to going direct.

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



      {/* Enhanced Trust Signals Bar with Social Proof */}
      <section className="relative py-8 bg-gradient-to-r from-slate-100 via-white to-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Primary Trust Signals */}
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 mb-6">
            <div className="flex items-center gap-2 text-slate-700 px-4 py-2 bg-white rounded-lg shadow-sm border border-slate-200">
              <Shield className="w-5 h-5 text-emerald-600" />
              <span className="text-sm"><strong className="text-emerald-600">Licensed & Bonded</strong> in 6 States</span>
            </div>
            <div className="flex items-center gap-2 text-slate-700 px-4 py-2 bg-white rounded-lg shadow-sm border border-slate-200">
              <Award className="w-5 h-5 text-cyan-600" />
              <span className="text-sm"><strong className="text-cyan-600">8+ Years</strong> Experience</span>
            </div>
            <div className="flex items-center gap-2 text-slate-700 px-4 py-2 bg-white rounded-lg shadow-sm border border-slate-200">
              <CheckCircle className="w-5 h-5 text-emerald-600" />
              <span className="text-sm"><strong className="text-emerald-600">15+</strong> A+ Rated Carriers</span>
            </div>
            <div className="flex items-center gap-2 text-slate-700 px-4 py-2 bg-white rounded-lg shadow-sm border border-slate-200">
              <Phone className="w-5 h-5 text-cyan-600" />
              <span className="text-sm"><strong className="text-cyan-600">15-20 Min</strong> Free Consultations</span>
            </div>
          </div>

          {/* Secondary Social Proof Metrics */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-xs text-slate-600">
            <div className="flex items-center gap-1.5">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <span className="font-semibold">4.9/5.0 Client Rating</span>
            </div>
            <div className="h-4 w-px bg-slate-300"></div>
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-600" />
              <span><strong>500+</strong> Families Served</span>
            </div>
            <div className="h-4 w-px bg-slate-300"></div>
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-600" />
              <span><strong>98%</strong> Client Retention Rate</span>
            </div>
            <div className="h-4 w-px bg-slate-300"></div>
            <div className="flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-cyan-600" />
              <span>Industry Partner Since 2020</span>
            </div>
          </div>
        </div>
      </section>

      {/* 30-Second Entry Quiz Modal */}
      {showQuiz && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => setShowQuiz(false)}>
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-8 animate-fadeIn" onClick={(e) => e.stopPropagation()}>
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 bg-emerald-100 rounded-full px-6 py-3 mb-4">
                <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                <span className="text-emerald-700 font-bold text-sm">QUICK START QUIZ</span>
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-2">How Can I Help You Today?</h3>
              <p className="text-slate-600">Choose the option that best describes your needs</p>
            </div>

            <div className="space-y-3">
              <button
                onClick={() => {
                  setShowQuiz(false);
                  window.location.hash = 'networks';
                }}
                className="w-full text-left p-6 bg-gradient-to-r from-emerald-50 to-cyan-50 hover:from-emerald-100 hover:to-cyan-100 border-2 border-emerald-200 hover:border-emerald-400 rounded-xl transition-all duration-200 group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Search className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-slate-900 mb-1">I have specific doctors I want to keep</h4>
                    <p className="text-sm text-slate-600">Search our PPO networks to verify your providers</p>
                  </div>
                </div>
              </button>

              <button
                onClick={() => {
                  setShowQuiz(false);
                  window.location.hash = 'carriers';
                }}
                className="w-full text-left p-6 bg-gradient-to-r from-cyan-50 to-blue-50 hover:from-cyan-100 hover:to-blue-100 border-2 border-cyan-200 hover:border-cyan-400 rounded-xl transition-all duration-200 group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-slate-900 mb-1">I want to compare insurance companies</h4>
                    <p className="text-sm text-slate-600">Browse our A-rated carriers and their specialties</p>
                  </div>
                </div>
              </button>

              <button
                onClick={() => {
                  setShowQuiz(false);
                  window.location.hash = 'guidance';
                }}
                className="w-full text-left p-6 bg-gradient-to-r from-indigo-50 to-purple-50 hover:from-indigo-100 hover:to-purple-100 border-2 border-indigo-200 hover:border-indigo-400 rounded-xl transition-all duration-200 group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-indigo-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-slate-900 mb-1">I need guidance on choosing coverage</h4>
                    <p className="text-sm text-slate-600">Learn my decision framework and expert tips</p>
                  </div>
                </div>
              </button>

              <button
                onClick={() => {
                  setShowQuiz(false);
                  window.location.hash = 'faq';
                }}
                className="w-full text-left p-6 bg-gradient-to-r from-amber-50 to-orange-50 hover:from-amber-100 hover:to-orange-100 border-2 border-amber-200 hover:border-amber-400 rounded-xl transition-all duration-200 group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-slate-900 mb-1">I have questions about coverage</h4>
                    <p className="text-sm text-slate-600">Browse frequently asked questions and answers</p>
                  </div>
                </div>
              </button>
            </div>

            <div className="mt-6 text-center">
              <button
                onClick={() => setShowQuiz(false)}
                className="text-slate-500 hover:text-slate-700 font-medium text-sm"
              >
                Skip quiz and browse all content
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Tabbed Navigation Interface */}
      <div className="sticky top-0 z-40 bg-white border-b-2 border-slate-200 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Desktop Tab Navigation */}
          <div className="hidden md:flex items-center justify-between py-4">
            <div className="flex items-center gap-2" role="tablist" aria-label="Content sections">
              <button
                onClick={() => window.location.hash = 'networks'}
                role="tab"
                aria-selected={activeTab === 'networks'}
                aria-controls="networks-panel"
                className={`px-6 py-3 rounded-t-lg font-semibold text-sm transition-all duration-200 ${
                  activeTab === 'networks'
                    ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-lg'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Search className="w-4 h-4" />
                  Find Your Network
                </div>
              </button>

              <button
                onClick={() => window.location.hash = 'carriers'}
                role="tab"
                aria-selected={activeTab === 'carriers'}
                aria-controls="carriers-panel"
                className={`px-6 py-3 rounded-t-lg font-semibold text-sm transition-all duration-200 ${
                  activeTab === 'carriers'
                    ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-lg'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-4 h-4" />
                  Compare Carriers
                </div>
              </button>

              <button
                onClick={() => window.location.hash = 'guidance'}
                role="tab"
                aria-selected={activeTab === 'guidance'}
                aria-controls="guidance-panel"
                className={`px-6 py-3 rounded-t-lg font-semibold text-sm transition-all duration-200 ${
                  activeTab === 'guidance'
                    ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-lg'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  Expert Guidance
                </div>
              </button>

              <button
                onClick={() => window.location.hash = 'faq'}
                role="tab"
                aria-selected={activeTab === 'faq'}
                aria-controls="faq-panel"
                className={`px-6 py-3 rounded-t-lg font-semibold text-sm transition-all duration-200 ${
                  activeTab === 'faq'
                    ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-lg'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Common Questions
                </div>
              </button>
            </div>

            <button
              onClick={() => setShowQuiz(true)}
              className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
            >
              <Award className="w-4 h-4" />
              Take Quiz
            </button>
          </div>

          {/* Mobile Tab Navigation - Horizontal Scroll */}
          <div className="md:hidden overflow-x-auto py-3 -mx-4 px-4">
            <div className="flex items-center gap-2 min-w-max" role="tablist" aria-label="Content sections">
              <button
                onClick={() => window.location.hash = 'networks'}
                role="tab"
                aria-selected={activeTab === 'networks'}
                className={`px-4 py-2 rounded-full font-semibold text-xs whitespace-nowrap transition-all ${
                  activeTab === 'networks'
                    ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-md'
                    : 'bg-slate-100 text-slate-600'
                }`}
              >
                Find Network
              </button>
              <button
                onClick={() => window.location.hash = 'carriers'}
                role="tab"
                aria-selected={activeTab === 'carriers'}
                className={`px-4 py-2 rounded-full font-semibold text-xs whitespace-nowrap transition-all ${
                  activeTab === 'carriers'
                    ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-md'
                    : 'bg-slate-100 text-slate-600'
                }`}
              >
                Compare Carriers
              </button>
              <button
                onClick={() => window.location.hash = 'guidance'}
                role="tab"
                aria-selected={activeTab === 'guidance'}
                className={`px-4 py-2 rounded-full font-semibold text-xs whitespace-nowrap transition-all ${
                  activeTab === 'guidance'
                    ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-md'
                    : 'bg-slate-100 text-slate-600'
                }`}
              >
                Guidance
              </button>
              <button
                onClick={() => window.location.hash = 'faq'}
                role="tab"
                aria-selected={activeTab === 'faq'}
                className={`px-4 py-2 rounded-full font-semibold text-xs whitespace-nowrap transition-all ${
                  activeTab === 'faq'
                    ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-md'
                    : 'bg-slate-100 text-slate-600'
                }`}
              >
                FAQ
              </button>
              <button
                onClick={() => setShowQuiz(true)}
                className="px-4 py-2 rounded-full bg-slate-100 text-slate-600 font-semibold text-xs whitespace-nowrap"
              >
                Quiz
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Panel 1: Find Your Network */}
      <div
        id="networks-panel"
        role="tabpanel"
        aria-labelledby="networks-tab"
        style={{ display: activeTab === 'networks' ? 'block' : 'none' }}
      >
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



            {/* Premium badge */}

            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-50 via-white to-cyan-50 rounded-full px-8 py-4 mb-12 border border-emerald-200/50 shadow-lg">

              <div className="w-2 h-2 bg-emerald-500 rounded-full" />

              <span className="text-emerald-800 font-bold text-sm tracking-wider">PREMIUM PPO NETWORKS</span>

              <div className="w-2 h-2 bg-cyan-500 rounded-full" />

            </div>

            

            {/* Enhanced main heading with multiple gradient layers */}

            <h2 id="networks-heading" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 md:mb-8 text-slate-900 leading-tight">

              <span className="block">Find Your Doctor in Our</span>

              <span className="block mt-2 bg-gradient-to-r from-cyan-500 via-sky-400 to-teal-500 bg-clip-text text-transparent">

                Exclusive Network Partners

              </span>

            </h2>

            

            {/* Simplified description with key stats */}

            <div className="max-w-4xl mx-auto relative">

              <p className="text-lg sm:text-xl md:text-2xl text-slate-700 leading-relaxed mb-8 font-medium">

                Access <span className="text-emerald-600 font-bold bg-emerald-50 px-2 py-1 rounded-md">1.3+ million</span> healthcare providers across 6 states through our trusted PPO network partnerships.

              </p>

              {/* Quick Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div className="bg-white rounded-xl p-4 border-2 border-emerald-100 text-center">
                  <div className="text-3xl font-bold text-emerald-600 mb-1">6</div>
                  <div className="text-sm text-slate-600 font-medium">PPO Networks</div>
                </div>
                <div className="bg-white rounded-xl p-4 border-2 border-cyan-100 text-center">
                  <div className="text-3xl font-bold text-cyan-600 mb-1">1.3M+</div>
                  <div className="text-sm text-slate-600 font-medium">Providers</div>
                </div>
                <div className="bg-white rounded-xl p-4 border-2 border-emerald-100 text-center">
                  <div className="text-3xl font-bold text-emerald-600 mb-1">6</div>
                  <div className="text-sm text-slate-600 font-medium">States Covered</div>
                </div>
              </div>

              {/* Quick Action CTAs */}
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="#networks-panel"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-bold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  <Search className="w-5 h-5" />
                  Find My Doctor
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-900 font-bold px-6 py-3 rounded-xl shadow-md hover:shadow-lg border-2 border-slate-200 transition-all duration-200"
                >
                  <Phone className="w-5 h-5" />
                  Get Recommendations
                </a>
              </div>

            </div>



          </div>

          

          {/* Why Work With Me Section - Condensed */}
          <div className="max-w-4xl mx-auto mb-12">

            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-8">

              Why Work With an Independent Broker?

            </h3>

            {/* Key Benefits Grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-br from-emerald-50 to-cyan-50 rounded-xl p-6 border border-emerald-200">
                <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center mb-4">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold text-slate-900 mb-2">Save 30-50%</h4>
                <p className="text-sm text-slate-600">Healthy applicants typically save significantly vs. unsubsidized marketplace plans</p>
              </div>
              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 border border-cyan-200">
                <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold text-slate-900 mb-2">Fast Approvals</h4>
                <p className="text-sm text-slate-600">Direct underwriting relationships mean faster processing and priority reviews</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold text-slate-900 mb-2">Claims Support</h4>
                <p className="text-sm text-slate-600">Dedicated advocacy when carriers delay or deny legitimate claims</p>
              </div>
            </div>

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

            {/* State Coverage Grid - Redesigned */}
            <div className="mt-12">
              <h4 className="text-xl font-bold text-slate-900 text-center mb-6">Licensed Coverage Areas</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

                <div className="bg-white rounded-lg p-4 border-2 border-emerald-100 hover:border-emerald-300 hover:shadow-md transition-all">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-emerald-600" />
                    </div>
                    <h5 className="font-bold text-slate-900">Florida</h5>
                  </div>
                  <p className="text-sm text-slate-600">ACA and PPO depth</p>
                </div>

                <div className="bg-white rounded-lg p-4 border-2 border-cyan-100 hover:border-cyan-300 hover:shadow-md transition-all">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-cyan-600" />
                    </div>
                    <h5 className="font-bold text-slate-900">Michigan</h5>
                  </div>
                  <p className="text-sm text-slate-600">Major medical and Medicare solutions</p>
                </div>

                <div className="bg-white rounded-lg p-4 border-2 border-emerald-100 hover:border-emerald-300 hover:shadow-md transition-all">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-emerald-600" />
                    </div>
                    <h5 className="font-bold text-slate-900">North Carolina</h5>
                  </div>
                  <p className="text-sm text-slate-600">BlueCross BlueShield and UHC strength</p>
                </div>

                <div className="bg-white rounded-lg p-4 border-2 border-cyan-100 hover:border-cyan-300 hover:shadow-md transition-all">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-cyan-600" />
                    </div>
                    <h5 className="font-bold text-slate-900">Arizona</h5>
                  </div>
                  <p className="text-sm text-slate-600">Multi-carrier network diversity</p>
                </div>

                <div className="bg-white rounded-lg p-4 border-2 border-emerald-100 hover:border-emerald-300 hover:shadow-md transition-all">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-emerald-600" />
                    </div>
                    <h5 className="font-bold text-slate-900">Texas</h5>
                  </div>
                  <p className="text-sm text-slate-600">Enterprise-level plans for growing families</p>
                </div>

                <div className="bg-white rounded-lg p-4 border-2 border-cyan-100 hover:border-cyan-300 hover:shadow-md transition-all">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-cyan-600" />
                    </div>
                    <h5 className="font-bold text-slate-900">Georgia</h5>
                  </div>
                  <p className="text-sm text-slate-600">Regional PPO and small group solutions</p>
                </div>

              </div>
            </div>

          </div>

          {/* Smart Filtering Interface */}
          <div className="mb-12 mt-8">
            <div className="bg-white rounded-2xl shadow-xl border-2 border-slate-200 overflow-hidden">
              {/* Filter Header */}
              <div className="bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-600 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Search className="w-5 h-5 text-white" />
                  <h3 className="text-lg font-bold text-white">Find Your Perfect Match</h3>
                </div>
                <button
                  onClick={() => setFilterState(prev => ({ ...prev, showFilters: !prev.showFilters }))}
                  className="flex items-center gap-2 bg-white/20 hover:bg-white/30 transition-colors px-4 py-2 rounded-lg text-white text-sm font-medium"
                  aria-expanded={filterState.showFilters}
                  aria-label="Toggle advanced filters"
                >
                  <Filter className="w-4 h-4" />
                  {filterState.showFilters ? 'Hide Filters' : 'Show Filters'}
                </button>
              </div>

              {/* Search Bar - Always Visible */}
              <div className="p-6 border-b border-slate-200">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search carriers, networks, or specialties..."
                    value={filterState.searchTerm}
                    onChange={(e) => setFilterState(prev => ({ ...prev, searchTerm: e.target.value }))}
                    className="w-full pl-12 pr-12 py-4 border-2 border-slate-300 rounded-xl text-slate-900 placeholder-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all text-lg"
                    aria-label="Search carriers and networks"
                  />
                  {filterState.searchTerm && (
                    <button
                      onClick={() => setFilterState(prev => ({ ...prev, searchTerm: '' }))}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                      aria-label="Clear search"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  )}
                </div>
              </div>

              {/* Advanced Filters - Collapsible */}
              {filterState.showFilters && (
                <div className="p-6 bg-slate-50 grid md:grid-cols-3 gap-6 animate-fadeIn">
                  {/* State Filter */}
                  <div>
                    <label htmlFor="state-filter" className="block text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-emerald-600" />
                      Your State
                    </label>
                    <select
                      id="state-filter"
                      value={filterState.selectedState}
                      onChange={(e) => setFilterState(prev => ({ ...prev, selectedState: e.target.value }))}
                      className="w-full px-4 py-3 border-2 border-slate-300 rounded-xl text-slate-900 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all bg-white"
                      aria-label="Filter by state"
                    >
                      <option value="all">All States</option>
                      <option value="FL">Florida</option>
                      <option value="MI">Michigan</option>
                      <option value="NC">North Carolina</option>
                      <option value="AZ">Arizona</option>
                      <option value="TX">Texas</option>
                      <option value="GA">Georgia</option>
                    </select>
                  </div>

                  {/* Coverage Type Filter */}
                  <div>
                    <label htmlFor="coverage-filter" className="block text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
                      <Shield className="w-4 h-4 text-emerald-600" />
                      Coverage Type
                    </label>
                    <select
                      id="coverage-filter"
                      value={filterState.coverageType}
                      onChange={(e) => setFilterState(prev => ({ ...prev, coverageType: e.target.value }))}
                      className="w-full px-4 py-3 border-2 border-slate-300 rounded-xl text-slate-900 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all bg-white"
                      aria-label="Filter by coverage type"
                    >
                      <option value="all">All Coverage Types</option>
                      <option value="health">Health Insurance</option>
                      <option value="life">Life Insurance</option>
                      <option value="supplemental">Supplemental Coverage</option>
                      <option value="ppo">PPO Networks</option>
                    </select>
                  </div>

                  {/* Specialty Filter */}
                  <div>
                    <label htmlFor="specialty-filter" className="block text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
                      <Star className="w-4 h-4 text-emerald-600" />
                      Specialty
                    </label>
                    <select
                      id="specialty-filter"
                      value={filterState.specialty}
                      onChange={(e) => setFilterState(prev => ({ ...prev, specialty: e.target.value }))}
                      className="w-full px-4 py-3 border-2 border-slate-300 rounded-xl text-slate-900 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all bg-white"
                      aria-label="Filter by specialty"
                    >
                      <option value="all">All Specialties</option>
                      <option value="fast issue">Fast Issue / Quick Approval</option>
                      <option value="largest network">Largest Networks</option>
                      <option value="living benefits">Living Benefits</option>
                      <option value="regional">Regional Focus</option>
                      <option value="cash payouts">Cash Payouts</option>
                      <option value="cost-effective">Budget-Friendly</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Results Count & Clear Filters */}
              <div className="px-6 py-4 bg-slate-100 border-t border-slate-200 flex items-center justify-between flex-wrap gap-4">
                <div className="text-sm text-slate-700">
                  Showing <strong className="text-emerald-600 font-bold">{filteredNetworks.length}</strong> networks
                  {' '}&{' '}
                  <strong className="text-emerald-600 font-bold">{filteredCarriers.length}</strong> carriers
                  {(filterState.searchTerm || filterState.selectedState !== 'all' || filterState.coverageType !== 'all' || filterState.specialty !== 'all') && (
                    <span className="ml-2 text-slate-500">(filtered)</span>
                  )}
                </div>
                {(filterState.searchTerm || filterState.selectedState !== 'all' || filterState.coverageType !== 'all' || filterState.specialty !== 'all') && (
                  <button
                    onClick={() => setFilterState({
                      searchTerm: '',
                      selectedState: 'all',
                      coverageType: 'all',
                      specialty: 'all',
                      showFilters: filterState.showFilters
                    })}
                    className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                  >
                    <X className="w-4 h-4" />
                    Clear All Filters
                  </button>
                )}
              </div>
            </div>

            {/* Personalized Recommendations */}
            {filterState.selectedState !== 'all' && (
              <div className="mt-6 p-6 bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 rounded-xl border-2 border-cyan-300 shadow-lg animate-fadeIn">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-md">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-cyan-900 text-lg mb-1">Top Picks for {filterState.selectedState} Residents</h4>
                    <p className="text-sm text-slate-700">
                      Based on network strength, provider availability, and member satisfaction in your state
                    </p>
                  </div>
                </div>

                <div className="space-y-3 mt-4">
                  {getPersonalizedRecommendations(filterState.selectedState).map((recommendation, index) => (
                    <div key={recommendation.name} className="bg-white rounded-lg p-4 border-2 border-cyan-200 hover:border-cyan-400 hover:shadow-md transition-all duration-200">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h5 className="font-bold text-slate-900">{recommendation.name}</h5>
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-gradient-to-r from-amber-100 to-yellow-100 text-amber-800 border border-amber-300">
                              {recommendation.badge}
                            </span>
                          </div>
                          <p className="text-sm text-slate-600 leading-relaxed">{recommendation.reason}</p>
                        </div>
                        <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-1" />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="text-xs text-blue-900 leading-relaxed">
                    <strong>Note:</strong> These recommendations are based on general market data. Your best carrier depends on your specific doctors, budget, and health needs. Let's discuss your situation to find your perfect match.
                  </p>
                </div>
              </div>
            )}

            {/* No Results Message */}
            {filteredNetworks.length === 0 && filteredCarriers.length === 0 && (
              <div className="mt-6 p-8 bg-slate-50 rounded-xl border-2 border-slate-200 text-center">
                <Search className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                <h4 className="text-lg font-bold text-slate-900 mb-2">No Results Found</h4>
                <p className="text-slate-600 mb-4">
                  Try adjusting your filters or search terms to find what you're looking for.
                </p>
                <button
                  onClick={() => setFilterState({
                    searchTerm: '',
                    selectedState: 'all',
                    coverageType: 'all',
                    specialty: 'all',
                    showFilters: false
                  })}
                  className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  <X className="w-4 h-4" />
                  Reset Filters
                </button>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">

            {filteredNetworks.slice(0, showAllNetworks ? filteredNetworks.length : 3).map((network, index) => (

              <PremiumNetworkCard key={network.name} network={network} index={index} />

            ))}

          </div>

          {/* Progressive Disclosure Button */}
          {filteredNetworks.length > 3 && !showAllNetworks && (
            <div className="mt-12 text-center">
              <button
                onClick={() => setShowAllNetworks(true)}
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 group"
              >
                <span>View All {filteredNetworks.length} Networks</span>
                <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <p className="mt-3 text-sm text-slate-600">
                See {filteredNetworks.length - 3} more PPO networks including MultiPlan, UnitedHealthcare, and Blue Cross Blue Shield
              </p>
            </div>
          )}

          {/* Interactive Network Comparison Table */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-cyan-100 rounded-full px-6 py-3 mb-6">
                <BarChart3 className="w-5 h-5 text-cyan-600" />
                <span className="text-cyan-700 font-bold text-sm">NETWORK COMPARISON</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Side-by-Side PPO Network Comparison
              </h3>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Compare key features across all 6 PPO networks to find the best fit for your healthcare needs
              </p>
            </div>

            {/* Desktop/Tablet Comparison Table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-lg border-2 border-slate-200 overflow-hidden">
                <thead>
                  <tr className="bg-gradient-to-r from-slate-900 to-slate-800">
                    <th className="px-6 py-4 text-left text-white font-bold text-sm sticky left-0 bg-slate-900 z-10">Feature</th>
                    <th className="px-4 py-4 text-center text-white font-bold text-xs">Aetna PPO</th>
                    <th className="px-4 py-4 text-center text-white font-bold text-xs">Cigna PPO</th>
                    <th className="px-4 py-4 text-center text-white font-bold text-xs">First Health</th>
                    <th className="px-4 py-4 text-center text-white font-bold text-xs">MultiPlan</th>
                    <th className="px-4 py-4 text-center text-white font-bold text-xs">UHC PPO</th>
                    <th className="px-4 py-4 text-center text-white font-bold text-xs">BCBS PPO</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-slate-900 sticky left-0 bg-white z-10">Provider Count</td>
                    <td className="px-4 py-4 text-center text-slate-700">1.3M+</td>
                    <td className="px-4 py-4 text-center text-slate-700">1.1M+</td>
                    <td className="px-4 py-4 text-center text-slate-700">950K+</td>
                    <td className="px-4 py-4 text-center text-slate-700">1M+</td>
                    <td className="px-4 py-4 text-center text-slate-700 font-bold text-emerald-600">1.3M+</td>
                    <td className="px-4 py-4 text-center text-slate-700">1M+</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-slate-900 sticky left-0 bg-white z-10">Hospital Networks</td>
                    <td className="px-4 py-4 text-center text-slate-700">50K+</td>
                    <td className="px-4 py-4 text-center text-slate-700">48K+</td>
                    <td className="px-4 py-4 text-center text-slate-700">40K+</td>
                    <td className="px-4 py-4 text-center text-slate-700">45K+</td>
                    <td className="px-4 py-4 text-center text-slate-700 font-bold text-emerald-600">52K+</td>
                    <td className="px-4 py-4 text-center text-slate-700">47K+</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-slate-900 sticky left-0 bg-white z-10">Specialist Access</td>
                    <td className="px-4 py-4 text-center"><span className="inline-flex items-center justify-center w-6 h-6 bg-emerald-100 rounded-full"><CheckCircle className="w-4 h-4 text-emerald-600" /></span></td>
                    <td className="px-4 py-4 text-center"><span className="inline-flex items-center justify-center w-6 h-6 bg-emerald-100 rounded-full"><CheckCircle className="w-4 h-4 text-emerald-600" /></span></td>
                    <td className="px-4 py-4 text-center"><span className="inline-flex items-center justify-center w-6 h-6 bg-emerald-100 rounded-full"><CheckCircle className="w-4 h-4 text-emerald-600" /></span></td>
                    <td className="px-4 py-4 text-center"><span className="inline-flex items-center justify-center w-6 h-6 bg-emerald-100 rounded-full"><CheckCircle className="w-4 h-4 text-emerald-600" /></span></td>
                    <td className="px-4 py-4 text-center"><span className="inline-flex items-center justify-center w-6 h-6 bg-emerald-100 rounded-full"><CheckCircle className="w-4 h-4 text-emerald-600" /></span></td>
                    <td className="px-4 py-4 text-center"><span className="inline-flex items-center justify-center w-6 h-6 bg-emerald-100 rounded-full"><CheckCircle className="w-4 h-4 text-emerald-600" /></span></td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-slate-900 sticky left-0 bg-white z-10">Telehealth</td>
                    <td className="px-4 py-4 text-center text-slate-700 text-sm">Available</td>
                    <td className="px-4 py-4 text-center text-slate-700 text-sm font-bold text-emerald-600">24/7 Virtual</td>
                    <td className="px-4 py-4 text-center text-slate-700 text-sm">Available</td>
                    <td className="px-4 py-4 text-center text-slate-700 text-sm">Available</td>
                    <td className="px-4 py-4 text-center text-slate-700 text-sm">Available</td>
                    <td className="px-4 py-4 text-center text-slate-700 text-sm">Available</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-slate-900 sticky left-0 bg-white z-10">Best For</td>
                    <td className="px-4 py-4 text-center text-slate-600 text-xs">Comprehensive coverage</td>
                    <td className="px-4 py-4 text-center text-slate-600 text-xs">Mental health focus</td>
                    <td className="px-4 py-4 text-center text-slate-600 text-xs">Nationwide reach</td>
                    <td className="px-4 py-4 text-center text-slate-600 text-xs">Cost-effective</td>
                    <td className="px-4 py-4 text-center text-slate-600 text-xs">Largest network</td>
                    <td className="px-4 py-4 text-center text-slate-600 text-xs">Local relationships</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-slate-900 sticky left-0 bg-white z-10">AM Best Rating</td>
                    <td className="px-4 py-4 text-center text-slate-700 text-sm">A (Excellent)</td>
                    <td className="px-4 py-4 text-center text-slate-700 text-sm">A (Excellent)</td>
                    <td className="px-4 py-4 text-center text-slate-700 text-sm">Aetna Sub.</td>
                    <td className="px-4 py-4 text-center text-slate-700 text-sm">Independent</td>
                    <td className="px-4 py-4 text-center text-slate-700 text-sm font-bold text-emerald-600">A+ (Superior)</td>
                    <td className="px-4 py-4 text-center text-slate-700 text-sm">A (Excellent)</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-slate-900 sticky left-0 bg-white z-10">FL Coverage</td>
                    <td className="px-4 py-4 text-center"><span className="inline-flex items-center justify-center w-6 h-6 bg-emerald-100 rounded-full"><CheckCircle className="w-4 h-4 text-emerald-600" /></span></td>
                    <td className="px-4 py-4 text-center"><span className="inline-flex items-center justify-center w-6 h-6 bg-emerald-100 rounded-full"><CheckCircle className="w-4 h-4 text-emerald-600" /></span></td>
                    <td className="px-4 py-4 text-center"><span className="inline-flex items-center justify-center w-6 h-6 bg-emerald-100 rounded-full"><CheckCircle className="w-4 h-4 text-emerald-600" /></span></td>
                    <td className="px-4 py-4 text-center"><span className="inline-flex items-center justify-center w-6 h-6 bg-emerald-100 rounded-full"><CheckCircle className="w-4 h-4 text-emerald-600" /></span></td>
                    <td className="px-4 py-4 text-center"><span className="inline-flex items-center justify-center w-6 h-6 bg-emerald-100 rounded-full"><CheckCircle className="w-4 h-4 text-emerald-600" /></span></td>
                    <td className="px-4 py-4 text-center"><span className="inline-flex items-center justify-center w-6 h-6 bg-emerald-100 rounded-full"><CheckCircle className="w-4 h-4 text-emerald-600" /></span></td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-slate-900 sticky left-0 bg-white z-10">TX Coverage</td>
                    <td className="px-4 py-4 text-center"><span className="inline-flex items-center justify-center w-6 h-6 bg-emerald-100 rounded-full"><CheckCircle className="w-4 h-4 text-emerald-600" /></span></td>
                    <td className="px-4 py-4 text-center"><span className="inline-flex items-center justify-center w-6 h-6 bg-emerald-100 rounded-full"><CheckCircle className="w-4 h-4 text-emerald-600" /></span></td>
                    <td className="px-4 py-4 text-center"><span className="inline-flex items-center justify-center w-6 h-6 bg-emerald-100 rounded-full"><CheckCircle className="w-4 h-4 text-emerald-600" /></span></td>
                    <td className="px-4 py-4 text-center"><span className="inline-flex items-center justify-center w-6 h-6 bg-emerald-100 rounded-full"><CheckCircle className="w-4 h-4 text-emerald-600" /></span></td>
                    <td className="px-4 py-4 text-center"><span className="inline-flex items-center justify-center w-6 h-6 bg-emerald-100 rounded-full"><CheckCircle className="w-4 h-4 text-emerald-600" /></span></td>
                    <td className="px-4 py-4 text-center"><span className="inline-flex items-center justify-center w-6 h-6 bg-emerald-100 rounded-full"><CheckCircle className="w-4 h-4 text-emerald-600" /></span></td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Mobile Comparison Cards */}
            <div className="md:hidden space-y-4">
              {[
                { name: 'Aetna PPO', providers: '1.3M+', hospitals: '50K+', rating: 'A', specialty: 'Comprehensive coverage' },
                { name: 'Cigna PPO', providers: '1.1M+', hospitals: '48K+', rating: 'A', specialty: 'Mental health focus' },
                { name: 'First Health', providers: '950K+', hospitals: '40K+', rating: 'Aetna Sub.', specialty: 'Nationwide reach' },
                { name: 'MultiPlan', providers: '1M+', hospitals: '45K+', rating: 'Independent', specialty: 'Cost-effective' },
                { name: 'UHC PPO', providers: '1.3M+', hospitals: '52K+', rating: 'A+', specialty: 'Largest network', highlight: true },
                { name: 'BCBS PPO', providers: '1M+', hospitals: '47K+', rating: 'A', specialty: 'Local relationships' }
              ].map((network) => (
                <div key={network.name} className={`bg-white rounded-xl p-6 shadow-lg border-2 ${network.highlight ? 'border-emerald-300' : 'border-slate-200'}`}>
                  <h4 className="text-lg font-bold text-slate-900 mb-4">{network.name}</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-slate-500 font-medium">Providers</p>
                      <p className="text-slate-900 font-bold">{network.providers}</p>
                    </div>
                    <div>
                      <p className="text-slate-500 font-medium">Hospitals</p>
                      <p className="text-slate-900 font-bold">{network.hospitals}</p>
                    </div>
                    <div>
                      <p className="text-slate-500 font-medium">Rating</p>
                      <p className="text-slate-900 font-bold">{network.rating}</p>
                    </div>
                    <div>
                      <p className="text-slate-500 font-medium">Best For</p>
                      <p className="text-slate-700">{network.specialty}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-xl shadow-lg">
              <div className="text-center">
                <p className="text-white text-lg font-semibold mb-4">
                  Need help choosing the right network for your doctors?
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href={buildCalendlyURL('network_comparison_cta')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-white text-emerald-600 px-6 py-3 rounded-full font-bold hover:bg-emerald-50 transition-all duration-300 hover:scale-105 shadow-lg"
                  >
                    <Calendar className="w-4 h-4" />
                    Schedule Free Network Check
                  </a>
                  <a
                    href={buildPhoneTrackingURL('network_comparison_cta')}
                    onClick={() => buildPhoneTrackingURL('network_comparison_cta')}
                    className="inline-flex items-center justify-center gap-2 bg-white/20 backdrop-blur-sm border-2 border-white text-white px-6 py-3 rounded-full font-bold hover:bg-white/30 transition-all duration-300"
                  >
                    <Phone className="w-4 h-4" />
                    {BRAND.phoneHuman}
                  </a>
                </div>
                <p className="text-emerald-100 text-xs mt-3">
                  ⚡ I'll verify your doctors are in-network before you enroll
                </p>
              </div>
            </div>
          </div>

        </div>

      </section>
      </div>
      {/* End Tab Panel 1: Networks */}

      {/* Tab Panel 3: Expert Guidance */}
      <div
        id="guidance-panel"
        role="tabpanel"
        aria-labelledby="guidance-tab"
        style={{ display: activeTab === 'guidance' ? 'block' : 'none' }}
      >
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
              Not all PPO networks are created equal. Here's my professional guidance on selecting the network that works best for your specific needs.
            </p>
          </div>

          {/* Educational Content Accordions */}
          <div className="space-y-6">
            {/* Network Selection Criteria Accordion */}
            <div className="bg-white rounded-2xl shadow-lg border-2 border-slate-200 overflow-hidden">
              <button
                onClick={() => setAccordionState(prev => ({ ...prev, criteria: !prev.criteria }))}
                className="w-full p-6 md:p-8 flex items-center justify-between hover:bg-slate-50 transition-colors text-left"
                aria-expanded={accordionState.criteria}
              >
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-emerald-600" />
                  </div>
                  Network Selection Expertise
                </h3>
                <svg
                  className={`w-6 h-6 text-slate-600 transition-transform duration-200 ${accordionState.criteria ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div style={{ display: accordionState.criteria ? 'block' : 'none' }} className="px-6 md:px-8 pb-6 md:pb-8">

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-slate-900">Complete Provider Verification:</span>
                    <span className="text-slate-600 text-sm"> I confirm your doctors, specialists, and hospitals are in-network before enrollment.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-slate-900">Plan Rules Decoded:</span>
                    <span className="text-slate-600 text-sm"> I explain specialist access rules and authorization requirements specific to your plan.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-slate-900">8+ Years Network Intelligence:</span>
                    <span className="text-slate-600 text-sm"> I know which carriers maintain stable provider relationships and lowest out-of-network rates in your area.</span>
                  </div>
                </div>
              </div>
              </div>
            </div>

            {/* Decision Framework Accordion */}
            <div className="bg-slate-900 rounded-2xl shadow-lg border-2 border-slate-700 overflow-hidden">
              <button
                onClick={() => setAccordionState(prev => ({ ...prev, framework: !prev.framework }))}
                className="w-full p-6 md:p-8 flex items-center justify-between hover:bg-slate-800 transition-colors text-left"
                aria-expanded={accordionState.framework}
              >
                <h3 className="text-xl md:text-2xl font-bold text-white flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  My 3-Step Process
                </h3>
                <svg
                  className={`w-6 h-6 text-white transition-transform duration-200 ${accordionState.framework ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div style={{ display: accordionState.framework ? 'block' : 'none' }} className="px-6 md:p-8 pb-6 md:pb-8 text-white">

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-sm font-bold mt-0.5 flex-shrink-0">1</div>
                  <div>
                    <p className="font-semibold text-emerald-300 mb-1">Provider Network Verification</p>
                    <p className="text-slate-300 text-sm">Confirm your doctors and hospitals are in-network, or find quality alternatives.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-sm font-bold mt-0.5 flex-shrink-0">2</div>
                  <div>
                    <p className="font-semibold text-emerald-300 mb-1">Cost-Benefit Analysis</p>
                    <p className="text-slate-300 text-sm">Compare network costs and coverage options against your usage patterns.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-sm font-bold mt-0.5 flex-shrink-0">3</div>
                  <div>
                    <p className="font-semibold text-emerald-300 mb-1">Multi-State Planning</p>
                    <p className="text-slate-300 text-sm">Ensure network continuity if you travel or relocate across our licensed states.</p>
                  </div>
                </div>
              </div>
              </div>
            </div>

            {/* Provider Verification CTA */}
            <div className="bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl shadow-lg border-2 border-emerald-400 p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-3 flex items-center justify-center gap-2">
                <Search className="w-6 h-6" />
                Need Help Verifying Your Doctors?
              </h3>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                I'll handle the network research and coverage confirmation—saving you hours of calls.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-slate-900 font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
              >
                <Phone className="w-5 h-5" />
                Get Free Provider Analysis
              </a>
            </div>
          </div>

          {/* Decision Support Checklist - Always Visible */}
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

            {/* Micro-CTA: Case Study Follow-up */}
            <div className="mt-8 bg-gradient-to-r from-slate-50 to-emerald-50 border-2 border-emerald-200 rounded-xl p-6">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-center md:text-left">
                  <p className="text-lg font-bold text-slate-900 mb-1">
                    Want a personalized analysis like these examples?
                  </p>
                  <p className="text-sm text-slate-600">
                    I'll create a custom carrier-network recommendation based on your doctors, budget, and family needs
                  </p>
                </div>
                <a
                  href={buildCalendlyURL('comparison_table_cta')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-6 py-3 rounded-full font-bold hover:from-emerald-600 hover:to-cyan-600 transition-all duration-300 hover:scale-105 shadow-lg whitespace-nowrap"
                >
                  <Calendar className="w-4 h-4" />
                  Get My Analysis
                </a>
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
                href={buildCalendlyURL('educational_content_cta')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-emerald-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-emerald-50 transition-all duration-300 hover:scale-105 shadow-lg w-full sm:w-auto justify-center"
              >
                <Phone className="w-5 h-5" />
                Schedule Free Consultation
              </a>
              <a
                href={buildPhoneTrackingURL('educational_content_cta')}
                onClick={() => buildPhoneTrackingURL('educational_content_cta')}
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

      {/* Enhanced Lead Qualification Widget */}
      <section className="relative py-12 bg-gradient-to-br from-emerald-50 to-cyan-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border-2 border-emerald-200">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-emerald-100 rounded-full px-4 py-2 mb-4">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                <span className="text-emerald-700 font-bold text-xs">PERSONALIZED RECOMMENDATIONS</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">What Brings You Here Today?</h3>
              <p className="text-slate-600 max-w-2xl mx-auto">Choose your situation so I can prepare the most relevant carrier and network options for your consultation:</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              {/* Health Insurance - Family */}
              <a
                href={buildCalendlyURL('lead_qual_family_health')}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 bg-gradient-to-br from-emerald-50 to-white border-2 border-emerald-200 rounded-xl hover:border-emerald-400 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Family Health Coverage</h4>
                    <p className="text-xs text-slate-600">PPO plans for spouse & kids</p>
                  </div>
                </div>
                <p className="text-xs text-slate-500 mb-3">Best for: Families needing pediatrician access, maternity planning</p>
                <span className="text-emerald-600 font-semibold text-sm flex items-center gap-1">
                  Get Family Quotes <span>→</span>
                </span>
              </a>

              {/* Health Insurance - Individual */}
              <a
                href={buildCalendlyURL('lead_qual_individual_health')}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 bg-gradient-to-br from-cyan-50 to-white border-2 border-cyan-200 rounded-xl hover:border-cyan-400 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 bg-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Individual Health Plan</h4>
                    <p className="text-xs text-slate-600">Self-employed or no employer coverage</p>
                  </div>
                </div>
                <p className="text-xs text-slate-500 mb-3">Best for: Contractors, freelancers, small business owners</p>
                <span className="text-cyan-600 font-semibold text-sm flex items-center gap-1">
                  Compare Plans <span>→</span>
                </span>
              </a>

              {/* Bridge to Medicare */}
              <a
                href={buildCalendlyURL('lead_qual_bridge_to_medicare')}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 bg-gradient-to-br from-emerald-50 to-white border-2 border-emerald-200 rounded-xl hover:border-emerald-400 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Calendar className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Bridge to Medicare</h4>
                    <p className="text-xs text-slate-600">Coverage until age 65</p>
                  </div>
                </div>
                <p className="text-xs text-slate-500 mb-3">Best for: Retirees ages 60-65 needing coverage until Medicare</p>
                <span className="text-emerald-600 font-semibold text-sm flex items-center gap-1">
                  Get Retiree Options <span>→</span>
                </span>
              </a>

              {/* Life Insurance */}
              <a
                href={buildCalendlyURL('lead_qual_life_insurance')}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 bg-gradient-to-br from-cyan-50 to-white border-2 border-cyan-200 rounded-xl hover:border-cyan-400 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 bg-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Life Insurance</h4>
                    <p className="text-xs text-slate-600">Term or whole life protection</p>
                  </div>
                </div>
                <p className="text-xs text-slate-500 mb-3">Best for: Family protection, estate planning, income replacement</p>
                <span className="text-cyan-600 font-semibold text-sm flex items-center gap-1">
                  Get Life Quotes <span>→</span>
                </span>
              </a>

              {/* Supplemental */}
              <a
                href={buildCalendlyURL('lead_qual_supplemental')}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 bg-gradient-to-br from-emerald-50 to-white border-2 border-emerald-200 rounded-xl hover:border-emerald-400 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Supplemental Coverage</h4>
                    <p className="text-xs text-slate-600">Gap insurance, critical illness</p>
                  </div>
                </div>
                <p className="text-xs text-slate-500 mb-3">Best for: High-deductible plans, hospital indemnity, cancer</p>
                <span className="text-emerald-600 font-semibold text-sm flex items-center gap-1">
                  Explore Supplements <span>→</span>
                </span>
              </a>

              {/* Not Sure */}
              <a
                href={buildCalendlyURL('lead_qual_not_sure')}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 bg-gradient-to-br from-slate-50 to-white border-2 border-slate-200 rounded-xl hover:border-slate-400 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 bg-slate-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Search className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Not Sure Yet</h4>
                    <p className="text-xs text-slate-600">Explore all options together</p>
                  </div>
                </div>
                <p className="text-xs text-slate-500 mb-3">Best for: First-time buyers, complex needs, multiple types</p>
                <span className="text-slate-600 font-semibold text-sm flex items-center gap-1">
                  General Consultation <span>→</span>
                </span>
              </a>
            </div>

            <div className="text-center pt-6 border-t border-slate-200">
              <p className="text-sm text-slate-600 mb-3 font-semibold">Prefer to talk through your options first?</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={`tel:${BRAND.phoneTel}`}
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-6 py-3 rounded-full font-bold hover:from-emerald-600 hover:to-cyan-600 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <Phone className="w-4 h-4" />
                  Call {BRAND.phoneHuman}
                </a>
                <p className="flex items-center justify-center text-xs text-slate-500">
                  <span className="inline-flex items-center gap-1">
                    <CheckCircle className="w-3 h-3 text-emerald-600" />
                    15-20 minute consultations
                  </span>
                  <span className="mx-2">•</span>
                  <span className="inline-flex items-center gap-1">
                    <CheckCircle className="w-3 h-3 text-emerald-600" />
                    No obligation
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Provider Search Section */}
      <section className="relative py-20 bg-gradient-to-br from-white via-emerald-50 to-white overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(16, 185, 129, 0.1) 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-emerald-100 rounded-full px-6 py-3 mb-6">
              <Search className="w-5 h-5 text-emerald-600" />
              <span className="text-emerald-700 font-bold text-sm">PROVIDER SEARCH</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Find Your Doctor in Our Networks
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
              Verify your current healthcare providers are in-network before switching coverage. Direct access to provider directories for all PPO networks.
            </p>
          </div>

          {/* Provider Search Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {NETWORKS.map((network) => (
              <a
                key={network.name}
                href={network.lookupUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-2xl border-2 border-slate-200 hover:border-emerald-500 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div className="p-6">
                  {/* Network Logo */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="font-bold text-slate-900 text-lg mb-1 group-hover:text-emerald-600 transition-colors">
                        {network.name}
                      </h3>
                      <p className="text-sm text-slate-600">{network.rating}</p>
                    </div>
                    <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 group-hover:bg-emerald-500 rounded-xl flex items-center justify-center transition-colors">
                      <Search className="w-6 h-6 text-emerald-600 group-hover:text-white transition-colors" />
                    </div>
                  </div>

                  {/* Quick Search Info */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-start gap-2 text-sm text-slate-700">
                      <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>Search by doctor name, specialty, or location</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-slate-700">
                      <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>Real-time network verification</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-slate-700">
                      <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>View provider ratings & patient reviews</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                    <span className="text-emerald-600 font-bold group-hover:text-emerald-700 transition-colors">
                      Search Providers
                    </span>
                    <div className="transform group-hover:translate-x-1 transition-transform">
                      <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Hover gradient overlay */}
                <div className="h-1 bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </a>
            ))}
          </div>

          {/* Help Section */}
          <div className="mt-16 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border-2 border-blue-200 p-8">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-blue-900 mb-3">
                  Need Help Finding Your Doctor?
                </h3>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Not sure which network your doctor accepts? I can help! Call me at{' '}
                  <a href={`tel:${BRAND.phoneTel}`} className="font-bold text-blue-600 hover:text-blue-700 underline">
                    {BRAND.phoneHuman}
                  </a>
                  {' '}and I'll verify network participation for your specific providers during our consultation. I'll also check which carriers offer the best rates for that network.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href={buildPhoneTrackingURL('provider_search_help')}
                    onClick={() => buildPhoneTrackingURL('provider_search_help')}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-xl font-bold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 hover:scale-105 shadow-lg"
                  >
                    <Phone className="w-5 h-5" />
                    Call {BRAND.phoneHuman}
                  </a>
                  <a
                    href={buildCalendlyURL('provider_search_help')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white text-blue-600 border-2 border-blue-600 px-6 py-3 rounded-xl font-bold hover:bg-blue-50 transition-all duration-300"
                  >
                    <Calendar className="w-5 h-5" />
                    Schedule Consultation
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Provider Search Tips */}
          <div className="mt-12 bg-white rounded-2xl border-2 border-slate-200 p-8 shadow-lg">
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">💡</span>
              </div>
              Pro Tips for Provider Search
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center">
                  <span className="text-emerald-600 font-bold text-sm">1</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Search by Specialty First</h4>
                  <p className="text-sm text-slate-600">
                    If you don't have a specific doctor yet, search by specialty (cardiologist, pediatrician, etc.) and location to see all available providers.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center">
                  <span className="text-emerald-600 font-bold text-sm">2</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Verify Hospital Affiliations</h4>
                  <p className="text-sm text-slate-600">
                    Check which hospitals your preferred doctors have admitting privileges at. This ensures continuity of care if hospitalization is needed.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center">
                  <span className="text-emerald-600 font-bold text-sm">3</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Call to Confirm</h4>
                  <p className="text-sm text-slate-600">
                    Always call the provider's office directly to confirm they're accepting new patients and still participating in the network.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center">
                  <span className="text-emerald-600 font-bold text-sm">4</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Multiple Networks Available</h4>
                  <p className="text-sm text-slate-600">
                    Many doctors accept multiple PPO networks. If your doctor isn't in one network, check the others for better options.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Calculator Tool */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 rounded-full px-6 py-3 mb-6 border border-emerald-500/30">
              <Calculator className="w-5 h-5 text-emerald-400" />
              <span className="text-emerald-400 font-bold text-sm">PREMIUM ESTIMATOR</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Estimate Your Monthly Premium
            </h2>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
              Get a ballpark estimate of your health insurance costs. Actual rates vary by carrier, plan design, and underwriting.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Calculator Card */}
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
                {/* Input Section */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">Tell Us About Yourself</h3>

                  {/* Age Input */}
                  <div>
                    <label htmlFor="calc-age" className="block text-sm font-bold text-slate-900 mb-2">
                      Your Age
                    </label>
                    <input
                      id="calc-age"
                      type="number"
                      min="18"
                      max="89"
                      value={calculatorState.age}
                      onChange={(e) => setCalculatorState(prev => ({ ...prev, age: parseInt(e.target.value) || 18, showEstimate: false }))}
                      className="w-full px-4 py-3 border-2 border-slate-300 rounded-xl text-slate-900 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all"
                    />
                    <p className="mt-1 text-xs text-slate-500">Ages 18-89</p>
                  </div>

                  {/* Family Size Input */}
                  <div>
                    <label htmlFor="calc-family" className="block text-sm font-bold text-slate-900 mb-2">
                      Family Size
                    </label>
                    <select
                      id="calc-family"
                      value={calculatorState.familySize}
                      onChange={(e) => setCalculatorState(prev => ({ ...prev, familySize: parseInt(e.target.value), showEstimate: false }))}
                      className="w-full px-4 py-3 border-2 border-slate-300 rounded-xl text-slate-900 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all bg-white"
                    >
                      <option value="1">Individual (Just Me)</option>
                      <option value="2">Couple (2 People)</option>
                      <option value="3">Small Family (3 People)</option>
                      <option value="4">Family (4 People)</option>
                      <option value="5">Large Family (5+ People)</option>
                    </select>
                  </div>

                  {/* State Selection */}
                  <div>
                    <label htmlFor="calc-state" className="block text-sm font-bold text-slate-900 mb-2">
                      Your State
                    </label>
                    <select
                      id="calc-state"
                      value={calculatorState.state}
                      onChange={(e) => setCalculatorState(prev => ({ ...prev, state: e.target.value, showEstimate: false }))}
                      className="w-full px-4 py-3 border-2 border-slate-300 rounded-xl text-slate-900 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all bg-white"
                    >
                      <option value="FL">Florida</option>
                      <option value="MI">Michigan</option>
                      <option value="NC">North Carolina</option>
                      <option value="AZ">Arizona</option>
                      <option value="TX">Texas</option>
                      <option value="GA">Georgia</option>
                    </select>
                  </div>

                  {/* Health Status */}
                  <div>
                    <label htmlFor="calc-health" className="block text-sm font-bold text-slate-900 mb-2">
                      Overall Health Status
                    </label>
                    <select
                      id="calc-health"
                      value={calculatorState.healthStatus}
                      onChange={(e) => setCalculatorState(prev => ({ ...prev, healthStatus: e.target.value, showEstimate: false }))}
                      className="w-full px-4 py-3 border-2 border-slate-300 rounded-xl text-slate-900 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all bg-white"
                    >
                      <option value="excellent">Excellent - No conditions</option>
                      <option value="good">Good - Minor managed conditions</option>
                      <option value="fair">Fair - Some chronic conditions</option>
                      <option value="poor">Poor - Multiple conditions</option>
                    </select>
                  </div>

                  {/* Deductible Preference */}
                  <div>
                    <label htmlFor="calc-deductible" className="block text-sm font-bold text-slate-900 mb-2">
                      Deductible Preference
                    </label>
                    <select
                      id="calc-deductible"
                      value={calculatorState.deductiblePreference}
                      onChange={(e) => setCalculatorState(prev => ({ ...prev, deductiblePreference: e.target.value, showEstimate: false }))}
                      className="w-full px-4 py-3 border-2 border-slate-300 rounded-xl text-slate-900 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all bg-white"
                    >
                      <option value="high">High Deductible ($5,000+) - Lower Premium</option>
                      <option value="medium">Medium Deductible ($2,500-$5,000)</option>
                      <option value="low">Low Deductible (Under $2,500) - Higher Premium</option>
                    </select>
                  </div>

                  {/* Tobacco Use */}
                  <div>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={calculatorState.tobaccoUse}
                        onChange={(e) => setCalculatorState(prev => ({ ...prev, tobaccoUse: e.target.checked, showEstimate: false }))}
                        className="w-5 h-5 border-2 border-slate-300 rounded text-emerald-600 focus:ring-2 focus:ring-emerald-200"
                      />
                      <span className="text-sm font-bold text-slate-900">
                        I use tobacco products
                        <span className="block text-xs font-normal text-slate-600 mt-1">Tobacco use typically increases premiums by 20-50%</span>
                      </span>
                    </label>
                  </div>

                  {/* Pre-existing Conditions */}
                  <div>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={calculatorState.preExistingConditions}
                        onChange={(e) => setCalculatorState(prev => ({ ...prev, preExistingConditions: e.target.checked, showEstimate: false }))}
                        className="w-5 h-5 border-2 border-slate-300 rounded text-emerald-600 focus:ring-2 focus:ring-emerald-200"
                      />
                      <span className="text-sm font-bold text-slate-900">
                        I have significant pre-existing conditions
                        <span className="block text-xs font-normal text-slate-600 mt-1">May affect pricing and underwriting approval</span>
                      </span>
                    </label>
                  </div>

                  <button
                    onClick={() => setCalculatorState(prev => ({ ...prev, showEstimate: true }))}
                    className="w-full bg-gradient-to-r from-emerald-600 to-cyan-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-emerald-700 hover:to-cyan-700 transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                  >
                    <Calculator className="w-5 h-5" />
                    Calculate Estimate
                  </button>
                </div>

                {/* Results Section */}
                <div className="bg-gradient-to-br from-emerald-50 to-cyan-50 rounded-2xl p-8 flex flex-col justify-center">
                  {calculatorState.showEstimate ? (
                    <>
                      <h3 className="text-2xl font-bold text-slate-900 mb-6">Your Estimated Range</h3>

                      <div className="space-y-4 mb-8">
                        {/* Low Estimate */}
                        <div className="bg-white rounded-xl p-4 border-2 border-emerald-200">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-sm font-semibold text-slate-600">Budget-Friendly</p>
                              <p className="text-xs text-slate-500">Higher deductible plans</p>
                            </div>
                            <div className="text-right">
                              <p className="text-3xl font-bold text-emerald-600">
                                ${calculateEstimate().low}
                              </p>
                              <p className="text-xs text-slate-500">per month</p>
                            </div>
                          </div>
                        </div>

                        {/* Mid Estimate */}
                        <div className="bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-xl p-4 border-2 border-emerald-400 shadow-lg">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-sm font-bold text-white">Most Popular</p>
                              <p className="text-xs text-white/90">Balanced coverage</p>
                            </div>
                            <div className="text-right">
                              <p className="text-3xl font-bold text-white">
                                ${calculateEstimate().mid}
                              </p>
                              <p className="text-xs text-white/90">per month</p>
                            </div>
                          </div>
                        </div>

                        {/* High Estimate */}
                        <div className="bg-white rounded-xl p-4 border-2 border-cyan-200">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-sm font-semibold text-slate-600">Premium Care</p>
                              <p className="text-xs text-slate-500">Lower deductibles</p>
                            </div>
                            <div className="text-right">
                              <p className="text-3xl font-bold text-cyan-600">
                                ${calculateEstimate().high}
                              </p>
                              <p className="text-xs text-slate-500">per month</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
                        <p className="text-sm text-slate-700 leading-relaxed">
                          <strong className="text-blue-900">Important:</strong> These are ballpark estimates only. Actual premiums depend on specific plan design, underwriting review, and carrier pricing. Let's get you accurate quotes from multiple carriers.
                        </p>
                      </div>

                      <a
                        href={buildCalendlyURL('calculator_quote_request')}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-4 rounded-xl font-bold text-center hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                      >
                        <Calendar className="w-5 h-5" />
                        Get Accurate Quotes
                      </a>
                    </>
                  ) : (
                    <div className="text-center py-12">
                      <div className="w-20 h-20 bg-emerald-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <Calculator className="w-10 h-10 text-emerald-600" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">Ready to Estimate?</h3>
                      <p className="text-slate-600 text-sm">
                        Fill in your information on the left and click "Calculate Estimate" to see your personalized premium range.
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Disclaimer Footer */}
              <div className="bg-slate-100 border-t-2 border-slate-200 px-8 py-6">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-slate-300 rounded-full flex items-center justify-center">
                    <span className="text-slate-700 text-xs font-bold">ℹ</span>
                  </div>
                  <div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      <strong className="text-slate-900">Estimate Disclaimer:</strong> This calculator provides general premium estimates and should not be considered a quote or guarantee of coverage. Actual rates are determined by carrier underwriting, specific plan selection, geographic rating areas, tobacco use, and other factors. Private health insurance typically saves 30-50% compared to unsubsidized marketplace plans for healthy applicants. Some applicants may be declined or offered modified terms based on health history.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Coverage Gap Analysis - Visual Breakdown */}
            {calculatorState.showEstimate && (
              <div className="mt-12 bg-white rounded-3xl shadow-2xl overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-cyan-600 px-8 py-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Understanding Your Coverage</h3>
                  <p className="text-blue-100 text-sm">Here's what you'll typically pay with a {calculatorState.deductiblePreference} deductible plan</p>
                </div>

                <div className="p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Annual Cost Breakdown */}
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 mb-4">Annual Cost Breakdown</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center p-3 bg-emerald-50 rounded-lg border border-emerald-200">
                          <span className="text-sm font-semibold text-slate-700">Monthly Premium × 12</span>
                          <span className="text-lg font-bold text-emerald-600">${(calculateEstimate().mid * 12).toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg border border-slate-200">
                          <span className="text-sm font-semibold text-slate-700">Deductible (per person)</span>
                          <span className="text-lg font-bold text-slate-700">
                            ${calculatorState.deductiblePreference === 'low' ? '2,000' :
                              calculatorState.deductiblePreference === 'medium' ? '4,000' : '6,000'}
                          </span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg border border-slate-200">
                          <span className="text-sm font-semibold text-slate-700">Typical Out-of-Pocket Max</span>
                          <span className="text-lg font-bold text-slate-700">
                            ${calculatorState.deductiblePreference === 'low' ? '6,000' :
                              calculatorState.deductiblePreference === 'medium' ? '8,000' : '9,100'}
                          </span>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg mt-4">
                          <span className="text-sm font-bold text-white">Maximum Annual Exposure</span>
                          <span className="text-xl font-bold text-white">
                            ${((calculateEstimate().mid * 12) +
                              parseInt(calculatorState.deductiblePreference === 'low' ? '6000' :
                                calculatorState.deductiblePreference === 'medium' ? '8000' : '9100')).toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* What's Covered */}
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 mb-4">What's Typically Covered</h4>
                      <div className="space-y-2">
                        <div className="flex items-start gap-2 p-2">
                          <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-sm font-semibold text-slate-900">Preventive Care</p>
                            <p className="text-xs text-slate-600">100% covered, no deductible</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2 p-2">
                          <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-sm font-semibold text-slate-900">Doctor Visits</p>
                            <p className="text-xs text-slate-600">Copay $30-$50 or after deductible</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2 p-2">
                          <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-sm font-semibold text-slate-900">Hospital Services</p>
                            <p className="text-xs text-slate-600">After deductible, 80/20 coinsurance</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2 p-2">
                          <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-sm font-semibold text-slate-900">Prescription Drugs</p>
                            <p className="text-xs text-slate-600">Tiered copays $10-$75+</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2 p-2">
                          <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-sm font-semibold text-slate-900">Emergency Care</p>
                            <p className="text-xs text-slate-600">After deductible, subject to copay</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2 p-2">
                          <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-sm font-semibold text-slate-900">Mental Health Services</p>
                            <p className="text-xs text-slate-600">Same as medical coverage</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-xl">
                    <div className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-semibold text-amber-900 mb-1">Coverage Gap Protection</p>
                        <p className="text-xs text-amber-800 leading-relaxed">
                          Your out-of-pocket maximum protects you from catastrophic costs. Once you reach this limit, insurance covers 100% of in-network costs for the rest of the year.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 text-center">
                    <a
                      href={buildCalendlyURL('gap_analysis_consultation')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-xl font-bold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 hover:scale-105 shadow-lg"
                    >
                      <Calendar className="w-5 h-5" />
                      Discuss Your Coverage Needs
                    </a>
                  </div>
                </div>
              </div>
            )}

            {/* Why Estimates Vary */}
            <div className="mt-12 grid md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
                <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center mb-4">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold text-white mb-2">Plan Design</h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Deductibles, copays, coinsurance, and out-of-pocket maximums all impact premium pricing. Lower deductibles = higher premiums.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
                <div className="w-12 h-12 bg-cyan-500 rounded-xl flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold text-white mb-2">Health Underwriting</h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Your specific medical history, medications, and recent doctor visits affect your individual rate class and final premium.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
                <div className="w-12 h-12 bg-teal-500 rounded-xl flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold text-white mb-2">Carrier Pricing</h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Each carrier has different pricing strategies and risk models. That's why I compare 15+ carriers to find your best rate.
                </p>
              </div>
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
              <span className="block gradient-text-luxury">Our Licensed Markets</span>
            </h2>

            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Understanding regional carrier dynamics, hospital networks, and pricing trends helps you make informed decisions based on where you live.
            </p>
          </div>

          {/* State Insights Grid - Enhanced with Provider Density Data */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Florida */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-emerald-400/30 transition-colors">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">FL</div>
                Florida
              </h3>
              <div className="mb-3 p-3 bg-emerald-500/10 rounded-lg border border-emerald-400/20">
                <p className="text-xs text-emerald-300 font-bold mb-1">PROVIDER DENSITY: EXCELLENT</p>
                <p className="text-xs text-slate-300">185K+ providers across 3 major metro areas</p>
              </div>
              <ul className="space-y-2 text-sm text-slate-300">
                <li><strong className="text-emerald-400">Top Networks:</strong> UHC (strongest), Aetna, BCBS</li>
                <li><strong className="text-emerald-400">South FL (Miami/Ft. Lauderdale):</strong> 45K+ providers • Baptist Health, Memorial, Cleveland Clinic Florida</li>
                <li><strong className="text-emerald-400">Central FL (Tampa/Orlando):</strong> 38K+ providers • AdventHealth, BayCare, Orlando Health</li>
                <li><strong className="text-emerald-400">North FL (Jacksonville):</strong> 12K+ providers • Mayo Clinic, UF Health, Baptist Jacksonville</li>
                <li><strong className="text-emerald-400">Network Adequacy:</strong> Urban 5/5 stars • Rural 4/5 stars</li>
                <li><strong className="text-emerald-400">Average Premium (Age 40):</strong> $425-650/mo</li>
                <li><strong className="text-emerald-400">Best Value Carrier:</strong> Allstate Health (30% below UHC)</li>
              </ul>
            </div>

            {/* Michigan */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-cyan-400/30 transition-colors">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <div className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">MI</div>
                Michigan
              </h3>
              <div className="mb-3 p-3 bg-cyan-500/10 rounded-lg border border-cyan-400/20">
                <p className="text-xs text-cyan-300 font-bold mb-1">PROVIDER DENSITY: VERY GOOD</p>
                <p className="text-xs text-slate-300">42K+ providers, BCBSM market leader</p>
              </div>
              <ul className="space-y-2 text-sm text-slate-300">
                <li><strong className="text-cyan-400">Top Networks:</strong> BCBSM (72% market share), UHC, Aetna</li>
                <li><strong className="text-cyan-400">Metro Detroit:</strong> 28K+ providers • Henry Ford, Beaumont, DMC</li>
                <li><strong className="text-cyan-400">Ann Arbor/Ypsilanti:</strong> 8K+ providers • U of M Health (top-ranked)</li>
                <li><strong className="text-cyan-400">Grand Rapids:</strong> 6K+ providers • Spectrum Health, Mercy</li>
                <li><strong className="text-cyan-400">Network Adequacy:</strong> Urban 5/5 stars • Rural 3.5/5 stars</li>
                <li><strong className="text-cyan-400">Average Premium (Age 40):</strong> $525-775/mo (15% above national avg)</li>
                <li><strong className="text-cyan-400">Insider Tip:</strong> BCBSM dominance means better hospital discounts</li>
              </ul>
            </div>

            {/* North Carolina */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-emerald-400/30 transition-colors">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">NC</div>
                North Carolina
              </h3>
              <div className="mb-3 p-3 bg-emerald-500/10 rounded-lg border border-emerald-400/20">
                <p className="text-xs text-emerald-300 font-bold mb-1">PROVIDER DENSITY: EXCELLENT</p>
                <p className="text-xs text-slate-300">68K+ providers, 4 academic medical centers</p>
              </div>
              <ul className="space-y-2 text-sm text-slate-300">
                <li><strong className="text-emerald-400">Top Networks:</strong> BCBSNC (largest), UHC, Aetna</li>
                <li><strong className="text-emerald-400">Triangle (Raleigh/Durham):</strong> 22K+ providers • Duke, UNC Health, WakeMed</li>
                <li><strong className="text-emerald-400">Charlotte Metro:</strong> 25K+ providers • Atrium Health, Novant</li>
                <li><strong className="text-emerald-400">Triad (Greensboro/Winston-Salem):</strong> 14K+ providers • Wake Forest Baptist, Cone Health</li>
                <li><strong className="text-emerald-400">Network Adequacy:</strong> Urban 5/5 stars • Rural 3/5 stars</li>
                <li><strong className="text-emerald-400">Average Premium (Age 40):</strong> $445-625/mo</li>
                <li><strong className="text-emerald-400">Academic Center Access:</strong> Critical differentiator (verify Duke/UNC inclusion)</li>
              </ul>
            </div>

            {/* Arizona */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-cyan-400/30 transition-colors">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <div className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">AZ</div>
                Arizona
              </h3>
              <div className="mb-3 p-3 bg-cyan-500/10 rounded-lg border border-cyan-400/20">
                <p className="text-xs text-cyan-300 font-bold mb-1">PROVIDER DENSITY: VERY GOOD</p>
                <p className="text-xs text-slate-300">38K+ providers, Mayo Clinic access critical</p>
              </div>
              <ul className="space-y-2 text-sm text-slate-300">
                <li><strong className="text-cyan-400">Top Networks:</strong> UHC, Aetna, BCBS Arizona</li>
                <li><strong className="text-cyan-400">Phoenix Metro:</strong> 28K+ providers • Mayo Clinic, Banner, HonorHealth</li>
                <li><strong className="text-cyan-400">Tucson:</strong> 8K+ providers • Banner UMC, TMC Healthcare</li>
                <li><strong className="text-cyan-400">Flagstaff/Rural:</strong> 2K+ providers (limited options)</li>
                <li><strong className="text-cyan-400">Network Adequacy:</strong> Phoenix 5/5 stars • Rural 2.5/5 stars</li>
                <li><strong className="text-cyan-400">Average Premium (Age 40):</strong> $395-575/mo (excellent value)</li>
                <li><strong className="text-cyan-400">Retiree Focus:</strong> Bridge-to-Medicare plans widely available</li>
              </ul>
            </div>

            {/* Texas */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-emerald-400/30 transition-colors">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">TX</div>
                Texas
              </h3>
              <div className="mb-3 p-3 bg-emerald-500/10 rounded-lg border border-emerald-400/20">
                <p className="text-xs text-emerald-300 font-bold mb-1">PROVIDER DENSITY: EXCEPTIONAL</p>
                <p className="text-xs text-slate-300">245K+ providers, most competitive pricing in US</p>
              </div>
              <ul className="space-y-2 text-sm text-slate-300">
                <li><strong className="text-emerald-400">Top Networks:</strong> UHC, Aetna, BCBS Texas, SGIC (regional)</li>
                <li><strong className="text-emerald-400">DFW Metroplex:</strong> 68K+ providers • Baylor Scott & White, Methodist, Texas Health</li>
                <li><strong className="text-emerald-400">Houston:</strong> 58K+ providers • MD Anderson, Methodist, Memorial Hermann</li>
                <li><strong className="text-emerald-400">Austin:</strong> 22K+ providers • Ascension Seton, St. David's, Baylor Scott & White</li>
                <li><strong className="text-emerald-400">San Antonio:</strong> 18K+ providers • Methodist, UT Health</li>
                <li><strong className="text-emerald-400">Network Adequacy:</strong> Urban 5/5 stars • Rural 4/5 stars</li>
                <li><strong className="text-emerald-400">Average Premium (Age 40):</strong> $325-495/mo (lowest in licensed states)</li>
                <li><strong className="text-emerald-400">Why So Cheap?</strong> High carrier competition + young population demographics</li>
              </ul>
            </div>

            {/* Georgia */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-cyan-400/30 transition-colors">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <div className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">GA</div>
                Georgia
              </h3>
              <div className="mb-3 p-3 bg-cyan-500/10 rounded-lg border border-cyan-400/20">
                <p className="text-xs text-cyan-300 font-bold mb-1">PROVIDER DENSITY: GOOD (METRO) / FAIR (RURAL)</p>
                <p className="text-xs text-slate-300">52K+ providers, Atlanta-concentrated</p>
              </div>
              <ul className="space-y-2 text-sm text-slate-300">
                <li><strong className="text-cyan-400">Top Networks:</strong> UHC, Aetna, Ambetter (regional)</li>
                <li><strong className="text-cyan-400">Atlanta Metro:</strong> 38K+ providers • Emory, Piedmont, Northside, WellStar</li>
                <li><strong className="text-cyan-400">Savannah/Coastal:</strong> 6K+ providers • Memorial Health, St. Joseph's Candler</li>
                <li><strong className="text-cyan-400">Macon/Columbus:</strong> 5K+ providers • Atrium Navicent, Piedmont Columbus</li>
                <li><strong className="text-cyan-400">Rural South GA:</strong> 3K+ providers (network adequacy concerns)</li>
                <li><strong className="text-cyan-400">Network Adequacy:</strong> Atlanta 4.5/5 stars • Rural 2/5 stars</li>
                <li><strong className="text-cyan-400">Average Premium (Age 40):</strong> $415-595/mo</li>
                <li><strong className="text-cyan-400">Rural Strategy:</strong> UHC/BCBS GA required for sufficient access</li>
              </ul>
            </div>
          </div>

          {/* Actionable Insight */}
          <div className="mt-12 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-400/30 rounded-xl p-6 md:p-8">
            <h4 className="text-xl font-bold text-white mb-4">How I Use This Intelligence</h4>
            <p className="text-slate-200 leading-relaxed mb-6">
              During your consultation, I leverage 8+ years of experience, along with direct access to carrier network data and provider directories. I verify your specific doctors are in-network, assess local hospital system participation, and evaluate network depth in your county. This hands-on research helps me identify which carriers offer the strongest networks in your area. I combine this market knowledge with your specific doctors, budget, and health needs to recommend the optimal carrier-network combination.
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
      </div>
      {/* End Tab Panel 3: Guidance */}

      {/* Tab Panel 2: Compare Carriers */}
      <div
        id="carriers-panel"
        role="tabpanel"
        aria-labelledby="carriers-tab"
        style={{ display: activeTab === 'carriers' ? 'block' : 'none' }}
      >
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

            {filteredCarriers.slice(0, showAllCarriers ? filteredCarriers.length : 4).map((carrier, index) => (

              <LuxuryCarrierCard key={carrier.name} carrier={carrier} index={index} />

            ))}

          </div>

          {/* Progressive Disclosure Button */}
          {filteredCarriers.length > 4 && !showAllCarriers && (
            <div className="mt-12 text-center">
              <button
                onClick={() => setShowAllCarriers(true)}
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-400 to-cyan-400 hover:from-emerald-500 hover:to-cyan-500 text-slate-900 font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 group"
              >
                <span>See All {filteredCarriers.length} Carriers</span>
                <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <p className="mt-3 text-sm text-slate-400">
                View {filteredCarriers.length - 4} more carriers including SGIC, Aflac, Philadelphia American Life, and Blue Cross Blue Shield
              </p>
            </div>
          )}

          {/* Carrier Comparison Visual Tool */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-cyan-500/20 rounded-full px-6 py-3 mb-6">
                <Award className="w-5 h-5 text-cyan-400" />
                <span className="text-cyan-300 font-bold text-sm">CARRIER COMPARISON</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Compare Insurance Carriers by Specialty
              </h3>
              <p className="text-lg text-slate-300 max-w-3xl mx-auto">
                Each carrier excels in different areas. See which carriers best match your specific needs.
              </p>
            </div>

            {/* Carrier Specialty Matrix */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Health Insurance Specialists */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-emerald-400/30 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">Health Insurance</h4>
                    <p className="text-xs text-emerald-400">PPO & Major Medical</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                    <span className="text-slate-300 text-sm">UnitedHealthcare</span>
                    <span className="text-emerald-400 font-bold text-sm">A+ Rated</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                    <span className="text-slate-300 text-sm">Allstate Health</span>
                    <span className="text-emerald-400 font-bold text-sm">A+ Rated</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                    <span className="text-slate-300 text-sm">BCBS</span>
                    <span className="text-emerald-400 font-bold text-sm">A Rated</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                    <span className="text-slate-300 text-sm">SGIC</span>
                    <span className="text-cyan-400 font-bold text-sm">B++ Rated</span>
                  </div>
                </div>
                <p className="mt-4 text-xs text-slate-400 italic">
                  Best for: Families, self-employed, ACA alternatives
                </p>
              </div>

              {/* Life Insurance Specialists */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-cyan-400/30 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">Life Insurance</h4>
                    <p className="text-xs text-cyan-400">Term & Whole Life</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                    <span className="text-slate-300 text-sm">Mutual of Omaha</span>
                    <span className="text-emerald-400 font-bold text-sm">A+ Rated</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                    <span className="text-slate-300 text-sm">Americo</span>
                    <span className="text-emerald-400 font-bold text-sm">A- Rated</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                    <span className="text-slate-300 text-sm">Philadelphia American</span>
                    <span className="text-emerald-400 font-bold text-sm">A- Rated</span>
                  </div>
                </div>
                <p className="mt-4 text-xs text-slate-400 italic">
                  Best for: Family protection, estate planning, living benefits
                </p>
              </div>

              {/* Supplemental Insurance Specialists */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-emerald-400/30 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">Supplemental Plans</h4>
                    <p className="text-xs text-emerald-400">Gap Coverage & Cash Benefits</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                    <span className="text-slate-300 text-sm">Aflac</span>
                    <span className="text-emerald-400 font-bold text-sm">A+ Rated</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                    <span className="text-slate-300 text-sm">Mutual of Omaha</span>
                    <span className="text-emerald-400 font-bold text-sm">A+ Rated</span>
                  </div>
                </div>
                <p className="mt-4 text-xs text-slate-400 italic">
                  Best for: Deductible assistance, hospitalization, critical illness
                </p>
              </div>
            </div>

            {/* Carrier Selection Guide */}
            <div className="mt-12 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-400/30 rounded-xl p-8">
              <h4 className="text-2xl font-bold text-white mb-6 text-center">How to Choose the Right Carrier</h4>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h5 className="font-bold text-white mb-1">Financial Strength Matters</h5>
                      <p className="text-sm text-slate-300">All my carriers have A- or higher AM Best ratings, ensuring they'll be here to pay claims when you need them most.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <Shield className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h5 className="font-bold text-white mb-1">Network Access</h5>
                      <p className="text-sm text-slate-300">Different carriers use different PPO networks. I match your doctors to carriers offering the strongest network in your area.</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <BarChart3 className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h5 className="font-bold text-white mb-1">Pricing Variations</h5>
                      <p className="text-sm text-slate-300">For identical networks, carrier premiums can vary 20-40%. I compare all options to find your best value.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <Award className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h5 className="font-bold text-white mb-1">Specialty Features</h5>
                      <p className="text-sm text-slate-300">Some carriers excel at specific needs: fast approvals (Allstate), living benefits (Mutual of Omaha), or underwriting flexibility (Philadelphia American).</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/20 text-center">
                <p className="text-white font-semibold mb-4">Ready to find your perfect carrier match?</p>
                <a
                  href="https://calendly.com/bradfordinformedguidance"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-full font-bold hover:bg-emerald-50 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <Calendar className="w-5 h-5" />
                  Schedule Free Consultation
                </a>
              </div>
            </div>
          </div>

        </div>

      </section>



      {/* Newsletter Signup for Non-Converters */}
      <section className="relative py-16 bg-gradient-to-br from-emerald-500 via-cyan-500 to-teal-500 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-10 border border-white/20 shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Not Ready to Schedule Yet?
            </h2>
            <p className="text-lg text-emerald-50 mb-8 max-w-2xl mx-auto">
              Get my monthly insurance insights email with carrier updates, premium trends, and money-saving strategies for residents in our licensed markets.
            </p>

            {/* Email Signup Form */}
            <form className="max-w-md mx-auto" action="https://bradfordinformedguidance.us7.list-manage.com/subscribe/post?u=YOUR_USER_ID&amp;id=YOUR_LIST_ID" method="post" target="_blank">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  name="EMAIL"
                  placeholder="Enter your email address"
                  required
                  className="flex-1 px-4 py-3 rounded-full border-2 border-white/30 bg-white/90 backdrop-blur-sm text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                />
                <button
                  type="submit"
                  className="px-8 py-3 bg-slate-900 text-white font-bold rounded-full hover:bg-slate-800 transition-all duration-300 hover:scale-105 shadow-lg whitespace-nowrap"
                >
                  Subscribe
                </button>
              </div>
            </form>

            <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-emerald-50">
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4" />
                Free monthly insights
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4" />
                No spam ever
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4" />
                Unsubscribe anytime
              </span>
            </div>

            <p className="mt-6 text-xs text-emerald-100">
              Join 1,200+ subscribers who get actionable insurance advice in their inbox
            </p>
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

      {/* Trust-Building Section: Credentials, Experience & Client Success Stories */}
      <section className="relative py-16 md:py-20 overflow-hidden bg-gradient-to-br from-white via-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-emerald-100 rounded-full px-6 py-3 mb-6">
              <Award className="w-5 h-5 text-emerald-600" />
              <span className="text-emerald-700 font-bold text-sm">PROVEN TRACK RECORD</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Clients Trust My Guidance
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              8+ years of licensed experience helping families across 6 states find the right coverage at the right price
            </p>
          </div>

          {/* Professional Credentials */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-emerald-200">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 text-center mb-2">Licensed & Bonded</h3>
              <p className="text-slate-600 text-center text-sm mb-4">
                Active insurance licenses in FL, MI, NC, AZ, TX, and GA since 2017
              </p>
              <div className="space-y-2 text-xs text-slate-700">
                <div className="flex items-center justify-between p-2 bg-slate-50 rounded">
                  <span>Florida License</span>
                  <span className="font-bold text-emerald-600">Active</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-slate-50 rounded">
                  <span>Michigan License</span>
                  <span className="font-bold text-emerald-600">Active</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-slate-50 rounded">
                  <span>North Carolina License</span>
                  <span className="font-bold text-emerald-600">Active</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-slate-50 rounded">
                  <span>Arizona License</span>
                  <span className="font-bold text-emerald-600">Active</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-slate-50 rounded">
                  <span>Texas License</span>
                  <span className="font-bold text-emerald-600">Active</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-slate-50 rounded">
                  <span>Georgia License</span>
                  <span className="font-bold text-emerald-600">Active</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-cyan-200">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 text-center mb-2">Industry Partnership</h3>
              <p className="text-slate-600 text-center text-sm mb-4">
                Professional partnership provides exclusive carrier access and priority underwriting
              </p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                  <span>Direct underwriter access for faster approvals</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                  <span>Priority case review and expedited application processing</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                  <span>Claims escalation support when carriers delay or deny</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                  <span>15+ A-rated carrier relationships nationwide</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-emerald-200">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 text-center mb-2">Industry Experience</h3>
              <p className="text-slate-600 text-center text-sm mb-4">
                8+ years helping families navigate health, life, and supplemental insurance
              </p>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="p-3 bg-emerald-50 rounded-lg">
                  <p className="text-2xl font-bold text-emerald-600">500+</p>
                  <p className="text-xs text-slate-600">Families Served</p>
                </div>
                <div className="p-3 bg-emerald-50 rounded-lg">
                  <p className="text-2xl font-bold text-emerald-600">15+</p>
                  <p className="text-xs text-slate-600">Carrier Partners</p>
                </div>
                <div className="p-3 bg-emerald-50 rounded-lg">
                  <p className="text-2xl font-bold text-emerald-600">6</p>
                  <p className="text-xs text-slate-600">States Licensed</p>
                </div>
                <div className="p-3 bg-emerald-50 rounded-lg">
                  <p className="text-2xl font-bold text-emerald-600">98%</p>
                  <p className="text-xs text-slate-600">Client Retention</p>
                </div>
              </div>
            </div>
          </div>

          {/* Client Success Stories */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-8">
              Real Client Success Stories
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Success Story 1 */}
              <div className="bg-gradient-to-br from-emerald-50 to-white rounded-xl p-6 border-2 border-emerald-200 shadow-lg">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    TF
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">Tampa Family of 4</p>
                    <p className="text-sm text-slate-600">Florida • Age 38 & 35 with 2 children</p>
                    <p className="text-xs text-emerald-600 font-semibold mt-1">Health Insurance • 2024</p>
                  </div>
                </div>
                <p className="text-slate-700 leading-relaxed mb-4 text-sm">
                  <strong className="text-slate-900">Challenge:</strong> Currently paying $1,850/month for ACA marketplace coverage with $8,000 family deductible. Income too high for subsidies but struggling with premiums.
                </p>
                <p className="text-slate-700 leading-relaxed mb-4 text-sm">
                  <strong className="text-slate-900">Solution:</strong> Switched to Allstate Health PPO using Aetna network. Verified pediatrician and Tampa General in-network. Premium: $965/month with $5,000 family deductible.
                </p>
                <div className="bg-white rounded-lg p-4 border border-emerald-300">
                  <p className="text-emerald-700 font-bold text-lg">Annual Savings: $10,620</p>
                  <p className="text-xs text-slate-600 mt-1">Lower premium + lower deductible = $885/month savings</p>
                </div>
              </div>

              {/* Success Story 2 */}
              <div className="bg-gradient-to-br from-cyan-50 to-white rounded-xl p-6 border-2 border-cyan-200 shadow-lg">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    CP
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">Charlotte Professional</p>
                    <p className="text-sm text-slate-600">North Carolina • Age 45, Self-Employed</p>
                    <p className="text-xs text-cyan-600 font-semibold mt-1">Health Insurance • 2023</p>
                  </div>
                </div>
                <p className="text-slate-700 leading-relaxed mb-4 text-sm">
                  <strong className="text-slate-900">Challenge:</strong> Needed Duke Health cardiologist access for pre-existing heart condition. Previous carrier declined renewal after diagnosis.
                </p>
                <p className="text-slate-700 leading-relaxed mb-4 text-sm">
                  <strong className="text-slate-900">Solution:</strong> Enrolled in UnitedHealthcare PPO with guaranteed Duke Health access. Negotiated underwriting exception for pre-existing condition. No rate increase vs. standard rates.
                </p>
                <div className="bg-white rounded-lg p-4 border border-cyan-300">
                  <p className="text-cyan-700 font-bold text-lg">Coverage Secured</p>
                  <p className="text-xs text-slate-600 mt-1">Maintained Duke cardiologist + avoided 40% rate penalty from competitor carrier</p>
                </div>
              </div>

              {/* Success Story 3 */}
              <div className="bg-gradient-to-br from-emerald-50 to-white rounded-xl p-6 border-2 border-emerald-200 shadow-lg">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    AR
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">Arizona Retiree</p>
                    <p className="text-sm text-slate-600">Arizona • Age 62, Bridge to Medicare</p>
                    <p className="text-xs text-emerald-600 font-semibold mt-1">Health Insurance • 2024</p>
                  </div>
                </div>
                <p className="text-slate-700 leading-relaxed mb-4 text-sm">
                  <strong className="text-slate-900">Challenge:</strong> Needed 3-year coverage until Medicare eligibility at 65. Diabetes diagnosis complicated underwriting. Two carriers declined application.
                </p>
                <p className="text-slate-700 leading-relaxed mb-4 text-sm">
                  <strong className="text-slate-900">Solution:</strong> Philadelphia American Life accepted with standard rates. Aetna PPO network includes Mayo Clinic Arizona for ongoing care. 3-year rate lock secured.
                </p>
                <div className="bg-white rounded-lg p-4 border border-emerald-300">
                  <p className="text-emerald-700 font-bold text-lg">Coverage Approved</p>
                  <p className="text-xs text-slate-600 mt-1">After 2 declines, secured coverage with no rate penalty for pre-existing condition</p>
                </div>
              </div>

              {/* Success Story 4 */}
              <div className="bg-gradient-to-br from-cyan-50 to-white rounded-xl p-6 border-2 border-cyan-200 shadow-lg">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    HF
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">Houston Tech Startup Founder</p>
                    <p className="text-sm text-slate-600">Texas • Age 33, Self-Employed</p>
                    <p className="text-xs text-cyan-600 font-semibold mt-1">Health Insurance • 2024</p>
                  </div>
                </div>
                <p className="text-slate-700 leading-relaxed mb-4 text-sm">
                  <strong className="text-slate-900">Challenge:</strong> High income eliminated ACA subsidies. Marketplace plan quoted at $725/month for Bronze tier with $8,700 deductible.
                </p>
                <p className="text-slate-700 leading-relaxed mb-4 text-sm">
                  <strong className="text-slate-900">Solution:</strong> Enrolled in private SGIC plan using UnitedHealthcare network. MD Anderson access maintained. Premium: $385/month with $6,500 deductible.
                </p>
                <div className="bg-white rounded-lg p-4 border border-cyan-300">
                  <p className="text-cyan-700 font-bold text-lg">Annual Savings: $4,080</p>
                  <p className="text-xs text-slate-600 mt-1">Better network access + lower deductible + $340/month premium savings</p>
                </div>
              </div>
            </div>
          </div>

          {/* Process Transparency */}
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 md:p-10 text-white">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">My Transparent Process</h3>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  1
                </div>
                <h4 className="font-bold mb-2">Free Consultation</h4>
                <p className="text-sm text-slate-300">15-20 minute call to understand your needs, budget, and current doctors</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  2
                </div>
                <h4 className="font-bold mb-2">Network Verification</h4>
                <p className="text-sm text-slate-300">I verify your doctors are in-network before recommending any plan</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  3
                </div>
                <h4 className="font-bold mb-2">Side-by-Side Comparison</h4>
                <p className="text-sm text-slate-300">Compare all options transparently - premiums, networks, deductibles, out-of-pocket maximums</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  4
                </div>
                <h4 className="font-bold mb-2">Ongoing Support</h4>
                <p className="text-sm text-slate-300">Claims assistance, renewal guidance, and policy changes at no extra cost</p>
              </div>
            </div>

            <div className="mt-10 text-center pt-8 border-t border-white/20">
              <p className="text-lg mb-4">Ready to experience the difference professional guidance makes?</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://calendly.com/bradfordinformedguidance"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-emerald-500 text-white px-8 py-4 rounded-full font-bold hover:bg-emerald-600 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <Calendar className="w-5 h-5" />
                  Schedule Free Consultation
                </a>
                <a
                  href={`tel:${BRAND.phoneTel}`}
                  className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-full font-bold hover:bg-slate-100 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <Phone className="w-5 h-5" />
                  Call {BRAND.phoneHuman}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Downloadable Resources Section */}
      <section className="relative py-20 bg-gradient-to-br from-white via-slate-50 to-white overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(71, 85, 105, 0.1) 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-cyan-100 rounded-full px-6 py-3 mb-6">
              <Download className="w-5 h-5 text-cyan-600" />
              <span className="text-cyan-700 font-bold text-sm">FREE RESOURCES</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Take These Resources With You
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
              Download our free comparison guides, checklists, and educational materials to help you make informed insurance decisions.
            </p>
          </div>

          {/* Resource Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* PPO Network Comparison Chart */}
            <div className="bg-white rounded-2xl border-2 border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
              <div className="bg-gradient-to-br from-emerald-500 to-cyan-500 p-6 text-white">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">PPO Network Comparison</h3>
                <p className="text-sm text-white/90">Side-by-side analysis of all 6 networks</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2 text-sm text-slate-700">
                    <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>Provider counts and hospital networks</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-slate-700">
                    <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>State-by-state coverage details</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-slate-700">
                    <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>Direct links to provider directories</span>
                  </li>
                </ul>
                <button
                  onClick={() => window.print()}
                  className="w-full bg-gradient-to-r from-emerald-600 to-cyan-600 text-white px-6 py-3 rounded-xl font-bold hover:from-emerald-700 hover:to-cyan-700 transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  Print This Page
                </button>
              </div>
            </div>

            {/* Carrier Selection Checklist */}
            <div className="bg-white rounded-2xl border-2 border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
              <div className="bg-gradient-to-br from-blue-500 to-indigo-500 p-6 text-white">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Carrier Selection Checklist</h3>
                <p className="text-sm text-white/90">10-point guide to choosing the right carrier</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2 text-sm text-slate-700">
                    <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Network adequacy verification steps</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-slate-700">
                    <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Financial strength ratings explained</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-slate-700">
                    <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Questions to ask before enrolling</span>
                  </li>
                </ul>
                <a
                  href="https://calendly.com/bradfordinformedguidance"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-bold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                >
                  <Calendar className="w-5 h-5" />
                  Get Personalized Guidance
                </a>
              </div>
            </div>

            {/* State Coverage Guide */}
            <div className="bg-white rounded-2xl border-2 border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-6 text-white">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">State Coverage Guide</h3>
                <p className="text-sm text-white/90">Market insights for all 6 licensed states</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2 text-sm text-slate-700">
                    <CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span>State-specific carrier recommendations</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-slate-700">
                    <CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span>Regional network strength analysis</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-slate-700">
                    <CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span>Average premium ranges by location</span>
                  </li>
                </ul>
                <button
                  onClick={() => window.print()}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl font-bold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  Print This Page
                </button>
              </div>
            </div>
          </div>

          {/* Email Resources CTA */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-slate-700">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Want These Sent to Your Email?
                </h3>
                <p className="text-slate-300 leading-relaxed mb-6">
                  Get instant access to all our comparison guides, state-specific resources, and carrier selection tools. Plus, receive our monthly newsletter with insurance tips and market updates.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2 text-slate-300">
                    <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>Comprehensive PPO network comparison (PDF)</span>
                  </li>
                  <li className="flex items-start gap-2 text-slate-300">
                    <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>Carrier selection decision framework</span>
                  </li>
                  <li className="flex items-start gap-2 text-slate-300">
                    <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>State-by-state coverage insights</span>
                  </li>
                  <li className="flex items-start gap-2 text-slate-300">
                    <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>Monthly market updates and tips</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8">
                <h4 className="text-xl font-bold text-slate-900 mb-4">Get Free Resources</h4>
                <form
                  action="https://bradfordinformedguidance.us7.list-manage.com/subscribe/post?u=YOUR_USER_ID&amp;id=YOUR_LIST_ID"
                  method="post"
                  target="_blank"
                  className="space-y-4"
                >
                  <div>
                    <label htmlFor="resource-name" className="block text-sm font-semibold text-slate-900 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="resource-name"
                      name="FNAME"
                      required
                      placeholder="John Smith"
                      className="w-full px-4 py-3 border-2 border-slate-300 rounded-xl text-slate-900 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="resource-email" className="block text-sm font-semibold text-slate-900 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="resource-email"
                      name="EMAIL"
                      required
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 border-2 border-slate-300 rounded-xl text-slate-900 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="resource-state" className="block text-sm font-semibold text-slate-900 mb-2">
                      Your State
                    </label>
                    <select
                      id="resource-state"
                      name="STATE"
                      className="w-full px-4 py-3 border-2 border-slate-300 rounded-xl text-slate-900 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all bg-white"
                    >
                      <option value="">Select your state</option>
                      <option value="FL">Florida</option>
                      <option value="MI">Michigan</option>
                      <option value="NC">North Carolina</option>
                      <option value="AZ">Arizona</option>
                      <option value="TX">Texas</option>
                      <option value="GA">Georgia</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-emerald-600 to-cyan-600 text-white px-6 py-4 rounded-xl font-bold text-lg hover:from-emerald-700 hover:to-cyan-700 transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                  >
                    <Download className="w-5 h-5" />
                    Send Me The Resources
                  </button>
                  <p className="text-xs text-slate-500 text-center">
                    No spam. Unsubscribe anytime. Your information is never shared.
                  </p>
                </form>
              </div>
            </div>
          </div>

          {/* Quick Links to Carrier Websites */}
          <div className="mt-16 bg-white rounded-2xl border-2 border-slate-200 p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Direct Links to Carrier Resources</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: 'Aetna', url: 'https://www.aetna.com' },
                { name: 'Cigna', url: 'https://www.cigna.com' },
                { name: 'UnitedHealthcare', url: 'https://www.uhc.com' },
                { name: 'Blue Cross Blue Shield', url: 'https://www.bcbs.com' },
                { name: 'Allstate Health', url: 'https://www.allstate.com' },
                { name: 'Mutual of Omaha', url: 'https://www.mutualofomaha.com' },
                { name: 'Aflac', url: 'https://www.aflac.com' },
                { name: 'First Health', url: 'https://www.firsthealth.com' }
              ].map((carrier) => (
                <a
                  key={carrier.name}
                  href={carrier.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-slate-50 hover:bg-emerald-50 border-2 border-slate-200 hover:border-emerald-500 rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 hover:text-emerald-700 transition-all group"
                >
                  <span>{carrier.name}</span>
                  <svg className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              ))}
            </div>
            <p className="mt-6 text-sm text-slate-600 text-center">
              Visit carrier websites for plan details, benefit summaries, and member portals. For personalized quotes and application assistance, contact me directly.
            </p>
          </div>
        </div>
      </section>
      </div>
      {/* End Tab Panel 2: Carriers */}

      {/* Tab Panel 4: Common Questions */}
      <div
        id="faq-panel"
        role="tabpanel"
        aria-labelledby="faq-tab"
        style={{ display: activeTab === 'faq' ? 'block' : 'none' }}
      >
      {/* FAQ Section - Dark Theme (10%) - Lazy Loaded */}

      <Suspense fallback={
        <div className="relative py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-white/10 rounded-lg w-64 mx-auto mb-8"></div>
              <div className="space-y-4">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="h-20 bg-white/5 rounded-xl"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      }>
        <PremiumCarriersFAQ />
      </Suspense>
      </div>
      {/* End Tab Panel 4: FAQ */}

      {/* Footer CTA Section - Light Theme (40%) - Lazy Loaded */}

      <Suspense fallback={
        <div className="relative py-16 bg-gradient-to-br from-white to-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="animate-pulse">
              <div className="h-12 bg-slate-200 rounded-lg w-96 mx-auto mb-6"></div>
              <div className="h-32 bg-slate-100 rounded-xl"></div>
            </div>
          </div>
        </div>
      }>
        <CarriersFooterCTA />
      </Suspense>

      {/* Enhanced Mobile Sticky CTA Bar with Urgency */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-white to-slate-50 border-t-2 border-emerald-300 shadow-2xl">
        <div className="px-3 py-2.5">
          {/* Urgency Banner */}
          <div className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white text-center py-1.5 px-3 rounded-lg mb-2">
            <p className="text-xs font-bold flex items-center justify-center gap-1.5">
              <span className="inline-block w-2 h-2 bg-white rounded-full animate-pulse"></span>
              Save up to 50% vs. marketplace rates
              <span className="inline-block w-2 h-2 bg-white rounded-full animate-pulse"></span>
            </p>
          </div>

          <div className="flex gap-2">
            <a
              href={`tel:${BRAND.phoneTel}`}
              className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-3 py-3 rounded-xl font-bold text-sm hover:from-emerald-600 hover:to-cyan-600 transition-all duration-300 shadow-lg active:scale-95"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
            <a
              href="https://calendly.com/bradfordinformedguidance"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 bg-white border-2 border-emerald-500 text-emerald-600 px-3 py-3 rounded-xl font-bold text-sm hover:bg-emerald-50 transition-all duration-300 active:scale-95 shadow-md"
            >
              <Calendar className="w-4 h-4" />
              Schedule
            </a>
          </div>
          <div className="flex items-center justify-center gap-3 mt-2 text-xs text-slate-600">
            <span className="flex items-center gap-1">
              <CheckCircle className="w-3 h-3 text-emerald-600" />
              Free
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <CheckCircle className="w-3 h-3 text-emerald-600" />
              15-20 min
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <CheckCircle className="w-3 h-3 text-emerald-600" />
              No obligation
            </span>
          </div>
        </div>
      </div>



    </>

  );

}












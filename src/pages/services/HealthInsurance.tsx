import React, { useEffect } from 'react';
import { SEO } from '../components/SEO';
import { faqSchema, professionalServiceSchema, howToSchema, articleSchema } from '../utils/schema';
import { initializeSEOTracking } from '../utils/seoAnalytics';
import { trackSEOPageView, GTM_EVENTS, trackEvent } from '../utils/gtm';

/**
 * Health Insurance Pillar Page - SEO Domination Strategy
 * Target Keywords: health insurance, health insurance plans, affordable health insurance,
 * best health insurance, health insurance quotes, health insurance coverage,
 * individual health insurance, family health insurance plans
 */

const HealthInsurancePage: React.FC = () => {
  useEffect(() => {
    initializeSEOTracking();
    trackSEOPageView('health_insurance_pillar', 'health_insurance');
  }, []);

  const faqs = [
    {
      question: \"What is the best health insurance plan for individuals?\",
      answer: \"The best health insurance plan depends on your specific needs, budget, and health status. Our licensed agents analyze your situation to recommend PPO plans with comprehensive coverage, affordable premiums, and access to top-rated provider networks. We specialize in medically underwritten plans that can offer significant savings for healthy individuals.\"
    },
    {
      question: \"How much does health insurance cost per month?\",
      answer: \"Health insurance costs vary based on age, location, coverage level, and health status. Individual plans typically range from $200-$800 monthly, while family plans range from $500-$2,000. Our medically underwritten options often provide 30-50% savings compared to ACA marketplace plans for qualified applicants.\"
    },
    {
      question: \"What's the difference between PPO and HMO health insurance?\",
      answer: \"PPO (Preferred Provider Organization) plans offer more flexibility with out-of-network coverage and no referral requirements, while HMO (Health Maintenance Organization) plans require referrals and typically have lower costs. We primarily offer PPO plans for maximum flexibility and nationwide coverage.\"
    },
    {
      question: \"Can I get health insurance with pre-existing conditions?\",
      answer: \"Yes, we offer several options for individuals with pre-existing conditions, including guaranteed issue plans and short-term medical coverage. Our licensed agents will review your specific situation and find coverage options that provide the protection you need at competitive rates.\"
    },
    {
      question: \"What does health insurance typically cover?\",
      answer: \"Quality health insurance plans cover essential health benefits including doctor visits, hospital stays, emergency services, prescription drugs, preventive care, mental health services, and maternity care. Our recommended plans include comprehensive coverage with reasonable deductibles and co-pays.\"
    },
    {
      question: \"How do I choose the right health insurance plan?\",
      answer: \"Consider your budget, healthcare needs, preferred doctors, prescription medications, and family situation. Our expert agents provide personalized recommendations based on your specific circumstances, helping you balance coverage, cost, and convenience to find the perfect plan.\"
    }
  ];

  const howToSteps = [
    {
      name: \"Assess Your Healthcare Needs\",
      text: \"Evaluate your current health status, medications, preferred doctors, and anticipated medical expenses to determine the coverage level you need.\",
      image: \"/images/health-insurance-assessment.webp\"
    },
    {
      name: \"Compare Plan Options\",
      text: \"Review different plan types (PPO, HMO, EPO) and coverage levels to understand benefits, networks, and costs for each option.\",
      image: \"/images/health-insurance-comparison.webp\"
    },
    {
      name: \"Get Personalized Quotes\",
      text: \"Obtain detailed quotes from multiple carriers to compare premiums, deductibles, and out-of-pocket maximums for your specific situation.\",
      image: \"/images/health-insurance-quotes.webp\"
    },
    {
      name: \"Review Provider Networks\",
      text: \"Verify that your preferred doctors, hospitals, and specialists are included in the plan's provider network for maximum savings.\",
      image: \"/images/health-insurance-network.webp\"
    },
    {
      name: \"Enroll and Activate Coverage\",
      text: \"Complete your application with our licensed agents and receive your insurance cards, typically within 24-48 hours for immediate protection.\",
      image: \"/images/health-insurance-enrollment.webp\"
    }
  ];

  const structuredData = [
    faqSchema(faqs),
    professionalServiceSchema(
      \"Health Insurance Plans\",
      \"Comprehensive health insurance coverage for individuals and families with PPO networks, competitive rates, and expert guidance from licensed professionals.\"
    ),
    howToSchema(
      \"How to Choose the Right Health Insurance Plan\",
      howToSteps
    ),
    articleSchema(
      \"Complete Guide to Health Insurance Plans in 2024\",
      \"Expert guide to finding the best health insurance coverage for your needs and budget. Compare plans, understand benefits, and get personalized recommendations.\",
      \"Bradford Insurance Team\",
      \"2024-08-24\",
      \"2024-08-24\",
      \"/images/health-insurance-guide-hero.webp\"
    )
  ];

  const handleCTAClick = (ctaType: string) => {
    trackEvent({
      ...GTM_EVENTS.QUOTE_STARTED,
      insurance_type: 'health_insurance',
      page_type: 'pillar_page'
    });
  };

  return (
    <>
      <SEO
        title=\"Best Health Insurance Plans 2024 | Expert Guidance & Quotes\"
        description=\"Find the perfect health insurance plan with expert guidance. Compare PPO plans, get instant quotes, and save up to 50% on premiums. Licensed agents in FL, MI, NC ready to help.\"
        keywords=\"health insurance, health insurance plans, affordable health insurance, best health insurance, health insurance quotes, PPO health plans, individual health insurance, family health insurance, health insurance coverage\"
        path=\"/services/health-insurance\"
        image=\"/images/health-insurance-hero-2024.webp\"
        imageAlt=\"Expert health insurance guidance and plan comparison\"
        articleType=\"service\"
        section=\"Health Insurance\"
        breadcrumbs={[
          { name: \"Home\", url: \"/\" },
          { name: \"Services\", url: \"/services\" },
          { name: \"Health Insurance\", url: \"/services/health-insurance\" }
        ]}
        faqSchema={faqs}
        scripts={structuredData.map(data => ({ type: 'application/ld+json', innerHTML: data }))}
        meta={[
          { name: 'geo.region', content: 'US-FL, US-MI, US-NC' },
          { name: 'geo.placename', content: 'Florida, Michigan, North Carolina' },
          { name: 'ICBM', content: '27.7663, -82.6404' }, // Tampa, FL coordinates
          { property: 'article:author', content: 'Bradford Informed Guidance' },
          { property: 'article:section', content: 'Health Insurance' },
          { property: 'article:tag', content: 'health insurance, PPO plans, insurance quotes' },
          { name: 'twitter:label1', content: 'Licensed in' },
          { name: 'twitter:data1', content: 'FL, MI, NC' },
          { name: 'twitter:label2', content: 'Average Savings' },
          { name: 'twitter:data2', content: '30-50%' }
        ]}
      />
      
      <main className=\"health-insurance-pillar\">
        {/* Hero Section - H1 Optimization */}
        <section className=\"hero bg-gradient-to-br from-blue-50 to-sky-100 py-16\">
          <div className=\"container mx-auto px-4\">
            <div className=\"max-w-4xl mx-auto text-center\">
              <h1 className=\"text-5xl font-bold text-gray-900 mb-6\">
                Find the <span className=\"text-blue-600\">Best Health Insurance</span> Plans for Your Family
              </h1>
              <p className=\"text-xl text-gray-700 mb-8 leading-relaxed\">
                Get expert guidance on <strong>affordable health insurance plans</strong> with comprehensive PPO coverage. 
                Compare top carriers, save up to 50% on premiums, and secure next-day coverage with our licensed professionals.
              </p>
              <div className=\"flex flex-col sm:flex-row gap-4 justify-center\">
                <button 
                  onClick={() => handleCTAClick('hero_quote')}
                  className=\"bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors\"
                  data-track=\"cta\"
                >
                  Get Instant Health Insurance Quote
                </button>
                <button 
                  onClick={() => handleCTAClick('hero_consultation')}
                  className=\"bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors\"
                  data-track=\"cta\"
                >
                  Schedule Free Consultation
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section - Semantic Keyword Clusters */}
        <section className=\"py-16 bg-white\">
          <div className=\"container mx-auto px-4\">
            <div className=\"max-w-6xl mx-auto\">
              <h2 className=\"text-3xl font-bold text-gray-900 mb-8 text-center\">
                Comprehensive Health Insurance Solutions
              </h2>
              
              <div className=\"grid md:grid-cols-3 gap-8 mb-12\">
                <div className=\"bg-blue-50 p-6 rounded-lg\">
                  <h3 className=\"text-xl font-semibold text-blue-900 mb-3\">
                    Individual Health Insurance
                  </h3>
                  <p className=\"text-gray-700\">
                    Tailored <strong>individual health insurance plans</strong> with competitive rates, 
                    comprehensive coverage, and access to top PPO networks nationwide.
                  </p>
                </div>
                
                <div className=\"bg-green-50 p-6 rounded-lg\">
                  <h3 className=\"text-xl font-semibold text-green-900 mb-3\">
                    Family Health Plans
                  </h3>
                  <p className=\"text-gray-700\">
                    <strong>Family health insurance coverage</strong> that protects everyone with 
                    affordable premiums, low deductibles, and excellent provider networks.
                  </p>
                </div>
                
                <div className=\"bg-purple-50 p-6 rounded-lg\">
                  <h3 className=\"text-xl font-semibold text-purple-900 mb-3\">
                    Short-Term Medical
                  </h3>
                  <p className=\"text-gray-700\">
                    Temporary <strong>short-term health insurance</strong> for gaps in coverage, 
                    job transitions, or immediate protection needs.
                  </p>
                </div>
              </div>

              {/* Key Benefits - Long-tail SEO */}
              <div className=\"bg-gray-50 p-8 rounded-lg\">
                <h2 className=\"text-3xl font-bold text-gray-900 mb-6\">
                  Why Choose Our Health Insurance Plans?
                </h2>
                
                <div className=\"grid md:grid-cols-2 gap-6\">
                  <div>
                    <h3 className=\"text-xl font-semibold text-gray-900 mb-3\">
                      💰 Significant Cost Savings
                    </h3>
                    <p className=\"text-gray-700 mb-4\">
                      Our <strong>medically underwritten health insurance plans</strong> can save qualified 
                      applicants 30-50% compared to marketplace options, with premiums starting as low as $200/month.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className=\"text-xl font-semibold text-gray-900 mb-3\">
                      🏥 Extensive PPO Networks
                    </h3>
                    <p className=\"text-gray-700 mb-4\">
                      Access to top-rated <strong>PPO health insurance networks</strong> including over 1 million 
                      providers nationwide, with no referrals required for specialists.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className=\"text-xl font-semibold text-gray-900 mb-3\">
                      ⚡ Next-Day Coverage
                    </h3>
                    <p className=\"text-gray-700 mb-4\">
                      Get <strong>immediate health insurance coverage</strong> with approvals in as little as 
                      24 hours and coverage effective the next business day.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className=\"text-xl font-semibold text-gray-900 mb-3\">
                      👨‍⚕️ Expert Guidance
                    </h3>
                    <p className=\"text-gray-700 mb-4\">
                      Licensed <strong>health insurance agents</strong> provide personalized recommendations 
                      based on your health needs, budget, and preferred providers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - Conversion Optimization */}
        <section className=\"py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white\">
          <div className=\"container mx-auto px-4\">
            <div className=\"max-w-4xl mx-auto text-center\">
              <h2 className=\"text-4xl font-bold mb-6\">
                Ready to Find Your Perfect Health Insurance Plan?
              </h2>
              <p className=\"text-xl mb-8\">
                Get personalized recommendations from our licensed agents. Compare plans, 
                understand your options, and secure coverage that fits your needs and budget.
              </p>
              <div className=\"flex flex-col sm:flex-row gap-4 justify-center\">
                <button 
                  onClick={() => handleCTAClick('final_quote')}
                  className=\"bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors\"
                  data-track=\"quote\"
                >
                  Get My Health Insurance Quote Now
                </button>
                <a 
                  href=\"tel:+1-800-BRADFORD\"
                  className=\"bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors\"
                  data-track=\"phone\"
                >
                  Call (800) BRADFORD
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default HealthInsurancePage;
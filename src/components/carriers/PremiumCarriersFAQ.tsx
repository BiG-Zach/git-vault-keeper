import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useReducedMotion } from 'framer-motion';
import { ChevronDown, HelpCircle, Phone } from 'lucide-react';
import { Button } from '../ui/button';
import { BRAND } from '../../lib/brand';

const faqs = [
  {
    question: "What is a PPO network and how does it benefit me?",
    answer: "A PPO (Preferred Provider Organization) network gives you the flexibility to see any healthcare provider, but offers significant cost savings when you choose in-network providers. You do not need referrals to see specialists, and you have access to a vast network of doctors, hospitals, and healthcare facilities across Florida, Michigan, North Carolina, Arizona, Texas, and Georgia."
  },
  {
    question: "Can I keep my current doctor with these PPO networks?",
    answer: "Most likely, yes. Our PPO networks include over 1.3 million healthcare providers nationwide. Use the Find Your Doctor links on each network card above to verify if your current physician is in-network. We also verify your doctor's network status during your consultation so you feel confident before you enroll."
  },
  {
    question: "How do I choose between different PPO networks?",
    answer: "Each PPO network has unique strengths. Aetna and UnitedHealthcare offer the largest networks, Cigna focuses on wellness programs, First Health provides reliable nationwide coverage, MultiPlan offers cost-effective solutions, and Blue Cross Blue Shield has strong regional expertise. We compare your doctors, prescriptions, and budget to match you with the best fit in your state."
  },
  {
    question: "I'm in Florida - which PPO networks have the best hospital coverage in my area?",
    answer: "Florida has excellent PPO network depth. In South Florida (Miami/Ft. Lauderdale), UnitedHealthcare and Aetna dominate with comprehensive hospital networks including Baptist Health, Memorial Healthcare, and Cleveland Clinic Florida. In Central Florida (Tampa/Orlando), Blue Cross Blue Shield has strong relationships with AdventHealth, BayCare, and Orlando Health systems. North Florida (Jacksonville/Tallahassee) sees strong coverage from Cigna and First Health with Mayo Clinic and UF Health access. I analyze your specific zip code and preferred hospitals to recommend the optimal network."
  },
  {
    question: "Why work with a multi-carrier broker instead of a single carrier agent?",
    answer: "As a multi-carrier broker, I compare 10 carriers and 6 PPO networks across Florida, Michigan, North Carolina, Arizona, Texas, and Georgia. You see every competitive option in one consultation without pressure from a single insurer, and you receive unbiased guidance tailored to your household's priorities."
  },
  {
    question: "How do you secure the best rate across all these carriers?",
    answer: "My Best Insurance Group partnership gives me direct underwriting access. I request simultaneous quotes, verify subsidy or employer credits, and negotiate exceptions when health history or budget needs extra attention. Every recommendation arrives with a transparent side-by-side comparison."
  },
  {
    question: "What's the difference between your carriers?",
    answer: "Our carriers specialize in different areas: Allstate Health and UnitedHealthcare excel in comprehensive health coverage, Mutual of Omaha and Americo focus on life insurance solutions, while Aflac provides supplemental benefits. All carriers are A-rated or higher by AM Best, ensuring financial stability and reliable claim payments."
  },
  {
    question: "I'm in Texas - which carriers offer the best rates for self-employed individuals?",
    answer: "Texas has a competitive health insurance market with several strong options for self-employed professionals. Allstate Health typically offers the most aggressive pricing in Dallas/Fort Worth and Houston for healthy applicants under 50. SGIC provides budget-friendly major medical with solid networks in San Antonio and Austin. UnitedHealthcare dominates the premium segment with the largest provider network. For those not qualifying for ACA subsidies, I'll compare private health plans that often save 40-50% versus marketplace rates. Each consultation includes a side-by-side rate comparison specific to your county and age."
  },
  {
    question: "What does the Best Insurance Group partnership mean for me?",
    answer: "It unlocks enterprise-level resources normally reserved for large agencies - priority underwriters, exclusive carrier programs, and escalation paths that keep approvals and claims moving quickly in every state we serve."
  },
  {
    question: "Do you serve all six states you are licensed in?",
    answer: "Absolutely. I am licensed and bonded to support clients in Florida, Michigan, North Carolina, Arizona, Texas, and Georgia. Each consultation includes state-specific carrier guidance, compliance updates, and virtual support tailored to where you live."
  },
  {
    question: "How does Michigan's health insurance market differ from other states?",
    answer: "Michigan has unique market dynamics. Blue Cross Blue Shield of Michigan holds the strongest provider relationships, especially with major systems like Henry Ford, Beaumont, and U of M Health. Priority Health (not available in all our states) dominates West Michigan. For Metro Detroit residents, I typically recommend UnitedHealthcare or Aetna PPO for maximum flexibility. Michigan also has strong ACA marketplace competition, so I always compare both private plans and subsidized marketplace options. Retirees under 65 should know Michigan allows COBRA continuation longer than federal requirements - I help navigate these options during our consultation."
  },
  {
    question: "What's the difference between working with a broker vs. buying direct from insurance companies?",
    answer: "When you work with me as your broker, you get access to multiple carriers and can compare options side-by-side without bias. Insurance companies only show you their products. I provide ongoing support for claims, renewals, and changes at no extra cost - my compensation comes from the carriers, not your pocket. Plus, with my Best Insurance Group partnership, I often have access to exclusive plans and faster underwriting that aren't available to the public."
  },
  {
    question: "How do you ensure I get the best rate available?",
    answer: "I have access to 10 carriers and 6 PPO networks through my Best Insurance Group partnership, which means I can compare rates across the entire market, not just one company. I also verify subsidy eligibility for ACA plans and check for any available discounts or wellness program benefits. My 8 years of experience helps me identify the best value - sometimes the lowest premium isn't actually the best deal when you factor in deductibles, networks, and coverage."
  },
  {
    question: "What if I need to file a claim - how does that work with a broker?",
    answer: "This is where working with a broker really pays off. I act as your advocate throughout the claims process. While you'll still file claims directly with your insurance carrier, I help resolve any issues that arise, understand claim denials, and ensure you're getting the benefits you're entitled to. I've helped clients navigate everything from routine claim questions to complex appeals across all 6 states I serve."
  },
  {
    question: "I live in North Carolina - what should I know about Blue Cross Blue Shield's dominance here?",
    answer: "North Carolina has unique market dynamics where Blue Cross Blue Shield of North Carolina (BCBSNC) historically held near-monopoly status. While competition has increased, BCBSNC still maintains the strongest relationships with major systems like Duke Health, UNC Health, Atrium Health (formerly Carolinas HealthCare), and Wake Forest Baptist. However, UnitedHealthcare and Aetna have expanded aggressively in Charlotte, Raleigh-Durham, and Greensboro with competitive pricing. For Western NC (Asheville/mountain regions), I often recommend BCBSNC for provider depth. Triangle and Charlotte residents have more carrier flexibility - I compare all options to ensure you're not overpaying for the Blue Cross name when equally strong networks exist."
  },
  {
    question: "I'm relocating from Arizona to Georgia - how do I maintain coverage?",
    answer: "State-to-state moves require careful planning. Most national PPO networks (UnitedHealthcare, Aetna, Cigna) offer coverage in both Arizona and Georgia, but your specific plan must be rewritten in your new state. I handle this transition by: (1) verifying your move qualifies for Special Enrollment Period, (2) comparing networks in your new Georgia location before you move, (3) coordinating the cancellation date in Arizona with the start date in Georgia to avoid coverage gaps, and (4) ensuring any ongoing treatments transfer smoothly. Since I'm licensed in both states, I manage the entire transition - you won't need to find a new broker."
  },
  {
    question: "How does coverage work when I travel to other states?",
    answer: "Most PPO networks I recommend provide nationwide coverage, which is perfect for travel. Emergency care is always covered regardless of location. For routine care while traveling, I ensure your plan includes out-of-network benefits or has reciprocal agreements with providers in other states. Since I'm licensed in FL, MI, NC, AZ, TX, and GA, I can help coordinate coverage if you're moving between these states."
  },
  {
    question: "What happens if I need to make changes to my plan?",
    answer: "I handle all plan changes for you - whether it's adding family members during special enrollment periods, updating your address if you move, or switching plans during open enrollment. Changes outside of open enrollment require qualifying life events, and I help you understand what qualifies and ensure you don't lose coverage during transitions."
  },
  {
    question: "Do I pay extra fees for broker services?",
    answer: "No, my services are completely free to you. I'm compensated directly by the insurance carriers when you enroll, so there are no broker fees, enrollment fees, or service charges. You pay the same premium whether you buy direct from the carrier or work with me - but with me, you get ongoing support, multiple carrier access, and advocacy at no additional cost."
  },
  {
    question: "I'm in Arizona/Georgia - are there regional carriers I should consider?",
    answer: "Yes! While national carriers like UnitedHealthcare and Aetna dominate, regional options offer competitive pricing. In Arizona (Phoenix/Tucson), Blue Cross Blue Shield of Arizona has deep relationships with Banner Health, Dignity Health, and HonorHealth systems. In Georgia (Atlanta metro), Ambetter (Peach State Health Plan) offers budget-friendly marketplace options, though network adequacy varies by county. SGIC, while less known nationally, provides strong coverage in both Atlanta and Georgia's rural counties at 15-20% below national carrier rates. I evaluate regional vs. national carrier trade-offs based on your specific doctors and budget."
  },
  {
    question: "How quickly can I get coverage if I need it urgently?",
    answer: "For qualifying urgent situations, I can often get same-day coverage decisions through my Best Insurance Group partnership. Most applications are processed within 24-48 hours. For immediate needs like job loss or birth of a child, I help you understand your options including COBRA, short-term plans, or special enrollment periods. I prioritize urgent cases and provide same-day enrollment assistance when time is critical."
  },
  {
    question: "What if my doctor isn't in the network I choose?",
    answer: "Before you enroll, I verify your current doctors are in-network using the most current provider directories. If your doctor isn't included, I help you find comparable specialists in the network or discuss out-of-network benefits if keeping your current doctor is essential. I also monitor for network changes throughout the year and alert you to any updates that might affect your care."
  },
  {
    question: "I'm a Florida snowbird - how does coverage work when I'm up North?",
    answer: "This is a common scenario I handle regularly. Most PPO networks I recommend (UnitedHealthcare, Aetna, Cigna) provide nationwide coverage, so you're protected whether you're in Florida or visiting family in Michigan, New York, or other states. For snowbirds who split time between two specific locations, I verify network adequacy in both areas before enrollment. Some carriers offer special 'traveling retiree' programs with no referrals needed for out-of-state care. I also coordinate with Medicare supplement plans if you're 65+ and need bridge coverage. The key is disclosing both locations during your consultation so I can verify provider access in each area."
  },
  {
    question: "I live in rural Georgia - will I have enough doctors in my network?",
    answer: "Network adequacy varies significantly between urban and rural Georgia. In rural counties (especially South Georgia), I typically recommend UnitedHealthcare or Blue Cross Blue Shield of Georgia because they maintain the broadest rural provider networks. Atlanta metro residents have more flexibility with carriers like Aetna and Cigna also providing strong coverage. During your consultation, I research provider directories for your specific county to verify sufficient access to primary care physicians, specialists, and nearby hospitals. My 8+ years of experience in Georgia helps me know which carriers maintain strong rural networks versus those concentrated in Atlanta metro. If rural provider options are limited, I discuss out-of-network benefits to ensure you're not trapped with only 1-2 in-network doctors."
  },
  {
    question: "I work remotely and travel frequently between Texas, Arizona, and Florida - which network is best?",
    answer: "For frequent interstate travelers, you need a national PPO network with strong coverage in all three states. UnitedHealthcare PPO is my top recommendation - they have the largest network (1.3M+ providers) and excellent coverage in all three states, including Mayo Clinic Arizona, MD Anderson in Houston, and Cleveland Clinic Florida. Aetna PPO is a close second with slightly lower premiums but comparable access. I verify that your plan includes 'nationwide roaming' benefits with no penalties for seeking care outside your home state. For digital nomads or remote workers, I also ensure telehealth is included for routine consultations regardless of your location. Since you're licensed in all three states, your policy can be issued from whichever state offers the best rates (often Texas for healthy applicants)."
  },
  {
    question: "My child has complex medical needs and sees multiple specialists in Michigan - how do I ensure continuity of care?",
    answer: "Specialty care access is critical for complex conditions. In Michigan, I first verify that all your child's current specialists (pediatric cardiologists, neurologists, therapists, etc.) are in-network before recommending any plan. Blue Cross Blue Shield of Michigan typically has the strongest relationships with Children's Hospital of Michigan, Helen DeVos Children's Hospital, and Mott Children's Hospital at U of M. I also review each plan's specialist copay structure, annual out-of-pocket maximums, and whether prior authorizations are required for ongoing specialist visits. For children with chronic conditions, I often recommend lower-deductible plans even if premiums are higher - the math works out better when you're hitting deductibles early each year. I can also help coordinate between your health plan and any therapies or DME (durable medical equipment) your child needs."
  },
  {
    question: "I have a high-deductible health plan through work but it doesn't cover much - can I get supplemental coverage?",
    answer: "Absolutely. This is where supplemental insurance shines. Aflac offers hospital indemnity plans that pay you cash directly when you're hospitalized, helping cover your high deductible. These plans pay regardless of your primary insurance and have no network restrictions. For example, if you have a $5,000 deductible but need surgery, an Aflac hospital plan might pay $1,500-$2,000 directly to you based on your length of stay. I also recommend critical illness plans that provide lump-sum cash payments if you're diagnosed with cancer, heart attack, or stroke - money you can use for deductibles, lost income, or experimental treatments. These supplemental plans are affordable (often $30-80/month) and fill the gaps that high-deductible plans create. This strategy is especially popular with Texas and Arizona residents who have employer coverage but want additional financial protection."
  },
  {
    question: "What's the typical provider network difference between Dallas, Austin, Houston, and San Antonio?",
    answer: "Texas metro areas each have unique network dynamics. **Dallas/Fort Worth**: UnitedHealthcare and Aetna dominate with excellent coverage of Baylor Scott & White, Methodist, and Texas Health Resources. **Houston**: All major networks (UHC, Aetna, BCBS Texas) provide strong access, including MD Anderson for cancer care. **Austin**: Blue Cross Blue Shield of Texas and UnitedHealthcare have the strongest networks with Ascension Seton and Baylor Scott & White. **San Antonio**: SGIC (regional carrier) offers competitive pricing with good access to Methodist Healthcare and UT Health San Antonio. For tech workers, self-employed professionals, and growing families, I typically recommend starting with UnitedHealthcare or Aetna for statewide flexibility, then comparing regional carriers like SGIC for potential savings. Austin's rapid growth has attracted more carriers, creating competitive pricing - often 20-30% less than what you'd pay in California or New York for identical coverage."
  },
  {
    question: "I'm 62 and need coverage until Medicare starts at 65 - what are my best options?",
    answer: "Bridge-to-Medicare coverage (ages 60-65) is a specialty area where broker guidance is essential. In Florida and Arizona (popular retirement states), I focus on carriers that accept pre-existing conditions without major rate increases: Philadelphia American Life, Aetna, and UnitedHealthcare. Some carriers offer '3-year rate lock' programs specifically for this demographic. Key considerations: (1) **Pre-existing conditions**: If you have diabetes, heart disease, or other chronic conditions, some carriers will decline you or charge 25-50% more - I know which ones are most lenient. (2) **Prescription coverage**: Medicare Part D works differently than private insurance, so I ensure your current meds are covered during these 3 years. (3) **Premium stability**: I recommend plans with smaller annual increases to avoid sticker shock at renewal. (4) **Network continuity**: Many retirees prefer keeping their same doctors through age 65, so I verify your providers accept both your current plan and will accept Medicare when you transition. This is one scenario where working with a broker really pays off - one wrong choice could cost you thousands annually."
  },
  {
    question: "How do North Carolina's academic medical centers (Duke, UNC, Wake Forest) factor into network selection?",
    answer: "North Carolina's academic medical centers are often the difference-maker in network selection. **Duke Health**: Included in UnitedHealthcare, Aetna, and Blue Cross Blue Shield of North Carolina networks. If you or family members need Duke physicians (especially for complex conditions like cancer, cardiology, or neurosurgery), verify this before enrollment - some budget carriers exclude Duke due to higher costs. **UNC Health**: Similar story - BCBSNC, UHC, and Aetna all include UNC, but some newer marketplace plans do not. **Wake Forest Baptist**: Strongest with BCBSNC and Cigna. **Atrium Health** (Charlotte): Included in most major networks. For Triangle residents (Raleigh/Durham/Chapel Hill) and Charlotte metro residents, I verify academic medical center access as part of every consultation. If you're healthy and unlikely to need tertiary care, you might save 15-20% by choosing a plan that excludes academic centers. But if you have complex conditions or family history of serious illness, having Duke or UNC access can be invaluable."
  }
];

export default function PremiumCarriersFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Dark luxury background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Pattern overlay */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)`,
            backgroundSize: '24px 24px'
          }}
        />
        {/* Gradient accents */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-transparent to-cyan-500/5" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 30 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-3 bg-emerald-500/20 rounded-full px-6 py-3 mb-8">
            <HelpCircle className="h-6 w-6 text-emerald-400" />
            <span className="text-emerald-300 font-semibold">Frequently Asked Questions</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Everything You Need to Know About
            <span className="block gradient-text-luxury">Our Networks & Carriers</span>
          </h2>
          
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Get answers to common questions about PPO networks, insurance carriers, and state-specific guidance across FL, MI, NC, AZ, TX, and GA.
          </p>
        </motion.div>

        {/* FAQ Accordion - Optimized for 60fps */}
        <div className="space-y-4" role="list" aria-label="Frequently Asked Questions">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="group"
              role="listitem"
            >
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden group-hover:border-emerald-400/30 transition-colors duration-300">
                <button
                  className="w-full px-8 py-6 text-left focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-inset"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-question-${index}`}
                  type="button"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg md:text-xl font-semibold text-white group-hover:text-emerald-300 transition-colors duration-300 pr-4">
                      {faq.question}
                    </h3>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                      className="flex-shrink-0"
                      style={{ willChange: "transform" }}
                      aria-hidden="true"
                    >
                      <ChevronDown className="h-6 w-6 text-slate-400 group-hover:text-emerald-400 transition-colors duration-300" />
                    </motion.div>
                  </div>
                </button>

                <AnimatePresence initial={false} mode="wait">
                  {openIndex === index && (
                    <motion.div
                      key={`answer-${index}`}
                      initial={shouldReduceMotion ? undefined : { height: 0, opacity: 0 }}
                      animate={shouldReduceMotion ? undefined : { height: 'auto', opacity: 1 }}
                      exit={shouldReduceMotion ? undefined : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                      style={{ willChange: "height, opacity" }}
                      id={`faq-answer-${index}`}
                      role="region"
                      aria-labelledby={`faq-question-${index}`}
                    >
                      <div className="px-8 pb-6">
                        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-6" aria-hidden="true" />
                        <p className="text-slate-300 leading-relaxed text-base">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div 
          className="text-center mt-16 p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl"
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 30 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Still Have Questions?
          </h3>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Our licensed brokers are here to help you navigate your options and find the perfect coverage for your needs.
          </p>
          
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white hover:from-emerald-600 hover:to-emerald-700 font-bold px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl border-0"
          >
            <a href={BRAND.phoneTel}>
              <Phone className="h-5 w-5 mr-3" />
              Call {BRAND.phoneHuman}
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}


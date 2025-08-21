import SEO from "../components/SEO";
import OurProcessHero from "../components/headers/OurProcessHero";
import { Calendar, BarChart3, Handshake, CheckCircle, Shield, Award, Clock, Users } from "lucide-react";
import { localBusinessSchema, serviceSchema, breadcrumbSchema } from "../utils/schema";

interface StepProps {
  number: number;
  icon: React.ReactNode;
  title: string;
  content: string;
  bulletPoints: string[];
}

function ProcessStep({ number, icon, title, content, bulletPoints }: StepProps) {
  return (
      <div className="bg-white rounded-2xl border border-slate-200 shadow-lg p-8 hover:shadow-xl hover:border-big-blue-300 transition-all duration-300">
      <div className="flex items-center gap-4 mb-6">
        <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-big-blue-500 to-big-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
          {icon}
        </div>
        <div>
          <div className="text-sm font-medium text-big-teal-600 uppercase tracking-wide">Step {number}</div>
          <h3 className="text-xl font-bold text-slate-900 mt-1">{title}</h3>
        </div>
      </div>
      
      <p className="text-slate-700 mb-6 leading-relaxed">{content}</p>
      
      <ul className="space-y-3">
        {bulletPoints.map((point, index) => (
          <li key={index} className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-big-orange-500 mt-0.5 flex-shrink-0" />
            <span className="text-slate-700">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function TrustPoint({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-3 p-4 bg-white/90 backdrop-blur-sm rounded-xl border border-big-blue-200 hover:border-big-orange-300 transition-colors duration-300">
      <Shield className="w-6 h-6 text-big-teal-500 flex-shrink-0" />
      <span className="text-slate-700 font-medium">{children}</span>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6">
      <h4 className="font-semibold text-slate-900 mb-3">{question}</h4>
      <p className="text-slate-700 leading-relaxed">{answer}</p>
    </div>
  );
}

export default function HowItWorksPage() {
  const steps: StepProps[] = [
    {
      number: 1,
      icon: <Calendar className="w-8 h-8" />,
      title: "Schedule Your Free Personal Consultation with Me",
      content: "I start with a no-obligation consultation to understand your unique needs, budget, and coverage goals.",
      bulletPoints: [
        "Duration: 15-30 minutes with me personally",
        "No cost, no obligation",
        "Licensed broker in FL, MI, NC",
        "Evening and weekend appointments available"
      ]
    },
    {
      number: 2,
      icon: <BarChart3 className="w-8 h-8" />,
      title: "I Compare All Your Options Personally",
      content: "Using my relationships with top-rated carriers (Aetna, Cigna, UnitedHealthcare, Blue Cross Blue Shield), I create your personalized comparison showing costs, benefits, and network coverage.",
      bulletPoints: [
        "I access 6+ major networks for you",
        "My personal side-by-side analysis",
        "Transparent pricing comparisons",
        "I verify your doctors are covered"
      ]
    },
    {
      number: 3,
      icon: <Handshake className="w-8 h-8" />,
      title: "Get My Professional Recommendations",
      content: "As your licensed broker, I explain each option in plain English, helping you understand exactly what you're getting. No insurance jargon, no pressure - just my honest professional guidance.",
      bulletPoints: [
        "Licensed & bonded broker since 2016",
        "8+ years experience in insurance",
        "My plain English explanations",
        "My unbiased recommendations"
      ]
    },
    {
      number: 4,
      icon: <CheckCircle className="w-8 h-8" />,
      title: "I Handle Quick & Easy Enrollment",
      content: "Once you choose your plan, I handle all the paperwork and enrollment details personally. I get most approvals within 24 hours, with coverage starting as soon as next day.",
      bulletPoints: [
        "I get next-day approval when possible",
        "I handle all your paperwork",
        "My direct carrier relationships work for you",
        "I provide ongoing personal support"
      ]
    }
  ];

  const trustPoints = [
    "I'm personally licensed & bonded in all markets I serve",
    "I only work with top-rated carriers",
    "I provide ongoing personal support",
    "Local expertise with national carrier access",
    "Next-day approval available for qualified applicants"
  ];

  const faqs = [
    {
      question: "How long does your process take?",
      answer: "Most clients get their perfect plan within 48 hours, with coverage starting next day when needed"
    },
    {
      question: "Can you help if I already have insurance?",
      answer: "Absolutely - I can review your current coverage and find better options during open enrollment or qualifying life events"
    },
    {
      question: "Will you be available if I need help later?",
      answer: "Yes - I provide ongoing personal support for all my clients throughout their coverage"
    }
  ];

  return (
    <>
      <SEO
        title="How I Help You Get Insurance Coverage FL MI NC | Licensed Broker Zach Bradford"
        description="Licensed insurance broker Zach Bradford's proven 4-step process for Florida, Michigan & North Carolina residents. Free consultation, next-day approval available."
        path="/our-process"
        scripts={[
          { innerHTML: localBusinessSchema('FL', {
            streetAddress: '4200 W Cypress St',
            addressLocality: 'Tampa',
            addressRegion: 'FL',
            postalCode: '33607'
          }, '(689) 325-6570') },
          { innerHTML: serviceSchema(['Health Insurance', 'Life Insurance', 'Insurance Consultation']) },
          { innerHTML: breadcrumbSchema([
            { name: 'Home', item: 'https://www.bradfordinformedguidance.com/' },
            { name: 'Our Process', item: 'https://www.bradfordinformedguidance.com/our-process' }
          ]) },
          { innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map(faq => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer
              }
            }))
          }) }
        ]}
      />

      <OurProcessHero />

      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-big-blue-50">

        {/* Process Steps */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid gap-8 md:gap-12">
              {steps.map((step, index) => (
                <ProcessStep key={index} {...step} />
              ))}
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-16 bg-big-professional relative overflow-hidden">
          <div className="absolute inset-0 bg-big-scrim opacity-60"></div>
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Florida, Michigan & North Carolina Families Choose Me as Their Broker
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {trustPoints.map((point, index) => (
                <TrustPoint key={index}>{point}</TrustPoint>
              ))}
            </div>

            <div className="text-center mt-12">
              <div className="inline-flex items-center gap-8 bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Award className="w-8 h-8 text-big-orange-300" />
                  </div>
                  <div className="text-2xl font-bold text-white">Licensed</div>
                  <div className="text-big-teal-300">& Bonded</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Clock className="w-8 h-8 text-big-orange-300" />
                  </div>
                  <div className="text-2xl font-bold text-white">8+ Years</div>
                  <div className="text-big-teal-300">Experience</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Users className="w-8 h-8 text-big-orange-300" />
                  </div>
                  <div className="text-2xl font-bold text-white">6+ Networks</div>
                  <div className="text-big-teal-300">Access</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Common Questions About Working with Me
              </h2>
            </div>
            
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} />
              ))}
            </div>

            <div className="text-center mt-12">
              <div className="bg-big-professional rounded-2xl p-8 text-white shadow-2xl">
                <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
                <p className="text-big-teal-100 mb-6 text-lg">
                  Most clients get their perfect plan within 48 hours. Let's find yours.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://calendly.com/bradfordinformedguidance"
                    className="inline-flex items-center justify-center px-8 py-4 bg-white text-big-blue-700 font-semibold rounded-xl hover:bg-big-teal-50 transition-colors duration-300 shadow-lg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Schedule Free Consultation
                  </a>
                  <a
                    href="tel:(689) 325-6570"
                    className="inline-flex items-center justify-center px-8 py-4 bg-big-accent text-white font-semibold rounded-xl hover:bg-big-orange-600 transition-colors duration-300 shadow-lg"
                  >
                    Call Now: (689) 325-6570
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
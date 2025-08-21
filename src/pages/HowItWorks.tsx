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
    <div className="group relative bg-white rounded-3xl border border-big-blue-100 shadow-xl p-8 hover:shadow-2xl hover:border-big-orange-300 transition-all duration-500 hover:-translate-y-1">
      <div className="absolute inset-0 bg-gradient-to-br from-big-blue-50/30 to-big-teal-50/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="relative">
        <div className="flex items-center gap-4 mb-6">
          <div className="flex-shrink-0 w-20 h-20 bg-big-professional rounded-3xl flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-shadow duration-300">
            {icon}
          </div>
          <div>
            <div className="text-sm font-bold text-big-orange-600 uppercase tracking-wide bg-big-orange-50 px-3 py-1 rounded-full inline-block mb-2">Step {number}</div>
            <h3 className="text-2xl font-bold text-big-blue-900 mt-1 group-hover:text-big-blue-800 transition-colors duration-300">{title}</h3>
          </div>
        </div>
        
        <p className="text-slate-700 mb-6 leading-relaxed text-lg group-hover:text-slate-600 transition-colors duration-300">{content}</p>
        
        <ul className="space-y-4">
          {bulletPoints.map((point, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 bg-big-teal-500 rounded-full flex items-center justify-center mt-0.5">
                <CheckCircle className="w-4 h-4 text-white" />
              </div>
              <span className="text-slate-700 font-medium group-hover:text-slate-600 transition-colors duration-300">{point}</span>
            </li>
          ))}
        </ul>
      </div>
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
    <div className="group bg-white rounded-2xl border border-big-blue-100 p-8 hover:shadow-xl hover:border-big-teal-300 transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-8 h-8 bg-big-teal-500 rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-sm">?</span>
        </div>
        <div className="flex-1">
          <h4 className="font-bold text-big-blue-900 mb-4 text-lg group-hover:text-big-blue-800 transition-colors duration-300">{question}</h4>
          <p className="text-slate-700 leading-relaxed group-hover:text-slate-600 transition-colors duration-300">{answer}</p>
        </div>
      </div>
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

      <main className="min-h-screen bg-gradient-to-br from-big-blue-50 via-big-teal-50/30 to-white">

        {/* Process Steps */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-big-teal-500/5 via-transparent to-big-orange-500/5"></div>
          <div className="container mx-auto px-4 max-w-6xl relative">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-big-blue-900 mb-6 bg-gradient-to-r from-big-blue-900 to-big-teal-700 bg-clip-text text-transparent">
                My Simple 4-Step Process to Get You Perfect Insurance Coverage
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Getting the right insurance shouldn't be complicated. As your licensed broker serving Florida, Michigan, and North Carolina, I use my proven 4-step process to make it simple, fast, and stress-free.
              </p>
            </div>
            <div className="grid gap-12 md:gap-16">
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
        <section className="py-20 bg-gradient-to-br from-big-blue-50/50 to-big-teal-50/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-big-blue-900 mb-6 bg-gradient-to-r from-big-blue-900 to-big-teal-700 bg-clip-text text-transparent">
                Common Questions About Working with Me
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Get answers to the most frequently asked questions about my insurance guidance process.
              </p>
            </div>
            
            <div className="space-y-8">
              {faqs.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} />
              ))}
            </div>

            <div className="text-center mt-16">
              <div className="relative bg-big-hero rounded-3xl p-12 text-white shadow-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-big-blue-900/80 via-big-blue-800/60 to-big-teal-600/80"></div>
                <div className="relative">
                  <h3 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-big-teal-100 bg-clip-text text-transparent">
                    Ready to Get Started?
                  </h3>
                  <p className="text-big-teal-100 mb-8 text-xl max-w-2xl mx-auto leading-relaxed">
                    Most clients get their perfect plan within 48 hours, with coverage starting next day when needed. Let's find yours.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <a
                      href="https://calendly.com/bradfordinformedguidance"
                      className="group inline-flex items-center justify-center px-10 py-5 bg-white text-big-blue-800 font-bold rounded-2xl hover:bg-big-teal-50 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 shadow-lg text-lg"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Schedule Free Consultation
                      <Calendar className="ml-3 w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                    </a>
                    <a
                      href="tel:(689) 325-6570"
                      className="group inline-flex items-center justify-center px-10 py-5 bg-big-accent text-white font-bold rounded-2xl hover:bg-big-orange-600 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 shadow-lg text-lg"
                    >
                      Call Now: (689) 325-6570
                      <CheckCircle className="ml-3 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                    </a>
                  </div>
                  <p className="text-big-teal-200 mt-6 text-sm">
                    Free consultation • No obligation • Licensed & bonded broker
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
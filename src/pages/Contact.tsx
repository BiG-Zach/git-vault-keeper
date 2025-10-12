import { Phone, Calendar, MessageCircle, Mail, ShieldCheck, Lock, Clock } from 'lucide-react';
import SEO from "../components/SEO";
import ContactHero from "../components/headers/ContactHero";
import ContactStatisticsSection from "../components/contact/ContactStatisticsSection";
import PremiumContactMethods from "../components/contact/PremiumContactMethods";
import ContactTrustSignals from "../components/contact/ContactTrustSignals";
import EnhancedMessageForm from "../components/contact/EnhancedMessageForm";
import OfficeLocationLuxury from "../components/contact/OfficeLocationLuxury";
import PersonalGuaranteeSection from "../components/contact/PersonalGuaranteeSection";
import { localBusinessSchema, serviceSchema, breadcrumbSchema } from "../utils/schema";

export default function ContactPage() {
  return (
    <>
      <SEO
        title="Contact Zach Bradford - Licensed Insurance Broker 6 States | (689) 325-6570 | 24-Hour Response"
        description="Contact licensed insurance broker Zach Bradford directly. Serving FL, GA, SC, TN, AL, TX with 24-hour response guarantee. Call (689) 325-6570 or schedule free consultation."
        path="/contact"
        image="/images/hero/contact-hero-retina.webp"
        meta={[
          {
            property: 'og:image:alt',
            content: 'Bradford Informed Guidance contact desk ready to assist clients'
          },
          {
            name: 'twitter:image:alt',
            content: 'Bradford Informed Guidance contact desk ready to assist clients'
          }
        ]}
        scripts={[
          { innerHTML: localBusinessSchema('FL', {
            streetAddress: '4200 W Cypress St',
            addressLocality: 'Tampa',
            addressRegion: 'FL',
            postalCode: '33607'
          }, '(689) 325-6570') },
          { innerHTML: serviceSchema(['Health Insurance', 'Life Insurance', 'Insurance Consultation'], '/images/hero/contact-hero-retina.webp') },
          { innerHTML: breadcrumbSchema([
            { name: 'Home', item: 'https://www.bradfordinformedguidance.com/' },
            { name: 'Contact', item: 'https://www.bradfordinformedguidance.com/contact' }
          ]) }
        ]}
      />

      <ContactHero />

      <main>
        {/* Contact Statistics Section (Dark) */}
        <ContactStatisticsSection />

        <section className="py-16 bg-white border-t border-slate-200">
          <div className="container-default grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-start">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-1.5 text-sm font-semibold text-emerald-700">
                <MessageCircle className="h-4 w-4" />
                Connect however you prefer
              </span>
              <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">Direct access to Zach and the Bradford Informed Guidance team</h2>
              <p className="text-lg text-slate-600">Every inquiry receives a personal response within 24 hours. Choose the communication style that fits your schedule and we will take care of the rest.</p>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100">
                  <Phone className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Call (689) 325-6570</p>
                  <p className="text-sm text-slate-600">Immediate response during business hours with direct access to Zach.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Online form & email</p>
                  <p className="text-sm text-slate-600">24-hour response guarantee with detailed follow-up and next steps.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100">
                  <Calendar className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Schedule a consultation</p>
                  <p className="text-sm text-slate-600">Same-day availability via Calendly for health or life insurance deep dives.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100">
                  <MessageCircle className="h-6 w-6 text-slate-600" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Text/SMS updates</p>
                  <p className="text-sm text-slate-600">Quick questions, appointment reminders, and application status updates with your consent.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Premium Contact Methods (Light) */}
        <PremiumContactMethods />

        {/* Trust Signals Section (Light) - Reduces form friction */}
        <ContactTrustSignals />

        <section className="py-16 bg-slate-50">
          <div className="container-default grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-start">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-1.5 text-sm font-semibold text-emerald-700">
                <ShieldCheck className="h-4 w-4" />
                Serving six licensed states
              </span>
              <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">Local expertise with virtual reach</h2>
              <p className="text-lg text-slate-600">Strategic guidance for families and business owners across Florida, Georgia, South Carolina, Tennessee, Alabama, and Texas.</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {['Florida', 'Georgia', 'South Carolina', 'Tennessee', 'Alabama', 'Texas'].map((state) => (
                <div key={state} className="rounded-2xl border border-emerald-100 bg-white px-4 py-3 text-emerald-700 font-semibold text-center shadow-sm">
                  {state}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Message Form (Light) */}
        <EnhancedMessageForm />

        <section className="py-14 bg-slate-900 text-white">
          <div className="container-default grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-start">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold md:text-4xl">Your information stays secure</h2>
              <p className="text-lg text-slate-200">We follow HIPAA guidelines, state privacy requirements, and carrier compliance standards for every conversation.</p>
            </div>
            <ul className="space-y-4 text-sm text-slate-200">
              <li className="flex items-start gap-3">
                <ShieldCheck className="mt-1 h-5 w-5 text-emerald-400" />
                <span>24-hour response guarantee for all inquiries with proactive status updates.</span>
              </li>
              <li className="flex items-start gap-3">
                <Lock className="mt-1 h-5 w-5 text-emerald-400" />
                <span>Application details and medical information shared only with carriers required to process your coverage.</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-1 h-5 w-5 text-emerald-400" />
                <span>No-pressure consultations focused on education first, decisions when you are ready.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Office Location (Dark) */}
        <OfficeLocationLuxury />

        {/* Personal Guarantee Section (Dark) */}
        <PersonalGuaranteeSection />
      </main>
    </>
  );
}



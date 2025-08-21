import SEO from "../components/SEO";
import ContactHero from "../components/headers/ContactHero";
import { Phone, Calendar, Mail, MapPin, Shield, Clock, CheckCircle, AlertTriangle } from "lucide-react";
import { useState } from "react";
import { localBusinessSchema, serviceSchema, breadcrumbSchema } from "../utils/schema";

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

function ContactCard({ icon, title, subtitle, children, className = "" }: ContactCardProps) {
  return (
    <div className={`bg-white rounded-2xl border border-slate-200 shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 ${className}`}>
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center text-white">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-bold text-slate-900">{title}</h3>
          {subtitle && <p className="text-emerald-600 font-medium">{subtitle}</p>}
        </div>
      </div>
      {children}
    </div>
  );
}

function StateCard({ state, title, description }: { state: string; title: string; description: string }) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6 text-center">
      <div className="text-2xl font-bold text-emerald-600 mb-2">{state}</div>
      <h4 className="font-semibold text-slate-900 mb-2">{title}</h4>
      <p className="text-slate-700 text-sm">{description}</p>
    </div>
  );
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    state: '',
    insuranceType: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert("Thanks! I'll personally respond within 4 business hours.");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <>
      <SEO
        title="Contact Zach Bradford - Licensed Insurance Broker FL MI NC | (689) 325-6570"
        description="Contact licensed insurance broker Zach Bradford directly. Serving Florida, Michigan, North Carolina. Call (689) 325-6570 or schedule free consultation today."
        path="/contact"
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
            { name: 'Contact', item: 'https://www.bradfordinformedguidance.com/contact' }
          ]) }
        ]}
      />

      <ContactHero />

      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50">

        {/* Contact Methods */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Connect Directly with Me - Zach Bradford
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {/* Primary Phone Contact */}
              <ContactCard
                icon={<Phone className="w-6 h-6" />}
                title="(689) 325-6570"
                subtitle="Call or Text Me Directly"
                className="md:col-span-2 lg:col-span-1"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500" />
                    <span className="text-slate-700">Speak with me personally, not a call center</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500" />
                    <span className="text-slate-700">I'm available by phone 9 AM - 6 PM EST, Monday-Friday</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500" />
                    <span className="text-slate-700">Text for after-hours questions - I'll respond quickly</span>
                  </div>
                </div>
                <a
                  href="tel:(689) 325-6570"
                  className="mt-6 inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </a>
              </ContactCard>

              {/* Consultation Booking */}
              <ContactCard
                icon={<Calendar className="w-6 h-6" />}
                title="Schedule Time with Me Personally"
              >
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500" />
                    <span className="text-slate-700">Phone consultations available</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500" />
                    <span className="text-slate-700">I'm available evenings and weekends by appointment</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500" />
                    <span className="text-slate-700">Usually available within 24 hours</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500" />
                    <span className="text-slate-700">Free 15-30 minute consultations</span>
                  </div>
                </div>
                <a
                  href="https://calendly.com/bradfordinformedguidance"
                  className="inline-flex items-center justify-center w-full px-6 py-3 bg-emerald-600 text-white font-semibold rounded-xl hover:bg-emerald-700 transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Free Consultation
                </a>
              </ContactCard>

              {/* Email Contact */}
              <ContactCard
                icon={<Mail className="w-6 h-6" />}
                title="Email Me Directly"
                subtitle="zach@bradfordguidance.com"
              >
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500" />
                    <span className="text-slate-700">Detailed questions welcome - I read every email personally</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500" />
                    <span className="text-slate-700">Personal response within 4 business hours</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500" />
                    <span className="text-slate-700">Secure document sharing available</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500" />
                    <span className="text-slate-700">Perfect for non-urgent questions</span>
                  </div>
                </div>
                <a
                  href="mailto:zach@bradfordguidance.com"
                  className="inline-flex items-center justify-center w-full px-6 py-3 bg-slate-600 text-white font-semibold rounded-xl hover:bg-slate-700 transition-colors duration-300"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Send Email
                </a>
              </ContactCard>
            </div>
          </div>
        </section>

        {/* Office Location */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                  Our Tampa Office Location
                </h2>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-emerald-500 mt-1" />
                    <div>
                      <div className="font-semibold text-slate-900">4200 W Cypress St, Tampa, FL 33607</div>
                      <div className="text-slate-700">Best Insurance Group - where I proudly serve clients across Florida.</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Shield className="w-6 h-6 text-emerald-500 mt-1" />
                    <div>
                      <div className="font-semibold text-slate-900">Licensed in Multiple States</div>
                      <div className="text-slate-700">I'm also licensed in Michigan and North Carolina</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-emerald-500 mt-1" />
                    <div>
                      <div className="font-semibold text-slate-900">Office Hours</div>
                      <div className="text-slate-700">Personal appointments available Monday-Friday</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <iframe
                  title="Office map: 4200 W Cypress St, Tampa, FL 33607"
                  loading="lazy"
                  className="w-full h-80"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps?q=4200%20W%20Cypress%20St,%20Tampa,%20FL%2033607&output=embed"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Personal Message Form */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Send Me a Personal Message
              </h2>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 shadow-lg p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-300"
                      placeholder="(123) 456-7890"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      Your State <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="state"
                      required
                      value={formData.state}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-300 bg-white"
                    >
                      <option value="">Select your state</option>
                      <option value="Florida">Florida</option>
                      <option value="Michigan">Michigan</option>
                      <option value="North Carolina">North Carolina</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    Insurance Type Needed
                  </label>
                  <select
                    name="insuranceType"
                    value={formData.insuranceType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-300 bg-white"
                  >
                    <option value="">Select insurance type</option>
                    <option value="Health Insurance">Health Insurance</option>
                    <option value="Life Insurance">Life Insurance</option>
                    <option value="Both">Both</option>
                    <option value="Not Sure">Not Sure</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-300 resize-none"
                    placeholder="Tell me about your insurance needs..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  Send Message to Zach
                </button>

                <p className="text-sm text-slate-600 text-center">
                  I personally read and respond to every message within 4 business hours.
                </p>
              </form>
            </div>
          </div>
        </section>

        {/* Emergency Coverage */}
        <section className="py-16 bg-gradient-to-r from-red-500 to-red-600">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <div className="flex items-center justify-center mb-6">
              <AlertTriangle className="w-12 h-12 text-yellow-300" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Need Coverage Fast? I'm Here for You
            </h2>
            <p className="text-xl text-red-100 mb-8 leading-relaxed">
              Life changes happen. If you need immediate coverage due to job loss, marriage, birth, or other qualifying events, call me directly at (689) 325-6570. I'll personally handle your urgent situation and work to get you covered as quickly as possible.
            </p>
            <a
              href="tel:(689) 325-6570"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-red-600 font-semibold rounded-xl hover:bg-red-50 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <Phone className="w-6 h-6 mr-2" />
              Call for Emergency Coverage
            </a>
          </div>
        </section>

        {/* State Licensing */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                States Where I'm Licensed to Help You
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <StateCard
                state="FL"
                title="Florida"
                description="My home base - full state coverage from my Tampa headquarters"
              />
              <StateCard
                state="MI"
                title="Michigan"
                description="Licensed statewide - phone consultations and support available"
              />
              <StateCard
                state="NC"
                title="North Carolina"
                description="Licensed for all NC residents - phone consultations available"
              />
            </div>

            <div className="text-center">
              <p className="text-slate-700 text-lg">
                <strong>Expanding my licenses nationwide</strong> - contact me to ask about your state
              </p>
            </div>
          </div>
        </section>

        {/* Personal Guarantee */}
        <section className="py-16 bg-slate-900">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              My Response Guarantee to You
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed">
              I personally guarantee response within <strong className="text-emerald-400">4 business hours</strong> during normal business hours (9 AM - 6 PM EST, Monday-Friday). Contact me after hours? I'll get back to you first thing the next business day. <strong className="text-emerald-400">No automated responses</strong> - every reply comes directly from me.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
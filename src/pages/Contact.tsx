import { Phone, Mail, Calendar, MapPin, Clock, ShieldCheck, ArrowRight, Shield } from 'lucide-react';
import { useState } from 'react';
import SEO from "../components/SEO";
import { BRAND } from "../lib/brand";
import AuthoritySection from '../components/luxury/AuthoritySection';

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => setFormStatus('success'), 1500);
  };

  return (
    <main className="bg-slate-950 selection:bg-emerald-500/30 min-h-screen">
      <SEO
        title="Contact Zach Bradford - Licensed Insurance Broker 7 States | 24-Hour Response"
        description="Contact licensed insurance broker Zach Bradford directly. Serving FL, MI, NC, AZ, TX, GA, IN with 24-hour response guarantee."
        path="/contact"
      />

      {/* LUXURY SPLIT HERO */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-slate-950">
        <div className="absolute inset-0 z-0">
          <img src="/images/hero/contact-hero-desktop.webp" alt="Contact Bradford Informed Guidance" className="w-full h-full object-cover object-center opacity-60 mix-blend-overlay grayscale-[50%] absolute inset-0 z-0" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/20 z-10" />
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-500/10 rounded-full blur-[150px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-sky-500/10 rounded-full blur-[150px] pointer-events-none" />
        </div>

        <div className="container relative z-20 mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          
          <div className="text-white space-y-8 pt-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                Direct Access
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-serif font-bold leading-tight drop-shadow-lg">
              Let's Secure <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
                Your Legacy.
              </span>
            </h1>
            
            <p className="text-xl text-slate-300 max-w-lg leading-relaxed font-light">
              Connect directly with Zach Bradford. No call centers, no automated loops. Expect a personalized response within 24 hours.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 pt-8">
              <a href="tel:(689)325-6570" className="group p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-emerald-500/50 transition-all backdrop-blur-md block">
                <Phone className="w-8 h-8 text-emerald-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-bold text-white mb-1">Direct Line</h3>
                <p className="text-slate-400">(689) 325-6570</p>
              </a>
              <a href="mailto:zach@bradfordinformedguidance.com" className="group p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-emerald-500/50 transition-all backdrop-blur-md block">
                <Mail className="w-8 h-8 text-emerald-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-bold text-white mb-1">Email</h3>
                <p className="text-slate-400 break-all text-sm">zach@bradfordinformedguidance.com</p>
              </a>
            </div>

            <div className="pt-6">
               <div className="flex items-center gap-3 text-slate-400 text-sm font-medium uppercase tracking-widest">
                 <MapPin className="w-4 h-4 text-emerald-500" />
                 <span>Licensed in 7 States: FL, MI, NC, AZ, TX, GA, IN</span>
               </div>
            </div>
          </div>

          {/* Right Column - Luxury Contact Form */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/20 to-transparent rounded-[40px] blur-3xl -z-10" />
            <div className="bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[40px] p-8 md:p-12 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/20 blur-[50px] rounded-full" />
              
              <h3 className="text-2xl font-serif text-white mb-2">Request Your Audit</h3>
              <p className="text-slate-400 mb-8">Fill out the form below to initiate the Concierge Protocol.</p>

              {formStatus === 'success' ? (
                <div className="text-center py-16">
                  <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <ShieldCheck className="w-10 h-10 text-emerald-400" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-2">Request Received</h4>
                  <p className="text-slate-400">I will review your details and contact you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">First Name</label>
                      <input required className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Last Name</label>
                      <input required className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all" placeholder="Doe" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Email</label>
                      <input required type="email" className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all" placeholder="john@example.com" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Phone</label>
                      <input required type="tel" className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all" placeholder="(555) 555-5555" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">State of Residence</label>
                    <select required className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all appearance-none">
                      <option value="" disabled selected>Select your state</option>
                      <option value="FL">Florida</option>
                      <option value="MI">Michigan</option>
                      <option value="NC">North Carolina</option>
                      <option value="AZ">Arizona</option>
                      <option value="TX">Texas</option>
                      <option value="GA">Georgia</option>
                      <option value="IN">Indiana</option>
                      <option value="OTHER">Other / Waitlist</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">How can I help?</label>
                    <textarea rows={4} className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all resize-none" placeholder="Briefly describe what you're looking for..."></textarea>
                  </div>

                  <button disabled={formStatus === 'submitting'} type="submit" className="w-full bg-emerald-500 text-slate-950 font-bold text-lg py-4 rounded-xl hover:bg-emerald-400 transition-colors shadow-[0_0_20px_-5px_rgba(16,185,129,0.5)] flex justify-center items-center">
                    {formStatus === 'submitting' ? (
                      <div className="w-6 h-6 border-2 border-slate-950/30 border-t-slate-950 rounded-full animate-spin" />
                    ) : (
                      "Submit Request"
                    )}
                  </button>
                  <p className="text-center text-xs text-slate-500 flex items-center justify-center gap-1">
                    <Shield className="w-3 h-3" /> Secure and confidential. No spam, ever.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <AuthoritySection />
    </main>
  );
}

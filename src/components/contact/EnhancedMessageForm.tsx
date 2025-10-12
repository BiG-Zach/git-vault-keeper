import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Send, Shield, Clock, Check, AlertCircle } from "lucide-react";
import Section from "../layout/Section";
import { useState } from "react";
import HCaptcha from "../security/HCaptcha";

const HCAPTCHA_SITE_KEY = import.meta.env.VITE_HCAPTCHA_SITEKEY as string | undefined;

export default function EnhancedMessageForm() {
  const prefersReducedMotion = useReducedMotion();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    state: '',
    insuranceType: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const captchaEnabled = Boolean(HCAPTCHA_SITE_KEY);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [captchaError, setCaptchaError] = useState<string | null>(null);
  const [captchaRefresh, setCaptchaRefresh] = useState(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('idle');
    setErrorMessage('');
    
    if (captchaEnabled && !captchaToken) {
      setCaptchaError('Please verify you are not a robot.');
      return;
    }

    setIsSubmitting(true);
    setCaptchaError(null);
    
    try {
      // Split name into first and last name
      const nameParts = formData.name.trim().split(' ');
      const firstName = nameParts[0] || '';
      const lastName = nameParts.slice(1).join(' ') || '';
      
      // Create payload matching the lead API format
      const payload = {
        firstName,
        lastName,
        email: formData.email,
        phone: formData.phone,
        zipCode: '00000', // Default as it's required by API
        ages: 'Contact Form',
        consentChecked: true,
        consentText: `I consent to be contacted about insurance services. Message: ${formData.message}. State: ${formData.state}. Insurance Type: ${formData.insuranceType}.`,
        landingUrl: window.location.href,
        utm: {}
      };
      
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...payload,
          ...(captchaEnabled ? { hcaptchaToken: captchaToken } : {}),
        }),
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          phone: '',
          email: '',
          state: '',
          insuranceType: '',
          message: ''
        });
        if (captchaEnabled) {
          setCaptchaToken(null);
          setCaptchaRefresh((value) => value + 1);
        }
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to send message');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Failed to send message');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <Section className="relative py-16 md:py-20 overflow-hidden">
      {/* Visual Masterpiece Background */}
      <div className="absolute inset-0">
        {/* Primary Luxury Gradient Foundation */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-blue-50/60"></div>
        
        {/* Animated Gradient Orbs */}
        <div className="absolute inset-0 opacity-50">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-teal-200/70 to-transparent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/4 -right-40 w-96 h-96 bg-gradient-to-bl from-blue-200/60 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute -bottom-40 left-1/3 w-72 h-72 bg-gradient-to-tr from-cyan-200/50 to-transparent rounded-full blur-3xl animate-pulse delay-2000"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-tl from-teal-100/60 to-transparent rounded-full blur-2xl animate-pulse delay-3000"></div>
        </div>
        
        {/* Premium Geometric Floating Elements */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-1/5 left-1/6 w-24 h-24 border border-teal-300/30 rounded-full animate-spin" style={{ animationDuration: '25s' }}></div>
          <div className="absolute top-3/4 right-1/5 w-32 h-32 border border-blue-300/25 rounded-lg animate-spin" style={{ animationDuration: '30s', animationDirection: 'reverse' }}></div>
          <div className="absolute top-1/2 left-3/4 w-16 h-16 bg-gradient-to-br from-cyan-300/20 to-teal-300/20 rounded-full animate-pulse delay-1500"></div>
          <div className="absolute top-2/3 left-1/4 w-20 h-20 bg-gradient-to-tr from-blue-200/15 to-cyan-200/15 rounded-xl animate-pulse delay-2500 transform rotate-12"></div>
        </div>
        
        {/* Luxury Light Streams */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/5 w-px h-full bg-gradient-to-b from-teal-400 via-transparent to-blue-400 transform rotate-6"></div>
          <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-blue-400 via-transparent to-cyan-400 transform -rotate-12"></div>
          <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-cyan-300 via-transparent to-teal-300 transform rotate-3"></div>
        </div>
        
        {/* Sophisticated Texture Pattern */}
        <div 
          className="absolute inset-0 opacity-8"
          style={{
            backgroundImage: `
              radial-gradient(circle at 30% 20%, rgba(20,184,166,0.06) 0%, transparent 50%),
              radial-gradient(circle at 80% 70%, rgba(59,130,246,0.04) 0%, transparent 50%),
              radial-gradient(circle at 10% 90%, rgba(6,182,212,0.05) 0%, transparent 50%),
              linear-gradient(135deg, transparent 48%, rgba(255,255,255,0.03) 49%, rgba(255,255,255,0.03) 51%, transparent 52%),
              radial-gradient(2px 2px at 40px 50px, rgba(20,184,166,0.08), transparent),
              radial-gradient(1px 1px at 80px 30px, rgba(59,130,246,0.06), transparent)
            `,
            backgroundSize: '600px 600px, 500px 500px, 400px 400px, 200px 200px, 150px 150px, 100px 100px'
          }}
        />
        
        {/* Floating Particles Network */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/6 left-1/3 w-1 h-1 bg-teal-400 rounded-full animate-pulse"></div>
          <div className="absolute top-1/2 left-1/5 w-0.5 h-0.5 bg-blue-400 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-4/5 left-2/3 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse delay-2000"></div>
          <div className="absolute top-2/5 right-1/4 w-0.5 h-0.5 bg-teal-500 rounded-full animate-pulse delay-3000"></div>
          <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-blue-300 rounded-full animate-pulse delay-1500"></div>
          
          {/* Connecting Lines */}
          <svg className="absolute inset-0 w-full h-full opacity-40">
            <defs>
              <linearGradient id="formLineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(20, 184, 166, 0.2)" />
                <stop offset="50%" stopColor="rgba(59, 130, 246, 0.15)" />
                <stop offset="100%" stopColor="rgba(6, 182, 212, 0.1)" />
              </linearGradient>
            </defs>
            <line x1="33%" y1="16%" x2="20%" y2="50%" stroke="url(#formLineGradient)" strokeWidth="0.5" />
            <line x1="20%" y1="50%" x2="66%" y2="80%" stroke="url(#formLineGradient)" strokeWidth="0.5" />
            <line x1="66%" y1="80%" x2="75%" y2="40%" stroke="url(#formLineGradient)" strokeWidth="0.5" />
            <line x1="75%" y1="40%" x2="66%" y2="75%" stroke="url(#formLineGradient)" strokeWidth="0.5" />
          </svg>
        </div>
        
        {/* Premium Shimmer Wave */}
        <div className="absolute inset-0 opacity-20">
          <div 
            className="absolute inset-0 transform -skew-x-12"
            style={{ 
              background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 30%, rgba(20,184,166,0.05) 50%, rgba(255,255,255,0.1) 70%, transparent 100%)',
              animation: 'shimmerWave 12s ease-in-out infinite'
            }}
          ></div>
        </div>
      </div>
      
      {/* Enhanced Content Layer */}
      <div className="relative z-10 backdrop-blur-[0.5px]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-luxury-serif font-bold text-slate-900 mb-6"
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Send Me a Personal Message
          </motion.h2>
          <motion.p 
            className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Get personalized advice tailored to your specific insurance needs
          </motion.p>
        </div>

        <motion.div 
          className="relative"
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-white/70 backdrop-blur-sm border border-white/20 shadow-luxury rounded-2xl p-8 md:p-10">
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-6 mb-8 pb-8 border-b border-slate-200">
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <Shield className="w-4 h-4 text-brand-jade-500" />
                <span>Secure & Private</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <Clock className="w-4 h-4 text-brand-jade-500" />
                <span>&lt;4 Hour Response</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <Send className="w-4 h-4 text-brand-jade-500" />
                <span>Direct to Zach</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-slate-900">
                    Your Name <span className="text-brand-danger-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/80 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-jade-500 focus:border-brand-jade-500 transition-all duration-300 hover:bg-white focus:bg-white"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-slate-900">
                    Phone Number <span className="text-brand-danger-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/80 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-jade-500 focus:border-brand-jade-500 transition-all duration-300 hover:bg-white focus:bg-white"
                    placeholder="(123) 456-7890"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-slate-900">
                    Email Address <span className="text-brand-danger-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/80 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-jade-500 focus:border-brand-jade-500 transition-all duration-300 hover:bg-white focus:bg-white"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-slate-900">
                    Your State <span className="text-brand-danger-500">*</span>
                  </label>
                  <select
                    name="state"
                    required
                    value={formData.state}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/80 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-jade-500 focus:border-brand-jade-500 transition-all duration-300 hover:bg-white focus:bg-white"
                  >
                    <option value="">Select your state</option>
                    <option value="Florida">Florida</option>
                    <option value="Michigan">Michigan</option>
                    <option value="North Carolina">North Carolina</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-slate-900">
                  Insurance Type Needed
                </label>
                <select
                  name="insuranceType"
                  value={formData.insuranceType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/80 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-jade-500 focus:border-brand-jade-500 transition-all duration-300 hover:bg-white focus:bg-white"
                >
                  <option value="">Select insurance type</option>
                  <option value="Health Insurance">Health Insurance</option>
                  <option value="Life Insurance">Life Insurance</option>
                  <option value="Both">Both</option>
                  <option value="Not Sure">Not Sure</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-slate-900">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/80 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-jade-500 focus:border-brand-jade-500 transition-all duration-300 resize-none hover:bg-white focus:bg-white"
                  placeholder="Tell me about your insurance needs, questions, or concerns..."
                />
              </div>

              <p className="text-xs text-slate-500 text-center">
                Your privacy is important to us. The information you provide helps us prepare for our consultation. We will not share your data or subject you to high-pressure sales calls.
              </p>

              {captchaEnabled && HCAPTCHA_SITE_KEY && (
                <div className="flex flex-col items-center gap-2">
                  <HCaptcha
                    key={`contact-hcaptcha-${captchaRefresh}`}
                    siteKey={HCAPTCHA_SITE_KEY}
                    onVerify={(token: string) => {
                      setCaptchaToken(token);
                      setCaptchaError(null);
                    }}
                    onExpire={() => setCaptchaToken(null)}
                    onError={() =>
                      setCaptchaError('Verification failed. Please refresh the widget and try again.')
                    }
                    className="flex justify-center"
                  />
                  {captchaError && <p className="text-sm text-red-600">{captchaError}</p>}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className={`group w-full px-8 py-4 font-semibold rounded-xl shadow-luxury hover:shadow-xl transform transition-all duration-300 ${
                  isSubmitting 
                    ? 'bg-slate-400 cursor-not-allowed' 
                    : submitStatus === 'success'
                    ? 'bg-green-600 hover:bg-green-700'
                    : 'bg-gradient-to-r from-teal-600 to-blue-600 hover:scale-105'
                } text-white`}
              >
                <div className="flex items-center justify-center gap-3">
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : submitStatus === 'success' ? (
                    <>
                      <Check className="w-5 h-5" />
                      <span>Message Sent!</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                      <span>Request Guidance</span>
                    </>
                  )}
                </div>
              </button>
              
              {submitStatus === 'success' && (
                <motion.div 
                  className="flex items-center justify-center gap-2 text-green-700 bg-green-50 px-4 py-3 rounded-xl border border-green-200"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Check className="w-4 h-4" />
                  <span className="font-medium">Message sent successfully! I'll respond within 4 business hours.</span>
                </motion.div>
              )}
              
              {submitStatus === 'error' && (
                <motion.div 
                  className="flex items-center justify-center gap-2 text-red-700 bg-red-50 px-4 py-3 rounded-xl border border-red-200"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <AlertCircle className="w-4 h-4" />
                  <span className="font-medium">{errorMessage || 'Failed to send message. Please try again.'}</span>
                </motion.div>
              )}

              <div className="text-center space-y-2">
                <p className="text-sm font-medium text-slate-700">
                  I personally read and respond to every message within 4 business hours.
                </p>
                <p className="text-xs text-slate-500">
                  Your information is secure and will never be shared with third parties.
                </p>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
      </div>
    </Section>
  );
}

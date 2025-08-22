import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Send, Shield, Clock } from "lucide-react";
import Section from "../layout/Section";
import { useState } from "react";

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
    <Section className="py-16 md:py-20 bg-gradient-to-br from-white via-slate-50 to-brand-cyan-300/10">
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

              <button
                type="submit"
                className="group w-full px-8 py-4 bg-gradient-to-r from-brand-jade-600 to-brand-sky-600 text-white font-semibold rounded-xl shadow-luxury hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-center justify-center gap-3">
                  <Send className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  <span>Send Message to Zach</span>
                </div>
              </button>

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
    </Section>
  );
}
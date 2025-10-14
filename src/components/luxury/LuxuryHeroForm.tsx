import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Award, Clock, Users, Phone, MessageSquare, Mail } from 'lucide-react';
import HCaptcha from '../security/HCaptcha';

// Static constants - calculated once
const FORM_BENEFITS = [
  { icon: Clock, text: "Guidance delivered in 45-90 minutes" },
  { icon: Shield, text: "Licensed & bonded professionals" },
  { icon: Award, text: "A+ rated carrier partners" },
  { icon: Users, text: "Dedicated personal guidance" }
];

const AGE_OPTIONS = Array.from({ length: 63 }, (_, i) => ({
  value: (i + 18).toString(),
  label: i === 62 ? '80+' : (i + 18).toString()
}));

interface FormData {
  // Step 1
  firstName: string;
  email: string;
  
  // Step 2
  lastName: string;
  phone: string;
  zipCode: string;
  coverageType: 'individual' | 'couple' | 'family' | '';
  
  // Step 3
  yourAge: string;
  spouseAge: string;
  numChildren: string;
  childAges: string[];
  currentInsurance: string;
  contactMethod: 'text' | 'phone' | 'email' | '';
  bestTime: string;
}

type SubmissionStatus = {
  type: 'idle' | 'submitting' | 'success' | 'error';
  message: string;
};

const LuxuryHeroForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    email: '',
    lastName: '',
    phone: '',
    zipCode: '',
    coverageType: '',
    yourAge: '',
    spouseAge: '',
    numChildren: '',
    childAges: [],
    currentInsurance: '',
    contactMethod: '',
    bestTime: ''
  });
  const [status, setStatus] = useState<SubmissionStatus>({ type: 'idle', message: '' });
  const [siteKey, setSiteKey] = useState<string>('');
  const [captchaLoaded, setCaptchaLoaded] = useState(false);
  const captchaEnabled = Boolean(siteKey);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [captchaError, setCaptchaError] = useState<string | null>(null);
  const [captchaRefresh, setCaptchaRefresh] = useState(0);
  const handleCaptchaVerify = useCallback((token: string) => {
    setCaptchaToken(token);
    setCaptchaError(null);
  }, []);

  const handleCaptchaExpire = useCallback(() => {
    setCaptchaToken(null);
  }, []);

  const handleCaptchaError = useCallback(() => {
    setCaptchaToken(null);
    setCaptchaError('Verification failed. Please refresh the widget and try again.');
  }, []);

  useEffect(() => {
    let cancelled = false;

    async function loadSiteKey() {
      try {
        const response = await fetch('/api/hcaptcha-sitekey');
        const data: { siteKey: string | null } = await response.json();
        if (!cancelled) {
          setSiteKey(data.siteKey ?? '');
        }
      } catch (error) {
        console.error('Failed to load hCaptcha site key:', error);
        if (!cancelled) {
          setSiteKey('');
        }
      } finally {
        if (!cancelled) {
          setCaptchaLoaded(true);
        }
      }
    }

    loadSiteKey();

    return () => {
      cancelled = true;
    };
  }, []);

  const updateFormData = useCallback((field: keyof FormData, value: string | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  }, []);

  const validateStep = useCallback((step: number): boolean => {
    switch (step) {
      case 1:
        return formData.firstName.trim() !== '' && formData.email.trim() !== '';
      case 2:
        return formData.lastName.trim() !== '' &&
               formData.phone.trim() !== '' &&
               formData.zipCode.trim() !== '' &&
               formData.coverageType !== '';
      case 3: {
        const baseValid = formData.yourAge !== '' &&
                         formData.currentInsurance !== '' &&
                         formData.contactMethod !== '' &&
                         formData.bestTime !== '';

        if (formData.coverageType === 'couple' || formData.coverageType === 'family') {
          if (formData.spouseAge === '') return false;
        }

        if (formData.coverageType === 'family') {
          if (formData.numChildren === '' || parseInt(formData.numChildren) === 0) return false;
          const numKids = parseInt(formData.numChildren);
          for (let i = 0; i < numKids; i++) {
            if (!formData.childAges[i] || formData.childAges[i] === '') return false;
          }
        }

        return baseValid;
      }
      default:
        return false;
    }
  }, [formData]);

  const handleNext = useCallback(() => {
    if (validateStep(currentStep) && currentStep < 3) {
      setStatus({ type: 'idle', message: '' });
      setCurrentStep(prev => prev + 1);
    }
  }, [currentStep, validateStep]);

  const handleBack = useCallback(() => {
    setStatus({ type: 'idle', message: '' });
    setCurrentStep(prev => (prev > 1 ? prev - 1 : prev));
  }, []);

  const resetForm = useCallback(() => {
    setFormData({
      firstName: '',
      email: '',
      lastName: '',
      phone: '',
      zipCode: '',
      coverageType: '',
      yourAge: '',
      spouseAge: '',
      numChildren: '',
      childAges: [],
      currentInsurance: '',
      contactMethod: '',
      bestTime: ''
    });
    setCurrentStep(1);
  }, []);

  const submitForm = useCallback(async () => {
    if (!validateStep(3)) return;

    if (captchaEnabled && captchaLoaded && !captchaToken) {
      setCaptchaError('Please verify you are not a robot.');
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: 'submitting', message: 'Submitting your information…' });
    setCaptchaError(null);

    try {
      // Compile all ages for comprehensive notes
      let agesNote = `Primary: ${formData.yourAge}`;
      if (formData.coverageType === 'couple' || formData.coverageType === 'family') {
        agesNote += `, Spouse: ${formData.spouseAge}`;
      }
      if (formData.coverageType === 'family' && formData.childAges.length > 0) {
        agesNote += `, Children: ${formData.childAges.filter(age => age).join(', ')}`;
      }

      // Compile comprehensive notes with all form data
      const notes = `Coverage: ${formData.coverageType}, Ages: ${agesNote}, Current Insurance: ${formData.currentInsurance}, Contact Method: ${formData.contactMethod}, Best Time: ${formData.bestTime}`;
      
      // Generate unique vendor reference ID
      const vendorRefId = crypto.randomUUID ? crypto.randomUUID() : 'ref_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);

      const response = await fetch('/api/ringy-proxy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          zipCode: formData.zipCode,
          leadSource: 'Website – Luxury Hero',
          notes,
          proofOfSmsOptInLink: window.location.href,
          vendorReferenceId: vendorRefId,
          ...(captchaEnabled && captchaToken ? { hcaptchaToken: captchaToken } : {}),
        })
      });

      if (!response.ok) {
        const detail = await response.json().catch(() => ({}));
        throw new Error(detail?.detail || 'Failed to submit to Ringy CRM');
      }

      resetForm();
      if (captchaEnabled) {
        setCaptchaToken(null);
        setCaptchaRefresh(value => value + 1);
      }
      setStatus({
        type: 'success',
        message: 'Thank you! Bradford is preparing your tailored recommendations and will reach out shortly.',
      });
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus({
        type: 'error',
        message: 'We could not submit your details. Please try again or call us directly at (689) 325-6570.',
      });
    } finally {
      setIsSubmitting(false);
    }
  }, [formData, resetForm, validateStep]);

  const getProgressWidth = useMemo(() => {
    switch (currentStep) {
      case 1: return 'w-1/3';
      case 2: return 'w-2/3';
      case 3: return 'w-full';
      default: return 'w-1/3';
    }
  }, [currentStep]);

  const getStepMessage = () => {
    switch (currentStep) {
      case 1: return 'Quick and easy - join thousands who\'ve secured their future';
      case 2: return 'Great! Let\'s personalize your options...';
      case 3: return 'Bradford is preparing your custom recommendations...';
      default: return '';
    }
  };

  const handleFormSubmit = useCallback(async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (currentStep < 3) {
      handleNext();
      return;
    }

    if (isSubmitting || !validateStep(3)) {
      return;
    }

    await submitForm();
  }, [currentStep, handleNext, isSubmitting, submitForm, validateStep]);

  return (
    <div className="relative">
      {/* Premium Glow Effect */}
      <div className="absolute -inset-4 bg-gradient-to-br from-[hsl(157,72%,43%)]/20 via-[hsl(157,72%,43%)]/5 to-[hsl(224,100%,32%)]/15 rounded-3xl blur-xl opacity-60"></div>
      
      {/* Main Form Container - Compact */}
      <div className="relative bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] border border-white/30 transform hover:scale-[1.01] transition-all duration-500 max-w-sm mx-auto">
        {/* Corner Accents for Premium Look */}
        <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-[hsl(157,72%,43%)]/30 rounded-tl-lg"></div>
        <div className="absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 border-[hsl(224,100%,32%)]/30 rounded-tr-lg"></div>
        <div className="absolute bottom-4 left-4 w-6 h-6 border-l-2 border-b-2 border-[hsl(157,72%,43%)]/30 rounded-bl-lg"></div>
        <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-[hsl(224,100%,32%)]/30 rounded-br-lg"></div>
        
        <div className="text-center mb-5">
          <h3 className="text-lg font-bold text-slate-900 mb-1">Share Your Details</h3>
          <p className="text-sm text-slate-600">{getStepMessage()}</p>
          </div>

          {/* Progress Bar */}
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs text-slate-500">Step {currentStep} of 3</span>
              <span className="text-xs text-slate-500">{Math.round((currentStep / 3) * 100)}% Complete</span>
            </div>
            <div className="w-full bg-slate-200 rounded-full h-2">
              <div className={`bg-gradient-to-r from-emerald-500 to-emerald-600 h-2 rounded-full ${getProgressWidth} transition-all duration-300`}></div>
            </div>
          </div>

        <form className="space-y-3" onSubmit={handleFormSubmit} noValidate>
          <AnimatePresence mode="wait">
            {/* Step 1 */}
            {currentStep === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">First Name *</label>
                  <input 
                    type="text" 
                    required
                    value={formData.firstName}
                    onChange={(e) => updateFormData('firstName', e.target.value)}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all" 
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Email Address *</label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => updateFormData('email', e.target.value)}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all" 
                    placeholder="your@email.com"
                  />
                </div>
              </motion.div>
            )}

            {/* Step 2 */}
            {currentStep === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Last Name *</label>
                  <input 
                    type="text" 
                    required
                    value={formData.lastName}
                    onChange={(e) => updateFormData('lastName', e.target.value)}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all" 
                    placeholder="Enter your last name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number *</label>
                  <input 
                    type="tel" 
                    required
                    value={formData.phone}
                    onChange={(e) => updateFormData('phone', e.target.value)}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all" 
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">ZIP Code *</label>
                  <input 
                    type="text" 
                    required
                    value={formData.zipCode}
                    onChange={(e) => updateFormData('zipCode', e.target.value)}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all" 
                    placeholder="12345"
                    maxLength={5}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-3">Coverage Type *</label>
                  <div className="space-y-2">
                    {['individual', 'couple', 'family'].map((type) => (
                      <label key={type} className="flex items-center p-3 border border-slate-300 rounded-lg cursor-pointer hover:bg-slate-50 transition-colors">
                        <input
                          type="radio"
                          name="coverageType"
                          value={type}
                          checked={formData.coverageType === type}
                          onChange={(e) => updateFormData('coverageType', e.target.value)}
                          className="mr-3 text-emerald-600"
                        />
                        <span className="capitalize font-medium">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 3 */}
            {currentStep === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <div className="text-sm text-slate-600 bg-blue-50 p-3 rounded-lg mb-4">
                  Insurance rates are age-based - this ensures the most tailored guidance
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Your Age *</label>
                  <select 
                    required
                    value={formData.yourAge}
                    onChange={(e) => updateFormData('yourAge', e.target.value)}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                  >
                    <option value="">Select your age</option>
                    {AGE_OPTIONS.map(option => (
                      <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                  </select>
                </div>

                {(formData.coverageType === 'couple' || formData.coverageType === 'family') && (
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Spouse/Partner Age *</label>
                    <select 
                      required
                      value={formData.spouseAge}
                      onChange={(e) => updateFormData('spouseAge', e.target.value)}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                    >
                      <option value="">Select spouse age</option>
                      {AGE_OPTIONS.map(option => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                      ))}
                    </select>
                  </div>
                )}

                {formData.coverageType === 'family' && (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Number of Children *</label>
                      <select 
                        required
                        value={formData.numChildren}
                        onChange={(e) => {
                          const num = e.target.value;
                          updateFormData('numChildren', num);
                          // Reset child ages array
                          updateFormData('childAges', new Array(parseInt(num) || 0).fill(''));
                        }}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                      >
                        <option value="">Select number</option>
                        {[1,2,3,4,5,6].map(num => (
                          <option key={num} value={num.toString()}>{num}</option>
                        ))}
                      </select>
                    </div>

                    {formData.numChildren && parseInt(formData.numChildren) > 0 && (
                      <div className="space-y-2">
                        {Array.from({ length: parseInt(formData.numChildren) }, (_, i) => (
                          <div key={i}>
                            <label className="block text-sm font-medium text-slate-700 mb-2">Child {i + 1} Age *</label>
                            <select 
                              required
                              value={formData.childAges[i] || ''}
                              onChange={(e) => {
                                const newChildAges = [...formData.childAges];
                                newChildAges[i] = e.target.value;
                                updateFormData('childAges', newChildAges);
                              }}
                              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                            >
                              <option value="">Select age</option>
                              {Array.from({ length: 26 }, (_, i) => (
                                <option key={i} value={i.toString()}>{i === 0 ? 'Under 1' : i}</option>
                              ))}
                            </select>
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                )}

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Current Insurance Status *</label>
                  <select 
                    required
                    value={formData.currentInsurance}
                    onChange={(e) => updateFormData('currentInsurance', e.target.value)}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                  >
                    <option value="">Select status</option>
                    <option value="no-coverage">No coverage</option>
                    <option value="have-coverage">Have coverage</option>
                    <option value="looking-to-switch">Looking to switch</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-3">Preferred Contact Method *</label>
                  <div className="space-y-2">
                    {[
                      { value: 'text', label: 'Text Message', icon: MessageSquare },
                      { value: 'phone', label: 'Phone Call', icon: Phone },
                      { value: 'email', label: 'Email', icon: Mail }
                    ].map((method) => (
                      <label key={method.value} className="flex items-center p-3 border border-slate-300 rounded-lg cursor-pointer hover:bg-slate-50 transition-colors">
                        <input
                          type="radio"
                          name="contactMethod"
                          value={method.value}
                          checked={formData.contactMethod === method.value}
                          onChange={(e) => updateFormData('contactMethod', e.target.value)}
                          className="mr-3 text-emerald-600"
                        />
                        <method.icon className="w-4 h-4 mr-2 text-slate-600" />
                        <span className="font-medium">{method.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Best Time to Contact *</label>
                  <select 
                    required
                    value={formData.bestTime}
                    onChange={(e) => updateFormData('bestTime', e.target.value)}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                  >
                    <option value="">Select time</option>
                    <option value="morning">Morning 9-12</option>
                    <option value="afternoon">Afternoon 12-5</option>
                    <option value="evening">Evening 5-8</option>
                  </select>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation Buttons */}
          <p className="text-xs text-slate-500 text-center mb-4">
            Your privacy is important to us. The information you provide helps us prepare for our consultation. We will not share your data or subject you to high-pressure sales calls.
          </p>
          <div className="flex gap-3 mt-6">
            {currentStep > 1 && (
              <button 
                type="button"
                onClick={handleBack}
                className="flex-1 px-4 py-3 border border-slate-300 text-slate-700 font-semibold rounded-lg hover:bg-slate-50 transition-all"
              >
                Back
              </button>
            )}
            
            {currentStep < 3 ? (
              <button 
                type="button"
                onClick={handleNext}
                disabled={!validateStep(currentStep)}
                className="flex-1 bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-lg transition-all transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Continue
              </button>
            ) : (
              <button 
                type="submit"
                disabled={!validateStep(3) || isSubmitting}
                className="flex-1 bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-lg transition-all transform hover:scale-[1.02] active:scale-[0.98]"
              >
                {isSubmitting ? 'Submitting…' : 'Start My Consultation'}
              </button>
            )}
          </div>

          {currentStep === 3 && (
            <div className="mt-6 flex justify-center relative z-20">
              {captchaEnabled && captchaLoaded ? (
                <div className="space-y-2">
                  <HCaptcha
                    key={`luxury-hcaptcha-${captchaRefresh}`}
                    siteKey={siteKey}
                    onVerify={handleCaptchaVerify}
                    onExpire={handleCaptchaExpire}
                    onError={handleCaptchaError}
                  />
                  {captchaError && (
                    <p className="text-sm text-red-600 text-center">{captchaError}</p>
                  )}
                </div>
              ) : captchaLoaded ? (
                <p className="text-sm text-red-600 text-center">
                  Verification service is unavailable. Please try again later.
                </p>
              ) : null}
            </div>
          )}

          <div aria-live="polite" className="mt-4 text-center">
            {status.message && (
              <p
                className={`text-sm ${
                  status.type === 'error'
                    ? 'text-red-500'
                    : status.type === 'success'
                    ? 'text-emerald-500'
                    : 'text-slate-500'
                }`}
              >
                {status.message}
              </p>
            )}
          </div>
        </form>

        {/* Benefits sidebar */}
        <div className="mt-6 pt-6 border-t border-slate-200">
          <div className="space-y-3">
            {FORM_BENEFITS.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3 text-sm text-slate-600">
                <benefit.icon className="w-4 h-4 text-emerald-500" />
                <span>{benefit.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Security badges */}
        <div className="mt-6 flex justify-center items-center gap-4">
          <div className="flex items-center gap-1 text-xs text-slate-500">
            <Shield className="w-3 h-3" />
            <span>SSL Secured</span>
          </div>
          <div className="flex items-center gap-1 text-xs text-slate-500">
            <Award className="w-3 h-3" />
            <span>Licensed & Bonded</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LuxuryHeroForm;

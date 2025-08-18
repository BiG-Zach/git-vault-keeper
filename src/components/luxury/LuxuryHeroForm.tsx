import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Award, Clock, Users, Phone, MessageSquare, Mail } from 'lucide-react';

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

  const benefits = [
    { icon: Clock, text: "Average quotes in 45-90 minutes" },
    { icon: Shield, text: "Licensed & bonded professionals" },
    { icon: Award, text: "A+ rated carrier partners" },
    { icon: Users, text: "Dedicated personal guidance" }
  ];

  const ageOptions = Array.from({ length: 63 }, (_, i) => ({
    value: (i + 18).toString(),
    label: i === 62 ? '80+' : (i + 18).toString()
  }));

  const updateFormData = (field: keyof FormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const validateStep = (step: number): boolean => {
    switch (step) {
      case 1:
        return formData.firstName.trim() !== '' && formData.email.trim() !== '';
      case 2:
        return formData.lastName.trim() !== '' && 
               formData.phone.trim() !== '' && 
               formData.zipCode.trim() !== '' && 
               formData.coverageType !== '';
      case 3:
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
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (validateStep(currentStep) && currentStep < 3) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const deriveLocationFromZip = (zip: string) => {
    // Simple ZIP to state mapping (expand as needed)
    const zipToState: { [key: string]: { city: string; state: string } } = {
      '33': { city: 'Miami', state: 'FL' },
      '32': { city: 'Jacksonville', state: 'FL' },
      '34': { city: 'Tampa', state: 'FL' },
      '48': { city: 'Detroit', state: 'MI' },
      '49': { city: 'Grand Rapids', state: 'MI' },
      '27': { city: 'Charlotte', state: 'NC' },
      '28': { city: 'Raleigh', state: 'NC' },
    };

    const prefix = zip.substring(0, 2);
    return zipToState[prefix] || { city: 'Unknown', state: 'Unknown' };
  };

  const calculateBirthYear = (age: string) => {
    const currentYear = new Date().getFullYear();
    const ageNum = parseInt(age);
    return (currentYear - ageNum).toString();
  };

  const handleSubmit = async () => {
    if (!validateStep(3)) return;

    setIsSubmitting(true);

    try {
      const location = deriveLocationFromZip(formData.zipCode);
      
      // Compile all ages for notes
      let agesNote = `Primary: ${formData.yourAge}`;
      if (formData.coverageType === 'couple' || formData.coverageType === 'family') {
        agesNote += `, Spouse: ${formData.spouseAge}`;
      }
      if (formData.coverageType === 'family' && formData.childAges.length > 0) {
        agesNote += `, Children: ${formData.childAges.filter(age => age).join(', ')}`;
      }

      const notes = `Coverage: ${formData.coverageType}, Ages: ${agesNote}, Current Insurance: ${formData.currentInsurance}, Contact Method: ${formData.contactMethod}, Best Time: ${formData.bestTime}`;

      if (formData.contactMethod === 'text') {
        // Route to VENDOR 1 (auto-text vendor)
        console.log('Routing to auto-text vendor:', formData);
        // Add your auto-text vendor integration here
        
      } else {
        // Route to VENDOR 2 (Ringy CRM)
        const ringyPayload = {
          sid: "1Saynato1vqs8mydru1a3r1w5vardA",
          authToken: "2v8nz58saqx2nv17ckuoe2v20k75s6eh",
          phone_number: formData.phone,
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          city: location.city,
          state: location.state,
          zip_code: formData.zipCode,
          birthday: calculateBirthYear(formData.yourAge),
          notes: notes
        };

        const response = await fetch('https://app.ringy.com/api/public/leads/new-lead', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer 2v8nz58saqx2nv17ckuoe2v20k75s6eh'
          },
          body: JSON.stringify(ringyPayload)
        });

        if (!response.ok) {
          throw new Error('Failed to submit to Ringy CRM');
        }
      }

      // Success - show confirmation
      alert('Thank you! Bradford is preparing your custom recommendations. We\'ll be in touch soon.');
      
      // Reset form
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

    } catch (error) {
      console.error('Form submission error:', error);
      alert('There was an error submitting your information. Please try again or call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getProgressWidth = () => {
    switch (currentStep) {
      case 1: return 'w-1/3';
      case 2: return 'w-2/3';
      case 3: return 'w-full';
      default: return 'w-1/3';
    }
  };

  const getStepMessage = () => {
    switch (currentStep) {
      case 1: return 'Quick and easy - join thousands who\'ve secured their future';
      case 2: return 'Great! Let\'s personalize your options...';
      case 3: return 'Bradford is preparing your custom recommendations...';
      default: return '';
    }
  };

  return (
    <div className="bg-white/95 backdrop-blur-md rounded-2xl p-8 shadow-luxury border border-white/20">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-slate-900 mb-2">Get Your Premium Quote</h3>
        <p className="text-slate-600">{getStepMessage()}</p>
      </div>
      
      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs text-slate-500">Step {currentStep} of 3</span>
          <span className="text-xs text-slate-500">{Math.round((currentStep / 3) * 100)}% Complete</span>
        </div>
        <div className="w-full bg-slate-200 rounded-full h-2">
          <div className={`bg-gradient-to-r from-emerald-500 to-emerald-600 h-2 rounded-full ${getProgressWidth()} transition-all duration-300`}></div>
        </div>
      </div>

      <form className="space-y-4">
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
                Insurance rates are age-based - this ensures your most accurate quote
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
                  {ageOptions.map(option => (
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
                    {ageOptions.map(option => (
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
              type="button"
              onClick={handleSubmit}
              disabled={!validateStep(3) || isSubmitting}
              className="flex-1 bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-lg transition-all transform hover:scale-[1.02] active:scale-[0.98]"
            >
              {isSubmitting ? 'Submitting...' : 'Get My Quote'}
            </button>
          )}
        </div>
      </form>

      {/* Benefits sidebar */}
      <div className="mt-6 pt-6 border-t border-slate-200">
        <div className="space-y-3">
          {benefits.map((benefit, index) => (
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
  );
};

export default LuxuryHeroForm;
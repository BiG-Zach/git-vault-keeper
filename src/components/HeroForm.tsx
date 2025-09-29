import React, { useState } from 'react';

const DEFAULT_LEAD_SOURCE = 'Website - Mobile Hero';

const HeroForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    state: '',
    consentToText: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ message: '', type: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;

    if (type === 'checkbox') {
      const { checked } = e.target as HTMLInputElement;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ message: '', type: '' });

    try {
      const searchParams = new URLSearchParams(window.location.search);
      const utm = Object.fromEntries(searchParams.entries());
      const payload = {
        ...formData,
        leadSource: DEFAULT_LEAD_SOURCE,
        landingUrl: window.location.href,
        utm,
      };

      const response = await fetch('/api/ringy-proxy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setSubmitStatus({ message: 'Thank you for your submission!', type: 'success' });
        setFormData({
          firstName: '',
          lastName: '',
          phone: '',
          email: '',
          state: '',
          consentToText: false,
        });
      } else {
        const errorData = await response.json();
        setSubmitStatus({ message: `Submission failed: ${errorData.message || 'Please try again.'}`, type: 'error' });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus({ message: 'An error occurred. Please try again later.', type: 'error' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Get a Free Quote</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">First Name</label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="firstName" name="firstName" type="text" placeholder="John" value={formData.firstName} onChange={handleChange} required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">Last Name</label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="lastName" name="lastName" type="text" placeholder="Doe" value={formData.lastName} onChange={handleChange} required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" name="email" type="email" placeholder="you@example.com" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">Phone</label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phone" name="phone" type="tel" placeholder="(555) 555-5555" value={formData.phone} onChange={handleChange} required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="state">State</label>
          <select id="state" name="state" className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={formData.state} onChange={handleChange} required>
            <option value="">Select a State</option>
            <option value="AZ">Arizona</option>
            <option value="FL">Florida</option>
            <option value="GA">Georgia</option>
            <option value="MI">Michigan</option>
            <option value="NC">North Carolina</option>
            <option value="TX">Texas</option>
          </select>
        </div>
        <div className="mb-6">
          <label className="flex items-center">
            <input type="checkbox" name="consentToText" className="form-checkbox" checked={formData.consentToText} onChange={handleChange} />
            <span className="ml-2 text-sm text-gray-600">I agree to receive text messages for quotes.</span>
          </label>
        </div>
        <div className="flex items-center justify-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Get My Quote'}
          </button>
        </div>
        {submitStatus.message && (
          <p className={`text-center mt-4 text-sm ${submitStatus.type === 'error' ? 'text-red-500' : 'text-green-500'}`}>
            {submitStatus.message}
          </p>
        )}
      </form>
    </div>
  );
};

export default HeroForm;
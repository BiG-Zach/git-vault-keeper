import React, { useState } from 'react';
import HCaptcha from './security/HCaptcha';

const DEFAULT_LEAD_SOURCE = 'Website — Hero Form';

interface SubmitStatus {
  message: string;
  type: 'success' | 'error' | '';
}

interface FormState {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  state: string;
  consentToText: boolean;
}

interface NoteContext {
  leadSource: string;
  state: string;
  consentToText: boolean;
  landingUrl: string;
  utm: Record<string, string>;
}

const initialFormState: FormState = {
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  state: '',
  consentToText: false,
};

const sanitizePhone = (value: string) => value.replace(/\D/g, '');

const buildNotes = ({ leadSource, state, consentToText, landingUrl, utm }: NoteContext) => {
  const lines = [
    `Lead Source: ${leadSource}`,
    `State: ${state}`,
    `Consent to Text: ${consentToText ? 'Yes' : 'No'}`,
  ];

  if (landingUrl) {
    lines.push(`Landing URL: ${landingUrl}`);
  }

  Object.entries(utm)
    .filter(([, value]) => Boolean(value))
    .forEach(([key, value]) => {
      lines.push(`UTM ${key}: ${value}`);
    });

  return lines.join('\n');
};

const buildCustomFields = (state: string, consentToText: boolean, landingUrl: string, utm: Record<string, string>) => {
  const custom: Record<string, string> = {
    state,
    consent_to_text: consentToText ? 'Yes' : 'No',
  };

  if (landingUrl) {
    custom.landing_url = landingUrl;
  }

  Object.entries(utm)
    .filter(([, value]) => Boolean(value))
    .forEach(([key, value]) => {
      const normalizedKey = key.startsWith('utm_') ? key.slice(4) : key;
      custom[`utm_${normalizedKey}`] = value;
    });

  return custom;
};

const parseErrorResponse = async (response: Response) => {
  const contentType = response.headers.get('content-type') ?? '';

  try {
    if (contentType.includes('application/json')) {
      const data = (await response.json()) as Record<string, unknown>;
      const messageCandidate = [data.error, data.message].find(
        (value): value is string => typeof value === 'string' && value.trim().length > 0,
      );
      return messageCandidate || response.statusText || 'Please try again.';
    }

    const text = (await response.text()).trim();
    return text || response.statusText || 'Please try again.';
  } catch {
    return response.statusText || 'Please try again.';
  }
};

const HCAPTCHA_SITE_KEY = import.meta.env.VITE_HCAPTCHA_SITEKEY as string | undefined;

const HeroForm = () => {
  const [formData, setFormData] = useState<FormState>(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>({ message: '', type: '' });
  const captchaEnabled = Boolean(HCAPTCHA_SITE_KEY);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [captchaError, setCaptchaError] = useState<string | null>(null);
  const [captchaRefresh, setCaptchaRefresh] = useState(0);

  const resetStatus = () => setSubmitStatus({ message: '', type: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;

    resetStatus();

    if (type === 'checkbox') {
      const { checked } = e.target as HTMLInputElement;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    resetStatus();
    if (captchaEnabled && !captchaToken) {
      setCaptchaError('Please verify you are not a robot.');
      return;
    }

    setCaptchaError(null);
    setIsSubmitting(true);

    const sanitizedPhone = sanitizePhone(formData.phone);

    if (sanitizedPhone.length < 10) {
      setSubmitStatus({ message: 'Please enter a valid phone number.', type: 'error' });
      setIsSubmitting(false);
      return;
    }

    const hasWindow = typeof window !== 'undefined';
    const landingUrl = hasWindow ? window.location.href : '';
    const searchParams = hasWindow ? new URLSearchParams(window.location.search) : new URLSearchParams();
    const utm = Object.fromEntries(searchParams.entries());

    const notes = buildNotes({
      leadSource: DEFAULT_LEAD_SOURCE,
      state: formData.state,
      consentToText: formData.consentToText,
      landingUrl,
      utm,
    });

    const metadata = hasWindow
      ? {
          landingUrl,
          submittedAt: new Date().toISOString(),
          utm,
          form: 'Hero',
        }
      : undefined;

    const custom = buildCustomFields(formData.state, formData.consentToText, landingUrl, utm);

    const payload: Record<string, unknown> = {
      firstName: formData.firstName.trim(),
      lastName: formData.lastName.trim(),
      phone: sanitizedPhone,
      email: formData.email.trim(),
      state: formData.state,
      consentToText: formData.consentToText,
      leadSource: DEFAULT_LEAD_SOURCE,
      notes,
    };

    if (metadata) {
      payload.metadata = metadata;
    }

    if (Object.values(custom).some(Boolean)) {
      payload.custom = custom;
    }

    if (captchaEnabled && captchaToken) {
      payload.hcaptchaToken = captchaToken;
    }

    try {
      const response = await fetch('/api/ringy-proxy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setSubmitStatus({ message: 'Thank you for your submission!', type: 'success' });
        setFormData(initialFormState);
        if (captchaEnabled) {
          setCaptchaToken(null);
          setCaptchaRefresh(value => value + 1);
        }
      } else {
        const detail = await parseErrorResponse(response);
        setSubmitStatus({ message: `Submission failed: ${detail}`, type: 'error' });
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
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Let's Start the Conversation</h2>
      <form onSubmit={handleSubmit} noValidate>
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
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phone" name="phone" type="tel" placeholder="(555) 555-5555" value={formData.phone} onChange={handleChange} required aria-describedby="phone-help" />
          <p id="phone-help" className="mt-1 text-xs text-gray-500">Numbers only; we'll format it for the submission.</p>
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
            <span className="ml-2 text-sm text-gray-600">I agree to receive text messages that support our consultation.</span>
          </label>
        </div>
        {captchaEnabled && HCAPTCHA_SITE_KEY && (
          <div className="mb-6 flex flex-col items-center gap-2">
            <HCaptcha
              key={`hero-hcaptcha-${captchaRefresh}`}
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
            {captchaError && <p className="text-sm text-red-600 text-center">{captchaError}</p>}
          </div>
        )}
        <p className="text-xs text-gray-500 text-center mb-4">
          Your privacy is important to us. The information you provide helps us prepare for our consultation. We will not share your data or subject you to high-pressure sales calls.
        </p>
        <div className="flex items-center justify-center">
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:opacity-60 disabled:cursor-not-allowed" type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Start My Consultation'}
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

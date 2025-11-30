import React, { useEffect, useState } from 'react';
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

const HeroForm = () => {
  const [formData, setFormData] = useState<FormState>(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>({ message: '', type: '' });
  const [siteKey, setSiteKey] = useState<string>('');
  const [captchaLoaded, setCaptchaLoaded] = useState(false);
  const captchaEnabled = Boolean(siteKey);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [captchaError, setCaptchaError] = useState<string | null>(null);
  const [captchaRefresh, setCaptchaRefresh] = useState(0);

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
    if (captchaEnabled && captchaLoaded && !captchaToken) {
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
    <div className="glass-panel p-8 rounded-2xl w-full max-w-md mx-auto animate-fadeIn relative overflow-hidden group md:shadow-none shadow-2xl shadow-slate-900/50">
      {/* Mobile-only stronger background for visibility */}
      <div className="absolute inset-0 md:hidden bg-slate-900/30 backdrop-blur-xl" />
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 md:from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      <h2 className="text-2xl font-luxury-serif font-bold mb-6 text-center text-white drop-shadow-md relative z-10">
        Let's Start the Conversation
      </h2>

      <form onSubmit={handleSubmit} noValidate className="space-y-4 relative z-10">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-emerald-100 text-xs font-bold mb-1 uppercase tracking-wider" htmlFor="firstName">First Name</label>
            <input
              className="w-full bg-white/20 md:bg-white/10 border border-white/30 md:border-white/20 rounded-lg py-2.5 px-3 text-white placeholder-white/60 md:placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-brand-jade-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm shadow-inner md:shadow-none"
              id="firstName"
              name="firstName"
              type="text"
              placeholder="John"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-emerald-100 text-xs font-bold mb-1.5 uppercase tracking-wider" htmlFor="lastName">Last Name</label>
            <input
              className="w-full bg-white/20 md:bg-white/10 border border-white/30 md:border-white/20 rounded-lg py-2.5 px-3 text-white placeholder-white/60 md:placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-brand-jade-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm shadow-inner md:shadow-none"
              id="lastName"
              name="lastName"
              type="text"
              placeholder="Doe"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-emerald-100 text-xs font-bold mb-1.5 uppercase tracking-wider" htmlFor="email">Email Address</label>
          <input
            className="w-full bg-white/20 md:bg-white/10 border border-white/30 md:border-white/20 rounded-lg py-2.5 px-3 text-white placeholder-white/60 md:placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-brand-jade-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm shadow-inner md:shadow-none"
            id="email"
            name="email"
            type="email"
            placeholder="john@example.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block text-emerald-100 text-xs font-bold mb-1.5 uppercase tracking-wider" htmlFor="phone">Phone Number</label>
          <input
            className="w-full bg-white/20 md:bg-white/10 border border-white/30 md:border-white/20 rounded-lg py-2.5 px-3 text-white placeholder-white/60 md:placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-brand-jade-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm shadow-inner md:shadow-none"
            id="phone"
            name="phone"
            type="tel"
            placeholder="(555) 555-5555"
            value={formData.phone}
            onChange={handleChange}
            required
            aria-describedby="phone-help"
          />
          <p id="phone-help" className="mt-1 text-[10px] text-emerald-200/70">Numbers only; we'll format it for the submission.</p>
        </div>

        <div>
          <label className="block text-emerald-100 text-xs font-bold mb-1.5 uppercase tracking-wider" htmlFor="state">State</label>
          <div className="relative">
            <select
              id="state"
              name="state"
              className="w-full bg-white/20 md:bg-white/10 border border-white/30 md:border-white/20 rounded-lg py-2.5 px-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-jade-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm appearance-none cursor-pointer shadow-inner md:shadow-none"
              value={formData.state}
              onChange={handleChange}
              required
            >
              <option value="" className="text-slate-900">Select Your State</option>
              <option value="AZ" className="text-slate-900">Arizona</option>
              <option value="FL" className="text-slate-900">Florida</option>
              <option value="GA" className="text-slate-900">Georgia</option>
              <option value="MI" className="text-slate-900">Michigan</option>
              <option value="NC" className="text-slate-900">North Carolina</option>
              <option value="TX" className="text-slate-900">Texas</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-emerald-200">
              <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
            </div>
          </div>
        </div>

        <div className="pt-2">
          <label className="flex items-start gap-3 cursor-pointer group">
            <div className="relative flex items-center">
              <input
                type="checkbox"
                name="consentToText"
                className="peer h-5 w-5 cursor-pointer appearance-none rounded border border-white/30 bg-white/10 transition-all checked:border-brand-jade-500 checked:bg-brand-jade-500 hover:border-brand-jade-400"
                checked={formData.consentToText}
                onChange={handleChange}
              />
              <svg className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100 transition-opacity duration-200" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span className="text-xs text-emerald-100/80 leading-relaxed group-hover:text-white transition-colors">
              I agree to receive text messages that support our consultation.
            </span>
          </label>
        </div>

        {captchaEnabled && captchaLoaded && (
          <div className="flex justify-center py-2">
            <div className="rounded overflow-hidden">
              <HCaptcha
                key={`hero-hcaptcha-${captchaRefresh}`}
                siteKey={siteKey}
                onVerify={(token: string) => {
                  setCaptchaToken(token);
                  setCaptchaError(null);
                }}
                onExpire={() => setCaptchaToken(null)}
                onError={() =>
                  setCaptchaError('Verification failed. Please refresh.')
                }
              />
            </div>
            {captchaError && <p className="text-xs text-red-300 text-center mt-1">{captchaError}</p>}
          </div>
        )}

        {!captchaEnabled && captchaLoaded && (
          <p className="mb-4 text-xs text-center text-red-300 bg-red-500/10 p-2 rounded border border-red-500/20">
            Verification service is unavailable. Please try again later.
          </p>
        )}

        <button
          className="w-full bg-gradient-to-r from-brand-jade-600 to-brand-jade-500 hover:from-brand-jade-500 hover:to-brand-jade-400 text-white font-bold py-3.5 px-4 rounded-xl shadow-lg shadow-brand-jade-500/20 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-brand-jade-500/40 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-jade-500 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none mt-2"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing...
            </span>
          ) : 'Start My Consultation'}
        </button>

        <p className="text-[10px] text-emerald-200/60 text-center mt-3 leading-tight">
          Your privacy is important to us. The information you provide helps us prepare for our consultation. We will not share your data or subject you to high-pressure sales calls.
        </p>

        {submitStatus.message && (
          <div className={`text-center p-3 rounded-lg text-sm font-medium animate-fadeIn ${submitStatus.type === 'error' ? 'bg-red-500/20 text-red-100 border border-red-500/30' : 'bg-emerald-500/20 text-emerald-100 border border-emerald-500/30'}`}>
            {submitStatus.message}
          </div>
        )}
      </form>
    </div>
  );
};

export default HeroForm;

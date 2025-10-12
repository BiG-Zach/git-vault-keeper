import { useEffect, useMemo, useState, type ReactNode } from 'react';
import SEO from '../../components/SEO';
import Reveal from '../../components/Reveal';
import {
  type QuoteBasics,
  type QuoteHousehold,
  type QuoteContact,
  validateBasics,
  validateHousehold,
  validateContact,
  normalizePhone,
} from '../../utils/validation';
import HCaptcha from '../../components/security/HCaptcha';

type Step = 0 | 1 | 2 | 3;

type QuoteData = {
  basics: QuoteBasics;
  household: QuoteHousehold;
  contact: QuoteContact;
};

const STORAGE_KEY = 'big-quote-form-v1';
const HCAPTCHA_SITE_KEY = import.meta.env.VITE_HCAPTCHA_SITEKEY as string | undefined;

function isQuoteData(data: unknown): data is QuoteData {
  if (!data || typeof data !== 'object') return false;
  const d = data as Record<string, unknown>;

  // Check basics
  if (!d.basics || typeof d.basics !== 'object') return false;
  const basics = d.basics as Record<string, unknown>;
  if (typeof basics.zip !== 'string') return false;
  if (typeof basics.state !== 'string') return false;
  if (typeof basics.coverageType !== 'string') return false;

  // Check household
  if (!d.household || typeof d.household !== 'object') return false;
  const household = d.household as Record<string, unknown>;
  if (!Array.isArray(household.ages)) return false;
  if (typeof household.tobacco !== 'boolean') return false;
  if (typeof household.dependents !== 'number') return false;

  // Check contact
  if (!d.contact || typeof d.contact !== 'object') return false;
  const contact = d.contact as Record<string, unknown>;
  if (typeof contact.firstName !== 'string') return false;
  if (typeof contact.lastName !== 'string') return false;
  if (typeof contact.email !== 'string') return false;
  if (typeof contact.phone !== 'string') return false;
  if (typeof contact.consent !== 'boolean') return false;

  return true;
}

function hasSessionStorage() {
  return typeof window !== 'undefined' && typeof window.sessionStorage !== 'undefined';
}

function loadInitial(): QuoteData {
  if (!hasSessionStorage()) {
    return {
      basics: { zip: '', state: 'FL', coverageType: 'Health' },
      household: { ages: [], tobacco: false, dependents: 0 },
      contact: { firstName: '', lastName: '', email: '', phone: '', consent: false },
    };
  }
  try {
    const raw = window.sessionStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed: unknown = JSON.parse(raw);
      if (isQuoteData(parsed)) {
        return parsed;
      }
      console.warn('Stored quote data has invalid structure, using defaults');
    }
  } catch (error) {
    console.warn('Failed to load stored quote data:', error);
  }
  return {
    basics: { zip: '', state: 'FL', coverageType: 'Health' },
    household: { ages: [], tobacco: false, dependents: 0 },
    contact: { firstName: '', lastName: '', email: '', phone: '', consent: false },
  };
}

function saveState(data: QuoteData) {
  if (!hasSessionStorage()) return;
  try {
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    // Silently fail if sessionStorage is not available
  }
}

function FieldError({ msg }: { msg?: string }) {
  if (!msg) return null;
  return <p className="mt-1 text-sm text-red-600">{msg}</p>;
}

export default function QuotePage() {
  const [step, setStep] = useState<Step>(0);
  const [data, setData] = useState<QuoteData>(() => loadInitial());
  const [errors, setErrors] = useState<Record<string, string>>({});
  const captchaEnabled = Boolean(HCAPTCHA_SITE_KEY);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [captchaError, setCaptchaError] = useState<string | null>(null);

  useEffect(() => {
    saveState(data);
  }, [data]);

  useEffect(() => {
    if (step !== 3) {
      setCaptchaToken(null);
      setCaptchaError(null);
    }
  }, [step]);

  const progress = useMemo(
    () => [
      { id: 0, label: 'Tell Me About Your Coverage Needs' },
      { id: 1, label: 'Who Are We Protecting Today?' },
      { id: 2, label: "Let's Connect" },
      { id: 3, label: 'Review Your Information' },
    ],
    []
  );

  function next() {
    if (step === 0) {
      const e = validateBasics(data.basics);
      if (Object.keys(e).length) {
        setErrors(Object.fromEntries(Object.entries(e)));
        return;
      }
    }
    if (step === 1) {
      const e = validateHousehold(data.household);
      if (Object.keys(e).length) {
        setErrors(Object.fromEntries(Object.entries(e)));
        return;
      }
    }
    if (step === 2) {
      const e = validateContact(data.contact);
      if (Object.keys(e).length) {
        setErrors(Object.fromEntries(Object.entries(e)));
        return;
      }
    }
    setErrors({});
    setStep((s) => {
      const nxt = Math.min(3, s + 1) as Step;
      return nxt as Step;
    });
  }

  function prev() {
    setStep((s) => {
      const prv = Math.max(0, s - 1) as Step;
      return prv as Step;
    });
  }

  async function submit() {
    if (captchaEnabled && !captchaToken) {
      setCaptchaError('Please verify you are not a robot before submitting.');
      return;
    }

    try {
      const payload = {
        ...data,
        contact: {
          ...data.contact,
          phone: normalizePhone(data.contact.phone),
          consentAt: new Date().toISOString(),
        },
        meta: { source: 'web', path: location.pathname },
        timestamp: new Date().toISOString(),
      };
      
      // Submit to email API
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...payload,
          subject: `New Consultation Request - ${data.contact.firstName} ${data.contact.lastName} - ${data.basics.coverageType}`,
          email: 'zbradford@bradfordinformedguidance.com',
          ...(captchaEnabled ? { hcaptchaToken: captchaToken } : {}),
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit consultation request');
      }
      
      // Redirect to thank you page
      location.assign('/thank-you');
    } catch (error) {
      console.error('Submission error:', error);
      alert('There was an error submitting your consultation request. Please try again or call (689) 325-6570 for personal assistance.');
    }
  }

  return (
    <main id="content" className="has-sticky-cta">
      <SEO
        title="Let's Start the Conversation"
        path="/quote"
        description="Share a few details so we can prepare thoughtful recommendations backed by our Best Insurance Group partnership."
      />

      <section className="section">
        <div className="container-default">
          {/* Premium Header Section */}
          <div className="text-center mb-12">
            <Reveal>
              <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-800 to-indigo-900 bg-clip-text text-transparent mb-4">
                Let's Start the Conversation
              </h1>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="text-xl text-slate-700 max-w-2xl mx-auto leading-relaxed mb-8">
                Tell me what matters most, and I'll prepare clear options tailored to your goals.
              </p>
            </Reveal>
            
            {/* Trust Badges */}
            <Reveal delay={0.16}>
              <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>No obligation</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Personal follow-up within 24 hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Transparent, expert guidance</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Enhanced Stepper */}
          <div className="mb-8">
            <div className="text-center mb-4">
              <div className="text-lg font-medium text-blue-600">
                Step {step + 1} of 4 - Almost there!
              </div>
            </div>
            <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 text-sm">
              {progress.map((p, i) => {
                const active = step === i;
                const done = step > i;
                return (
                  <li
                    key={p.id}
                    className={
                      'rounded-lg border px-3 py-2 text-center transition-all duration-200 ' +
                      (active
                        ? 'border-sky-500 bg-sky-50 text-sky-700 shadow-md'
                        : done
                        ? 'border-teal-600 bg-teal-50 text-teal-700'
                        : 'border-slate-200 text-slate-600')
                    }
                  >
                    <div className="font-medium">{done ? '✓' : active ? '●' : '○'}</div>
                    <div className="text-xs mt-1 leading-tight">{p.label}</div>
                  </li>
                );
              })}
            </ol>
          </div>

          {/* Steps */}
          {step === 0 && (
            <Reveal>
              <BasicsStep
                data={data.basics}
                onChange={(b) => setData((d) => ({ ...d, basics: b }))}
                errors={errors}
                onNext={next}
              />
            </Reveal>
          )}

          {step === 1 && (
            <Reveal>
              <HouseholdStep
                data={data.household}
                onChange={(h) => setData((d) => ({ ...d, household: h }))}
                errors={errors}
                onPrev={prev}
                onNext={next}
              />
            </Reveal>
          )}

          {step === 2 && (
            <Reveal>
              <ContactStep
                data={data.contact}
                onChange={(c) => setData((d) => ({ ...d, contact: c }))}
                errors={errors}
                onPrev={prev}
                onNext={next}
              />
            </Reveal>
          )}

          {step === 3 && (
            <Reveal>
              <ReviewStep data={data} onPrev={prev} onSubmit={submit}>
                {captchaEnabled && HCAPTCHA_SITE_KEY && (
                  <div className="flex flex-col items-center gap-2">
                    <HCaptcha
                      key={HCAPTCHA_SITE_KEY}
                      siteKey={HCAPTCHA_SITE_KEY}
                      onVerify={(token) => {
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
              </ReviewStep>
            </Reveal>
          )}
        </div>
      </section>
    </main>
  );
}

function BasicsStep({
  data,
  onChange,
  errors,
  onNext,
}: {
  data: QuoteBasics;
  onChange: (b: QuoteBasics) => void;
  errors: Record<string, string>;
  onNext: () => void;
}) {
  return (
    <form
      className="grid gap-6 max-w-2xl"
      onSubmit={(e) => {
        e.preventDefault();
        onNext();
      }}
    >
      <div>
        <label className="block text-sm font-medium text-slate-700">ZIP Code</label>
        <input
          value={data.zip}
          onChange={(e) => onChange({ ...data, zip: e.target.value })}
          className="mt-1 block w-full rounded-md border-slate-300 focus:border-sky-500 focus:ring-sky-500"
          placeholder="e.g., 33101"
          inputMode="numeric"
          maxLength={5}
          required
        />
        <FieldError msg={errors.zip} />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700">State</label>
        <select
          value={data.state}
          onChange={(e) => onChange({ ...data, state: e.target.value as QuoteBasics['state'] })}
          className="mt-1 block w-full rounded-md border-slate-300 focus:border-sky-500 focus:ring-sky-500"
          required
        >
          <option value="FL">Florida</option>
          <option value="MI">Michigan</option>
          <option value="NC">North Carolina</option>
          <option value="OTHER">Other</option>
        </select>
        <FieldError msg={errors.state} />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700">Coverage Type</label>
        <div className="mt-2 grid grid-cols-3 gap-2">
          {(['Health', 'Life', 'Both'] as QuoteBasics['coverageType'][]).map((opt) => (
            <button
              type="button"
              key={opt}
              onClick={() => onChange({ ...data, coverageType: opt })}
              className={
                'rounded-lg border px-3 py-2 text-sm ' +
                (data.coverageType === opt
                  ? 'border-sky-600 bg-sky-50 text-sky-700'
                  : 'border-slate-200 text-slate-700 hover:bg-slate-50')
              }
            >
              {opt}
            </button>
          ))}
        </div>
        <FieldError msg={errors.coverageType} />
      </div>

      <p className="text-sm text-slate-500 text-center">
        Your privacy is important to us. The information you provide helps us prepare for our consultation. We will not share your data or subject you to high-pressure sales calls.
      </p>

      <div className="flex items-center gap-3">
        <button type="submit" className="btn btn-primary">Continue</button>
        <a href="/" className="btn btn-ghost">Cancel</a>
      </div>
    </form>
  );
}

function HouseholdStep({
  data,
  onChange,
  errors,
  onPrev,
  onNext,
}: {
  data: QuoteHousehold;
  onChange: (h: QuoteHousehold) => void;
  errors: Record<string, string>;
  onPrev: () => void;
  onNext: () => void;
}) {
  const [ageInput, setAgeInput] = useState('');

  function addAge() {
    const n = Number(ageInput);
    if (!isNaN(n) && n > 0) {
      onChange({ ...data, ages: [...data.ages, n] });
      setAgeInput('');
    }
  }

  function removeAge(i: number) {
    const copy = [...data.ages];
    copy.splice(i, 1);
    onChange({ ...data, ages: copy });
  }

  return (
    <form
      className="grid gap-6 max-w-2xl"
      onSubmit={(e) => {
        e.preventDefault();
        onNext();
      }}
    >
      <div>
        <label className="block text-sm font-medium text-slate-700">Ages</label>
        <div className="mt-2 flex gap-2">
          <input
            value={ageInput}
            onChange={(e) => setAgeInput(e.target.value)}
            className="block flex-1 rounded-md border-slate-300 focus:border-sky-500 focus:ring-sky-500"
            placeholder="e.g., 38"
            inputMode="numeric"
          />
          <button type="button" onClick={addAge} className="btn btn-accent">Add</button>
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {data.ages.map((a, i) => (
            <span key={i} className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-sm">
              {a}
              <button type="button" className="text-slate-500 hover:text-red-600" onClick={() => removeAge(i)} aria-label="Remove age">
                &times;
              </button>
            </span>
          ))}
        </div>
        <FieldError msg={errors.ages} />
      </div>

      <div className="flex items-center gap-2">
        <input
          id="tobacco"
          type="checkbox"
          checked={data.tobacco}
          onChange={(e) => onChange({ ...data, tobacco: e.target.checked })}
          className="h-4 w-4 rounded border-slate-300 text-sky-600 focus:ring-sky-500"
        />
        <label htmlFor="tobacco" className="text-sm text-slate-700">Tobacco user</label>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700">Dependents</label>
        <input
          value={data.dependents}
          onChange={(e) => onChange({ ...data, dependents: Math.max(0, Number(e.target.value) || 0) })}
          className="mt-1 block w-full rounded-md border-slate-300 focus:border-sky-500 focus:ring-sky-500"
          inputMode="numeric"
        />
        <FieldError msg={errors.dependents} />
      </div>

      <p className="text-sm text-slate-500 text-center">
        Your privacy is important to us. The information you provide helps us prepare for our consultation. We will not share your data or subject you to high-pressure sales calls.
      </p>

      <div className="flex items-center gap-3">
        <button type="button" onClick={onPrev} className="btn btn-ghost">Back</button>
        <button type="submit" className="btn btn-primary">Continue</button>
      </div>
    </form>
  );
}

function ContactStep({
  data,
  onChange,
  errors,
  onPrev,
  onNext,
}: {
  data: QuoteContact;
  onChange: (c: QuoteContact) => void;
  errors: Record<string, string>;
  onPrev: () => void;
  onNext: () => void;
}) {
  return (
    <form
      className="grid gap-6 max-w-2xl"
      onSubmit={(e) => {
        e.preventDefault();
        onNext();
      }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-slate-700">First name</label>
          <input
            value={data.firstName}
            onChange={(e) => onChange({ ...data, firstName: e.target.value })}
            className="mt-1 block w-full rounded-md border-slate-300 focus:border-sky-500 focus:ring-sky-500"
            required
          />
          <FieldError msg={errors.firstName} />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700">Last name</label>
          <input
            value={data.lastName}
            onChange={(e) => onChange({ ...data, lastName: e.target.value })}
            className="mt-1 block w-full rounded-md border-slate-300 focus:border-sky-500 focus:ring-sky-500"
            required
          />
          <FieldError msg={errors.lastName} />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-slate-700">Email</label>
          <input
            type="email"
            value={data.email}
            onChange={(e) => onChange({ ...data, email: e.target.value })}
            className="mt-1 block w-full rounded-md border-slate-300 focus:border-sky-500 focus:ring-sky-500"
            placeholder="you@example.com"
            required
          />
          <FieldError msg={errors.email} />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700">Phone</label>
          <input
            value={data.phone}
            onChange={(e) => onChange({ ...data, phone: e.target.value })}
            className="mt-1 block w-full rounded-md border-slate-300 focus:border-sky-500 focus:ring-sky-500"
            inputMode="tel"
            placeholder="(555) 555-5555"
            required
          />
          <FieldError msg={errors.phone} />
        </div>
      </div>

      {/* Security badges for contact step */}
      <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
        <div className="flex flex-wrap justify-center gap-4 text-xs text-blue-700 mb-3">
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
              <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span>SSL encrypted</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
              <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span>HIPAA compliant</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
              <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span>No spam guarantee</span>
          </div>
        </div>
      </div>

      <div className="flex items-start gap-2">
        <input
          id="consent"
          type="checkbox"
          checked={data.consent}
          onChange={(e) => onChange({ ...data, consent: e.target.checked })}
          className="mt-1 h-4 w-4 rounded border-slate-300 text-sky-600 focus:ring-sky-500"
        />
        <label htmlFor="consent" className="text-sm text-slate-700 leading-relaxed">
          By submitting, you agree to receive personalized insurance guidance from Bradford Informed Guidance. 
          I respect your privacy and will only contact you about coverage options that fit your needs. 
          Standard message rates apply.
        </label>
      </div>
      <FieldError msg={errors.consent} />

      <p className="text-sm text-slate-500 text-center">
        Your privacy is important to us. The information you provide helps us prepare for our consultation. We will not share your data or subject you to high-pressure sales calls.
      </p>

      <div className="flex items-center gap-3">
        <button type="button" onClick={onPrev} className="btn btn-ghost">Back</button>
        <button type="submit" className="btn btn-primary">Continue</button>
      </div>
    </form>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-4 py-2">
      <div className="text-sm text-slate-500">{label}</div>
      <div className="text-sm font-medium text-slate-800">{value}</div>
    </div>
  );
}

function ReviewStep({
  data,
  onPrev,
  onSubmit,
  children,
}: {
  data: QuoteData;
  onPrev: () => void;
  onSubmit: () => void;
  children?: ReactNode;
}) {
  const { basics, household, contact } = data;
  return (
    <div className="grid gap-6 max-w-2xl">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-semibold text-slate-800 mb-2">Review Your Information</h2>
        <p className="text-slate-600">
          I'll personally review these details and contact you within 24 hours with your customized options
        </p>
      </div>
      
      <div className="rounded-lg border border-slate-200 p-6 bg-white shadow-sm">
        <h2 className="font-semibold text-lg mb-3">Review Details</h2>
        <div className="divide-y divide-slate-200">
          <Row label="ZIP" value={basics.zip} />
          <Row label="State" value={basics.state} />
          <Row label="Coverage" value={basics.coverageType} />
          <Row label="Ages" value={household.ages.join(', ') || '—'} />
          <Row label="Tobacco" value={household.tobacco ? 'Yes' : 'No'} />
          <Row label="Dependents" value={String(household.dependents)} />
          <Row label="First Name" value={contact.firstName} />
          <Row label="Last Name" value={contact.lastName} />
          <Row label="Email" value={contact.email} />
          <Row label="Phone" value={contact.phone} />
        </div>
      </div>

      <p className="text-sm text-slate-500 text-center">
        Your privacy is important to us. The information you provide helps us prepare for our consultation. We will not share your data or subject you to high-pressure sales calls.
      </p>

      {children}

      <div className="flex items-center gap-3">
        <button type="button" onClick={onPrev} className="flex-1 px-6 py-3 border-2 border-slate-300 rounded-xl text-slate-700 hover:bg-slate-50 font-medium transition-all duration-200">Back</button>
        <button type="button" onClick={onSubmit} className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:from-blue-700 hover:to-indigo-700 font-semibold shadow-lg hover:shadow-xl transition-all duration-200">
          Request Guidance
        </button>
      </div>
    </div>
  );
}

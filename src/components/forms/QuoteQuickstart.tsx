import { useEffect, useState } from "react";
import { BRAND } from "../../lib/brand";
import HCaptcha from "../security/HCaptcha";

const LEAD_SOURCE = 'Website — Quote Quickstart';

const sanitizePhone = (value: string) => value.replace(/\D/g, '');

const parseErrorResponse = async (response: Response) => {
  const contentType = response.headers.get('content-type') ?? '';
  try {
    if (contentType.includes('application/json')) {
      const data = (await response.json()) as Record<string, unknown>;
      const msg = [data.error, data.message].find(
        (v): v is string => typeof v === 'string' && v.trim().length > 0,
      );
      return msg || response.statusText || 'Please try again.';
    }
    const text = (await response.text()).trim();
    return text || response.statusText || 'Please try again.';
  } catch {
    return response.statusText || 'Please try again.';
  }
};

export default function QuoteQuickstart() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [zip, setZip] = useState('');
  const [ages, setAges] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const [siteKey, setSiteKey] = useState('');
  const [captchaLoaded, setCaptchaLoaded] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [captchaError, setCaptchaError] = useState<string | null>(null);
  const [captchaRefresh, setCaptchaRefresh] = useState(0);
  const captchaEnabled = Boolean(siteKey);

  useEffect(() => {
    let cancelled = false;
    fetch('/api/hcaptcha-sitekey')
      .then(r => r.json())
      .then((data: { siteKey: string | null }) => {
        if (!cancelled) setSiteKey(data.siteKey ?? '');
      })
      .catch(() => { if (!cancelled) setSiteKey(''); })
      .finally(() => { if (!cancelled) setCaptchaLoaded(true); });
    return () => { cancelled = true; };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (captchaEnabled && captchaLoaded && !captchaToken) {
      setCaptchaError('Please verify you are not a robot.');
      return;
    }
    setCaptchaError(null);

    const sanitizedPhone = sanitizePhone(phone);
    if (sanitizedPhone.length < 10) {
      setError('Please enter a valid 10-digit phone number.');
      return;
    }

    setIsSubmitting(true);

    const hasWindow = typeof window !== 'undefined';
    const landingUrl = hasWindow ? window.location.href : '';
    const utm = hasWindow ? Object.fromEntries(new URLSearchParams(window.location.search).entries()) : {};

    const notes = [
      `Lead Source: ${LEAD_SOURCE}`,
      zip ? `ZIP: ${zip}` : '',
      ages ? `Ages: ${ages}` : '',
      landingUrl ? `Landing URL: ${landingUrl}` : '',
      ...Object.entries(utm).filter(([, v]) => v).map(([k, v]) => `UTM ${k}: ${v}`),
    ].filter(Boolean).join('\n');

    const payload: Record<string, unknown> = {
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      phone: sanitizedPhone,
      email: email.trim(),
      leadSource: LEAD_SOURCE,
      notes,
      custom: {
        ...(zip ? { zip } : {}),
        ...(ages ? { ages } : {}),
        ...(landingUrl ? { landing_url: landingUrl } : {}),
        ...Object.fromEntries(
          Object.entries(utm).filter(([, v]) => v).map(([k, v]) => [`utm_${k.replace(/^utm_/, '')}`, v])
        ),
      },
      metadata: hasWindow ? { landingUrl, submittedAt: new Date().toISOString(), utm, form: 'QuoteQuickstart' } : undefined,
    };

    if (captchaEnabled && captchaToken) {
      payload.hcaptchaToken = captchaToken;
    }

    try {
      const response = await fetch('/api/ringy-proxy', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        window.location.href = '/thank-you';
      } else {
        const detail = await parseErrorResponse(response);
        setError(`Submission failed: ${detail}`);
        if (captchaEnabled) {
          setCaptchaToken(null);
          setCaptchaRefresh(v => v + 1);
        }
      }
    } catch {
      setError('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="glass p-4 md:p-5 flex flex-col gap-3 w-full max-w-md border-white/40" aria-describedby="quickstart-help">
      <div className="text-sm text-ink-1/80" id="quickstart-help">Avg first options in 45-90 mins - {BRAND.hours}</div>

      <div className="grid grid-cols-2 gap-3">
        <label className="flex flex-col gap-1">
          <span className="text-sm font-medium">First Name</span>
          <input value={firstName} onChange={e => setFirstName(e.target.value)} required placeholder="John" className="rounded-xl border border-slate-200 px-3 py-2 outline-none focus:ring-2 focus:ring-brand-sky-500" />
        </label>
        <label className="flex flex-col gap-1">
          <span className="text-sm font-medium">Last Name</span>
          <input value={lastName} onChange={e => setLastName(e.target.value)} required placeholder="Doe" className="rounded-xl border border-slate-200 px-3 py-2 outline-none focus:ring-2 focus:ring-brand-sky-500" />
        </label>
      </div>

      <label className="flex flex-col gap-1">
        <span className="text-sm font-medium">Phone</span>
        <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} required placeholder="(555) 555-5555" className="rounded-xl border border-slate-200 px-3 py-2 outline-none focus:ring-2 focus:ring-brand-sky-500" />
      </label>

      <label className="flex flex-col gap-1">
        <span className="text-sm font-medium">Email</span>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} required className="rounded-xl border border-slate-200 px-3 py-2 outline-none focus:ring-2 focus:ring-brand-sky-500" />
      </label>

      <label className="flex flex-col gap-1">
        <span className="text-sm font-medium">ZIP Code</span>
        <input inputMode="numeric" pattern="[0-9]*" value={zip} onChange={e => setZip(e.target.value)} required className="rounded-xl border border-slate-200 px-3 py-2 outline-none focus:ring-2 focus:ring-brand-sky-500" />
      </label>

      <label className="flex flex-col gap-1">
        <span className="text-sm font-medium">Ages (comma-separated)</span>
        <input value={ages} onChange={e => setAges(e.target.value)} placeholder="39, 37" required className="rounded-xl border border-slate-200 px-3 py-2 outline-none focus:ring-2 focus:ring-brand-sky-500" />
      </label>

      {captchaEnabled && captchaLoaded && (
        <div className="flex flex-col items-center gap-1">
          <HCaptcha
            key={`quickstart-hcaptcha-${captchaRefresh}`}
            siteKey={siteKey}
            onVerify={(token: string) => { setCaptchaToken(token); setCaptchaError(null); }}
            onExpire={() => setCaptchaToken(null)}
            onError={() => setCaptchaError('Verification failed. Please refresh.')}
          />
          {captchaError && <p className="text-xs text-red-500 text-center">{captchaError}</p>}
        </div>
      )}

      {error && (
        <p className="text-xs text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2 text-center">{error}</p>
      )}

      <p className="text-xs text-slate-500 text-center">Your privacy is important to us. The information you provide helps us prepare for our consultation. We will not share your data or subject you to high-pressure sales calls.</p>
      <button type="submit" disabled={isSubmitting} data-gtm={`${BRAND.gtm.quote}_quickstart`} className="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed">
        {isSubmitting ? 'Submitting…' : 'Start My Consultation'}
      </button>
      <p className="text-xs text-ink-1/70">By submitting, you agree we may contact you by call, text, or email. No spam. Opt out anytime.</p>
    </form>
  );
}

import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import HCaptcha from '../security/HCaptcha';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { cn } from '../../lib/utils';

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  hcaptchaToken: string | null;
};

const initialFormState: FormState = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  hcaptchaToken: null,
};

type RingyLeadCaptureFormProps = {
  className?: string;
};

export default function RingyLeadCaptureForm({ className }: RingyLeadCaptureFormProps) {
  const siteKey = import.meta.env.VITE_HCAPTCHA_SITEKEY as string | undefined;

  const [formData, setFormData] = useState<FormState>(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState(false);
  const [captchaRefresh, setCaptchaRefresh] = useState(0);
  // Derive verification state from the token the backend requires so UI and validation stay aligned.
  const isCaptchaVerified = Boolean(formData.hcaptchaToken);

  if (!siteKey) {
    return (
      <div className="rounded-lg border border-orange-200 bg-orange-50 px-4 py-6 text-sm text-orange-900">
        Lead form is currently unavailable. Please try again later.
      </div>
    );
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setSuccess(false);
    setError('');
  };

  // Root cause: UI relied on a boolean while validation checked `hcaptchaToken`, so the states diverged.
  const handleCaptchaVerify = (token: string) => {
    // Persist the token on the same formData object so the validation guard and payload share a source of truth.
    setFormData(prev => ({ ...prev, hcaptchaToken: token }));
    setError('');
  };

  // Reset verification when the widget expires or encounters an error.
  const handleCaptchaExpireOrError = () => {
    setFormData(prev => ({ ...prev, hcaptchaToken: null }));
    setError('Verification failed. Please refresh the widget and try again.');
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSuccess(false);
    setError('');

    const trimmedFirstName = formData.firstName.trim();
    const trimmedLastName = formData.lastName.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedPhone = formData.phone.trim();

    // Basic guard to prevent empty required fields from slipping through before contacting the API.
    if (!trimmedFirstName || !trimmedLastName || !trimmedEmail || !trimmedPhone) {
      setError('Please complete all required fields before submitting.');
      return;
    }

    // Validation logic lives here and expects the exact field name `hcaptchaToken` that the API receives.
    if (!formData.hcaptchaToken) {
      setError('Please verify you are not a robot.');
      return;
    }

    if (import.meta.env.DEV) {
      console.log('Form submit - hCaptchaToken:', formData.hcaptchaToken);
      console.log('Form submit - isCaptchaVerified:', isCaptchaVerified);
      console.log('Form submit - formData:', formData);
      console.log('Form submit - formData.hcaptchaToken:', formData.hcaptchaToken);
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/ringy-proxy', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          firstName: trimmedFirstName,
          lastName: trimmedLastName,
          email: trimmedEmail,
          phone: trimmedPhone,
          // Pass the token using the same key the API expects so the verification succeeds.
          hcaptchaToken: formData.hcaptchaToken,
        }),
      });

      if (!response.ok) {
        throw new Error('Form submission failed.');
      }

      setSuccess(true);
      setFormData(initialFormState);
      setCaptchaRefresh(value => value + 1);
    } catch (submitError) {
      console.error('Ringy lead capture submission error:', submitError);
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        'rounded-xl border border-slate-200 bg-white p-6 shadow-sm ring-1 ring-black/5',
        className,
      )}
    >
      <div>
        <div className="grid gap-4 sm:grid-cols-2">
          <Input
            name="firstName"
            autoComplete="given-name"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <Input
            name="lastName"
            autoComplete="family-name"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          <Input
            type="email"
            name="email"
            autoComplete="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="sm:col-span-2"
          />
        </div>
        <Input
          type="tel"
          name="phone"
          autoComplete="tel"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
          className="mt-4"
        />

        <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50/70 p-4 text-xs text-slate-600">
          Your privacy is important to us. The information you provide helps us prepare for our
          consultation. We will not share your data or subject you to high-pressure sales calls.
        </div>

        {/* Hidden input keeps the token attached when a library serializes the form element. */}
        <input type="hidden" name="hcaptchaToken" value={formData.hcaptchaToken ?? ''} />

        <div className="mt-4">
          {isCaptchaVerified ? (
            <div className="flex items-center justify-center gap-2 rounded-lg bg-green-50 p-4 text-green-700">
              <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
              <span className="font-medium">Verification Successful</span>
            </div>
          ) : (
            <HCaptcha
              key={`ringy-hcaptcha-${captchaRefresh}`}
              className="flex justify-center"
              siteKey={siteKey}
              onVerify={handleCaptchaVerify}
              onExpire={handleCaptchaExpireOrError}
              onError={handleCaptchaExpireOrError}
            />
          )}
        </div>

        <Button type="submit" disabled={isSubmitting} className="mt-4 w-full">
          {isSubmitting ? 'Submitting…' : 'Get My Free Quote'}
        </Button>

        {(Boolean(error) || success) && (
          <div
            className={cn(
              'mt-4 rounded-lg px-4 py-3 text-sm',
              error ? 'bg-red-50 text-red-700' : 'bg-emerald-50 text-emerald-700',
            )}
            role="alert"
            aria-live="polite"
          >
            {error || 'Thank you for your submission!'}
          </div>
        )}
      </div>
    </form>
  );
}

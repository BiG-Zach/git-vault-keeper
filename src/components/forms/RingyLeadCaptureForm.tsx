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
};

const initialFormState: FormState = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
};

type RingyLeadCaptureFormProps = {
  className?: string;
};

export default function RingyLeadCaptureForm({ className }: RingyLeadCaptureFormProps) {
  const siteKey = import.meta.env.VITE_HCAPTCHA_SITEKEY as string | undefined;

  const [formData, setFormData] = useState<FormState>(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [hCaptchaToken, setHCaptchaToken] = useState<string | null>(null);
  // Track whether the active hCaptcha challenge has been solved so we can surface visual feedback.
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);
  const [captchaRefresh, setCaptchaRefresh] = useState(0);

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
    setError(null);
  };

  // When hCaptcha provides a token, persist it and mark the widget as verified.
  const handleCaptchaVerify = (token: string) => {
    setHCaptchaToken(token);
    setIsCaptchaVerified(true);
    setError(null);
  };

  // Reset verification when the widget expires or encounters an error.
  const handleCaptchaExpireOrError = () => {
    setHCaptchaToken(null);
    setIsCaptchaVerified(false);
    setError('Verification failed. Please refresh the widget and try again.');
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSuccess(false);
    setError(null);

    if (!isCaptchaVerified || !hCaptchaToken) {
      setError('Please complete the CAPTCHA before submitting.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/ringy-proxy', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          captchaToken: hCaptchaToken,
        }),
      });

      if (!response.ok) {
        throw new Error('Form submission failed.');
      }

      setSuccess(true);
      setFormData(initialFormState);
    } catch (submitError) {
      console.error('Ringy lead capture submission error:', submitError);
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
      setHCaptchaToken(null);
      setIsCaptchaVerified(false);
      setCaptchaRefresh(value => value + 1);
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

        {(error || success) && (
          <div
            className={cn(
              'mt-4 rounded-lg px-4 py-3 text-sm',
              error ? 'bg-red-50 text-red-700' : 'bg-emerald-50 text-emerald-700',
            )}
            role="alert"
            aria-live="polite"
          >
            {error ?? 'Thank you for your submission!'}
          </div>
        )}
      </div>
    </form>
  );
}

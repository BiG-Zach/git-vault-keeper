import { FormEvent, useMemo, useState } from 'react';
import { submitLead } from '../../utils/submitLead';
import { validateEmail, validatePhone } from '../../utils/validation';

type CoverageOption = {
  label: string;
  value: string;
};

type FormState = {
  name: string;
  phone: string;
  email: string;
  coverageType: string;
};

type FormErrors = Partial<Record<keyof FormState, string>> & {
  general?: string;
};

const COVERAGE_OPTIONS: CoverageOption[] = [
  { label: 'Select desired coverage', value: '' },
  { label: 'Health Insurance', value: 'Health Insurance' },
  { label: 'Life Insurance', value: 'Life Insurance' },
  { label: 'Health & Life Insurance', value: 'Health & Life Insurance' },
  { label: 'Medicare & Supplemental', value: 'Medicare & Supplemental' },
];

function splitName(fullName: string) {
  const [first = '', ...rest] = fullName.trim().split(/\s+/);
  const last = rest.join(' ');
  return {
    firstName: first,
    lastName: last || 'Customer',
  };
}

export default function RingyLeadCaptureForm() {
  const [formState, setFormState] = useState<FormState>({
    name: '',
    phone: '',
    email: '',
    coverageType: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const helperText = useMemo(() => {
    if (errors.general) return errors.general;
    if (errors.name) return errors.name;
    if (errors.email) return errors.email;
    if (errors.phone) return errors.phone;
    if (errors.coverageType) return errors.coverageType;
    return '';
  }, [errors]);

  const handleChange = (field: keyof FormState) => (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const value = field === 'phone' ? event.target.value.replace(/[^\d+()-\s]/g, '') : event.target.value;
    setFormState((prev) => ({
      ...prev,
      [field]: value,
    }));
    setErrors((prev) => ({ ...prev, [field]: undefined, general: undefined }));
  };

  const validateForm = (state: FormState): FormErrors => {
    const newErrors: FormErrors = {};

    if (!state.name.trim()) {
      newErrors.name = 'Your name is required.';
    }

    if (!state.email.trim() || !validateEmail(state.email)) {
      newErrors.email = 'Enter a valid email address.';
    }

    if (!state.phone.trim() || !validatePhone(state.phone)) {
      newErrors.phone = 'Enter a valid 10-digit phone number.';
    }

    if (!state.coverageType) {
      newErrors.coverageType = 'Select the coverage you need.';
    }

    return newErrors;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrors({});

    const validationErrors = validateForm(formState);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const { firstName, lastName } = splitName(formState.name);

    setIsSubmitting(true);

    try {
      await submitLead({
        firstName,
        lastName,
        zipCode: '00000',
        email: formState.email.trim(),
        phone: formState.phone,
        preferredContact: 'phone',
        consentChecked: true,
        coverageType: formState.coverageType,
      });

      setIsSubmitted(true);
      setFormState({ name: '', phone: '', email: '', coverageType: '' });
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : 'Something went wrong. Please try again or call (689) 325-6570.';
      setErrors({ general: message });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full rounded-2xl bg-white/95 p-5 shadow-xl ring-1 ring-white/40 backdrop-blur"
      noValidate
    >
      <div className="mb-4 text-center">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">Get matched with top-rated plans</h2>
        <p className="mt-1 text-sm font-medium text-emerald-600">Quotes in 15 minutes · Licensed in FL, MI, NC & expanding</p>
      </div>

      <div className="space-y-4">
        <div>
          <label htmlFor="ringy-name" className="mb-2 block text-sm font-semibold text-slate-700">
            Name
          </label>
          <input
            id="ringy-name"
            name="name"
            type="text"
            autoComplete="name"
            value={formState.name}
            onChange={handleChange('name')}
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-medium text-slate-900 shadow-sm transition focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
            placeholder="Your full name"
            required
          />
        </div>

        <div>
          <label htmlFor="ringy-phone" className="mb-2 block text-sm font-semibold text-slate-700">
            Phone
          </label>
          <input
            id="ringy-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={formState.phone}
            onChange={handleChange('phone')}
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-medium text-slate-900 shadow-sm transition focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
            placeholder="(555) 123-4567"
            required
          />
        </div>

        <div>
          <label htmlFor="ringy-email" className="mb-2 block text-sm font-semibold text-slate-700">
            Email
          </label>
          <input
            id="ringy-email"
            name="email"
            type="email"
            autoComplete="email"
            value={formState.email}
            onChange={handleChange('email')}
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-medium text-slate-900 shadow-sm transition focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
            placeholder="you@example.com"
            required
          />
        </div>

        <div>
          <label htmlFor="ringy-coverage" className="mb-2 block text-sm font-semibold text-slate-700">
            Desired Coverage
          </label>
          <select
            id="ringy-coverage"
            name="coverageType"
            value={formState.coverageType}
            onChange={handleChange('coverageType')}
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-medium text-slate-900 shadow-sm transition focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
            required
          >
            {COVERAGE_OPTIONS.map((option) => (
              <option key={option.value || 'placeholder'} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="w-full rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-emerald-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/70 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-75"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting…' : 'Get My Free Quote'}
        </button>

        <p className="text-center text-xs text-slate-500">
          By submitting, you consent to receive calls and texts from Bradford Informed Guidance. Message and data rates may apply.
        </p>

        <div className="min-h-[24px] text-center text-sm" aria-live="polite">
          {isSubmitted && !helperText && (
            <span className="font-semibold text-emerald-600">Thanks! We’ll follow up shortly with your custom options.</span>
          )}
          {!isSubmitted && helperText && <span className="text-rose-600">{helperText}</span>}
          {isSubmitted && helperText && <span className="text-rose-600">{helperText}</span>}
        </div>
      </div>
    </form>
  );
}

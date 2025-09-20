import React, { useState } from 'react';
import { submitLead, DEFAULT_CONSENT_TEXT, type PreferredContact } from '../utils/submitLead';
import { validateEmail, validatePhone, validateZip } from '../utils/validation';

const CONTACT_LABELS: Record<PreferredContact, string> = {
  text: 'Text',
  email: 'Email',
  phone: 'Call',
};

export default function HeroForm() {
  const [firstName, setFirst] = useState('');
  const [lastName, setLast] = useState('');
  const [zipCode, setZip] = useState('');
  const [ages, setAges] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [preferredContact, setPreferredContact] = useState<PreferredContact>('email');
  const [consent, setConsent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [ok, setOk] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');

    if (!firstName.trim() || !lastName.trim()) {
      setError('First and last name are required.');
      return;
    }

    if (!validateZip(zipCode)) {
      setError('Enter a valid 5-digit ZIP code.');
      return;
    }

    if (!validateEmail(email)) {
      setError('Enter a valid email address.');
      return;
    }

    if (!validatePhone(phone)) {
      setError('Enter a valid 10-digit phone number.');
      return;
    }

    if (!consent) {
      setError('Please agree to the consent notice to continue.');
      return;
    }

    setLoading(true);
    try {
      await submitLead({
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        zipCode: zipCode.trim(),
        ages: ages.trim(),
        email: email.trim(),
        phone,
        preferredContact,
        consentChecked: true,
        consentText: DEFAULT_CONSENT_TEXT,
      });
      setOk(true);
    } catch (err: any) {
      setError(err?.message || 'Something went wrong. Please call (689) 325-6570.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="max-w-md mx-auto bg-white/95 backdrop-blur-sm p-4 sm:p-6 rounded-2xl shadow-2xl border border-white/20 relative z-10"
      style={{ position: 'relative', zIndex: 2, marginTop: '12px' }}
    >
      <div className="text-center mb-4 sm:mb-6">
        <h2
          className="font-bold text-gray-900 leading-tight"
          style={{ fontSize: 'clamp(20px, 4vw, 24px)', marginBottom: '4px' }}
        >
          Premium Health & Life Coverage
        </h2>
        <p
          className="text-emerald-600 font-semibold"
          style={{ fontSize: 'clamp(16px, 3.5vw, 18px)' }}
        >
          Clear. Fast. Year-Round.
        </p>
        <div className="text-sm text-gray-600 mt-2">Licensed FL - MI - NC - Expanding Nationwide</div>
      </div>
      <form onSubmit={onSubmit} id="mobileQuoteForm" className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">First name</label>
            <input
              value={firstName}
              onChange={(event) => setFirst(event.target.value)}
              className="w-full p-4 border-2 rounded-xl focus:border-emerald-500 focus:outline-none"
              style={{ fontSize: '16px', minHeight: '44px' }}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Last name</label>
            <input
              value={lastName}
              onChange={(event) => setLast(event.target.value)}
              className="w-full p-4 border-2 rounded-xl focus:border-emerald-500 focus:outline-none"
              style={{ fontSize: '16px', minHeight: '44px' }}
              required
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">ZIP Code</label>
          <input
            value={zipCode}
            onChange={(event) => setZip(event.target.value.replace(/\D/g, '').slice(0, 5))}
            inputMode="numeric"
            className="w-full p-4 border-2 rounded-xl focus:border-emerald-500 focus:outline-none"
            style={{ fontSize: '16px', minHeight: '44px' }}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Ages (comma-separated)</label>
          <input
            value={ages}
            onChange={(event) => setAges(event.target.value)}
            className="w-full p-4 border-2 rounded-xl focus:border-emerald-500 focus:outline-none"
            style={{ fontSize: '16px', minHeight: '44px' }}
            placeholder="39, 37, 12"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="w-full p-4 border-2 rounded-xl focus:border-emerald-500 focus:outline-none"
            style={{ fontSize: '16px', minHeight: '44px' }}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
          <input
            type="tel"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            className="w-full p-4 border-2 rounded-xl focus:border-emerald-500 focus:outline-none"
            style={{ fontSize: '16px', minHeight: '44px' }}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Preferred Contact Method</label>
          <div className="grid grid-cols-3 gap-2">
            {(Object.keys(CONTACT_LABELS) as PreferredContact[]).map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setPreferredContact(option)}
                className={`p-3 border-2 rounded-xl text-sm font-medium transition-colors ${
                  preferredContact === option
                    ? 'border-emerald-500 bg-emerald-50 text-emerald-700'
                    : 'border-gray-300 hover:border-gray-400'
                }`}
              >
                {CONTACT_LABELS[option]}
              </button>
            ))}
          </div>
        </div>
        <div className="flex items-start space-x-3">
          <input
            id="consent"
            type="checkbox"
            checked={consent}
            onChange={(event) => setConsent(event.target.checked)}
            className="mt-1 h-5 w-5 flex-shrink-0"
            style={{ minWidth: '20px', minHeight: '20px' }}
          />
          <label htmlFor="consent" className="text-sm text-gray-600 leading-relaxed">
            {DEFAULT_CONSENT_TEXT}
          </label>
        </div>
        {error && <div className="text-red-600 text-sm bg-red-50 p-3 rounded-lg">{error}</div>}
        {ok ? (
          <div className="text-emerald-600 font-semibold bg-emerald-50 p-4 rounded-lg text-center">
            Thanks! We'll send your options within 45-90 minutes.
          </div>
        ) : (
          <button
            disabled={loading}
            type="submit"
            className="w-full bg-emerald-600 text-white py-4 rounded-xl font-bold hover:bg-emerald-700 disabled:opacity-50 transition-colors"
            style={{ fontSize: '16px', minHeight: '48px' }}
          >
            {loading ? 'Processing...' : 'Get My Custom Quote'}
          </button>
        )}
        <a
          href="tel:+16893256570"
          className="block w-full bg-gray-800 text-white mt-3 py-4 rounded-xl text-center font-bold hover:bg-gray-900 transition-colors"
          style={{ fontSize: '16px', minHeight: '48px', textDecoration: 'none' }}
        >
          Call Now - (689) 325-6570
        </a>
        <div className="text-xs text-gray-500 mt-3 text-center">First options in 30-45 minutes - Mon-Sun 8AM-8PM EST</div>
      </form>
    </div>
  );
}

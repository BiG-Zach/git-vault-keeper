import { normalizePhone, type QuoteBasics, type QuoteContact, type QuoteHousehold } from './validation';

export type QuoteData = {
  basics: QuoteBasics;
  household: QuoteHousehold;
  contact: QuoteContact;
};

export interface SubmitResult {
  ok: boolean;
}

export async function submitLead(data: QuoteData): Promise<SubmitResult> {
  const consentText = 'By submitting, you agree Bradford Informed Guidance may call and text you at the number provided (including via autodialer). Consent is not a condition of purchase. Message/data rates may apply.';

  const agesStr = Array.isArray(data.household.ages) && data.household.ages.length
    ? data.household.ages.join(',')
    : '';

  const body = {
    firstName: data.contact.firstName,
    lastName: data.contact.lastName,
    zipCode: data.basics.zip,
    ages: agesStr,
    email: data.contact.email,
    phone: normalizePhone(data.contact.phone),
    preferredContact: 'email' as 'email',
    consentChecked: !!data.contact.consent,
    consentText,
    landingUrl: typeof window !== 'undefined' ? window.location.href : undefined,
    utm: typeof window !== 'undefined' ? Object.fromEntries(new URLSearchParams(window.location.search)) : undefined,
  };

  const resp = await fetch('/api/lead', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  if (!resp.ok) {
    const j = await resp.text().catch(() => '');
    throw new Error(j || 'Submission failed');
  }

  return { ok: true };
}

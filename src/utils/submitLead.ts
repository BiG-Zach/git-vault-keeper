import { normalizePhone, type QuoteBasics, type QuoteContact, type QuoteHousehold } from './validation';

export type QuoteData = {
  basics: QuoteBasics;
  household: QuoteHousehold;
  contact: QuoteContact;
};

export type PreferredContact = 'text' | 'email' | 'phone';

export interface LeadSubmissionInput {
  firstName: string;
  lastName: string;
  zipCode: string;
  ages?: string | number[];
  email: string;
  phone: string;
  preferredContact?: PreferredContact;
  consentChecked: boolean;
  consentText?: string;
  landingUrl?: string;
  utm?: Record<string, string>;
  coverageType?: string;
}

export interface SubmitResult {
  ok: boolean;
  vendorUsed?: string;
  vendorChoice?: string;
  vendorResponse?: unknown;
}

export const DEFAULT_CONSENT_TEXT = 'By submitting, you agree Bradford Informed Guidance may call and text you at the number provided (including via autodialer). Consent is not a condition of purchase. Message/data rates may apply.';

export function quoteDataToLeadInput(data: QuoteData): LeadSubmissionInput {
  const agesArray = Array.isArray(data.household.ages) && data.household.ages.length
    ? data.household.ages
    : undefined;

  return {
    firstName: data.contact.firstName,
    lastName: data.contact.lastName,
    zipCode: data.basics.zip,
    ages: agesArray,
    email: data.contact.email,
    phone: data.contact.phone,
    preferredContact: 'email',
    consentChecked: !!data.contact.consent,
    consentText: DEFAULT_CONSENT_TEXT,
  };
}

function resolveLandingUrl(initial?: string) {
  if (initial) return initial;
  if (typeof window === 'undefined') return undefined;
  return window.location.href;
}

function resolveUtm(initial?: Record<string, string>) {
  if (initial && Object.keys(initial).length) return initial;
  if (typeof window === 'undefined') return undefined;
  const params = new URLSearchParams(window.location.search);
  if (!params.keys().next().value) return undefined;
  const entries: Record<string, string> = {};
  params.forEach((value, key) => {
    entries[key] = value;
  });
  return entries;
}

export async function submitLead(input: LeadSubmissionInput): Promise<SubmitResult> {
  if (!input.consentChecked) {
    throw new Error('Consent is required before submitting lead data.');
  }

  const consentText = input.consentText || DEFAULT_CONSENT_TEXT;
  const preferredContact: PreferredContact = input.preferredContact || 'email';
  const agesStr = Array.isArray(input.ages) ? input.ages.join(',') : (input.ages || '');
  const landingUrl = resolveLandingUrl(input.landingUrl);
  const utm = resolveUtm(input.utm);
  const phone = normalizePhone(input.phone);

  const body: Record<string, unknown> = {
    firstName: input.firstName,
    lastName: input.lastName,
    zipCode: input.zipCode,
    ages: agesStr,
    email: input.email,
    phone,
    preferredContact,
    consentChecked: true,
    consentText,
  };

  if (landingUrl) body.landingUrl = landingUrl;
  if (utm) body.utm = utm;
  if (input.coverageType) body.coverageType = input.coverageType;

  const resp = await fetch('/api/lead', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  if (!resp.ok) {
    const detail = await resp.text().catch(() => '');
    throw new Error(detail || 'Submission failed');
  }

  try {
    const json = await resp.json();
    if (json && typeof json === 'object') {
      return json as SubmitResult;
    }
  } catch {
    // no-op: fall back to default OK response
  }

  return { ok: true };
}

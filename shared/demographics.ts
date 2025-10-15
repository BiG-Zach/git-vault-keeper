export const COVERAGE_LABELS: Record<string, string> = {
  individual: 'Individual',
  couple: 'Couple',
  family: 'Family',
};

export const INSURANCE_STATUS_LABELS: Record<string, string> = {
  'no-coverage': 'No Coverage',
  'have-coverage': 'Currently Insured',
  'looking-to-switch': 'Looking to Switch',
};

export const CONTACT_METHOD_LABELS: Record<string, string> = {
  text: 'Text Message',
  phone: 'Phone Call',
  email: 'Email',
};

export const CONTACT_TIME_LABELS: Record<string, string> = {
  morning: 'Morning 9-12',
  afternoon: 'Afternoon 12-5',
  evening: 'Evening 5-8',
};

function mapLabel(value: string | undefined | null, dictionary: Record<string, string>): string {
  if (!value) return '';
  return dictionary[value] ?? value;
}

export function getCoverageLabel(value: string | undefined | null): string {
  return mapLabel(value, COVERAGE_LABELS);
}

export function getInsuranceStatusLabel(value: string | undefined | null): string {
  return mapLabel(value, INSURANCE_STATUS_LABELS);
}

export function getContactMethodLabel(value: string | undefined | null): string {
  return mapLabel(value, CONTACT_METHOD_LABELS);
}

export function getContactTimeLabel(value: string | undefined | null): string {
  return mapLabel(value, CONTACT_TIME_LABELS);
}

export function formatChildAges(childAges: unknown): string {
  if (!Array.isArray(childAges)) {
    return typeof childAges === 'string' ? childAges : '';
  }

  const filtered = childAges
    .map(age => (typeof age === 'string' ? age.trim() : ''))
    .filter(Boolean);

  return filtered.join(', ');
}

export function summarizeDemographics(params: {
  coverageLabel?: string;
  primaryAge?: string;
  spouseAge?: string;
  childrenCount?: string;
  childAges?: string;
  insuranceLabel?: string;
  preferredContactLabel?: string;
  contactTimeLabel?: string;
}): string {
  const segments = [
    params.coverageLabel ? `Coverage: ${params.coverageLabel}` : '',
    params.primaryAge ? `Primary Age: ${params.primaryAge}` : '',
    params.spouseAge ? `Spouse Age: ${params.spouseAge}` : '',
    params.childrenCount ? `Children: ${params.childrenCount}` : '',
    params.childAges ? `Child Ages: ${params.childAges}` : '',
    params.insuranceLabel ? `Insurance: ${params.insuranceLabel}` : '',
    params.preferredContactLabel ? `Preferred Contact: ${params.preferredContactLabel}` : '',
    params.contactTimeLabel ? `Best Time: ${params.contactTimeLabel}` : '',
  ].filter(Boolean);

  return segments.join(' | ');
}

export function compactStringRecord(record: Record<string, string | undefined | null>): Record<string, string> {
  return Object.fromEntries(
    Object.entries(record)
      .map(([key, value]) => [key, value?.toString().trim() ?? ''])
      .filter(([, value]) => Boolean(value)) as Array<[string, string]>
  );
}

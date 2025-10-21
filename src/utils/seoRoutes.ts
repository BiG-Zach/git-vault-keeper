import { stateMetadata } from './stateMetadata.ts';

export const CORE_ROUTES = [
  '/',
  '/about',
  '/contact',
  '/quote',
  '/carriers',
  '/our-process',
  '/resources',
  '/health-insurance',
  '/life-insurance',
  '/referral',
  '/checklist',
  '/privacy-policy',
  '/terms',
];

export const REDIRECT_ROUTES = ['/how-it-works'];

export const THANK_YOU_ROUTE = '/thank-you';

export const BLOG_ROUTES = [
  '/blog/term-vs-whole-life-insurance-2025',
  '/blog/open-enrollment-2026-guide',
  '/blog/florida-health-insurance-guide-2024',
  '/blog/life-insurance-young-adults-guide',
  '/blog/how-much-life-insurance-calculator',
  '/blog/life-insurance-pre-existing-conditions',
  '/blog/ppo-hmo-epo-plan-comparison',
  '/blog/health-insurance-deductibles-guide',
  '/blog/health-insurance-open-enrollment-checklist',
  '/blog/tampa-bay-insurance-broker-guide',
  '/blog/michigan-insurance-laws',
  '/blog/north-carolina-best-health-insurance',
  '/blog/florida-hurricane-insurance-protection',
  '/blog/aetna-cigna-united-comparison',
  '/blog/am-best-insurance-ratings-explained',
  '/blog/florida-small-business-health-insurance',
  '/blog/life-insurance-companies-financial-strength',
];

export const ROUTE_COMPONENT_MAP: Record<string, string> = {
  '/': 'src/pages/Home.tsx',
  '/about': 'src/pages/About.tsx',
  '/contact': 'src/pages/Contact.tsx',
  '/quote': 'src/pages/quote/Quote.tsx',
  '/carriers': 'src/pages/Carriers.tsx',
  '/our-process': 'src/pages/HowItWorks.tsx',
  '/resources': 'src/pages/Resources.tsx',
  '/health-insurance': 'src/pages/HealthInsurance.tsx',
  '/life-insurance': 'src/pages/LifeInsurance.tsx',
  '/referral': 'src/pages/Referral.tsx',
  '/checklist': 'src/pages/Checklist.tsx',
  '/privacy-policy': 'src/pages/PrivacyPolicy.tsx',
  '/terms': 'src/pages/Terms.tsx',
  '/blog/term-vs-whole-life-insurance-2025': 'src/pages/blog/TermVsWholeLifeInsurance2024.tsx',
  '/blog/open-enrollment-2026-guide': 'src/pages/blog/OpenEnrollment2026Guide.tsx',
  '/blog/florida-health-insurance-guide-2024': 'src/pages/blog/FloridaHealthInsuranceGuide2024.tsx',
  '/blog/life-insurance-young-adults-guide': 'src/pages/blog/LifeInsuranceYoungAdultsGuide.tsx',
  '/blog/how-much-life-insurance-calculator': 'src/pages/blog/HowMuchLifeInsuranceCalculator.tsx',
  '/blog/life-insurance-pre-existing-conditions': 'src/pages/blog/LifeInsurancePreExistingConditions.tsx',
  '/blog/ppo-hmo-epo-plan-comparison': 'src/pages/blog/PPOHMOEPOPlanComparison.tsx',
  '/blog/health-insurance-deductibles-guide': 'src/pages/blog/HealthInsuranceDeductiblesGuide.tsx',
  '/blog/health-insurance-open-enrollment-checklist': 'src/pages/blog/HealthInsuranceOpenEnrollmentChecklist.tsx',
  '/blog/tampa-bay-insurance-broker-guide': 'src/pages/blog/TampaBayInsuranceBrokerGuide.tsx',
  '/blog/michigan-insurance-laws': 'src/pages/blog/MichiganInsuranceLaws.tsx',
  '/blog/north-carolina-best-health-insurance': 'src/pages/blog/NorthCarolinaBestHealthInsurance.tsx',
  '/blog/florida-hurricane-insurance-protection': 'src/pages/blog/FloridaHurricaneInsuranceProtection.tsx',
  '/blog/aetna-cigna-united-comparison': 'src/pages/blog/AetnaCignaUnitedComparison.tsx',
  '/blog/am-best-insurance-ratings-explained': 'src/pages/blog/AMBestInsuranceRatingsExplained.tsx',
  '/blog/florida-small-business-health-insurance': 'src/pages/blog/FloridaSmallBusinessHealthInsurance.tsx',
  '/blog/life-insurance-companies-financial-strength': 'src/pages/blog/LifeInsuranceCompaniesFinancialStrength.tsx',
};

export const STATE_COMPONENT_PATH = 'src/pages/states/[code].tsx';

export function buildStateRoutes() {
  return Object.entries(stateMetadata)
    .filter(([_, meta]) => meta.available === true)
    .map(([slug]) => `/states/${slug}`);
}

export function getSeoRoutePaths() {
  return [...CORE_ROUTES, ...BLOG_ROUTES, ...buildStateRoutes()];
}

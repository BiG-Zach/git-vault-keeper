import { lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../App';

// Lazy page stubs (extensionless imports for TS)
const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const Contact = lazy(() => import('../pages/Contact'));
const Quote = lazy(() => import('../pages/quote/Quote'));
const Carriers = lazy(() => import('../pages/Carriers'));
const HowItWorks = lazy(() => import('../pages/HowItWorks'));
const Resources = lazy(() => import('../pages/Resources'));
const HowItWorksRedirect = () => { window.location.replace('/our-process'); return null; };
// Dynamic state page
const StateDynamic = lazy(() => import('../pages/states/[code]'));
const Referral = lazy(() => import('../pages/Referral'));
const Checklist = lazy(() => import('../pages/Checklist'));
const ThankYou = lazy(() => import('../pages/ThankYou'));
const PrivacyPolicy = lazy(() => import('../pages/PrivacyPolicy'));
const Terms = lazy(() => import('../pages/Terms'));

// Blog posts
const TermVsWholeLifeInsurance2024 = lazy(() => import('../pages/blog/TermVsWholeLifeInsurance2024'));
const FloridaHealthInsuranceGuide2024 = lazy(() => import('../pages/blog/FloridaHealthInsuranceGuide2024'));
const LifeInsuranceYoungAdultsGuide = lazy(() => import('../pages/blog/LifeInsuranceYoungAdultsGuide'));
const HowMuchLifeInsuranceCalculator = lazy(() => import('../pages/blog/HowMuchLifeInsuranceCalculator'));
const LifeInsurancePreExistingConditions = lazy(() => import('../pages/blog/LifeInsurancePreExistingConditions'));
const PPOHMOEPOPlanComparison = lazy(() => import('../pages/blog/PPOHMOEPOPlanComparison'));
const HealthInsuranceDeductiblesGuide = lazy(() => import('../pages/blog/HealthInsuranceDeductiblesGuide'));
const HealthInsuranceOpenEnrollmentChecklist = lazy(() => import('../pages/blog/HealthInsuranceOpenEnrollmentChecklist'));
const TampaBayInsuranceBrokerGuide = lazy(() => import('../pages/blog/TampaBayInsuranceBrokerGuide'));
const MichiganInsuranceLaws = lazy(() => import('../pages/blog/MichiganInsuranceLaws'));
const NorthCarolinaBestHealthInsurance = lazy(() => import('../pages/blog/NorthCarolinaBestHealthInsurance'));
const FloridaHurricaneInsuranceProtection = lazy(() => import('../pages/blog/FloridaHurricaneInsuranceProtection'));
const AetnaCignaUnitedComparison = lazy(() => import('../pages/blog/AetnaCignaUnitedComparison'));

export const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      { path: 'quote', element: <Quote /> },
      { path: 'carriers', element: <Carriers /> },
      { path: 'our-process', element: <HowItWorks /> },
      { path: 'resources', element: <Resources /> },
      { path: 'how-it-works', element: <HowItWorksRedirect /> },
      // Dynamic state route: /states/:code (expects 2-letter code like 'fl')
      { path: 'states/:code', element: <StateDynamic /> },
      { path: 'referral', element: <Referral /> },
      { path: 'checklist', element: <Checklist /> },
      { path: 'thank-you', element: <ThankYou /> },
      { path: 'privacy-policy', element: <PrivacyPolicy /> },
      { path: 'terms', element: <Terms /> },
      // Blog routes
      { path: 'blog/term-vs-whole-life-insurance-2024', element: <TermVsWholeLifeInsurance2024 /> },
      { path: 'blog/florida-health-insurance-guide-2024', element: <FloridaHealthInsuranceGuide2024 /> },
      { path: 'blog/life-insurance-young-adults-guide', element: <LifeInsuranceYoungAdultsGuide /> },
      { path: 'blog/how-much-life-insurance-calculator', element: <HowMuchLifeInsuranceCalculator /> },
      { path: 'blog/life-insurance-pre-existing-conditions', element: <LifeInsurancePreExistingConditions /> },
      { path: 'blog/ppo-hmo-epo-plan-comparison', element: <PPOHMOEPOPlanComparison /> },
      { path: 'blog/health-insurance-deductibles-guide', element: <HealthInsuranceDeductiblesGuide /> },
      { path: 'blog/health-insurance-open-enrollment-checklist', element: <HealthInsuranceOpenEnrollmentChecklist /> },
      { path: 'blog/tampa-bay-insurance-broker-guide', element: <TampaBayInsuranceBrokerGuide /> },
      { path: 'blog/michigan-insurance-laws', element: <MichiganInsuranceLaws /> },
      { path: 'blog/north-carolina-best-health-insurance', element: <NorthCarolinaBestHealthInsurance /> },
      { path: 'blog/florida-hurricane-insurance-protection', element: <FloridaHurricaneInsuranceProtection /> },
      { path: 'blog/aetna-cigna-united-comparison', element: <AetnaCignaUnitedComparison /> },
    ],
  },
];

export function makeRouter() {
  return createBrowserRouter(routes);
}

export function AppRouter() {
  const router = makeRouter();
  return <RouterProvider router={router} />;
}
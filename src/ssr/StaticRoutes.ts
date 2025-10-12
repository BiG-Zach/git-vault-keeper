import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import type { SeoCollector } from '../components/SeoProvider';
import AppShell from '../layout/AppShell.tsx';

// Primary pages
import Home from '../pages/Home.tsx';
import About from '../pages/About.tsx';
import Contact from '../pages/Contact.tsx';
import Quote from '../pages/quote/Quote.tsx';
import Carriers from '../pages/Carriers.tsx';
import HowItWorks from '../pages/HowItWorks.tsx';
import Resources from '../pages/Resources.tsx';
import HealthInsurance from '../pages/HealthInsurance.tsx';
import LifeInsurance from '../pages/LifeInsurance.tsx';
import Referral from '../pages/Referral.tsx';
import Checklist from '../pages/Checklist.tsx';
import ThankYou from '../pages/ThankYou.tsx';
import PrivacyPolicy from '../pages/PrivacyPolicy.tsx';
import Terms from '../pages/Terms.tsx';

// Blog
import TermVsWholeLifeInsurance2024 from '../pages/blog/TermVsWholeLifeInsurance2024.tsx';
import FloridaHealthInsuranceGuide2024 from '../pages/blog/FloridaHealthInsuranceGuide2024.tsx';
import LifeInsuranceYoungAdultsGuide from '../pages/blog/LifeInsuranceYoungAdultsGuide.tsx';
import HowMuchLifeInsuranceCalculator from '../pages/blog/HowMuchLifeInsuranceCalculator.tsx';
import LifeInsurancePreExistingConditions from '../pages/blog/LifeInsurancePreExistingConditions.tsx';
import PPOHMOEPOPlanComparison from '../pages/blog/PPOHMOEPOPlanComparison.tsx';
import HealthInsuranceDeductiblesGuide from '../pages/blog/HealthInsuranceDeductiblesGuide.tsx';
import HealthInsuranceOpenEnrollmentChecklist from '../pages/blog/HealthInsuranceOpenEnrollmentChecklist.tsx';
import TampaBayInsuranceBrokerGuide from '../pages/blog/TampaBayInsuranceBrokerGuide.tsx';
import MichiganInsuranceLaws from '../pages/blog/MichiganInsuranceLaws.tsx';
import NorthCarolinaBestHealthInsurance from '../pages/blog/NorthCarolinaBestHealthInsurance.tsx';
import FloridaHurricaneInsuranceProtection from '../pages/blog/FloridaHurricaneInsuranceProtection.tsx';
import AetnaCignaUnitedComparison from '../pages/blog/AetnaCignaUnitedComparison.tsx';
import AMBestInsuranceRatingsExplained from '../pages/blog/AMBestInsuranceRatingsExplained.tsx';
import FloridaSmallBusinessHealthInsurance from '../pages/blog/FloridaSmallBusinessHealthInsurance.tsx';
import LifeInsuranceCompaniesFinancialStrength from '../pages/blog/LifeInsuranceCompaniesFinancialStrength.tsx';

// Dynamic routes
import StateDynamic from '../pages/states/[code].tsx';

import NotFound from '../pages/NotFound.tsx';

type StaticRoutesProps = {
  seoCollector?: SeoCollector;
};

export default function StaticRoutes({ seoCollector }: StaticRoutesProps) {
  return React.createElement(
    AppShell,
    { seoCollector },
    React.createElement(
      Routes,
      null,
      [
        createRoute('home', { path: '/', element: React.createElement(Home) }),
        createRoute('about', { path: '/about', element: React.createElement(About) }),
        createRoute('contact', { path: '/contact', element: React.createElement(Contact) }),
        createRoute('quote', { path: '/quote', element: React.createElement(Quote) }),
        createRoute('carriers', { path: '/carriers', element: React.createElement(Carriers) }),
        createRoute('our-process', { path: '/our-process', element: React.createElement(HowItWorks) }),
        createRoute('resources', { path: '/resources', element: React.createElement(Resources) }),
        createRoute('health-insurance', {
          path: '/health-insurance',
          element: React.createElement(HealthInsurance),
        }),
        createRoute('life-insurance', { path: '/life-insurance', element: React.createElement(LifeInsurance) }),
        createRoute('how-it-works-redirect', {
          path: '/how-it-works',
          element: React.createElement(Navigate, { to: '/our-process', replace: true }),
        }),
        createRoute('states-dynamic', { path: '/states/:code', element: React.createElement(StateDynamic) }),
        createRoute('referral', { path: '/referral', element: React.createElement(Referral) }),
        createRoute('checklist', { path: '/checklist', element: React.createElement(Checklist) }),
        createRoute('thank-you', { path: '/thank-you', element: React.createElement(ThankYou) }),
        createRoute('privacy-policy', {
          path: '/privacy-policy',
          element: React.createElement(PrivacyPolicy),
        }),
        createRoute('terms', { path: '/terms', element: React.createElement(Terms) }),

        createRoute('blog-term-vs-whole', {
          path: '/blog/term-vs-whole-life-insurance-2024',
          element: React.createElement(TermVsWholeLifeInsurance2024),
        }),
        createRoute('blog-florida-health-guide', {
          path: '/blog/florida-health-insurance-guide-2024',
          element: React.createElement(FloridaHealthInsuranceGuide2024),
        }),
        createRoute('blog-life-young-adults', {
          path: '/blog/life-insurance-young-adults-guide',
          element: React.createElement(LifeInsuranceYoungAdultsGuide),
        }),
        createRoute('blog-how-much-life', {
          path: '/blog/how-much-life-insurance-calculator',
          element: React.createElement(HowMuchLifeInsuranceCalculator),
        }),
        createRoute('blog-pre-existing', {
          path: '/blog/life-insurance-pre-existing-conditions',
          element: React.createElement(LifeInsurancePreExistingConditions),
        }),
        createRoute('blog-ppo-hmo-epo', {
          path: '/blog/ppo-hmo-epo-plan-comparison',
          element: React.createElement(PPOHMOEPOPlanComparison),
        }),
        createRoute('blog-deductibles', {
          path: '/blog/health-insurance-deductibles-guide',
          element: React.createElement(HealthInsuranceDeductiblesGuide),
        }),
        createRoute('blog-open-enrollment', {
          path: '/blog/health-insurance-open-enrollment-checklist',
          element: React.createElement(HealthInsuranceOpenEnrollmentChecklist),
        }),
        createRoute('blog-tampa-bay', {
          path: '/blog/tampa-bay-insurance-broker-guide',
          element: React.createElement(TampaBayInsuranceBrokerGuide),
        }),
        createRoute('blog-michigan-laws', {
          path: '/blog/michigan-insurance-laws',
          element: React.createElement(MichiganInsuranceLaws),
        }),
        createRoute('blog-north-carolina', {
          path: '/blog/north-carolina-best-health-insurance',
          element: React.createElement(NorthCarolinaBestHealthInsurance),
        }),
        createRoute('blog-florida-hurricane', {
          path: '/blog/florida-hurricane-insurance-protection',
          element: React.createElement(FloridaHurricaneInsuranceProtection),
        }),
        createRoute('blog-aetna-cigna', {
          path: '/blog/aetna-cigna-united-comparison',
          element: React.createElement(AetnaCignaUnitedComparison),
        }),
        createRoute('blog-am-best', {
          path: '/blog/am-best-insurance-ratings-explained',
          element: React.createElement(AMBestInsuranceRatingsExplained),
        }),
        createRoute('blog-florida-small-business', {
          path: '/blog/florida-small-business-health-insurance',
          element: React.createElement(FloridaSmallBusinessHealthInsurance),
        }),
        createRoute('blog-life-insurance-strength', {
          path: '/blog/life-insurance-companies-financial-strength',
          element: React.createElement(LifeInsuranceCompaniesFinancialStrength),
        }),

        createRoute('not-found', { path: '*', element: React.createElement(NotFound) }),
      ],
    ),
  );
}

function createRoute(
  key: string,
  props: {
    path?: string;
    index?: boolean;
    element: React.ReactElement;
  },
) {
  return React.createElement(Route, { key, ...props });
}

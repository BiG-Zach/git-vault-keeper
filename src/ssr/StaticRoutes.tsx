import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import type { SeoCollector } from '../components/SeoProvider';
import StateDirectory from '../pages/StateDirectory';
import AppShell from '../layout/AppShell';

// Primary pages
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Quote from '../pages/quote/Quote';
import Carriers from '../pages/Carriers';
import HowItWorks from '../pages/HowItWorks';
import Resources from '../pages/Resources';
import HealthInsurance from '../pages/HealthInsurance';
import LifeInsurance from '../pages/LifeInsurance';
import Referral from '../pages/Referral';
import Checklist from '../pages/Checklist';
import ThankYou from '../pages/ThankYou';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import Terms from '../pages/Terms';

// Blog
import TermVsWholeLifeInsurance2024 from '../pages/blog/TermVsWholeLifeInsurance2024';

import LifeInsuranceYoungAdultsGuide from '../pages/blog/LifeInsuranceYoungAdultsGuide';
import HowMuchLifeInsuranceCalculator from '../pages/blog/HowMuchLifeInsuranceCalculator';
import LifeInsurancePreExistingConditions from '../pages/blog/LifeInsurancePreExistingConditions';
import PPOHMOEPOPlanComparison from '../pages/blog/PPOHMOEPOPlanComparison';
import HealthInsuranceDeductiblesGuide from '../pages/blog/HealthInsuranceDeductiblesGuide';
import HealthInsuranceOpenEnrollmentChecklist from '../pages/blog/HealthInsuranceOpenEnrollmentChecklist';
import TampaBayInsuranceBrokerGuide from '../pages/blog/TampaBayInsuranceBrokerGuide';
import MichiganInsuranceLaws from '../pages/blog/MichiganInsuranceLaws';
import NorthCarolinaBestHealthInsurance from '../pages/blog/NorthCarolinaBestHealthInsurance';
import FloridaHurricaneInsuranceProtection from '../pages/blog/FloridaHurricaneInsuranceProtection';
import AetnaCignaUnitedComparison from '../pages/blog/AetnaCignaUnitedComparison';
import AMBestInsuranceRatingsExplained from '../pages/blog/AMBestInsuranceRatingsExplained';
import FloridaSmallBusinessHealthInsurance from '../pages/blog/FloridaSmallBusinessHealthInsurance';
import LifeInsuranceCompaniesFinancialStrength from '../pages/blog/LifeInsuranceCompaniesFinancialStrength';
import OpenEnrollment2026Guide from '../pages/blog/OpenEnrollment2026Guide';

// Dynamic routes
import StateDynamic from '../pages/states/[code]';

import NotFound from '../pages/NotFound';

type StaticRoutesProps = {
  seoCollector?: SeoCollector;
};

export default function StaticRoutes({ seoCollector }: StaticRoutesProps) {
  return (
    <AppShell seoCollector={seoCollector}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="/carriers" element={<Carriers />} />
        <Route path="/our-process" element={<HowItWorks />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/health-insurance" element={<HealthInsurance />} />
        <Route path="/life-insurance" element={<LifeInsurance />} />
        <Route path="/how-it-works" element={<Navigate to="/our-process" replace />} />
        <Route path="/states" element={<StateDirectory />} />
        <Route path="/states/:code" element={<StateDynamic />} />
        <Route path="/referral" element={<Referral />} />
        <Route path="/checklist" element={<Checklist />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />

        <Route path="/blog/term-vs-whole-life-insurance-2025" element={<TermVsWholeLifeInsurance2024 />} />

        <Route path="/blog/life-insurance-young-adults-guide" element={<LifeInsuranceYoungAdultsGuide />} />
        <Route path="/blog/how-much-life-insurance-calculator" element={<HowMuchLifeInsuranceCalculator />} />
        <Route
          path="/blog/life-insurance-pre-existing-conditions"
          element={<LifeInsurancePreExistingConditions />}
        />
        <Route path="/blog/ppo-hmo-epo-plan-comparison" element={<PPOHMOEPOPlanComparison />} />
        <Route path="/blog/health-insurance-deductibles-guide" element={<HealthInsuranceDeductiblesGuide />} />
        <Route
          path="/blog/health-insurance-open-enrollment-checklist"
          element={<HealthInsuranceOpenEnrollmentChecklist />}
        />
        <Route path="/blog/tampa-bay-insurance-broker-guide" element={<TampaBayInsuranceBrokerGuide />} />
        <Route path="/blog/michigan-insurance-laws" element={<MichiganInsuranceLaws />} />
        <Route
          path="/blog/north-carolina-best-health-insurance"
          element={<NorthCarolinaBestHealthInsurance />}
        />
        <Route
          path="/blog/florida-hurricane-insurance-protection"
          element={<FloridaHurricaneInsuranceProtection />}
        />
        <Route path="/blog/aetna-cigna-united-comparison" element={<AetnaCignaUnitedComparison />} />
        <Route path="/blog/am-best-insurance-ratings-explained" element={<AMBestInsuranceRatingsExplained />} />
        <Route
          path="/blog/florida-small-business-health-insurance"
          element={<FloridaSmallBusinessHealthInsurance />}
        />
        <Route
          path="/blog/life-insurance-companies-financial-strength"
          element={<LifeInsuranceCompaniesFinancialStrength />}
        />
        <Route path="/blog/open-enrollment-2026-guide" element={<OpenEnrollment2026Guide />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </AppShell>
  );
}

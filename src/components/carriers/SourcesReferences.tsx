import React from 'react';
import { BookOpen, ExternalLink } from 'lucide-react';

interface Source {
  id: number;
  text: string;
  url: string;
}

const sources: Source[] = [
  { id: 1, text: "AM Best - Aetna/CVS Health Credit Rating Affirmation (May 2025)", url: "https://www.ambest.com" },
  { id: 2, text: "GuruFocus - AM Best Affirms CVS Health Corporation Ratings", url: "https://www.gurufocus.com" },
  { id: 3, text: "CVS Health - 2025 Aetna Medicare Advantage Star Ratings", url: "https://www.cvshealth.com" },
  { id: 4, text: "Wikipedia - CVS Health Company History", url: "https://en.wikipedia.org/wiki/CVS_Health" },
  { id: 5, text: "Yahoo Finance - AM Best Affirms Cigna Credit Ratings (April 2025)", url: "https://finance.yahoo.com" },
  { id: 6, text: "Cigna Q4 2024 Financial Supplement", url: "https://www.cigna.com/about-us/newsroom/studies-and-reports" },
  { id: 7, text: "Cigna Group 2024 Annual Results Press Release", url: "https://www.cigna.com/about-us/newsroom" },
  { id: 8, text: "Yahoo Finance - AM Best Affirms UnitedHealthcare Ratings", url: "https://finance.yahoo.com" },
  { id: 9, text: "FI-Desk - UnitedHealth Group Credit Outlook Downgrade", url: "https://www.fi-desk.com" },
  { id: 10, text: "UnitedHealth Group Q2 2025 Investor Report", url: "https://www.unitedhealthgroup.com/investors" },
  { id: 11, text: "UnitedHealth Group Q4 2024 Earnings Report", url: "https://www.unitedhealthgroup.com/investors" },
  { id: 12, text: "Yahoo Finance - AM Best Affirms Elevance Health Ratings", url: "https://finance.yahoo.com" },
  { id: 13, text: "AM Best News - Blue Cross Blue Shield Ratings", url: "https://www.ambest.com" },
  { id: 14, text: "Elevance Health Q4 2024 Earnings Release", url: "https://ir.elevancehealth.com" },
  { id: 15, text: "BCBS Association - Blue Cross History of Healthcare", url: "https://www.bcbs.com/about-us" },
  { id: 16, text: "Yahoo Finance - AM Best Affirms Mutual of Omaha Ratings", url: "https://finance.yahoo.com" },
  { id: 17, text: "Mutual of Omaha Q1 2025 Investor Deck", url: "https://www.mutualofomaha.com/about-us" },
  { id: 18, text: "AM Best News - Mutual of Omaha Rating Details", url: "https://www.ambest.com" },
  { id: 19, text: "Mutual of Omaha Company Overview", url: "https://www.mutualofomaha.com/about-us" },
  { id: 20, text: "Mutual of Omaha - J.D. Power 2025 #1 Ranking Press Release", url: "https://www.mutualofomaha.com/about-us/newsroom" },
  { id: 21, text: "Yahoo Finance - AM Best Affirms Aflac Ratings (September 2025)", url: "https://finance.yahoo.com" },
  { id: 22, text: "Aflac Q4 2024 Earnings Report", url: "https://investors.aflac.com" },
  { id: 23, text: "Aflac Company History", url: "https://www.aflac.com/about-aflac" },
  { id: 24, text: "Wikipedia - Aflac", url: "https://en.wikipedia.org/wiki/Aflac" },
  { id: 25, text: "Legacy Net - Americo Financial Documents", url: "https://www.americo.com" },
  { id: 26, text: "Americo Strength & Stability Report", url: "https://www.americo.com/about" },
  { id: 27, text: "CBonds - Americo Credit Ratings", url: "https://cbonds.com" },
  { id: 28, text: "Retire Guide - Americo Company Ratings", url: "https://www.retireguide.com" },
  { id: 29, text: "AM Best News - Illinois Mutual Upgrade (October 2025)", url: "https://www.ambest.com" },
  { id: 30, text: "AM Best Ratings - Illinois Mutual Profile", url: "https://www.ambest.com" },
  { id: 31, text: "Illinois Mutual 2024 Annual Financial Report", url: "https://www.illinoismutual.com" },
  { id: 32, text: "Illinois Mutual - About Us / Annual Report", url: "https://www.illinoismutual.com/about" },
  { id: 33, text: "Medicare Supplement Shop - Philadelphia American Profile", url: "https://www.medicaresupplementshop.com" },
  { id: 34, text: "New Era Life Insurance - About Us", url: "https://www.neweralife.com/about" },
  { id: 35, text: "Medical Mutual Financials Report", url: "https://www.medmutual.com" },
  { id: 36, text: "Medical Mutual - Medicare Star Ratings Blog", url: "https://www.medmutual.com/blog" },
  { id: 37, text: "Fortune - Medical Mutual of Ohio Company Profile", url: "https://fortune.com" },
  { id: 38, text: "SGIC Insurance - AM Best Credit Rating Page", url: "https://www.sgic.com" },
  { id: 39, text: "SGIC Insurance - Compliance Documentation", url: "https://www.sgic.com/compliance" },
  { id: 40, text: "Wisconsin OCI - Southern Guaranty Financial Statement", url: "https://oci.wi.gov" },
  { id: 41, text: "Insurance Journal - National General Ratings (November 2024)", url: "https://www.insurancejournal.com" },
  { id: 42, text: "Yahoo Finance - AM Best Affirms Allstate Ratings (August 2025)", url: "https://finance.yahoo.com" },
  { id: 43, text: "Royal Gazette - AM Best Assigns National General Ratings", url: "https://www.royalgazette.com" },
  { id: 44, text: "Health Net - First Health PPO Network FAQ", url: "https://www.healthnet.com" },
  { id: 45, text: "Insubuy - First Health PPO Network Overview", url: "https://www.insubuy.com" },
  { id: 46, text: "DCF Modeling - MultiPlan History and Ownership", url: "https://www.dcfmodeling.com" },
  { id: 47, text: "Claritev - MultiPlan Q2 2024 Results", url: "https://www.claritev.com" },
  { id: 48, text: "MultiPlan Proxy Statement - 2025 Annual Report", url: "https://investors.multiplan.com" },
];

export default function SourcesReferences() {
  return (
    <section className="sources-references bg-slate-50 py-16">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="bg-white rounded-2xl border-2 border-slate-200 p-8 md:p-12 shadow-lg">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900">Sources & References</h2>
          </div>
          
          <p className="text-slate-600 mb-8 leading-relaxed">
            All carrier ratings, financial data, and performance metrics are sourced from official AM Best ratings reports, company financial statements, and independent research conducted in 2024-2025. Data is current as of the dates indicated in source materials.
          </p>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Rating Agency Sources:</h3>
              <ol className="space-y-2 text-sm text-slate-700">
                {sources.map((source) => (
                  <li key={source.id} className="flex items-start gap-2 group">
                    <span className="font-medium">[{source.id}]</span>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 hover:underline flex items-center gap-1 transition-colors"
                    >
                      {source.text}
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                    </a>
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-8 p-6 bg-blue-50 border-2 border-blue-200 rounded-xl">
              <p className="text-sm text-slate-700 italic">
                <strong className="text-blue-900">Data Verification:</strong> All data verified and current as of research date: 2024-2025. Ratings and financial information subject to change. Please verify current ratings with AM Best or respective rating agencies for the most up-to-date information.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
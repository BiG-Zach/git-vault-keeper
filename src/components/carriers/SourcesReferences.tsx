import React from 'react';
import { BookOpen } from 'lucide-react';

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
                <li>[1] AM Best - Aetna/CVS Health Credit Rating Affirmation (May 2025)</li>
                <li>[2] GuruFocus - AM Best Affirms CVS Health Corporation Ratings</li>
                <li>[3] CVS Health - 2025 Aetna Medicare Advantage Star Ratings</li>
                <li>[4] Wikipedia - CVS Health Company History</li>
                <li>[5] Yahoo Finance - AM Best Affirms Cigna Credit Ratings (April 2025)</li>
                <li>[6] Cigna Q4 2024 Financial Supplement</li>
                <li>[7] Cigna Group 2024 Annual Results Press Release</li>
                <li>[8] Yahoo Finance - AM Best Affirms UnitedHealthcare Ratings</li>
                <li>[9] FI-Desk - UnitedHealth Group Credit Outlook Downgrade</li>
                <li>[10] UnitedHealth Group Q2 2025 Investor Report</li>
                <li>[11] UnitedHealth Group Q4 2024 Earnings Report</li>
                <li>[12] Yahoo Finance - AM Best Affirms Elevance Health Ratings</li>
                <li>[13] AM Best News - Blue Cross Blue Shield Ratings</li>
                <li>[14] Elevance Health Q4 2024 Earnings Release</li>
                <li>[15] BCBS Association - Blue Cross History of Healthcare</li>
                <li>[16] Yahoo Finance - AM Best Affirms Mutual of Omaha Ratings</li>
                <li>[17] Mutual of Omaha Q1 2025 Investor Deck</li>
                <li>[18] AM Best News - Mutual of Omaha Rating Details</li>
                <li>[19] Mutual of Omaha Company Overview</li>
                <li>[20] Mutual of Omaha - J.D. Power 2025 #1 Ranking Press Release</li>
                <li>[21] Yahoo Finance - AM Best Affirms Aflac Ratings (September 2025)</li>
                <li>[22] Aflac Q4 2024 Earnings Report</li>
                <li>[23] Aflac Company History</li>
                <li>[24] Wikipedia - Aflac</li>
                <li>[25] Legacy Net - Americo Financial Documents</li>
                <li>[26] Americo Strength & Stability Report</li>
                <li>[27] CBonds - Americo Credit Ratings</li>
                <li>[28] Retire Guide - Americo Company Ratings</li>
                <li>[29] AM Best News - Illinois Mutual Upgrade (October 2025)</li>
                <li>[30] AM Best Ratings - Illinois Mutual Profile</li>
                <li>[31] Illinois Mutual 2024 Annual Financial Report</li>
                <li>[32] Illinois Mutual - About Us / Annual Report</li>
                <li>[33] Medicare Supplement Shop - Philadelphia American Profile</li>
                <li>[34] New Era Life Insurance - About Us</li>
                <li>[35] Medical Mutual Financials Report</li>
                <li>[36] Medical Mutual - Medicare Star Ratings Blog</li>
                <li>[37] Fortune - Medical Mutual of Ohio Company Profile</li>
                <li>[38] SGIC Insurance - AM Best Credit Rating Page</li>
                <li>[39] SGIC Insurance - Compliance Documentation</li>
                <li>[40] Wisconsin OCI - Southern Guaranty Financial Statement</li>
                <li>[41] Insurance Journal - National General Ratings (November 2024)</li>
                <li>[42] Yahoo Finance - AM Best Affirms Allstate Ratings (August 2025)</li>
                <li>[43] Royal Gazette - AM Best Assigns National General Ratings</li>
                <li>[44] Health Net - First Health PPO Network FAQ</li>
                <li>[45] Insubuy - First Health PPO Network Overview</li>
                <li>[46] DCF Modeling - MultiPlan History and Ownership</li>
                <li>[47] Claritev - MultiPlan Q2 2024 Results</li>
                <li>[48] MultiPlan Proxy Statement - 2025 Annual Report</li>
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
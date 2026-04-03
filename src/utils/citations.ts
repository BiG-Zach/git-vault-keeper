// Citation number to URL mapping based on research document
export const citationUrls: Record<number, string> = {
  1: "https://insurasales.com/news-story/34749/am-best-affirms-aetna-and-cvs-health-insurance-ratings-as-stable",
  2: "https://www.gurufocus.com/news/2845940/am-best-affirms-credit-ratings-of-cvs-health-corporations-aetna-inc-subsidiaries-cvs-stock-news",
  3: "https://www.cvshealth.com/news/medicare/2025-aetna-medicare-advantage-star-ratings.html",
  4: "https://en.wikipedia.org/wiki/CVS_Health",
  5: "https://finance.yahoo.com/news/am-best-affirms-credit-ratings-214600553.html",
  6: "https://s202.q4cdn.com/757723766/files/doc_earnings/2024/q4/supplemental-info/4Q24-financial-supplement.pdf",
  7: "https://newsroom.thecignagroup.com/2025-01-30-The-Cigna-Group-Reports-Fourth-Quarter-and-Full-Year-2024-Results,-Establishes-2025-Outlook-and-Increases-Dividend",
  8: "https://finance.yahoo.com/news/am-best-affirms-credit-ratings-202000445.html",
  9: "https://www.fi-desk.com/unitedhealth-group-credit-outlooks-downgraded-to-negative/",
  10: "https://www.unitedhealthgroup.com/content/dam/UHG/PDF/investors/2025/unh-reestablishes-full-year-outlook-and-reports-second-quarter-2025-results.pdf",
  11: "https://www.unitedhealthgroup.com/content/dam/UHG/PDF/investors/2024/2025-16-01-uhg-reports-fourth-quarter-results.pdf",
  12: "https://finance.yahoo.com/news/am-best-affirms-credit-ratings-171900305.html",
  13: "https://news.ambest.com/newscontent.aspx?altsrc=23",
  14: "https://www.elevancehealth.com/content/dam/elevance-health/documents/earnings/4Q2024_ELV_Earnings_Release.pdf",
  15: "https://www.bcbs.com/about-us/blue-cross-history-of-healthcare",
  16: "https://finance.yahoo.com/news/am-best-affirms-credit-ratings-155700427.html",
  17: "https://cdn.mutualofomaha.com/mutualofomaha/documents/pdfs/about/Investor_Deck_1Q2025_Fixed_Income_Presentation_vF.pdf",
  18: "https://news.ambest.com/newscontent.aspx?URATINGID=3230146&MCToken=2233812381206114256142861324656127157&auth=",
  19: "https://cdn.mutualofomaha.com/mutualofomaha/documents/pdfs/newsroom/mutual-of-omaha-overview.pdf",
  20: "https://www.mutualofomaha.com/about/newsroom/article/mutual-of-omaha-ranked-1-individual-life-insurance-provider-by-j-d-power",
  21: "https://finance.yahoo.com/news/am-best-affirms-credit-ratings-165300859.html",
  22: "https://investors.aflac.com/press-releases/press-release-details/2025/Aflac-Incorporated-Announces-Fourth-Quarter-Results-Reports-Fourth-Quarter-Net-Earnings-of-1.9-Billion-Reiterates-Increase-in-First-Quarter-Dividend-of-16/default.aspx",
  23: "https://www.aflac.com/about-aflac/our-company/our-history.aspx",
  24: "https://en.wikipedia.org/wiki/Aflac",
  25: "https://www.legacynet.com/CommImages/LMG4416F.pdf",
  26: "https://www.americo.com/Content/StrengthStability.pdf",
  27: "https://cbonds.com/news/2738261/",
  28: "https://www.retireguide.com/annuities/companies/credit-ratings/",
  29: "https://news.ambest.com/newscontent.aspx?altsrc=149",
  30: "https://ratings.ambest.com/companyprofile.aspx?ambnum=6542&URatingId=-1&bl=64&AltSrc=3&PPP=&AltNum=21636542&Ext_User=&Ext_Misc=&Portal=0",
  31: "https://www.illinoismutual.com/docs/default-source/pdfs/annual-report/c7041_2024-financials-one-sheet.pdf?sfvrsn=c5feaedb_1",
  32: "https://www.illinoismutual.com/about-us/annual-report",
  33: "https://medicaresupplementshop.com/resources/insurance-companies/philadelphia-american/",
  34: "https://site.neweralife.com/about-us",
  35: "https://www.mmlis.com/content/financials",
  36: "https://www.medmutual.com/About-Medical-Mutual/Blog/What-Medicare-Star-Ratings-Mean-for-You",
  37: "https://fortune.com/company/medical-mutual-of-ohio/",
  38: "https://sgicinsurance.com/sgic-insurance-am-best-credit-rating/",
  39: "https://sgicinsurance.com/compliance/",
  40: "https://oci.wi.gov/Documents/Companies/FinSouthernGurar.pdf",
  41: "https://www.insurancejournal.com/news/national/2025/08/29/837398.htm",
  42: "https://finance.yahoo.com/news/am-best-affirms-credit-ratings-211500053.html",
  43: "https://www.royalgazette.com/reinsurance/business/article/20241114/am-best-assigns-ratings-to-national-general-insurance/",
  44: "https://www.healthnet.com/content/dam/centene/healthnet/pdfs/broker/ca/large/fb/2022/oos-ppo-faq-broker.pdf",
  45: "https://www.insubuy.com/first-health-ppo-network-faq/",
  46: "https://dcfmodeling.com/blogs/history/mpln-history-mission-ownership",
  47: "https://www.claritev.com/multiplan-reports-second-quarter-2024-results-and-updates-2024-guidance/",
  48: "https://materials.proxyvote.com/Approved/62548M/20250307/FO10K_598698.PDF"
};

// Helper function to get URL for a citation number
export function getCitationUrl(citationNum: number): string | undefined {
  return citationUrls[citationNum];
}

// Extract citation numbers from a string like "[1][5][8]"
export function extractCitationNumbers(text: string): number[] {
  const matches = text.match(/\d+/g);
  return matches ? matches.map(num => parseInt(num, 10)) : [];
}
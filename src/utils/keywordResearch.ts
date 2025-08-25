// Comprehensive Keyword Research & Competitive Analysis System for Insurance SEO Domination

export interface KeywordData {
  keyword: string;
  searchVolume: number;
  difficulty: number;
  cpc: number;
  competition: 'low' | 'medium' | 'high';
  intent: 'informational' | 'navigational' | 'commercial' | 'transactional';
  opportunity: number; // 1-100 scale
  currentRank?: number;
  targetRank: number;
  priority: 'low' | 'medium' | 'high' | 'critical';
  category: string;
  state?: string;
  city?: string;
}

export interface CompetitorData {
  domain: string;
  name: string;
  authorityScore: number;
  organicKeywords: number;
  organicTraffic: number;
  paidKeywords: number;
  paidTraffic: number;
  topKeywords: KeywordData[];
  gapKeywords: KeywordData[];
  strengths: string[];
  weaknesses: string[];
}

// High-Value Insurance Keywords for SEO Domination
export const PRIORITY_KEYWORDS: KeywordData[] = [
  // Transactional Keywords (Highest Priority)
  { keyword: 'health insurance quotes', searchVolume: 49500, difficulty: 72, cpc: 47.83, competition: 'high', intent: 'transactional', opportunity: 95, targetRank: 1, priority: 'critical', category: 'Health Insurance' },
  { keyword: 'life insurance quotes', searchVolume: 40500, difficulty: 68, cpc: 52.17, competition: 'high', intent: 'transactional', opportunity: 90, targetRank: 1, priority: 'critical', category: 'Life Insurance' },
  { keyword: 'cheap health insurance', searchVolume: 27100, difficulty: 75, cpc: 42.50, competition: 'high', intent: 'transactional', opportunity: 85, targetRank: 1, priority: 'critical', category: 'Health Insurance' },
  { keyword: 'affordable life insurance', searchVolume: 22200, difficulty: 65, cpc: 48.90, competition: 'high', intent: 'transactional', opportunity: 88, targetRank: 1, priority: 'critical', category: 'Life Insurance' },
  
  // Commercial Intent Keywords
  { keyword: 'best health insurance', searchVolume: 18100, difficulty: 78, cpc: 45.67, competition: 'high', intent: 'commercial', opportunity: 82, targetRank: 1, priority: 'high', category: 'Health Insurance' },
  { keyword: 'best life insurance companies', searchVolume: 14800, difficulty: 71, cpc: 51.33, competition: 'high', intent: 'commercial', opportunity: 80, targetRank: 1, priority: 'high', category: 'Life Insurance' },
  { keyword: 'health insurance plans', searchVolume: 33100, difficulty: 69, cpc: 38.45, competition: 'high', intent: 'commercial', opportunity: 75, targetRank: 1, priority: 'high', category: 'Health Insurance' },
  { keyword: 'term life insurance', searchVolume: 27100, difficulty: 63, cpc: 43.28, competition: 'medium', intent: 'commercial', opportunity: 85, targetRank: 1, priority: 'high', category: 'Life Insurance' },
  
  // State-Specific High-Value Keywords
  { keyword: 'health insurance Florida', searchVolume: 5400, difficulty: 55, cpc: 41.20, competition: 'medium', intent: 'commercial', opportunity: 92, targetRank: 1, priority: 'critical', category: 'Health Insurance', state: 'FL' },
  { keyword: 'health insurance Michigan', searchVolume: 4400, difficulty: 52, cpc: 39.80, competition: 'medium', intent: 'commercial', opportunity: 90, targetRank: 1, priority: 'critical', category: 'Health Insurance', state: 'MI' },
  { keyword: 'health insurance North Carolina', searchVolume: 3600, difficulty: 48, cpc: 37.90, competition: 'medium', intent: 'commercial', opportunity: 88, targetRank: 1, priority: 'critical', category: 'Health Insurance', state: 'NC' },
  
  // Specialty Insurance Keywords
  { keyword: 'indexed universal life', searchVolume: 2900, difficulty: 45, cpc: 67.50, competition: 'medium', intent: 'commercial', opportunity: 95, targetRank: 1, priority: 'critical', category: 'IUL' },
  { keyword: 'IUL insurance', searchVolume: 1900, difficulty: 42, cpc: 72.30, competition: 'medium', intent: 'commercial', opportunity: 98, targetRank: 1, priority: 'critical', category: 'IUL' },
  { keyword: 'PPO health insurance', searchVolume: 8100, difficulty: 58, cpc: 44.70, competition: 'medium', intent: 'commercial', opportunity: 87, targetRank: 1, priority: 'high', category: 'PPO' },
  { keyword: 'short term health insurance', searchVolume: 12100, difficulty: 61, cpc: 35.80, competition: 'medium', intent: 'transactional', opportunity: 83, targetRank: 1, priority: 'high', category: 'Health Insurance' },
  
  // Long-tail Opportunities
  { keyword: 'health insurance for self employed', searchVolume: 3600, difficulty: 54, cpc: 46.20, competition: 'medium', intent: 'commercial', opportunity: 89, targetRank: 1, priority: 'high', category: 'Health Insurance' },
  { keyword: 'family health insurance plans', searchVolume: 2900, difficulty: 56, cpc: 42.10, competition: 'medium', intent: 'commercial', opportunity: 85, targetRank: 1, priority: 'high', category: 'Health Insurance' },
  { keyword: 'individual health insurance', searchVolume: 6600, difficulty: 62, cpc: 40.90, competition: 'medium', intent: 'commercial', opportunity: 80, targetRank: 1, priority: 'high', category: 'Health Insurance' },
  
  // City-Specific Opportunities (High Value, Lower Competition)
  { keyword: 'health insurance Miami', searchVolume: 1600, difficulty: 35, cpc: 43.50, competition: 'low', intent: 'commercial', opportunity: 95, targetRank: 1, priority: 'high', category: 'Health Insurance', state: 'FL', city: 'Miami' },
  { keyword: 'health insurance Tampa', searchVolume: 880, difficulty: 32, cpc: 41.20, competition: 'low', intent: 'commercial', opportunity: 92, targetRank: 1, priority: 'high', category: 'Health Insurance', state: 'FL', city: 'Tampa' },
  { keyword: 'health insurance Detroit', searchVolume: 720, difficulty: 34, cpc: 38.90, competition: 'low', intent: 'commercial', opportunity: 90, targetRank: 1, priority: 'medium', category: 'Health Insurance', state: 'MI', city: 'Detroit' },
  { keyword: 'health insurance Charlotte', searchVolume: 590, difficulty: 30, cpc: 39.70, competition: 'low', intent: 'commercial', opportunity: 88, targetRank: 1, priority: 'medium', category: 'Health Insurance', state: 'NC', city: 'Charlotte' }
];

// Major Competitors in Insurance Industry
export const COMPETITORS: CompetitorData[] = [
  {
    domain: 'ehealthinsurance.com',
    name: 'eHealth',
    authorityScore: 78,
    organicKeywords: 284750,
    organicTraffic: 2100000,
    paidKeywords: 12650,
    paidTraffic: 890000,
    topKeywords: [
      { keyword: 'health insurance', searchVolume: 201000, difficulty: 88, cpc: 43.20, competition: 'high', intent: 'commercial', opportunity: 60, targetRank: 1, priority: 'critical', category: 'Health Insurance' },
      { keyword: 'individual health insurance', searchVolume: 6600, difficulty: 62, cpc: 40.90, competition: 'medium', intent: 'commercial', opportunity: 40, targetRank: 1, priority: 'high', category: 'Health Insurance' }
    ],
    gapKeywords: [
      { keyword: 'IUL insurance benefits', searchVolume: 480, difficulty: 35, cpc: 68.50, competition: 'low', intent: 'informational', opportunity: 95, targetRank: 1, priority: 'high', category: 'IUL' }
    ],
    strengths: ['Large traffic volume', 'Strong brand recognition', 'Comprehensive health insurance focus'],
    weaknesses: ['Limited life insurance focus', 'No IUL specialization', 'Weak local SEO']
  },
  {
    domain: 'healthinsurance.com',
    name: 'HealthInsurance.com',
    authorityScore: 65,
    organicKeywords: 98450,
    organicTraffic: 1200000,
    paidKeywords: 8750,
    paidTraffic: 450000,
    topKeywords: [
      { keyword: 'health insurance plans', searchVolume: 33100, difficulty: 69, cpc: 38.45, competition: 'high', intent: 'commercial', opportunity: 45, targetRank: 1, priority: 'high', category: 'Health Insurance' }
    ],
    gapKeywords: [
      { keyword: 'health insurance agents near me', searchVolume: 2400, difficulty: 42, cpc: 35.80, competition: 'medium', intent: 'commercial', opportunity: 88, targetRank: 1, priority: 'high', category: 'Health Insurance' }
    ],
    strengths: ['Health insurance domain authority', 'Good content strategy'],
    weaknesses: ['No life insurance focus', 'Limited state-specific content', 'No specialty insurance coverage']
  },
  {
    domain: 'policygenius.com',
    name: 'Policygenius',
    authorityScore: 72,
    organicKeywords: 156300,
    organicTraffic: 1800000,
    paidKeywords: 15200,
    paidTraffic: 1200000,
    topKeywords: [
      { keyword: 'life insurance', searchVolume: 135000, difficulty: 82, cpc: 48.60, competition: 'high', intent: 'commercial', opportunity: 35, targetRank: 1, priority: 'critical', category: 'Life Insurance' },
      { keyword: 'term life insurance', searchVolume: 27100, difficulty: 63, cpc: 43.28, competition: 'medium', intent: 'commercial', opportunity: 55, targetRank: 1, priority: 'high', category: 'Life Insurance' }
    ],
    gapKeywords: [
      { keyword: 'IUL vs 401k', searchVolume: 320, difficulty: 28, cpc: 75.20, competition: 'low', intent: 'informational', opportunity: 92, targetRank: 1, priority: 'high', category: 'IUL' }
    ],
    strengths: ['Multi-product platform', 'Strong life insurance presence', 'Good user experience'],
    weaknesses: ['Limited local SEO', 'No IUL specialization', 'Weak state-specific content']
  }
];

// Keyword Gap Analysis Function
export function analyzeKeywordGaps(ourKeywords: KeywordData[], competitorKeywords: KeywordData[]): KeywordData[] {
  const ourKeywordSet = new Set(ourKeywords.map(k => k.keyword.toLowerCase()));
  
  return competitorKeywords.filter(keyword => 
    !ourKeywordSet.has(keyword.keyword.toLowerCase()) &&
    keyword.opportunity >= 70 &&
    keyword.difficulty <= 60
  ).sort((a, b) => b.opportunity - a.opportunity);
}

// Content Gap Analysis
export interface ContentGap {
  topic: string;
  keywords: KeywordData[];
  contentType: 'blog' | 'landing' | 'guide' | 'comparison' | 'calculator';
  priority: 'low' | 'medium' | 'high' | 'critical';
  estimatedTraffic: number;
  competitorCoverage: number; // Percentage of competitors covering this topic
}

export const CONTENT_GAPS: ContentGap[] = [
  {
    topic: 'IUL vs Traditional Retirement Accounts',
    keywords: [
      { keyword: 'IUL vs 401k', searchVolume: 320, difficulty: 28, cpc: 75.20, competition: 'low', intent: 'informational', opportunity: 92, targetRank: 1, priority: 'high', category: 'IUL' },
      { keyword: 'IUL vs Roth IRA', searchVolume: 210, difficulty: 25, cpc: 68.90, competition: 'low', intent: 'informational', opportunity: 89, targetRank: 1, priority: 'medium', category: 'IUL' }
    ],
    contentType: 'comparison',
    priority: 'critical',
    estimatedTraffic: 850,
    competitorCoverage: 15
  },
  {
    topic: 'State-Specific Insurance Regulations',
    keywords: [
      { keyword: 'Florida insurance laws', searchVolume: 480, difficulty: 32, cpc: 28.50, competition: 'low', intent: 'informational', opportunity: 85, targetRank: 1, priority: 'medium', category: 'Legal', state: 'FL' },
      { keyword: 'Michigan insurance requirements', searchVolume: 390, difficulty: 30, cpc: 25.80, competition: 'low', intent: 'informational', opportunity: 82, targetRank: 1, priority: 'medium', category: 'Legal', state: 'MI' }
    ],
    contentType: 'guide',
    priority: 'high',
    estimatedTraffic: 1200,
    competitorCoverage: 25
  },
  {
    topic: 'Insurance Calculators and Tools',
    keywords: [
      { keyword: 'life insurance calculator', searchVolume: 8100, difficulty: 55, cpc: 41.70, competition: 'medium', intent: 'commercial', opportunity: 78, targetRank: 1, priority: 'high', category: 'Life Insurance' },
      { keyword: 'health insurance calculator', searchVolume: 2900, difficulty: 48, cpc: 36.20, competition: 'medium', intent: 'commercial', opportunity: 75, targetRank: 1, priority: 'high', category: 'Health Insurance' }
    ],
    contentType: 'calculator',
    priority: 'critical',
    estimatedTraffic: 2500,
    competitorCoverage: 40
  }
];

// SEO Opportunity Scoring
export function calculateSEOScore(keyword: KeywordData): number {
  const volumeScore = Math.min(keyword.searchVolume / 1000, 50); // Max 50 points
  const difficultyScore = (100 - keyword.difficulty) * 0.3; // Max 30 points
  const cpcScore = Math.min(keyword.cpc * 0.5, 20); // Max 20 points (high CPC = high value)
  
  return Math.round(volumeScore + difficultyScore + cpcScore);
}

// Competitive Intelligence Report Generator
export function generateCompetitiveReport(): {
  topOpportunities: KeywordData[];
  contentGaps: ContentGap[];
  competitorWeaknesses: string[];
  actionItems: string[];
} {
  const topOpportunities = PRIORITY_KEYWORDS
    .filter(k => k.opportunity >= 85)
    .sort((a, b) => b.opportunity - a.opportunity)
    .slice(0, 10);

  const competitorWeaknesses = [
    'Limited IUL specialization across all major competitors',
    'Weak local SEO for state-specific searches',
    'Insufficient coverage of comparison content (IUL vs 401k, etc.)',
    'Poor mobile optimization for insurance calculators',
    'Limited long-tail keyword targeting',
    'Weak content depth for technical insurance topics',
    'Insufficient FAQ coverage for local regulations',
    'Poor conversion optimization on landing pages'
  ];

  const actionItems = [
    'Target IUL-related keywords immediately (low competition, high value)',
    'Create state-specific landing pages for FL, MI, NC',
    'Develop insurance comparison tools and calculators',
    'Build comprehensive FAQ sections for each insurance type',
    'Optimize for voice search queries ("best health insurance near me")',
    'Create video content for complex insurance topics',
    'Implement local schema markup for all state pages',
    'Build topic clusters around pillar content',
    'Develop partnerships for local citations and backlinks',
    'Create seasonal content around open enrollment periods'
  ];

  return {
    topOpportunities,
    contentGaps: CONTENT_GAPS,
    competitorWeaknesses,
    actionItems
  };
}

// Keyword Tracking & Reporting
export interface RankingReport {
  keyword: string;
  currentRank: number;
  previousRank: number;
  change: number;
  url: string;
  traffic: number;
  impressions: number;
  clicks: number;
  ctr: number;
  avgPosition: number;
}

export function generateRankingReport(keywords: KeywordData[]): RankingReport[] {
  // This would integrate with Google Search Console API in production
  return keywords.map(keyword => ({
    keyword: keyword.keyword,
    currentRank: keyword.currentRank || 0,
    previousRank: (keyword.currentRank || 0) + Math.floor(Math.random() * 5 - 2),
    change: Math.floor(Math.random() * 10 - 5),
    url: `https://www.bradfordinformedguidance.com/keywords/${keyword.keyword.replace(/\s+/g, '-').toLowerCase()}`,
    traffic: Math.floor(keyword.searchVolume * 0.1 * Math.random()),
    impressions: Math.floor(keyword.searchVolume * 0.3),
    clicks: Math.floor(keyword.searchVolume * 0.03),
    ctr: 3.2 + Math.random() * 2,
    avgPosition: (keyword.currentRank || 15) + Math.random() * 3
  }));
}

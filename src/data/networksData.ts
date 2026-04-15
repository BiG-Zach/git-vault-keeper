export interface Network {
  id: number;
  name: string;
  description: string;
  highlights: string[];
  coverageArea: string;
  popularFor: string;
  logoSrc: string;
  lookupUrl: string;
  providerCount: string;
  badge?: string;
}

export const NETWORKS: Network[] = [
  {
    id: 1,
    name: "MultiPlan PPO",
    logoSrc: "/logos/carriers/multiplan.webp",
    description: "America's largest independent PPO network. Access top-tier specialists and hospitals in all 50 states without a referral.",
    highlights: ["1.4M+ in-network providers","No referrals required","Out-of-state coverage included","Emergency care anywhere in the US"],
    providerCount: "1.4M+ Providers",
    coverageArea: "All 50 States",
    popularFor: "Multi-state families",
    lookupUrl: "https://www.multiplan.com/webcenter/portal/ProviderSearch"
  },
  {
    id: 2,
    name: "First Health PPO",
    logoSrc: "/logos/carriers/firsthealth.webp",
    description: "One of the nation's most established PPO networks. Deep hospital relationships and strong cost-containment for self-funded plans.",
    highlights: ["1M+ in-network providers","Strong hospital agreements","Cost-containment focus","Available in all 50 states"],
    providerCount: "1M+ Providers",
    coverageArea: "All 50 States",
    popularFor: "Employer and individual plans",
    lookupUrl: "https://www.firsthealth.com/member/find-care"
  },
  {
    id: 3,
    name: "UnitedHealthcare Network",
    logoSrc: "/logos/carriers/unitedhealthcare.webp",
    description: "The premier national PPO network backed by UnitedHealthcare's market-leading infrastructure and provider relationships.",
    highlights: ["900K+ physicians nationwide","6,000+ hospitals in-network","Virtual care included","Best-in-class claims processing"],
    providerCount: "900K+ Physicians",
    coverageArea: "All 50 States",
    popularFor: "Comprehensive PPO coverage",
    lookupUrl: "https://www.uhc.com/find-a-doctor",
    badge: "PREMIER"
  },
  {
    id: 4,
    name: "Aetna Open Choice PPO",
    logoSrc: "/logos/carriers/aetna.webp",
    description: "Aetna's flagship PPO with broad national access and strong cost-sharing. Excellent for self-employed individuals and families.",
    highlights: ["1.2M+ in-network providers","No primary care referrals","Strong ACA and private plan options","Integrated pharmacy and behavioral health"],
    providerCount: "1.2M+ Providers",
    coverageArea: "All 50 States",
    popularFor: "Self-employed and ACA enrollees",
    lookupUrl: "https://www.aetna.com/individuals-families/find-a-doctor.html"
  },
  {
    id: 5,
    name: "Cigna PPO",
    logoSrc: "/logos/carriers/cigna.webp",
    description: "Global PPO access with industry-leading wellness programs and out-of-country coverage. Ideal for frequent travelers and remote workers.",
    highlights: ["1.5M+ access points globally","Out-of-country emergency coverage","Incentivized wellness programs","Telehealth included on all plans"],
    providerCount: "1.5M+ Global Providers",
    coverageArea: "Worldwide",
    popularFor: "Travelers and remote workers",
    lookupUrl: "https://hcpdirectory.cigna.com/web/public/consumer/directory/search"
  }
];
export interface StateMetadata {
  code: string;
  name: string;
  available?: boolean;
  hero: {
    title: string;
    subtitle: string;
    imageUrl: string;
  };
  intro: {
    title: string;
    paragraphs: string[];
  };
  services: Array<{
    title: string;
    description: string;
  }>;
  // Add other content sections as needed
}

export const stateMetadataMap: Record<string, StateMetadata> = {
  fl: {
    code: 'fl',
    name: 'Florida',
    available: true,
    hero: {
      title: 'Florida Health & Life Insurance Guidance',
      subtitle: 'Expert advice and top-rated PPO plans for individuals, families, and small businesses across the Sunshine State.',
      imageUrl: '/images/states/fl.webp',
    },
    intro: {
      title: 'Navigating Insurance in Florida',
      paragraphs: [
        "Florida's vibrant communities and dynamic economy present unique challenges and opportunities for securing the right insurance. From navigating hurricane season to understanding the diverse healthcare networks in cities like Tampa, Miami, and Orlando, having a local expert is crucial.",
        "I specialize in medically underwritten PPO plans that offer nationwide coverage, ensuring you have access to the best doctors and hospitals whether you're at home or traveling. My goal is to find you affordable, high-quality coverage that provides true peace of mind.",
      ],
    },
    services: [
      {
        title: 'Individual & Family Health Plans',
        description: 'Custom PPO plans that fit your family’s health needs and budget, with access to A+ rated carriers.',
      },
      {
        title: 'Life Insurance Solutions',
        description: 'Term, Whole Life, and IUL policies designed to protect your family’s financial future.',
      },
      {
        title: 'Small Business Group Plans',
        description: 'Affordable and flexible group health insurance options to attract and retain top talent in Florida.',
      },
    ],
  },
  mi: {
    code: 'mi',
    name: 'Michigan',
    available: true,
    hero: {
      title: 'Michigan Health & Life Insurance Solutions',
      subtitle: 'Personalized guidance to help Michiganders find premium PPO coverage from leading national carriers.',
      imageUrl: '/images/states/mi.webp',
    },
    intro: {
      title: 'Your Trusted Insurance Partner in Michigan',
      paragraphs: [
        "From the Upper Peninsula to the Detroit metro area, Michigan residents deserve insurance that works as hard as they do. Understanding the local healthcare landscape and seasonal risks is key to finding a plan that truly covers you.",
        "I focus on providing Michigan families and entrepreneurs with access to top-tier, medically underwritten PPO plans. These plans offer the freedom to see any doctor without a referral and provide robust nationwide coverage.",
      ],
    },
    services: [
      {
        title: 'Comprehensive Health Coverage',
        description: 'Find the perfect PPO plan with strong networks across Michigan and the entire country.',
      },
      {
        title: 'Family-First Life Insurance',
        description: 'Protect your loved ones with tailored life insurance policies that provide a lasting financial safety net.',
      },
      {
        title: 'Self-Employed & Business Owner Plans',
        description: 'Specialized insurance strategies for entrepreneurs and small business owners in Michigan.',
      },
    ],
  },
  nc: {
    code: 'nc',
    name: 'North Carolina',
    available: true,
    hero: {
      title: 'North Carolina Health & Life Insurance Broker',
      subtitle: 'Connecting North Carolina residents with premier PPO plans for comprehensive, nationwide protection.',
      imageUrl: '/images/states/nc.webp',
    },
    intro: {
      title: 'Insurance Clarity for North Carolina',
      paragraphs: [
        "From the Blue Ridge Mountains to the Research Triangle, North Carolina is a state of growth and opportunity. Your insurance should support your ambitions, providing security and flexibility no matter what life brings.",
        "I help individuals and families in North Carolina cut through the confusion of the insurance market to find exceptional PPO plans. With a focus on A+ rated carriers and medically underwritten policies, I can secure you better benefits at a more affordable price.",
      ],
    },
    services: [
      {
        title: 'Flexible PPO Health Plans',
        description: 'Get access to the best doctors and hospitals in North Carolina and across the U.S. without network restrictions.',
      },
      {
        title: 'Strategic Life Insurance',
        description: 'Secure your legacy with life insurance products, including Term, Whole Life, and IUL policies.',
      },
      {
        title: 'Retirement & Medicare Guidance',
        description: 'Navigate your transition to retirement with expert advice on Medicare and supplemental plans.',
      },
    ],
  },
};

export const getStateMetadata = (code: string): StateMetadata | undefined => {
  return stateMetadataMap[code.toLowerCase()];
};

export type StateCodeSlug = keyof typeof stateMetadataMap;
export const stateMetadata: Record<StateCodeSlug, StateMetadata> = stateMetadataMap;

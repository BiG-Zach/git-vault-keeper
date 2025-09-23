export interface KeywordData {
  slug: string;
  title: string;
  description: string;
  h1: string;
  content: string;
}

const keywords: KeywordData[] = [
  {
    slug: 'health-insurance-tampa-fl',
    title: 'Best Health Insurance in Tampa, FL | Expert PPO Guidance',
    description: 'Looking for health insurance in Tampa, FL? We provide expert guidance on PPO plans for individuals and families. Compare top A+ rated carriers and find affordable coverage.',
    h1: 'Find the Best Health Insurance in Tampa, FL',
    content: 'Our licensed brokers specialize in helping Tampa residents find affordable, high-quality PPO health insurance plans. We compare options from the best carriers to ensure you get the coverage you deserve.'
  },
  {
    slug: 'life-insurance-miami-fl',
    title: 'Affordable Life Insurance in Miami, FL | Term & Whole Life',
    description: 'Secure your family\'s future with affordable life insurance in Miami, FL. We offer expert advice on Term, Whole Life, and IUL policies. Get a personalized quote today.',
    h1: 'Affordable Life Insurance in Miami, Florida',
    content: 'Protecting your loved ones is paramount. We help Miami families navigate their life insurance options to find a policy that provides a lasting financial safety net at a competitive price.'
  },
  {
    slug: 'ppo-plans-orlando-fl',
    title: 'Top PPO Plans in Orlando, FL | Nationwide Coverage',
    description: 'Searching for top PPO plans in Orlando, Florida? Get access to nationwide networks and A+ rated carriers with our expert, personalized guidance.',
    h1: 'Compare Top PPO Plans in Orlando',
    content: 'Enjoy the freedom to see any doctor with a top-tier PPO plan. We specialize in medically underwritten coverage that offers Orlando residents superior benefits and nationwide access.'
  }
];

const keywordMap = new Map<string, KeywordData>(
  keywords.map((k) => [k.slug, k])
);

export const getKeywordData = (slug: string): KeywordData | undefined => {
  return keywordMap.get(slug);
};

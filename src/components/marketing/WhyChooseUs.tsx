import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Users, Star, TrendingUp } from 'lucide-react';

const features = [
  {
    name: 'Licensed Expertise',
    description: 'As a multi-state licensed professional, I provide compliant, expert guidance tailored to your specific needs, ensuring you get the right coverage every time.',
    icon: Shield,
  },
  {
    name: 'Personalized Guidance',
    description: 'I take the time to understand your unique situation. You get a dedicated advocate who finds the perfect plan for your family, not a one-size-fits-all solution.',
    icon: Users,
  },
  {
    name: 'Top-Rated Carriers',
    description: 'Gain exclusive access to A+ rated insurance carriers and PPO networks that are often unavailable to the public, ensuring quality and reliability.',
    icon: Star,
  },
  {
    name: 'Long-Term Support',
    description: 'My commitment doesn’t end at enrollment. I am your lifelong partner for any questions, claims, or life changes, providing continuous support.',
    icon: TrendingUp,
  },
];

export default function WhyChooseUs() {
  const [selectedTab, setSelectedTab] = useState(features[0]);

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
            The Bradford Informed Guidance Difference
          </h2>
          <p className="text-lg text-slate-600">
            Tired of call centers and confusing advice? Experience a better way to get insurance.
          </p>
          <div className="mt-4 flex flex-col space-y-2">
            {features.map((item) => (
              <button
                key={item.name}
                className={`flex items-center gap-4 p-4 rounded-lg text-left transition-colors duration-200 ${
                  selectedTab.name === item.name
                    ? 'bg-emerald-50 text-emerald-800'
                    : 'bg-transparent text-slate-700 hover:bg-slate-100'
                }`}
                onClick={() => setSelectedTab(item)}
              >
                <item.icon className="w-6 h-6 flex-shrink-0" />
                <span className="font-semibold">{item.name}</span>
              </button>
            ))}
          </div>
        </div>
        <div className="relative h-80 lg:h-96">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedTab ? selectedTab.name : 'empty'}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="w-full h-full bg-slate-50 rounded-2xl p-8 flex flex-col justify-center items-center text-center shadow-lg border border-slate-200"
            >
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                <selectedTab.icon className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">{selectedTab.name}</h3>
              <p className="text-slate-600">{selectedTab.description}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

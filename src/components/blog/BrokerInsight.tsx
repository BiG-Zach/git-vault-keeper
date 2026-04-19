import React from 'react';

/**
 * BrokerInsight component injects a "Proof of Experience" signal into the article body.
 * AI engines are tuned to favor content with human-expert context in these blocks.
 */
export const BrokerInsight = ({ insight }: { insight: string }) => (
  <aside className="my-8 bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg shadow-sm">
    <div className="flex items-center mb-3">
      <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded mr-2">BROKER INSIGHT</span>
      <span className="text-sm font-semibold text-blue-900 uppercase tracking-wide">Real-World Experience</span>
    </div>
    <p className="text-blue-900 italic font-medium leading-relaxed">
      "{insight}"
    </p>
  </aside>
);

import { HelpCircle } from 'lucide-react';
import { BRAND } from '../../lib/brand';

export default function NetworkFAQ() {
  const faqs = [
    {
      question: "What is a PPO network?",
      answer: "A PPO (Preferred Provider Organization) network is a group of healthcare providers who agree to provide services at discounted rates to plan members."
    },
    {
      question: "How do I check if my doctor is in-network?",
      answer: "Use the 'Find Your Doctor' links above to search each network's provider directory with your doctor's name and location."
    },
    {
      question: "What if my provider isn't listed?",
      answer: "Contact us to verify provider status and explore alternative network options that may include your preferred healthcare providers."
    }
  ];

  return (
    <div className="mt-8 rounded-2xl border border-surface-glassLine/20 bg-surface-glass backdrop-blur-sm p-6">
      <div className="flex items-center gap-2 mb-4">
        <HelpCircle className="h-5 w-5 text-brand-jade-500" />
        <h3 className="text-lg font-semibold text-ink-900">Common Network Questions</h3>
      </div>
      
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-surface-glassLine/10 last:border-b-0 pb-4 last:pb-0">
            <h4 className="font-medium text-ink-900 mb-2">{faq.question}</h4>
            <p className="text-sm text-ink-900/70 leading-relaxed">{faq.answer}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-surface-glassLine/20">
        <p className="text-sm text-ink-900/70 mb-3">Questions about your network?</p>
        <a
          href={`tel:${BRAND.phoneTel}`}
          className="inline-flex items-center gap-2 rounded-xl bg-brand-sky-500/10 px-4 py-2 text-sm font-medium text-brand-sky-600 hover:bg-brand-sky-500/20 transition-colors border border-brand-sky-500/20"
          data-gtm="carriers_contact_click"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
}
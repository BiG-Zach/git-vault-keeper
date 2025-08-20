import { HelpCircle } from 'lucide-react';
import { BRAND } from '../../lib/brand';

export default function NetworkFAQ() {
  const faqs = [
    {
      question: "What is a PPO network and how does it work?",
      answer: "A PPO (Preferred Provider Organization) network is a group of healthcare providers who agree to provide services at discounted rates to plan members. You can visit any provider in-network without referrals and receive maximum benefits. Our PPO networks serve Florida, Michigan, and North Carolina with extensive provider options."
    },
    {
      question: "Which PPO network is best in Florida, Michigan, or North Carolina?",
      answer: "The best network depends on your specific needs and preferred doctors. UnitedHealthcare offers the largest network with 1.3+ million providers, while Aetna provides excellent comprehensive coverage. Our licensed brokers help you compare options based on your location in FL, MI, or NC and healthcare needs."
    },
    {
      question: "How do I check if my doctor is in-network?",
      answer: "Use our provider lookup tools above for each network, or contact us for personalized assistance. We verify coverage before you enroll to ensure your preferred providers are included. Each network offers comprehensive coverage across Florida, Michigan, and North Carolina."
    },
    {
      question: "Can I get next-day approval for PPO insurance?",
      answer: "Yes, we offer next-day approval for qualified applicants through our trusted carrier relationships. Our streamlined process and strong partnerships with A+ rated carriers enable fast coverage decisions for health and life insurance plans in FL, MI, and NC."
    },
    {
      question: "What states is Bradford Informed Guidance licensed in?",
      answer: "We are currently licensed and bonded in Florida, Michigan, and North Carolina, with plans to expand nationwide. Our expertise in these markets ensures you receive knowledgeable, compliant service with 20+ years combined experience in insurance brokerage."
    }
  ];

  return (
    <div className="mt-8 rounded-2xl border border-surface-glassLine/20 bg-surface-glass backdrop-blur-sm p-6">
      <div className="flex items-center gap-2 mb-4">
        <HelpCircle className="h-5 w-5 text-slate-600" />
        <h3 className="text-lg font-semibold text-slate-900">Frequently Asked Questions About PPO Insurance Networks</h3>
      </div>
      
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-slate-200 last:border-b-0 pb-4 last:pb-0">
            <h4 className="font-medium text-slate-900 mb-2">{faq.question}</h4>
            <p className="text-sm text-slate-700 leading-relaxed">{faq.answer}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-slate-200">
        <p className="text-sm text-slate-600 mb-3">Questions about your network?</p>
        <a
          href={`tel:${BRAND.phoneTel}`}
          className="inline-flex items-center gap-2 rounded-xl bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-200 transition-colors border border-slate-300"
          data-gtm="carriers_contact_click"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
}
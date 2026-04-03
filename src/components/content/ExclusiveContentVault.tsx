import React, { useState } from 'react';
import { Lock, Crown, Download, Calendar, Mail, Star, ChevronRight, FileText, TrendingUp } from 'lucide-react';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  type: 'report' | 'guide' | 'tool' | 'analysis';
  isPremium: boolean;
  downloadCount?: number;
  lastUpdated?: string;
  previewAvailable?: boolean;
}

const exclusiveContent: ContentItem[] = [
  {
    id: '1',
    title: 'Monthly Market Report: Florida Insurance Trends',
    description: 'Exclusive analysis of rate changes, new products, and market shifts affecting Florida residents.',
    type: 'report',
    isPremium: true,
    downloadCount: 1247,
    lastUpdated: 'January 2024'
  },
  {
    id: '2',
    title: 'Carrier Rate Sheets: Q1 2024 Comparison',
    description: 'Internal rate sheets from 10 carriers and 6 PPO networks with exclusive broker pricing insights.',
    type: 'analysis',
    isPremium: true,
    downloadCount: 892,
    lastUpdated: 'This week'
  },
  {
    id: '3',
    title: 'The Ultimate Life Insurance Buying Guide',
    description: 'A comprehensive 50-page guide covering everything from needs analysis to policy optimization.',
    type: 'guide',
    isPremium: false,
    downloadCount: 3456,
    lastUpdated: 'December 2023',
    previewAvailable: true
  },
  {
    id: '4',
    title: 'Health Insurance Tax Strategy Playbook',
    description: 'Advanced strategies for maximizing tax benefits through health insurance planning.',
    type: 'guide',
    isPremium: true,
    downloadCount: 567,
    lastUpdated: 'January 2024'
  },
  {
    id: '5',
    title: 'New Product Alert: Accelerated Underwriting Guide',
    description: 'Early access to our guide on the latest accelerated underwriting life insurance products.',
    type: 'guide',
    isPremium: true,
    downloadCount: 234,
    lastUpdated: 'This month'
  },
  {
    id: '6',
    title: 'Interactive Medicare Supplement Comparison',
    description: 'Premium tool for comparing Medigap plans across all carriers in your area.',
    type: 'tool',
    isPremium: true,
    downloadCount: 678,
    lastUpdated: 'Ongoing updates'
  }
];

export default function ExclusiveContentVault() {
  const [email, setEmail] = useState('');
  const [subscribedToNewsletter, setSubscribedToNewsletter] = useState(false);
  const [accessGranted, setAccessGranted] = useState(false);

  const handleNewsletterSignup = () => {
    if (email) {
      setSubscribedToNewsletter(true);
      setTimeout(() => setAccessGranted(true), 1000);
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'report': return <TrendingUp className="w-5 h-5" />;
      case 'guide': return <FileText className="w-5 h-5" />;
      case 'tool': return <Star className="w-5 h-5" />;
      case 'analysis': return <TrendingUp className="w-5 h-5" />;
      default: return <FileText className="w-5 h-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'report': return 'text-blue-600 bg-blue-100';
      case 'guide': return 'text-emerald-600 bg-emerald-100';
      case 'tool': return 'text-purple-600 bg-purple-100';
      case 'analysis': return 'text-amber-600 bg-amber-100';
      default: return 'text-slate-600 bg-slate-100';
    }
  };

  return (
    <section className="section bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="container-default">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Crown className="w-4 h-4" />
            Exclusive Content Vault
          </div>
          <h2 className="h2 mb-4 text-white">Premium Subscriber Resources</h2>
          <p className="lead text-slate-300 max-w-3xl mx-auto">
            Access exclusive market reports, carrier rate sheets, and advanced guides not available anywhere else
          </p>
        </div>

        {!subscribedToNewsletter ? (
          <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center border border-white/20">
            <Lock className="w-16 h-16 text-amber-400 mx-auto mb-6" />
            <h3 className="text-2xl font-bold mb-4">Unlock Premium Content</h3>
            <p className="text-slate-300 mb-6">
              Join our exclusive newsletter to access premium market reports, carrier insights, and advanced insurance strategies.
            </p>
            
            <div className="flex gap-3 max-w-md mx-auto mb-6">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your professional email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
              />
              <button
                onClick={handleNewsletterSignup}
                disabled={!email}
                className="bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 px-6 py-3 rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transition-all duration-300 flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Access
              </button>
            </div>
            
            <div className="text-sm text-slate-400">
              ✓ Weekly market insights • ✓ Exclusive rate updates • ✓ Advanced strategies
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            {!accessGranted ? (
              <div className="text-center bg-emerald-500/20 backdrop-blur-sm rounded-xl p-8 border border-emerald-500/30">
                <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Check Your Email</h3>
                <p className="text-slate-300">
                  We've sent you a confirmation email with access instructions to unlock premium content.
                </p>
              </div>
            ) : (
              <>
                <div className="text-center bg-emerald-500/20 backdrop-blur-sm rounded-xl p-6 border border-emerald-500/30">
                  <h3 className="text-xl font-bold mb-2 text-emerald-400">🎉 Welcome to Premium Access!</h3>
                  <p className="text-slate-300">
                    You now have access to exclusive content and market insights.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {exclusiveContent.map((item) => (
                    <div
                      key={item.id}
                      className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 hover:bg-white/20 hover:scale-105 ${
                        item.isPremium ? 'border-amber-500/30' : 'border-white/20'
                      }`}
                    >
                      {item.isPremium && (
                        <div className="flex items-center gap-2 text-amber-400 text-sm font-medium mb-3">
                          <Crown className="w-4 h-4" />
                          Premium Only
                        </div>
                      )}
                      
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${getTypeColor(item.type)}`}>
                        {getTypeIcon(item.type)}
                      </div>
                      
                      <h3 className="text-lg font-semibold mb-3 text-white">{item.title}</h3>
                      <p className="text-slate-300 text-sm mb-4 leading-relaxed">{item.description}</p>
                      
                      <div className="flex items-center justify-between text-xs text-slate-400 mb-4">
                        <span>{item.downloadCount?.toLocaleString()} downloads</span>
                        <span>Updated {item.lastUpdated}</span>
                      </div>
                      
                      <div className="flex gap-2">
                        {item.previewAvailable && (
                          <button className="flex-1 bg-white/20 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-white/30 transition-colors">
                            Preview
                          </button>
                        )}
                        <button className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
                          item.isPremium && !accessGranted
                            ? 'bg-slate-700 text-slate-400 cursor-not-allowed'
                            : 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white hover:shadow-lg'
                        }`}>
                          <Download className="w-4 h-4" />
                          Download
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-emerald-500/20 to-blue-500/20 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center">
                  <h3 className="text-xl font-bold mb-4">Want Personalized Insights?</h3>
                  <p className="text-slate-300 mb-6">
                    Schedule a consultation to get customized recommendations based on your specific situation.
                  </p>
                  <a
                    href="https://calendly.com/bradfordinformedguidance"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Calendar className="w-4 h-4" />
                    Schedule Consultation
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
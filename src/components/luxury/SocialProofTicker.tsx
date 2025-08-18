import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, DollarSign, Clock, Users } from 'lucide-react';

interface SocialProofItem {
  type: 'signup' | 'savings' | 'quote' | 'enrollment';
  name: string;
  location: string;
  action: string;
  value?: string;
  timeAgo: string;
}

const SocialProofTicker = () => {
  const [currentProof, setCurrentProof] = useState(0);

  const proofItems: SocialProofItem[] = [
    {
      type: 'savings',
      name: 'Sarah M.',
      location: 'Tampa, FL',
      action: 'just saved',
      value: '$210/month',
      timeAgo: '2 minutes ago'
    },
    {
      type: 'enrollment',
      name: 'Mike T.',
      location: 'Detroit, MI',
      action: 'enrolled in coverage',
      timeAgo: '5 minutes ago'
    },
    {
      type: 'quote',
      name: 'Jennifer C.',
      location: 'Raleigh, NC',
      action: 'received their quote',
      timeAgo: '7 minutes ago'
    },
    {
      type: 'savings',
      name: 'Robert W.',
      location: 'Orlando, FL',
      action: 'just saved',
      value: '$185/month',
      timeAgo: '12 minutes ago'
    },
    {
      type: 'signup',
      name: 'Lisa R.',
      location: 'Miami, FL',
      action: 'joined the waitlist',
      timeAgo: '15 minutes ago'
    },
    {
      type: 'enrollment',
      name: 'David H.',
      location: 'Grand Rapids, MI',
      action: 'secured life coverage',
      timeAgo: '18 minutes ago'
    },
    {
      type: 'savings',
      name: 'Maria G.',
      location: 'Charlotte, NC',
      action: 'just saved',
      value: '$156/month',
      timeAgo: '22 minutes ago'
    },
    {
      type: 'quote',
      name: 'James P.',
      location: 'Sarasota, FL',
      action: 'got their quote in 45 mins',
      timeAgo: '25 minutes ago'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProof((prev) => (prev + 1) % proofItems.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [proofItems.length]);

  const getIcon = (type: string) => {
    switch (type) {
      case 'savings':
        return DollarSign;
      case 'quote':
        return Clock;
      case 'enrollment':
        return Users;
      default:
        return MapPin;
    }
  };

  const getBackgroundColor = (type: string) => {
    switch (type) {
      case 'savings':
        return 'from-emerald-500/20 to-emerald-600/20 border-emerald-500/30';
      case 'quote':
        return 'from-blue-500/20 to-blue-600/20 border-blue-500/30';
      case 'enrollment':
        return 'from-purple-500/20 to-purple-600/20 border-purple-500/30';
      default:
        return 'from-slate-500/20 to-slate-600/20 border-slate-500/30';
    }
  };

  const getTextColor = (type: string) => {
    switch (type) {
      case 'savings':
        return 'text-emerald-300';
      case 'quote':
        return 'text-blue-300';
      case 'enrollment':
        return 'text-purple-300';
      default:
        return 'text-slate-300';
    }
  };

  const current = proofItems[currentProof];
  const Icon = getIcon(current.type);

  return (
    <div className="fixed bottom-6 left-6 z-50 hidden lg:block">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentProof}
          initial={{ opacity: 0, x: -100, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: -100, scale: 0.8 }}
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 25,
            duration: 0.5 
          }}
          className={`bg-gradient-to-r ${getBackgroundColor(current.type)} backdrop-blur-md rounded-xl border p-4 max-w-sm shadow-2xl`}
        >
          <div className="flex items-start gap-3">
            {/* Icon */}
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                <Icon className={`w-5 h-5 ${getTextColor(current.type)}`} />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-semibold text-white text-sm">
                  {current.name}
                </span>
                <span className="text-xs text-white/60">
                  {current.timeAgo}
                </span>
              </div>
              
              <div className="text-sm text-white/90 mb-1">
                {current.action}
                {current.value && (
                  <span className={`font-bold ml-1 ${getTextColor(current.type)}`}>
                    {current.value}
                  </span>
                )}
              </div>
              
              <div className="flex items-center gap-1 text-xs text-white/70">
                <MapPin className="w-3 h-3" />
                <span>{current.location}</span>
              </div>
            </div>

            {/* Pulse indicator */}
            <div className="flex-shrink-0">
              <div className="relative">
                <div className={`w-2 h-2 rounded-full ${getTextColor(current.type).replace('text-', 'bg-')}`} />
                <div className={`absolute inset-0 w-2 h-2 rounded-full ${getTextColor(current.type).replace('text-', 'bg-')} animate-ping opacity-75`} />
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default SocialProofTicker;
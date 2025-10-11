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
  const [isVisible, setIsVisible] = useState(false);

  const proofItems: SocialProofItem[] = [
    {
      type: 'savings',
      name: 'Sarah M.',
      location: 'Tampa, FL',
      action: 'saved on their health plan',
      value: '$142/month',
      timeAgo: '23 minutes ago'
    },
    {
      type: 'enrollment',
      name: 'Michael T.',
      location: 'Detroit, MI', 
      action: 'enrolled in PPO coverage',
      timeAgo: '1 hour ago'
    },
    {
      type: 'quote',
      name: 'Jennifer C.',
      location: 'Charlotte, NC',
      action: 'received their personalized quote',
      timeAgo: '2 hours ago'
    },
    {
      type: 'savings',
      name: 'Robert W.',
      location: 'Orlando, FL',
      action: 'reduced their premium by',
      value: '$89/month',
      timeAgo: '3 hours ago'
    },
    {
      type: 'enrollment', 
      name: 'Lisa R.',
      location: 'Miami, FL',
      action: 'secured life insurance',
      timeAgo: '4 hours ago'
    },
    {
      type: 'enrollment',
      name: 'David H.',
      location: 'Grand Rapids, MI',
      action: 'completed their application',
      timeAgo: '5 hours ago'
    },
    {
      type: 'savings',
      name: 'Maria G.',
      location: 'Raleigh, NC',
      action: 'lowered their costs by',
      value: '$67/month',
      timeAgo: '6 hours ago'
    },
    {
      type: 'quote',
      name: 'James P.',
      location: 'St. Petersburg, FL',
      action: 'compared plans and chose coverage',
      timeAgo: '7 hours ago'
    },
    {
      type: 'enrollment',
      name: 'Amanda K.',
      location: 'Ann Arbor, MI',
      action: 'enrolled their family',
      timeAgo: '8 hours ago'
    },
    {
      type: 'savings',
      name: 'Carlos R.',
      location: 'Jacksonville, FL',
      action: 'saved on prescription coverage',
      value: '$34/month',
      timeAgo: '9 hours ago'
    }
  ];

  useEffect(() => {
    const getRandomDisplayTime = () => Math.floor(Math.random() * (10000 - 5000 + 1)) + 5000; // 5-10 seconds
    const getRandomWaitTime = () => Math.floor(Math.random() * (60000 - 45000 + 1)) + 45000; // 45-60 seconds
    
    const scheduleNext = () => {
      // Show the notification
      setIsVisible(true);
      
      // Hide it after 5-10 seconds
      const hideTimeout = setTimeout(() => {
        setIsVisible(false);
        
        // Wait 45-60 seconds before showing the next one
        const nextTimeout = setTimeout(() => {
          setCurrentProof((prev) => (prev + 1) % proofItems.length);
          scheduleNext(); // Schedule the next cycle
        }, getRandomWaitTime());
        
        return nextTimeout;
      }, getRandomDisplayTime());
      
      return hideTimeout;
    };

    // Start the first notification after a brief delay
    const initialTimeout = setTimeout(() => {
      scheduleNext();
    }, 2000);
    
    return () => clearTimeout(initialTimeout);
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

  const renderIcon = (type: string, textColor: string) => {
    const IconComponent = getIcon(type);
    return <IconComponent className={`w-5 h-5 ${textColor}`} />;
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 hidden lg:block">
      <AnimatePresence mode="wait">
        {isVisible && (
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
                  {renderIcon(current.type, getTextColor(current.type))}
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
        )}
      </AnimatePresence>
    </div>
  );
};

export default SocialProofTicker;
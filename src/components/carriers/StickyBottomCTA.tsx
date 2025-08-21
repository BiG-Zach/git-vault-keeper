import { useState, useEffect } from 'react';
import { Calendar, FileText } from 'lucide-react';
import { BRAND } from '../../lib/brand';

export default function StickyBottomCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 600);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-surface-glassLine/20 bg-surface-glass/95 backdrop-blur-md p-4 shadow-luxury">
      <div className="container mx-auto flex items-center justify-between gap-4">
        <div className="hidden sm:block">
          <p className="text-sm font-medium text-big-navy-500">Ready to confirm your network?</p>
          <p className="text-xs text-big-neutral-800/70">Get personalized guidance from Bradford</p>
        </div>
        
        <div className="flex items-center gap-3 flex-1 sm:flex-none">
          <a
            href={BRAND.phoneTel}
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 rounded-xl bg-big-navy-500 px-6 py-3 text-sm font-medium text-white hover:bg-big-orange-500 transition-colors focus:outline-none focus:ring-2 focus:ring-big-navy-500 focus:ring-offset-2"
            data-gtm="carriers_footer_cta"
            data-action="schedule"
          >
            <Calendar className="h-4 w-4" />
            Schedule Consultation
          </a>
          
          <a
            href="/quote"
            className="hidden sm:inline-flex items-center gap-2 rounded-xl border border-big-orange-500/30 bg-big-orange-500/10 px-4 py-3 text-sm font-medium text-big-orange-600 hover:bg-big-orange-500/20 transition-colors"
            data-gtm="carriers_footer_cta"
            data-action="quote"
          >
            <FileText className="h-4 w-4" />
            Get Quote
          </a>
        </div>
      </div>
    </div>
  );
}
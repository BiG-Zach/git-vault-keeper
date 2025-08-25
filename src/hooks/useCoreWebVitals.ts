import { useEffect, useState } from 'react';
import { webVitals, ImageOptimizer, FontOptimizer, ResourceHints } from '../utils/coreWebVitals';

interface WebVitalMetric {
  name: string;
  value: number;
  id: string;
  delta: number;
  rating: 'good' | 'needs-improvement' | 'poor';
}

interface UseCoreWebVitalsOptions {
  enableImageOptimization?: boolean;
  enableFontOptimization?: boolean;
  criticalImages?: string[];
  criticalFonts?: string[];
  preconnectDomains?: string[];
}

export const useCoreWebVitals = (options: UseCoreWebVitalsOptions = {}) => {
  const [metrics, setMetrics] = useState<Map<string, WebVitalMetric>>(new Map());
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize performance optimizations
    if (options.enableImageOptimization !== false) {
      // Preload critical images
      if (options.criticalImages) {
        ImageOptimizer.preloadCriticalImages(options.criticalImages);
      }
      
      // Set up lazy loading
      ImageOptimizer.lazyLoadImages();
    }

    if (options.enableFontOptimization !== false) {
      // Preload critical fonts
      if (options.criticalFonts) {
        FontOptimizer.preloadFonts(options.criticalFonts);
      }
      
      // Enable font-display: swap
      FontOptimizer.enableFontDisplay();
    }

    // Set up resource hints
    if (options.preconnectDomains) {
      ResourceHints.addPreconnect(options.preconnectDomains);
    }

    // Monitor metrics updates
    const checkMetrics = () => {
      const currentMetrics = webVitals.getMetrics();
      setMetrics(new Map(currentMetrics));
      setIsLoading(false);
    };

    // Check metrics periodically
    const interval = setInterval(checkMetrics, 1000);
    
    // Initial check
    setTimeout(checkMetrics, 100);

    // Cleanup
    return () => {
      clearInterval(interval);
    };
  }, [options]);

  const getMetricsByRating = () => {
    const good: WebVitalMetric[] = [];
    const needsImprovement: WebVitalMetric[] = [];
    const poor: WebVitalMetric[] = [];

    metrics.forEach((metric) => {
      switch (metric.rating) {
        case 'good':
          good.push(metric);
          break;
        case 'needs-improvement':
          needsImprovement.push(metric);
          break;
        case 'poor':
          poor.push(metric);
          break;
      }
    });

    return { good, needsImprovement, poor };
  };

  const getOverallScore = (): number => {
    if (metrics.size === 0) return 0;
    
    const { good, needsImprovement, poor } = getMetricsByRating();
    const total = metrics.size;
    
    return Math.round(
      (good.length * 100 + needsImprovement.length * 50 + poor.length * 0) / total
    );
  };

  const getCoreMetrics = () => {
    return {
      lcp: metrics.get('LCP'),
      fid: metrics.get('FID'),
      cls: metrics.get('CLS'),
      fcp: metrics.get('FCP'),
      ttfb: metrics.get('TTFB'),
      inp: metrics.get('INP')
    };
  };

  return {
    metrics,
    isLoading,
    getMetricsByRating,
    getOverallScore,
    getCoreMetrics,
    webVitals
  };
};

// Hook for image optimization
export const useImageOptimization = (images: string[] = []) => {
  useEffect(() => {
    if (images.length > 0) {
      ImageOptimizer.preloadCriticalImages(images);
    }
    
    // Set up lazy loading for any new images
    const observer = new MutationObserver(() => {
      ImageOptimizer.lazyLoadImages();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => observer.disconnect();
  }, [images]);
};

// Hook for font optimization
export const useFontOptimization = (fonts: string[] = []) => {
  useEffect(() => {
    if (fonts.length > 0) {
      FontOptimizer.preloadFonts(fonts);
    }
    
    FontOptimizer.enableFontDisplay();
  }, [fonts]);
};

// Hook for resource hints
export const useResourceHints = (
  preconnectUrls: string[] = [],
  dnsPrefetchDomains: string[] = []
) => {
  useEffect(() => {
    if (preconnectUrls.length > 0) {
      ResourceHints.addPreconnect(preconnectUrls);
    }
    
    if (dnsPrefetchDomains.length > 0) {
      ResourceHints.addDNSPrefetch(dnsPrefetchDomains);
    }
  }, [preconnectUrls, dnsPrefetchDomains]);
};
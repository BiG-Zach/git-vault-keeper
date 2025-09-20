// Core Web Vitals Optimization for SEO Domination
import { trackEvent } from './gtm';

interface WebVitalsConfig {
  enableReporting?: boolean;
  reportingEndpoint?: string;
  sampleRate?: number;
}

interface WebVitalMetric {
  name: string;
  value: number;
  id: string;
  delta: number;
  rating: 'good' | 'needs-improvement' | 'poor';
}

class CoreWebVitals {
  private config: WebVitalsConfig;
  private observer: PerformanceObserver | null = null;
  private metrics: Map<string, WebVitalMetric> = new Map();

  constructor(config: WebVitalsConfig = {}) {
    this.config = {
      enableReporting: true,
      sampleRate: 1,
      ...config
    };
    
    if (typeof window !== 'undefined') {
      this.initializeTracking();
    }
  }

  private initializeTracking() {
    // Track Largest Contentful Paint (LCP)
    this.trackLCP();
    
    // Track First Input Delay (FID)
    this.trackFID();
    
    // Track Cumulative Layout Shift (CLS)
    this.trackCLS();
    
    // Track First Contentful Paint (FCP)
    this.trackFCP();
    
    // Track Time to First Byte (TTFB)
    this.trackTTFB();
    
    // Track INP (Interaction to Next Paint) - New Core Web Vital
    this.trackINP();
  }

  private trackLCP() {
    if (!('PerformanceObserver' in window)) return;

    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1] as PerformanceEntry & { 
        startTime: number; 
        size: number; 
      };
      
      const metric: WebVitalMetric = {
        name: 'LCP',
        value: lastEntry.startTime,
        id: this.generateId(),
        delta: lastEntry.startTime,
        rating: this.getLCPRating(lastEntry.startTime)
      };
      
      this.metrics.set('LCP', metric);
      this.reportMetric(metric);
    });

    observer.observe({ entryTypes: ['largest-contentful-paint'] });
  }

  private trackFID() {
    if (!('PerformanceObserver' in window)) return;

    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries() as PerformanceEventTiming[];
      entries.forEach((entry) => {
        const metric: WebVitalMetric = {
          name: 'FID',
          value: entry.processingStart - entry.startTime,
          id: this.generateId(),
          delta: entry.processingStart - entry.startTime,
          rating: this.getFIDRating(entry.processingStart - entry.startTime)
        };
        
        this.metrics.set('FID', metric);
        this.reportMetric(metric);
      });
    });

    observer.observe({ entryTypes: ['first-input'] });
  }

  private trackCLS() {
    if (!('PerformanceObserver' in window)) return;

    let clsValue = 0;
    let sessionValue = 0;
    let sessionEntries: PerformanceEntry[] = [];

    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries() as (PerformanceEntry & { value: number; hadRecentInput: boolean })[];
      
      entries.forEach((entry) => {
        if (!entry.hadRecentInput) {
          const firstSessionEntry = sessionEntries[0];
          const lastSessionEntry = sessionEntries[sessionEntries.length - 1];

          if (sessionValue && 
              entry.startTime - lastSessionEntry.startTime < 1000 &&
              entry.startTime - firstSessionEntry.startTime < 5000) {
            sessionValue += entry.value;
            sessionEntries.push(entry);
          } else {
            sessionValue = entry.value;
            sessionEntries = [entry];
          }

          if (sessionValue > clsValue) {
            clsValue = sessionValue;
            
            const metric: WebVitalMetric = {
              name: 'CLS',
              value: clsValue,
              id: this.generateId(),
              delta: entry.value,
              rating: this.getCLSRating(clsValue)
            };
            
            this.metrics.set('CLS', metric);
            this.reportMetric(metric);
          }
        }
      });
    });

    observer.observe({ entryTypes: ['layout-shift'] });
  }

  private trackFCP() {
    if (!('PerformanceObserver' in window)) return;

    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.name === 'first-contentful-paint') {
          const metric: WebVitalMetric = {
            name: 'FCP',
            value: entry.startTime,
            id: this.generateId(),
            delta: entry.startTime,
            rating: this.getFCPRating(entry.startTime)
          };
          
          this.metrics.set('FCP', metric);
          this.reportMetric(metric);
        }
      });
    });

    observer.observe({ entryTypes: ['paint'] });
  }

  private trackTTFB() {
    if (!('PerformanceObserver' in window)) return;

    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries() as PerformanceNavigationTiming[];
      entries.forEach((entry) => {
        const ttfb = entry.responseStart - entry.requestStart;
        
        const metric: WebVitalMetric = {
          name: 'TTFB',
          value: ttfb,
          id: this.generateId(),
          delta: ttfb,
          rating: this.getTTFBRating(ttfb)
        };
        
        this.metrics.set('TTFB', metric);
        this.reportMetric(metric);
      });
    });

    observer.observe({ entryTypes: ['navigation'] });
  }

  private trackINP() {
    if (!('PerformanceObserver' in window)) return;

    let maxINP = 0;
    
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries() as PerformanceEventTiming[];
      entries.forEach((entry) => {
        const inp = entry.processingEnd - entry.startTime;
        
        if (inp > maxINP) {
          maxINP = inp;
          
          const metric: WebVitalMetric = {
            name: 'INP',
            value: inp,
            id: this.generateId(),
            delta: inp,
            rating: this.getINPRating(inp)
          };
          
          this.metrics.set('INP', metric);
          this.reportMetric(metric);
        }
      });
    });

    observer.observe({ entryTypes: ['event'] });
  }

  // Rating functions based on Google's thresholds
  private getLCPRating(value: number): 'good' | 'needs-improvement' | 'poor' {
    if (value <= 2500) return 'good';
    if (value <= 4000) return 'needs-improvement';
    return 'poor';
  }

  private getFIDRating(value: number): 'good' | 'needs-improvement' | 'poor' {
    if (value <= 100) return 'good';
    if (value <= 300) return 'needs-improvement';
    return 'poor';
  }

  private getCLSRating(value: number): 'good' | 'needs-improvement' | 'poor' {
    if (value <= 0.1) return 'good';
    if (value <= 0.25) return 'needs-improvement';
    return 'poor';
  }

  private getFCPRating(value: number): 'good' | 'needs-improvement' | 'poor' {
    if (value <= 1800) return 'good';
    if (value <= 3000) return 'needs-improvement';
    return 'poor';
  }

  private getTTFBRating(value: number): 'good' | 'needs-improvement' | 'poor' {
    if (value <= 800) return 'good';
    if (value <= 1800) return 'needs-improvement';
    return 'poor';
  }

  private getINPRating(value: number): 'good' | 'needs-improvement' | 'poor' {
    if (value <= 200) return 'good';
    if (value <= 500) return 'needs-improvement';
    return 'poor';
  }

  private generateId(): string {
    return `v3-${Date.now()}-${Math.floor(Math.random() * 1000000000)}`;
  }

  private reportMetric(metric: WebVitalMetric) {
    if (!this.config.enableReporting || Math.random() > (this.config.sampleRate || 1)) {
      return;
    }

    // Send to Google Analytics
    trackEvent({
      event: 'web_vitals',
      event_category: 'performance',
      event_action: metric.name,
      event_label: metric.rating,
      value: Math.round(metric.value),
      insurance_type: 'performance_tracking',
      page_type: 'core_web_vitals'
    });

    // Send to custom endpoint if configured
    if (this.config.reportingEndpoint) {
      fetch(this.config.reportingEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          metric,
          url: window.location.href,
          timestamp: Date.now(),
          userAgent: navigator.userAgent
        }),
      }).catch(console.error);
    }

    // Console logging for development
    if (process.env.NODE_ENV === 'development') {
      console.log(`[Core Web Vitals] ${metric.name}:`, {
        value: Math.round(metric.value),
        rating: metric.rating,
        delta: Math.round(metric.delta)
      });
    }
  }

  // Public methods for manual tracking
  public getMetrics(): Map<string, WebVitalMetric> {
    return new Map(this.metrics);
  }

  public getMetric(name: string): WebVitalMetric | undefined {
    return this.metrics.get(name);
  }

  public reportAllMetrics(): void {
    this.metrics.forEach(metric => this.reportMetric(metric));
  }
}

// Image optimization utilities
export class ImageOptimizer {
  static preloadCriticalImages(imageUrls: string[]): void {
    if (typeof window === 'undefined') return;

    imageUrls.forEach(url => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = url;
      document.head.appendChild(link);
    });
  }

  static lazyLoadImages(): void {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.src = img.dataset.src || '';
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      });
    });

    images.forEach(img => imageObserver.observe(img));
  }

  static generateResponsiveImageSizes(baseUrl: string): string[] {
    const sizes = [320, 640, 768, 1024, 1280, 1920];
    return sizes.map(size => `${baseUrl}?w=${size}&q=75&f=webp`);
  }
}

// Font optimization utilities
export class FontOptimizer {
  static preloadFonts(fontUrls: string[]): void {
    if (typeof window === 'undefined') return;

    fontUrls.forEach(url => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'font';
      link.type = 'font/woff2';
      link.crossOrigin = 'anonymous';
      link.href = url;
      document.head.appendChild(link);
    });
  }

  static enableFontDisplay(): void {
    if (typeof window === 'undefined' || typeof document === 'undefined') return;
    if (typeof CSSStyleSheet === 'undefined') return;

    const processedFontFamilies = new Set<string>();
    const pendingCrossOriginSheets: HTMLLinkElement[] = [];

    const normalizeFontFamily = (family: string): string => family.replace(/['"]/g, '').trim();

    const updateFontFaceRule = (rule: CSSFontFaceRule) => {
      const fontDisplay = rule.style.getPropertyValue('font-display').trim().toLowerCase();
      if (fontDisplay !== 'swap') {
        rule.style.setProperty('font-display', 'swap');
      }

      const family = rule.style.getPropertyValue('font-family');
      if (family) {
        processedFontFamilies.add(normalizeFontFamily(family));
      }
    };

    Array.from(document.styleSheets).forEach((sheet) => {
      if (!(sheet instanceof CSSStyleSheet)) return;

      let rules: CSSRuleList;
      try {
        rules = sheet.cssRules;
      } catch (error) {
        const ownerNode = sheet.ownerNode;
        if (ownerNode instanceof HTMLLinkElement) {
          pendingCrossOriginSheets.push(ownerNode);
        }
        return;
      }

      Array.from(rules).forEach((rule) => {
        if (typeof CSSFontFaceRule !== 'undefined' && rule instanceof CSSFontFaceRule) {
          updateFontFaceRule(rule);
        }
      });
    });

    if (pendingCrossOriginSheets.length === 0) {
      return;
    }

    const documentWithFonts = document as Document & { fonts?: FontFaceSet };
    const detectedFontFamilies = new Set<string>();

    if (documentWithFonts.fonts) {
      try {
        documentWithFonts.fonts.forEach((fontFace) => {
          const family = normalizeFontFamily(fontFace.family);
          if (!processedFontFamilies.has(family)) {
            detectedFontFamilies.add(family);
          }
        });
      } catch {
        // Accessing document.fonts can throw in some environments; ignore if it does.
      }
    }

    const processExternalStylesheet = async (link: HTMLLinkElement) => {
      if (!link.href) return;
      if (link.dataset.fontDisplayProcessed === 'true') return;
      link.dataset.fontDisplayProcessed = 'true';

      try {
        const response = await fetch(link.href);
        if (!response.ok) return;

        let cssText = await response.text();
        if (!cssText) return;

        cssText = cssText.replace(/@font-face\s*{[^}]*}/gi, (block) => {
          if (/font-display\s*:/i.test(block)) {
            return block.replace(/font-display\s*:[^;]+/i, 'font-display: swap');
          }
          return block.replace('{', '{\n  font-display: swap;');
        });

        const baseHref = link.href;
        cssText = cssText.replace(/url\(([^)]+)\)/gi, (match, group) => {
          const value = group.trim().replace(/^['"]|['"]$/g, '');
          if (!value || /^(data:|https?:|\/?\/)/i.test(value)) {
            return `url(${group})`;
          }

          let absoluteUrl: string;
          try {
            absoluteUrl = new URL(value, baseHref).toString();
          } catch {
            absoluteUrl = value;
          }

          return `url("${absoluteUrl}")`;
        });

        if (detectedFontFamilies.size > 0) {
          const containsRelevantFont = Array.from(detectedFontFamilies).some((family) =>
            new RegExp(`font-family:\\s*["']?${family}["']?`, 'i').test(cssText)
          );
          if (!containsRelevantFont) return;
        }

        const styleElement = document.createElement('style');
        styleElement.setAttribute('data-font-display', 'swap');
        styleElement.appendChild(document.createTextNode(cssText));
        document.head.appendChild(styleElement);
      } catch {
        // Ignore failures to fetch or parse external stylesheets.
      }
    };

    pendingCrossOriginSheets.forEach((link) => {
      void processExternalStylesheet(link);
    });
  }
}

// Resource hints utilities
export class ResourceHints {
  static addDNSPrefetch(domains: string[]): void {
    if (typeof window === 'undefined') return;

    domains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'dns-prefetch';
      link.href = domain;
      document.head.appendChild(link);
    });
  }

  static addPreconnect(urls: string[]): void {
    if (typeof window === 'undefined') return;

    urls.forEach(url => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = url;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });
  }

  static addModulePreload(moduleUrls: string[]): void {
    if (typeof window === 'undefined') return;

    moduleUrls.forEach(url => {
      const link = document.createElement('link');
      link.rel = 'modulepreload';
      link.href = url;
      document.head.appendChild(link);
    });
  }
}

// Initialize Core Web Vitals tracking
export const webVitals = new CoreWebVitals({
  enableReporting: true,
  sampleRate: 1 // Report 100% of page loads
});

// Auto-initialize optimizations
if (typeof window !== 'undefined') {
  // Critical performance hints
  ResourceHints.addDNSPrefetch([
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com',
    'https://www.google-analytics.com',
    'https://www.googletagmanager.com'
  ]);

  ResourceHints.addPreconnect([
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com'
  ]);

  // Enable lazy loading when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      ImageOptimizer.lazyLoadImages();
    });
  } else {
    ImageOptimizer.lazyLoadImages();
  }
}
/**
 * Advanced SEO Analytics & Performance Monitoring
 * Comprehensive tracking for search domination
 */

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
    PerformanceObserver?: any;
    performance?: Performance;
  }
}

export interface SEOMetrics {
  pageLoadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
  timeToInteractive: number;
  totalBlockingTime: number;
}

export interface SearchPerformance {
  impressions: number;
  clicks: number;
  ctr: number;
  position: number;
  queries: string[];
}

export interface SEOAnalytics {
  url: string;
  title: string;
  timestamp: string;
  metrics: SEOMetrics;
  searchData?: SearchPerformance;
  conversionData?: {
    leadSubmissions: number;
    quoteRequests: number;
    phoneClicks: number;
    emailClicks: number;
  };
}

class SEOTracker {
  private metrics: Partial<SEOMetrics> = {};
  private observer: PerformanceObserver | null = null;
  
  constructor() {
    this.initializeTracking();
  }
  
  private initializeTracking() {
    // Track Core Web Vitals
    this.trackCoreWebVitals();
    
    // Track page load performance
    this.trackPageLoad();
    
    // Track user interactions for SEO signals
    this.trackUserEngagement();
    
    // Initialize Search Console API tracking
    this.initializeSearchConsole();
  }
  
  private trackCoreWebVitals() {
    // Largest Contentful Paint (LCP)
    this.observePerformance('largest-contentful-paint', (entry: any) => {
      this.metrics.largestContentfulPaint = entry.startTime;
      this.sendMetric('lcp', entry.startTime);
    });
    
    // First Input Delay (FID)
    this.observePerformance('first-input', (entry: any) => {
      this.metrics.firstInputDelay = entry.processingStart - entry.startTime;
      this.sendMetric('fid', this.metrics.firstInputDelay);
    });
    
    // Cumulative Layout Shift (CLS)
    this.observePerformance('layout-shift', (entry: any) => {
      if (!entry.hadRecentInput) {
        this.metrics.cumulativeLayoutShift = (this.metrics.cumulativeLayoutShift || 0) + entry.value;
        this.sendMetric('cls', this.metrics.cumulativeLayoutShift);
      }
    });
    
    // First Contentful Paint (FCP)
    this.observePerformance('paint', (entry: any) => {
      if (entry.name === 'first-contentful-paint') {
        this.metrics.firstContentfulPaint = entry.startTime;
        this.sendMetric('fcp', entry.startTime);
      }
    });
  }
  
  private observePerformance(type: string, callback: (entry: any) => void) {
    if (typeof window === 'undefined' || !window.PerformanceObserver) return;
    
    try {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach(callback);
      });
      
      observer.observe({ type, buffered: true });
      this.observer = observer;
    } catch (error) {
      console.warn(`Failed to observe ${type}:`, error);
    }
  }
  
  private trackPageLoad() {
    if (typeof window === 'undefined') return;
    
    window.addEventListener('load', () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      
      if (navigation) {
        this.metrics.pageLoadTime = navigation.loadEventEnd - navigation.fetchStart;
        this.metrics.timeToInteractive = navigation.domInteractive - navigation.fetchStart;
        this.metrics.totalBlockingTime = this.calculateTBT();
        
        this.sendPageLoadMetrics();
      }
    });
  }
  
  private calculateTBT(): number {
    // Simplified TBT calculation
    const longTasks = performance.getEntriesByType('longtask');
    return longTasks.reduce((tbt: number, task: any) => {
      return tbt + Math.max(0, task.duration - 50);
    }, 0);
  }
  
  private trackUserEngagement() {
    if (typeof window === 'undefined') return;
    
    // Track scroll depth for engagement signals
    let maxScroll = 0;
    window.addEventListener('scroll', () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
      );
      
      if (scrollPercent > maxScroll) {
        maxScroll = scrollPercent;
        
        // Send engagement signals at key milestones
        if (scrollPercent >= 25 && scrollPercent < 50) {
          this.sendEngagement('scroll_25');
        } else if (scrollPercent >= 50 && scrollPercent < 75) {
          this.sendEngagement('scroll_50');
        } else if (scrollPercent >= 75) {
          this.sendEngagement('scroll_75');
        }
      }
    });
    
    // Track time on page
    const startTime = Date.now();
    window.addEventListener('beforeunload', () => {
      const timeOnPage = Date.now() - startTime;
      this.sendEngagement('time_on_page', timeOnPage);
    });
    
    // Track clicks on insurance-related elements
    document.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;
      
      // Track CTA clicks
      if (target.matches('[data-track=\"cta\"]') || target.closest('[data-track=\"cta\"]')) {
        this.sendEngagement('cta_click', target.textContent?.trim());
      }
      
      // Track quote button clicks
      if (target.matches('[data-track=\"quote\"]') || target.closest('[data-track=\"quote\"]')) {
        this.sendEngagement('quote_click');
      }
      
      // Track phone number clicks
      if (target.matches('a[href^=\"tel:\"]')) {
        this.sendEngagement('phone_click');
      }
      
      // Track email clicks
      if (target.matches('a[href^=\"mailto:\"]')) {
        this.sendEngagement('email_click');
      }
    });
  }
  
  private initializeSearchConsole() {
    // Track search result impressions (when user arrives from Google)
    if (document.referrer.includes('google.com')) {
      this.sendMetric('search_impression', 1);
      
      // Extract search query from URL if available
      const urlParams = new URLSearchParams(window.location.search);
      const query = urlParams.get('q') || urlParams.get('query');
      
      if (query) {
        this.sendSearchQuery(query);
      }
    }
  }
  
  private sendMetric(name: string, value: number) {
    // Send to Google Analytics 4
    if (window.gtag) {
      window.gtag('event', 'web_vital', {
        name,
        value: Math.round(value),
        custom_parameter_1: window.location.pathname
      });
    }
    
    // Send to custom analytics endpoint
    this.sendToAnalytics({
      type: 'metric',
      name,
      value,
      url: window.location.href,
      timestamp: new Date().toISOString()
    });
  }
  
  private sendEngagement(event: string, value?: any) {
    if (window.gtag) {
      window.gtag('event', event, {
        value,
        page_location: window.location.href,
        page_title: document.title
      });
    }
    
    this.sendToAnalytics({
      type: 'engagement',
      event,
      value,
      url: window.location.href,
      timestamp: new Date().toISOString()
    });
  }
  
  private sendSearchQuery(query: string) {
    this.sendToAnalytics({
      type: 'search_query',
      query,
      url: window.location.href,
      timestamp: new Date().toISOString()
    });
  }
  
  private sendPageLoadMetrics() {
    this.sendToAnalytics({
      type: 'page_load',
      metrics: this.metrics,
      url: window.location.href,
      timestamp: new Date().toISOString()
    });
  }
  
  private async sendToAnalytics(data: any) {
    try {
      // Send to custom analytics endpoint
      await fetch('/api/analytics', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
    } catch (error) {
      console.warn('Analytics send failed:', error);
    }
  }
  
  // Public methods for manual tracking
  public trackConversion(type: string, value?: number) {
    this.sendEngagement(`conversion_${type}`, value);
  }
  
  public trackFormSubmission(formType: string) {
    this.sendEngagement('form_submit', formType);
  }
  
  public trackQuoteRequest(insuranceType: string) {
    this.sendEngagement('quote_request', insuranceType);
  }
  
  public getMetrics(): Partial<SEOMetrics> {
    return { ...this.metrics };
  }
  
  public destroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}

// Initialize global SEO tracker
let seoTracker: SEOTracker | null = null;

export function initializeSEOTracking(): SEOTracker {
  if (typeof window === 'undefined') {
    return null as any;
  }
  
  if (!seoTracker) {
    seoTracker = new SEOTracker();
  }
  
  return seoTracker;
}

export function getSEOTracker(): SEOTracker | null {
  return seoTracker;
}

// Enhanced Google Analytics 4 configuration
export function configureGA4() {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  // Enhanced ecommerce tracking for insurance quotes
  window.gtag('config', 'GA_MEASUREMENT_ID', {
    // Enhanced measurement
    enhanced_measurement: true,
    
    // Custom parameters for insurance industry
    custom_map: {
      insurance_type: 'custom_parameter_1',
      state_served: 'custom_parameter_2',
      quote_value: 'custom_parameter_3'
    },
    
    // Site search tracking
    site_search_parameter: 'q',
    
    // Performance monitoring
    send_page_view: true,
    
    // Cookie settings for compliance
    cookie_flags: 'SameSite=None;Secure',
    
    // Link attribution for better tracking
    link_attribution: true
  });
  
  // Set up custom events for insurance industry
  const customEvents = [
    'quote_started',
    'quote_completed', 
    'lead_generated',
    'phone_consultation',
    'email_inquiry',
    'state_page_visit',
    'carrier_comparison',
    'plan_details_view'
  ];
  
  customEvents.forEach(event => {
    window.gtag?.('config', 'GA_MEASUREMENT_ID', {
      custom_parameter_1: event
    });
  });
}

// Export for use in React components
export { SEOTracker };
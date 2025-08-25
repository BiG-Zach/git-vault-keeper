// Enhanced GTM Event Tracking Utilities for Insurance SEO Domination
export interface GTMEvent {
  event: string;
  event_category?: string;
  event_action?: string;
  event_label?: string;
  value?: number;
  // Enhanced insurance-specific parameters
  insurance_type?: string;
  state_served?: string;
  quote_value?: number;
  coverage_type?: string;
  lead_source?: string;
  page_type?: string;
  user_journey_stage?: string;
  conversion_value?: number;
}

export interface GTMEcommerceEvent {
  event: string;
  ecommerce: {
    transaction_id?: string;
    value?: number;
    currency?: string;
    items?: Array<{
      item_id: string;
      item_name: string;
      item_category: string;
      item_brand?: string;
      price?: number;
      quantity?: number;
    }>;
  };
}

export const trackEvent = (eventData: GTMEvent) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventData.event, {
      event_category: eventData.event_category,
      event_action: eventData.event_action,
      event_label: eventData.event_label,
      value: eventData.value,
      // Enhanced custom parameters for insurance industry
      custom_parameter_1: eventData.insurance_type,
      custom_parameter_2: eventData.state_served,
      custom_parameter_3: eventData.quote_value,
      page_location: window.location.href,
      page_title: document.title
    });
  }
  
  // Also send to dataLayer for advanced tracking
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      ...eventData,
      timestamp: new Date().toISOString(),
      page_url: window.location.href
    });
  }
};

export const trackEcommerce = (eventData: GTMEcommerceEvent) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventData.event, eventData.ecommerce);
  }
};

// Insurance Industry Conversion Tracking
export const trackInsuranceConversion = (type: string, value: number, state: string) => {
  trackEvent({
    event: 'conversion',
    event_category: 'insurance_conversion',
    event_action: 'lead_generated',
    event_label: `${type}_${state}`,
    value,
    insurance_type: type,
    state_served: state,
    conversion_value: value
  });
  
  // Enhanced ecommerce tracking for lead value
  trackEcommerce({
    event: 'purchase',
    ecommerce: {
      transaction_id: `lead_${Date.now()}`,
      value,
      currency: 'USD',
      items: [
        {
          item_id: `${type}_lead`,
          item_name: `${type} Insurance Lead`,
          item_category: 'Insurance Leads',
          item_brand: 'Bradford Informed Guidance',
          price: value,
          quantity: 1
        }
      ]
    }
  });
};

// Advanced SEO Event Tracking
export const trackSEOEvent = (eventType: string, details: Record<string, any>) => {
  trackEvent({
    event: 'seo_optimization',
    event_category: 'seo_performance',
    event_action: eventType,
    event_label: JSON.stringify(details),
    ...details
  });
};

// Core Web Vitals Tracking
export const trackWebVital = (name: string, value: number, id: string) => {
  trackEvent({
    event: 'web_vitals',
    event_category: 'performance',
    event_action: name,
    event_label: id,
    value: Math.round(value),
    page_type: document.title.includes('Insurance') ? 'insurance_page' : 'general'
  });
};

// Comprehensive Insurance Industry GTM Events
export const GTM_EVENTS = {
  // Hero Section Interactions
  HERO_SCHEDULE_CLICK: {
    event: 'cta_click',
    event_category: 'engagement',
    event_action: 'click',
    event_label: 'hero_schedule_consultation',
    user_journey_stage: 'awareness'
  },
  HERO_SEE_OPTIONS_CLICK: {
    event: 'cta_click',
    event_category: 'engagement',
    event_action: 'click',
    event_label: 'hero_see_options',
    user_journey_stage: 'consideration'
  },
  
  // Quote Generation Events
  QUOTE_STARTED: {
    event: 'quote_started',
    event_category: 'conversion_funnel',
    event_action: 'begin_checkout',
    event_label: 'insurance_quote_initiated',
    user_journey_stage: 'intent'
  },
  QUOTE_COMPLETED: {
    event: 'quote_completed',
    event_category: 'conversion_funnel',
    event_action: 'purchase',
    event_label: 'insurance_quote_submitted',
    user_journey_stage: 'conversion'
  },
  QUOTE_ABANDONED: {
    event: 'quote_abandoned',
    event_category: 'conversion_funnel',
    event_action: 'abandon_checkout',
    event_label: 'quote_form_abandoned',
    user_journey_stage: 'consideration'
  },
  
  // Lead Generation Events
  LEAD_FORM_SUBMIT: {
    event: 'lead_generated',
    event_category: 'conversion',
    event_action: 'form_submit',
    event_label: 'contact_form_lead',
    user_journey_stage: 'conversion'
  },
  PHONE_CONSULTATION_REQUEST: {
    event: 'consultation_request',
    event_category: 'conversion',
    event_action: 'phone_request',
    event_label: 'phone_consultation_scheduled',
    user_journey_stage: 'conversion'
  },
  
  // State-Specific Events
  STATE_PAGE_VIEW: {
    event: 'state_page_view',
    event_category: 'engagement',
    event_action: 'page_view',
    event_label: 'state_specific_page',
    user_journey_stage: 'consideration'
  },
  STATE_QUOTE_REQUEST: {
    event: 'state_quote_request',
    event_category: 'conversion_funnel',
    event_action: 'quote_request',
    event_label: 'state_specific_quote',
    user_journey_stage: 'intent'
  },
  
  // Insurance Type Events
  HEALTH_INSURANCE_INTEREST: {
    event: 'insurance_type_interest',
    event_category: 'product_interest',
    event_action: 'health_insurance_view',
    event_label: 'health_insurance_page',
    insurance_type: 'health_insurance',
    user_journey_stage: 'consideration'
  },
  LIFE_INSURANCE_INTEREST: {
    event: 'insurance_type_interest',
    event_category: 'product_interest',
    event_action: 'life_insurance_view',
    event_label: 'life_insurance_page',
    insurance_type: 'life_insurance',
    user_journey_stage: 'consideration'
  },
  IUL_INSURANCE_INTEREST: {
    event: 'insurance_type_interest',
    event_category: 'product_interest',
    event_action: 'iul_insurance_view',
    event_label: 'iul_insurance_page',
    insurance_type: 'iul_insurance',
    user_journey_stage: 'consideration'
  },
  
  // Carrier Comparison Events
  CARRIER_COMPARISON_VIEW: {
    event: 'carrier_comparison',
    event_category: 'product_research',
    event_action: 'carriers_page_view',
    event_label: 'insurance_carriers_comparison',
    user_journey_stage: 'consideration'
  },
  CARRIER_DETAILS_VIEW: {
    event: 'carrier_details',
    event_category: 'product_research',
    event_action: 'carrier_detail_view',
    event_label: 'specific_carrier_info',
    user_journey_stage: 'evaluation'
  },
  
  // Process Understanding Events
  HOW_IT_WORKS_CTA_CLICK: {
    event: 'process_engagement',
    event_category: 'engagement',
    event_action: 'click',
    event_label: 'how_it_works_start_step_1',
    user_journey_stage: 'awareness'
  },
  PROCESS_STEP_COMPLETION: {
    event: 'process_step_complete',
    event_category: 'engagement',
    event_action: 'step_completion',
    event_label: 'process_step_understood',
    user_journey_stage: 'consideration'
  },
  
  // FAQ and Support Events
  FAQ_CTA_CLICK: {
    event: 'support_engagement',
    event_category: 'engagement',
    event_action: 'click',
    event_label: 'faq_still_have_questions',
    user_journey_stage: 'consideration'
  },
  FAQ_EXPANSION: {
    event: 'faq_interaction',
    event_category: 'engagement',
    event_action: 'faq_expand',
    event_label: 'faq_question_opened',
    user_journey_stage: 'consideration'
  },
  
  // Sticky CTA Events
  STICKY_CALL_CLICK: {
    event: 'urgent_action',
    event_category: 'conversion',
    event_action: 'phone_click',
    event_label: 'sticky_call_now',
    user_journey_stage: 'intent'
  },
  STICKY_QUOTE_CLICK: {
    event: 'urgent_action',
    event_category: 'conversion',
    event_action: 'quote_click',
    event_label: 'sticky_get_quote',
    user_journey_stage: 'intent'
  },
  
  // Interactive Elements
  STATE_MAP_CLICK: {
    event: 'map_interaction',
    event_category: 'engagement',
    event_action: 'click',
    event_label: 'state_map_click',
    user_journey_stage: 'exploration'
  },
  TESTIMONIALS_VIEW: {
    event: 'social_proof',
    event_category: 'engagement',
    event_action: 'testimonials_view',
    event_label: 'testimonials_carousel',
    user_journey_stage: 'evaluation'
  },
  TESTIMONIAL_INTERACTION: {
    event: 'social_proof_engagement',
    event_category: 'engagement',
    event_action: 'testimonial_click',
    event_label: 'individual_testimonial',
    user_journey_stage: 'evaluation'
  },
  
  // Content Engagement Events
  BLOG_POST_VIEW: {
    event: 'content_engagement',
    event_category: 'content',
    event_action: 'blog_view',
    event_label: 'insurance_guide_read',
    user_journey_stage: 'education'
  },
  GUIDE_DOWNLOAD: {
    event: 'lead_magnet',
    event_category: 'conversion',
    event_action: 'download',
    event_label: 'insurance_guide_download',
    user_journey_stage: 'intent'
  },
  
  // Search and Navigation
  INTERNAL_SEARCH: {
    event: 'site_search',
    event_category: 'engagement',
    event_action: 'search',
    event_label: 'internal_site_search',
    user_journey_stage: 'exploration'
  },
  NAVIGATION_CLICK: {
    event: 'navigation',
    event_category: 'engagement',
    event_action: 'nav_click',
    event_label: 'header_navigation',
    user_journey_stage: 'exploration'
  },
  
  // Performance and Technical Events
  PAGE_LOAD_COMPLETE: {
    event: 'page_performance',
    event_category: 'technical',
    event_action: 'page_loaded',
    event_label: 'full_page_load',
    user_journey_stage: 'technical'
  },
  FORM_VALIDATION_ERROR: {
    event: 'form_error',
    event_category: 'user_experience',
    event_action: 'validation_error',
    event_label: 'form_submission_failed',
    user_journey_stage: 'friction'
  },
  
  // Email and Communication
  EMAIL_SIGNUP: {
    event: 'email_signup',
    event_category: 'conversion',
    event_action: 'newsletter_signup',
    event_label: 'email_list_join',
    user_journey_stage: 'nurturing'
  },
  EMAIL_CLICK: {
    event: 'email_interaction',
    event_category: 'engagement',
    event_action: 'email_click',
    event_label: 'email_address_click',
    user_journey_stage: 'intent'
  }
} as const;

// Extend Window interface for TypeScript
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
    // Enhanced insurance-specific tracking
    BradfordTracking?: {
      trackQuote: (type: string, state: string, value: number) => void;
      trackLead: (source: string, type: string) => void;
      trackConversion: (type: string, value: number) => void;
    };
  }
}

// Utility Functions for Insurance Tracking
export const initializeBradfordTracking = () => {
  if (typeof window === 'undefined') return;
  
  window.BradfordTracking = {
    trackQuote: (type: string, state: string, value: number) => {
      trackEvent({
        ...GTM_EVENTS.QUOTE_STARTED,
        insurance_type: type,
        state_served: state,
        quote_value: value
      });
    },
    
    trackLead: (source: string, type: string) => {
      trackInsuranceConversion(type, 100, 'general'); // $100 lead value
      trackEvent({
        ...GTM_EVENTS.LEAD_FORM_SUBMIT,
        lead_source: source,
        insurance_type: type
      });
    },
    
    trackConversion: (type: string, value: number) => {
      trackInsuranceConversion(type, value, 'general');
    }
  };
};

// SEO-Specific Event Tracking
export const trackSEOPageView = (pageType: string, insuranceType?: string, state?: string) => {
  trackEvent({
    event: 'page_view_enhanced',
    event_category: 'seo_tracking',
    event_action: 'page_view',
    event_label: pageType,
    page_type: pageType,
    insurance_type: insuranceType,
    state_served: state,
    user_journey_stage: 'awareness'
  });
};

// Scroll Depth Tracking for Engagement Signals
export const trackScrollDepth = (percentage: number) => {
  trackEvent({
    event: 'scroll_depth',
    event_category: 'engagement',
    event_action: 'scroll',
    event_label: `${percentage}%`,
    value: percentage
  });
};

// Form Interaction Tracking
export const trackFormInteraction = (formType: string, action: string, field?: string) => {
  trackEvent({
    event: 'form_interaction',
    event_category: 'form_engagement',
    event_action: action,
    event_label: `${formType}_${field || 'general'}`,
    page_type: formType
  });
};

// Video/Media Engagement Tracking
export const trackMediaEngagement = (mediaType: string, action: string, duration?: number) => {
  trackEvent({
    event: 'media_engagement',
    event_category: 'content_engagement',
    event_action: action,
    event_label: mediaType,
    value: duration
  });
};

// Search Query Tracking
export const trackSearchQuery = (query: string, results: number) => {
  trackEvent({
    event: 'internal_search',
    event_category: 'site_search',
    event_action: 'search_performed',
    event_label: query,
    value: results
  });
};

// Exit Intent Tracking
export const trackExitIntent = (pageType: string, timeOnPage: number) => {
  trackEvent({
    event: 'exit_intent',
    event_category: 'user_behavior',
    event_action: 'exit_intent_detected',
    event_label: pageType,
    value: timeOnPage
  });
};

// Advanced Conversion Funnel Tracking
export const trackFunnelStep = (step: string, stepNumber: number, completed: boolean = true) => {
  trackEvent({
    event: completed ? 'funnel_step_complete' : 'funnel_step_abandon',
    event_category: 'conversion_funnel',
    event_action: completed ? 'step_completed' : 'step_abandoned',
    event_label: step,
    value: stepNumber
  });
};

// Enhanced Error Tracking
export const trackError = (errorType: string, errorMessage: string, pageUrl?: string) => {
  trackEvent({
    event: 'exception',
    event_category: 'error_tracking',
    event_action: errorType,
    event_label: errorMessage,
    page_type: pageUrl || window.location.pathname
  });
};

// A/B Test Tracking
export const trackABTest = (testName: string, variant: string) => {
  trackEvent({
    event: 'ab_test_view',
    event_category: 'optimization',
    event_action: 'variant_shown',
    event_label: `${testName}_${variant}`
  });
};

// Lead Quality Scoring
export const trackLeadQuality = (score: number, factors: string[]) => {
  trackEvent({
    event: 'lead_quality_score',
    event_category: 'lead_scoring',
    event_action: 'quality_assessed',
    event_label: factors.join(','),
    value: score
  });
};

// Export comprehensive tracking initialization
export const initializeComprehensiveTracking = () => {
  if (typeof window === 'undefined') return;
  
  // Initialize Bradford-specific tracking
  initializeBradfordTracking();
  
  // Set up automatic scroll depth tracking
  let maxScroll = 0;
  window.addEventListener('scroll', () => {
    const scrollPercent = Math.round(
      (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
    );
    
    if (scrollPercent > maxScroll) {
      maxScroll = scrollPercent;
      
      // Track key scroll milestones
      if ([25, 50, 75, 90].includes(scrollPercent)) {
        trackScrollDepth(scrollPercent);
      }
    }
  });
  
  // Set up exit intent detection
  let timeOnPage = Date.now();
  document.addEventListener('mouseleave', (e) => {
    if (e.clientY <= 0) {
      trackExitIntent(document.title, Date.now() - timeOnPage);
    }
  });
  
  // Set up form interaction tracking
  document.addEventListener('focus', (e) => {
    const target = e.target as HTMLElement;
    if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.tagName === 'SELECT') {
      const form = target.closest('form');
      const formType = form?.getAttribute('data-form-type') || 'unknown';
      trackFormInteraction(formType, 'field_focus', target.getAttribute('name') || undefined);
    }
  }, true);
  
  // Set up error tracking
  window.addEventListener('error', (e) => {
    trackError('javascript_error', e.message, e.filename);
  });
  
  // Set up unhandled promise rejection tracking
  window.addEventListener('unhandledrejection', (e) => {
    trackError('promise_rejection', e.reason.toString());
  });
};

// Export for global access
if (typeof window !== 'undefined') {
  (window as any).BradfordGTM = {
    trackEvent,
    trackInsuranceConversion,
    trackSEOEvent,
    trackWebVital,
    GTM_EVENTS,
    initializeComprehensiveTracking
  };
}
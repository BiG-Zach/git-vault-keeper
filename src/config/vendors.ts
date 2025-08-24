export const VendorConfig = {
  // Auto-text vendor criteria
  autoText: {
    zipCodes: ['331', '332', '333'], // Miami area codes
    states: ['FL'],
    timeOfDay: { start: 9, end: 17 }, // Business hours
    priority: 1
  },
  
  // Manual follow-up vendor criteria  
  manual: {
    zipCodes: ['481', '482', '483'], // Michigan area codes
    states: ['MI', 'NC'],
    timeOfDay: { start: 8, end: 20 }, // Extended hours
    priority: 2
  },
  
  // Default routing logic
  default: 'manual'
};
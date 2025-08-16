# Mobile QA Checklist

## Device Testing: iPhone 14/15

### Hero Section
- [ ] Hero section fills viewport appropriately
- [ ] Single prominent CTA button is visible and centered
- [ ] Typography scales properly (28-36px headline)
- [ ] Background gradient displays correctly
- [ ] Safe area insets respected at top

### Sticky CTA Behavior
- [ ] Sticky CTA hidden when hero CTA is on screen
- [ ] Sticky CTA slides up smoothly when hero scrolls off
- [ ] Both buttons (Call/Quote) are properly sized (48px height)
- [ ] Safe area inset respected at bottom
- [ ] No overlap with other UI elements

### Typography & Spacing
- [ ] Base font size is 16-17px (no iOS zoom)
- [ ] Line heights are 1.5-1.7 for readability
- [ ] 4px/8px spacing rhythm maintained
- [ ] Headings scale appropriately with viewport
- [ ] Text contrast meets accessibility standards

### Carrier Logo Grid
- [ ] 3-column grid displays properly
- [ ] No layout shift during logo loading
- [ ] Clean gutters between items
- [ ] Logos are properly contained and centered
- [ ] Aspect ratios maintained

### Forms
- [ ] All input fields are 48px+ tall
- [ ] Font size 16px+ (prevents iOS zoom)
- [ ] Tap targets are 44px+ minimum
- [ ] Validation messages display inline
- [ ] Submit button shows loading state
- [ ] Double-submit prevention works
- [ ] Focus states are clearly visible

### Navigation & Footer
- [ ] Header doesn't overflow horizontally
- [ ] Brand text truncates properly if needed
- [ ] Header CTA is 44px+ tap target
- [ ] Footer links are easily tappable
- [ ] No horizontal scrolling anywhere
- [ ] Focus states work with keyboard navigation

### Performance (Lighthouse Mobile)
- [ ] Cumulative Layout Shift < 0.1
- [ ] First Contentful Paint optimized
- [ ] Largest Contentful Paint optimized
- [ ] No accessibility violations
- [ ] No console errors

### Device-Specific
- [ ] Safe area insets work on iPhone with notch
- [ ] Sticky CTA respects home indicator area
- [ ] Touch interactions feel responsive
- [ ] No accidental scrolling or zooming
- [ ] Landscape orientation handled gracefully

### Regression Testing
- [ ] Desktop view unchanged
- [ ] Tablet view unchanged
- [ ] All existing functionality preserved
- [ ] API calls still work
- [ ] Analytics tracking intact
- [ ] Form submissions successful
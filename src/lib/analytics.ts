interface GTMEvent {
  eventName: string;
  [key: string]: any;
}

export const trackConversion = (event: GTMEvent) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: event.eventName,
      ...event,
    });
    console.log('GTM Event Fired:', event);
  } else {
    console.log('GTM dataLayer not found. Event not fired:', event);
  }
};

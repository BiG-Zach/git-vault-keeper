import React from 'react';

const OfficeLocationLuxury = () => {
  return (
    <div className="w-full h-full min-h-[400px] rounded-2xl overflow-hidden shadow-2xl border border-white/20">
      <iframe
        title="Office Location"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=4200+W+Cypress+St,+Tampa,+FL+33607`}
      ></iframe>
    </div>
  );
};

export default OfficeLocationLuxury;

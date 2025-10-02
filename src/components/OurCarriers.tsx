import React from 'react';
import bg from '../assets/backgrounds/shield-carriers-clean.webp';

const OurCarriers = () => {
  return (
    <section
      className="bg-cover bg-center py-20 text-white"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="max-w-6xl mx-auto px-4 text-center bg-black/60 p-8 rounded-xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Carrier Partnerships</h2>
        <p className="text-lg">
          All partner carriers maintain A+, A, A-, or B++ financial strength ratings from AM Best.
        </p>
      </div>
    </section>
  );
};

export default OurCarriers;

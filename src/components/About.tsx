import React from 'react';
import bg from '../assets/backgrounds/skyway-bridge-about.webp';

const About = () => {
  return (
    <section
      className="bg-cover bg-center py-20 text-white"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="max-w-4xl mx-auto px-6 text-center bg-black/60 p-10 rounded-xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">About Bradford Informed Guidance</h2>
        <p className="text-lg">
          Independent insurance brokerage serving FL, MI, NC, AZ, TX, and GA. Licensed professionals specializing in health and life insurance solutions with A-rated carrier partnerships.
        </p>
      </div>
    </section>
  );
};

export default About;

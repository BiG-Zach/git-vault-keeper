import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- DATA (Matches the final version from our plan) ---
const testimonials = [
  { name: "Sarah P.", title: "Freelance Designer", location: "Austin, TX", testimonial: "As a freelancer, finding good health insurance felt impossible. They cut through the noise, explained my PPO options clearly, and found a plan that was actually affordable. A total lifesaver.", avatar: "/avatars/sarah-p.png", savings: 125, verified: "Verified TX Customer" },
  { name: "The Garcia Family", title: "Family of Four", location: "Tampa, FL", testimonial: "We were so overwhelmed trying to find the right plan for our kids. They took the time to understand our family's needs and budget. We finally feel confident in our coverage. Can't recommend them enough.", avatar: "/avatars/garcia-family.png", savings: 210, verified: "Verified FL Customer" },
  { name: "Mark S.", title: "Early Retiree", location: "Phoenix, AZ", testimonial: "Taking early retirement was exciting, but figuring out health coverage before I was 65 was stressful. They found me a fantastic private plan to bridge the gap. The peace of mind is priceless.", avatar: "/avatars/mark-s.png", savings: 180, verified: "Verified AZ Customer" },
  { name: "Emily and Tom", title: "Small Business Owners", location: "Raleigh, NC", testimonial: "We needed a solid plan for ourselves and our two employees. They handled everything, making the small business enrollment process incredibly simple and finding a great PPO network for our team.", avatar: "/avatars/emily-and-tom.png", savings: 250, verified: "Verified NC Customer" },
  { name: "Michael B.", title: "Recent Graduate", location: "Atlanta, GA", testimonial: "Coming off my parents' insurance was daunting. I didn't know where to start. They were patient and found me a simple, catastrophic plan that fit my budget perfectly. So grateful for the clear guidance.", avatar: "/avatars/michael-b.png", savings: 80, verified: "Verified GA Customer" },
  { name: "Jennifer R.", title: "Realtor", location: "Grand Rapids, MI", testimonial: "My income fluctuates, so finding a flexible plan was key. They understood the challenges of being self-employed and found a policy that gives me great coverage without breaking the bank during slower months.", avatar: "/avatars/jennifer-r.png", savings: 155, verified: "Verified MI Customer" }
];

// --- HELPER FUNCTION to group testimonials into threes ---
const chunkArray = <T,>(array: T[], size: number): T[][] => {
  const chunkedArr: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    chunkedArr.push(array.slice(i, i + size));
  }
  return chunkedArr;
};

// --- THE NEW CAROUSEL COMPONENT ---
const TestimonialsCarousel = () => {
  const [page, setPage] = useState(0);
  const testimonialChunks = chunkArray(testimonials, 3);
  const numPages = testimonialChunks.length;

  // Effect to handle the slow, automatic rotation
  useEffect(() => {
    const timer = setInterval(() => {
      setPage((prevPage) => (prevPage + 1) % numPages);
    }, 8000); // Set to a comfortable 8 seconds

    return () => clearInterval(timer);
  }, [numPages]);

  const paginate = (newPage: number) => {
    setPage(newPage);
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto overflow-hidden">
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={page}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {testimonialChunks[page]?.map((testimonial: typeof testimonials[0], index: number) => (
            <div key={index} className="bg-slate-800/50 rounded-xl p-6 flex flex-col h-full">
              <div className="flex items-center mb-4">
                <img src={testimonial.avatar} alt={`Avatar of ${testimonial.name}`} className="w-16 h-16 rounded-full mr-4 border-2 border-slate-600" />
                <div>
                  <p className="font-bold text-white text-lg">{testimonial.name}</p>
                  <p className="text-sm text-slate-400">{testimonial.title} • {testimonial.location}</p>
                </div>
              </div>
              
              <p className="text-slate-300 text-base italic flex-grow">"{testimonial.testimonial}"</p>
              
              <div className="mt-4 flex justify-between items-center">
                <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-green-500/10 text-green-400">{testimonial.verified}</span>
                {testimonial.savings && <p className="text-green-400 font-semibold">Saved ${testimonial.savings}/month</p>}
              </div>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
      
      <div className="flex justify-center mt-8">
        {Array.from({ length: numPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => paginate(i)}
            className={`w-2.5 h-2.5 rounded-full mx-1.5 transition-colors duration-300 ${i === page ? 'bg-white' : 'bg-slate-600 hover:bg-slate-500'}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialsCarousel;

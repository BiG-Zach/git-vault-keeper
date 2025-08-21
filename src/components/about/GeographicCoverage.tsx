import Reveal from "../Reveal";

const serviceAreas = [
  {
    state: "Florida",
    subtitle: "Primary Market - Tampa Bay Focus",
    description: "Comprehensive statewide coverage with specialized Tampa Bay area expertise",
    highlight: "Home Market"
  },
  {
    state: "Michigan", 
    subtitle: "Comprehensive Statewide Coverage",
    description: "Full state licensed service with deep understanding of Michigan healthcare needs",
    highlight: "Full Coverage"
  },
  {
    state: "North Carolina",
    subtitle: "Full State Licensed Service", 
    description: "Complete North Carolina market access with personalized local service",
    highlight: "Statewide"
  }
];

export default function GeographicCoverage() {
  return (
    <section className="py-20 bg-ink-900 text-white">
      <div className="container mx-auto px-5 max-w-6xl">
        <Reveal>
          <div className="text-center mb-12">
            <h2 className="text-[2.25rem] md:text-[2.25rem] font-[700] mb-4 text-white">Geographic Service Excellence</h2>
            <p className="text-[1.25rem] font-[400] text-white/90">Licensed expertise across three key markets</p>
          </div>
        </Reveal>
        
        <div className="grid md:grid-cols-3 gap-8">
          {serviceAreas.map((area, index) => (
            <Reveal key={area.state} delay={index * 0.2}>
              <div className="p-8 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="mb-4">
                  <div className="inline-block px-3 py-1 bg-brand-jade-500 text-white text-[0.75rem] font-[600] rounded-full mb-4">
                    {area.highlight}
                  </div>
                  <h3 className="text-[1.5rem] font-[700] text-white mb-2">{area.state}</h3>
                  <p className="text-[1.125rem] font-[500] text-brand-jade-300 mb-4">{area.subtitle}</p>
                </div>
                <p className="text-[1rem] text-white/80 leading-[1.7]">{area.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
        
        <Reveal delay={0.6}>
          <div className="text-center mt-12 p-8 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
            <h3 className="text-[1.5rem] font-[700] text-white mb-4">Expanding Nationwide</h3>
            <p className="text-[1.125rem] text-white/90 leading-[1.7]">
              Currently pursuing additional state licenses to serve families across America. 
              Contact us to learn about coverage options in your state.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
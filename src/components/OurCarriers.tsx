import carriers from '../data/carriers.json';

type Carrier = {
  name: string;
  logo: string;
};

const carrierList = carriers as Carrier[];

const OurCarriers = () => {
  return (
    <section className="bg-brand-light py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-display font-bold text-brand-dark">Access to A+ Rated National Networks</h2>
        <p className="mt-4 mx-auto max-w-2xl text-brand-gray">
          We partner with a premier selection of healthcare and life insurance carriers committed to concierge-level service and coverage.
        </p>
        <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-4">
          {carrierList.map((carrier) => (
            <div key={carrier.name} className="flex items-center justify-center">
              <img src={carrier.logo} alt={carrier.name} className="h-10 w-auto" loading="lazy" />
            </div>
          ))}
        </div>
        <div className="mt-12">
          <a href="/carriers" className="font-semibold text-brand-secondary transition-colors hover:text-brand-primary">
            Discover every carrier &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};

export default OurCarriers;

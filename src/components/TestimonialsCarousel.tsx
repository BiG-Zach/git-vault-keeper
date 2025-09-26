import testimonials from '../data/testimonials.json';
import { Star } from 'lucide-react';

type Testimonial = {
  quote: string;
  rating: number;
  author: string;
  location: string;
  service: string;
  avatarUrl: string;
};

const testimonialEntries = testimonials as Testimonial[];

const TestimonialCard = ({ quote, rating, author, location, service, avatarUrl }: Testimonial) => (
  <article className="flex h-full flex-col rounded-lg bg-white p-8 shadow-lg">
    <div className="mb-4 flex text-yellow-400" aria-label={`Rating: ${rating} out of 5 stars`}>
      {Array.from({ length: rating }).map((_, index) => (
        <Star key={index} className="h-5 w-5 fill-current" aria-hidden="true" />
      ))}
    </div>
    <blockquote className="flex-grow text-brand-gray">
      <p className="italic">“{quote}”</p>
    </blockquote>
    <footer className="mt-6 flex items-center">
      <img src={avatarUrl} alt="" className="mr-4 h-12 w-12 rounded-full object-cover" loading="lazy" />
      <div>
        <p className="font-semibold text-brand-dark">{author}</p>
        <p className="text-sm text-brand-gray">
          {location} &bull; {service}
        </p>
      </div>
    </footer>
  </article>
);

const TestimonialsCarousel = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-display font-bold text-brand-dark">Trusted by Families Across The Nation</h2>
          <p className="mt-4 mx-auto max-w-2xl text-brand-gray">
            Hear how Bradford Informed Guidance makes insurance decisions simple, personal, and transparent.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonialEntries.map((testimonial, index) => (
            <TestimonialCard key={`${testimonial.author}-${index}`} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;

import { useParams, Navigate } from 'react-router-dom';
import SEO from '../../components/SEO';

// In a real-world scenario, this data would come from a CMS or API
const getKeywordData = (slug: string) => {
  const parts = slug.split('-');
  const formattedTitle = parts.map(p => p.charAt(0).toUpperCase() + p.slice(1)).join(' ');

  // Basic example - this would be far more sophisticated
  if (slug.includes('tampa')) {
    return {
      title: `Best Health Insurance in Tampa, FL | ${formattedTitle}`,
      description: `Looking for the ${formattedTitle}? We provide expert guidance on PPO plans for individuals and families in Tampa, Florida. Compare top carriers.`,
      h1: `Find the ${formattedTitle}`,
      content: `Our licensed brokers specialize in helping Tampa residents find affordable, high-quality PPO health insurance plans. We compare options from A+ rated carriers to ensure you get the best coverage for your needs.`
    };
  }
  return null; // Return null if the keyword is not supported
};

export default function DynamicKeywordPage() {
  const { slug } = useParams<{ slug: string }>();

  if (!slug) {
    return <Navigate to="/404" replace />;
  }

  const pageData = getKeywordData(slug);

  if (!pageData) {
    return <Navigate to="/404" replace />;
  }

  return (
    <>
      <SEO
        title={pageData.title}
        description={pageData.description}
        path={`/keywords/${slug}`}
      />
      <main id="content">
        <section className="bg-slate-50 py-24">
          <div className="container-default text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">{pageData.h1}</h1>
            <p className="text-lg text-slate-600">{pageData.content}</p>
             <div className="mt-8">
                <a href="/quote" className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-6 py-3 text-white font-medium shadow-lg hover:bg-emerald-500 transition">
                  Get a Personalized Quote
                </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

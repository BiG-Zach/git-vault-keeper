import { useParams, Navigate } from 'react-router-dom';
import SEO from '../../components/SEO';
import { getKeywordData } from '../../data/keywords';

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

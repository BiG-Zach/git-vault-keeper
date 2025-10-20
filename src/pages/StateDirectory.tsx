import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, CheckCircle, Clock, Shield } from 'lucide-react';
import SEO from '../components/SEO';
import { stateMetadata, type StateCodeSlug } from '../utils/stateMetadata';
import Button from '../components/Button';
import { organizationSchema, itemListSchema } from '../utils/schema';

// Regional groupings for better organization
const REGIONS = {
  Northeast: ['ct', 'me', 'ma', 'nh', 'nj', 'ny', 'pa', 'ri', 'vt'] as StateCodeSlug[],
  Southeast: ['al', 'ar', 'de', 'dc', 'fl', 'ga', 'ky', 'la', 'md', 'ms', 'nc', 'sc', 'tn', 'va', 'wv'] as StateCodeSlug[],
  Midwest: ['il', 'in', 'ia', 'ks', 'mi', 'mn', 'mo', 'ne', 'nd', 'oh', 'sd', 'wi'] as StateCodeSlug[],
  Southwest: ['az', 'nm', 'ok', 'tx'] as StateCodeSlug[],
  West: ['ak', 'ca', 'co', 'hi', 'id', 'mt', 'nv', 'or', 'ut', 'wa', 'wy'] as StateCodeSlug[],
};

export default function StateDirectory() {
  // Build ItemList schema for all states
  const allStates = Object.entries(stateMetadata).map(([code, data]) => ({
    name: `${data.name} Insurance Guide`,
    url: `/states/${code}`,
    description: `Health and life insurance options in ${data.name}`,
  }));

  const structuredData = [
    organizationSchema(),
    itemListSchema({
      name: 'State Insurance Guides',
      description: 'Comprehensive insurance guides for all 50 states',
      items: allStates,
    }),
    JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.bradfordinformedguidance.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "State Directory",
          "item": "https://www.bradfordinformedguidance.com/states"
        }
      ]
    })
  ];

  return (
    <main id="content" className="has-sticky-cta">
      <SEO
        title="State Insurance Directory - Licensed Coverage in All 50 States"
        path="/states"
        description="Explore health and life insurance options across all 50 states. Find licensed advisors, compare carriers, and get personalized coverage recommendations for your state."
        meta={[
          { name: 'keywords', content: 'state insurance directory, health insurance by state, life insurance coverage, licensed insurance broker, state-specific insurance' },
          { property: 'og:type', content: 'website' },
          { name: 'robots', content: 'index, follow' },
        ]}
        scripts={structuredData.map(data => ({
          type: 'application/ld+json',
          innerHTML: data
        }))}
      />

      {/* Breadcrumb Navigation */}
      <section className="section bg-slate-50 py-4">
        <div className="container-default">
          <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-sm text-slate-600">
            <Link to="/" className="hover:text-slate-900">Home</Link>
            <span>/</span>
            <span className="text-slate-900 font-medium">State Directory</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="section bg-gradient-to-b from-emerald-50 to-white">
        <div className="container-default">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-semibold">
                <MapPin className="w-4 h-4" />
                Nationwide Coverage
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              State Insurance Directory
              <span className="block text-emerald-600">Find Coverage in Your State</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
              Explore health and life insurance options across all 50 states. Get personalized guidance from licensed professionals who understand your state's regulations and carrier options.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button as="a" href="/" variant="primary" size="lg">
                Schedule Consultation
              </Button>
              <Button as="a" href="/carriers" variant="outline" size="lg">
                View Our Carriers
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Active States Highlight */}
      <section className="section bg-white">
        <div className="container-default">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Currently Licensed & Serving
            </h2>
            <p className="text-xl text-slate-600">
              We're actively licensed and ready to serve families in these states
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {Object.entries(stateMetadata)
              .filter(([_, data]) => data.available)
              .map(([code, data]) => (
                <motion.div
                  key={code}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Link
                    to={`/states/${code}`}
                    className="block bg-white rounded-xl border-2 border-emerald-200 p-6 shadow-sm hover:shadow-lg hover:border-emerald-400 transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                          <CheckCircle className="w-6 h-6 text-emerald-600" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                            {data.name}
                          </h3>
                          <span className="text-sm text-emerald-600 font-semibold">Active</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-slate-600 text-sm">
                      Licensed and ready to serve. Get instant quotes and personalized guidance.
                    </p>
                  </Link>
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      {/* Regional Directory */}
      <section className="section bg-slate-50">
        <div className="container-default">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Browse by Region
            </h2>
            <p className="text-xl text-slate-600">
              Find your state in our comprehensive directory
            </p>
          </motion.div>

          <div className="space-y-12">
            {Object.entries(REGIONS).map(([regionName, stateCodes]) => (
              <motion.div
                key={regionName}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-sm"
              >
                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-emerald-600" />
                  {regionName}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {stateCodes.map((code) => {
                    const state = stateMetadata[code];
                    const isActive = state.available;
                    return (
                      <Link
                        key={code}
                        to={`/states/${code}`}
                        className={`group flex items-center gap-2 p-3 rounded-lg border transition-all duration-200 ${
                          isActive
                            ? 'border-emerald-200 bg-emerald-50 hover:bg-emerald-100 hover:border-emerald-300'
                            : 'border-slate-200 bg-slate-50 hover:bg-slate-100 hover:border-slate-300'
                        }`}
                      >
                        {isActive ? (
                          <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                        ) : (
                          <Clock className="w-4 h-4 text-slate-400 flex-shrink-0" />
                        )}
                        <span className={`text-sm font-medium ${
                          isActive ? 'text-emerald-900' : 'text-slate-700'
                        }`}>
                          {state.name}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why State-Specific Matters */}
      <section className="section bg-white">
        <div className="container-default">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Why State-Specific Insurance Guidance Matters
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Insurance regulations, carrier availability, and pricing vary significantly by state
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'State Regulations',
                description: 'Each state has unique insurance laws, mandates, and consumer protections that affect your coverage options.',
              },
              {
                icon: MapPin,
                title: 'Carrier Availability',
                description: 'Not all insurance carriers operate in every state. We know which carriers serve your area.',
              },
              {
                icon: CheckCircle,
                title: 'Local Pricing',
                description: 'Premium costs vary by state based on local healthcare costs, demographics, and market competition.',
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-50 rounded-xl p-6"
              >
                <benefit.icon className="w-10 h-10 text-emerald-600 mb-4" />
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{benefit.title}</h3>
                <p className="text-slate-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-emerald-600">
        <div className="container-default">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Find Coverage in Your State?</h2>
            <p className="text-xl mb-8 text-emerald-100 max-w-2xl mx-auto">
              Get personalized guidance from licensed professionals who understand your state's insurance landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button as="a" href="/" variant="primary" size="lg" className="bg-white text-emerald-600 hover:bg-slate-50">
                Schedule Free Consultation
              </Button>
              <Button as="a" href="/our-process" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-emerald-600">
                Learn About Our Process
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
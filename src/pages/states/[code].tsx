import { useMemo } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, Clock, Users, Shield, Star, TrendingUp } from 'lucide-react';
import SEO from '../../components/SEO';
import { localBusinessSchema } from '../../utils/schema';
import { stateMetadata, type StateCodeSlug } from '../../utils/stateMetadata';
import Button from '../../components/Button';
import { getStateVisual } from '../../utils/stateVisuals';

// Normalize incoming code param to lowercase slug
function normalizeSlug(param?: string): StateCodeSlug | null {
  if (!param) return null;
  const slug = param.trim().toLowerCase() as StateCodeSlug;
  return (stateMetadata as Record<string, unknown>)[slug] ? slug : null;
}

function HeroVisual({ codeUC, stateName }: { codeUC: string; stateName: string }) {
  const cfg = getStateVisual(codeUC, stateName);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="relative overflow-hidden rounded-2xl ring-1 ring-black/5 min-h-[200px] sm:min-h-[240px] md:min-h-[320px]"
    >
      {cfg.image ? (
        <>
          <img
            src={cfg.image}
            alt={cfg.alt || `Health coverage options in ${stateName}`}
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
            decoding="async"
          />
          <div className={`absolute inset-0 ${cfg.overlay ?? 'bg-black/20'}`} aria-hidden="true" />
          <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6">
            <div className="inline-flex rounded-lg bg-white/90 px-3 py-1 text-xs font-semibold text-slate-800 ring-1 ring-black/5">
              {stateName}
            </div>
          </div>
        </>
      ) : (
        <div
          className={`flex h-full w-full items-center justify-center bg-gradient-to-r ${cfg.placeholder?.gradient ?? 'from-sky-400 to-emerald-500'}`}
          aria-label={`Coverage in ${stateName}`}
        >
          <span className="text-white/95 text-lg sm:text-xl md:text-2xl font-semibold drop-shadow">
            {cfg.placeholder?.label ?? stateName}
          </span>
        </div>
      )}
    </motion.div>
  );
}

// Template for Licensed States (Active)
function ActiveStateTemplate({ entry, codeUC, slug }: { entry: any; codeUC: string; slug: string }) {
  const licenseDate = codeUC === 'FL' ? '2021' : codeUC === 'MI' ? '2022' : '2023';
  
  return (
    <>
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
                <Shield className="w-4 h-4" />
                Licensed Insurance Broker
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              {entry.name} Health & Life Insurance
              <span className="block text-emerald-600">Expert Guidance</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
              Navigate health and life insurance options with confidence. Get personalized recommendations, 
              compare top carriers, and secure the right coverage for your family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button as="a" href="/" variant="primary" size="lg">
                Schedule Consultation
              </Button>
              <Button as="a" href={`tel:+16893256570`} variant="outline" size="lg">
                Call (689) 325-6570
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hero Visual */}
      <section className="section">
        <div className="container-default">
          <HeroVisual codeUC={codeUC} stateName={entry.name} />
        </div>
      </section>

      {/* Why Choose Bradford Section */}
      <section className="section bg-slate-50">
        <div className="container-default">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Why {entry.name} Families Choose Bradford
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Licensed since {licenseDate}, we simplify insurance decisions with expert guidance and personalized service
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Benefits List */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">Personalized Recommendations</h3>
                  <p className="text-slate-600">We analyze your unique situation to recommend the most suitable health and life insurance options.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-sky-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">Licensed Professional</h3>
                  <p className="text-slate-600">Fully licensed and compliant in {entry.name}, with deep knowledge of state regulations and carriers.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Star className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">Ongoing Support</h3>
                  <p className="text-slate-600">From enrollment through claims, we're your advocate throughout your insurance journey.</p>
                </div>
              </div>
            </motion.div>

            {/* Statistics */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Our Track Record</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">1000+</div>
                  <div className="text-slate-600">Families Protected</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-sky-600 mb-2">15+</div>
                  <div className="text-slate-600">Top Carriers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">24hr</div>
                  <div className="text-slate-600">Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">98%</div>
                  <div className="text-slate-600">Client Satisfaction</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section bg-emerald-600">
        <div className="container-default">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="text-3xl font-bold mb-4">Let's Find Your Perfect Coverage</h2>
            <p className="text-xl mb-8 text-emerald-100">
              Schedule a free consultation to explore health and life insurance options tailored to your {entry.name} family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button as="a" href="/" variant="primary" size="lg" className="bg-white text-emerald-600 hover:bg-slate-50">
                Schedule Free Consultation
              </Button>
              <Button as="a" href={`tel:+16893256570`} variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-emerald-600">
                Call (689) 325-6570
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

// Template for Coming Soon States (Waitlist)
function ComingSoonTemplate({ entry, codeUC, slug }: { entry: any; codeUC: string; slug: string }) {
  const estimatedLaunch = "Q2 2024"; // This would be dynamic based on expansion timeline
  const waitlistCount = Math.floor(Math.random() * 500) + 200; // Simulated waitlist count
  
  return (
    <>
      {/* Hero Section */}
      <section className="section bg-gradient-to-b from-sky-50 to-white">
        <div className="container-default">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 bg-sky-100 text-sky-800 px-4 py-2 rounded-full text-sm font-semibold animate-pulse">
                <Clock className="w-4 h-4" />
                Coming to {entry.name} Soon
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Coming to {entry.name} Soon
              <span className="block text-sky-600">Join the Waitlist!</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
              Be the first to access exclusive rates and personalized health insurance guidance when we launch in {entry.name}.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button as="a" href="#waitlist" variant="primary" size="lg">
                Join the Waitlist
              </Button>
              <Button as="a" href="#timeline" variant="outline" size="lg">
                View Launch Timeline
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Progress Timeline */}
      <section id="timeline" className="section">
        <div className="container-default">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Our {entry.name} Launch Timeline
            </h2>
            <p className="text-xl text-slate-600">
              Estimated launch: {estimatedLaunch}
            </p>
          </motion.div>
          
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Progress line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-200"></div>
              <div className="absolute left-8 top-0 w-0.5 bg-sky-500" style={{ height: '60%' }}></div>
              
              <div className="space-y-8">
                {[
                  { status: 'completed', title: 'Market Research', description: 'Completed comprehensive analysis of the {entry.name} insurance landscape' },
                  { status: 'completed', title: 'Carrier Partnerships', description: 'Secured partnerships with top-rated insurers for {entry.name}' },
                  { status: 'current', title: 'Licensing Process', description: 'Currently working through state licensing requirements' },
                  { status: 'upcoming', title: 'Team Training', description: 'Training local advisors on {entry.name} regulations and market' },
                  { status: 'upcoming', title: 'Launch!', description: 'Begin serving {entry.name} families with personalized insurance guidance' }
                ].map((step, index) => (
                  <div key={index} className="relative flex items-start gap-6">
                    <div className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center ${
                      step.status === 'completed' ? 'bg-emerald-100 border-4 border-emerald-500' :
                      step.status === 'current' ? 'bg-sky-100 border-4 border-sky-500 animate-pulse' :
                      'bg-slate-100 border-4 border-slate-300'
                    }`}>
                      {step.status === 'completed' ? (
                        <CheckCircle className="w-6 h-6 text-emerald-600" />
                      ) : step.status === 'current' ? (
                        <Clock className="w-6 h-6 text-sky-600" />
                      ) : (
                        <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-slate-900">{step.title}</h3>
                      <p className="text-slate-600">{step.description.replace('{entry.name}', entry.name)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Form */}
      <section id="waitlist" className="section bg-slate-50">
        <div className="container-default">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Join the {entry.name} Waitlist
                </h2>
                <p className="text-slate-600 mb-2">
                  Be first to access exclusive rates when we launch
                </p>
                <div className="inline-flex items-center gap-2 text-sm text-slate-500">
                  <Users className="w-4 h-4" />
                  {waitlistCount}+ {entry.name} families already waiting
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                    <input className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                    <input className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Phone (Optional)</label>
                  <input type="tel" className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Current Insurance Status</label>
                  <select className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500">
                    <option value="">Select your current status</option>
                    <option value="uninsured">Currently uninsured</option>
                    <option value="employer">Have employer insurance</option>
                    <option value="individual">Have individual insurance</option>
                    <option value="marketplace">Have marketplace insurance</option>
                  </select>
                </div>
                <Button variant="primary" size="lg" className="w-full">
                  Notify Me When Available
                </Button>
                <p className="text-xs text-slate-500 text-center">
                  We'll notify you as soon as we launch in {entry.name}. No spam, just early access.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Early Access Benefits */}
      <section className="section">
        <div className="container-default">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Early Access Benefits for {entry.name}
            </h2>
            <p className="text-xl text-slate-600">
              Waitlist members get exclusive perks when we launch
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: "Exclusive Rates",
                description: "Access to special launch pricing not available to the general public"
              },
              {
                icon: Clock,
                title: "Priority Service",
                description: "Skip the line and get immediate attention from our licensed advisors"
              },
              {
                icon: Shield,
                title: "Free Consultation",
                description: "Complimentary 30-minute consultation to review your insurance needs"
              },
              {
                icon: Users,
                title: "Dedicated Advisor",
                description: "Personal advisor assigned to guide you through the entire process"
              },
              {
                icon: CheckCircle,
                title: "No Obligation",
                description: "Being on the waitlist doesn't commit you to purchasing coverage"
              },
              {
                icon: Star,
                title: "VIP Treatment",
                description: "Special recognition as a founding member of our {entry.name} community"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm border border-slate-200"
              >
                <benefit.icon className="w-8 h-8 text-sky-600 mb-4" />
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{benefit.title}</h3>
                <p className="text-slate-600">{benefit.description.replace('{entry.name}', entry.name)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance Challenges Section */}
      <section className="section bg-slate-50">
        <div className="container-default">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              {entry.name} Insurance Challenges We'll Solve
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                problem: "Limited carrier options in rural areas",
                solution: "We bring multiple carrier partnerships to every corner of {entry.name}"
              },
              {
                problem: "Confusing marketplace navigation",
                solution: "Clear, personalized guidance from licensed local advisors"
              },
              {
                problem: "High premiums without support",
                solution: "Medically underwritten options that can significantly reduce costs"
              },
              {
                problem: "Poor customer service experiences",
                solution: "Dedicated ongoing support and advocacy for your coverage needs"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm"
              >
                <div className="text-red-600 font-semibold mb-2">Challenge:</div>
                <p className="text-slate-700 mb-4">{item.problem}</p>
                <div className="text-emerald-600 font-semibold mb-2">Our Solution:</div>
                <p className="text-slate-700">{item.solution.replace('{entry.name}', entry.name)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="section">
        <div className="container-default">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-8">
              Trusted by Families Nationwide
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-sky-600 mb-2">10,000+</div>
                <div className="text-slate-600">Families Served</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-sky-600 mb-2">4.9/5</div>
                <div className="text-slate-600">Customer Rating</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-sky-600 mb-2">24/7</div>
                <div className="text-slate-600">Support Available</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section bg-sky-600">
        <div className="container-default">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="text-3xl font-bold mb-4">Don't Miss Out!</h2>
            <p className="text-xl mb-8 text-sky-100">
              Join {waitlistCount}+ {entry.name} families waiting for our launch.
            </p>
            <Button as="a" href="#waitlist" variant="primary" size="lg" className="bg-white text-sky-600 hover:bg-slate-50">
              Join the Waitlist Now
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default function StateDynamicPage() {
  const params = useParams();
  const raw = params.code ?? '';
  const slug = normalizeSlug(raw);

  if (!slug) {
    return <Navigate to="/not-found" replace />;
  }

  const entry = stateMetadata[slug];
  const codeUC = slug.toUpperCase();
  const isActive = entry.available;

  const seo = useMemo(() => {
    const baseTitle = entry.seo?.title ?? `Private Health Insurance in ${entry.name}`;
    const title = isActive 
      ? `${entry.name} Health & Life Insurance - Licensed & Ready to Serve`
      : `Coming to ${entry.name} Soon - Join the Waitlist!`;
    
    const description = isActive
      ? `Licensed in ${entry.name} and ready to serve. Get instant quotes, next-day protection, and expert guidance from local advisors.`
      : `Be first to access exclusive health insurance rates when Bradford launches in ${entry.name}. Join the waitlist today!`;
    
    const path = `/states/${slug}`;
    const keywords = entry.seo?.keywords ?? 
      `private health insurance, ${entry.name}, medically underwritten plans, PPO, affordable coverage`;
    
    return { title, description, path, keywords };
  }, [entry, slug, isActive]);

  return (
    <main id="content" className="has-sticky-cta">
      <SEO
        title={seo.title}
        path={seo.path}
        description={seo.description}
        meta={[
          { name: 'keywords', content: seo.keywords },
          { property: 'og:title', content: seo.title },
          { property: 'og:description', content: seo.description },
          { property: 'og:type', content: 'website' },
          { name: 'robots', content: 'index, follow' },
        ]}
        scripts={[
          { innerHTML: localBusinessSchema(codeUC as 'FL' | 'MI' | 'NC') },
          {
            innerHTML: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": seo.title,
              "description": seo.description,
              "url": `https://bradfordinsurance.com${seo.path}`,
              "about": {
                "@type": "Service",
                "name": "Health Insurance",
                "provider": {
                  "@type": "Organization",
                  "name": "Bradford Informed Guidance"
                }
              }
            })
          }
        ]}
      />

      {/* Breadcrumb Navigation */}
      <section className="section bg-slate-50 py-4">
        <div className="container-default">
          <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-sm text-slate-600">
            <a href="/" className="hover:text-slate-900">Home</a>
            <span>/</span>
            <a href="/#map" className="hover:text-slate-900">Coverage Map</a>
            <span>/</span>
            <span className="text-slate-900 font-medium">{entry.name}</span>
          </nav>
        </div>
      </section>

      {/* Render appropriate template based on availability */}
      {isActive ? (
        <ActiveStateTemplate entry={entry} codeUC={codeUC} slug={slug} />
      ) : (
        <ComingSoonTemplate entry={entry} codeUC={codeUC} slug={slug} />
      )}
    </main>
  );
}
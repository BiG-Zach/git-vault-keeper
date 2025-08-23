import React from 'react';
import { Shield, Award, Star, Users, TrendingUp, Clock, CheckCircle } from 'lucide-react';

const testimonials = [
  {
    id: '1',
    name: 'Sarah Johnson',
    location: 'Tampa, FL',
    quote: 'Zach saved our family $3,600 annually while improving our coverage. His expertise in Florida\'s market is unmatched.',
    rating: 5,
    savings: '$3,600',
    coverage: 'Family Health Plan'
  },
  {
    id: '2',
    name: 'Mike Rodriguez',
    location: 'Miami, FL',
    quote: 'Found the perfect life insurance policy for my growing family. Zach made a complex process simple and transparent.',
    rating: 5,
    savings: '$1,200',
    coverage: 'Term Life Insurance'
  },
  {
    id: '3',
    name: 'Jennifer Smith',
    location: 'Orlando, FL',
    quote: 'Exceptional service and deep market knowledge. Got coverage I didn\'t even know existed at a great price.',
    rating: 5,
    savings: '$2,100',
    coverage: 'Medicare Supplement'
  }
];

const metrics = [
  {
    value: '12,847+',
    label: 'Families Protected',
    icon: <Users className="w-6 h-6" />
  },
  {
    value: '$50M+',
    label: 'Coverage Placed',
    icon: <TrendingUp className="w-6 h-6" />
  },
  {
    value: '8+ Years',
    label: 'Experience',
    icon: <Clock className="w-6 h-6" />
  },
  {
    value: '98%',
    label: 'Client Satisfaction',
    icon: <Star className="w-6 h-6" />
  }
];

const certifications = [
  {
    title: 'Licensed Florida Broker',
    subtitle: 'License #W347851',
    icon: <Shield className="w-8 h-8" />
  },
  {
    title: 'AM Best Rated Carriers',
    subtitle: '15+ A-Rated Partners',
    icon: <Award className="w-8 h-8" />
  },
  {
    title: 'NAHU Member',
    subtitle: 'National Association',
    icon: <CheckCircle className="w-8 h-8" />
  }
];

export default function TrustSignals() {
  return (
    <section className="section bg-white">
      <div className="container-default">
        {/* Success Metrics */}
        <div className="text-center mb-16">
          <h2 className="h2 mb-4">Trusted by Florida Families</h2>
          <p className="lead text-slate-600 mb-12">
            Over 8 years of helping families find the right insurance coverage
          </p>
          
          <div className="grid md:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  {metric.icon}
                </div>
                <div className="text-3xl font-bold text-slate-800 mb-2">{metric.value}</div>
                <div className="text-slate-600 font-medium">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Client Testimonials Rotation */}
        <div className="bg-slate-50 rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">What Our Clients Say</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <blockquote className="text-slate-700 mb-4 italic">
                  "{testimonial.quote}"
                </blockquote>
                <div className="border-t pt-4">
                  <div className="font-semibold text-slate-800">{testimonial.name}</div>
                  <div className="text-sm text-slate-600">{testimonial.location}</div>
                  <div className="text-sm font-medium text-emerald-600 mt-2">
                    Saved {testimonial.savings} • {testimonial.coverage}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Credentials */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8">Professional Credentials</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center gap-4 bg-slate-50 rounded-xl p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                  {cert.icon}
                </div>
                <div className="text-left">
                  <div className="font-semibold text-slate-800">{cert.title}</div>
                  <div className="text-sm text-slate-600">{cert.subtitle}</div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl p-8 text-white text-center">
            <h4 className="text-xl font-bold mb-4">Verified License Information</h4>
            <p className="text-emerald-100 mb-4">
              Verify my license status with the Florida Department of Financial Services
            </p>
            <a
              href="https://www.myfloridacfo.com/Division/Agents/PublicAccess/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-emerald-600 px-6 py-3 rounded-lg font-medium hover:bg-emerald-50 transition-colors"
            >
              <Shield className="w-4 h-4" />
              Verify License W347851
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
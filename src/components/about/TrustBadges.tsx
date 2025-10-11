import { Shield, CheckCircle, Users, Star, Award, TrendingUp } from "lucide-react";
import Reveal from "../Reveal";

const trustBadges = [
  {
    icon: CheckCircle,
    title: "Licensed Florida Broker",
    subtitle: `W347851`,
    description: "State verified insurance professional",
    color: "text-brand-jade-500"
  },
  {
    icon: Award,
    title: "8+ Years Experience", 
    subtitle: "Since 2016",
    description: "Proven track record of excellence",
    color: "text-brand-sky-500"
  },
  {
    icon: Users,
    title: "1,000+ Families Served",
    subtitle: "Growing Daily",
    description: "Trusted by families across 3 states",
    color: "text-brand-jade-500"
  },
  {
    icon: Star,
    title: "A+ Rated Carrier Partners",
    subtitle: "Top Tier Networks",
    description: "Exclusive access to premium carriers",
    color: "text-brand-sky-500"
  },
  {
    icon: Shield,
    title: "Licensed & Bonded Professional",
    subtitle: "Full Protection",
    description: "Complete regulatory compliance",
    color: "text-brand-jade-500"
  },
  {
    icon: TrendingUp,
    title: "$50M+ Coverage Placed",
    subtitle: "Industry Leading",
    description: "Comprehensive protection delivered",
    color: "text-brand-sky-500"
  }
];

export default function TrustBadges() {
  return (
    <section className="py-20 bg-surface-base">
      <div className="container mx-auto px-5 max-w-6xl">
        <Reveal>
          <div className="text-center mb-12">
            <h2 className="text-[2.25rem] md:text-[2.25rem] font-[700] mb-4 text-ink-900">Professional Credentials & Trust Signals</h2>
            <p className="text-[1.25rem] font-[400] text-slate-600">Verified expertise you can rely on</p>
          </div>
        </Reveal>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustBadges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <Reveal key={badge.title} delay={index * 0.1}>
                <div className="p-8 bg-white rounded-lg border border-surface-glassLine hover:shadow-luxury transition-all duration-300"
                     style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)' }}>
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r from-brand-jade-500 to-brand-sky-500 flex items-center justify-center flex-shrink-0`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-[1.125rem] font-[700] ${badge.color} mb-1`}>
                        {badge.title}
                      </h3>
                      <div className="text-[0.875rem] font-[600] text-slate-500 mb-2">
                        {badge.subtitle}
                      </div>
                      <p className="text-[0.875rem] text-slate-600 leading-relaxed">
                        {badge.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
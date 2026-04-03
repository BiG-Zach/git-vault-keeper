import { Shield, Users, TrendingUp, Award } from "lucide-react";
import Reveal from "../Reveal";

const milestones = [
  {
    year: "2016",
    title: "Licensed Florida Insurance Broker",
    description: "Obtained Florida insurance license W347851",
    icon: Shield,
    color: "text-brand-jade-500"
  },
  {
    year: "2017-2024", 
    title: "8+ Years Serving Families",
    description: "Continuous service excellence across multiple states",
    icon: Users,
    color: "text-brand-sky-500"
  },
  {
    year: "Present",
    title: "1,000+ Policies Placed", 
    description: "Trusted advisor for over 1,000 families",
    icon: TrendingUp,
    color: "text-brand-jade-500"
  },
  {
    year: "Achievement",
    title: "$50M+ Coverage Delivered",
    description: "Comprehensive protection across all markets",
    icon: Award,
    color: "text-brand-sky-500"
  }
];

export default function CareerTimeline() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 my-12">
      {milestones.map((milestone, index) => {
        const Icon = milestone.icon;
        return (
          <Reveal key={milestone.year} delay={index * 0.1}>
            <div className="text-center p-6 bg-white rounded-lg border border-surface-glassLine"
                 style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)' }}>
              <div className={`w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-brand-jade-500 to-brand-sky-500 flex items-center justify-center`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <div className={`text-lg font-[700] ${milestone.color} mb-2`}>
                {milestone.year}
              </div>
              <h3 className="text-[1rem] font-[600] text-ink-900 mb-2 leading-tight">
                {milestone.title}
              </h3>
              <p className="text-[0.875rem] text-slate-600 leading-relaxed">
                {milestone.description}
              </p>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
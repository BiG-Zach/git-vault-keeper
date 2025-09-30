import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Award, Users, TrendingUp, Calendar, MapPin, Phone } from 'lucide-react';
import { BRAND } from '../../lib/brand';

const AuthoritySection = () => {
  const prefersReducedMotion = useReducedMotion();

const achievements = [
  {
    icon: Award,
    number: "15+",
    label: "Years Licensed",
    description: "Insurance professionals since 2008"
  },
  {
    icon: Users,
    number: "5,000+",
    label: "Clients Served",
    description: "Multi-state client base"
  },
  {
    icon: TrendingUp,
    number: "$2.5B",
    label: "Coverage Volume",
    description: "Total policy face amounts"
  },
  {
    icon: Calendar,
    number: "6",
    label: "Licensed States",
    description: "FL, MI, NC, AZ, TX, GA"
  }
];

const certifications = [
  { name: "Licensed Insurance Professional", code: `NPN ${BRAND.npn}` },
  { name: "Health Insurance Appointments", code: "Multi-Carrier" },
  { name: "Life Insurance Appointments", code: "Multi-Carrier" },
  { name: "A-Rated Carrier Partnerships", code: "Direct Appointments" }
];

const awards = [
  "BBB A+ Rating",
  "Licensed in Six States",
  "A-Rated Carrier Partnerships",
  "Year-Round Enrollment Support"
];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Luxury background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,rgba(34,197,94,0.1)_0%,transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,rgba(59,130,246,0.1)_0%,transparent_50%)]" />
        {/* Visual Masterpiece Background */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full overflow-hidden">





        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-6 relative z-10">

      </div>
    </section>
  );
};

export default AuthoritySection;
import React, { MouseEvent } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { Globe, DollarSign, TrendingDown, Award } from 'lucide-react';
import { US_STATE_PATHS } from '../ExpansionTracker/us-paths';

export default function TrustInfrastructure() {
    return (
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[minmax(200px,auto)]">
                {/* Card A: Claims Success Rate with Large Gauge */}
                <div className="md:col-span-2 md:row-span-1">
                    <SpotlightCard className="h-full group/card">
                        <div className="relative h-full flex items-center gap-8 p-8 z-20 overflow-hidden">
                            {/* Animated gradient background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-green-500/10 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700" />

                            {/* Circular Gauge - Now Primary Element */}
                            <div className="relative flex items-center justify-center w-48 h-48 shrink-0">
                                {/* Outer glow */}
                                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/30 to-green-500/30 rounded-full blur-2xl animate-pulse" />

                                <svg className="w-full h-full -rotate-90" viewBox="0 0 160 160">
                                    {/* Background circle */}
                                    <circle
                                        cx="80"
                                        cy="80"
                                        r="70"
                                        fill="none"
                                        stroke="#e2e8f0"
                                        strokeWidth="12"
                                    />
                                    {/* Animated progress circle */}
                                    <motion.circle
                                        cx="80"
                                        cy="80"
                                        r="70"
                                        fill="none"
                                        stroke="url(#gaugeGradient)"
                                        strokeWidth="12"
                                        strokeLinecap="round"
                                        strokeDasharray="440"
                                        initial={{ strokeDashoffset: 440 }}
                                        animate={{ strokeDashoffset: 440 - (440 * 0.99) }}
                                        transition={{ duration: 2.5, ease: "easeOut", delay: 0.3 }}
                                    />
                                    <defs>
                                        <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stopColor="#10b981" />
                                            <stop offset="50%" stopColor="#059669" />
                                            <stop offset="100%" stopColor="#047857" />
                                        </linearGradient>
                                    </defs>
                                </svg>

                                {/* Center content */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                    <motion.span
                                        className="text-5xl font-bold bg-gradient-to-br from-emerald-600 to-emerald-800 bg-clip-text text-transparent"
                                        initial={{ opacity: 0, scale: 0.5 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.8, delay: 0.5 }}
                                    >
                                        99%
                                    </motion.span>
                                    <span className="text-sm text-slate-600 font-semibold mt-1">Success Rate</span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="relative z-10 flex-1">
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="p-2 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-lg shadow-lg">
                                        <Award className="w-5 h-5 text-white" />
                                    </div>
                                    <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Industry Leading</span>
                                </div>

                                <h3 className="text-2xl font-bold text-slate-900 mb-3 leading-tight">
                                    Exceptional Claims Approval Rate
                                </h3>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    Our proven track record of securing approvals and maximizing benefits means you get the coverage you deserve, when you need it most.
                                </p>
                            </div>
                        </div>
                    </SpotlightCard>
                </div>

                {/* Card B: Nationwide Coverage with Proper US Map */}
                <div className="md:col-span-1 md:row-span-2">
                    <SpotlightCard className="h-full group/card">
                        <div className="relative h-full flex flex-col p-6 z-20">
                            {/* Animated gradient background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-500/10 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700" />

                            {/* Header */}
                            <div className="relative z-10 mb-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full" />
                                        <div className="relative p-2.5 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl shadow-lg">
                                            <Globe className="w-6 h-6 text-white" />
                                        </div>
                                    </div>
                                    <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">Coast to Coast</span>
                                </div>

                                <h3 className="text-xl font-bold text-slate-900 mb-2 leading-tight">
                                    Complete US Coverage
                                </h3>
                                <p className="text-xs text-slate-600 leading-relaxed">
                                    Access to 6 major PPO networks spanning all 50 states with 1.4M+ providers nationwide
                                </p>
                            </div>

                            {/* Proper US Map Visualization */}
                            <div className="relative flex-grow rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200/50 overflow-hidden p-6 flex items-center justify-center">
                                <svg viewBox="0 0 960 600" className="w-full h-full" style={{ maxHeight: '300px' }}>
                                    <defs>
                                        <linearGradient id="mapGradient" x1="0" y1="0" x2="960" y2="600" gradientUnits="userSpaceOnUse">
                                            <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.7" />
                                            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.9" />
                                        </linearGradient>
                                    </defs>

                                    {/* US Map States */}
                                    <motion.g
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 1.5, ease: "easeOut" }}
                                    >
                                        {Object.values(US_STATE_PATHS).map((d, i) => (
                                            <path
                                                key={i}
                                                d={d}
                                                fill="url(#mapGradient)"
                                                stroke="white"
                                                strokeWidth="1"
                                                strokeOpacity="0.5"
                                            />
                                        ))}
                                    </motion.g>

                                    {/* Coverage network nodes */}
                                    {[
                                        { x: 860, y: 180 }, // New York
                                        { x: 100, y: 350 }, // Los Angeles
                                        { x: 630, y: 210 }, // Chicago
                                        { x: 500, y: 480 }, // Houston
                                        { x: 780, y: 530 }, // Miami
                                        { x: 120, y: 60 },  // Seattle
                                        { x: 60, y: 280 },  // San Francisco
                                        { x: 350, y: 280 }, // Denver
                                        { x: 700, y: 380 }, // Atlanta
                                        { x: 480, y: 400 }, // Dallas
                                        { x: 200, y: 380 }, // Phoenix
                                        { x: 890, y: 150 }  // Boston
                                    ].map((point, i) => (
                                        <g key={i}>
                                            {/* Expanding circle */}
                                            <motion.circle
                                                cx={point.x}
                                                cy={point.y}
                                                r="20"
                                                fill="none"
                                                stroke="#3b82f6"
                                                strokeWidth="2"
                                                opacity="0.3"
                                                initial={{ scale: 0 }}
                                                animate={{ scale: [0, 1.5, 0] }}
                                                transition={{
                                                    duration: 3,
                                                    repeat: Infinity,
                                                    delay: i * 0.3
                                                }}
                                            />
                                            {/* Central dot */}
                                            <motion.circle
                                                cx={point.x}
                                                cy={point.y}
                                                r="4"
                                                fill="#3b82f6"
                                                initial={{ scale: 0, opacity: 0 }}
                                                animate={{ scale: 1, opacity: 1 }}
                                                transition={{
                                                    duration: 0.5,
                                                    delay: i * 0.1
                                                }}
                                            />
                                        </g>
                                    ))}
                                </svg>


                            </div>
                        </div>
                    </SpotlightCard>
                </div>

                {/* Card C: Multi-Carrier Price Comparison */}
                <div className="md:col-span-2 md:row-span-1">
                    <SpotlightCard className="h-full group/card">
                        <div className="relative h-full flex items-center p-6 z-20">
                            {/* Animated gradient background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700" />

                            <div className="relative z-10 flex items-center gap-6 w-full">
                                {/* Icon and text */}
                                <div className="flex-1">
                                    <div className="flex items-center gap-4 mb-3">
                                        <div className="relative">
                                            <div className="absolute inset-0 bg-purple-500/20 blur-xl rounded-full animate-pulse" />
                                            <div className="relative p-2.5 bg-gradient-to-br from-purple-400 to-blue-500 rounded-xl shadow-lg">
                                                <DollarSign className="w-6 h-6 text-white" />
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-300/30 backdrop-blur-sm">
                                            <TrendingDown className="w-3 h-3 text-purple-600" />
                                            <span className="text-xs font-bold text-purple-700 uppercase tracking-wide">Save More</span>
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold text-slate-900 mb-1">
                                        Multi-Carrier Price Comparison
                                    </h3>
                                    <p className="text-sm text-slate-600">
                                        Compare rates from 10+ carriers to find your best value
                                    </p>
                                </div>

                                {/* Price Comparison Visualization */}
                                <div className="hidden sm:flex items-end gap-3 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl px-6 py-5 border border-purple-200/50">
                                    {[
                                        { height: 85, label: 'A', color: 'from-slate-400 to-slate-500' },
                                        { height: 78, label: 'B', color: 'from-slate-400 to-slate-500' },
                                        { height: 92, label: 'C', color: 'from-slate-400 to-slate-500' },
                                        { height: 58, label: 'Us', color: 'from-purple-500 to-blue-500', highlight: true }
                                    ].map((bar, i) => (
                                        <div key={i} className="flex flex-col items-center gap-2">
                                            <motion.div
                                                className={`w-10 bg-gradient-to-t ${bar.color} rounded-t-lg relative ${bar.highlight ? 'shadow-lg ring-2 ring-purple-400' : ''}`}
                                                style={{ height: '60px' }}
                                                initial={{ scaleY: 0 }}
                                                animate={{ scaleY: bar.height / 100 }}
                                                transition={{
                                                    duration: 1,
                                                    delay: i * 0.1,
                                                    ease: "easeOut"
                                                }}
                                            >
                                                {bar.highlight && (
                                                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold text-purple-600 whitespace-nowrap">
                                                        Save 30%
                                                    </div>
                                                )}
                                            </motion.div>
                                            <span className={`text-xs font-semibold ${bar.highlight ? 'text-purple-600' : 'text-slate-500'}`}>
                                                {bar.label}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </SpotlightCard>
                </div>
            </div >
        </div >
    );
}

function SpotlightCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <div
            className={`group relative border border-white/60 bg-white/70 overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] ${className}`}
            onMouseMove={handleMouseMove}
        >
            {/* Spotlight effect */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              500px circle at ${mouseX}px ${mouseY}px,
              rgba(16, 185, 129, 0.15),
              transparent 70%
            )
          `,
                }}
            />

            {/* Glossy glass effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/60 to-white/40 backdrop-blur-2xl" />

            {/* Border glow on hover */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-emerald-500/20 via-transparent to-teal-500/20 blur-xl" />

            {children}
        </div>
    );
}

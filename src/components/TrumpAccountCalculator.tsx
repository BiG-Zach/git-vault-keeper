import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function TrumpAccountCalculator() {
    const [birthYear, setBirthYear] = useState<number>(new Date().getFullYear());
    const [parentIncome, setParentIncome] = useState<number>(75000);
    const [familyContribution, setFamilyContribution] = useState<number>(2500); // Default to annual match max?

    // Constants based on "Trump Accounts" / OBBBA
    const GOVT_CONTRIBUTION = 1000; // Annual? Or one-time? Assuming annual limit based on context "Contribution limit is..."
    const FAMILY_LIMIT = 5000;
    const EMPLOYER_MATCH_LIMIT = 2500;
    const GROWTH_RATE = 0.07; // 7% annual return

    // Calculate projection
    const calculateProjection = () => {
        const currentYear = new Date().getFullYear();
        const startYear = currentYear;

        let balance = 0;
        const data = [];

        for (let i = 0; i <= 18; i++) {
            const year = startYear + i;
            const age = year - birthYear;

            if (age < 0) continue;
            if (age > 18) break;

            // Annual Contributions
            // Assuming Govt contributes $1000/yr for eligible kids (simplified logic)
            // Assuming Family contributes selected amount
            // Assuming Employer matches up to $2500 if Family contributes

            const annualGovt = GOVT_CONTRIBUTION;
            const annualFamily = Math.min(familyContribution, FAMILY_LIMIT);
            const annualEmployer = Math.min(annualFamily, EMPLOYER_MATCH_LIMIT);

            if (i > 0) {
                balance = balance * (1 + GROWTH_RATE) + annualGovt + annualFamily + annualEmployer;
            } else {
                // Initial deposit?
                balance = annualGovt + annualFamily + annualEmployer;
            }

            data.push({
                age: `Age ${age}`,
                value: Math.round(balance),
                govt: Math.round(annualGovt * (i + 1)), // Cumulative for chart stacking might be complex, keeping simple value
                distributable: Math.round(balance)
            });
        }
        return data;
    };

    const chartData = calculateProjection();
    const projectedTotal = chartData[chartData.length - 1]?.value || 0;

    return (
        <div className="w-full max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200">
            <div className="bg-slate-900 p-6 md:p-8">
                <h3 className="text-2xl font-luxury-serif font-bold text-white mb-2">
                    Federal Legacy Account Projector
                </h3>
                <p className="text-slate-400">
                    Estimate the tax-free growth potential of the new 2026 OBBBA savings vehicle.
                </p>
            </div>

            <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-12 gap-12">
                {/* Controls */}
                <div className="md:col-span-5 space-y-8">
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                            Child's Birth Year
                        </label>
                        <input
                            type="number"
                            min={2008}
                            max={2030}
                            value={birthYear}
                            onChange={(e) => setBirthYear(Number(e.target.value))}
                            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all font-mono text-lg"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                            Household Income (AGI)
                        </label>
                        <div className="relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">$</span>
                            <input
                                type="number"
                                step={5000}
                                value={parentIncome}
                                onChange={(e) => setParentIncome(Number(e.target.value))}
                                className="w-full pl-8 pr-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all font-mono text-lg"
                            />
                        </div>
                        <p className="text-xs text-slate-500 mt-2">
                            Used to determine Federal Contribution eligibility.
                        </p>
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                            Annual Family Contribution
                        </label>
                        <div className="relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">$</span>
                            <input
                                type="range"
                                min={0}
                                max={5000}
                                step={100}
                                value={familyContribution}
                                onChange={(e) => setFamilyContribution(Number(e.target.value))}
                                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-500 mb-4"
                            />
                        </div>
                        <div className="flex justify-between items-center bg-slate-50 p-3 rounded-lg border border-slate-200">
                            <span className="text-sm text-slate-600">Your Contribution:</span>
                            <span className="font-mono font-bold text-emerald-700">${familyContribution.toLocaleString()}</span>
                        </div>
                    </div>

                    <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100">
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium text-emerald-800">Employer Match (Est.):</span>
                            <span className="font-bold text-emerald-600">+${Math.min(familyContribution, 2500).toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm font-medium text-emerald-800">Federal Base (Est.):</span>
                            <span className="font-bold text-emerald-600">+${GOVT_CONTRIBUTION.toLocaleString()}</span>
                        </div>
                    </div>
                </div>

                {/* Visualization */}
                <div className="md:col-span-7 flex flex-col justify-between">
                    <div className="mb-8 text-center">
                        <span className="block text-sm font-semibold text-slate-500 uppercase tracking-wider mb-1">Projected Value at Age 18</span>
                        <span className="text-5xl font-bold text-emerald-600 tracking-tight">
                            ${projectedTotal.toLocaleString()}
                        </span>
                        <span className="block text-xs text-slate-400 mt-2">*Assumes 7% annual growth. Not investment advice.</span>
                    </div>

                    <div className="h-64 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={chartData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                                <defs>
                                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.2} />
                                        <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                                <XAxis dataKey="age" tick={{ fontSize: 12, fill: '#64748b' }} tickLine={false} axisLine={false} interval={4} />
                                <YAxis tick={{ fontSize: 12, fill: '#64748b' }} tickLine={false} axisLine={false} tickFormatter={(value) => `$${value / 1000}k`} />
                                <Tooltip
                                    contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', border: 'none' }}
                                    itemStyle={{ color: '#059669', fontWeight: 600 }}
                                    formatter={(value: number) => [`$${value.toLocaleString()}`, 'Projected Value']}
                                />
                                <Area
                                    type="monotone"
                                    dataKey="value"
                                    stroke="#10b981"
                                    strokeWidth={3}
                                    fillOpacity={1}
                                    fill="url(#colorValue)"
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>

                    <button className="w-full mt-6 bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2 group">
                        Open a Federal Legacy Account
                        <svg className="w-5 h-5 text-emerald-400 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}

import React, { useState } from 'react';
import { Calculator, Heart, Shield, TrendingUp, Mail, ChevronRight } from 'lucide-react';

interface CalculatorProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  isActive: boolean;
  onClick: () => void;
}

function CalculatorCard({ title, description, icon, color, isActive, onClick }: CalculatorProps) {
  return (
    <div 
      className={`group cursor-pointer p-6 rounded-xl border transition-all duration-300 ${
        isActive 
          ? `${color} border-transparent shadow-xl scale-105` 
          : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-lg'
      }`}
      onClick={onClick}
    >
      <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
        isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
      }`}>
        {icon}
      </div>
      <h3 className={`font-semibold mb-2 ${isActive ? 'text-white' : 'text-slate-800'}`}>
        {title}
      </h3>
      <p className={`text-sm ${isActive ? 'text-white/80' : 'text-slate-600'}`}>
        {description}
      </p>
    </div>
  );
}

interface LifeInsuranceCalculatorProps {
  onEmailCapture: (email: string, result: number) => void;
}

function LifeInsuranceCalculator({ onEmailCapture }: LifeInsuranceCalculatorProps) {
  const [income, setIncome] = useState('');
  const [dependents, setDependents] = useState('');
  const [debt, setDebt] = useState('');
  const [email, setEmail] = useState('');
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    const annualIncome = parseInt(income) || 0;
    const numDependents = parseInt(dependents) || 0;
    const totalDebt = parseInt(debt) || 0;
    
    // Simple calculation: 10x income + debt + $100k per dependent
    const recommendation = (annualIncome * 10) + totalDebt + (numDependents * 100000);
    setResult(recommendation);
  };

  const handleEmailSubmit = () => {
    if (email && result) {
      onEmailCapture(email, result);
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Annual Income</label>
          <input
            type="number"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
            placeholder="75000"
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Number of Dependents</label>
          <input
            type="number"
            value={dependents}
            onChange={(e) => setDependents(e.target.value)}
            placeholder="2"
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Total Debt</label>
          <input
            type="number"
            value={debt}
            onChange={(e) => setDebt(e.target.value)}
            placeholder="250000"
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          />
        </div>
      </div>
      
      <button
        onClick={calculate}
        className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300"
      >
        Calculate Coverage Needed
      </button>

      {result && (
        <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6">
          <h4 className="font-semibold text-emerald-800 mb-2">Recommended Coverage</h4>
          <p className="text-2xl font-bold text-emerald-600 mb-4">
            ${result.toLocaleString()}
          </p>
          <p className="text-sm text-emerald-700 mb-4">
            This calculation is based on the 10x income rule plus debt coverage and dependent support.
          </p>
          
          <div className="flex gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Get detailed analysis via email"
              className="flex-1 px-3 py-2 border border-emerald-300 rounded focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            />
            <button
              onClick={handleEmailSubmit}
              className="bg-emerald-600 text-white px-4 py-2 rounded hover:bg-emerald-700 transition-colors flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

interface HealthSavingsResult {
  savings: number;
  recommendation: string;
}

function HealthSavingsCalculator() {
  const [currentPremium, setCurrentPremium] = useState('');
  const [deductible, setDeductible] = useState('');
  const [usage, setUsage] = useState('low');
  const [result, setResult] = useState<HealthSavingsResult | null>(null);

  const calculate = () => {
    const premium = parseInt(currentPremium) || 0;
    const ded = parseInt(deductible) || 0;
    
    let savings = 0;
    let recommendation = '';
    
    if (usage === 'low' && ded < 5000) {
      savings = premium * 0.3;
      recommendation = 'Consider a High Deductible Health Plan for 30% savings';
    } else if (usage === 'high' && ded > 3000) {
      savings = premium * 0.2;
      recommendation = 'Consider a lower deductible plan for better coverage';
    } else {
      savings = premium * 0.15;
      recommendation = 'Your current plan seems well-suited to your usage';
    }
    
    setResult({ savings: Math.round(savings), recommendation });
  };

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Monthly Premium</label>
          <input
            type="number"
            value={currentPremium}
            onChange={(e) => setCurrentPremium(e.target.value)}
            placeholder="450"
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Current Deductible</label>
          <input
            type="number"
            value={deductible}
            onChange={(e) => setDeductible(e.target.value)}
            placeholder="2500"
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Healthcare Usage</label>
          <select
            value={usage}
            onChange={(e) => setUsage(e.target.value)}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="low">Low (1-2 visits/year)</option>
            <option value="moderate">Moderate (3-6 visits/year)</option>
            <option value="high">High (Monthly visits)</option>
          </select>
        </div>
      </div>
      
      <button
        onClick={calculate}
        className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300"
      >
        Calculate Potential Savings
      </button>

      {result && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h4 className="font-semibold text-blue-800 mb-2">Savings Analysis</h4>
          <p className="text-2xl font-bold text-blue-600 mb-4">
            ${result.savings}/month potential savings
          </p>
          <p className="text-sm text-blue-700">
            {result.recommendation}
          </p>
        </div>
      )}
    </div>
  );
}

const CALCULATOR_CONFIGS = [
  {
    id: 'life',
    title: 'Life Insurance Needs Calculator',
    description: 'Determine the right coverage amount for your family',
    icon: <Heart className="w-6 h-6" />,
    color: 'bg-gradient-to-r from-emerald-500 to-emerald-600'
  },
  {
    id: 'health',
    title: 'Health Insurance Savings Calculator',
    description: 'Find potential savings on your health insurance',
    icon: <Shield className="w-6 h-6" />,
    color: 'bg-gradient-to-r from-blue-500 to-blue-600'
  },
  {
    id: 'comparison',
    title: 'Premium Comparison Tool',
    description: 'Compare curated carrier options side-by-side',
    icon: <Calculator className="w-6 h-6" />,
    color: 'bg-gradient-to-r from-purple-500 to-purple-600'
  },
  {
    id: 'retirement',
    title: 'Retirement Planning Calculator',
    description: 'Plan your retirement with life insurance investments',
    icon: <TrendingUp className="w-6 h-6" />,
    color: 'bg-gradient-to-r from-amber-500 to-amber-600'
  }
];

export default function PremiumCalculators() {
  const [activeCalculator, setActiveCalculator] = useState<string | null>(null);
  const [emailCaptured, setEmailCaptured] = useState(false);

  const handleEmailCapture = (_email: string, _result: number) => {
    // In a real app, this would send to your backend
    setEmailCaptured(true);
    setTimeout(() => setEmailCaptured(false), 3000);
  };

  return (
    <section className="section bg-slate-50">
      <div className="container-default">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Calculator className="w-4 h-4" />
            Interactive Tools
          </div>
          <h2 className="h2 mb-4">Premium Calculation Suite</h2>
          <p className="lead text-slate-600 max-w-3xl mx-auto">
            Use our professional-grade calculators to make informed decisions about your insurance needs
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {CALCULATOR_CONFIGS.map((calc) => (
            <CalculatorCard
              key={calc.id}
              title={calc.title}
              description={calc.description}
              icon={calc.icon}
              color={calc.color}
              isActive={activeCalculator === calc.id}
              onClick={() => setActiveCalculator(activeCalculator === calc.id ? null : calc.id)}
            />
          ))}
        </div>

        {/* Active Calculator */}
        {activeCalculator && (
          <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-200">
            {activeCalculator === 'life' && (
              <>
                <h3 className="text-2xl font-bold mb-6 text-slate-800">Life Insurance Needs Calculator</h3>
                <LifeInsuranceCalculator onEmailCapture={handleEmailCapture} />
              </>
            )}
            {activeCalculator === 'health' && (
              <>
                <h3 className="text-2xl font-bold mb-6 text-slate-800">Health Insurance Savings Calculator</h3>
                <HealthSavingsCalculator />
              </>
            )}
            {activeCalculator === 'comparison' && (
              <div className="text-center py-12">
                <Calculator className="w-16 h-16 text-purple-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4 text-slate-800">Premium Comparison Tool</h3>
                <p className="text-slate-600 mb-6">Compare tailored options from Aetna, Cigna, UnitedHealthcare, and more</p>
                <a
                  href="https://calendly.com/bradfordinformedguidance"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Request Personalized Guidance <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            )}
            {activeCalculator === 'retirement' && (
              <div className="text-center py-12">
                <TrendingUp className="w-16 h-16 text-amber-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4 text-slate-800">Retirement Planning Calculator</h3>
                <p className="text-slate-600 mb-6">Optimize your retirement strategy with life insurance investments</p>
                <a
                  href="https://calendly.com/bradfordinformedguidance"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Schedule Retirement Consultation <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            )}
          </div>
        )}

        {emailCaptured && (
          <div className="fixed bottom-4 right-4 bg-emerald-500 text-white px-6 py-3 rounded-lg shadow-lg">
            ✓ Analysis sent to your email!
          </div>
        )}
      </div>
    </section>
  );
}

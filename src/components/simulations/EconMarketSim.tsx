import React, { useState } from 'react';
import { Subtopic } from '../../types';
import { TrendingUp, RotateCcw, ArrowRight, DollarSign, Users, AlertCircle } from 'lucide-react';

interface SimProps {
  subtopic: Subtopic;
  onComplete: () => void;
}

export const EconMarketSim: React.FC<SimProps> = ({ subtopic, onComplete }) => {
  const [price, setPrice] = useState<number>(10); // $ (2 to 20)
  const unitCost = 3.5;

  // Demand curve: Qd = 200 - 10 * P
  const quantityDemanded = Math.max(0, Math.round(200 - 10 * price));
  // Supply curve: Qs = 20 + 8 * P
  const quantitySupplied = Math.max(0, Math.round(20 + 8 * price));

  // Equilibrium is around P = $10, Q = 100
  const unitsSold = Math.min(quantityDemanded, quantitySupplied);
  const revenue = Math.round(unitsSold * price);
  const totalCost = Math.round(quantitySupplied * unitCost);
  const profit = Math.round(revenue - totalCost);

  const marketCondition =
    quantityDemanded > quantitySupplied
      ? 'SHORTAGE (Excess Demand - Long lines, sold out early!)'
      : quantitySupplied > quantityDemanded
      ? 'SURPLUS (Excess Supply - Unsold inventory spoiled!)'
      : 'PERFECT MARKET EQUILIBRIUM (Market Cleared)';

  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase tracking-wider font-extrabold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
              Microeconomics & Price Equilibrium
            </span>
            <span className="text-xs font-mono text-slate-500">Economics 1: Supply & Demand</span>
          </div>
          <h3 className="text-2xl font-black text-slate-900 mt-2">
            {subtopic.experience?.title || 'Stadium Food Truck Market Equilibrium Challenge'}
          </h3>
          <p className="text-sm text-slate-600 mt-1 max-w-2xl">
            Tune meal price to balance consumer demand with kitchen supply. Discover the market equilibrium price that maximizes profit without causing shortages or waste.
          </p>
        </div>

        <div className="flex items-center gap-2 bg-emerald-50 text-emerald-800 px-4 py-2 rounded-2xl text-xs font-bold border border-emerald-200">
          <TrendingUp className="w-4 h-4 text-emerald-600" />
          <span>Equilibrium Target: $10.00</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Market Visual Graph Viewport */}
        <div className="lg:col-span-7 bg-slate-950 rounded-2xl p-6 border border-slate-800 flex flex-col justify-between min-h-[380px] relative overflow-hidden">
          {/* Top Telemetry */}
          <div className="flex justify-between items-center text-xs font-mono bg-slate-900/90 text-slate-200 px-4 py-2.5 rounded-xl border border-slate-800 z-10">
            <span>Price: <strong className="text-emerald-400 font-bold">${price.toFixed(2)}</strong></span>
            <span>Demanded: <strong className="text-sky-400 font-bold">{quantityDemanded}</strong></span>
            <span>Supplied: <strong className="text-amber-400 font-bold">{quantitySupplied}</strong></span>
          </div>

          {/* Central Supply & Demand Curves SVG */}
          <div className="my-auto py-4 relative flex items-center justify-center">
            <div className="w-full max-w-md h-56 bg-slate-900/80 rounded-2xl border border-slate-700 p-4 relative flex flex-col justify-between">
              {/* Axes labels */}
              <div className="flex justify-between text-[10px] font-mono text-slate-400">
                <span>Price (P) ↑</span>
                <span>Supply Curve (S) ↗</span>
              </div>

              {/* Supply and Demand intersecting lines */}
              <svg className="w-full h-36 overflow-visible">
                {/* Demand Line (Down sloping: from (20, 20) to (320, 120)) */}
                <line x1="20" y1="20" x2="320" y2="120" stroke="#38bdf8" strokeWidth="3" />
                {/* Supply Line (Up sloping: from (20, 120) to (320, 20)) */}
                <line x1="20" y1="120" x2="320" y2="20" stroke="#f59e0b" strokeWidth="3" />

                {/* Equilibrium Point Marker at intersection (170, 70) */}
                <circle cx="170" cy="70" r="6" fill="#10b981" className="animate-pulse" />
                <text x="180" y="65" fill="#10b981" fontSize="10" fontFamily="monospace" fontWeight="bold">
                  Eq ($10, 100u)
                </text>

                {/* Dynamic Student Price line */}
                <line
                  x1="10"
                  y1={130 - price * 6}
                  x2="330"
                  y2={130 - price * 6}
                  stroke="#ef4444"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                />
                <text x="15" y={125 - price * 6} fill="#ef4444" fontSize="10" fontFamily="monospace" fontWeight="bold">
                  Your Price: ${price}
                </text>
              </svg>

              <div className="flex justify-between text-[10px] font-mono text-slate-400">
                <span>Demand Curve (D) ↘</span>
                <span>Quantity Traded (Q) →</span>
              </div>
            </div>
          </div>

          {/* Bottom Live Market Status */}
          <div className="bg-slate-900/90 rounded-xl p-3 text-xs text-slate-300 font-mono flex items-center justify-between border border-slate-800 z-10">
            <span className={profit > 500 ? 'text-emerald-400 font-bold' : 'text-slate-300'}>
              Net Profit: ${profit} (Rev: ${revenue} | Costs: ${totalCost})
            </span>
            <span className="text-amber-400 font-bold text-[11px]">{marketCondition}</span>
          </div>
        </div>

        {/* Real Economic Controls */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-5">
            <h4 className="text-sm font-bold text-slate-800 flex items-center gap-2">
              <DollarSign className="w-4 h-4 text-emerald-600" /> Market Pricing Controls
            </h4>

            {/* Price Slider */}
            <div>
              <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1.5">
                <span>Menu Price per Gourmet Taco</span>
                <span className="font-mono text-emerald-600 font-bold text-base">${price.toFixed(2)}</span>
              </div>
              <input
                type="range"
                min="3"
                max="18"
                step="1"
                value={price}
                onChange={(e) => setPrice(parseInt(e.target.value, 10))}
                className="w-full accent-emerald-600 h-2 bg-slate-200 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
                <span>$3 (Extreme Shortage)</span>
                <span>$10 (Equilibrium)</span>
                <span>$18 (Excess Waste)</span>
              </div>
            </div>

            {/* Quick Metrics Cards */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white p-3 rounded-xl border border-slate-200">
                <span className="text-[10px] text-slate-500 block">UNITS TRADED</span>
                <span className="text-lg font-bold font-mono text-slate-800">{unitsSold} tacos</span>
              </div>
              <div className="bg-white p-3 rounded-xl border border-slate-200">
                <span className="text-[10px] text-slate-500 block">TOTAL REVENUE</span>
                <span className="text-lg font-bold font-mono text-emerald-600">${revenue}</span>
              </div>
            </div>

            <div className="bg-emerald-50/80 p-3.5 rounded-xl border border-emerald-200 text-xs text-slate-700 leading-relaxed">
              <strong className="text-emerald-900 block mb-1">Law of Supply & Demand:</strong>
              As price rises, quantity demanded falls while producers want to supply more. Equilibrium price clears the market with zero waste and zero frustrated empty queues!
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => setPrice(10)}
              className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Equilibrium ($10)
            </button>
            <button
              onClick={onComplete}
              className="flex-1 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold rounded-xl shadow-md transition-all text-xs flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Analyze Results (What Happened?)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

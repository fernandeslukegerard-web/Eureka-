import React, { useState } from 'react';
import {
  TrendingUp,
  ArrowLeft,
  RotateCcw,
  Globe,
  Sliders,
  DollarSign,
  ShieldCheck,
  Check,
  Info
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const TradeChallengeGame: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  // Policy controls
  const [tariffRate, setTariffRate] = useState<number>(5); // percentage (0 - 30%)
  const [exchangeRate, setExchangeRate] = useState<number>(1.08); // USD/EUR
  const [subsidies, setSubsidies] = useState<number>(10); // million USD
  const [transportCost, setTransportCost] = useState<number>(15); // $/ton

  // Benchmark real-world reference info (Dated clearly as requested)
  const realWorldBenchmark = {
    source: 'World Trade Organization (WTO) & World Bank Reference Data (2025/2026)',
    globalTariffAverage: '4.8%',
    containerFreightIndex: '$1,850 / FEU',
    inflationBenchmark: '2.6% YoY'
  };

  // Simulation calculations
  // Export competitiveness decreases if tariff is high or currency is too strong
  const exportVolume = Math.round(Math.max(10, 120 - tariffRate * 2.2 + subsidies * 1.5 - (exchangeRate - 1.0) * 100));
  const importVolume = Math.round(Math.max(10, 80 + (exchangeRate - 1.0) * 80 - tariffRate * 1.8));

  const exportRevenue = Math.round(exportVolume * 45); // million $
  const importExpenditure = Math.round(importVolume * 42 * (1 + tariffRate / 100)); // million $

  const tradeBalance = exportRevenue - importExpenditure; // positive = surplus, negative = deficit
  const domesticConsumerPriceIndex = (100 + tariffRate * 0.45 + transportCost * 0.2).toFixed(1);

  const isSurplus = tradeBalance >= 0;

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl text-slate-100 flex flex-col space-y-6 p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl transition-colors cursor-pointer"
            title="Return to Games Home"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl">💱</span>
              <h2 className="text-xl font-black text-white">Trade Challenge: International Equilibrium</h2>
              <span className="text-[10px] font-mono uppercase font-bold px-2 py-0.5 rounded-full bg-pink-950 text-pink-300 border border-pink-800">
                Economics
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              Supply, Demand &amp; Macroeconomic Policy — Balance import tariffs, exchange rates, and transport costs to achieve trade equilibrium.
            </p>
          </div>
        </div>

        <button
          onClick={() => {
            setTariffRate(5);
            setExchangeRate(1.08);
            setSubsidies(10);
            setTransportCost(15);
          }}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-700 bg-slate-950 hover:bg-slate-800 text-xs font-mono text-slate-300 hover:text-white transition-colors cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset Policy</span>
        </button>
      </div>

      {/* Real-World Reference Notice */}
      <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
        <div className="flex items-center gap-2 text-slate-400">
          <Info className="w-4 h-4 text-blue-400 shrink-0" />
          <span>External Benchmark: <strong className="text-white">{realWorldBenchmark.source}</strong></span>
        </div>
        <div className="flex items-center gap-4 text-slate-400 text-[11px]">
          <span>Global Tariff Avg: <strong className="text-emerald-400">{realWorldBenchmark.globalTariffAverage}</strong></span>
          <span>Freight Index: <strong className="text-amber-400">{realWorldBenchmark.containerFreightIndex}</strong></span>
        </div>
      </div>

      {/* Main Trade Dashboard */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Trade Balance & Key Macro Indicators */}
        <div className="lg:col-span-8 space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className={`p-5 rounded-3xl border ${isSurplus ? 'bg-emerald-950/40 border-emerald-800/80' : 'bg-rose-950/40 border-rose-800/80'}`}>
              <span className="text-[10px] font-mono uppercase font-bold text-slate-400 block">
                Net Trade Balance
              </span>
              <span className={`text-2xl font-black font-mono mt-1 block ${isSurplus ? 'text-emerald-400' : 'text-rose-400'}`}>
                {isSurplus ? `+$${tradeBalance}M Surplus` : `-$${Math.abs(tradeBalance)}M Deficit`}
              </span>
              <span className="text-[10px] font-mono text-slate-500 mt-1 block">
                Export Revenue - Import Outflow
              </span>
            </div>

            <div className="p-5 rounded-3xl bg-slate-950 border border-slate-800">
              <span className="text-[10px] font-mono uppercase font-bold text-slate-400 block">
                Export Volume
              </span>
              <span className="text-2xl font-black font-mono text-cyan-400 mt-1 block">
                ${exportRevenue}M
              </span>
              <span className="text-[10px] font-mono text-slate-500 mt-1 block">
                {exportVolume}k Metric Tons
              </span>
            </div>

            <div className="p-5 rounded-3xl bg-slate-950 border border-slate-800">
              <span className="text-[10px] font-mono uppercase font-bold text-slate-400 block">
                Domestic Consumer Price Index
              </span>
              <span className="text-2xl font-black font-mono text-amber-400 mt-1 block">
                {domesticConsumerPriceIndex}
              </span>
              <span className="text-[10px] font-mono text-slate-500 mt-1 block">
                Base Index: 100.0
              </span>
            </div>
          </div>

          {/* Interactive Trade Flow Diagram */}
          <div className="p-6 rounded-3xl bg-slate-950 border border-slate-800 space-y-4">
            <h3 className="font-extrabold text-sm text-white flex items-center gap-2">
              <Globe className="w-4 h-4 text-blue-400" />
              <span>Bilateral Trade Corridor Visualization</span>
            </h3>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-slate-900 border border-slate-800">
              <div className="text-center p-3 rounded-xl bg-slate-950 border border-slate-800 w-44">
                <span className="text-2xl">🏛️</span>
                <span className="text-xs font-bold text-white block mt-1">Domestic Economy</span>
                <span className="text-[10px] text-slate-500 font-mono">Currency: USD</span>
              </div>

              <div className="flex-1 flex flex-col items-center gap-2 w-full">
                <div className="flex items-center justify-between w-full text-[10px] font-mono text-slate-400">
                  <span>Exports ➔</span>
                  <span className="font-bold text-emerald-400">${exportRevenue}M</span>
                </div>
                <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-emerald-500 h-full rounded-full transition-all"
                    style={{ width: `${Math.min(100, (exportRevenue / 6000) * 100)}%` }}
                  />
                </div>

                <div className="flex items-center justify-between w-full text-[10px] font-mono text-slate-400 mt-1">
                  <span>Imports 🠔</span>
                  <span className="font-bold text-rose-400">${importExpenditure}M</span>
                </div>
                <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-rose-500 h-full rounded-full transition-all"
                    style={{ width: `${Math.min(100, (importExpenditure / 6000) * 100)}%` }}
                  />
                </div>
              </div>

              <div className="text-center p-3 rounded-xl bg-slate-950 border border-slate-800 w-44">
                <span className="text-2xl">🚢</span>
                <span className="text-xs font-bold text-white block mt-1">Global Trade Partners</span>
                <span className="text-[10px] text-slate-500 font-mono">Tariff Barrier: {tariffRate}%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Policy Levers */}
        <div className="lg:col-span-4 space-y-4 bg-slate-950 border border-slate-800 rounded-3xl p-5">
          <h3 className="text-xs font-mono uppercase font-extrabold tracking-wider text-slate-400 flex items-center gap-2">
            <Sliders className="w-4 h-4 text-pink-400" />
            <span>Trade Policy Instruments</span>
          </h3>

          {/* Import Tariff */}
          <div>
            <div className="flex justify-between items-center text-xs font-mono mb-1">
              <span className="text-slate-400">Import Tariff Rate:</span>
              <span className="text-amber-400 font-bold">{tariffRate}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="30"
              step="1"
              value={tariffRate}
              onChange={(e) => setTariffRate(parseInt(e.target.value, 10))}
              className="w-full accent-pink-500 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] font-mono text-slate-600 mt-0.5">
              <span>Free Trade (0%)</span>
              <span>Protective (30%)</span>
            </div>
          </div>

          {/* Currency Exchange Rate */}
          <div>
            <div className="flex justify-between items-center text-xs font-mono mb-1">
              <span className="text-slate-400">Exchange Rate (USD/EUR):</span>
              <span className="text-cyan-400 font-bold">{exchangeRate.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min="0.90"
              max="1.30"
              step="0.02"
              value={exchangeRate}
              onChange={(e) => setExchangeRate(parseFloat(e.target.value))}
              className="w-full accent-cyan-500 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] font-mono text-slate-600 mt-0.5">
              <span>Strong USD (0.90)</span>
              <span>Weaker USD (1.30)</span>
            </div>
          </div>

          {/* Export Subsidies */}
          <div>
            <div className="flex justify-between items-center text-xs font-mono mb-1">
              <span className="text-slate-400">Export Subsidies:</span>
              <span className="text-emerald-400 font-bold">${subsidies}M</span>
            </div>
            <input
              type="range"
              min="0"
              max="30"
              step="5"
              value={subsidies}
              onChange={(e) => setSubsidies(parseInt(e.target.value, 10))}
              className="w-full accent-emerald-500 cursor-pointer"
            />
          </div>

          {/* Economic Insight Card */}
          <div className="p-3.5 bg-slate-900/60 border border-slate-800 rounded-xl text-[11px] text-slate-400 leading-relaxed font-sans">
            <span className="font-bold text-white block mb-0.5">Economic Principle:</span>
            Higher tariffs shield domestic producers and shrink import outflow, but raise consumer prices (CPI). A depreciation in domestic currency makes exports cheaper abroad and imports more expensive.
          </div>
        </div>
      </div>
    </div>
  );
};

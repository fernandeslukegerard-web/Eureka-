import React, { useState } from 'react';
import {
  Briefcase,
  ArrowLeft,
  RotateCcw,
  TrendingUp,
  DollarSign,
  Users,
  Award,
  Sparkles,
  Info
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const EntrepreneurChallengeGame: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [quarter, setQuarter] = useState<number>(1);
  const [capital, setCapital] = useState<number>(20000); // USD
  const [productPrice, setProductPrice] = useState<number>(120); // USD
  const [marketingBudget, setMarketingBudget] = useState<number>(2500); // USD
  const [staffCount, setStaffCount] = useState<number>(3);
  const [inventoryOrder, setInventoryOrder] = useState<number>(200); // units

  // History of quarterly performance
  const [quarterHistory, setQuarterHistory] = useState<
    { quarter: number; revenue: number; profit: number; unitsSold: number }[]
  >([]);

  const realWorldClimate = {
    source: 'Federal Reserve / OECD Economic Outlook Benchmark (2025/2026)',
    inflationRate: '2.8%',
    interestRate: '4.25%',
    consumerConfidenceIndex: '104.2'
  };

  // Run next quarterly simulation
  const handleSimulateQuarter = () => {
    // Demand calculation: base demand influenced by price elasticity & marketing
    const priceFactor = Math.max(0.2, (200 - productPrice) / 100);
    const marketingFactor = Math.sqrt(marketingBudget / 1000) * 0.8;
    const estimatedDemand = Math.round(150 * priceFactor * marketingFactor);

    // Units sold cannot exceed inventory or production capacity (staffCount * 80 units)
    const productionCapacity = staffCount * 80;
    const availableSupply = Math.min(inventoryOrder, productionCapacity);
    const unitsSold = Math.min(estimatedDemand, availableSupply);

    const revenue = unitsSold * productPrice;
    const cogs = unitsSold * 45; // Cost of goods sold: $45/unit
    const staffSalaries = staffCount * 3000;
    const overhead = 1500;
    const totalExpenses = cogs + staffSalaries + marketingBudget + overhead;
    const profit = revenue - totalExpenses;

    const nextCapital = capital + profit;
    setCapital(nextCapital);

    const record = { quarter, revenue, profit, unitsSold };
    setQuarterHistory((prev) => [...prev, record]);

    if (quarter >= 4) {
      try {
        confetti({ particleCount: 75, spread: 65, origin: { y: 0.6 } });
      } catch {}
    }

    setQuarter((prev) => prev + 1);
  };

  const handleResetEnterprise = () => {
    setQuarter(1);
    setCapital(20000);
    setProductPrice(120);
    setMarketingBudget(2500);
    setStaffCount(3);
    setInventoryOrder(200);
    setQuarterHistory([]);
  };

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
              <span className="text-xl">🏢</span>
              <h2 className="text-xl font-black text-white">Entrepreneur Challenge: Venture Growth</h2>
              <span className="text-[10px] font-mono uppercase font-bold px-2 py-0.5 rounded-full bg-indigo-950 text-indigo-300 border border-indigo-800">
                Business Studies
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              Enterprise Strategy &amp; Market Dynamics — Optimize pricing, marketing reach, and workforce to build a sustainable business.
            </p>
          </div>
        </div>

        <button
          onClick={handleResetEnterprise}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-700 bg-slate-950 hover:bg-slate-800 text-xs font-mono text-slate-300 hover:text-white transition-colors cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Restart Venture</span>
        </button>
      </div>

      {/* External Reference Benchmark */}
      <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
        <div className="flex items-center gap-2 text-slate-400">
          <Info className="w-4 h-4 text-indigo-400 shrink-0" />
          <span>Real-World Benchmark: <strong className="text-white">{realWorldClimate.source}</strong></span>
        </div>
        <div className="flex items-center gap-4 text-slate-400 text-[11px]">
          <span>Inflation: <strong className="text-amber-400">{realWorldClimate.inflationRate}</strong></span>
          <span>Consumer Confidence: <strong className="text-emerald-400">{realWorldClimate.consumerConfidenceIndex}</strong></span>
        </div>
      </div>

      {/* Executive Overview */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono text-xs">
        <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800">
          <span className="text-[10px] text-slate-500 uppercase block font-bold">Cash Reserves</span>
          <span className="text-xl font-black text-emerald-400 mt-0.5 block">${capital.toLocaleString()}</span>
        </div>
        <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800">
          <span className="text-[10px] text-slate-500 uppercase block font-bold">Fiscal Quarter</span>
          <span className="text-xl font-black text-cyan-400 mt-0.5 block">Quarter {quarter}</span>
        </div>
        <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800">
          <span className="text-[10px] text-slate-500 uppercase block font-bold">Production Capacity</span>
          <span className="text-xl font-black text-amber-400 mt-0.5 block">{staffCount * 80} Units</span>
        </div>
        <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800">
          <span className="text-[10px] text-slate-500 uppercase block font-bold">Total Sales To Date</span>
          <span className="text-xl font-black text-purple-400 mt-0.5 block">
            {quarterHistory.reduce((acc, q) => acc + q.unitsSold, 0)} Units
          </span>
        </div>
      </div>

      {/* Decision Console & Growth History */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Management Levers */}
        <div className="lg:col-span-6 space-y-4 bg-slate-950 border border-slate-800 rounded-3xl p-5">
          <h3 className="text-xs font-mono uppercase font-extrabold tracking-wider text-slate-400 flex items-center gap-2">
            <Briefcase className="w-4 h-4 text-indigo-400" />
            <span>Quarterly Executive Decisions</span>
          </h3>

          {/* Pricing */}
          <div>
            <div className="flex justify-between items-center text-xs font-mono mb-1">
              <span className="text-slate-400">Unit Retail Price:</span>
              <span className="text-white font-bold">${productPrice}</span>
            </div>
            <input
              type="range"
              min="60"
              max="240"
              step="5"
              value={productPrice}
              onChange={(e) => setProductPrice(parseInt(e.target.value, 10))}
              className="w-full accent-indigo-500 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] font-mono text-slate-600 mt-0.5">
              <span>Competitive ($60)</span>
              <span>Premium ($240)</span>
            </div>
          </div>

          {/* Marketing Budget */}
          <div>
            <div className="flex justify-between items-center text-xs font-mono mb-1">
              <span className="text-slate-400">Digital Ads &amp; Marketing:</span>
              <span className="text-cyan-400 font-bold">${marketingBudget}</span>
            </div>
            <input
              type="range"
              min="500"
              max="6000"
              step="250"
              value={marketingBudget}
              onChange={(e) => setMarketingBudget(parseInt(e.target.value, 10))}
              className="w-full accent-cyan-500 cursor-pointer"
            />
          </div>

          {/* Staff Count */}
          <div>
            <div className="flex justify-between items-center text-xs font-mono mb-1">
              <span className="text-slate-400">Employed Staff &amp; Technicians:</span>
              <span className="text-amber-400 font-bold">{staffCount} Employees</span>
            </div>
            <input
              type="range"
              min="1"
              max="10"
              step="1"
              value={staffCount}
              onChange={(e) => setStaffCount(parseInt(e.target.value, 10))}
              className="w-full accent-amber-500 cursor-pointer"
            />
          </div>

          {/* Inventory Batch Order */}
          <div>
            <div className="flex justify-between items-center text-xs font-mono mb-1">
              <span className="text-slate-400">Inventory Batch Production:</span>
              <span className="text-purple-400 font-bold">{inventoryOrder} Units</span>
            </div>
            <input
              type="range"
              min="50"
              max="600"
              step="25"
              value={inventoryOrder}
              onChange={(e) => setInventoryOrder(parseInt(e.target.value, 10))}
              className="w-full accent-purple-500 cursor-pointer"
            />
          </div>

          <button
            type="button"
            onClick={handleSimulateQuarter}
            className="w-full py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold rounded-xl text-xs sm:text-sm shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <TrendingUp className="w-4 h-4" />
            <span>Simulate Quarter {quarter} Financial Results →</span>
          </button>
        </div>

        {/* Growth Ledger Table */}
        <div className="lg:col-span-6 space-y-4 bg-slate-950 border border-slate-800 rounded-3xl p-5">
          <h3 className="text-xs font-mono uppercase font-extrabold tracking-wider text-slate-400">
            Quarterly Performance Ledger
          </h3>

          {quarterHistory.length === 0 ? (
            <p className="text-xs text-slate-500 font-mono py-8 text-center">
              Configure parameters on the left and simulate Quarter 1 to see financial performance.
            </p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-mono">
                <thead>
                  <tr className="border-b border-slate-800 text-slate-500 uppercase text-[10px]">
                    <th className="py-2">Period</th>
                    <th className="py-2">Units</th>
                    <th className="py-2">Revenue</th>
                    <th className="py-2 text-right">Net Profit</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-900">
                  {quarterHistory.map((rec) => (
                    <tr key={rec.quarter}>
                      <td className="py-2.5 font-bold text-white">Q{rec.quarter}</td>
                      <td className="py-2.5 text-slate-300">{rec.unitsSold} units</td>
                      <td className="py-2.5 text-cyan-400">${rec.revenue.toLocaleString()}</td>
                      <td className={`py-2.5 text-right font-black ${rec.profit >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                        {rec.profit >= 0 ? `+$${rec.profit.toLocaleString()}` : `-$${Math.abs(rec.profit).toLocaleString()}`}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {quarter > 4 && (
            <div className="p-4 bg-gradient-to-r from-indigo-950/60 to-purple-950/60 border border-indigo-700/80 rounded-2xl text-center space-y-1">
              <Award className="w-6 h-6 text-amber-400 mx-auto" />
              <h4 className="font-bold text-white text-sm">Year 1 Completed!</h4>
              <p className="text-xs text-indigo-200">
                You successfully navigated operational scaling and market demand curves.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

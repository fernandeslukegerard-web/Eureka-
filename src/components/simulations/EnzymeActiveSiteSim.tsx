import React, { useState, useEffect } from 'react';
import { Subtopic } from '../../types';
import { Dna, RotateCcw, ArrowRight, Play, AlertCircle, CheckCircle, Activity } from 'lucide-react';

interface SimProps {
  subtopic: Subtopic;
  onComplete: () => void;
}

export const EnzymeActiveSiteSim: React.FC<SimProps> = ({ subtopic, onComplete }) => {
  const [temp, setTemp] = useState<number>(37); // °C (10 to 70)
  const [ph, setPh] = useState<number>(7.0); // pH (2 to 12)
  const [substrateConc, setSubstrateConc] = useState<number>(50); // % (10 to 100)
  const [reactionRate, setReactionRate] = useState<number>(85); // %
  const [productYield, setProductYield] = useState<number>(0);

  // Denaturation occurs when temperature > 45°C or pH moves far away from 7.0 (optimum)
  const isDenatured = temp > 50 || Math.abs(ph - 7.0) > 3.0;

  useEffect(() => {
    if (isDenatured) {
      setReactionRate(0);
      return;
    }

    // Optimum bell curve around 37-40°C
    const tempEffect = Math.max(0, 100 - Math.pow(temp - 38, 2) * 0.35);
    // Optimum bell curve around pH 7
    const phEffect = Math.max(0, 100 - Math.pow(ph - 7.0, 2) * 12);
    // Substrate saturation curve (Michaelis-Menten shape)
    const substrateEffect = (substrateConc / (substrateConc + 25)) * 100;

    const rate = Math.round((tempEffect * phEffect * substrateEffect) / 10000);
    setReactionRate(Math.min(100, Math.max(0, rate)));
  }, [temp, ph, substrateConc, isDenatured]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (reactionRate > 0) {
        setProductYield((y) => Math.min(100, y + reactionRate * 0.05));
      }
    }, 200);
    return () => clearInterval(timer);
  }, [reactionRate]);

  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase tracking-wider font-extrabold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
              Enzyme Kinetics & Lock-and-Key Mechanism
            </span>
            <span className="text-xs font-mono text-slate-500">Biology 5: Enzymes</span>
          </div>
          <h3 className="text-2xl font-black text-slate-900 mt-2">
            {subtopic.experience?.title || 'Enzyme Active Site & Denaturation Chamber'}
          </h3>
          <p className="text-sm text-slate-600 mt-1 max-w-2xl">
            Test how temperature, pH, and substrate concentration alter catalytic rate and active site conformation.
          </p>
        </div>

        <div className="flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-2xl text-xs font-bold border border-emerald-200">
          <Dna className="w-4 h-4 text-emerald-600" />
          <span>Lock & Key Active Site</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Enzyme Visual Viewport */}
        <div className="lg:col-span-7 bg-slate-950 rounded-2xl p-6 border border-slate-800 flex flex-col justify-between min-h-[380px] relative overflow-hidden">
          {/* Top Telemetry */}
          <div className="flex justify-between items-center text-xs font-mono bg-slate-900/90 text-slate-200 px-4 py-2.5 rounded-xl border border-slate-800 z-10">
            <span>Enzyme State: <strong className={isDenatured ? 'text-rose-400 font-bold' : 'text-emerald-400 font-bold'}>
              {isDenatured ? 'DENATURED (Active Site Lost)' : 'ACTIVE CONFORMATION'}
            </strong></span>
            <span>Catalytic Velocity: <strong className="text-amber-400 font-bold">{reactionRate}% Vmax</strong></span>
          </div>

          {/* Central Enzyme Molecule Graphic */}
          <div className="my-auto py-6 relative flex flex-col items-center justify-center">
            {/* Substrate Complex Shape */}
            <div className="relative flex flex-col items-center">
              {/* Substrate Key above active site */}
              <div
                className={`transition-all duration-300 flex items-center gap-1 p-2 rounded-lg font-mono text-xs font-bold shadow-lg ${
                  isDenatured
                    ? 'translate-y-[-40px] bg-rose-950 text-rose-300 border border-rose-600 opacity-60'
                    : 'translate-y-[-10px] bg-amber-400 text-slate-950 border-2 border-amber-300'
                }`}
              >
                <span>Substrate Key</span>
              </div>

              {/* Enzyme Body with Active Site Pocket */}
              <div
                className={`w-44 h-28 rounded-3xl p-4 flex flex-col items-center justify-end border-4 transition-all duration-500 shadow-2xl relative ${
                  isDenatured
                    ? 'bg-rose-950/40 border-rose-600 text-rose-300 scale-95'
                    : 'bg-emerald-950/70 border-emerald-500 text-emerald-200'
                }`}
              >
                {/* Active site notch pocket */}
                <div
                  className={`w-16 h-7 rounded-t-xl border-t-2 border-x-2 transition-all ${
                    isDenatured
                      ? 'bg-rose-900/60 border-rose-500 rounded-full'
                      : 'bg-slate-950 border-emerald-400'
                  }`}
                />
                <span className="text-xs font-mono font-bold mt-1">
                  {isDenatured ? 'Active Site Misshapen' : 'Enzyme Active Site'}
                </span>
              </div>
            </div>

            {/* Product Yield Progress Bar */}
            <div className="w-full max-w-xs mt-6">
              <div className="flex justify-between text-[11px] font-mono text-slate-400 mb-1">
                <span>Product Yield (Glucose + Fructose)</span>
                <span>{productYield.toFixed(1)}%</span>
              </div>
              <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 transition-all duration-200"
                  style={{ width: `${productYield}%` }}
                />
              </div>
            </div>
          </div>

          {/* Bottom Live Explanatory Banner */}
          <div className="bg-slate-900/90 rounded-xl p-3 text-xs text-slate-300 font-mono flex items-center justify-between border border-slate-800 z-10">
            <span>
              {isDenatured
                ? 'Denatured: High temperature/pH disrupted hydrogen bonds holding tertiary protein shape.'
                : temp < 30
                ? 'Low Temp: Low kinetic energy leads to fewer collisions between substrate and enzyme.'
                : 'Optimum: Substrates bind actively to complementary active site forming enzyme-substrate complex.'}
            </span>
          </div>
        </div>

        {/* Real Topic-Specific Enzyme Controls */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-5">
            <h4 className="text-sm font-bold text-slate-800 flex items-center gap-2">
              <Activity className="w-4 h-4 text-emerald-600" /> Enzyme Reaction Parameters
            </h4>

            {/* Incubation Temperature */}
            <div>
              <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1.5">
                <span>Incubation Temperature</span>
                <span className={`font-mono font-bold ${temp > 45 ? 'text-rose-600' : 'text-emerald-600'}`}>
                  {temp}°C {temp > 45 ? '(Denatures)' : temp === 37 ? '(Human Optimum)' : ''}
                </span>
              </div>
              <input
                type="range"
                min="10"
                max="65"
                step="1"
                value={temp}
                onChange={(e) => setTemp(parseInt(e.target.value, 10))}
                className="w-full accent-emerald-600 h-2 bg-slate-200 rounded-lg cursor-pointer"
              />
              <span className="text-[11px] text-slate-500 block mt-1">
                Optimum is ~37°C in human enzymes. Above 45°C, thermal vibrations destroy protein tertiary bonds.
              </span>
            </div>

            {/* pH Environment */}
            <div>
              <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1.5">
                <span>Solution pH</span>
                <span className="font-mono text-purple-600 font-bold">pH {ph.toFixed(1)}</span>
              </div>
              <input
                type="range"
                min="2.0"
                max="12.0"
                step="0.5"
                value={ph}
                onChange={(e) => setPh(parseFloat(e.target.value))}
                className="w-full accent-purple-600 h-2 bg-slate-200 rounded-lg cursor-pointer"
              />
              <span className="text-[11px] text-slate-500 block mt-1">
                Extreme acidity (pH &lt; 4) or alkalinity (pH &gt; 10) alters amino acid electrical charges.
              </span>
            </div>

            {/* Substrate Concentration */}
            <div>
              <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1.5">
                <span>Substrate Concentration</span>
                <span className="font-mono text-amber-600 font-bold">{substrateConc}% Saturation</span>
              </div>
              <input
                type="range"
                min="10"
                max="100"
                step="5"
                value={substrateConc}
                onChange={(e) => setSubstrateConc(parseInt(e.target.value, 10))}
                className="w-full accent-amber-600 h-2 bg-slate-200 rounded-lg cursor-pointer"
              />
              <span className="text-[11px] text-slate-500 block mt-1">
                Rate increases with substrate until all enzyme active sites are fully occupied (Vmax).
              </span>
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => {
                setTemp(37);
                setPh(7.0);
                setSubstrateConc(50);
              }}
              className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Optimum (37°C, pH 7)
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

import React, { useState, useEffect } from 'react';
import { Subtopic } from '../../types';
import { FlaskConical, RotateCcw, ArrowRight, Play, Flame, Gauge, Sparkles } from 'lucide-react';

interface SimProps {
  subtopic: Subtopic;
  onComplete: () => void;
}

export const ChemicalReactionSim: React.FC<SimProps> = ({ subtopic, onComplete }) => {
  const [temperature, setTemperature] = useState<number>(20); // °C (10 to 60)
  const [concentration, setConcentration] = useState<number>(1.0); // M (0.2 to 2.0)
  const [hasCatalyst, setHasCatalyst] = useState<boolean>(false);
  const [gasVolume, setGasVolume] = useState<number>(0); // cm³ (0 to 100)
  const [isReacting, setIsReacting] = useState<boolean>(false);
  const [elapsedSeconds, setElapsedSeconds] = useState<number>(0);

  // Rate of reaction calculation: Rate = k * [A]^2 * exp(-Ea/RT)
  // Base rate multiplier
  const tempFactor = Math.pow(1.04, temperature - 20); // reaction rate doubles roughly every 10°C
  const catalystFactor = hasCatalyst ? 3.0 : 1.0;
  const rateConstant = 1.2 * concentration * tempFactor * catalystFactor;

  useEffect(() => {
    let timer: any;
    if (isReacting && gasVolume < 100) {
      timer = setInterval(() => {
        setElapsedSeconds((s) => s + 0.2);
        setGasVolume((vol) => {
          const next = vol + rateConstant * 0.4;
          if (next >= 100) {
            setIsReacting(false);
            return 100;
          }
          return Math.round(next * 10) / 10;
        });
      }, 200);
    }
    return () => clearInterval(timer);
  }, [isReacting, gasVolume, rateConstant]);

  const handleStartReaction = () => {
    setGasVolume(0);
    setElapsedSeconds(0);
    setIsReacting(true);
  };

  const handleReset = () => {
    setIsReacting(false);
    setGasVolume(0);
    setElapsedSeconds(0);
    setTemperature(20);
    setConcentration(1.0);
    setHasCatalyst(false);
  };

  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase tracking-wider font-extrabold text-purple-600 bg-purple-50 px-3 py-1 rounded-full border border-purple-100">
              Reaction Kinetics & Rates of Reaction
            </span>
            <span className="text-xs font-mono text-slate-500">Chemistry: Stoichiometry & Rates</span>
          </div>
          <h3 className="text-2xl font-black text-slate-900 mt-2">
            {subtopic.experience?.title || 'Reaction Kinetics & Effervescence Gas Syringe Lab'}
          </h3>
          <p className="text-sm text-slate-600 mt-1 max-w-2xl">
            Investigate how temperature, reactant concentration, and catalytic manganese dioxide affect the rate of collision and gas evolution.
          </p>
        </div>

        <div className="flex items-center gap-2 bg-purple-50 text-purple-700 px-4 py-2 rounded-2xl text-xs font-bold border border-purple-200">
          <FlaskConical className="w-4 h-4 text-purple-600" />
          <span>Collision Theory Engine</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Reaction Apparatus Visual Viewport */}
        <div className="lg:col-span-7 bg-slate-950 rounded-2xl p-6 border border-slate-800 flex flex-col justify-between min-h-[380px] relative overflow-hidden">
          {/* Top Gas Syringe Telemetry */}
          <div className="flex justify-between items-center text-xs font-mono bg-slate-900/90 text-slate-200 px-4 py-2.5 rounded-xl border border-slate-800 z-10">
            <span>Collected Gas: <strong className="text-purple-400 font-bold">{gasVolume.toFixed(1)} cm³</strong> / 100 cm³</span>
            <span>Elapsed Time: <strong className="text-amber-400 font-bold">{elapsedSeconds.toFixed(1)} s</strong></span>
            <span>Current Rate: <strong className="text-emerald-400 font-bold">{(rateConstant * 2).toFixed(1)} cm³/s</strong></span>
          </div>

          {/* Central Animated Reaction Apparatus */}
          <div className="my-auto py-4 flex flex-col items-center justify-center relative">
            {/* Gas Syringe Barrel */}
            <div className="w-full max-w-md bg-slate-900 p-3 rounded-2xl border border-slate-700 mb-6 flex items-center gap-3">
              <span className="text-[10px] font-mono text-slate-400 shrink-0">GAS SYRINGE:</span>
              <div className="flex-1 h-5 bg-slate-800 rounded-lg relative overflow-hidden border border-slate-700">
                <div
                  className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 transition-all duration-150"
                  style={{ width: `${gasVolume}%` }}
                />
              </div>
              <span className="font-mono text-xs font-bold text-purple-300 w-16 text-right">
                {gasVolume.toFixed(1)} cm³
              </span>
            </div>

            {/* Reaction Conical Flask with Effervescence */}
            <div className="relative flex flex-col items-center">
              {/* Delivery tube connecting flask to syringe */}
              <div className="w-2 h-10 bg-slate-600 rounded-t" />

              {/* Glass Conical Flask SVG / Shape */}
              <div className="relative w-36 h-40 bg-gradient-to-b from-slate-800/80 to-purple-950/60 border-2 border-slate-500 rounded-b-3xl rounded-t-lg overflow-hidden flex flex-col justify-end p-2 shadow-2xl">
                {/* Liquid Reactant Level */}
                <div className="w-full h-20 bg-purple-500/30 border-t-2 border-purple-400/50 rounded-b-2xl relative overflow-hidden flex items-center justify-center">
                  {/* Effervescence Gas Bubbles if reacting */}
                  {isReacting && (
                    <div className="absolute inset-0 flex flex-wrap justify-around items-end p-1 animate-pulse">
                      <div className="w-2 h-2 rounded-full bg-white/70 animate-bounce" />
                      <div className="w-1.5 h-1.5 rounded-full bg-white/80 animate-bounce delay-75" />
                      <div className="w-2.5 h-2.5 rounded-full bg-white/60 animate-bounce delay-150" />
                      <div className="w-1.5 h-1.5 rounded-full bg-white/90 animate-bounce delay-100" />
                    </div>
                  )}

                  {hasCatalyst && (
                    <div className="absolute bottom-1 bg-slate-900 text-[9px] font-mono text-purple-300 px-2 py-0.5 rounded-full border border-purple-400/30">
                      MnO₂ Catalyst Active
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Live Reaction Status */}
          <div className="bg-slate-900/90 rounded-xl p-3 text-xs text-slate-300 font-mono flex items-center justify-between border border-slate-800 z-10">
            <span>
              {isReacting
                ? 'Reaction in progress: Reactant particles colliding with energy $\\ge E_a$.'
                : gasVolume >= 100
                ? 'Reaction Complete: Reactants fully exhausted.'
                : 'Apparatus primed. Click "Start Reaction" to mix reactants.'}
            </span>
          </div>
        </div>

        {/* Real Reaction Kinetics Controls */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-5">
            <h4 className="text-sm font-bold text-slate-800 flex items-center gap-2">
              <FlaskConical className="w-4 h-4 text-purple-600" /> Kinetic Variable Controls
            </h4>

            {/* Temperature Slider */}
            <div>
              <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1.5">
                <span>Reaction Temperature</span>
                <span className="font-mono text-rose-600 font-bold">{temperature}°C</span>
              </div>
              <input
                type="range"
                min="10"
                max="60"
                step="5"
                disabled={isReacting}
                value={temperature}
                onChange={(e) => setTemperature(parseInt(e.target.value, 10))}
                className="w-full accent-rose-600 h-2 bg-slate-200 rounded-lg cursor-pointer disabled:opacity-50"
              />
              <span className="text-[11px] text-slate-500 block mt-1">
                Higher temperature imparts kinetic energy, multiplying successful collision frequency.
              </span>
            </div>

            {/* Reactant Concentration Slider */}
            <div>
              <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1.5">
                <span>Reactant Acid Concentration</span>
                <span className="font-mono text-purple-600 font-bold">{concentration.toFixed(1)} M (mol/dm³)</span>
              </div>
              <input
                type="range"
                min="0.2"
                max="2.0"
                step="0.2"
                disabled={isReacting}
                value={concentration}
                onChange={(e) => setConcentration(parseFloat(e.target.value))}
                className="w-full accent-purple-600 h-2 bg-slate-200 rounded-lg cursor-pointer disabled:opacity-50"
              />
              <span className="text-[11px] text-slate-500 block mt-1">
                More particles per unit volume yields higher collision frequency per second.
              </span>
            </div>

            {/* Catalyst Toggle */}
            <div>
              <button
                type="button"
                disabled={isReacting}
                onClick={() => setHasCatalyst(!hasCatalyst)}
                className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold border transition-all cursor-pointer flex items-center justify-between ${
                  hasCatalyst
                    ? 'bg-purple-600 text-white border-purple-700 shadow-sm'
                    : 'bg-white text-purple-900 border-slate-200 hover:bg-purple-50'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-purple-400" />
                  <span>Add Catalyst (MnO₂ Black Powder)</span>
                </div>
                <span className="font-mono text-[10px] uppercase">{hasCatalyst ? 'ADDED (+300% Speed)' : 'NONE'}</span>
              </button>
              <span className="text-[11px] text-slate-500 block mt-1">
                Catalysts provide an alternative pathway with lower Activation Energy ($E_a$).
              </span>
            </div>

            {/* Trigger Button */}
            <button
              onClick={handleStartReaction}
              disabled={isReacting}
              className="w-full py-3 bg-purple-600 hover:bg-purple-500 disabled:opacity-50 text-white font-bold rounded-xl shadow-md transition-all text-xs flex items-center justify-center gap-2 cursor-pointer"
            >
              <Play className="w-4 h-4 fill-white" />
              <span>{isReacting ? 'Reaction in Progress...' : 'Start Reaction Run'}</span>
            </button>
          </div>

          <div className="flex gap-3">
            <button
              onClick={handleReset}
              className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Reset Flask
            </button>
            <button
              onClick={onComplete}
              className="flex-1 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold rounded-xl shadow-md transition-all text-xs flex items-center justify-center gap-2 cursor-pointer"
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

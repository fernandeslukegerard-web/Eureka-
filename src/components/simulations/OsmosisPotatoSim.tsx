import React, { useState, useEffect } from 'react';
import { Subtopic } from '../../types';
import {
  RotateCcw,
  CheckCircle,
  Droplets,
  ArrowRight,
  TrendingDown,
  TrendingUp,
  Activity,
  Layers
} from 'lucide-react';

interface SimProps {
  subtopic: Subtopic;
  onComplete: () => void;
}

export const OsmosisPotatoSim: React.FC<SimProps> = ({ subtopic, onComplete }) => {
  // Sucrose concentration in mol/dm^3: 0.0 (pure water), 0.2, 0.4, 0.6, 0.8, 1.0
  const [sucroseConc, setSucroseConc] = useState<number>(0.0);
  const [incubationTime, setIncubationTime] = useState<number>(0); // 0 to 60 minutes
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [challengeDone, setChallengeDone] = useState<boolean>(false);

  // Potato tissue intracellular solute concentration is ~0.3 mol/dm^3
  // If external concentration < 0.3 (Hypotonic) -> Water enters by osmosis -> Mass increases (turgid)
  // If external concentration > 0.3 (Hypertonic) -> Water leaves by osmosis -> Mass decreases (flaccid/plasmolysed)
  // At 0.3 (Isotonic) -> Net movement = 0
  const initialMass = 5.00; // grams
  const maxPercentChange = (0.30 - sucroseConc) * 45; // e.g. at 0.0 M -> +13.5%; at 1.0 M -> -31.5%
  
  // As time progresses, mass approaches equilibrium
  const timeFactor = 1 - Math.exp(-incubationTime / 20);
  const currentPercentChange = Math.round(maxPercentChange * timeFactor * 10) / 10;
  const currentMass = Math.max(2.5, Math.round((initialMass * (1 + currentPercentChange / 100)) * 100) / 100);

  useEffect(() => {
    let interval: any;
    if (isSimulating && incubationTime < 60) {
      interval = setInterval(() => {
        setIncubationTime((t) => {
          if (t >= 60) {
            setIsSimulating(false);
            setChallengeDone(true);
            onComplete();
            return 60;
          }
          return t + 5;
        });
      }, 200);
    }
    return () => clearInterval(interval);
  }, [isSimulating, incubationTime, onComplete]);

  const handleStartExperiment = () => {
    setIsSimulating(true);
  };

  const handleReset = () => {
    setIsSimulating(false);
    setIncubationTime(0);
  };

  // State text
  const cellState =
    currentPercentChange > 2
      ? 'TURGID (Cells swollen with high turgor pressure against cell wall)'
      : currentPercentChange < -2
      ? 'FLACCID / PLASMOLYSED (Cytoplasm pulled away from cell wall)'
      : 'INCIPIENT PLASMOLYSIS (Isotonic equilibrium)';

  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase tracking-wider font-extrabold text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              Osmotic Potential Laboratory
            </span>
            <span className="text-xs font-mono text-slate-500">Biology: Diffusion, Osmosis & Active Transport</span>
          </div>
          <h3 className="text-2xl font-black text-slate-900 mt-2">
            {subtopic.experience?.title || 'Plant Tissue & Visking Tubing Osmosis Lab'}
          </h3>
          <p className="text-sm text-slate-600 mt-1 max-w-2xl">
            Immerse potato cylinders in varied sucrose concentrations. Track net movement of water molecules down water potential gradients across selectively permeable cell membranes.
          </p>
        </div>

        {challengeDone && (
          <div className="flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-2xl text-xs font-bold border border-emerald-200">
            <CheckCircle className="w-4 h-4 text-emerald-600" />
            <span>Osmotic Equilibrium Data Logged!</span>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Beaker & Potato Cylinder Visual Viewport */}
        <div className="lg:col-span-7 bg-slate-950 rounded-2xl p-6 border border-slate-800 flex flex-col justify-between min-h-[380px] relative overflow-hidden">
          {/* Top Telemetry */}
          <div className="flex justify-between items-center text-xs font-mono bg-slate-900/90 text-slate-200 px-4 py-2.5 rounded-xl border border-slate-800 z-10">
            <span>External Solute: <strong className="text-amber-400">{sucroseConc} M Sucrose</strong></span>
            <span>Elapsed: <strong className="text-sky-400">{incubationTime} mins</strong></span>
            <span>Mass: <strong className={currentPercentChange >= 0 ? 'text-emerald-400' : 'text-rose-400'}>
              {currentMass.toFixed(2)} g ({currentPercentChange >= 0 ? `+${currentPercentChange}%` : `${currentPercentChange}%`})
            </strong></span>
          </div>

          {/* Beaker with solution and submerged potato strip */}
          <div className="my-auto py-6 flex flex-col items-center justify-center relative">
            {/* Glass Beaker Outline */}
            <div className="w-52 h-64 border-4 border-t-0 border-blue-400/50 rounded-b-3xl relative flex flex-col justify-end p-4 bg-blue-950/20 backdrop-blur-xs">
              {/* Solution Fluid Level */}
              <div
                className={`w-full rounded-b-2xl transition-all duration-500 relative flex items-center justify-center border-t-2 ${
                  sucroseConc === 0
                    ? 'h-44 bg-sky-500/20 border-sky-400/40'
                    : 'h-44 bg-amber-500/20 border-amber-400/40'
                }`}
              >
                {/* Potato Core Cylinder submerged */}
                <div
                  className={`w-14 rounded-lg border-2 transition-all duration-500 flex flex-col items-center justify-center shadow-lg ${
                    currentPercentChange > 0
                      ? 'h-28 bg-amber-200/90 border-amber-400 scale-105'
                      : currentPercentChange < 0
                      ? 'h-24 bg-amber-300/60 border-amber-600 scale-95'
                      : 'h-26 bg-amber-200/80 border-amber-300'
                  }`}
                >
                  <span className="text-[10px] font-mono font-bold text-amber-950">POTATO</span>
                  <span className="text-[9px] font-mono text-amber-900 font-bold">{currentMass.toFixed(2)}g</span>
                </div>

                {/* Animated water molecules diffusion arrows */}
                {isSimulating && (
                  <div className="absolute inset-0 flex items-center justify-around pointer-events-none text-xs">
                    {sucroseConc < 0.3 ? (
                      <span className="animate-ping text-sky-300 font-bold text-lg">💧➔</span>
                    ) : (
                      <span className="animate-ping text-amber-300 font-bold text-lg">⬅💧</span>
                    )}
                  </div>
                )}
              </div>

              {/* Beaker calibration markings */}
              <div className="absolute left-2 top-8 text-[9px] font-mono text-slate-500 space-y-3">
                <div>- 200ml</div>
                <div>- 150ml</div>
                <div>- 100ml</div>
                <div>- 50ml</div>
              </div>
            </div>
          </div>

          {/* Cell turgidity indicator */}
          <div className="bg-slate-900/90 rounded-xl p-3 border border-slate-800 text-xs font-mono flex items-center justify-between text-slate-300">
            <div>Cell Turgor Status:</div>
            <div className={`font-bold ${currentPercentChange > 0 ? 'text-emerald-400' : currentPercentChange < 0 ? 'text-rose-400' : 'text-amber-400'}`}>
              {cellState}
            </div>
          </div>
        </div>

        {/* Lab Controls */}
        <div className="lg:col-span-5 space-y-4">
          {/* Sucrose Concentration */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
              External Solution Sucrose Concentration
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[0.0, 0.2, 0.4, 0.6, 0.8, 1.0].map((conc) => (
                <button
                  key={conc}
                  onClick={() => {
                    setSucroseConc(conc);
                    handleReset();
                  }}
                  className={`py-2 rounded-xl border text-xs font-mono font-bold text-center transition-all cursor-pointer ${
                    sucroseConc === conc
                      ? 'bg-blue-600 border-blue-600 text-white shadow-xs'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {conc.toFixed(1)} M
                </button>
              ))}
            </div>
          </div>

          {/* Action Simulation Controls */}
          <div className="flex gap-3 pt-2">
            <button
              onClick={handleStartExperiment}
              disabled={isSimulating}
              className={`flex-1 py-3 px-4 rounded-xl font-bold text-xs shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer ${
                isSimulating
                  ? 'bg-slate-300 text-slate-600'
                  : 'bg-blue-600 hover:bg-blue-500 text-white'
              }`}
            >
              <Droplets className="w-4 h-4" />
              <span>{isSimulating ? 'Osmosis Occurring...' : 'Start 60-Min Incubation'}</span>
            </button>

            <button
              onClick={handleReset}
              className="p-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl transition-colors cursor-pointer"
              title="Reset Test"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>

          {/* Scientific Calculation Table */}
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-2 text-xs">
            <div className="font-bold text-slate-800 flex items-center justify-between">
              <span>Scientific Data Output</span>
              <span className="font-mono text-blue-600">Initial: {initialMass.toFixed(2)} g</span>
            </div>
            <div className="flex justify-between text-slate-600">
              <span>Final Measured Mass:</span>
              <span className="font-mono font-bold">{currentMass.toFixed(2)} g</span>
            </div>
            <div className="flex justify-between text-slate-600">
              <span>Percentage Change in Mass:</span>
              <span className={`font-mono font-bold ${currentPercentChange >= 0 ? 'text-emerald-600' : 'text-rose-600'}`}>
                {currentPercentChange >= 0 ? `+${currentPercentChange}%` : `${currentPercentChange}%`}
              </span>
            </div>
            <p className="text-[11px] text-slate-500 pt-1 border-t border-slate-200">
              Formula: % Change = ((Final Mass - Initial Mass) / Initial Mass) × 100%
            </p>
          </div>

          {/* Academic Explanation */}
          <div className="p-4 bg-emerald-50/70 border border-emerald-200/80 rounded-2xl text-xs text-emerald-950 leading-relaxed">
            <strong className="block font-bold mb-1">Key Scientific Principle:</strong>
            Osmosis is the net movement of water molecules from a region of higher water potential (dilute solution) to lower water potential (concentrated solution) through a partially permeable membrane. The isotonic point where no mass change occurs reveals the intracellular concentration of potato cells (~0.3 M).
          </div>
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { Subtopic } from '../../types';
import {
  RotateCcw,
  CheckCircle,
  FlaskConical,
  Droplet,
  Sparkles,
  TrendingUp,
  Activity
} from 'lucide-react';

interface SimProps {
  subtopic: Subtopic;
  onComplete: () => void;
}

type IndicatorType = 'phenolphthalein' | 'methyl_orange' | 'universal';

export const AcidBaseTitrationSim: React.FC<SimProps> = ({ subtopic, onComplete }) => {
  const [indicator, setIndicator] = useState<IndicatorType>('phenolphthalein');
  const [volNaOHAdded, setVolNaOHAdded] = useState<number>(0); // 0 to 50 cm^3
  const [challengeDone, setChallengeDone] = useState<boolean>(false);

  // Titration calculation:
  // 25.0 cm^3 of 0.1M HCl in conical flask
  // Burette filled with 0.1M NaOH
  // Equivalence point is at exactly 25.0 cm^3!
  // Before 25: excess H+ -> pH ranges from 1.0 to ~3.5
  // At 25: exactly neutral -> pH 7.0
  // After 25: excess OH- -> pH leaps to 11 - 13
  let currentPH = 1.0;
  if (volNaOHAdded < 24.5) {
    currentPH = 1.0 + (volNaOHAdded / 25) * 1.5;
  } else if (volNaOHAdded < 25.0) {
    currentPH = 3.5 + ((volNaOHAdded - 24.5) / 0.5) * 2.5;
  } else if (volNaOHAdded === 25.0) {
    currentPH = 7.0;
  } else if (volNaOHAdded < 25.5) {
    currentPH = 7.0 + ((volNaOHAdded - 25.0) / 0.5) * 3.5;
  } else {
    currentPH = Math.min(13.0, 11.0 + ((volNaOHAdded - 25.5) / 24.5) * 1.8);
  }
  currentPH = Math.round(currentPH * 10) / 10;

  // Indicator color
  let solutionColor = '#ffffff';
  let colorName = 'Colorless';
  if (indicator === 'phenolphthalein') {
    if (currentPH < 8.2) {
      solutionColor = '#ffffff';
      colorName = 'Colorless (Acidic)';
    } else {
      solutionColor = '#f43f5e'; // Bright Pink/Magenta
      colorName = 'Vibrant Pink (Alkaline Endpoint)';
    }
  } else if (indicator === 'methyl_orange') {
    if (currentPH < 3.1) {
      solutionColor = '#ef4444'; // Red
      colorName = 'Red (Acidic)';
    } else if (currentPH < 4.4) {
      solutionColor = '#f97316'; // Orange
      colorName = 'Orange (Neutral Endpoint)';
    } else {
      solutionColor = '#eab308'; // Yellow
      colorName = 'Yellow (Alkaline)';
    }
  } else {
    // Universal Indicator
    if (currentPH <= 2) {
      solutionColor = '#ef4444'; // Red
      colorName = 'Red (Strong Acid, pH 1-2)';
    } else if (currentPH <= 6) {
      solutionColor = '#f97316'; // Orange-Yellow
      colorName = 'Orange/Yellow (Weak Acid)';
    } else if (currentPH === 7) {
      solutionColor = '#10b981'; // Emerald Green
      colorName = 'Emerald Green (Neutral pH 7.0)';
    } else if (currentPH <= 10) {
      solutionColor = '#3b82f6'; // Blue
      colorName = 'Blue (Weak Alkali)';
    } else {
      solutionColor = '#8b5cf6'; // Purple
      colorName = 'Purple (Strong Alkali, pH 12-14)';
    }
  }

  const handleAddDrop = (amount: number) => {
    const nextVol = Math.round(Math.min(50, volNaOHAdded + amount) * 10) / 10;
    setVolNaOHAdded(nextVol);
    if (Math.abs(nextVol - 25.0) < 0.2) {
      setChallengeDone(true);
      onComplete();
    }
  };

  const handleReset = () => {
    setVolNaOHAdded(0);
    setChallengeDone(false);
  };

  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase tracking-wider font-extrabold text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-100">
              Analytical Titrimetry Lab
            </span>
            <span className="text-xs font-mono text-slate-500">Chemistry: Acids, Bases & Neutralization</span>
          </div>
          <h3 className="text-2xl font-black text-slate-900 mt-2">
            {subtopic.experience?.title || 'Precision Acid-Base Neutralization Titration'}
          </h3>
          <p className="text-sm text-slate-600 mt-1 max-w-2xl">
            Dispense 0.1 M NaOH from a graduated burette into 25.0 cm³ of 0.1 M HCl. Observe the steep inflection point on the pH curve at stoichiometric equivalence.
          </p>
        </div>

        {challengeDone && (
          <div className="flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-2xl text-xs font-bold border border-emerald-200">
            <CheckCircle className="w-4 h-4 text-emerald-600" />
            <span>Equivalence Endpoint Reached (25.0 cm³)!</span>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Burette & Conical Flask Apparatus Viewport */}
        <div className="lg:col-span-7 bg-slate-950 rounded-2xl p-6 border border-slate-800 flex flex-col justify-between min-h-[380px] relative overflow-hidden">
          {/* Top Telemetry */}
          <div className="flex justify-between items-center text-xs font-mono bg-slate-900/90 text-slate-200 px-4 py-2.5 rounded-xl border border-slate-800 z-10">
            <span>Burette Dispensed: <strong className="text-amber-400 font-bold">{volNaOHAdded.toFixed(1)} cm³</strong></span>
            <span>Current pH: <strong className={currentPH === 7 ? 'text-emerald-400 font-bold' : currentPH < 7 ? 'text-rose-400 font-bold' : 'text-purple-400 font-bold'}>
              pH {currentPH.toFixed(1)}
            </strong></span>
            <span>Indicator: <strong className="text-sky-400">{indicator.replace('_', ' ')}</strong></span>
          </div>

          {/* Central Glassware Rig */}
          <div className="my-auto py-6 flex flex-col items-center justify-center relative">
            {/* Graduated Burette Tube */}
            <div className="w-8 h-40 border-2 border-slate-400/80 bg-slate-900/80 rounded-t-sm relative flex flex-col justify-end">
              {/* Liquid level inside burette */}
              <div
                className="w-full bg-sky-300/40 border-t border-sky-300 transition-all duration-300"
                style={{ height: `${Math.max(10, 100 - (volNaOHAdded / 50) * 100)}%` }}
              />
              {/* Burette markings */}
              <div className="absolute right-1 top-2 text-[8px] font-mono text-slate-500">0 ml</div>
              <div className="absolute right-1 top-18 text-[8px] font-mono text-slate-500">25 ml</div>
              <div className="absolute right-1 bottom-2 text-[8px] font-mono text-slate-500">50 ml</div>
            </div>

            {/* Stopcock valve */}
            <div className="w-12 h-3 bg-amber-600 rounded-sm my-0.5 border border-amber-500 shadow-md flex items-center justify-center text-[8px] font-bold text-slate-950">
              VALVE
            </div>

            {/* Burette Tip with falling droplets */}
            <div className="w-2 h-6 bg-slate-400/80 relative flex items-center justify-center">
              {volNaOHAdded > 0 && (
                <div className="w-2 h-2 rounded-full bg-sky-300 animate-bounce absolute -bottom-3" />
              )}
            </div>

            {/* Conical (Erlenmeyer) Flask */}
            <div className="w-44 h-36 border-4 border-slate-400/80 rounded-b-3xl relative flex flex-col justify-end p-3 bg-slate-900/40 mt-3 backdrop-blur-xs shadow-xl">
              {/* Liquid inside flask with reactive indicator color */}
              <div
                className="w-full h-20 rounded-b-2xl transition-all duration-500 border-t-2 border-slate-300/50 flex flex-col items-center justify-center p-2"
                style={{ backgroundColor: solutionColor }}
              >
                <span className="text-[10px] font-mono font-bold text-slate-950">
                  {colorName}
                </span>
                <span className="text-[9px] font-mono font-bold text-slate-900">
                  Total Vol: {(25.0 + volNaOHAdded).toFixed(1)} cm³
                </span>
              </div>
            </div>
          </div>

          {/* Solution reaction info */}
          <div className="bg-slate-900/90 rounded-xl p-3 border border-slate-800 text-xs font-mono flex items-center justify-between text-slate-300">
            <span>Reaction:</span>
            <span className="text-emerald-400 font-bold">HCl(aq) + NaOH(aq) → NaCl(aq) + H₂O(l)</span>
          </div>
        </div>

        {/* Burette Controls & Titration Actions */}
        <div className="lg:col-span-5 space-y-4">
          {/* Indicator Selector */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
              Select Indicator Chemical Dye
            </label>
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => setIndicator('phenolphthalein')}
                className={`p-2.5 rounded-xl border text-xs font-bold text-center transition-all cursor-pointer ${
                  indicator === 'phenolphthalein'
                    ? 'bg-rose-50 border-rose-500 text-rose-900'
                    : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                🌸 Phenolphthalein
              </button>
              <button
                onClick={() => setIndicator('methyl_orange')}
                className={`p-2.5 rounded-xl border text-xs font-bold text-center transition-all cursor-pointer ${
                  indicator === 'methyl_orange'
                    ? 'bg-orange-50 border-orange-500 text-orange-900'
                    : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                🍊 Methyl Orange
              </button>
              <button
                onClick={() => setIndicator('universal')}
                className={`p-2.5 rounded-xl border text-xs font-bold text-center transition-all cursor-pointer ${
                  indicator === 'universal'
                    ? 'bg-emerald-50 border-emerald-500 text-emerald-900'
                    : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                🌈 Universal
              </button>
            </div>
          </div>

          {/* Burette Dispensing Actions */}
          <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-600 block">
              Dispense Alkali (0.1M NaOH)
            </span>
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => handleAddDrop(0.1)}
                className="py-2.5 px-3 bg-white hover:bg-slate-100 border border-slate-300 rounded-xl text-xs font-bold text-slate-800 transition-colors cursor-pointer"
              >
                + 0.1 cm³ (Drop)
              </button>
              <button
                onClick={() => handleAddDrop(1.0)}
                className="py-2.5 px-3 bg-white hover:bg-slate-100 border border-slate-300 rounded-xl text-xs font-bold text-slate-800 transition-colors cursor-pointer"
              >
                + 1.0 cm³
              </button>
              <button
                onClick={() => handleAddDrop(5.0)}
                className="py-2.5 px-3 bg-white hover:bg-slate-100 border border-slate-300 rounded-xl text-xs font-bold text-slate-800 transition-colors cursor-pointer"
              >
                + 5.0 cm³ (Fast)
              </button>
            </div>

            <button
              onClick={handleReset}
              className="w-full py-2 bg-slate-200 hover:bg-slate-300 text-slate-700 rounded-xl text-xs font-bold transition-colors cursor-pointer flex items-center justify-center gap-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Empty Flask & Refill Burette</span>
            </button>
          </div>

          {/* Equivalence Point Target Card */}
          <div className="p-4 bg-amber-50/80 border border-amber-200 rounded-2xl space-y-1.5 text-xs text-amber-950">
            <strong className="block font-bold">Titration Goal:</strong>
            <p>
              Carefully add NaOH until you reach the exact equivalence point at <strong>25.0 cm³</strong>. Notice how a single drop causes the pH to surge from 3.5 all the way to 10.5!
            </p>
          </div>

          <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl text-xs text-slate-700 leading-relaxed">
            <strong className="block font-bold mb-1">Molar Neutralization Principle:</strong>
            Molar Calculation: n(HCl) = C × V = 0.1 mol/dm³ × 0.025 dm³ = 0.0025 moles. To neutralize this, exactly 0.0025 moles of NaOH is required: V = n/C = 0.0025 / 0.1 = 0.025 dm³ = 25.0 cm³.
          </div>
        </div>
      </div>
    </div>
  );
};

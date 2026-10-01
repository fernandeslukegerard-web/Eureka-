import React, { useState } from 'react';
import { Subtopic } from '../../types';
import {
  RotateCcw,
  CheckCircle,
  Atom,
  Sparkles,
  Layers,
  CircleDot
} from 'lucide-react';

interface SimProps {
  subtopic: Subtopic;
  onComplete: () => void;
}

export const AtomicStructureSim: React.FC<SimProps> = ({ subtopic, onComplete }) => {
  const [protons, setProtons] = useState<number>(6); // Carbon default
  const [neutrons, setNeutrons] = useState<number>(6);
  const [electrons, setElectrons] = useState<number>(6);
  const [challengeDone, setChallengeDone] = useState<boolean>(false);

  // Periodic Table Elements based on Atomic Number Z
  const elementNames: Record<number, { symbol: string; name: string }> = {
    1: { symbol: 'H', name: 'Hydrogen' },
    2: { symbol: 'He', name: 'Helium' },
    3: { symbol: 'Li', name: 'Lithium' },
    4: { symbol: 'Be', name: 'Beryllium' },
    5: { symbol: 'B', name: 'Boron' },
    6: { symbol: 'C', name: 'Carbon' },
    7: { symbol: 'N', name: 'Nitrogen' },
    8: { symbol: 'O', name: 'Oxygen' },
    9: { symbol: 'F', name: 'Fluorine' },
    10: { symbol: 'Ne', name: 'Neon' },
    11: { symbol: 'Na', name: 'Sodium' },
    12: { symbol: 'Mg', name: 'Magnesium' },
    13: { symbol: 'Al', name: 'Aluminium' },
    14: { symbol: 'Si', name: 'Silicon' },
    15: { symbol: 'P', name: 'Phosphorus' },
    16: { symbol: 'S', name: 'Sulfur' },
    17: { symbol: 'Cl', name: 'Chlorine' },
    18: { symbol: 'Ar', name: 'Argon' },
    19: { symbol: 'K', name: 'Potassium' },
    20: { symbol: 'Ca', name: 'Calcium' }
  };

  const element = elementNames[protons] || { symbol: 'X', name: 'Synthetic Element' };
  const massNumber = protons + neutrons;
  const netCharge = protons - electrons;

  // Electron shell configuration (2, 8, 8, 2 rule)
  const shell1 = Math.min(2, electrons);
  const shell2 = Math.min(8, Math.max(0, electrons - 2));
  const shell3 = Math.min(8, Math.max(0, electrons - 10));
  const shell4 = Math.min(2, Math.max(0, electrons - 18));

  const electronConfig = [shell1, shell2, shell3, shell4].filter((n) => n > 0).join(', ');

  const handlePreset = (p: number, n: number, e: number) => {
    setProtons(p);
    setNeutrons(n);
    setElectrons(e);
    setChallengeDone(true);
    onComplete();
  };

  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase tracking-wider font-extrabold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
              Quantum Atomic Structure Lab
            </span>
            <span className="text-xs font-mono text-slate-500">Chemistry 3 / Physics 5: Nuclear Atom</span>
          </div>
          <h3 className="text-2xl font-black text-slate-900 mt-2">
            {subtopic.experience?.title || 'Atomic Nucleus & Bohr Electron Shell Builder'}
          </h3>
          <p className="text-sm text-slate-600 mt-1 max-w-2xl">
            Synthesize atoms and isotopes by adjusting protons ($Z$), neutrons ($N$), and electrons. Watch orbitals fill according to the $2, 8, 8$ electron configuration rule.
          </p>
        </div>

        {challengeDone && (
          <div className="flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-2xl text-xs font-bold border border-emerald-200">
            <CheckCircle className="w-4 h-4 text-emerald-600" />
            <span>Stable Atomic Configuration Synthesized!</span>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Bohr Model Orbital Viewport */}
        <div className="lg:col-span-7 bg-slate-950 rounded-2xl p-6 border border-slate-800 flex flex-col justify-between min-h-[380px] relative overflow-hidden">
          {/* Top Telemetry */}
          <div className="flex flex-wrap justify-between items-center text-xs font-mono bg-slate-900/90 text-slate-200 px-4 py-2.5 rounded-xl border border-slate-800 z-10 gap-2">
            <span>Element: <strong className="text-amber-400 font-bold">{element.name} ({element.symbol})</strong></span>
            <span>$A = {massNumber}$ | $Z = {protons}$</span>
            <span>Electron Config: <strong className="text-sky-400">[{electronConfig}]</strong></span>
          </div>

          {/* Central Concentric Electron Orbitals */}
          <div className="my-auto py-6 flex items-center justify-center relative">
            {/* Shell 3 Ring */}
            {electrons > 10 && (
              <div className="w-72 h-72 rounded-full border border-dashed border-sky-500/30 absolute flex items-center justify-center animate-spin-slow">
                <span className="absolute -top-1 w-2.5 h-2.5 rounded-full bg-sky-400 shadow-md shadow-sky-400" />
                {shell3 > 1 && <span className="absolute -bottom-1 w-2.5 h-2.5 rounded-full bg-sky-400 shadow-md shadow-sky-400" />}
                {shell3 > 2 && <span className="absolute -left-1 w-2.5 h-2.5 rounded-full bg-sky-400 shadow-md shadow-sky-400" />}
                {shell3 > 3 && <span className="absolute -right-1 w-2.5 h-2.5 rounded-full bg-sky-400 shadow-md shadow-sky-400" />}
              </div>
            )}

            {/* Shell 2 Ring */}
            {electrons > 2 && (
              <div className="w-52 h-52 rounded-full border border-dashed border-sky-400/40 absolute flex items-center justify-center animate-spin-slow">
                <span className="absolute -top-1 w-2.5 h-2.5 rounded-full bg-sky-400 shadow-md shadow-sky-400" />
                {shell2 > 1 && <span className="absolute -bottom-1 w-2.5 h-2.5 rounded-full bg-sky-400 shadow-md shadow-sky-400" />}
                {shell2 > 2 && <span className="absolute -left-1 w-2.5 h-2.5 rounded-full bg-sky-400 shadow-md shadow-sky-400" />}
                {shell2 > 3 && <span className="absolute -right-1 w-2.5 h-2.5 rounded-full bg-sky-400 shadow-md shadow-sky-400" />}
              </div>
            )}

            {/* Shell 1 Ring */}
            {electrons > 0 && (
              <div className="w-32 h-32 rounded-full border border-dashed border-sky-300/50 absolute flex items-center justify-center animate-spin-slow">
                <span className="absolute -top-1 w-2.5 h-2.5 rounded-full bg-sky-300 shadow-md shadow-sky-300" />
                {shell1 > 1 && <span className="absolute -bottom-1 w-2.5 h-2.5 rounded-full bg-sky-300 shadow-md shadow-sky-300" />}
              </div>
            )}

            {/* Dense Nucleus Cluster (Protons + Neutrons) */}
            <div className="w-18 h-18 rounded-full bg-gradient-to-tr from-rose-600 via-amber-600 to-indigo-600 p-2 flex flex-col items-center justify-center text-white shadow-2xl z-10 border-2 border-white/20">
              <span className="text-base font-black font-mono tracking-tight">{element.symbol}</span>
              <span className="text-[8px] font-mono opacity-90">{protons}p⁺ {neutrons}n⁰</span>
            </div>
          </div>

          {/* Ion Charge Status */}
          <div className="bg-slate-900/90 rounded-xl p-3 border border-slate-800 text-xs font-mono flex items-center justify-between text-slate-300">
            <div>Net Charge:</div>
            <div className={`font-bold ${netCharge === 0 ? 'text-emerald-400' : netCharge > 0 ? 'text-amber-400' : 'text-sky-400'}`}>
              {netCharge === 0 ? '0 (Neutral Atom)' : netCharge > 0 ? `+${netCharge} (Cation)` : `${netCharge} (Anion)`}
            </div>
          </div>
        </div>

        {/* Builder Sliders */}
        <div className="lg:col-span-5 space-y-4">
          {/* Quick Presets */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
              Common IGCSE Elements
            </label>
            <div className="grid grid-cols-4 gap-2">
              <button
                onClick={() => handlePreset(1, 0, 1)}
                className="p-2 rounded-xl border border-slate-200 text-xs font-bold hover:bg-slate-100 cursor-pointer"
              >
                H (1)
              </button>
              <button
                onClick={() => handlePreset(6, 6, 6)}
                className="p-2 rounded-xl border border-slate-200 text-xs font-bold hover:bg-slate-100 cursor-pointer"
              >
                C (6)
              </button>
              <button
                onClick={() => handlePreset(8, 8, 8)}
                className="p-2 rounded-xl border border-slate-200 text-xs font-bold hover:bg-slate-100 cursor-pointer"
              >
                O (8)
              </button>
              <button
                onClick={() => handlePreset(11, 12, 11)}
                className="p-2 rounded-xl border border-slate-200 text-xs font-bold hover:bg-slate-100 cursor-pointer"
              >
                Na (11)
              </button>
            </div>
          </div>

          {/* Protons Slider */}
          <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200">
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs font-bold text-slate-700">Protons (Atomic Number Z)</span>
              <span className="text-xs font-mono font-bold text-rose-600">{protons} p⁺</span>
            </div>
            <input
              type="range"
              min="1"
              max="20"
              value={protons}
              onChange={(e) => setProtons(Number(e.target.value))}
              className="w-full accent-rose-600 cursor-pointer"
            />
          </div>

          {/* Neutrons Slider */}
          <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200">
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs font-bold text-slate-700">Neutrons (Isotope Mass N)</span>
              <span className="text-xs font-mono font-bold text-amber-600">{neutrons} n⁰</span>
            </div>
            <input
              type="range"
              min="0"
              max="24"
              value={neutrons}
              onChange={(e) => setNeutrons(Number(e.target.value))}
              className="w-full accent-amber-600 cursor-pointer"
            />
          </div>

          {/* Electrons Slider */}
          <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200">
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs font-bold text-slate-700">Electrons (Orbitals)</span>
              <span className="text-xs font-mono font-bold text-sky-600">{electrons} e⁻</span>
            </div>
            <input
              type="range"
              min="1"
              max="20"
              value={electrons}
              onChange={(e) => setElectrons(Number(e.target.value))}
              className="w-full accent-sky-600 cursor-pointer"
            />
          </div>

          <div className="p-4 bg-indigo-50/70 border border-indigo-200/80 rounded-2xl text-xs text-indigo-950 leading-relaxed">
            <strong className="block font-bold mb-1">Key Scientific Principle:</strong>
            The atomic number ($Z$) determines the chemical identity of an element. Isotopes are atoms of the same element with identical numbers of protons but different numbers of neutrons (e.g. Carbon-12 vs. Carbon-14).
          </div>
        </div>
      </div>
    </div>
  );
};

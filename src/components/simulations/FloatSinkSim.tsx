import React, { useState } from 'react';
import { Subtopic } from '../../types';
import { CheckCircle, ArrowRight, Waves, Droplet, Sparkles } from 'lucide-react';

interface SimProps {
  subtopic: Subtopic;
  onComplete: () => void;
}

export const FloatSinkSim: React.FC<SimProps> = ({ subtopic, onComplete }) => {
  const [objectMass, setObjectMass] = useState(250); // grams
  const [objectVolume, setObjectVolume] = useState(200); // cm³
  const [liquidType, setLiquidType] = useState<'water' | 'oil' | 'honey'>('water');
  const [testedSubstances, setTestedSubstances] = useState<string[]>([]);

  const liquidDensities = {
    oil: 0.85, // g/cm³
    water: 1.0, // g/cm³
    honey: 1.42 // g/cm³
  };

  const objectDensity = Math.round((objectMass / objectVolume) * 100) / 100;
  const liquidDensity = liquidDensities[liquidType];
  const willFloat = objectDensity < liquidDensity;
  const neutralBouyancy = Math.abs(objectDensity - liquidDensity) < 0.05;

  const handleTestBlock = (materialName: string, m: number, v: number) => {
    setObjectMass(m);
    setObjectVolume(v);
    if (!testedSubstances.includes(materialName)) {
      setTestedSubstances([...testedSubstances, materialName]);
    }
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-slate-100 shadow-xl">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800">
        <div>
          <span className="text-xs uppercase tracking-wider font-semibold text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-md">
            Density & Buoyancy Tank
          </span>
          <h3 className="text-xl font-bold mt-1 text-white">{subtopic.experience.title}</h3>
          <p className="text-sm text-slate-400 mt-0.5">{subtopic.experience.scenarioDescription}</p>
        </div>
        {testedSubstances.length >= 2 && (
          <div className="flex items-center gap-2 bg-emerald-500/20 text-emerald-400 px-3.5 py-1.5 rounded-full text-sm font-semibold border border-emerald-500/30">
            <CheckCircle className="w-4 h-4" /> Lab Certified!
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Aquarium Water Tank Simulation */}
        <div className="relative bg-slate-950 rounded-xl p-4 border border-slate-800 flex flex-col items-center justify-between min-h-[320px]">
          {/* Surface Indicator */}
          <div className="w-full flex justify-between text-xs font-mono text-slate-500 pb-2 border-b border-slate-800">
            <span>Fluid: {liquidType.toUpperCase()} (ρ = {liquidDensity} g/cm³)</span>
            <span className={willFloat ? 'text-cyan-400 font-semibold' : 'text-rose-400 font-semibold'}>
              {neutralBouyancy ? 'Neutrally Buoyant' : willFloat ? 'FLOATING (Upthrust > Weight)' : 'SINKING (Weight > Upthrust)'}
            </span>
          </div>

          {/* Visual Tank Interior */}
          <div className="relative w-full flex-1 mt-3 rounded-lg overflow-hidden border-2 border-slate-700 bg-gradient-to-b from-transparent via-cyan-950/20 to-blue-950/40 flex items-center justify-center">
            {/* Liquid Level */}
            <div
              className={`absolute inset-0 opacity-70 transition-colors duration-500 ${
                liquidType === 'oil'
                  ? 'bg-amber-500/30'
                  : liquidType === 'honey'
                  ? 'bg-yellow-600/40'
                  : 'bg-cyan-500/30'
              }`}
            />
            {/* Liquid surface wave */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-cyan-400/40 animate-pulse" />

            {/* Test Block */}
            <div
              className={`relative z-10 transition-all duration-700 rounded-md border-2 shadow-2xl flex flex-col items-center justify-center p-2 text-center ${
                willFloat
                  ? 'top-[-50px] bg-amber-400/90 border-amber-300 text-slate-950'
                  : 'top-[80px] bg-slate-700 border-slate-500 text-white'
              }`}
              style={{
                width: `${Math.max(60, Math.min(130, objectVolume / 2))}px`,
                height: `${Math.max(60, Math.min(130, objectVolume / 2))}px`
              }}
            >
              <div className="text-xs font-bold leading-tight">Test Block</div>
              <div className="text-[10px] font-mono mt-0.5">{objectMass}g | {objectVolume}cm³</div>
              <div className="text-[11px] font-extrabold font-mono mt-1">ρ = {objectDensity}</div>
            </div>
          </div>

          {/* Liquid selector pills */}
          <div className="flex gap-2 mt-3 w-full justify-center">
            {(['oil', 'water', 'honey'] as const).map((liq) => (
              <button
                key={liq}
                onClick={() => setLiquidType(liq)}
                className={`px-3 py-1 text-xs rounded-lg font-medium transition-all ${
                  liquidType === liq
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-md'
                    : 'bg-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                {liq.charAt(0).toUpperCase() + liq.slice(1)} ({liquidDensities[liq]} g/cm³)
              </button>
            ))}
          </div>
        </div>

        {/* Controls & Quick Presets */}
        <div className="flex flex-col justify-between space-y-4">
          <div className="bg-slate-800/60 p-5 rounded-xl border border-slate-700/60 space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-slate-300">Block Mass (m)</span>
                <span className="font-mono font-bold text-amber-400">{objectMass} grams</span>
              </div>
              <input
                type="range"
                min="50"
                max="600"
                step="10"
                value={objectMass}
                onChange={(e) => setObjectMass(parseInt(e.target.value, 10))}
                className="w-full accent-amber-500 h-2 bg-slate-700 rounded-lg cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-slate-300">Block Volume (V)</span>
                <span className="font-mono font-bold text-blue-400">{objectVolume} cm³</span>
              </div>
              <input
                type="range"
                min="50"
                max="400"
                step="10"
                value={objectVolume}
                onChange={(e) => setObjectVolume(parseInt(e.target.value, 10))}
                className="w-full accent-blue-500 h-2 bg-slate-700 rounded-lg cursor-pointer"
              />
            </div>

            <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-700 flex justify-between items-center">
              <div>
                <span className="text-xs text-slate-400 block">Calculated Density (ρ = m / V)</span>
                <span className="text-xl font-mono font-bold text-cyan-400">
                  {objectDensity.toFixed(2)} g/cm³
                </span>
              </div>
              <div className="text-right text-xs">
                <span className="text-slate-400 block">Fluid Density</span>
                <span className="font-mono font-bold text-white">{liquidDensity} g/cm³</span>
              </div>
            </div>
          </div>

          {/* Quick preset materials */}
          <div className="bg-slate-800/40 p-4 rounded-xl border border-slate-700/40">
            <span className="text-xs font-semibold text-slate-400 block mb-2">Preset Materials</span>
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => handleTestBlock('Balsa Wood', 60, 300)}
                className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs text-left border border-slate-700"
              >
                <div className="font-bold text-slate-200">Balsa Wood</div>
                <div className="text-[10px] text-cyan-400">0.20 g/cm³</div>
              </button>
              <button
                onClick={() => handleTestBlock('Aluminum Block', 270, 100)}
                className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs text-left border border-slate-700"
              >
                <div className="font-bold text-slate-200">Aluminium</div>
                <div className="text-[10px] text-rose-400">2.70 g/cm³</div>
              </button>
              <button
                onClick={() => handleTestBlock('Ice Cube', 184, 200)}
                className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs text-left border border-slate-700"
              >
                <div className="font-bold text-slate-200">Ice Cube</div>
                <div className="text-[10px] text-amber-400">0.92 g/cm³</div>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800">
        <span className="text-xs text-slate-400">
          Core discovery: An object sinks if its density is greater than the surrounding fluid.
        </span>
        <button
          onClick={onComplete}
          className="px-6 py-2.5 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-xl shadow-lg transition-all flex items-center gap-2 cursor-pointer"
        >
          <span>Continue Lesson</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

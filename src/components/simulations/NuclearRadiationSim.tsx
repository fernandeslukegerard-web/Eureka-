import React, { useState } from 'react';
import { Subtopic } from '../../types';
import {
  RotateCcw,
  CheckCircle,
  Radio,
  Shield,
  Layers,
  Sparkles,
  Activity
} from 'lucide-react';

interface SimProps {
  subtopic: Subtopic;
  onComplete: () => void;
}

type RadiationType = 'alpha' | 'beta' | 'gamma';
type AbsorberType = 'none' | 'paper' | 'aluminum' | 'lead';

export const NuclearRadiationSim: React.FC<SimProps> = ({ subtopic, onComplete }) => {
  const [source, setSource] = useState<RadiationType>('alpha');
  const [absorber, setAbsorber] = useState<AbsorberType>('none');
  const [distanceCm, setDistanceCm] = useState<number>(5); // 1 to 30 cm
  const [challengeDone, setChallengeDone] = useState<boolean>(false);

  // Background radiation: 20 counts/min
  const background = 20;

  // Radiation characteristics:
  // Alpha: stopped by paper or ~5cm of air, highly ionizing
  // Beta: stopped by 5mm aluminum, travels ~1m in air
  // Gamma: highly penetrating, reduced only by thick lead, weakly ionizing
  let sourceCounts = 800;
  let penetrates = true;

  if (source === 'alpha') {
    sourceCounts = 950;
    if (absorber !== 'none' || distanceCm > 6) {
      penetrates = false;
      sourceCounts = 0;
    }
  } else if (source === 'beta') {
    sourceCounts = 650;
    if (absorber === 'aluminum' || absorber === 'lead') {
      penetrates = false;
      sourceCounts = 0;
    } else if (absorber === 'paper') {
      sourceCounts = 580; // slightly attenuated
    }
  } else {
    // Gamma
    sourceCounts = 450;
    if (absorber === 'lead') {
      sourceCounts = 45; // 90% absorbed
    } else if (absorber === 'aluminum') {
      sourceCounts = 390;
    } else if (absorber === 'paper') {
      sourceCounts = 440;
    }
  }

  // Inverse square law attenuation with distance for penetrating radiation
  const distanceAttenuation = Math.pow(5 / Math.max(1, distanceCm), 1.5);
  const detectedRate = Math.round(background + (penetrates ? sourceCounts * distanceAttenuation : 0));

  const handleTestAbsorber = (abs: AbsorberType) => {
    setAbsorber(abs);
    if (abs === 'lead' || (source === 'alpha' && abs === 'paper')) {
      setChallengeDone(true);
      onComplete();
    }
  };

  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase tracking-wider font-extrabold text-purple-600 bg-purple-50 px-3 py-1 rounded-full border border-purple-100">
              Ionising Radiation Laboratory
            </span>
            <span className="text-xs font-mono text-slate-500">Physics 5: Nuclear Physics</span>
          </div>
          <h3 className="text-2xl font-black text-slate-900 mt-2">
            {subtopic.experience?.title || 'Geiger-Müller Radiation Penetration & Shielding'}
          </h3>
          <p className="text-sm text-slate-600 mt-1 max-w-2xl">
            Test the penetrating power and ionization capabilities of Alpha ($\alpha$), Beta ($\beta$), and Gamma ($\gamma$) radiation through paper, aluminium, and lead shields.
          </p>
        </div>

        {challengeDone && (
          <div className="flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-2xl text-xs font-bold border border-emerald-200">
            <CheckCircle className="w-4 h-4 text-emerald-600" />
            <span>Radiation Shielding Penetration Verified!</span>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Geiger-Muller Counter Viewport */}
        <div className="lg:col-span-7 bg-slate-950 rounded-2xl p-6 border border-slate-800 flex flex-col justify-between min-h-[380px] relative overflow-hidden">
          {/* Top Telemetry */}
          <div className="flex justify-between items-center text-xs font-mono bg-slate-900/90 text-slate-200 px-4 py-2.5 rounded-xl border border-slate-800 z-10">
            <span>Isotope Source: <strong className="text-amber-400 font-bold">{source.toUpperCase()} EMITTER</strong></span>
            <span>Shield: <strong className="text-sky-400">{absorber.toUpperCase()}</strong></span>
            <span>Count Rate: <strong className="text-emerald-400 font-bold">{detectedRate} CPM</strong></span>
          </div>

          {/* Test Rig Setup: Source -> Shield -> GM Tube */}
          <div className="my-auto py-8 flex items-center justify-around relative">
            {/* Radioactive source capsule */}
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/20 border-2 border-amber-500 flex items-center justify-center text-2xl shadow-lg shadow-amber-500/20">
                ☢️
              </div>
              <span className="text-[10px] font-mono font-bold text-amber-300 mt-1">
                {source === 'alpha' ? 'Am-241 (α)' : source === 'beta' ? 'Sr-90 (β)' : 'Co-60 (γ)'}
              </span>
            </div>

            {/* Shield Barrier Plate */}
            <div className="flex flex-col items-center">
              {absorber === 'none' ? (
                <div className="w-2 h-28 border border-dashed border-slate-700 rounded-sm" />
              ) : absorber === 'paper' ? (
                <div className="w-2 h-28 bg-white border border-slate-300 rounded-sm shadow-sm" />
              ) : absorber === 'aluminum' ? (
                <div className="w-4 h-28 bg-slate-400 border border-slate-300 rounded-sm shadow-md" />
              ) : (
                <div className="w-8 h-28 bg-slate-800 border-2 border-slate-600 rounded-sm shadow-xl" />
              )}
              <span className="text-[10px] font-mono text-slate-400 mt-1 capitalize">{absorber}</span>
            </div>

            {/* Geiger-Müller Detection Tube */}
            <div className="flex flex-col items-center">
              <div className="w-24 h-16 rounded-xl bg-slate-800 border-2 border-slate-600 p-2 flex flex-col justify-between shadow-lg">
                <div className="flex items-center justify-between text-[9px] font-mono text-slate-400">
                  <span>GM TUBE</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                </div>
                <div className="text-right text-xs font-mono font-bold text-emerald-400">
                  {detectedRate} cpm
                </div>
              </div>
              <span className="text-[10px] font-mono text-slate-400 mt-1">Detector</span>
            </div>
          </div>

          {/* Penetration Status Banner */}
          <div className="bg-slate-900/90 rounded-xl p-3 border border-slate-800 text-xs font-mono flex items-center justify-between text-slate-300">
            <span>Transmission Result:</span>
            <span className={`font-bold ${penetrates ? 'text-rose-400' : 'text-emerald-400'}`}>
              {penetrates ? 'RADIATION PENETRATES SHIELD' : 'RADIATION FULLY ABSORBED (Background Only)'}
            </span>
          </div>
        </div>

        {/* Controls */}
        <div className="lg:col-span-5 space-y-4">
          {/* Source Type Selector */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
              Select Radiation Source
            </label>
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => setSource('alpha')}
                className={`p-2.5 rounded-xl border text-xs font-bold text-center transition-all cursor-pointer ${
                  source === 'alpha'
                    ? 'bg-amber-50 border-amber-500 text-amber-900'
                    : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                Alpha (α) Helium
              </button>
              <button
                onClick={() => setSource('beta')}
                className={`p-2.5 rounded-xl border text-xs font-bold text-center transition-all cursor-pointer ${
                  source === 'beta'
                    ? 'bg-blue-50 border-blue-500 text-blue-900'
                    : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                Beta (β) Fast e⁻
              </button>
              <button
                onClick={() => setSource('gamma')}
                className={`p-2.5 rounded-xl border text-xs font-bold text-center transition-all cursor-pointer ${
                  source === 'gamma'
                    ? 'bg-purple-50 border-purple-500 text-purple-900'
                    : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                Gamma (γ) EM Wave
              </button>
            </div>
          </div>

          {/* Absorber Plate Selector */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
              Insert Absorbing Shield Material
            </label>
            <div className="grid grid-cols-4 gap-2">
              {(['none', 'paper', 'aluminum', 'lead'] as AbsorberType[]).map((abs) => (
                <button
                  key={abs}
                  onClick={() => handleTestAbsorber(abs)}
                  className={`py-2 rounded-xl border text-xs font-bold text-center capitalize transition-all cursor-pointer ${
                    absorber === abs
                      ? 'bg-slate-900 border-slate-900 text-white shadow-xs'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {abs}
                </button>
              ))}
            </div>
          </div>

          {/* Distance Slider */}
          <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200">
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs font-bold text-slate-700">Source-to-Detector Distance</span>
              <span className="text-xs font-mono font-bold text-blue-600">{distanceCm} cm</span>
            </div>
            <input
              type="range"
              min="1"
              max="25"
              value={distanceCm}
              onChange={(e) => setDistanceCm(Number(e.target.value))}
              className="w-full accent-blue-600 cursor-pointer"
            />
          </div>

          {/* Scientific Properties Card */}
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-1.5 text-xs text-slate-700">
            <h4 className="font-bold text-slate-900">Penetration Comparison:</h4>
            <ul className="space-y-1 text-[11px] list-disc pl-4 text-slate-600">
              <li><strong>Alpha (α):</strong> Heavy helium nucleus (He-4). Absorbed completely by a sheet of paper or ~5 cm of air. Highest ionising power.</li>
              <li><strong>Beta (β):</strong> Fast electron (e⁻). Penetrates paper; stopped by ~5 mm aluminium. Moderate ionising power.</li>
              <li><strong>Gamma (γ):</strong> High-frequency electromagnetic photon. Highly penetrating; requires several centimetres of dense lead to absorb.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

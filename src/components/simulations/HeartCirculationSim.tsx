import React, { useState, useEffect } from 'react';
import { Subtopic } from '../../types';
import {
  Heart,
  RotateCcw,
  CheckCircle,
  Activity,
  Flame,
  ArrowRight,
  ShieldAlert
} from 'lucide-react';

interface SimProps {
  subtopic: Subtopic;
  onComplete: () => void;
}

type HeartRateMode = 'rest' | 'brisk' | 'sprint';

export const HeartCirculationSim: React.FC<SimProps> = ({ subtopic, onComplete }) => {
  const [mode, setMode] = useState<HeartRateMode>('rest');
  const [pulse, setPulse] = useState<number>(68); // bpm
  const [phase, setPhase] = useState<'systole' | 'diastole'>('diastole');
  const [selectedChamber, setSelectedChamber] = useState<string | null>(null);
  const [challengeDone, setChallengeDone] = useState<boolean>(false);

  useEffect(() => {
    let targetPulse = 68;
    if (mode === 'brisk') targetPulse = 110;
    if (mode === 'sprint') targetPulse = 165;
    setPulse(targetPulse);

    const beatInterval = (60 / targetPulse) * 1000;
    const interval = setInterval(() => {
      setPhase((p) => (p === 'systole' ? 'diastole' : 'systole'));
    }, beatInterval / 2);

    return () => clearInterval(interval);
  }, [mode]);

  const handleInspectChamber = (chamber: string) => {
    setSelectedChamber(chamber);
    setChallengeDone(true);
    onComplete();
  };

  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase tracking-wider font-extrabold text-rose-600 bg-rose-50 px-3 py-1 rounded-full border border-rose-100">
              Cardiovascular Physiology Lab
            </span>
            <span className="text-xs font-mono text-slate-500">Biology: Transport in Animals</span>
          </div>
          <h3 className="text-2xl font-black text-slate-900 mt-2">
            {subtopic.experience?.title || 'Human Cardiac Cycle & Double Circulation'}
          </h3>
          <p className="text-sm text-slate-600 mt-1 max-w-2xl">
            Examine four-chambered cardiac mechanics, ventricular systole, atrioventricular valves, and pulmonary vs. systemic circulation circuits.
          </p>
        </div>

        {challengeDone && (
          <div className="flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-2xl text-xs font-bold border border-emerald-200">
            <CheckCircle className="w-4 h-4 text-emerald-600" />
            <span>Cardiac Hemodynamics Examined!</span>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Heart Diagram Viewport */}
        <div className="lg:col-span-7 bg-slate-950 rounded-2xl p-6 border border-slate-800 flex flex-col justify-between min-h-[380px] relative overflow-hidden">
          {/* Top Telemetry */}
          <div className="flex justify-between items-center text-xs font-mono bg-slate-900/90 text-slate-200 px-4 py-2.5 rounded-xl border border-slate-800 z-10">
            <span className="flex items-center gap-1.5">
              <Heart className={`w-4 h-4 text-rose-500 ${phase === 'systole' ? 'scale-125' : 'scale-100'} transition-transform`} />
              Heart Rate: <strong className="text-rose-400 font-bold">{pulse} BPM</strong>
            </span>
            <span>Cardiac Phase: <strong className="text-amber-400 font-bold">{phase.toUpperCase()}</strong></span>
            <span>Blood Pressure: <strong className="text-sky-400">{mode === 'sprint' ? '155/95' : mode === 'brisk' ? '135/85' : '118/78'} mmHg</strong></span>
          </div>

          {/* Anatomical Heart Model Representation */}
          <div className="my-auto py-6 flex flex-col items-center justify-center relative">
            <div
              className={`w-64 h-64 rounded-full border-4 border-slate-800 p-4 relative flex flex-col justify-between transition-all duration-300 ${
                phase === 'systole' ? 'scale-95 bg-rose-950/40' : 'scale-100 bg-slate-900/60'
              }`}
            >
              {/* Top Vessels: Vena Cava / Pulmonary Artery / Aorta */}
              <div className="flex justify-between text-[10px] font-mono font-bold text-slate-300">
                <span className="text-blue-400">Vena Cava ➔</span>
                <span className="text-rose-400">➔ Aorta (to body)</span>
              </div>

              {/* 4 Chambers Grid */}
              <div className="grid grid-cols-2 gap-2 my-2 flex-1">
                {/* Right Atrium (Deox - Blue) */}
                <div
                  onClick={() => handleInspectChamber('Right Atrium')}
                  className="rounded-xl p-2 bg-blue-950/80 border-2 border-blue-500/80 text-blue-200 hover:bg-blue-900/90 transition-all cursor-pointer flex flex-col justify-between"
                >
                  <span className="text-[10px] font-mono font-bold">Right Atrium</span>
                  <span className="text-[9px] text-blue-300">Deox (CO₂)</span>
                </div>

                {/* Left Atrium (Ox - Red) */}
                <div
                  onClick={() => handleInspectChamber('Left Atrium')}
                  className="rounded-xl p-2 bg-rose-950/80 border-2 border-rose-500/80 text-rose-200 hover:bg-rose-900/90 transition-all cursor-pointer flex flex-col justify-between"
                >
                  <span className="text-[10px] font-mono font-bold">Left Atrium</span>
                  <span className="text-[9px] text-rose-300">Ox (O₂) from Lungs</span>
                </div>

                {/* Right Ventricle (Deox - Blue) */}
                <div
                  onClick={() => handleInspectChamber('Right Ventricle')}
                  className="rounded-xl p-2 bg-blue-900/60 border-2 border-blue-400 text-blue-100 hover:bg-blue-800 transition-all cursor-pointer flex flex-col justify-between"
                >
                  <span className="text-[10px] font-mono font-bold">Right Ventricle</span>
                  <span className="text-[9px] text-blue-300">To Lungs via Pulm Artery</span>
                </div>

                {/* Left Ventricle (Ox - Thick muscular wall) */}
                <div
                  onClick={() => handleInspectChamber('Left Ventricle')}
                  className="rounded-xl p-2 bg-rose-900/60 border-4 border-rose-500 text-rose-100 hover:bg-rose-800 transition-all cursor-pointer flex flex-col justify-between"
                >
                  <span className="text-[10px] font-mono font-bold">Left Ventricle</span>
                  <span className="text-[9px] text-rose-200 font-bold">Thickest Muscle (High Pressure)</span>
                </div>
              </div>

              {/* Heart Apex */}
              <div className="text-center text-[10px] font-mono text-slate-400">
                Septum prevents mixing of oxygenated & deoxygenated blood
              </div>
            </div>
          </div>

          {/* Chamber explanation pill */}
          <div className="bg-slate-900/90 rounded-xl p-3 border border-slate-800 text-xs font-mono text-slate-300 flex items-center justify-between">
            <span>Selected Region:</span>
            <span className="text-amber-400 font-bold">{selectedChamber || 'Click any heart chamber to inspect'}</span>
          </div>
        </div>

        {/* Controls */}
        <div className="lg:col-span-5 space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
              Physical Activity & Metabolic Demand
            </label>
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => setMode('rest')}
                className={`p-3 rounded-xl border text-xs font-bold text-center transition-all cursor-pointer ${
                  mode === 'rest'
                    ? 'bg-blue-50 border-blue-500 text-blue-900'
                    : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                🧘 Resting (68 bpm)
              </button>
              <button
                onClick={() => setMode('brisk')}
                className={`p-3 rounded-xl border text-xs font-bold text-center transition-all cursor-pointer ${
                  mode === 'brisk'
                    ? 'bg-amber-50 border-amber-500 text-amber-900'
                    : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                🚶 Brisk Walk (110 bpm)
              </button>
              <button
                onClick={() => setMode('sprint')}
                className={`p-3 rounded-xl border text-xs font-bold text-center transition-all cursor-pointer ${
                  mode === 'sprint'
                    ? 'bg-rose-50 border-rose-500 text-rose-900'
                    : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                🏃 Sprint (165 bpm)
              </button>
            </div>
          </div>

          {/* Anatomical Details of Selected Chamber */}
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-2 text-xs">
            <h4 className="font-bold text-slate-900">Double Circulation Mechanics:</h4>
            <ul className="space-y-1.5 text-slate-600 text-[11px] list-disc pl-4">
              <li><strong>Pulmonary Circuit:</strong> Right ventricle pumps deoxygenated blood to lungs via pulmonary artery; returns oxygenated blood to left atrium via pulmonary veins.</li>
              <li><strong>Systemic Circuit:</strong> Left ventricle pumps high-pressure oxygenated blood through the aorta to the entire body; returns deoxygenated blood via the vena cava.</li>
              <li><strong>Left Ventricle Wall:</strong> 3x thicker than right ventricle to generate immense pressure required to overcome peripheral systemic resistance.</li>
              <li><strong>Heart Valves:</strong> Tricuspid, bicuspid, and semilunar valves prevent backflow, ensuring unidirectional blood flow.</li>
            </ul>
          </div>

          <div className="p-4 bg-rose-50/70 border border-rose-200/80 rounded-2xl text-xs text-rose-950 leading-relaxed">
            <strong className="block font-bold mb-1">Key Scientific Takeaway:</strong>
            During exercise, working muscles respire at an accelerated rate, demanding more oxygen and glucose. Adrenaline and autonomic nerve signals trigger increased heart rate and stroke volume, boosting cardiac output (Cardiac Output = Heart Rate × Stroke Volume).
          </div>
        </div>
      </div>
    </div>
  );
};

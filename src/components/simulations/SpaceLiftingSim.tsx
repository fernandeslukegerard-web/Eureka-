import React, { useState } from 'react';
import { Subtopic } from '../../types';
import {
  RotateCcw,
  CheckCircle,
  ArrowUp,
  Globe,
  Rocket,
  Compass,
  Scale,
  Award
} from 'lucide-react';

interface SimProps {
  subtopic: Subtopic;
  onComplete: () => void;
}

interface CelestialBody {
  id: string;
  name: string;
  g: number; // m/s^2
  description: string;
  color: string;
}

export const SpaceLiftingSim: React.FC<SimProps> = ({ subtopic, onComplete }) => {
  const bodies: CelestialBody[] = [
    { id: 'earth', name: 'Earth', g: 9.81, description: 'Standard terrestrial gravity', color: 'from-blue-600 to-emerald-600' },
    { id: 'moon', name: 'Moon', g: 1.62, description: '1/6th Earth gravity, thin lunar regolith', color: 'from-slate-400 to-slate-600' },
    { id: 'mars', name: 'Mars', g: 3.72, description: '38% Earth gravity, iron oxide atmosphere', color: 'from-amber-600 to-rose-700' },
    { id: 'jupiter', name: 'Jupiter', g: 24.79, description: 'Crushing 2.5x Earth gravity on gas giant', color: 'from-orange-500 to-amber-700' },
    { id: 'orbit', name: 'ISS Space Station (Orbit)', g: 0.0, description: 'Microgravity (free-fall weightlessness)', color: 'from-indigo-600 to-purple-800' }
  ];

  const [selectedBody, setSelectedBody] = useState<CelestialBody>(bodies[0]);
  const [massKg, setMassKg] = useState<number>(50); // 10 to 200 kg
  const [astronautLiftingForceN, setAstronautLiftingForceN] = useState<number>(300); // 0 to 1000 N
  const [isLifting, setIsLifting] = useState<boolean>(false);
  const [liftHeight, setLiftHeight] = useState<number>(0); // 0 to 100%
  const [challengeDone, setChallengeDone] = useState<boolean>(false);

  // Scientific calculation:
  // Mass remains constant! (m)
  // Weight is downward gravitational force: W = m * g
  const weightN = Math.round(massKg * selectedBody.g);
  const netForceN = astronautLiftingForceN - weightN;
  const acceleration = selectedBody.g === 0 
    ? (astronautLiftingForceN / massKg) 
    : (netForceN / massKg);

  const canLift = netForceN > 0 || (selectedBody.g === 0 && astronautLiftingForceN > 0);

  const handleTestLift = () => {
    setIsLifting(true);
    if (canLift) {
      setLiftHeight(85);
      if (selectedBody.id === 'moon' || selectedBody.id === 'orbit') {
        setChallengeDone(true);
        onComplete();
      }
    } else {
      setLiftHeight(0);
    }
  };

  const handleReset = () => {
    setIsLifting(false);
    setLiftHeight(0);
  };

  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase tracking-wider font-extrabold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
              Orbital Mechanics Lab
            </span>
            <span className="text-xs font-mono text-slate-500">Physics 1.3: Mass vs. Weight</span>
          </div>
          <h3 className="text-2xl font-black text-slate-900 mt-2">
            {subtopic.experience?.title || 'Space-Station Cargo Lifting Challenge'}
          </h3>
          <p className="text-sm text-slate-600 mt-1 max-w-2xl">
            Transport scientific cargo across planetary bodies to discover why mass is invariant everywhere while weight varies with gravitational field strength ($W = mg$).
          </p>
        </div>

        {challengeDone && (
          <div className="flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-2xl text-xs font-bold border border-emerald-200">
            <CheckCircle className="w-4 h-4 text-emerald-600" />
            <span>Lunar & Orbital Transport Verified!</span>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Visual Cargo Crane & Gantry Viewport */}
        <div className="lg:col-span-7 bg-slate-950 rounded-2xl p-6 border border-slate-800 flex flex-col justify-between min-h-[380px] relative overflow-hidden">
          {/* Top Telemetry Overlay */}
          <div className="flex flex-wrap justify-between items-center text-xs font-mono bg-slate-900/90 text-slate-200 px-4 py-2.5 rounded-xl border border-slate-800 z-10 gap-2">
            <span>Location: <strong className="text-sky-400">{selectedBody.name}</strong></span>
            <span>g = {selectedBody.g} m/s²</span>
            <span>Weight ($W=mg$): <strong className="text-amber-400 font-bold">{weightN} N</strong></span>
          </div>

          {/* Crane & Cargo Rig */}
          <div className="my-auto py-8 relative flex flex-col items-center justify-center">
            {/* Overhead gantry hoist */}
            <div className="w-56 h-3 bg-slate-700 rounded-full mb-1 shadow-md border border-slate-600" />
            
            {/* Hoist cable */}
            <div
              className="w-1 bg-amber-400/80 transition-all duration-700 ease-out"
              style={{ height: `${Math.max(20, 140 - liftHeight * 1.2)}px` }}
            />

            {/* Astronaut Crane / Hydraulic Winch Hook */}
            <div className="w-7 h-5 border-2 border-amber-400 border-t-0 rounded-b-md flex items-center justify-center text-[10px] text-amber-300 font-mono font-bold">
              ⚓
            </div>

            {/* Cargo Crate Container */}
            <div
              className={`w-36 rounded-2xl p-3 border-2 transition-all duration-700 ease-out flex flex-col items-center justify-center shadow-xl ${
                liftHeight > 0
                  ? 'bg-indigo-900/80 border-indigo-400 text-white shadow-indigo-500/20 translate-y-[-20px]'
                  : 'bg-slate-800 border-slate-600 text-slate-200'
              }`}
            >
              <div className="text-2xl mb-1">📦</div>
              <span className="text-xs font-bold font-mono">CARGO CONTAINER</span>
              <div className="mt-1 text-[11px] font-mono text-sky-300">
                Mass: <strong>{massKg} kg</strong> (Constant)
              </div>
              <div className="text-[10px] font-mono text-amber-300">
                Weight: <strong>{weightN} N</strong>
              </div>
            </div>

            {/* Floor surface of the planet */}
            <div className="w-full mt-6 h-6 rounded-xl bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 border-t border-slate-600 flex items-center justify-center text-[10px] font-mono text-slate-400">
              {selectedBody.name} Surface ({selectedBody.description})
            </div>
          </div>

          {/* Dynamic Force Vector Readout */}
          <div className="bg-slate-900/90 rounded-xl p-3 border border-slate-800 text-xs font-mono flex items-center justify-between text-slate-300">
            <div>
              Lifting Effort: <span className="text-emerald-400 font-bold">{astronautLiftingForceN} N</span>
            </div>
            <div>
              Gravity Force: <span className="text-rose-400 font-bold">{weightN} N</span>
            </div>
            <div>
              Net Force: <span className={`font-bold ${netForceN > 0 ? 'text-emerald-400' : 'text-slate-400'}`}>
                {netForceN > 0 ? `+${netForceN} N (Accelerating Up)` : `${netForceN} N (Stuck on Ground)`}
              </span>
            </div>
          </div>
        </div>

        {/* Scientific Controls */}
        <div className="lg:col-span-5 space-y-5">
          {/* Celestial Body Selector */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
              Select Planetary Body ($g$)
            </label>
            <div className="grid grid-cols-2 gap-2">
              {bodies.map((b) => (
                <button
                  key={b.id}
                  onClick={() => {
                    setSelectedBody(b);
                    handleReset();
                  }}
                  className={`p-2.5 rounded-xl border text-xs font-bold text-left transition-all cursor-pointer ${
                    selectedBody.id === b.id
                      ? 'bg-indigo-50 border-indigo-400 text-indigo-900 shadow-xs'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span>{b.name}</span>
                    <span className="font-mono text-[10px] text-slate-500">{b.g} m/s²</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Cargo Mass Slider (Invariant) */}
          <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200">
            <div className="flex justify-between items-center mb-1.5">
              <span className="text-xs font-bold text-slate-700">Cargo Mass ($m$)</span>
              <span className="text-xs font-mono font-bold text-blue-600">{massKg} kg</span>
            </div>
            <input
              type="range"
              min="10"
              max="200"
              step="5"
              value={massKg}
              onChange={(e) => {
                setMassKg(Number(e.target.value));
                handleReset();
              }}
              className="w-full accent-blue-600 cursor-pointer"
            />
            <p className="text-[11px] text-slate-500 mt-1">
              Mass measures the amount of matter in kilograms. It is completely identical everywhere in the universe.
            </p>
          </div>

          {/* Astronaut / Winch Lifting Force */}
          <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200">
            <div className="flex justify-between items-center mb-1.5">
              <span className="text-xs font-bold text-slate-700">Astronaut Lifting Force ($F$)</span>
              <span className="text-xs font-mono font-bold text-emerald-600">{astronautLiftingForceN} N</span>
            </div>
            <input
              type="range"
              min="0"
              max="1200"
              step="20"
              value={astronautLiftingForceN}
              onChange={(e) => {
                setAstronautLiftingForceN(Number(e.target.value));
                handleReset();
              }}
              className="w-full accent-emerald-600 cursor-pointer"
            />
            <p className="text-[11px] text-slate-500 mt-1">
              To lift the cargo off the surface, the lifting force must strictly exceed the crate's weight (F &gt; mg).
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button
              onClick={handleTestLift}
              className={`flex-1 py-3 px-4 rounded-xl font-bold text-xs shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer ${
                canLift
                  ? 'bg-indigo-600 hover:bg-indigo-500 text-white'
                  : 'bg-slate-300 text-slate-600'
              }`}
            >
              <ArrowUp className="w-4 h-4" />
              <span>{canLift ? 'Execute Lift Command' : 'Insufficient Force (F < W)'}</span>
            </button>

            <button
              onClick={handleReset}
              className="p-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl transition-colors cursor-pointer"
              title="Reset Cargo"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>

          {/* Real Scientific Explanation */}
          <div className="p-4 bg-blue-50/70 border border-blue-200/80 rounded-2xl text-xs text-blue-900 leading-relaxed">
            <strong className="block font-bold mb-1 flex items-center gap-1.5 text-blue-950">
              <Scale className="w-3.5 h-3.5 text-blue-600" /> Key Scientific Takeaway:
            </strong>
            A 50 kg mass has a weight of <strong>491 N</strong> on Earth, but only <strong>81 N</strong> on the Moon! That is why astronauts can easily hoist massive heavy equipment on lunar missions that would be immovable on Earth.
          </div>
        </div>
      </div>
    </div>
  );
};

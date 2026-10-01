import React, { useState } from 'react';
import { Subtopic } from '../../types';
import { Scale, RotateCcw, ArrowRight, ArrowDown } from 'lucide-react';

interface SimProps {
  subtopic: Subtopic;
  onComplete: () => void;
}

export const LeverFulcrumSim: React.FC<SimProps> = ({ subtopic, onComplete }) => {
  const [fulcrumPos, setFulcrumPos] = useState<number>(30); // % from left (10% to 90%)
  const [loadMass, setLoadMass] = useState<number>(400); // Newtons on left end
  const [effortForce, setEffortForce] = useState<number>(150); // Newtons applied on right end

  // Lever calculations
  // Beam length = 10 meters total
  const leftArm = fulcrumPos / 10; // meters
  const rightArm = (100 - fulcrumPos) / 10; // meters

  // Torques
  const antiClockwiseTorque = Math.round(loadMass * leftArm);
  const clockwiseTorque = Math.round(effortForce * rightArm);
  const netTorque = clockwiseTorque - antiClockwiseTorque;

  // Mechanical Advantage = Effort Arm / Load Arm
  const mechanicalAdvantage = Math.round((rightArm / leftArm) * 10) / 10;

  // Beam tilt angle based on net torque
  const tiltAngle = Math.max(-15, Math.min(15, netTorque / 80));

  const isBalanced = Math.abs(netTorque) < 50;
  const canLiftBoulder = clockwiseTorque >= antiClockwiseTorque;

  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase tracking-wider font-extrabold text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-100">
              Simple Machines: Levers & Torque
            </span>
            <span className="text-xs font-mono text-slate-500">General Science: Forces & Machines</span>
          </div>
          <h3 className="text-2xl font-black text-slate-900 mt-2">
            {subtopic.experience?.title || 'Treasure Boulder Fulcrum & Mechanical Advantage Lab'}
          </h3>
          <p className="text-sm text-slate-600 mt-1 max-w-2xl">
            Shift the fulcrum pivot and apply effort to lift heavy loads using the Principle of Moments (Torque = Force × Distance).
          </p>
        </div>

        <div className="flex items-center gap-2 bg-amber-50 text-amber-800 px-4 py-2 rounded-2xl text-xs font-bold border border-amber-200">
          <Scale className="w-4 h-4 text-amber-600" />
          <span>M.A. = {mechanicalAdvantage}× Force Multiplier</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Lever Visual Canvas */}
        <div className="lg:col-span-7 bg-slate-950 rounded-2xl p-6 border border-slate-800 flex flex-col justify-between min-h-[380px] relative overflow-hidden">
          {/* Top Telemetry */}
          <div className="flex justify-between items-center text-xs font-mono bg-slate-900/90 text-slate-200 px-4 py-2.5 rounded-xl border border-slate-800 z-10">
            <span>Load Moment: <strong className="text-rose-400 font-bold">{antiClockwiseTorque} N·m</strong> (CCW)</span>
            <span>Effort Moment: <strong className="text-emerald-400 font-bold">{clockwiseTorque} N·m</strong> (CW)</span>
            <span className={canLiftBoulder ? 'text-emerald-400 font-bold' : 'text-amber-400 font-bold'}>
              {canLiftBoulder ? '✓ BOULDER HOISTED!' : 'Need More Leverage'}
            </span>
          </div>

          {/* Central Lever Balance Visual */}
          <div className="my-auto py-12 relative flex flex-col items-center justify-center">
            {/* The Beam that tilts */}
            <div
              className="relative w-full max-w-md h-4 bg-gradient-to-r from-slate-400 via-slate-200 to-slate-400 rounded-full shadow-2xl transition-transform duration-300 origin-center"
              style={{
                transform: `rotate(${tiltAngle}deg)`
              }}
            >
              {/* Left Load Boulder */}
              <div className="absolute left-2 bottom-4 flex flex-col items-center">
                <div className="w-12 h-12 rounded-2xl bg-slate-700 border-2 border-slate-500 shadow-xl flex items-center justify-center text-white font-mono text-xs font-bold">
                  {loadMass}N
                </div>
                <ArrowDown className="w-4 h-4 text-rose-400 mt-1 animate-bounce" />
              </div>

              {/* Right Effort Force */}
              <div className="absolute right-2 bottom-4 flex flex-col items-center">
                <div className="w-10 h-10 rounded-xl bg-emerald-600 border-2 border-emerald-400 shadow-xl flex items-center justify-center text-white font-mono text-xs font-bold">
                  {effortForce}N
                </div>
                <ArrowDown className="w-4 h-4 text-emerald-400 mt-1 animate-bounce" />
              </div>
            </div>

            {/* Fulcrum Pivot Triangle underneath beam */}
            <div
              className="w-0 h-0 border-l-[18px] border-l-transparent border-r-[18px] border-r-transparent border-b-[32px] border-b-amber-500 transition-all duration-150 drop-shadow-lg"
              style={{
                marginLeft: `${(fulcrumPos - 50) * 6}px`
              }}
            />
            {/* Ground line */}
            <div className="w-full max-w-md h-1.5 bg-slate-700 rounded-full mt-1" />
          </div>

          {/* Bottom Live Formula Status */}
          <div className="bg-slate-900/90 rounded-xl p-3 text-xs text-slate-300 font-mono flex items-center justify-between border border-slate-800 z-10">
            <span>Left Arm: {leftArm.toFixed(1)}m | Right Arm: {rightArm.toFixed(1)}m</span>
            <span className="text-emerald-400 font-bold">
              {isBalanced ? 'Equilibrium (Balanced)' : netTorque > 0 ? 'Clockwise Tilt (Lifting)' : 'Counter-Clockwise Tilt'}
            </span>
          </div>
        </div>

        {/* Real Topic-Specific Lever Controls */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-5">
            <h4 className="text-sm font-bold text-slate-800 flex items-center gap-2">
              <Scale className="w-4 h-4 text-amber-600" /> Lever Calibration Controls
            </h4>

            {/* Fulcrum Pivot Slider */}
            <div>
              <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1.5">
                <span>Fulcrum Position (Pivot point)</span>
                <span className="font-mono text-amber-600 font-bold">{fulcrumPos}% from load</span>
              </div>
              <input
                type="range"
                min="15"
                max="85"
                value={fulcrumPos}
                onChange={(e) => setFulcrumPos(parseInt(e.target.value, 10))}
                className="w-full accent-amber-600 h-2 bg-slate-200 rounded-lg cursor-pointer"
              />
              <span className="text-[11px] text-slate-500 block mt-1">
                Moving the fulcrum closer to the boulder increases the effort arm, multiplying lifting torque!
              </span>
            </div>

            {/* Effort Applied Slider */}
            <div>
              <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1.5">
                <span>Applied Effort Force</span>
                <span className="font-mono text-emerald-600 font-bold">{effortForce} N</span>
              </div>
              <input
                type="range"
                min="50"
                max="500"
                step="25"
                value={effortForce}
                onChange={(e) => setEffortForce(parseInt(e.target.value, 10))}
                className="w-full accent-emerald-600 h-2 bg-slate-200 rounded-lg cursor-pointer"
              />
            </div>

            {/* Load Boulder Mass Slider */}
            <div>
              <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1.5">
                <span>Load Boulder Weight</span>
                <span className="font-mono text-slate-800 font-bold">{loadMass} N</span>
              </div>
              <input
                type="range"
                min="100"
                max="800"
                step="50"
                value={loadMass}
                onChange={(e) => setLoadMass(parseInt(e.target.value, 10))}
                className="w-full accent-slate-700 h-2 bg-slate-200 rounded-lg cursor-pointer"
              />
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => {
                setFulcrumPos(30);
                setLoadMass(400);
                setEffortForce(150);
              }}
              className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Reset Lever
            </button>
            <button
              onClick={onComplete}
              className="flex-1 py-3 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white font-bold rounded-xl shadow-md transition-all text-xs flex items-center justify-center gap-2 cursor-pointer"
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

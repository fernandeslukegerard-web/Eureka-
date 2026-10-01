import React, { useState, useEffect } from 'react';
import { Subtopic } from '../../types';
import { Plane, Wind, ArrowUp, ArrowDown, ArrowRight as ArrowForward, RotateCcw, CheckCircle, AlertTriangle, Shield } from 'lucide-react';

interface SimProps {
  subtopic: Subtopic;
  onComplete: () => void;
}

export const AircraftFlightSim: React.FC<SimProps> = ({ subtopic, onComplete }) => {
  const [thrust, setThrust] = useState<number>(65); // % (0 - 100)
  const [angleAtt, setAngleAtt] = useState<number>(4); // degrees (-5 to 20)
  const [mass, setMass] = useState<number>(1200); // kg (800 - 2000)
  const [altitude, setAltitude] = useState<number>(1500); // meters
  const [airspeed, setAirspeed] = useState<number>(160); // knots
  const [isFlying, setIsFlying] = useState<boolean>(true);
  const [challengeDone, setChallengeDone] = useState<boolean>(false);

  // Aerodynamic calculations based on real flight physics
  const isStalled = angleAtt > 14;
  const gravityForce = Math.round(mass * 9.81);
  // Lift increases with airspeed squared and angle of attack, drops to 20% in stall
  const liftCoefficient = isStalled ? 0.25 : Math.max(0, 0.1 + angleAtt * 0.12);
  const liftForce = Math.round(0.5 * 1.225 * Math.pow(airspeed * 0.514, 2) * 20 * liftCoefficient);
  // Drag increases with airspeed squared and high angle of attack
  const dragForce = Math.round(0.5 * 1.225 * Math.pow(airspeed * 0.514, 2) * 20 * (0.03 + Math.pow(Math.max(0, angleAtt), 2) * 0.008));
  const engineThrustForce = Math.round(thrust * 140); // Newtons

  const verticalNetForce = liftForce - gravityForce;
  const climbRate = Math.round((verticalNetForce / mass) * 3); // m/s vertical speed

  // Physics animation loop
  useEffect(() => {
    if (!isFlying) return;
    const interval = setInterval(() => {
      setAltitude((alt) => {
        const nextAlt = Math.max(0, Math.min(8000, alt + climbRate));
        if (nextAlt <= 0) {
          setIsFlying(false);
          return 0;
        }
        return nextAlt;
      });

      setAirspeed((spd) => {
        const accel = (engineThrustForce - dragForce) / mass;
        const nextSpd = Math.max(40, Math.min(320, spd + accel * 0.5));
        return Math.round(nextSpd);
      });

      // Target Challenge: Maintain stable level cruise between 1800m and 2200m at > 150 knots
      if (altitude >= 1800 && altitude <= 2200 && Math.abs(climbRate) <= 2 && airspeed >= 150 && !isStalled) {
        setChallengeDone(true);
      }
    }, 150);

    return () => clearInterval(interval);
  }, [isFlying, climbRate, engineThrustForce, dragForce, mass, altitude, airspeed, isStalled]);

  const handleReset = () => {
    setThrust(65);
    setAngleAtt(4);
    setMass(1200);
    setAltitude(1500);
    setAirspeed(160);
    setIsFlying(true);
  };

  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
      {/* Simulation Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase tracking-wider font-extrabold text-sky-600 bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
              Interactive Aerodynamics Lab
            </span>
            <span className="text-xs font-mono text-slate-500">Physics 1.5: Forces in Flight</span>
          </div>
          <h3 className="text-2xl font-black text-slate-900 mt-2">
            {subtopic.experience?.title || 'Pre-Flight Aerodynamics Simulator'}
          </h3>
          <p className="text-sm text-slate-600 mt-1 max-w-2xl">
            Manipulate thrust, lift, drag, and angle of attack to observe real forces acting on an aircraft in flight.
          </p>
        </div>

        {challengeDone && (
          <div className="flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-2xl text-xs font-bold border border-emerald-200">
            <CheckCircle className="w-4 h-4 text-emerald-600" />
            <span>Target Level Flight Achieved!</span>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Visual Cockpit / Flight Display Canvas */}
        <div className="lg:col-span-7 bg-gradient-to-b from-sky-400 via-sky-200 to-emerald-100 rounded-2xl p-6 border border-sky-200 flex flex-col justify-between min-h-[360px] relative overflow-hidden shadow-inner">
          {/* Cloud decorations */}
          <div className="absolute top-8 left-12 w-24 h-8 bg-white/70 rounded-full blur-[1px]" />
          <div className="absolute top-16 right-20 w-32 h-10 bg-white/60 rounded-full blur-[1px]" />

          {/* Telemetry HUD top bar */}
          <div className="flex justify-between items-center text-xs font-mono bg-slate-900/80 backdrop-blur text-white px-4 py-2 rounded-xl border border-slate-700/60 z-10">
            <div className="flex items-center gap-4">
              <span>ALT: <strong className="text-sky-300 font-bold">{altitude} m</strong></span>
              <span>SPD: <strong className="text-amber-300 font-bold">{airspeed} kts</strong></span>
              <span>V/S: <strong className={climbRate >= 0 ? 'text-emerald-400 font-bold' : 'text-rose-400 font-bold'}>
                {climbRate >= 0 ? `+${climbRate}` : climbRate} m/s
              </strong></span>
            </div>
            {isStalled ? (
              <span className="flex items-center gap-1 text-rose-300 font-bold bg-rose-950/80 px-2 py-0.5 rounded border border-rose-500 animate-pulse">
                <AlertTriangle className="w-3.5 h-3.5" /> STALL WARNING
              </span>
            ) : (
              <span className="text-emerald-400 font-bold">CRUISE STABLE</span>
            )}
          </div>

          {/* Center Airplane Visual with Dynamic Force Vectors */}
          <div className="relative my-auto flex flex-col items-center justify-center py-10 z-10">
            <div
              className="relative transition-transform duration-300 flex items-center justify-center"
              style={{
                transform: `rotate(${-angleAtt * 1.5}deg) translateY(${isStalled ? '20px' : '0px'})`
              }}
            >
              {/* Airplane Icon / SVG */}
              <div className="w-28 h-28 bg-white/95 rounded-3xl p-4 shadow-xl border-2 border-sky-400 flex items-center justify-center text-sky-600">
                <Plane className="w-16 h-16 transform -rotate-45" />
              </div>

              {/* Force Vector: LIFT (Up) */}
              <div
                className="absolute bottom-full left-1/2 -translate-x-1/2 flex flex-col items-center"
                style={{ height: `${Math.min(90, Math.max(20, liftForce / 150))}px` }}
              >
                <span className="text-[10px] font-mono font-bold text-sky-700 bg-white/90 px-1.5 py-0.5 rounded shadow-sm whitespace-nowrap mb-1">
                  Lift: {liftForce} N
                </span>
                <div className="w-1.5 flex-1 bg-sky-500 rounded-full" />
                <ArrowUp className="w-4 h-4 text-sky-600 -mt-1" />
              </div>

              {/* Force Vector: WEIGHT (Down) */}
              <div
                className="absolute top-full left-1/2 -translate-x-1/2 flex flex-col items-center"
                style={{ height: `${Math.min(90, Math.max(20, gravityForce / 150))}px` }}
              >
                <ArrowDown className="w-4 h-4 text-amber-700 -mb-1" />
                <div className="w-1.5 flex-1 bg-amber-600 rounded-full" />
                <span className="text-[10px] font-mono font-bold text-amber-800 bg-white/90 px-1.5 py-0.5 rounded shadow-sm whitespace-nowrap mt-1">
                  Weight: {gravityForce} N
                </span>
              </div>

              {/* Force Vector: THRUST (Forward / Right) */}
              <div
                className="absolute left-full top-1/2 -translate-y-1/2 flex items-center"
                style={{ width: `${Math.min(90, Math.max(20, engineThrustForce / 120))}px` }}
              >
                <div className="h-1.5 flex-1 bg-emerald-500 rounded-full" />
                <ArrowForward className="w-4 h-4 text-emerald-600 -ml-1" />
                <span className="text-[10px] font-mono font-bold text-emerald-800 bg-white/90 px-1.5 py-0.5 rounded shadow-sm whitespace-nowrap ml-1">
                  Thrust: {engineThrustForce} N
                </span>
              </div>

              {/* Force Vector: DRAG (Backward / Left) */}
              <div
                className="absolute right-full top-1/2 -translate-y-1/2 flex items-center"
                style={{ width: `${Math.min(90, Math.max(20, dragForce / 120))}px` }}
              >
                <span className="text-[10px] font-mono font-bold text-rose-800 bg-white/90 px-1.5 py-0.5 rounded shadow-sm whitespace-nowrap mr-1">
                  Drag: {dragForce} N
                </span>
                <div className="h-1.5 flex-1 bg-rose-500 rounded-full" />
              </div>
            </div>
          </div>

          {/* Bottom Physics Summary */}
          <div className="bg-white/90 backdrop-blur rounded-xl p-3 text-xs text-slate-700 font-mono flex items-center justify-between border border-sky-100 z-10">
            <span>
              Net Vertical: <strong className={verticalNetForce >= 0 ? 'text-sky-600' : 'text-amber-600'}>
                {verticalNetForce > 0 ? `+${verticalNetForce}` : verticalNetForce} N
              </strong>
            </span>
            <span>
              Net Horizontal: <strong className={engineThrustForce >= dragForce ? 'text-emerald-600' : 'text-rose-600'}>
                {engineThrustForce - dragForce > 0 ? `+${engineThrustForce - dragForce}` : engineThrustForce - dragForce} N
              </strong>
            </span>
          </div>
        </div>

        {/* Real Topic-Specific Flight Controls */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-5">
            <h4 className="text-sm font-bold text-slate-800 flex items-center gap-2">
              <Plane className="w-4 h-4 text-sky-600" /> Topic-Specific Flight Controls
            </h4>

            {/* Thrust Throttle */}
            <div>
              <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1.5">
                <span>Engine Thrust ({thrust}%)</span>
                <span className="font-mono text-emerald-600 font-bold">{engineThrustForce} N</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={thrust}
                onChange={(e) => setThrust(parseInt(e.target.value, 10))}
                className="w-full accent-emerald-600 h-2 bg-slate-200 rounded-lg cursor-pointer"
              />
              <span className="text-[11px] text-slate-500 block mt-1">
                Forward propelling force produced by jet engines.
              </span>
            </div>

            {/* Angle of Attack (AoA) */}
            <div>
              <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1.5">
                <span>Angle of Attack ({angleAtt}°)</span>
                <span className={`font-mono font-bold ${isStalled ? 'text-rose-600' : 'text-sky-600'}`}>
                  {isStalled ? 'STALL (>14°)' : `${angleAtt}° Pitch`}
                </span>
              </div>
              <input
                type="range"
                min="-4"
                max="20"
                value={angleAtt}
                onChange={(e) => setAngleAtt(parseInt(e.target.value, 10))}
                className="w-full accent-sky-600 h-2 bg-slate-200 rounded-lg cursor-pointer"
              />
              <span className="text-[11px] text-slate-500 block mt-1">
                Angle between wing chord line and incoming airflow. Above 14°, airflow separates (Stall).
              </span>
            </div>

            {/* Aircraft Mass */}
            <div>
              <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1.5">
                <span>Aircraft Payload Mass</span>
                <span className="font-mono text-amber-600 font-bold">{mass} kg</span>
              </div>
              <input
                type="range"
                min="800"
                max="2000"
                step="50"
                value={mass}
                onChange={(e) => setMass(parseInt(e.target.value, 10))}
                className="w-full accent-amber-600 h-2 bg-slate-200 rounded-lg cursor-pointer"
              />
              <span className="text-[11px] text-slate-500 block mt-1">
                Increases gravitational weight force ($W = mg$).
              </span>
            </div>

            {/* Objective Box */}
            <div className="bg-sky-50/80 p-3.5 rounded-xl border border-sky-200 text-xs text-slate-700 leading-relaxed">
              <strong className="text-sky-900 block mb-1">Flight Challenge Objective:</strong>
              Trim Thrust and Angle of Attack to maintain level flight (V/S ≈ 0 m/s) at 2000m altitude without stalling the wings!
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <button
              onClick={handleReset}
              className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Reset Flight
            </button>
            <button
              onClick={onComplete}
              className="flex-1 py-3 bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 text-white font-bold rounded-xl shadow-md transition-all text-xs flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Analyze Results (What Happened?)</span>
              <ArrowForward className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

import React, { useState, useEffect, useRef } from 'react';
import {
  Rocket,
  Flame,
  ArrowLeft,
  RotateCcw,
  CheckCircle,
  Activity,
  AlertTriangle,
  Award,
  Compass,
  Gauge
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const SpaceMissionGame: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  // Physical parameters
  const [altitude, setAltitude] = useState<number>(1000); // meters
  const [velocity, setVelocity] = useState<number>(-35); // m/s (negative = falling)
  const [fuel, setFuel] = useState<number>(350); // kg
  const [dryMass] = useState<number>(650); // kg
  const [thrustPercent, setThrustPercent] = useState<number>(0); // 0 to 100%
  const [flightStatus, setFlightStatus] = useState<'in_flight' | 'landed' | 'crashed'>('in_flight');
  const [crashMessage, setCrashMessage] = useState<string>('');

  const gravity = 1.62; // m/s^2 on Moon
  const maxThrust = 3200; // Newtons

  const totalMass = dryMass + fuel;
  const currentThrust = (thrustPercent / 100) * (fuel > 0 ? maxThrust : 0);
  const netForce = currentThrust - totalMass * gravity;
  const acceleration = netForce / totalMass; // a = F_net / m
  const kineticEnergy = Math.round(0.5 * totalMass * velocity * velocity);

  // Simulation step tick
  useEffect(() => {
    if (flightStatus !== 'in_flight') return;

    const interval = setInterval(() => {
      setFuel((prevFuel) => {
        if (thrustPercent > 0 && prevFuel > 0) {
          const burnRate = (thrustPercent / 100) * 4.5 * 0.1; // kg consumed per 100ms
          return Math.max(0, prevFuel - burnRate);
        }
        return prevFuel;
      });

      setVelocity((prevV) => prevV + acceleration * 0.1);

      setAltitude((prevAlt) => {
        const nextAlt = prevAlt + velocity * 0.1;
        if (nextAlt <= 0) {
          // Touchdown check
          if (Math.abs(velocity) < 4.0) {
            setFlightStatus('landed');
            try {
              confetti({ particleCount: 80, spread: 60, origin: { y: 0.6 } });
            } catch {}
          } else {
            setFlightStatus('crashed');
            setCrashMessage(
              `Hard impact at ${Math.abs(velocity).toFixed(1)} m/s! Exceeded structural limit of 4.0 m/s.`
            );
          }
          return 0;
        }
        return nextAlt;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [flightStatus, acceleration, velocity, thrustPercent]);

  const handleRestart = () => {
    setAltitude(1000);
    setVelocity(-35);
    setFuel(350);
    setThrustPercent(0);
    setFlightStatus('in_flight');
    setCrashMessage('');
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl text-slate-100 flex flex-col space-y-6 p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl transition-colors cursor-pointer"
            title="Return to Games Home"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl">⚡</span>
              <h2 className="text-xl font-black text-white">Space Mission: Lunar Descent</h2>
              <span className="text-[10px] font-mono uppercase font-bold px-2 py-0.5 rounded-full bg-amber-950 text-amber-300 border border-amber-800">
                Physics Mechanics
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              Newtonian Dynamics — Balance Thrust vs Gravitational Force (F = ma) to execute a soft lunar landing.
            </p>
          </div>
        </div>

        <button
          onClick={handleRestart}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-700 bg-slate-950 hover:bg-slate-800 text-xs font-mono text-slate-300 hover:text-white transition-colors cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset Flight</span>
        </button>
      </div>

      {/* Main HUD and Cockpit */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Visual Descent Visualizer */}
        <div className="lg:col-span-8 bg-slate-950 border border-slate-800 rounded-3xl p-5 relative overflow-hidden h-[420px] flex flex-col justify-between">
          {/* Starfield background */}
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px] opacity-20 pointer-events-none" />

          {/* Telemetry Overlay Top */}
          <div className="relative z-10 flex flex-wrap justify-between gap-2 text-xs font-mono">
            <div className="bg-slate-900/90 border border-slate-800 px-3 py-1.5 rounded-xl">
              <span className="text-slate-500 block text-[9px]">LUNAR GRAVITY</span>
              <span className="text-amber-400 font-bold">{gravity} m/s²</span>
            </div>
            <div className="bg-slate-900/90 border border-slate-800 px-3 py-1.5 rounded-xl">
              <span className="text-slate-500 block text-[9px]">TOTAL VEHICLE MASS</span>
              <span className="text-cyan-400 font-bold">{Math.round(totalMass)} kg</span>
            </div>
            <div className="bg-slate-900/90 border border-slate-800 px-3 py-1.5 rounded-xl">
              <span className="text-slate-500 block text-[9px]">KINETIC ENERGY (Ek)</span>
              <span className="text-indigo-400 font-bold">{(kineticEnergy / 1000).toFixed(1)} kJ</span>
            </div>
          </div>

          {/* Lunar Surface Ground */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-800 to-slate-700 border-t-2 border-slate-600 flex items-center justify-center">
            <div className="px-6 py-1 bg-amber-500/20 border border-amber-500/40 rounded-lg text-[10px] font-mono font-bold text-amber-300">
              LANDING ZONE TARGET (TOUCHDOWN LIMIT: &lt; 4.0 m/s)
            </div>
          </div>

          {/* Spacecraft Lander Representation */}
          <div
            style={{
              bottom: `${Math.max(16, (altitude / 1000) * 310 + 16)}px`,
              transition: 'bottom 0.1s linear'
            }}
            className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center"
          >
            {/* Thruster Plume */}
            {thrustPercent > 0 && fuel > 0 && (
              <div
                style={{ height: `${(thrustPercent / 100) * 45}px` }}
                className="w-4 bg-gradient-to-b from-amber-400 via-orange-500 to-transparent rounded-b-full blur-2xs animate-pulse order-2"
              />
            )}

            <div className="p-3 rounded-2xl bg-gradient-to-tr from-slate-700 to-slate-600 border border-slate-500 shadow-xl flex items-center justify-center text-white text-2xl order-1">
              🚀
            </div>
          </div>

          {/* Touchdown outcome banner */}
          {flightStatus === 'landed' && (
            <div className="absolute inset-0 z-20 bg-emerald-950/80 backdrop-blur-xs flex flex-col items-center justify-center text-center p-6 animate-in zoom-in-95">
              <CheckCircle className="w-14 h-14 text-emerald-400 mb-2" />
              <h3 className="text-xl font-black text-white">Touchdown Successful!</h3>
              <p className="text-xs text-emerald-200 mt-1 max-w-sm">
                Smooth landing at {Math.abs(velocity).toFixed(1)} m/s. Thrusters matched gravitational acceleration to bleed off kinetic energy.
              </p>
              <button
                onClick={handleRestart}
                className="mt-4 px-5 py-2.5 bg-emerald-500 text-slate-950 font-bold rounded-xl text-xs hover:bg-emerald-400 transition-colors cursor-pointer"
              >
                Launch Next Mission
              </button>
            </div>
          )}

          {flightStatus === 'crashed' && (
            <div className="absolute inset-0 z-20 bg-rose-950/85 backdrop-blur-xs flex flex-col items-center justify-center text-center p-6 animate-in zoom-in-95">
              <AlertTriangle className="w-14 h-14 text-rose-400 mb-2" />
              <h3 className="text-xl font-black text-white">Lander Destroyed</h3>
              <p className="text-xs text-rose-200 mt-1 max-w-sm">{crashMessage}</p>
              <p className="text-[11px] text-slate-400 mt-2 font-mono">
                Tip: Apply throttle earlier to counteract lunar gravity (F_thrust &gt; mg).
              </p>
              <button
                onClick={handleRestart}
                className="mt-4 px-5 py-2.5 bg-rose-600 text-white font-bold rounded-xl text-xs hover:bg-rose-500 transition-colors cursor-pointer"
              >
                Retry Mission
              </button>
            </div>
          )}
        </div>

        {/* Flight Control Console */}
        <div className="lg:col-span-4 space-y-4 bg-slate-950 border border-slate-800 rounded-3xl p-5">
          <h3 className="text-xs font-mono uppercase font-extrabold tracking-wider text-slate-400 flex items-center gap-2">
            <Gauge className="w-4 h-4 text-amber-400" />
            <span>Flight Instruments</span>
          </h3>

          {/* Altitude Gauge */}
          <div className="p-3 bg-slate-900 border border-slate-800 rounded-2xl flex justify-between items-center">
            <span className="text-xs text-slate-400 font-mono">Altitude (h):</span>
            <span className="text-lg font-black font-mono text-white">{Math.round(altitude)} m</span>
          </div>

          {/* Velocity Gauge */}
          <div className="p-3 bg-slate-900 border border-slate-800 rounded-2xl flex justify-between items-center">
            <span className="text-xs text-slate-400 font-mono">Vertical Velocity (v):</span>
            <span
              className={`text-lg font-black font-mono ${
                Math.abs(velocity) < 4.0 ? 'text-emerald-400' : 'text-rose-400'
              }`}
            >
              {velocity.toFixed(1)} m/s
            </span>
          </div>

          {/* Acceleration */}
          <div className="p-3 bg-slate-900 border border-slate-800 rounded-2xl flex justify-between items-center">
            <span className="text-xs text-slate-400 font-mono">Net Acceleration (a):</span>
            <span className="text-sm font-bold font-mono text-cyan-400">{acceleration.toFixed(2)} m/s²</span>
          </div>

          {/* Propellant Gauge */}
          <div>
            <div className="flex justify-between items-center text-xs font-mono mb-1">
              <span className="text-slate-400">Reaction Propellant:</span>
              <span className="text-amber-400 font-bold">{Math.round(fuel)} kg</span>
            </div>
            <div className="w-full bg-slate-900 h-2.5 rounded-full overflow-hidden border border-slate-800">
              <div
                className="bg-amber-500 h-full rounded-full transition-all"
                style={{ width: `${(fuel / 350) * 100}%` }}
              />
            </div>
          </div>

          {/* Main Throttle Lever */}
          <div className="pt-2">
            <div className="flex justify-between items-center text-xs font-mono mb-1">
              <span className="text-slate-400 flex items-center gap-1 font-bold">
                <Flame className="w-3.5 h-3.5 text-orange-500" />
                Main Thruster Throttle
              </span>
              <span className="text-sm font-black font-mono text-white">{thrustPercent}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              step="5"
              value={thrustPercent}
              onChange={(e) => setThrustPercent(parseInt(e.target.value, 10))}
              disabled={flightStatus !== 'in_flight' || fuel <= 0}
              className="w-full accent-amber-500 cursor-pointer h-3"
            />
            <div className="flex justify-between text-[10px] font-mono text-slate-600 mt-1">
              <span>0% (Free Fall)</span>
              <span>Hover (~50%)</span>
              <span>100% (Full Decel)</span>
            </div>
          </div>

          {/* Physics Law Card */}
          <div className="p-3 bg-slate-900/60 border border-slate-800 rounded-xl text-[11px] text-slate-400 font-sans leading-relaxed">
            <span className="font-bold text-white block mb-0.5">Newton's Second Law:</span>
            When F_thrust &gt; mg, upward acceleration slows the descent. Because fuel is consumed, mass m decreases, increasing acceleration over time!
          </div>
        </div>
      </div>
    </div>
  );
};

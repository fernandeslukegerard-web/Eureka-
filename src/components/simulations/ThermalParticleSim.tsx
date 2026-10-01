import React, { useState, useEffect } from 'react';
import { Subtopic } from '../../types';
import { Flame, Snowflake, RotateCcw, ArrowRight, Thermometer, Shield } from 'lucide-react';

interface SimProps {
  subtopic: Subtopic;
  onComplete: () => void;
}

export const ThermalParticleSim: React.FC<SimProps> = ({ subtopic, onComplete }) => {
  const [temperature, setTemperature] = useState<number>(25); // Celsius (-50 to 150)
  const [burnerActive, setBurnerActive] = useState<boolean>(false);
  const [coolerActive, setCoolerActive] = useState<boolean>(false);

  // States of matter thresholds: Solid <= 0°C, Liquid 0°C - 100°C, Gas >= 100°C
  const stateOfMatter =
    temperature < 0 ? 'Solid (Ice)' : temperature < 100 ? 'Liquid (Water)' : 'Gas (Steam)';
  const stateColor =
    temperature < 0 ? 'text-sky-500' : temperature < 100 ? 'text-blue-600' : 'text-amber-500';

  // Heating/cooling loop
  useEffect(() => {
    const interval = setInterval(() => {
      if (burnerActive) {
        setTemperature((t) => Math.min(150, t + 2));
      } else if (coolerActive) {
        setTemperature((t) => Math.max(-50, t - 2));
      }
    }, 100);

    return () => clearInterval(interval);
  }, [burnerActive, coolerActive]);

  // Generate 36 particles with positions and jitter based on temperature
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; vx: number; vy: number }>>(() => {
    return Array.from({ length: 36 }, (_, i) => ({
      id: i,
      x: 30 + (i % 6) * 45,
      y: 30 + Math.floor(i / 6) * 45,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2
    }));
  });

  // Particle agitation update
  useEffect(() => {
    let animId: number;
    const animate = () => {
      // Speed multiplier based on absolute temperature (Kelvin)
      const kelvin = temperature + 273.15;
      const speedScale = Math.max(0.2, (kelvin / 300) * 1.5);

      setParticles((prev) =>
        prev.map((p) => {
          if (temperature < 0) {
            // Solid lattice vibration around home position
            const homeX = 30 + (p.id % 6) * 45;
            const homeY = 30 + Math.floor(p.id / 6) * 45;
            const jitter = (temperature + 50) / 50; // minimal jitter
            return {
              ...p,
              x: homeX + (Math.random() - 0.5) * jitter * 4,
              y: homeY + (Math.random() - 0.5) * jitter * 4
            };
          } else if (temperature < 100) {
            // Liquid sliding particles
            let nextX = p.x + p.vx * speedScale;
            let nextY = p.y + p.vy * speedScale;
            let nVx = p.vx;
            let nVy = p.vy;
            if (nextX < 15 || nextX > 280) nVx = -nVx;
            if (nextY < 120 || nextY > 280) nVy = -nVy; // sits at bottom of beaker
            return { ...p, x: Math.max(15, Math.min(280, nextX)), y: Math.max(120, Math.min(280, nextY)), vx: nVx, vy: nVy };
          } else {
            // Gas: high-speed collisions filling entire chamber
            let nextX = p.x + p.vx * speedScale * 2;
            let nextY = p.y + p.vy * speedScale * 2;
            let nVx = p.vx;
            let nVy = p.vy;
            if (nextX < 15 || nextX > 280) nVx = -nVx;
            if (nextY < 15 || nextY > 280) nVy = -nVy;
            return { ...p, x: Math.max(15, Math.min(280, nextX)), y: Math.max(15, Math.min(280, nextY)), vx: nVx, vy: nVy };
          }
        })
      );

      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, [temperature]);

  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase tracking-wider font-extrabold text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-100">
              Kinetic Particle Model & Thermal Lab
            </span>
            <span className="text-xs font-mono text-slate-500">Physics 2: Thermal Physics</span>
          </div>
          <h3 className="text-2xl font-black text-slate-900 mt-2">
            {subtopic.experience?.title || 'Molecular Agitation & Phase Change Chamber'}
          </h3>
          <p className="text-sm text-slate-600 mt-1 max-w-2xl">
            Heat or cool matter to observe particle kinetic energy, lattice bonds, Brownian motion, and transitions between solid, liquid, and gas.
          </p>
        </div>

        <div className="flex items-center gap-2 bg-slate-50 text-slate-700 px-4 py-2 rounded-2xl text-xs font-bold border border-slate-200">
          <Thermometer className="w-4 h-4 text-rose-500" />
          <span className="font-mono">{temperature}°C ({temperature + 273} K)</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Particle Chamber Canvas */}
        <div className="lg:col-span-7 bg-slate-950 rounded-2xl p-6 border border-slate-800 flex flex-col justify-between min-h-[380px] relative overflow-hidden">
          {/* Top Telemetry */}
          <div className="flex justify-between items-center text-xs font-mono bg-slate-900/90 text-slate-200 px-4 py-2 rounded-xl border border-slate-800 z-10">
            <span>State: <strong className={`${stateColor} font-bold`}>{stateOfMatter}</strong></span>
            <span>Avg Kinetic Energy: <strong className="text-amber-400 font-bold">{Math.round((temperature + 273.15) * 1.38)} × 10⁻²³ J</strong></span>
          </div>

          {/* Chamber interior with beaker outline and particles */}
          <div className="relative my-auto flex items-center justify-center">
            <div className="relative w-[300px] h-[300px] bg-slate-900/80 rounded-2xl border-2 border-slate-700 overflow-hidden shadow-2xl">
              {/* Beaker liquid tint if liquid state */}
              {temperature >= 0 && temperature < 100 && (
                <div className="absolute bottom-0 left-0 right-0 h-[170px] bg-sky-500/15 border-t border-sky-400/30" />
              )}

              {/* Render dynamic atoms/molecules */}
              {particles.map((p) => (
                <div
                  key={p.id}
                  className="absolute w-4 h-4 rounded-full shadow-md transition-all duration-75 flex items-center justify-center"
                  style={{
                    left: `${p.x}px`,
                    top: `${p.y}px`,
                    backgroundColor:
                      temperature < 0
                        ? '#38bdf8'
                        : temperature < 100
                        ? '#60a5fa'
                        : '#fbbf24'
                  }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-white/70" />
                </div>
              ))}
            </div>
          </div>

          {/* Bottom live thermal status */}
          <div className="bg-slate-900/90 rounded-xl p-3 text-xs text-slate-300 font-mono flex items-center justify-between border border-slate-800 z-10">
            <span>
              {temperature < 0
                ? 'Solid: Particles tightly packed in regular lattice, vibrating in fixed positions.'
                : temperature < 100
                ? 'Liquid: Particles close together but free to slide past one another.'
                : 'Gas: High speed, rapid random motion with large spaces between particles.'}
            </span>
          </div>
        </div>

        {/* Real Thermal Controls */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-5">
            <h4 className="text-sm font-bold text-slate-800 flex items-center gap-2">
              <Flame className="w-4 h-4 text-amber-600" /> Thermal Lab Controls
            </h4>

            {/* Direct Temperature Slider */}
            <div>
              <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1.5">
                <span>Chamber Temperature</span>
                <span className="font-mono font-bold text-rose-600">{temperature}°C</span>
              </div>
              <input
                type="range"
                min="-50"
                max="150"
                value={temperature}
                onChange={(e) => setTemperature(parseInt(e.target.value, 10))}
                className="w-full accent-rose-600 h-2 bg-slate-200 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
                <span>-50°C (Ice)</span>
                <span>0°C (Melt)</span>
                <span>100°C (Boil)</span>
                <span>150°C (Steam)</span>
              </div>
            </div>

            {/* Heat & Cool Source Buttons */}
            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-2">
                Simulated Heat Exchange Apparatus
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onMouseDown={() => setBurnerActive(true)}
                  onMouseUp={() => setBurnerActive(false)}
                  onTouchStart={() => setBurnerActive(true)}
                  onTouchEnd={() => setBurnerActive(false)}
                  className={`py-3 px-4 rounded-xl border font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    burnerActive
                      ? 'bg-amber-500 text-white border-amber-600 shadow-md scale-95'
                      : 'bg-white border-slate-200 text-amber-700 hover:bg-amber-50'
                  }`}
                >
                  <Flame className="w-4 h-4 text-amber-500" />
                  <span>Hold Bunsen Flame</span>
                </button>

                <button
                  onMouseDown={() => setCoolerActive(true)}
                  onMouseUp={() => setCoolerActive(false)}
                  onTouchStart={() => setCoolerActive(true)}
                  onTouchEnd={() => setCoolerActive(false)}
                  className={`py-3 px-4 rounded-xl border font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    coolerActive
                      ? 'bg-sky-500 text-white border-sky-600 shadow-md scale-95'
                      : 'bg-white border-slate-200 text-sky-700 hover:bg-sky-50'
                  }`}
                >
                  <Snowflake className="w-4 h-4 text-sky-500" />
                  <span>Hold Ice Bath</span>
                </button>
              </div>
            </div>

            {/* Scientific Explanation Card */}
            <div className="bg-amber-50/80 p-3.5 rounded-xl border border-amber-200 text-xs text-slate-700 leading-relaxed">
              <strong className="text-amber-900 block mb-1">Kinetic Theory Takeaway:</strong>
              Temperature is a direct measure of average molecular kinetic energy ($E_k \propto T$). Increasing thermal energy breaks intermolecular forces, causing state changes without temperature changing at latent points.
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => setTemperature(25)}
              className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Room Temp (25°C)
            </button>
            <button
              onClick={onComplete}
              className="flex-1 py-3 bg-gradient-to-r from-amber-600 to-rose-600 hover:from-amber-500 hover:to-rose-500 text-white font-bold rounded-xl shadow-md transition-all text-xs flex items-center justify-center gap-2 cursor-pointer"
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

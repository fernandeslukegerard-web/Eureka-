import React, { useState } from 'react';
import { Subtopic } from '../../types';
import { Sun, RotateCcw, ArrowRight, Eye } from 'lucide-react';

interface SimProps {
  subtopic: Subtopic;
  onComplete: () => void;
}

export const OpticsLaserSim: React.FC<SimProps> = ({ subtopic, onComplete }) => {
  const [incidentAngle, setIncidentAngle] = useState<number>(30); // degrees (0 to 80)
  const [medium, setMedium] = useState<'water' | 'glass' | 'diamond'>('glass');

  const refractiveIndices = {
    water: 1.33,
    glass: 1.50,
    diamond: 2.42
  };

  const n = refractiveIndices[medium];
  // Snell's Law: n1 * sin(theta1) = n2 * sin(theta2)
  // Air (n1 = 1) to Medium (n2 = n)
  // sin(r) = sin(i) / n
  const radI = (incidentAngle * Math.PI) / 180;
  const sinR = Math.sin(radI) / n;
  const radR = Math.asin(sinR);
  const refractedAngle = Math.round((radR * 180) / Math.PI * 10) / 10;

  // Critical angle for internal reflection from medium to air: sin(c) = 1/n
  const criticalAngle = Math.round((Math.asin(1 / n) * 180) / Math.PI * 10) / 10;

  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase tracking-wider font-extrabold text-sky-600 bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
              Optics, Refraction & Snell's Law
            </span>
            <span className="text-xs font-mono text-slate-500">Physics 3: Properties of Waves</span>
          </div>
          <h3 className="text-2xl font-black text-slate-900 mt-2">
            {subtopic.experience?.title || 'Precision Laser Ray Bender & Refraction Tank'}
          </h3>
          <p className="text-sm text-slate-600 mt-1 max-w-2xl">
            Aim a precision monochromatic laser into optical media to observe wave speed deceleration, wave bending towards normal, and calculate refractive index n = sin(i) / sin(r).
          </p>
        </div>

        <div className="flex items-center gap-2 bg-sky-50 text-sky-800 px-4 py-2 rounded-2xl text-xs font-bold border border-sky-200">
          <Eye className="w-4 h-4 text-sky-600" />
          <span>Snell's Law: n = {n}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Optical Tank Canvas */}
        <div className="lg:col-span-7 bg-slate-950 rounded-2xl p-6 border border-slate-800 flex flex-col justify-between min-h-[380px] relative overflow-hidden">
          {/* Top Telemetry */}
          <div className="flex justify-between items-center text-xs font-mono bg-slate-900/90 text-slate-200 px-4 py-2.5 rounded-xl border border-slate-800 z-10">
            <span>Incident Angle (i): <strong className="text-emerald-400 font-bold">{incidentAngle}°</strong></span>
            <span>Refracted Angle (r): <strong className="text-sky-400 font-bold">{refractedAngle}°</strong></span>
            <span>Critical Angle: <strong className="text-amber-400 font-bold">{criticalAngle}°</strong></span>
          </div>

          {/* Central Ray Diagram */}
          <div className="my-auto py-6 relative flex items-center justify-center">
            <div className="relative w-80 h-64 border-2 border-slate-700 rounded-2xl overflow-hidden bg-slate-900">
              {/* Upper half = Air (n=1) */}
              <div className="absolute top-0 left-0 right-0 h-32 bg-slate-950/60 border-b-2 border-dashed border-sky-400/80 flex items-center px-3">
                <span className="text-[10px] font-mono text-slate-400">MEDIUM 1: AIR (n = 1.00)</span>
              </div>
              {/* Lower half = Refractive Block */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-sky-500/15 flex items-end px-3 pb-2">
                <span className="text-[10px] font-mono text-sky-300">
                  MEDIUM 2: {medium.toUpperCase()} (n = {n})
                </span>
              </div>

              {/* Vertical Normal Line */}
              <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-slate-600 border-l border-dashed border-slate-400" />

              {/* Laser incident ray entering from top-left to center (160, 128) */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                {/* Incident ray */}
                <line
                  x1={160 - 120 * Math.sin(radI)}
                  y1={128 - 120 * Math.cos(radI)}
                  x2={160}
                  y2={128}
                  stroke="#ef4444"
                  strokeWidth="3"
                />
                {/* Refracted ray continuing into medium */}
                <line
                  x1={160}
                  y1={128}
                  x2={160 + 120 * Math.sin(radR)}
                  y2={128 + 120 * Math.cos(radR)}
                  stroke="#38bdf8"
                  strokeWidth="3"
                />
                {/* Faint reflected ray */}
                <line
                  x1={160}
                  y1={128}
                  x2={160 + 120 * Math.sin(radI)}
                  y2={128 - 120 * Math.cos(radI)}
                  stroke="#ef4444"
                  strokeWidth="1.5"
                  strokeDasharray="3 3"
                  opacity="0.5"
                />
              </svg>
            </div>
          </div>

          {/* Bottom Live Formula Status */}
          <div className="bg-slate-900/90 rounded-xl p-3 text-xs text-slate-300 font-mono flex items-center justify-between border border-slate-800 z-10">
            <span>Calculation: n = sin({incidentAngle}°) / sin({refractedAngle}°) = {(Math.sin(radI) / Math.sin(radR)).toFixed(2)}</span>
            <span className="text-emerald-400 font-bold">Ray Bends Towards Normal</span>
          </div>
        </div>

        {/* Real Optics Controls */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-5">
            <h4 className="text-sm font-bold text-slate-800 flex items-center gap-2">
              <Sun className="w-4 h-4 text-sky-600" /> Optical Calibration Controls
            </h4>

            {/* Incident Angle Slider */}
            <div>
              <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1.5">
                <span>Laser Incident Angle (Angle to Normal)</span>
                <span className="font-mono text-emerald-600 font-bold">{incidentAngle}°</span>
              </div>
              <input
                type="range"
                min="0"
                max="75"
                value={incidentAngle}
                onChange={(e) => setIncidentAngle(parseInt(e.target.value, 10))}
                className="w-full accent-emerald-600 h-2 bg-slate-200 rounded-lg cursor-pointer"
              />
              <span className="text-[11px] text-slate-500 block mt-1">
                At 0° (normal incidence), light travels straight through without deviation.
              </span>
            </div>

            {/* Medium Selector */}
            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-2">
                Optical Material Medium
              </label>
              <div className="grid grid-cols-3 gap-2">
                {(['water', 'glass', 'diamond'] as const).map((m) => (
                  <button
                    key={m}
                    onClick={() => setMedium(m)}
                    className={`py-2 text-xs font-bold rounded-xl border transition-all cursor-pointer ${
                      medium === m
                        ? 'bg-sky-600 text-white border-sky-700 shadow-sm'
                        : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {m.charAt(0).toUpperCase() + m.slice(1)} (n={refractiveIndices[m]})
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-sky-50/80 p-3.5 rounded-xl border border-sky-200 text-xs text-slate-700 leading-relaxed">
              <strong className="text-sky-900 block mb-1">Refraction Rule:</strong>
              When light enters a denser optical medium, it slows down and bends <strong>towards</strong> the normal. Denser media like Diamond ($n=2.42$) bend light significantly more than Water ($n=1.33$).
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => {
                setIncidentAngle(30);
                setMedium('glass');
              }}
              className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Reset Laser
            </button>
            <button
              onClick={onComplete}
              className="flex-1 py-3 bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-500 hover:to-indigo-500 text-white font-bold rounded-xl shadow-md transition-all text-xs flex items-center justify-center gap-2 cursor-pointer"
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

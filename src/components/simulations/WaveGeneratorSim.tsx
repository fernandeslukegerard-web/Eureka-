import React, { useState, useEffect } from 'react';
import { Subtopic } from '../../types';
import { Activity, RotateCcw, ArrowRight, CheckCircle, Sliders } from 'lucide-react';

interface SimProps {
  subtopic: Subtopic;
  onComplete: () => void;
}

export const WaveGeneratorSim: React.FC<SimProps> = ({ subtopic, onComplete }) => {
  const [frequency, setFrequency] = useState<number>(2.0); // Hz (0.5 to 5.0)
  const [amplitude, setAmplitude] = useState<number>(40); // px (10 to 70)
  const [tension, setTension] = useState<'low' | 'medium' | 'high'>('medium');
  const [phase, setPhase] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  const waveSpeeds = {
    low: 120, // px/s
    medium: 200,
    high: 320
  };

  const waveSpeed = waveSpeeds[tension];
  // v = f * lambda => lambda = v / f
  const wavelength = Math.round(waveSpeed / frequency);

  useEffect(() => {
    let animId: number;
    let lastTime = performance.now();

    const animate = (time: number) => {
      const dt = (time - lastTime) / 1000;
      lastTime = time;
      if (isPlaying) {
        setPhase((p) => (p + frequency * 2 * Math.PI * dt) % (2 * Math.PI));
      }
      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, [isPlaying, frequency]);

  // Generate SVG path points along wave of 600px width
  const pointsCount = 100;
  const width = 600;
  const height = 180;
  const centerY = height / 2;

  let pathD = `M 0 ${centerY}`;
  for (let i = 0; i <= pointsCount; i++) {
    const x = (i / pointsCount) * width;
    // y = A * sin(2*pi*x/lambda - phase)
    const y = centerY - amplitude * Math.sin((2 * Math.PI * x) / wavelength - phase);
    pathD += ` L ${x.toFixed(1)} ${y.toFixed(1)}`;
  }

  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase tracking-wider font-extrabold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
              Wave Properties & Oscillations Lab
            </span>
            <span className="text-xs font-mono text-slate-500">Physics: Waves & Sound</span>
          </div>
          <h3 className="text-2xl font-black text-slate-900 mt-2">
            {subtopic.experience?.title || 'Interactive Wave Generator & Stroboscope'}
          </h3>
          <p className="text-sm text-slate-600 mt-1 max-w-2xl">
            Control the oscillator frequency, wave amplitude, and string tension to explore the wave equation $v = f \lambda$.
          </p>
        </div>

        <div className="flex items-center gap-2 bg-indigo-50 text-indigo-700 px-4 py-2 rounded-2xl text-xs font-bold border border-indigo-200">
          <Activity className="w-4 h-4 text-indigo-600" />
          <span>v = f × λ Live Engine</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Wave Visual Canvas */}
        <div className="lg:col-span-7 bg-slate-950 rounded-2xl p-6 border border-slate-800 flex flex-col justify-between min-h-[360px] relative overflow-hidden">
          {/* Top Measurement HUD */}
          <div className="flex justify-between items-center text-xs font-mono bg-slate-900/90 text-slate-200 px-4 py-2.5 rounded-xl border border-slate-700 z-10">
            <div className="flex gap-4">
              <span>Freq (f): <strong className="text-indigo-400 font-bold">{frequency.toFixed(1)} Hz</strong></span>
              <span>Wavelength (λ): <strong className="text-emerald-400 font-bold">{wavelength} px</strong></span>
              <span>Speed (v): <strong className="text-amber-400 font-bold">{waveSpeed} px/s</strong></span>
            </div>
            <span className="text-sky-300 font-bold">Amp (A): {amplitude} px</span>
          </div>

          {/* Central Wave Canvas */}
          <div className="my-auto py-6 relative flex items-center justify-center">
            <svg
              viewBox={`0 0 ${width} ${height}`}
              className="w-full h-44 overflow-visible"
            >
              {/* Center baseline reference line */}
              <line
                x1="0"
                y1={centerY}
                x2={width}
                y2={centerY}
                stroke="#334155"
                strokeDasharray="4 4"
                strokeWidth="1.5"
              />

              {/* Dynamic traveling wave */}
              <path
                d={pathD}
                fill="none"
                stroke="#6366f1"
                strokeWidth="4"
                strokeLinecap="round"
              />

              {/* Wave crest marker beads */}
              {[1, 2, 3].map((n) => {
                const markerX = ((n * wavelength - (phase * wavelength) / (2 * Math.PI)) % width + width) % width;
                return (
                  <circle
                    key={n}
                    cx={markerX}
                    cy={centerY - amplitude}
                    r="5"
                    fill="#38bdf8"
                    className="animate-pulse"
                  />
                );
              })}
            </svg>

            {/* Left mechanical oscillator actuator */}
            <div
              className="absolute left-0 w-4 h-12 bg-amber-500 rounded-r shadow-md transition-transform duration-75"
              style={{
                transform: `translateY(${(-amplitude * Math.sin(-phase)).toFixed(1)}px)`
              }}
            />
          </div>

          {/* Bottom Wavelength Measurement Ruler */}
          <div className="bg-slate-900/80 rounded-xl p-3 text-xs text-slate-300 font-mono flex items-center justify-between border border-slate-800 z-10">
            <span>Formula: $v = f \times \lambda \implies {waveSpeed} = {frequency} \times {wavelength}$</span>
            <span className="text-emerald-400 font-bold">Continuous Waveform</span>
          </div>
        </div>

        {/* Real Topic-Specific Wave Controls */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-5">
            <h4 className="text-sm font-bold text-slate-800 flex items-center gap-2">
              <Sliders className="w-4 h-4 text-indigo-600" /> Wave Apparatus Controls
            </h4>

            {/* Frequency Slider */}
            <div>
              <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1.5">
                <span>Oscillator Frequency (f)</span>
                <span className="font-mono text-indigo-600 font-bold">{frequency.toFixed(1)} Hz</span>
              </div>
              <input
                type="range"
                min="0.5"
                max="4.5"
                step="0.1"
                value={frequency}
                onChange={(e) => setFrequency(parseFloat(e.target.value))}
                className="w-full accent-indigo-600 h-2 bg-slate-200 rounded-lg cursor-pointer"
              />
              <span className="text-[11px] text-slate-500 block mt-1">
                Number of complete cycles per second. Higher frequency packs waves closer together (shorter wavelength).
              </span>
            </div>

            {/* Amplitude Slider */}
            <div>
              <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1.5">
                <span>Wave Amplitude (A)</span>
                <span className="font-mono text-sky-600 font-bold">{amplitude} px</span>
              </div>
              <input
                type="range"
                min="10"
                max="65"
                step="5"
                value={amplitude}
                onChange={(e) => setAmplitude(parseInt(e.target.value, 10))}
                className="w-full accent-sky-600 h-2 bg-slate-200 rounded-lg cursor-pointer"
              />
              <span className="text-[11px] text-slate-500 block mt-1">
                Maximum displacement of particles from their rest position. Represents wave energy.
              </span>
            </div>

            {/* Medium Tension Selector */}
            <div>
              <div className="flex justify-between text-xs font-semibold text-slate-700 mb-2">
                <span>Medium Tension (Affects Wave Speed $v$)</span>
                <span className="font-mono font-bold text-amber-600 uppercase text-xs">{tension}</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {(['low', 'medium', 'high'] as const).map((t) => (
                  <button
                    key={t}
                    onClick={() => setTension(t)}
                    className={`py-2 text-xs font-bold rounded-xl border transition-all cursor-pointer ${
                      tension === t
                        ? 'bg-amber-500 border-amber-600 text-white shadow-sm'
                        : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    {t.charAt(0).toUpperCase() + t.slice(1)} ({waveSpeeds[t]} px/s)
                  </button>
                ))}
              </div>
            </div>

            {/* Scientific Discovery Note */}
            <div className="bg-indigo-50/80 p-3.5 rounded-xl border border-indigo-100 text-xs text-slate-700 leading-relaxed">
              <strong className="text-indigo-900 block mb-1">Key Scientific Discovery:</strong>
              When you double frequency while tension remains constant, wavelength halves! Wave speed is determined solely by the properties of the medium.
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => {
                setFrequency(2.0);
                setAmplitude(40);
                setTension('medium');
              }}
              className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Reset Wave
            </button>
            <button
              onClick={onComplete}
              className="flex-1 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold rounded-xl shadow-md transition-all text-xs flex items-center justify-center gap-2 cursor-pointer"
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

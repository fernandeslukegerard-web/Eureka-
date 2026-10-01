import React, { useState, useEffect, useRef } from 'react';
import {
  Flame,
  Snowflake,
  Sliders,
  RotateCcw,
  Sparkles,
  Activity,
  Layers,
  Award,
  ArrowLeft,
  ShieldCheck,
  Check
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
}

export const ParticleFactoryGame: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [temperature, setTemperature] = useState<number>(300); // Kelvin
  const [volumePercent, setVolumePercent] = useState<number>(80); // Chamber width percentage
  const [particleCount, setParticleCount] = useState<number>(40);
  const [matterState, setMatterState] = useState<'solid' | 'liquid' | 'gas'>('gas');
  const [contractCompleted, setContractCompleted] = useState<boolean>(false);
  const [contractGoal, setContractGoal] = useState<string>(
    'Compress chamber to <60% volume and heat to >450K to achieve High Kinetic Reaction State'
  );

  const particlesRef = useRef<Particle[]>([]);

  // Calculate dynamic pressure: P = N * k * T / V
  const pressure = Math.round((particleCount * 0.08 * (temperature / 100)) / (volumePercent / 100) * 10) / 10;

  // Initialize particles
  useEffect(() => {
    const list: Particle[] = [];
    const colors = ['#60a5fa', '#38bdf8', '#818cf8', '#c084fc'];
    for (let i = 0; i < particleCount; i++) {
      list.push({
        x: 30 + Math.random() * 250,
        y: 30 + Math.random() * 200,
        vx: (Math.random() - 0.5) * 3,
        vy: (Math.random() - 0.5) * 3,
        radius: 6,
        color: colors[i % colors.length]
      });
    }
    particlesRef.current = list;
  }, [particleCount]);

  // Check goal contract
  useEffect(() => {
    if (volumePercent <= 60 && temperature >= 450 && !contractCompleted) {
      setContractCompleted(true);
      try {
        confetti({ particleCount: 60, spread: 55, origin: { y: 0.6 } });
      } catch {}
    }
  }, [volumePercent, temperature, contractCompleted]);

  // Canvas Animation Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;

    const render = () => {
      const width = canvas.width;
      const height = canvas.height;
      const chamberWidth = (width * volumePercent) / 100;

      ctx.clearRect(0, 0, width, height);

      // Draw Chamber Walls
      ctx.fillStyle = '#0f172a';
      ctx.fillRect(0, 0, chamberWidth, height);

      // Chamber boundary line (movable piston)
      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(chamberWidth, 0);
      ctx.lineTo(chamberWidth, height);
      ctx.stroke();

      // Piston Handle
      ctx.fillStyle = '#0284c7';
      ctx.fillRect(chamberWidth - 8, height / 2 - 25, 16, 50);

      // Speed factor derived from thermal kinetic energy: v_rms ~ sqrt(T)
      const speedFactor = Math.sqrt(temperature / 300) * (matterState === 'solid' ? 0.2 : matterState === 'liquid' ? 0.7 : 1.3);

      const particles = particlesRef.current;
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (matterState === 'solid') {
          // Solid: vibrating in crystal lattice
          const row = Math.floor(i / 8);
          const col = i % 8;
          const latticeX = 40 + col * 32;
          const latticeY = 40 + row * 32;
          p.x = latticeX + Math.sin(Date.now() * 0.01 + i) * speedFactor * 2;
          p.y = latticeY + Math.cos(Date.now() * 0.01 + i) * speedFactor * 2;
        } else {
          // Liquid or Gas: Newtonian collisions with chamber bounds
          p.x += p.vx * speedFactor;
          p.y += p.vy * speedFactor;

          if (p.x - p.radius < 0) {
            p.x = p.radius;
            p.vx *= -1;
          } else if (p.x + p.radius > chamberWidth) {
            p.x = chamberWidth - p.radius;
            p.vx *= -1;
          }

          if (p.y - p.radius < 0) {
            p.y = p.radius;
            p.vy *= -1;
          } else if (p.y + p.radius > height) {
            p.y = height - p.radius;
            p.vy *= -1;
          }
        }

        // Draw particle with thermal glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = temperature > 500 ? '#f43f5e' : temperature < 200 ? '#38bdf8' : p.color;
        ctx.shadowBlur = temperature > 400 ? 10 : 2;
        ctx.shadowColor = ctx.fillStyle;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animId);
  }, [temperature, volumePercent, matterState]);

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
              <span className="text-xl">🧪</span>
              <h2 className="text-xl font-black text-white">Particle Factory</h2>
              <span className="text-[10px] font-mono uppercase font-bold px-2 py-0.5 rounded-full bg-blue-950 text-blue-300 border border-blue-800">
                Chemistry
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              Kinetic Molecular Theory Simulator — Manipulate Temperature, Pressure, Volume, and Phase States.
            </p>
          </div>
        </div>

        {/* Live Gauges */}
        <div className="flex items-center gap-3">
          <div className="px-3.5 py-1.5 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs">
            <span className="text-slate-500 block text-[9px] uppercase">Chamber Pressure</span>
            <span className="text-amber-400 font-bold text-sm">{pressure} atm</span>
          </div>
          <div className="px-3.5 py-1.5 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs">
            <span className="text-slate-500 block text-[9px] uppercase">Mean Kinetic Energy</span>
            <span className="text-cyan-400 font-bold text-sm">{(0.5 * (temperature / 100)).toFixed(2)} eV</span>
          </div>
        </div>
      </div>

      {/* Contract / Mission Objective */}
      <div className="p-4 rounded-2xl bg-indigo-950/40 border border-indigo-800/60 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-indigo-600/30 text-indigo-400 flex items-center justify-center shrink-0">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <span className="text-[10px] font-mono uppercase font-bold text-indigo-300 block">
              Factory Contract Target
            </span>
            <span className="text-xs font-semibold text-slate-200">{contractGoal}</span>
          </div>
        </div>
        {contractCompleted ? (
          <span className="flex items-center gap-1.5 text-xs font-bold text-emerald-400 bg-emerald-950 border border-emerald-800 px-3 py-1 rounded-full shrink-0">
            <Check className="w-4 h-4" />
            Contract Fulfilled!
          </span>
        ) : (
          <span className="text-[11px] font-mono text-amber-400 bg-amber-950/60 border border-amber-800/80 px-2.5 py-0.5 rounded-full shrink-0">
            In Progress
          </span>
        )}
      </div>

      {/* Main Simulation Viewport */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Canvas Chamber */}
        <div className="lg:col-span-8 flex flex-col items-center justify-center bg-slate-950 border border-slate-800 rounded-3xl p-4 overflow-hidden relative">
          <canvas
            ref={canvasRef}
            width={640}
            height={360}
            className="w-full h-auto rounded-2xl max-w-full aspect-[16/9]"
          />

          <div className="w-full flex justify-between text-[11px] font-mono text-slate-500 mt-3 px-2">
            <span>Chamber Volume: {volumePercent}%</span>
            <span>Collision Frequency: {Math.round(pressure * 12)} / sec</span>
          </div>
        </div>

        {/* Factory Control Desk */}
        <div className="lg:col-span-4 space-y-4 bg-slate-950 border border-slate-800 rounded-3xl p-5">
          <h3 className="text-xs font-mono uppercase font-extrabold tracking-wider text-slate-400 flex items-center gap-2">
            <Sliders className="w-4 h-4 text-blue-400" />
            <span>Process Controls</span>
          </h3>

          {/* State of Matter Buttons */}
          <div>
            <label className="text-[11px] font-mono text-slate-400 uppercase font-bold block mb-1.5">
              Phase State
            </label>
            <div className="grid grid-cols-3 gap-1.5">
              {(['solid', 'liquid', 'gas'] as const).map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setMatterState(s)}
                  className={`py-2 rounded-xl text-xs font-bold capitalize transition-all cursor-pointer ${
                    matterState === s
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Temperature Slider */}
          <div>
            <div className="flex justify-between items-center text-xs font-mono mb-1">
              <span className="text-slate-400 flex items-center gap-1">
                <Flame className="w-3.5 h-3.5 text-rose-500" />
                Temperature
              </span>
              <span className={`font-bold ${temperature > 450 ? 'text-rose-400' : 'text-cyan-400'}`}>
                {temperature} K ({temperature - 273} °C)
              </span>
            </div>
            <input
              type="range"
              min="80"
              max="750"
              step="10"
              value={temperature}
              onChange={(e) => setTemperature(parseInt(e.target.value, 10))}
              className="w-full accent-blue-500 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] font-mono text-slate-600 mt-0.5">
              <span>Cryo (80K)</span>
              <span>Room (300K)</span>
              <span>Plasma (750K)</span>
            </div>
          </div>

          {/* Volume Piston Slider */}
          <div>
            <div className="flex justify-between items-center text-xs font-mono mb-1">
              <span className="text-slate-400">Piston Compression</span>
              <span className="font-bold text-white">{volumePercent}%</span>
            </div>
            <input
              type="range"
              min="30"
              max="100"
              step="5"
              value={volumePercent}
              onChange={(e) => setVolumePercent(parseInt(e.target.value, 10))}
              className="w-full accent-cyan-500 cursor-pointer"
            />
          </div>

          {/* Particle Count Slider */}
          <div>
            <div className="flex justify-between items-center text-xs font-mono mb-1">
              <span className="text-slate-400">Molar Quantity (N)</span>
              <span className="font-bold text-white">{particleCount} Particles</span>
            </div>
            <input
              type="range"
              min="15"
              max="80"
              step="5"
              value={particleCount}
              onChange={(e) => setParticleCount(parseInt(e.target.value, 10))}
              className="w-full accent-indigo-500 cursor-pointer"
            />
          </div>

          {/* Key Principle Card */}
          <div className="p-3 bg-slate-900/80 border border-slate-800 rounded-xl text-[11px] text-slate-400 leading-relaxed font-sans">
            <span className="font-bold text-white block mb-0.5">Ideal Gas Law: P·V = N·k·T</span>
            Decreasing chamber volume increases collision frequency with container walls, causing pressure to rise. Heating injects kinetic energy, causing faster particle movement.
          </div>
        </div>
      </div>
    </div>
  );
};

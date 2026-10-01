import React, { useState, useEffect } from 'react';
import { Subtopic } from '../../types';
import { Play, RotateCcw, CheckCircle, Gauge, Flame, ArrowRight } from 'lucide-react';

interface SimProps {
  subtopic: Subtopic;
  onComplete: () => void;
}

export const MotionTrackSim: React.FC<SimProps> = ({ subtopic, onComplete }) => {
  const [position, setPosition] = useState(0); // 0 to 100 meters
  const [velocity, setVelocity] = useState(0); // m/s
  const [acceleration, setAcceleration] = useState(4); // m/s²
  const [time, setTime] = useState(0);
  const [racing, setRacing] = useState(false);
  const [completedRun, setCompletedRun] = useState(false);
  const [trackRecord, setTrackRecord] = useState<number | null>(null);

  useEffect(() => {
    let animId: number;
    let lastTime = performance.now();

    const step = (currentTime: number) => {
      const dt = (currentTime - lastTime) / 1000;
      lastTime = currentTime;

      if (racing) {
        setTime((t) => {
          const nextT = t + dt;
          setVelocity((v) => {
            const nextV = v + acceleration * dt;
            setPosition((p) => {
              const nextP = p + nextV * dt;
              if (nextP >= 100) {
                setRacing(false);
                setCompletedRun(true);
                setTrackRecord(Math.round(nextT * 100) / 100);
                return 100;
              }
              return nextP;
            });
            return nextV;
          });
          return nextT;
        });
      }

      if (racing) {
        animId = requestAnimationFrame(step);
      }
    };

    if (racing) {
      animId = requestAnimationFrame(step);
    }
    return () => cancelAnimationFrame(animId);
  }, [racing, acceleration]);

  const handleStart = () => {
    if (position >= 100) {
      handleReset();
    }
    setRacing(true);
  };

  const handleReset = () => {
    setRacing(false);
    setPosition(0);
    setVelocity(0);
    setTime(0);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-slate-100 shadow-xl">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800">
        <div>
          <span className="text-xs uppercase tracking-wider font-semibold text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-md">
            Speed & Acceleration Lab
          </span>
          <h3 className="text-xl font-bold mt-1 text-white">{subtopic.experience.title}</h3>
          <p className="text-sm text-slate-400 mt-0.5">{subtopic.experience.scenarioDescription}</p>
        </div>
        {completedRun && (
          <div className="flex items-center gap-2 bg-emerald-500/20 text-emerald-400 px-3.5 py-1.5 rounded-full text-sm font-semibold border border-emerald-500/30">
            <CheckCircle className="w-4 h-4" /> 100m Finish Line Reached!
          </div>
        )}
      </div>

      {/* Racetrack Visual Canvas */}
      <div className="relative bg-slate-950 rounded-xl p-4 border border-slate-800 overflow-hidden mb-6">
        <div className="flex justify-between text-xs font-mono text-slate-500 mb-2">
          <span>0m (Start Grid)</span>
          <span>25m</span>
          <span>50m (Halfway Split)</span>
          <span>75m</span>
          <span className="text-amber-400 font-bold">100m (Chequered Flag)</span>
        </div>

        {/* Track asphalt */}
        <div className="h-20 bg-slate-800 rounded-lg relative overflow-hidden flex items-center border border-slate-700">
          {/* Dashed lane marking */}
          <div className="absolute w-full border-t border-dashed border-slate-600 top-1/2" />
          
          {/* Finish Line Tape */}
          <div className="absolute right-4 top-0 bottom-0 w-3 bg-[repeating-linear-gradient(45deg,#000,#000_6px,#fff_6px,#fff_12px)] opacity-80" />

          {/* Race Car */}
          <div
            className="absolute transition-all duration-75 flex flex-col items-center"
            style={{ left: `calc(${Math.min(position, 92)}% + 4px)` }}
          >
            <div className="text-2xl transform scale-x-[-1] filter drop-shadow-[0_4px_8px_rgba(245,158,11,0.5)]">
              🏎️
            </div>
            {racing && (
              <div className="text-[10px] text-amber-400 font-mono -mt-1 flex items-center gap-0.5">
                <Flame className="w-3 h-3 text-orange-500 animate-bounce" /> {velocity.toFixed(1)} m/s
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Telemetry and Controls */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-700/60 flex items-center gap-3">
          <div className="p-3 bg-blue-500/10 text-blue-400 rounded-lg">
            <Gauge className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xs text-slate-400">Current Velocity (v)</div>
            <div className="text-2xl font-mono font-bold text-blue-400">
              {velocity.toFixed(1)} <span className="text-sm font-normal text-slate-400">m/s</span>
            </div>
            <div className="text-[10px] text-slate-500 font-mono">
              {(velocity * 3.6).toFixed(1)} km/h
            </div>
          </div>
        </div>

        <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-700/60 flex items-center gap-3">
          <div className="p-3 bg-amber-500/10 text-amber-400 rounded-lg">
            <Flame className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xs text-slate-400">Elapsed Time (t)</div>
            <div className="text-2xl font-mono font-bold text-amber-400">
              {time.toFixed(2)} <span className="text-sm font-normal text-slate-400">s</span>
            </div>
            <div className="text-[10px] text-slate-500 font-mono">
              Distance: {position.toFixed(1)}m / 100m
            </div>
          </div>
        </div>

        <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-700/60">
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs text-slate-400">Acceleration pedal (a)</span>
            <span className="text-xs font-mono font-bold text-emerald-400">{acceleration} m/s²</span>
          </div>
          <input
            type="range"
            min="2"
            max="10"
            step="1"
            value={acceleration}
            disabled={racing}
            onChange={(e) => setAcceleration(parseInt(e.target.value, 10))}
            className="w-full accent-emerald-500 h-2 bg-slate-700 rounded-lg cursor-pointer disabled:opacity-50"
          />
          <div className="text-[10px] text-slate-500 mt-2">
            Formula: v = u + at &nbsp;|&nbsp; s = ut + ½at²
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800">
        <div className="flex gap-3">
          <button
            onClick={handleStart}
            disabled={racing}
            className="px-6 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl shadow-lg transition-all flex items-center gap-2 disabled:opacity-50 cursor-pointer"
          >
            <Play className="w-4 h-4 fill-slate-950" />
            {position >= 100 ? 'Rerun 100m Dash' : racing ? 'Accelerating...' : 'Launch Car'}
          </button>
          <button
            onClick={handleReset}
            className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl transition-all flex items-center gap-2"
          >
            <RotateCcw className="w-4 h-4" /> Reset
          </button>
        </div>

        {completedRun && (
          <button
            onClick={onComplete}
            className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl shadow-lg transition-all flex items-center gap-2 cursor-pointer"
          >
            <span>Proceed to Analysis</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
};

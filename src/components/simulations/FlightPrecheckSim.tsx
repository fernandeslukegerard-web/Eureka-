import React, { useState, useEffect } from 'react';
import { Subtopic } from '../../types';
import { Play, RotateCcw, CheckCircle, Award, Volume2, ArrowRight } from 'lucide-react';

interface SimProps {
  subtopic: Subtopic;
  onComplete: () => void;
}

export const FlightPrecheckSim: React.FC<SimProps> = ({ subtopic, onComplete }) => {
  const [micrometerReading, setMicrometerReading] = useState(12.0);
  const [stopwatchTime, setStopwatchTime] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);
  const [tolerancePassed, setTolerancePassed] = useState(false);
  const [timingPassed, setTimingPassed] = useState(false);

  useEffect(() => {
    let interval: any;
    if (timerRunning) {
      interval = setInterval(() => {
        setStopwatchTime((t) => Math.round((t + 0.05) * 100) / 100);
      }, 50);
    }
    return () => clearInterval(interval);
  }, [timerRunning]);

  const targetMicrometer = 14.5;
  const isToleranceValid = Math.abs(micrometerReading - targetMicrometer) <= 0.2;

  const handleCheckMeasurements = () => {
    if (isToleranceValid) {
      setTolerancePassed(true);
    }
    if (stopwatchTime >= 4.5 && stopwatchTime <= 6.5) {
      setTimingPassed(true);
    }
  };

  const isCompleted = tolerancePassed && timingPassed;

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-slate-100 shadow-xl">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800">
        <div>
          <span className="text-xs uppercase tracking-wider font-semibold text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-md">
            Interactive Experience
          </span>
          <h3 className="text-xl font-bold mt-1 text-white">{subtopic.experience.title}</h3>
          <p className="text-sm text-slate-400 mt-0.5">{subtopic.experience.scenarioDescription}</p>
        </div>
        {isCompleted && (
          <div className="flex items-center gap-2 bg-emerald-500/20 text-emerald-400 px-3.5 py-1.5 rounded-full text-sm font-semibold border border-emerald-500/30 animate-pulse">
            <CheckCircle className="w-4 h-4" /> Flight Cleared!
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Vernier Caliper / Micrometer Station */}
        <div className="bg-slate-800/60 rounded-xl p-5 border border-slate-700/60">
          <div className="flex justify-between items-center mb-3">
            <span className="text-sm font-semibold text-slate-300">Turbine Blade Thickness (Target: 14.50 mm)</span>
            <span className="text-xs font-mono bg-blue-900/60 text-blue-300 px-2 py-0.5 rounded">
              ±0.2mm tolerance
            </span>
          </div>

          <div className="relative h-24 bg-slate-950 rounded-lg flex items-center justify-center p-4 border border-slate-700">
            {/* Simulated Caliper Scale */}
            <div className="w-full flex flex-col items-center">
              <div className="w-full h-6 bg-slate-800 rounded relative overflow-hidden flex items-center">
                <div
                  className="h-full bg-gradient-to-r from-blue-600 to-indigo-500 rounded transition-all duration-150"
                  style={{ width: `${(micrometerReading / 20) * 100}%` }}
                />
                <div
                  className="absolute top-0 bottom-0 w-0.5 bg-amber-400"
                  style={{ left: `${(14.5 / 20) * 100}%` }}
                  title="Target Tolerance Zone"
                />
              </div>
              <div className="flex justify-between w-full text-[10px] text-slate-500 mt-1 font-mono">
                <span>0 mm</span>
                <span>5 mm</span>
                <span>10 mm</span>
                <span>15 mm</span>
                <span>20 mm</span>
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-center gap-4">
            <input
              type="range"
              min="10.0"
              max="18.0"
              step="0.1"
              value={micrometerReading}
              onChange={(e) => {
                setMicrometerReading(parseFloat(e.target.value));
                if (Math.abs(parseFloat(e.target.value) - targetMicrometer) <= 0.2) {
                  setTolerancePassed(true);
                }
              }}
              className="w-full accent-blue-500 h-2 bg-slate-700 rounded-lg cursor-pointer"
            />
            <span className="font-mono text-lg font-bold text-blue-400 w-24 text-right">
              {micrometerReading.toFixed(2)} mm
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-2">
            Status: {tolerancePassed ? <span className="text-emerald-400 font-semibold">✓ Blade spec verified</span> : <span className="text-amber-400">Calibrate to ~14.50 mm</span>}
          </p>
        </div>

        {/* Runway Fuel Flow Timing Station */}
        <div className="bg-slate-800/60 rounded-xl p-5 border border-slate-700/60">
          <div className="flex justify-between items-center mb-3">
            <span className="text-sm font-semibold text-slate-300">Fuel Injection Pulse Duration</span>
            <span className="text-xs font-mono bg-indigo-900/60 text-indigo-300 px-2 py-0.5 rounded">
              Target: 5.0 - 6.0 s
            </span>
          </div>

          <div className="h-24 bg-slate-950 rounded-lg flex flex-col items-center justify-center p-3 border border-slate-700">
            <span className="text-3xl font-mono font-bold text-amber-400 tracking-wider">
              {stopwatchTime.toFixed(2)} s
            </span>
            <span className="text-[11px] text-slate-400 mt-1">Digital Chronometer</span>
          </div>

          <div className="mt-4 flex gap-3">
            <button
              onClick={() => setTimerRunning(!timerRunning)}
              className={`flex-1 py-2 rounded-lg font-semibold text-sm transition-all flex items-center justify-center gap-2 ${
                timerRunning
                  ? 'bg-rose-600 hover:bg-rose-500 text-white'
                  : 'bg-blue-600 hover:bg-blue-500 text-white'
              }`}
            >
              <Play className="w-4 h-4" />
              {timerRunning ? 'Stop Fuel Flow' : 'Start Fuel Pulse'}
            </button>
            <button
              onClick={() => {
                setTimerRunning(false);
                setStopwatchTime(0);
                setTimingPassed(false);
              }}
              className="px-3 py-2 bg-slate-700 hover:bg-slate-600 text-slate-300 rounded-lg text-sm"
              title="Reset"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
          <p className="text-xs text-slate-400 mt-2">
            Status: {stopwatchTime >= 5.0 && stopwatchTime <= 6.0 ? (
              <span className="text-emerald-400 font-semibold">✓ Exact burn time achieved!</span>
            ) : (
              <span className="text-slate-400">Press start, let run to ~5.5s, then stop.</span>
            )}
          </p>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800">
        <button
          onClick={() => {
            if (isToleranceValid && stopwatchTime >= 4.5 && stopwatchTime <= 6.5) {
              setTolerancePassed(true);
              setTimingPassed(true);
              onComplete();
            } else if (isToleranceValid) {
              setTolerancePassed(true);
              // Allow progress if they achieved caliper
              setTimingPassed(true);
              onComplete();
            }
          }}
          className="w-full sm:w-auto px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
        >
          <span>Complete Flight Inspection</span>
          <ArrowRight className="w-4 h-4" />
        </button>
        <span className="text-xs text-slate-400">
          Direct physical measurement: accurate instruments eliminate zero errors.
        </span>
      </div>
    </div>
  );
};

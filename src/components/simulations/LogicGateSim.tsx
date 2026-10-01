import React, { useState } from 'react';
import { Subtopic } from '../../types';
import { Cpu, RotateCcw, ArrowRight, ToggleLeft, ToggleRight, CheckCircle2, XCircle } from 'lucide-react';

interface SimProps {
  subtopic: Subtopic;
  onComplete: () => void;
}

export const LogicGateSim: React.FC<SimProps> = ({ subtopic, onComplete }) => {
  const [trackClear, setTrackClear] = useState<boolean>(true); // Input A
  const [signalGreen, setSignalGreen] = useState<boolean>(false); // Input B
  const [emergencyOverride, setEmergencyOverride] = useState<boolean>(false); // Input C

  // Boolean Logic: Subway proceeds if Track Clear AND (Signal Green OR Emergency Override)
  const orGateOutput = signalGreen || emergencyOverride;
  const trainCanProceed = trackClear && orGateOutput;

  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase tracking-wider font-extrabold text-cyan-600 bg-cyan-50 px-3 py-1 rounded-full border border-cyan-100">
              Digital Logic Gates & Boolean Algebra
            </span>
            <span className="text-xs font-mono text-slate-500">Computer Science: Logic Circuits</span>
          </div>
          <h3 className="text-2xl font-black text-slate-900 mt-2">
            {subtopic.experience?.title || 'Subway Automated Safety Interlock Logic Gate Puzzle'}
          </h3>
          <p className="text-sm text-slate-600 mt-1 max-w-2xl">
            A high-speed transit train may proceed only if: Clear AND (Green OR Override). Toggle binary switches to observe logic evaluation.
          </p>
        </div>

        <div className="flex items-center gap-2 bg-cyan-50 text-cyan-800 px-4 py-2 rounded-2xl text-xs font-bold border border-cyan-200">
          <Cpu className="w-4 h-4 text-cyan-600" />
          <span>Output: {trainCanProceed ? 'HIGH (1)' : 'LOW (0)'}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Circuit Diagram Viewport */}
        <div className="lg:col-span-7 bg-slate-950 rounded-2xl p-6 border border-slate-800 flex flex-col justify-between min-h-[380px] relative overflow-hidden">
          {/* Top Telemetry */}
          <div className="flex justify-between items-center text-xs font-mono bg-slate-900/90 text-slate-200 px-4 py-2.5 rounded-xl border border-slate-800 z-10">
            <span>Inputs: A={trackClear ? 1 : 0}, B={signalGreen ? 1 : 0}, C={emergencyOverride ? 1 : 0}</span>
            <span>Train Signal: <strong className={trainCanProceed ? 'text-emerald-400 font-bold' : 'text-rose-400 font-bold'}>
              {trainCanProceed ? 'PROCEED (GREEN)' : 'HOLD (RED)'}
            </strong></span>
          </div>

          {/* Central Logic Diagram */}
          <div className="my-auto py-6 relative flex flex-col items-center justify-center">
            <div className="w-full max-w-md bg-slate-900/80 p-5 rounded-2xl border border-slate-800 flex items-center justify-between gap-3">
              {/* Inputs Column */}
              <div className="flex flex-col gap-4 text-xs font-mono">
                <div className={`p-2 rounded-lg border ${trackClear ? 'bg-emerald-950/60 border-emerald-500 text-emerald-300' : 'bg-slate-800 border-slate-700 text-slate-500'}`}>
                  A: Clear = {trackClear ? '1' : '0'}
                </div>
                <div className={`p-2 rounded-lg border ${signalGreen ? 'bg-emerald-950/60 border-emerald-500 text-emerald-300' : 'bg-slate-800 border-slate-700 text-slate-500'}`}>
                  B: Green = {signalGreen ? '1' : '0'}
                </div>
                <div className={`p-2 rounded-lg border ${emergencyOverride ? 'bg-amber-950/60 border-amber-500 text-amber-300' : 'bg-slate-800 border-slate-700 text-slate-500'}`}>
                  C: Override = {emergencyOverride ? '1' : '0'}
                </div>
              </div>

              {/* Connecting logic wires & gates */}
              <div className="flex flex-col items-center gap-4">
                {/* OR Gate */}
                <div className={`px-4 py-2 rounded-xl border-2 font-mono text-xs font-bold ${orGateOutput ? 'bg-cyan-950 border-cyan-400 text-cyan-200 shadow-md' : 'bg-slate-800 border-slate-700 text-slate-500'}`}>
                  OR GATE (B ∨ C) = {orGateOutput ? '1' : '0'}
                </div>
                {/* AND Gate */}
                <div className={`px-4 py-2 rounded-xl border-2 font-mono text-xs font-bold ${trainCanProceed ? 'bg-emerald-950 border-emerald-400 text-emerald-200 shadow-md' : 'bg-slate-800 border-slate-700 text-slate-500'}`}>
                  AND GATE (A ∧ (B ∨ C)) = {trainCanProceed ? '1' : '0'}
                </div>
              </div>

              {/* Output Light Bulb / Train Signal */}
              <div className="flex flex-col items-center">
                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center border-4 shadow-xl transition-all ${
                    trainCanProceed
                      ? 'bg-emerald-500 border-emerald-300 shadow-[0_0_30px_rgba(16,185,129,0.7)] text-slate-950'
                      : 'bg-rose-600 border-rose-400 shadow-[0_0_20px_rgba(239,68,68,0.5)] text-white'
                  }`}
                >
                  <span className="text-xl">{trainCanProceed ? '🟢' : '🔴'}</span>
                </div>
                <span className="text-[10px] font-mono text-slate-300 mt-1 font-bold">
                  {trainCanProceed ? 'GO' : 'STOP'}
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Live Formula Status */}
          <div className="bg-slate-900/90 rounded-xl p-3 text-xs text-slate-300 font-mono flex items-center justify-between border border-slate-800 z-10">
            <span>Boolean Expression: $Q = A \cdot (B + C)$</span>
            <span className="text-cyan-400 font-bold">Truth Table Verified</span>
          </div>
        </div>

        {/* Real Logic Switch Controls */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-5">
            <h4 className="text-sm font-bold text-slate-800 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-cyan-600" /> Binary Input Switches
            </h4>

            {/* Switch A */}
            <div
              onClick={() => setTrackClear(!trackClear)}
              className="p-3 bg-white border border-slate-200 rounded-xl flex items-center justify-between cursor-pointer hover:border-cyan-400 transition-colors"
            >
              <div>
                <span className="text-xs font-bold text-slate-800 block">Input A: Track Sensor Clear</span>
                <span className="text-[11px] text-slate-500">Detects no physical obstruction ahead</span>
              </div>
              <span className={`font-mono text-xs font-bold px-3 py-1 rounded-lg ${trackClear ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-600'}`}>
                {trackClear ? 'HIGH (1)' : 'LOW (0)'}
              </span>
            </div>

            {/* Switch B */}
            <div
              onClick={() => setSignalGreen(!signalGreen)}
              className="p-3 bg-white border border-slate-200 rounded-xl flex items-center justify-between cursor-pointer hover:border-cyan-400 transition-colors"
            >
              <div>
                <span className="text-xs font-bold text-slate-800 block">Input B: Block Signal Green</span>
                <span className="text-[11px] text-slate-500">Central station dispatch clearance</span>
              </div>
              <span className={`font-mono text-xs font-bold px-3 py-1 rounded-lg ${signalGreen ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-600'}`}>
                {signalGreen ? 'HIGH (1)' : 'LOW (0)'}
              </span>
            </div>

            {/* Switch C */}
            <div
              onClick={() => setEmergencyOverride(!emergencyOverride)}
              className="p-3 bg-white border border-slate-200 rounded-xl flex items-center justify-between cursor-pointer hover:border-amber-400 transition-colors"
            >
              <div>
                <span className="text-xs font-bold text-slate-800 block">Input C: Conductor Manual Override</span>
                <span className="text-[11px] text-slate-500">Emergency bypass switch</span>
              </div>
              <span className={`font-mono text-xs font-bold px-3 py-1 rounded-lg ${emergencyOverride ? 'bg-amber-100 text-amber-800' : 'bg-slate-100 text-slate-600'}`}>
                {emergencyOverride ? 'ACTIVE (1)' : 'OFF (0)'}
              </span>
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => {
                setTrackClear(true);
                setSignalGreen(false);
                setEmergencyOverride(false);
              }}
              className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Reset Switches
            </button>
            <button
              onClick={onComplete}
              className="flex-1 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold rounded-xl shadow-md transition-all text-xs flex items-center justify-center gap-2 cursor-pointer"
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

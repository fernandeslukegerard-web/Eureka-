import React, { useState } from 'react';
import { Subtopic } from '../../types';
import { Zap, RotateCcw, ArrowRight, Lightbulb, Power, Gauge } from 'lucide-react';

interface SimProps {
  subtopic: Subtopic;
  onComplete: () => void;
}

export const ElectricCircuitSim: React.FC<SimProps> = ({ subtopic, onComplete }) => {
  const [voltage, setVoltage] = useState<number>(6); // Volts (1.5 to 24)
  const [resistance, setResistance] = useState<number>(10); // Ohms (2 to 50)
  const [switchClosed, setSwitchClosed] = useState<boolean>(true);

  // Ohm's Law: I = V / R
  const current = switchClosed ? Math.round((voltage / resistance) * 100) / 100 : 0;
  const power = Math.round(voltage * current * 10) / 10;
  // Bulb brightness scale (0 to 100%)
  const brightness = switchClosed ? Math.min(100, Math.round((current / 1.5) * 100)) : 0;

  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase tracking-wider font-extrabold text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-100">
              DC Electric Circuits & Ohm's Law
            </span>
            <span className="text-xs font-mono text-slate-500">Physics 4: Electricity & Magnetism</span>
          </div>
          <h3 className="text-2xl font-black text-slate-900 mt-2">
            {subtopic.experience?.title || 'Interactive Ohm’s Law & DC Breadboard Lab'}
          </h3>
          <p className="text-sm text-slate-600 mt-1 max-w-2xl">
            Construct and test a DC circuit. Alter battery potential difference (V) and component resistance (R) to measure real current (I).
          </p>
        </div>

        <div className="flex items-center gap-2 bg-amber-50 text-amber-700 px-4 py-2 rounded-2xl text-xs font-bold border border-amber-200">
          <Zap className="w-4 h-4 text-amber-600" />
          <span>I = V / R Live Circuit</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Visual Circuit Board */}
        <div className="lg:col-span-7 bg-slate-950 rounded-2xl p-6 border border-slate-800 flex flex-col justify-between min-h-[380px] relative overflow-hidden">
          {/* Real-time Multimeter HUD */}
          <div className="flex justify-between items-center text-xs font-mono bg-slate-900/90 text-slate-200 px-4 py-2.5 rounded-xl border border-slate-800 z-10">
            <div className="flex gap-4">
              <span>Potential (V): <strong className="text-sky-400 font-bold">{voltage} V</strong></span>
              <span>Resistance (R): <strong className="text-purple-400 font-bold">{resistance} Ω</strong></span>
            </div>
            <span>Current (I): <strong className={current > 0 ? 'text-amber-400 font-bold' : 'text-slate-500 font-bold'}>
              {current} A
            </strong></span>
          </div>

          {/* Schematic Circuit Graphics */}
          <div className="my-auto py-6 relative flex items-center justify-center">
            <div className="relative w-full max-w-md h-56 border-4 border-slate-600 rounded-3xl bg-slate-900/50 p-6 flex flex-col justify-between">
              {/* Top Branch: Switch */}
              <div className="flex justify-center -mt-9">
                <button
                  onClick={() => setSwitchClosed(!switchClosed)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold font-mono border-2 transition-all flex items-center gap-2 cursor-pointer ${
                    switchClosed
                      ? 'bg-emerald-600 text-white border-emerald-400 shadow-md shadow-emerald-500/20'
                      : 'bg-rose-900 text-rose-200 border-rose-600'
                  }`}
                >
                  <Power className="w-4 h-4" />
                  <span>Switch: {switchClosed ? 'CLOSED (ON)' : 'OPEN (OFF)'}</span>
                </button>
              </div>

              {/* Middle Section: Left Battery & Right Ammeter */}
              <div className="flex justify-between items-center px-2">
                {/* Battery Source */}
                <div className="flex flex-col items-center p-3 bg-slate-800 rounded-2xl border border-slate-700 shadow-lg">
                  <span className="text-[10px] text-slate-400 font-mono">DC SOURCE</span>
                  <span className="text-base font-bold font-mono text-sky-400">{voltage} V</span>
                  <div className="flex items-center gap-1 mt-1 text-[10px] font-mono text-slate-300">
                    <span className="text-emerald-400 font-bold">+</span>
                    <div className="w-4 h-1 bg-slate-500" />
                    <span className="text-rose-400 font-bold">-</span>
                  </div>
                </div>

                {/* Light Bulb Component (Middle Center) */}
                <div className="flex flex-col items-center">
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                      brightness > 0
                        ? 'bg-amber-400/90 border-amber-300 shadow-[0_0_40px_rgba(251,191,36,0.6)] text-slate-950 scale-110'
                        : 'bg-slate-800 border-slate-700 text-slate-600'
                    }`}
                  >
                    <Lightbulb className="w-9 h-9" />
                  </div>
                  <span className="text-[11px] font-mono font-bold text-slate-300 mt-2">
                    {brightness > 0 ? `${brightness}% Brightness (${power}W)` : 'Bulb Off'}
                  </span>
                </div>

                {/* Digital Ammeter Needle Display */}
                <div className="flex flex-col items-center p-3 bg-slate-800 rounded-2xl border border-slate-700 shadow-lg">
                  <div className="flex items-center gap-1 text-[10px] text-slate-400 font-mono">
                    <Gauge className="w-3 h-3 text-amber-400" /> AMMETER
                  </div>
                  <span className="text-base font-bold font-mono text-amber-400">{current} A</span>
                  <span className="text-[9px] text-slate-500 font-mono">Series Meter</span>
                </div>
              </div>

              {/* Bottom Branch: Resistor Component */}
              <div className="flex justify-center -mb-9">
                <div className="px-5 py-2 rounded-xl bg-slate-800 text-purple-300 border-2 border-purple-500 font-mono text-xs font-bold shadow-lg flex items-center gap-2">
                  <div className="w-3 h-3 bg-purple-500 rounded-sm" />
                  <span>Resistor: {resistance} Ω</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Live Diagnostic Formula */}
          <div className="bg-slate-900/90 rounded-xl p-3 text-xs text-slate-300 font-mono flex items-center justify-between border border-slate-800 z-10">
            <span>Ohm's Law: I = V / R = {voltage}V / {resistance}Ω = {current} A</span>
            <span className="text-emerald-400 font-bold">{switchClosed ? 'Closed Complete Circuit' : 'Open Circuit (0 A)'}</span>
          </div>
        </div>

        {/* Real Circuit Controls */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-5">
            <h4 className="text-sm font-bold text-slate-800 flex items-center gap-2">
              <Zap className="w-4 h-4 text-amber-600" /> Circuit Parameter Controls
            </h4>

            {/* Battery Voltage Slider */}
            <div>
              <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1.5">
                <span>Battery Potential Difference (V)</span>
                <span className="font-mono text-sky-600 font-bold">{voltage} Volts</span>
              </div>
              <input
                type="range"
                min="1.5"
                max="24"
                step="0.5"
                value={voltage}
                onChange={(e) => setVoltage(parseFloat(e.target.value))}
                className="w-full accent-sky-600 h-2 bg-slate-200 rounded-lg cursor-pointer"
              />
              <span className="text-[11px] text-slate-500 block mt-1">
                Electrical pressure that pushes electrons through the conducting wires.
              </span>
            </div>

            {/* Resistor Ohms Slider */}
            <div>
              <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1.5">
                <span>Circuit Resistance (R)</span>
                <span className="font-mono text-purple-600 font-bold">{resistance} Ohms (Ω)</span>
              </div>
              <input
                type="range"
                min="2"
                max="40"
                step="1"
                value={resistance}
                onChange={(e) => setResistance(parseInt(e.target.value, 10))}
                className="w-full accent-purple-600 h-2 bg-slate-200 rounded-lg cursor-pointer"
              />
              <span className="text-[11px] text-slate-500 block mt-1">
                Opposition to the flow of electric charge. Higher resistance reduces current.
              </span>
            </div>

            {/* Switch Toggle */}
            <div className="pt-1">
              <button
                onClick={() => setSwitchClosed(!switchClosed)}
                className={`w-full py-2.5 rounded-xl font-bold text-xs border transition-all cursor-pointer flex items-center justify-center gap-2 ${
                  switchClosed
                    ? 'bg-emerald-50 border-emerald-300 text-emerald-800'
                    : 'bg-rose-50 border-rose-300 text-rose-800'
                }`}
              >
                <Power className="w-4 h-4" />
                <span>Toggle Circuit Switch: {switchClosed ? 'Click to Open' : 'Click to Close'}</span>
              </button>
            </div>

            {/* Scientific Rule Box */}
            <div className="bg-amber-50/80 p-3.5 rounded-xl border border-amber-200 text-xs text-slate-700 leading-relaxed">
              <strong className="text-amber-900 block mb-1">Ohmic Conductor Principle:</strong>
              Current is directly proportional to voltage and inversely proportional to resistance. Doubling resistance cuts current in half for a fixed voltage!
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => {
                setVoltage(6);
                setResistance(10);
                setSwitchClosed(true);
              }}
              className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Reset Circuit
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

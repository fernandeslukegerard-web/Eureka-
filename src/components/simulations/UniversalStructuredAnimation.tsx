import React, { useState } from 'react';
import { StructuredAnimationSpec, AnimationObject } from '../../types/developer';
import {
  RotateCcw,
  CheckCircle,
  Sliders,
  Sparkles,
  Info,
  Activity,
  Gauge,
  ToggleLeft,
  ToggleRight,
  ShieldCheck,
  Check,
  ChevronRight,
  Award
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface UniversalStructuredAnimationProps {
  spec: StructuredAnimationSpec;
  onComplete?: () => void;
  isDeveloperPreview?: boolean;
}

export const UniversalStructuredAnimation: React.FC<UniversalStructuredAnimationProps> = ({
  spec,
  onComplete,
  isDeveloperPreview = false
}) => {
  // Local state for objects and verified interactions
  const [objectStates, setObjectStates] = useState<Record<string, AnimationObject>>(() => {
    const map: Record<string, AnimationObject> = {};
    (spec.objects || []).forEach((obj) => {
      map[obj.id] = {
        ...obj,
        currentValue: obj.initialValue ?? obj.min ?? 0,
        status: obj.status || 'pending'
      };
    });
    return map;
  });

  const [completedInteractions, setCompletedInteractions] = useState<string[]>([]);
  const [activeFeedback, setActiveFeedback] = useState<string | null>(null);
  const [isCompleted, setIsCompleted] = useState(false);

  // Update object value
  const handleValueChange = (id: string, deltaOrValue: number, isAbsolute: boolean = false) => {
    setObjectStates((prev) => {
      const currentObj = prev[id];
      if (!currentObj) return prev;
      let nextVal = isAbsolute ? deltaOrValue : (currentObj.currentValue ?? 0) + deltaOrValue;
      if (currentObj.min !== undefined) nextVal = Math.max(currentObj.min, nextVal);
      if (currentObj.max !== undefined) nextVal = Math.min(currentObj.max, nextVal);

      // Check if target reached
      let newStatus = currentObj.status;
      if (currentObj.targetValue !== undefined) {
        const tolerance = (currentObj.step || 1) * 0.75;
        if (Math.abs(nextVal - currentObj.targetValue) <= tolerance) {
          newStatus = 'calibrated';
        }
      }

      return {
        ...prev,
        [id]: {
          ...currentObj,
          currentValue: nextVal,
          status: newStatus
        }
      };
    });
  };

  // Perform interaction step
  const handlePerformInteraction = (interactionId: string) => {
    const interaction = (spec.interactions || []).find((i) => i.id === interactionId);
    if (!interaction) return;

    // Mark as completed
    if (!completedInteractions.includes(interactionId)) {
      const nextCompleted = [...completedInteractions, interactionId];
      setCompletedInteractions(nextCompleted);

      // Also calibrate target object if applicable
      if (interaction.targetObjectId && objectStates[interaction.targetObjectId]) {
        setObjectStates((prev) => {
          const target = prev[interaction.targetObjectId];
          return {
            ...prev,
            [interaction.targetObjectId]: {
              ...target,
              currentValue: target.targetValue ?? target.currentValue,
              status: 'calibrated'
            }
          };
        });
      }

      setActiveFeedback(interaction.feedbackOnSuccess || `Verified ${interaction.label}`);

      // Check success criteria
      const req = spec.successCriteria?.requiredChecks || (spec.interactions || []).length || 1;
      if (nextCompleted.length >= req && !isCompleted) {
        setIsCompleted(true);
        try {
          confetti({ particleCount: 70, spread: 60, origin: { y: 0.7 } });
        } catch {}
        if (onComplete) {
          onComplete();
        }
      }
    } else {
      setActiveFeedback(interaction.feedbackOnSuccess);
    }
  };

  // Reset simulation
  const handleReset = () => {
    const map: Record<string, AnimationObject> = {};
    (spec.objects || []).forEach((obj) => {
      map[obj.id] = {
        ...obj,
        currentValue: obj.initialValue ?? obj.min ?? 0,
        status: 'pending'
      };
    });
    setObjectStates(map);
    setCompletedInteractions([]);
    setActiveFeedback(null);
    setIsCompleted(false);
  };

  const reqChecks = spec.successCriteria?.requiredChecks || (spec.interactions || []).length || 1;
  const progressRatio = Math.min(1, completedInteractions.length / reqChecks);

  return (
    <div className="bg-white border border-slate-200/90 rounded-3xl overflow-hidden shadow-sm transition-all text-slate-900">
      {/* Simulation Header */}
      <div className="px-5 py-4 border-b border-slate-200/80 bg-slate-50/80 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center shadow-md shadow-blue-500/20">
            <Gauge className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-extrabold text-base text-slate-900">
                {spec.scene?.title || 'Interactive Scientific Simulator'}
              </h3>
              {isDeveloperPreview && (
                <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 border border-blue-200">
                  Preview Mode
                </span>
              )}
            </div>
            <p className="text-xs text-slate-500">
              Theme: <span className="font-medium text-slate-700 capitalize">{spec.scene?.theme || 'Scientific Apparatus'}</span>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleReset}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-100 text-xs font-bold text-slate-700 transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset</span>
          </button>
        </div>
      </div>

      {/* Progress & Live Status Bar */}
      <div className="px-5 py-2.5 bg-blue-50/50 border-b border-blue-100 flex items-center justify-between text-xs">
        <div className="flex items-center gap-2">
          <Activity className="w-4 h-4 text-blue-600 animate-pulse" />
          <span className="font-bold text-blue-900">Inspection &amp; Calibration Status:</span>
          <span className="font-semibold text-blue-700">
            {completedInteractions.length} / {reqChecks} Verifications Complete
          </span>
        </div>
        <div className="w-32 bg-slate-200 h-2 rounded-full overflow-hidden">
          <div
            className="bg-blue-600 h-full rounded-full transition-all duration-300"
            style={{ width: `${progressRatio * 100}%` }}
          />
        </div>
      </div>

      {/* Main Interactive Stage */}
      <div className="p-5 sm:p-6 space-y-6">
        {/* Interactive Instruments & Gauges Grid */}
        <div>
          <h4 className="text-xs uppercase font-extrabold tracking-wider text-slate-500 mb-3 flex items-center gap-1.5">
            <Sliders className="w-4 h-4 text-blue-600" />
            <span>Apparatus &amp; Measurement Instruments</span>
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {(spec.objects || []).map((obj) => {
              const liveState = objectStates[obj.id] || obj;
              const val = liveState.currentValue ?? obj.initialValue ?? 0;
              const isCalibrated = liveState.status === 'calibrated';

              return (
                <div
                  key={obj.id}
                  className={`p-4 rounded-2xl border transition-all ${
                    isCalibrated
                      ? 'bg-emerald-50/50 border-emerald-300 shadow-xs'
                      : 'bg-slate-50/80 border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div>
                      <span className="text-xs font-bold text-slate-800 block">{obj.name}</span>
                      {obj.quantity && (
                        <span className="text-[11px] text-slate-500 font-mono">{obj.quantity}</span>
                      )}
                    </div>
                    {isCalibrated ? (
                      <span className="flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-100 border border-emerald-200 px-2 py-0.5 rounded-full">
                        <Check className="w-3 h-3" />
                        Calibrated
                      </span>
                    ) : (
                      <span className="text-[10px] font-bold text-slate-500 bg-slate-200/80 px-2 py-0.5 rounded-full">
                        Pending
                      </span>
                    )}
                  </div>

                  {/* Circular Dial / Gauge Display */}
                  {(obj.type === 'gauge' || obj.type === 'meter') && (
                    <div className="my-3 flex flex-col items-center justify-center">
                      <div className="relative w-28 h-28 flex items-center justify-center">
                        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                          {/* Dial background circle */}
                          <circle
                            cx="50"
                            cy="50"
                            r="40"
                            className="stroke-slate-200"
                            strokeWidth="8"
                            fill="none"
                          />
                          {/* Active arc */}
                          <circle
                            cx="50"
                            cy="50"
                            r="40"
                            className={isCalibrated ? 'stroke-emerald-500' : 'stroke-blue-600'}
                            strokeWidth="8"
                            strokeDasharray={251.2}
                            strokeDashoffset={
                              251.2 - (251.2 * Math.min(1, Math.max(0, (val - obj.min) / (obj.max - obj.min))))
                            }
                            strokeLinecap="round"
                            fill="none"
                          />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                          <span className="text-lg font-black font-mono text-slate-900 leading-none">
                            {typeof val === 'number' ? val.toFixed(obj.step && obj.step < 1 ? 1 : 0) : val}
                          </span>
                          <span className="text-[10px] font-bold text-slate-500 font-mono mt-0.5">
                            {obj.unit}
                          </span>
                        </div>
                      </div>

                      {/* Manual adjustment controls */}
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          type="button"
                          onClick={() => handleValueChange(obj.id, -(obj.step || 5))}
                          className="w-7 h-7 rounded-lg bg-white border border-slate-200 hover:bg-slate-100 text-xs font-bold text-slate-700 flex items-center justify-center cursor-pointer shadow-2xs"
                        >
                          -
                        </button>
                        <span className="text-[11px] font-mono text-slate-600">
                          Target: {obj.targetValue ?? '—'} {obj.unit}
                        </span>
                        <button
                          type="button"
                          onClick={() => handleValueChange(obj.id, +(obj.step || 5))}
                          className="w-7 h-7 rounded-lg bg-white border border-slate-200 hover:bg-slate-100 text-xs font-bold text-slate-700 flex items-center justify-center cursor-pointer shadow-2xs"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Slider Instrument */}
                  {(obj.type === 'slider' || obj.type === 'scale') && (
                    <div className="my-3 space-y-2">
                      <div className="flex justify-between text-xs font-mono">
                        <span className="text-slate-500">{obj.min} {obj.unit}</span>
                        <span className="font-bold text-slate-900 text-sm">
                          {val} {obj.unit}
                        </span>
                        <span className="text-slate-500">{obj.max} {obj.unit}</span>
                      </div>
                      <input
                        type="range"
                        min={obj.min}
                        max={obj.max}
                        step={obj.step || 1}
                        value={val}
                        onChange={(e) => handleValueChange(obj.id, parseFloat(e.target.value), true)}
                        className="w-full accent-blue-600 cursor-pointer"
                      />
                      {obj.targetValue !== undefined && (
                        <div className="text-[10px] text-center font-mono text-blue-600 font-semibold">
                          Target calibration zone: {obj.targetValue} {obj.unit}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Toggle / Switch Instrument */}
                  {(obj.type === 'switch' || obj.type === 'sensor') && (
                    <div className="my-3 flex items-center justify-between p-2 rounded-xl bg-white border border-slate-200">
                      <span className="text-xs font-medium text-slate-700">Sensor Power</span>
                      <button
                        type="button"
                        onClick={() => handleValueChange(obj.id, val === 1 ? 0 : 1, true)}
                        className="flex items-center gap-1.5 text-xs font-bold text-slate-800 cursor-pointer"
                      >
                        {val === 1 ? (
                          <>
                            <ToggleRight className="w-6 h-6 text-emerald-600" />
                            <span className="text-emerald-700">ACTIVE</span>
                          </>
                        ) : (
                          <>
                            <ToggleLeft className="w-6 h-6 text-slate-400" />
                            <span className="text-slate-400">STANDBY</span>
                          </>
                        )}
                      </button>
                    </div>
                  )}

                  {/* Tooltip / Explanation */}
                  {obj.tooltip && (
                    <p className="text-[11px] text-slate-500 leading-snug mt-2 pt-2 border-t border-slate-200/60">
                      {obj.tooltip}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Step-by-Step Interactive Tasks */}
        <div className="bg-slate-50 rounded-2xl p-4 sm:p-5 border border-slate-200">
          <h4 className="text-xs uppercase font-extrabold tracking-wider text-slate-600 mb-3 flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4 text-emerald-600" />
            <span>Interactive Protocol &amp; Verification Checks</span>
          </h4>

          <div className="space-y-2.5">
            {(spec.interactions || []).map((interaction) => {
              const done = completedInteractions.includes(interaction.id);

              return (
                <div
                  key={interaction.id}
                  className={`p-3 sm:p-3.5 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-all ${
                    done
                      ? 'bg-emerald-50/70 border-emerald-300'
                      : 'bg-white border-slate-200 hover:border-blue-300'
                  }`}
                >
                  <div className="flex items-start gap-2.5">
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center mt-0.5 shrink-0 ${
                        done ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-600'
                      }`}
                    >
                      {done ? <Check className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
                    </div>
                    <div>
                      <span className="text-xs sm:text-sm font-bold text-slate-900 block">
                        {interaction.label}
                      </span>
                      <span className="text-xs text-slate-500">{interaction.hint}</span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => handlePerformInteraction(interaction.id)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer shrink-0 min-h-[36px] flex items-center justify-center gap-1.5 ${
                      done
                        ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                        : 'bg-blue-600 hover:bg-blue-700 text-white shadow-xs'
                    }`}
                  >
                    {done ? (
                      <>
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span>Verified</span>
                      </>
                    ) : (
                      <>
                        <span>Verify &amp; Calibrate</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>
              );
            })}
          </div>

          {/* Feedback popup message */}
          {activeFeedback && (
            <div className="mt-3 p-3 bg-blue-50 border border-blue-200 rounded-xl text-xs text-blue-900 flex items-start gap-2 animate-in fade-in">
              <Info className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
              <span>{activeFeedback}</span>
            </div>
          )}
        </div>

        {/* Educational Highlights */}
        {(spec.educationalHighlights || []).length > 0 && (
          <div className="bg-gradient-to-r from-blue-50/70 to-indigo-50/70 rounded-2xl p-4 sm:p-5 border border-blue-100">
            <h4 className="text-xs uppercase font-extrabold tracking-wider text-blue-800 mb-2 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>Scientific Concept Highlights</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
              {spec.educationalHighlights.map((highlight, idx) => (
                <div key={idx} className="bg-white/80 p-3 rounded-xl border border-blue-200/60 shadow-2xs">
                  <span className="text-xs font-bold text-slate-900 block">{highlight.concept}</span>
                  <span className="text-xs text-slate-600 leading-relaxed mt-0.5 block">
                    {highlight.detail}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Completion Banner */}
        {isCompleted && (
          <div className="p-4 sm:p-5 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl text-white shadow-md animate-in zoom-in-95 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-center sm:text-left">
              <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-xs flex items-center justify-center shrink-0">
                <Award className="w-7 h-7 text-white" />
              </div>
              <div>
                <h4 className="font-extrabold text-base">Apparatus Verified Successfully!</h4>
                <p className="text-xs text-emerald-100 mt-0.5">
                  {spec.successCriteria?.completionMessage ||
                    'All physical quantities inspected and verified in accordance with scientific standards.'}
                </p>
              </div>
            </div>
            {onComplete && !isDeveloperPreview && (
              <button
                type="button"
                onClick={onComplete}
                className="px-5 py-2.5 bg-white text-emerald-800 hover:bg-emerald-50 font-bold rounded-xl text-xs sm:text-sm shadow-md transition-all cursor-pointer whitespace-nowrap"
              >
                Proceed to Lesson Analysis →
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

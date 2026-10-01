import React, { useState } from 'react';
import { Subtopic } from '../../types';
import {
  RotateCcw,
  CheckCircle,
  Eye,
  Sliders,
  Sparkles,
  Droplet,
  Layers,
  ZoomIn
} from 'lucide-react';

interface SimProps {
  subtopic: Subtopic;
  onComplete: () => void;
}

type SlideType = 'plant' | 'animal' | 'chloroplast';

export const CellMicroscopeSim: React.FC<SimProps> = ({ subtopic, onComplete }) => {
  const [slide, setSlide] = useState<SlideType>('plant');
  const [magnification, setMagnification] = useState<number>(40); // 4x, 10x, 40x, 100x
  const [stainApplied, setStainApplied] = useState<boolean>(true);
  const [focusDial, setFocusDial] = useState<number>(48); // 0 to 100 (optimal at 50)
  const [selectedOrganelle, setSelectedOrganelle] = useState<string | null>(null);
  const [challengeDone, setChallengeDone] = useState<boolean>(false);

  // Sharpness calculation: distance from 50 gives blur in pixels
  const focusDistance = Math.abs(focusDial - 50);
  const blurPixels = Math.min(12, Math.round(focusDistance * 0.25));
  const isSharp = blurPixels <= 1;

  const handleSelectOrganelle = (name: string) => {
    setSelectedOrganelle(name);
    if (isSharp && stainApplied) {
      setChallengeDone(true);
      onComplete();
    }
  };

  const handleReset = () => {
    setFocusDial(25);
    setStainApplied(false);
    setSelectedOrganelle(null);
  };

  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase tracking-wider font-extrabold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
              Cellular Cytology Lab
            </span>
            <span className="text-xs font-mono text-slate-500">Biology: Cell Structure & Organisation</span>
          </div>
          <h3 className="text-2xl font-black text-slate-900 mt-2">
            {subtopic.experience?.title || 'High-Power Compound Light Microscope'}
          </h3>
          <p className="text-sm text-slate-600 mt-1 max-w-2xl">
            Prepare cellular wet mounts, apply iodine or methylene blue stain, adjust fine optical focus, and identify key organelles under objective magnification.
          </p>
        </div>

        {challengeDone && (
          <div className="flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-2xl text-xs font-bold border border-emerald-200">
            <CheckCircle className="w-4 h-4 text-emerald-600" />
            <span>Cell Organelle Identified in High Resolution!</span>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Microscope Circular Field of View Viewport */}
        <div className="lg:col-span-7 bg-slate-950 rounded-2xl p-6 border border-slate-800 flex flex-col items-center justify-center min-h-[380px] relative overflow-hidden">
          {/* Eyepiece circular rim */}
          <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-full border-8 border-slate-800 bg-slate-900 relative overflow-hidden flex items-center justify-center shadow-2xl">
            {/* Cell specimen image with dynamic blur and stain tint */}
            <div
              className="w-full h-full relative transition-all duration-200 flex items-center justify-center"
              style={{
                filter: `blur(${blurPixels}px)`,
                backgroundColor: stainApplied
                  ? slide === 'plant'
                    ? '#fef3c7'
                    : '#dbeafe'
                  : '#f1f5f9'
              }}
            >
              {slide === 'plant' && (
                /* Onion Epidermal Tissue (Regular brick-like polygonal cells with cell wall) */
                <div className="grid grid-cols-3 gap-1 w-full h-full p-4 opacity-90">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div
                      key={i}
                      className="border-2 border-emerald-800/80 rounded-md p-2 relative flex flex-col justify-between bg-emerald-500/10 hover:bg-emerald-500/30 transition-colors cursor-pointer"
                      onClick={() => handleSelectOrganelle('Cell Wall & Nucleus')}
                    >
                      {/* Nucleus dot */}
                      <div
                        className={`w-3.5 h-3.5 rounded-full absolute top-3 right-3 shadow-xs ${
                          stainApplied ? 'bg-amber-800' : 'bg-slate-300'
                        }`}
                        title="Nucleus"
                      />
                      {/* Large Central Vacuole */}
                      <div className="w-full h-10 border border-dashed border-emerald-600/40 rounded-sm mt-4 bg-emerald-200/20 text-[9px] text-emerald-900 font-mono text-center flex items-center justify-center">
                        Vacuole
                      </div>
                      <span className="text-[9px] font-mono text-emerald-900 font-bold">Cell Wall</span>
                    </div>
                  ))}
                </div>
              )}

              {slide === 'animal' && (
                /* Cheek Epithelial Cells (Irregular, flexible membrane, no cell wall) */
                <div className="relative w-full h-full flex items-center justify-center">
                  <div
                    onClick={() => handleSelectOrganelle('Cell Membrane & Cytoplasm')}
                    className="w-48 h-40 rounded-[45%_55%_60%_40%/50%_40%_60%_50%] border-2 border-blue-600/80 bg-blue-500/15 p-4 flex items-center justify-center relative cursor-pointer hover:bg-blue-500/25 transition-all shadow-md"
                  >
                    {/* Animal Nucleus */}
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center text-[8px] font-bold text-white shadow-md ${
                        stainApplied ? 'bg-indigo-900' : 'bg-slate-400'
                      }`}
                    >
                      N
                    </div>
                    <span className="absolute bottom-2 text-[10px] font-mono text-blue-900 font-bold">
                      Flexible Cell Membrane
                    </span>
                  </div>
                </div>
              )}

              {slide === 'chloroplast' && (
                /* Leaf Mesophyll Cell with Chloroplasts */
                <div className="grid grid-cols-2 gap-2 w-full h-full p-4">
                  {[1, 2].map((i) => (
                    <div
                      key={i}
                      onClick={() => handleSelectOrganelle('Chloroplasts')}
                      className="border-3 border-emerald-700 rounded-xl p-3 bg-emerald-100/30 flex flex-wrap gap-2 items-center justify-center cursor-pointer hover:bg-emerald-200/40"
                    >
                      {[1, 2, 3, 4, 5, 6].map((c) => (
                        <div
                          key={c}
                          className="w-4 h-3 rounded-full bg-emerald-600 border border-emerald-800 shadow-xs flex items-center justify-center text-[7px] text-emerald-100"
                        >
                          🟢
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Crosshair reticle overlay */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
              <div className="w-full h-[1px] bg-slate-400/20" />
              <div className="h-full w-[1px] bg-slate-400/20 absolute" />
            </div>

            {/* Field scale label */}
            <div className="absolute bottom-3 text-[10px] font-mono font-bold bg-slate-900/80 text-slate-300 px-3 py-1 rounded-full border border-slate-700">
              Magnification: {magnification * 10}x (Eyepiece 10x × Objective {magnification}x)
            </div>
          </div>

          {/* Optical Focus Status Indicator */}
          <div className="mt-4 flex items-center gap-3 text-xs font-mono">
            <span className="text-slate-400">Focus State:</span>
            <span
              className={`px-3 py-1 rounded-full font-bold ${
                isSharp
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                  : 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
              }`}
            >
              {isSharp ? 'PERFECT OPTICAL SHARPNESS' : `BLURRED (${blurPixels}px focal aberration)`}
            </span>
          </div>
        </div>

        {/* Lab Controls & Adjustments */}
        <div className="lg:col-span-5 space-y-4">
          {/* Specimen Slide Selector */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
              Select Glass Slide Specimen
            </label>
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => {
                  setSlide('plant');
                  setSelectedOrganelle(null);
                }}
                className={`p-2.5 rounded-xl border text-xs font-bold text-center transition-all cursor-pointer ${
                  slide === 'plant'
                    ? 'bg-emerald-50 border-emerald-500 text-emerald-900'
                    : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                🌱 Onion (Plant)
              </button>
              <button
                onClick={() => {
                  setSlide('animal');
                  setSelectedOrganelle(null);
                }}
                className={`p-2.5 rounded-xl border text-xs font-bold text-center transition-all cursor-pointer ${
                  slide === 'animal'
                    ? 'bg-blue-50 border-blue-500 text-blue-900'
                    : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                🔬 Cheek (Animal)
              </button>
              <button
                onClick={() => {
                  setSlide('chloroplast');
                  setSelectedOrganelle(null);
                }}
                className={`p-2.5 rounded-xl border text-xs font-bold text-center transition-all cursor-pointer ${
                  slide === 'chloroplast'
                    ? 'bg-emerald-50 border-emerald-500 text-emerald-900'
                    : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                🍃 Leaf (Plastids)
              </button>
            </div>
          </div>

          {/* Objective Lens Turret */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
              Objective Nosepiece Turret
            </label>
            <div className="grid grid-cols-4 gap-2">
              {[4, 10, 40, 100].map((mag) => (
                <button
                  key={mag}
                  onClick={() => setMagnification(mag)}
                  className={`py-2 rounded-xl border text-xs font-mono font-bold text-center transition-all cursor-pointer ${
                    magnification === mag
                      ? 'bg-slate-900 border-slate-900 text-white shadow-xs'
                      : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {mag}x
                </button>
              ))}
            </div>
          </div>

          {/* Fine Focus Knob Slider */}
          <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200">
            <div className="flex justify-between items-center mb-1.5">
              <span className="text-xs font-bold text-slate-700">Coarse / Fine Focus Knob</span>
              <span className="text-xs font-mono font-bold text-blue-600">{focusDial} / 100</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={focusDial}
              onChange={(e) => setFocusDial(Number(e.target.value))}
              className="w-full accent-blue-600 cursor-pointer"
            />
            <p className="text-[11px] text-slate-500 mt-1">
              Rotate the knob until focal plane aligns with specimen thickness (target: ~50).
            </p>
          </div>

          {/* Biological Stain Application */}
          <div className="flex items-center justify-between p-3.5 bg-slate-50 rounded-2xl border border-slate-200">
            <div>
              <span className="text-xs font-bold text-slate-800 block">Biological Staining</span>
              <span className="text-[11px] text-slate-500">Iodine Solution or Methylene Blue dye</span>
            </div>
            <button
              onClick={() => setStainApplied(!stainApplied)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                stainApplied
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
              }`}
            >
              {stainApplied ? '✓ Stain Applied' : 'Add Dropper Stain'}
            </button>
          </div>

          {/* Organelle Callout Box */}
          {selectedOrganelle && (
            <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-950">
              <strong>Inspected Organelle:</strong> {selectedOrganelle}
              <p className="text-[11px] text-emerald-800 mt-0.5">
                {slide === 'plant'
                  ? 'Plant cells possess a rigid cellulose cell wall, large central vacuole, and distinct nucleus stained amber-brown by iodine.'
                  : 'Animal cells lack a cell wall and chloroplasts; they are surrounded only by a delicate selectively permeable cell membrane.'}
              </p>
            </div>
          )}

          <div className="pt-2 flex gap-3">
            <button
              onClick={handleReset}
              className="flex-1 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-colors cursor-pointer flex items-center justify-center gap-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Wet Mount</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

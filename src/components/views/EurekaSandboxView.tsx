import React, { useState, useRef } from 'react';
import { UserProfile, StudentProgress } from '../../types';
import {
  FlaskConical,
  Zap,
  Dna,
  RotateCcw,
  Trash2,
  Plus,
  Sparkles,
  Info,
  Maximize2,
  Compass,
  Sliders,
  Flame,
  Droplets,
  Layers,
  HelpCircle,
  Lightbulb
} from 'lucide-react';

interface SandboxObject {
  instanceId: string;
  itemId: string;
  name: string;
  category: 'chemical' | 'apparatus' | 'circuit' | 'mechanics' | 'biology';
  x: number;
  y: number;
  rotation?: number;
  state: Record<string, any>;
}

type SandboxSubject = 'chemistry' | 'physics' | 'biology';

export const EurekaSandboxView: React.FC<{ profile: UserProfile; progress: StudentProgress }> = ({
  profile
}) => {
  const [subject, setSubject] = useState<SandboxSubject>('chemistry');
  const [placedObjects, setPlacedObjects] = useState<SandboxObject[]>([]);
  const [selectedInstanceId, setSelectedInstanceId] = useState<string | null>(null);
  const [activeLog, setActiveLog] = useState<string | null>(null);
  const [reactionEffects, setReactionEffects] = useState<
    { id: string; x: number; y: number; text: string; color: string }[]
  >([]);

  const workspaceRef = useRef<HTMLDivElement>(null);
  const [draggingId, setDraggingId] = useState<string | null>(null);
  const [dragOffset, setDragOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  // Toolbox Catalog per subject
  const catalog = {
    chemistry: [
      { id: 'water', name: 'Water (H₂O)', icon: '💧', category: 'chemical', defaultState: { type: 'liquid', volume: 100, ph: 7.0, temp: 21, color: '#60a5fa' } },
      { id: 'sodium', name: 'Sodium Metal (Na)', icon: '⚪', category: 'chemical', defaultState: { type: 'metal_solid', mass: 10, reactive: true } },
      { id: 'hcl', name: 'Hydrochloric Acid (HCl)', icon: '🧪', category: 'chemical', defaultState: { type: 'acid', volume: 50, ph: 1.0, temp: 21, color: '#f87171' } },
      { id: 'naoh', name: 'Sodium Hydroxide (NaOH)', icon: '🧴', category: 'chemical', defaultState: { type: 'base', volume: 50, ph: 13.5, temp: 21, color: '#a78bfa' } },
      { id: 'indicator', name: 'Phenolphthalein', icon: '🟣', category: 'chemical', defaultState: { type: 'indicator', volume: 10 } },
      { id: 'copper_sulfate', name: 'Copper(II) Sulfate', icon: '💎', category: 'chemical', defaultState: { type: 'salt_crystal', color: '#2563eb', mass: 15 } },
      { id: 'beaker', name: 'Glass Beaker (250ml)', icon: '🥛', category: 'apparatus', defaultState: { contents: [] as string[], temp: 21, liquidLevel: 0, liquidColor: 'transparent', ph: 7.0 } },
      { id: 'bunsen', name: 'Bunsen Burner', icon: '🔥', category: 'apparatus', defaultState: { lit: true, temp: 350 } },
      { id: 'thermometer', name: 'Digital Thermometer', icon: '🌡️', category: 'apparatus', defaultState: { reading: 21.0 } }
    ],
    physics: [
      { id: 'battery', name: '9V DC Battery', icon: '🔋', category: 'circuit', defaultState: { voltage: 9.0, connected: false } },
      { id: 'bulb', name: 'Filament Light Bulb', icon: '💡', category: 'circuit', defaultState: { lit: false, resistance: 10, brightness: 0 } },
      { id: 'switch', name: 'Toggle Switch', icon: '🔘', category: 'circuit', defaultState: { closed: false } },
      { id: 'resistor', name: 'Resistor (10 Ω)', icon: '⚡', category: 'circuit', defaultState: { resistance: 10 } },
      { id: 'ammeter', name: 'Digital Ammeter', icon: '📟', category: 'circuit', defaultState: { current: 0.0 } },
      { id: 'laser', name: 'Coherent Laser Source', icon: '🔴', category: 'mechanics', defaultState: { powered: true, wavelength: 650 } },
      { id: 'prism', name: 'Equilateral Glass Prism', icon: '🔺', category: 'mechanics', defaultState: { refractiveIndex: 1.52, disperses: true } },
      { id: 'mass_block', name: '5.0 kg Mass Block', icon: '🧱', category: 'mechanics', defaultState: { mass: 5.0, speed: 0 } },
      { id: 'spring', name: 'Coil Spring (k=50 N/m)', icon: '🌀', category: 'mechanics', defaultState: { k: 50, displacement: 0 } }
    ],
    biology: [
      { id: 'plant_slide', name: 'Elodea Plant Leaf Slide', icon: '🌿', category: 'biology', defaultState: { stained: false, magnified: false, cellWallVisible: false } },
      { id: 'iodine', name: 'Iodine Cell Stain', icon: '🟤', category: 'biology', defaultState: { volume: 15, reagent: 'starch_test' } },
      { id: 'microscope', name: 'Compound Microscope', icon: '🔬', category: 'biology', defaultState: { specimen: null, magnification: 400 } },
      { id: 'petri_dish', name: 'Nutrient Agar Dish', icon: '🧫', category: 'biology', defaultState: { inoculated: false, bacterialColonies: 0 } },
      { id: 'bacteria', name: 'E. Coli Culture Swab', icon: '🦠', category: 'biology', defaultState: { strain: 'E. coli K-12' } },
      { id: 'antibiotic_disk', name: 'Penicillin Antibiotic Disk', icon: '💊', category: 'biology', defaultState: { potency: '10 units', zoneOfInhibition: 0 } }
    ]
  };

  // Add an item to workspace
  const handleAddItem = (item: {
    id: string;
    name: string;
    icon: string;
    category: string;
    defaultState: Record<string, any>;
  }) => {
    const rect = workspaceRef.current?.getBoundingClientRect();
    const spawnX = rect ? rect.width / 2 - 40 + (Math.random() * 80 - 40) : 250;
    const spawnY = rect ? rect.height / 2 - 40 + (Math.random() * 80 - 40) : 200;

    const newObj: SandboxObject = {
      instanceId: `inst_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
      itemId: item.id,
      name: item.name,
      category: item.category as any,
      x: Math.max(20, spawnX),
      y: Math.max(20, spawnY),
      state: { ...item.defaultState }
    };

    setPlacedObjects((prev) => [...prev, newObj]);
    setSelectedInstanceId(newObj.instanceId);
    setActiveLog(`Added ${item.name} to workspace.`);
  };

  // Dragging logic
  const handlePointerDown = (e: React.PointerEvent, obj: SandboxObject) => {
    e.stopPropagation();
    setSelectedInstanceId(obj.instanceId);
    setDraggingId(obj.instanceId);

    const rect = workspaceRef.current?.getBoundingClientRect();
    if (rect) {
      setDragOffset({
        x: e.clientX - rect.left - obj.x,
        y: e.clientY - rect.top - obj.y
      });
    }
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!draggingId || !workspaceRef.current) return;
    const rect = workspaceRef.current.getBoundingClientRect();
    const newX = Math.max(10, Math.min(rect.width - 100, e.clientX - rect.left - dragOffset.x));
    const newY = Math.max(10, Math.min(rect.height - 100, e.clientY - rect.top - dragOffset.y));

    setPlacedObjects((prev) =>
      prev.map((obj) => (obj.instanceId === draggingId ? { ...obj, x: newX, y: newY } : obj))
    );
  };

  const handlePointerUp = () => {
    if (!draggingId) return;
    checkProximityInteractions(draggingId);
    setDraggingId(null);
  };

  // Dynamic Physical & Chemical Interaction Engine
  const checkProximityInteractions = (targetId: string) => {
    const moved = placedObjects.find((o) => o.instanceId === targetId);
    if (!moved) return;

    // Check collision with any other object within 70px
    const collided = placedObjects.find(
      (o) =>
        o.instanceId !== targetId &&
        Math.hypot(o.x - moved.x, o.y - moved.y) < 70
    );

    if (!collided) return;

    triggerInteraction(moved, collided);
  };

  const triggerInteraction = (objA: SandboxObject, objB: SandboxObject) => {
    const ids = [objA.itemId, objB.itemId];

    // 1. Chemistry: Sodium + Water reaction
    if (ids.includes('sodium') && (ids.includes('water') || ids.includes('beaker'))) {
      spawnEffect(objA.x, objA.y, '💥 Violent Effervescence: 2Na + 2H₂O → 2NaOH + H₂↑', '#ef4444');
      setActiveLog('Vigorous exothermic reaction! Sodium reacts with water to release hydrogen gas and form basic NaOH (pH 13.5).');

      // Dissolve sodium into basic solution
      setPlacedObjects((prev) =>
        prev
          .filter((o) => o.itemId !== 'sodium')
          .map((o) => {
            if (o.itemId === 'water' || o.itemId === 'beaker') {
              return {
                ...o,
                name: 'Basic NaOH Solution',
                state: { ...o.state, ph: 13.5, temp: 58, color: '#cbd5e1' }
              };
            }
            return o;
          })
      );
      return;
    }

    // 2. Chemistry: Phenolphthalein + Basic Solution
    if (
      ids.includes('indicator') &&
      (objA.state.ph > 8.5 || objB.state.ph > 8.5 || ids.includes('naoh'))
    ) {
      spawnEffect(objA.x, objA.y, '🟣 Indicator Turned Magenta (pH > 8.2)', '#d946ef');
      setActiveLog('Phenolphthalein deprotonates in basic medium, turning bright magenta pink!');
      setPlacedObjects((prev) =>
        prev.map((o) => {
          if (o.state.ph > 8.5 || o.itemId === 'naoh') {
            return {
              ...o,
              state: { ...o.state, color: '#f43f5e', indicatorActive: true }
            };
          }
          return o;
        })
      );
      return;
    }

    // 3. Chemistry: Acid (HCl) + Base (NaOH) Neutralization
    if (ids.includes('hcl') && (ids.includes('naoh') || objA.state.ph > 10 || objB.state.ph > 10)) {
      spawnEffect(objA.x, objA.y, '⚖️ Neutralization: HCl + NaOH → NaCl + H₂O (+ΔH)', '#10b981');
      setActiveLog('Stoichiometric neutralization occurred! Salt and water formed at pH 7.0 with exothermic heat release.');
      setPlacedObjects((prev) =>
        prev.map((o) => {
          if (o.itemId === 'naoh' || o.itemId === 'hcl' || o.state.ph > 10) {
            return {
              ...o,
              name: 'Neutral Saline Solution (NaCl)',
              state: { ...o.state, ph: 7.0, temp: 34, color: '#93c5fd' }
            };
          }
          return o;
        })
      );
      return;
    }

    // 4. Chemistry: Bunsen Burner heating liquid
    if (ids.includes('bunsen') && (ids.includes('beaker') || ids.includes('water'))) {
      spawnEffect(objA.x, objA.y, '🔥 Heating Solution: Vapor Boiling (100°C)', '#f97316');
      setActiveLog('Thermal energy transferred. Liquid temperature raised to 100°C boiling point.');
      setPlacedObjects((prev) =>
        prev.map((o) => {
          if (o.itemId === 'beaker' || o.itemId === 'water') {
            return { ...o, state: { ...o.state, temp: 100, boiling: true } };
          }
          return o;
        })
      );
      return;
    }

    // 5. Physics: Battery + Bulb + Switch Circuit
    if (ids.includes('battery') && ids.includes('bulb')) {
      const isLit = !objA.state.lit;
      spawnEffect(objA.x, objA.y, isLit ? '💡 Circuit Closed: 0.90A Flowing' : 'Circuit Broken', '#eab308');
      setActiveLog(isLit ? 'Complete DC circuit established. Current I = V/R = 9V / 10Ω = 0.90A.' : 'Circuit opened.');
      setPlacedObjects((prev) =>
        prev.map((o) => {
          if (o.itemId === 'bulb') {
            return { ...o, state: { ...o.state, lit: isLit, brightness: isLit ? 100 : 0 } };
          }
          if (o.itemId === 'ammeter') {
            return { ...o, state: { ...o.state, current: isLit ? 0.9 : 0 } };
          }
          return o;
        })
      );
      return;
    }

    // 6. Physics: Laser + Prism Dispersion
    if (ids.includes('laser') && ids.includes('prism')) {
      spawnEffect(objA.x, objA.y, '🌈 Snell\'s Law Dispersion: Rainbow Spectrum', '#a855f7');
      setActiveLog('White and monochromatic light refracts at boundaries. Dispersion separates wavelengths into a visible spectrum.');
      setPlacedObjects((prev) =>
        prev.map((o) => (o.itemId === 'prism' ? { ...o, state: { ...o.state, activeDispersion: true } } : o))
      );
      return;
    }

    // 7. Biology: Plant Slide + Iodine Staining under Microscope
    if (ids.includes('plant_slide') && ids.includes('iodine')) {
      spawnEffect(objA.x, objA.y, '🔬 Stained Slide: Cell Walls & Nuclei Contrast', '#84cc16');
      setActiveLog('Iodine complexed with cellular amylose/starch, increasing microscopic optical contrast.');
      setPlacedObjects((prev) =>
        prev.map((o) => (o.itemId === 'plant_slide' ? { ...o, state: { ...o.state, stained: true, cellWallVisible: true } } : o))
      );
      return;
    }

    if (ids.includes('microscope') && ids.includes('plant_slide')) {
      spawnEffect(objA.x, objA.y, '🔎 400x Cytology Magnification: Chloroplasts Active', '#06b6d4');
      setActiveLog('High-power objective lens reveals rectangular plant cells, cytoplasm streaming, and green chloroplasts.');
      return;
    }
  };

  const spawnEffect = (x: number, y: number, text: string, color: string) => {
    const id = `eff_${Date.now()}`;
    setReactionEffects((prev) => [...prev, { id, x, y, text, color }]);
    setTimeout(() => {
      setReactionEffects((prev) => prev.filter((e) => e.id !== id));
    }, 2800);
  };

  const handleClearWorkspace = () => {
    setPlacedObjects([]);
    setSelectedInstanceId(null);
    setActiveLog('Workspace cleared.');
  };

  const selectedObject = placedObjects.find((o) => o.instanceId === selectedInstanceId);

  return (
    <div className="flex flex-col h-[calc(100vh-140px)] min-h-[580px] bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl text-slate-100">
      {/* Sandbox Header Bar */}
      <div className="bg-slate-950 border-b border-slate-800 px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-3 shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-600 text-white flex items-center justify-center shadow-md shadow-emerald-500/20">
            <FlaskConical className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="font-black text-lg text-white tracking-tight">Eureka Sandbox</h2>
              <span className="text-[10px] font-mono uppercase font-bold px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800">
                Open Experimentation
              </span>
            </div>
            <p className="text-xs text-slate-400">
              Drag materials into workspace. Bring objects together to observe physical &amp; chemical reactions.
            </p>
          </div>
        </div>

        {/* Subject Selector Tabs */}
        <div className="flex items-center gap-1.5 bg-slate-900 p-1 rounded-2xl border border-slate-800">
          <button
            onClick={() => setSubject('chemistry')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              subject === 'chemistry' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-400 hover:text-white'
            }`}
          >
            <FlaskConical className="w-3.5 h-3.5" />
            <span>Chemistry</span>
          </button>
          <button
            onClick={() => setSubject('physics')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              subject === 'physics' ? 'bg-amber-600 text-white shadow-xs' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Zap className="w-3.5 h-3.5" />
            <span>Physics</span>
          </button>
          <button
            onClick={() => setSubject('biology')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              subject === 'biology' ? 'bg-emerald-600 text-white shadow-xs' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Dna className="w-3.5 h-3.5" />
            <span>Biology</span>
          </button>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleClearWorkspace}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-700 bg-slate-900 hover:bg-slate-800 text-xs font-mono text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            <Trash2 className="w-3.5 h-3.5 text-rose-400" />
            <span>Clear</span>
          </button>
        </div>
      </div>

      {/* Workspace Area: Left Toolbox + Large Interactive Canvas */}
      <div className="flex-1 flex overflow-hidden relative">
        {/* Left Toolbox */}
        <aside className="w-64 sm:w-72 bg-slate-950/80 border-r border-slate-800 p-3.5 flex flex-col shrink-0 overflow-y-auto">
          <span className="text-[11px] font-mono uppercase font-bold text-slate-400 mb-2.5 flex items-center gap-1.5">
            <Plus className="w-3.5 h-3.5 text-blue-400" />
            <span>Available {subject.toUpperCase()} Elements</span>
          </span>

          <div className="space-y-2 flex-1">
            {catalog[subject].map((item) => (
              <div
                key={item.id}
                onClick={() => handleAddItem(item)}
                className="p-3 bg-slate-900 hover:bg-slate-850 border border-slate-800 hover:border-slate-700 rounded-2xl flex items-center justify-between gap-2.5 cursor-pointer transition-all hover:scale-[1.02] shadow-2xs group"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <span className="text-xl shrink-0">{item.icon}</span>
                  <div className="truncate">
                    <span className="text-xs font-bold text-white block truncate group-hover:text-blue-300">
                      {item.name}
                    </span>
                    <span className="text-[10px] text-slate-500 font-mono capitalize">
                      {item.category}
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  className="w-6 h-6 rounded-lg bg-slate-800 group-hover:bg-blue-600 text-slate-300 group-hover:text-white flex items-center justify-center shrink-0 transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>

          <div className="mt-4 p-3 bg-slate-900/60 border border-slate-800/80 rounded-2xl text-[11px] text-slate-400 font-sans leading-relaxed">
            <span className="text-amber-400 font-bold block mb-0.5 flex items-center gap-1">
              <Lightbulb className="w-3 h-3" />
              Experiment Freely:
            </span>
            Click or drag materials into the sandbox. Move items into each other to trigger chemical reactions and circuits.
          </div>
        </aside>

        {/* Large Main Workspace */}
        <div
          ref={workspaceRef}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          className="flex-1 relative overflow-hidden bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] bg-slate-950 select-none cursor-default"
        >
          {/* Reaction Overlay Banner */}
          {activeLog && (
            <div className="absolute top-4 left-4 right-4 z-20 pointer-events-none flex justify-center">
              <div className="bg-slate-900/90 backdrop-blur-md border border-slate-700 px-4 py-2 rounded-2xl text-xs font-mono text-emerald-300 shadow-xl flex items-center gap-2 animate-in fade-in slide-in-from-top-2">
                <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>{activeLog}</span>
              </div>
            </div>
          )}

          {/* Empty Workspace Guide */}
          {placedObjects.length === 0 && (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 pointer-events-none text-slate-600">
              <div className="w-16 h-16 rounded-3xl bg-slate-900/70 border border-slate-800 flex items-center justify-center mb-3 text-slate-500">
                <Compass className="w-8 h-8 animate-spin-slow" />
              </div>
              <h3 className="font-bold text-slate-400 text-sm">Workspace is Empty</h3>
              <p className="text-xs text-slate-500 mt-1 max-w-sm">
                Select materials from the left toolbox to spawn them here. Experiment with heat, acids, bases, batteries, lenses, and living cells.
              </p>
            </div>
          )}

          {/* Placed Interactive Sandbox Objects */}
          {placedObjects.map((obj) => {
            const isSelected = obj.instanceId === selectedInstanceId;

            return (
              <div
                key={obj.instanceId}
                onPointerDown={(e) => handlePointerDown(e, obj)}
                style={{
                  transform: `translate(${obj.x}px, ${obj.y}px)`,
                  touchAction: 'none'
                }}
                className={`absolute top-0 left-0 p-3 rounded-2xl border transition-shadow cursor-grab active:cursor-grabbing flex flex-col items-center justify-center shadow-lg ${
                  isSelected
                    ? 'ring-2 ring-blue-500 bg-slate-850 border-blue-400 shadow-blue-500/20'
                    : 'bg-slate-900/95 border-slate-700 hover:border-slate-500'
                }`}
              >
                {/* Visual Representation */}
                <div className="relative w-12 h-12 flex items-center justify-center text-2xl">
                  {/* Dynamic Color Fluid in Beaker */}
                  {obj.itemId === 'beaker' && (
                    <div
                      className="absolute inset-1 rounded-b-xl opacity-60 transition-colors"
                      style={{ backgroundColor: obj.state.color || '#60a5fa' }}
                    />
                  )}

                  {/* Lit Bulb Glow */}
                  {obj.itemId === 'bulb' && obj.state.lit && (
                    <div className="absolute inset-0 rounded-full bg-yellow-400/40 blur-md animate-pulse" />
                  )}

                  {/* Active Laser Line */}
                  {obj.itemId === 'laser' && obj.state.powered && (
                    <div className="absolute left-10 w-24 h-0.5 bg-rose-500 shadow-[0_0_8px_#f43f5e]" />
                  )}

                  {/* Prism Rainbow Dispersion */}
                  {obj.itemId === 'prism' && obj.state.activeDispersion && (
                    <div className="absolute -right-12 w-16 h-8 bg-gradient-to-r from-red-500 via-green-400 to-indigo-500 opacity-80 blur-2xs" />
                  )}

                  {/* Item Icon */}
                  <span className="relative z-10">
                    {catalog[subject].find((c) => c.id === obj.itemId)?.icon || '📦'}
                  </span>
                </div>

                <span className="text-[11px] font-bold text-white mt-1 text-center whitespace-nowrap px-1 max-w-[120px] truncate">
                  {obj.name}
                </span>

                {/* State Tag */}
                {obj.state.ph !== undefined && (
                  <span className="text-[9px] font-mono text-blue-300 mt-0.5">
                    pH {obj.state.ph.toFixed(1)} • {obj.state.temp}°C
                  </span>
                )}
                {obj.state.lit !== undefined && (
                  <span
                    className={`text-[9px] font-mono mt-0.5 font-bold ${
                      obj.state.lit ? 'text-yellow-300' : 'text-slate-500'
                    }`}
                  >
                    {obj.state.lit ? 'ON (0.90A)' : 'OFF'}
                  </span>
                )}
                {obj.state.stained !== undefined && (
                  <span className="text-[9px] font-mono text-lime-300 mt-0.5">
                    {obj.state.stained ? 'Stained' : 'Unstained'}
                  </span>
                )}
              </div>
            );
          })}

          {/* Floating Reaction Text Badges */}
          {reactionEffects.map((eff) => (
            <div
              key={eff.id}
              className="absolute z-30 pointer-events-none px-3 py-1.5 rounded-xl font-mono text-xs font-black shadow-2xl animate-bounce whitespace-nowrap border"
              style={{
                backgroundColor: '#0f172a',
                borderColor: eff.color,
                color: eff.color,
                transform: `translate(${eff.x}px, ${eff.y - 30}px)`
              }}
            >
              {eff.text}
            </div>
          ))}

          {/* Object Properties Inspector Panel */}
          {selectedObject && (
            <div className="absolute bottom-4 right-4 z-20 w-72 bg-slate-900/95 backdrop-blur-md border border-slate-700 rounded-2xl p-4 shadow-2xl text-xs space-y-2 animate-in zoom-in-95">
              <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                <span className="font-bold text-white text-sm">{selectedObject.name}</span>
                <button
                  type="button"
                  onClick={() => {
                    setPlacedObjects((prev) => prev.filter((o) => o.instanceId !== selectedObject.instanceId));
                    setSelectedInstanceId(null);
                  }}
                  className="text-slate-400 hover:text-rose-400 cursor-pointer"
                  title="Remove from workspace"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="space-y-1 font-mono text-[11px] text-slate-300">
                <div className="flex justify-between">
                  <span className="text-slate-500">Category:</span>
                  <span className="text-indigo-400 capitalize">{selectedObject.category}</span>
                </div>
                {selectedObject.state.temp !== undefined && (
                  <div className="flex justify-between">
                    <span className="text-slate-500">Temperature:</span>
                    <span className="text-amber-400 font-bold">{selectedObject.state.temp} °C</span>
                  </div>
                )}
                {selectedObject.state.ph !== undefined && (
                  <div className="flex justify-between">
                    <span className="text-slate-500">Acidity (pH):</span>
                    <span className="text-emerald-400 font-bold">{selectedObject.state.ph.toFixed(1)}</span>
                  </div>
                )}
                {selectedObject.state.voltage !== undefined && (
                  <div className="flex justify-between">
                    <span className="text-slate-500">Voltage:</span>
                    <span className="text-yellow-400 font-bold">{selectedObject.state.voltage} V</span>
                  </div>
                )}
                {selectedObject.state.resistance !== undefined && (
                  <div className="flex justify-between">
                    <span className="text-slate-500">Resistance:</span>
                    <span className="text-cyan-400 font-bold">{selectedObject.state.resistance} Ω</span>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

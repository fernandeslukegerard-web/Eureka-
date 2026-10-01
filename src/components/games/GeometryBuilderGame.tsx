import React, { useState, useRef } from 'react';
import { Compass, ArrowLeft, RotateCcw, Award, Check } from 'lucide-react';
import confetti from 'canvas-confetti';

interface Point {
  x: number;
  y: number;
  label: string;
}

export const GeometryBuilderGame: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [shapeMode, setShapeMode] = useState<'triangle' | 'quadrilateral'>('triangle');
  const [points, setPoints] = useState<Point[]>([
    { x: 120, y: 260, label: 'A' },
    { x: 380, y: 260, label: 'B' },
    { x: 250, y: 80, label: 'C' }
  ]);

  const [draggingIndex, setDraggingIndex] = useState<number | null>(null);
  const [pythagorasVerified, setPythagorasVerified] = useState<boolean>(false);
  const svgRef = useRef<SVGSVGElement>(null);

  // Switch between Triangle (3 vertices) and Quadrilateral (4 vertices)
  const handleSetShape = (mode: 'triangle' | 'quadrilateral') => {
    setShapeMode(mode);
    if (mode === 'triangle') {
      setPoints([
        { x: 140, y: 260, label: 'A' },
        { x: 380, y: 260, label: 'B' },
        { x: 260, y: 80, label: 'C' }
      ]);
    } else {
      setPoints([
        { x: 140, y: 260, label: 'A' },
        { x: 380, y: 260, label: 'B' },
        { x: 380, y: 100, label: 'C' },
        { x: 140, y: 100, label: 'D' }
      ]);
    }
  };

  // Dragging vertex handlers
  const handlePointerDown = (index: number) => {
    setDraggingIndex(index);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (draggingIndex === null || !svgRef.current) return;
    const rect = svgRef.current.getBoundingClientRect();
    const newX = Math.round(Math.max(20, Math.min(rect.width - 20, e.clientX - rect.left)));
    const newY = Math.round(Math.max(20, Math.min(rect.height - 20, e.clientY - rect.top)));

    setPoints((prev) => {
      const next = [...prev];
      next[draggingIndex] = { ...next[draggingIndex], x: newX, y: newY };
      return next;
    });
  };

  const handlePointerUp = () => {
    setDraggingIndex(null);
  };

  // Calculations
  const dist = (p1: Point, p2: Point) => Math.hypot(p2.x - p1.x, p2.y - p1.y);

  // Sides
  const sideLengths = points.map((p, i) => {
    const nextP = points[(i + 1) % points.length];
    return Math.round(dist(p, nextP) / 10 * 10) / 10;
  });

  const perimeter = Math.round(sideLengths.reduce((acc, len) => acc + len, 0) * 10) / 10;

  // Area (Shoelace formula)
  let area = 0;
  for (let i = 0; i < points.length; i++) {
    const j = (i + 1) % points.length;
    area += points[i].x * points[j].y;
    area -= points[j].x * points[i].y;
  }
  area = Math.round(Math.abs(area) / 200 * 10) / 10;

  // Angles for triangle
  let angleA = 0;
  let angleB = 0;
  let angleC = 0;
  if (shapeMode === 'triangle' && points.length === 3) {
    const a = sideLengths[1]; // BC
    const b = sideLengths[2]; // CA
    const c = sideLengths[0]; // AB
    if (a > 0 && b > 0 && c > 0) {
      angleA = Math.round((Math.acos(Math.max(-1, Math.min(1, (b * b + c * c - a * a) / (2 * b * c)))) * 180) / Math.PI);
      angleB = Math.round((Math.acos(Math.max(-1, Math.min(1, (a * a + c * c - b * b) / (2 * a * c)))) * 180) / Math.PI);
      angleC = Math.max(0, 180 - angleA - angleB);

      // Check if right angle (~90 deg)
      if ((angleA === 90 || angleB === 90 || angleC === 90) && !pythagorasVerified) {
        setPythagorasVerified(true);
        try {
          confetti({ particleCount: 50, spread: 50, origin: { y: 0.6 } });
        } catch {}
      }
    }
  }

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
              <span className="text-xl">📐</span>
              <h2 className="text-xl font-black text-white">Geometry Builder</h2>
              <span className="text-[10px] font-mono uppercase font-bold px-2 py-0.5 rounded-full bg-amber-950 text-amber-300 border border-amber-800">
                Mathematics
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              Interactive Geometric Construction — Drag vertices dynamically to inspect perimeter, area, side ratios, and angle sums.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-800">
            <button
              onClick={() => handleSetShape('triangle')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                shapeMode === 'triangle' ? 'bg-amber-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              Triangle
            </button>
            <button
              onClick={() => handleSetShape('quadrilateral')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                shapeMode === 'quadrilateral' ? 'bg-amber-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              Quadrilateral
            </button>
          </div>
        </div>
      </div>

      {/* Main Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* SVG Interactive Canvas */}
        <div className="lg:col-span-8 bg-slate-950 border border-slate-800 rounded-3xl p-4 overflow-hidden relative flex flex-col items-center">
          <svg
            ref={svgRef}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            viewBox="0 0 540 340"
            className="w-full h-auto max-w-full aspect-[16/10] bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:20px_20px] rounded-2xl touch-none select-none"
          >
            {/* Polygon fill & stroke */}
            <polygon
              points={points.map((p) => `${p.x},${p.y}`).join(' ')}
              className="fill-amber-500/20 stroke-amber-400 stroke-2"
            />

            {/* Draggable Vertices */}
            {points.map((p, i) => (
              <g
                key={i}
                onPointerDown={() => handlePointerDown(i)}
                className="cursor-grab active:cursor-grabbing"
              >
                <circle cx={p.x} cy={p.y} r={14} className="fill-amber-500/30 stroke-amber-400 stroke-2" />
                <circle cx={p.x} cy={p.y} r={6} className="fill-white" />
                <text
                  x={p.x}
                  y={p.y - 18}
                  textAnchor="middle"
                  className="fill-amber-300 font-mono text-xs font-bold pointer-events-none"
                >
                  {p.label} ({p.x}, {p.y})
                </text>
              </g>
            ))}
          </svg>

          <span className="text-[11px] font-mono text-slate-500 mt-2">
            Drag any vertex point (A, B, C) to dynamically transform angles and side lengths.
          </span>
        </div>

        {/* Real-time Geometric Measurements */}
        <div className="lg:col-span-4 space-y-4 bg-slate-950 border border-slate-800 rounded-3xl p-5">
          <h3 className="text-xs font-mono uppercase font-extrabold tracking-wider text-slate-400 flex items-center gap-2">
            <Compass className="w-4 h-4 text-amber-400" />
            <span>Geometric Measurements</span>
          </h3>

          <div className="p-4 bg-slate-900 border border-slate-800 rounded-2xl space-y-2">
            <div className="flex justify-between items-center text-xs font-mono">
              <span className="text-slate-400">Total Perimeter:</span>
              <span className="text-amber-400 font-bold text-sm">{perimeter} cm</span>
            </div>
            <div className="flex justify-between items-center text-xs font-mono">
              <span className="text-slate-400">Enclosed Area:</span>
              <span className="text-cyan-400 font-bold text-sm">{area} cm²</span>
            </div>
          </div>

          {/* Angles */}
          {shapeMode === 'triangle' && (
            <div className="p-4 bg-slate-900 border border-slate-800 rounded-2xl space-y-2">
              <span className="text-[10px] font-mono uppercase font-bold text-slate-400 block mb-1">
                Interior Angles (Sum = 180°)
              </span>
              <div className="grid grid-cols-3 gap-1 text-center font-mono text-xs">
                <div className="p-2 bg-slate-950 rounded-xl">
                  <span className="text-slate-500 block text-[9px]">∠A</span>
                  <span className="font-bold text-white">{angleA}°</span>
                </div>
                <div className="p-2 bg-slate-950 rounded-xl">
                  <span className="text-slate-500 block text-[9px]">∠B</span>
                  <span className="font-bold text-white">{angleB}°</span>
                </div>
                <div className="p-2 bg-slate-950 rounded-xl">
                  <span className="text-slate-500 block text-[9px]">∠C</span>
                  <span className="font-bold text-white">{angleC}°</span>
                </div>
              </div>
            </div>
          )}

          {/* Pythagoras Detection Card */}
          {pythagorasVerified && (
            <div className="p-3.5 bg-emerald-950/50 border border-emerald-800/80 rounded-2xl text-xs font-mono text-emerald-300 flex items-center gap-2 animate-in fade-in">
              <Check className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Right Angle Detected! Pythagorean Theorem Holds: a² + b² = c²</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

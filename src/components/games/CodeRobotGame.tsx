import React, { useState } from 'react';
import {
  Laptop,
  ArrowLeft,
  Play,
  RotateCcw,
  CheckCircle,
  Plus,
  Trash2,
  Bug,
  Pause,
  ChevronRight,
  Sparkles,
  Bot
} from 'lucide-react';
import confetti from 'canvas-confetti';

type CommandType = 'FORWARD' | 'TURN_LEFT' | 'TURN_RIGHT' | 'COLLECT' | 'REPEAT_2';

interface GridCell {
  type: 'empty' | 'wall' | 'core' | 'goal';
}

export const CodeRobotGame: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  // 5x5 Maze Grid
  // (0,0) is top-left, Goal at (4,4)
  const [initialGrid] = useState<GridCell[][]>([
    [{ type: 'empty' }, { type: 'wall' }, { type: 'empty' }, { type: 'empty' }, { type: 'empty' }],
    [{ type: 'empty' }, { type: 'empty' }, { type: 'empty' }, { type: 'wall' }, { type: 'empty' }],
    [{ type: 'wall' }, { type: 'empty' }, { type: 'core' }, { type: 'empty' }, { type: 'empty' }],
    [{ type: 'empty' }, { type: 'empty' }, { type: 'wall' }, { type: 'empty' }, { type: 'empty' }],
    [{ type: 'empty' }, { type: 'empty' }, { type: 'empty' }, { type: 'empty' }, { type: 'goal' }]
  ]);

  const [robotPos, setRobotPos] = useState<{ x: number; y: number; dir: 0 | 1 | 2 | 3 }>({
    x: 0,
    y: 0,
    dir: 1 // 0: North, 1: East, 2: South, 3: West
  });

  const [program, setProgram] = useState<CommandType[]>([
    'FORWARD',
    'TURN_RIGHT',
    'FORWARD',
    'FORWARD',
    'TURN_LEFT',
    'FORWARD',
    'COLLECT',
    'FORWARD',
    'TURN_RIGHT',
    'FORWARD',
    'FORWARD'
  ]);

  const [collectedCores, setCollectedCores] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(-1);
  const [executionLog, setExecutionLog] = useState<string>('Program idle. Press Run Program to execute.');
  const [hasReachedGoal, setHasReachedGoal] = useState<boolean>(false);

  const handleAddCommand = (cmd: CommandType) => {
    setProgram((prev) => [...prev, cmd]);
  };

  const handleClearProgram = () => {
    setProgram([]);
    handleReset();
  };

  const handleReset = () => {
    setRobotPos({ x: 0, y: 0, dir: 1 });
    setIsRunning(false);
    setCurrentStepIndex(-1);
    setCollectedCores(0);
    setHasReachedGoal(false);
    setExecutionLog('Robot reset to launchpad (0,0) facing East.');
  };

  const handleRunProgram = async () => {
    if (isRunning) return;
    setIsRunning(true);
    setHasReachedGoal(false);
    setRobotPos({ x: 0, y: 0, dir: 1 });
    setCollectedCores(0);

    let curX = 0;
    let curY = 0;
    let curDir: 0 | 1 | 2 | 3 = 1;
    let cores = 0;

    for (let i = 0; i < program.length; i++) {
      setCurrentStepIndex(i);
      const cmd = program[i];

      // Delay for visible execution
      await new Promise((resolve) => setTimeout(resolve, 450));

      if (cmd === 'FORWARD') {
        const dx = [0, 1, 0, -1][curDir];
        const dy = [-1, 0, 1, 0][curDir];
        const targetX = curX + dx;
        const targetY = curY + dy;

        if (
          targetX < 0 ||
          targetX >= 5 ||
          targetY < 0 ||
          targetY >= 5 ||
          initialGrid[targetY][targetX].type === 'wall'
        ) {
          setExecutionLog(`⚠️ Collision at step ${i + 1}! Wall/boundary blocked at (${targetX}, ${targetY}).`);
          setIsRunning(false);
          return;
        }

        curX = targetX;
        curY = targetY;
        setRobotPos({ x: curX, y: curY, dir: curDir });
      } else if (cmd === 'TURN_LEFT') {
        curDir = ((curDir + 3) % 4) as any;
        setRobotPos({ x: curX, y: curY, dir: curDir });
      } else if (cmd === 'TURN_RIGHT') {
        curDir = ((curDir + 1) % 4) as any;
        setRobotPos({ x: curX, y: curY, dir: curDir });
      } else if (cmd === 'COLLECT') {
        if (initialGrid[curY][curX].type === 'core') {
          cores++;
          setCollectedCores(cores);
          setExecutionLog(`✨ Energy Core collected at (${curX}, ${curY})!`);
        }
      }

      if (initialGrid[curY][curX].type === 'goal') {
        setHasReachedGoal(true);
        setExecutionLog('🎉 Terminal Reached! Algorithm executed successfully!');
        try {
          confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });
        } catch {}
        setIsRunning(false);
        return;
      }
    }

    setIsRunning(false);
    if (initialGrid[curY][curX].type !== 'goal') {
      setExecutionLog('End of program. Robot did not reach terminal yet. Debug and add more commands.');
    }
  };

  const dirArrow = ['▲ North', '▶ East', '▼ South', '◀ West'][robotPos.dir];

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
              <span className="text-xl">💻</span>
              <h2 className="text-xl font-black text-white">Code Robot</h2>
              <span className="text-[10px] font-mono uppercase font-bold px-2 py-0.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800">
                Computer Science
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              Algorithmic Sequence &amp; Debugging — Program the rover with step-by-step instructions to collect cores and navigate to the goal.
            </p>
          </div>
        </div>

        <button
          onClick={handleReset}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-700 bg-slate-950 hover:bg-slate-800 text-xs font-mono text-slate-300 hover:text-white transition-colors cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset Robot</span>
        </button>
      </div>

      {/* Main Grid: Code Workspace + 5x5 Execution Arena */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Command Palette & Code Stack */}
        <div className="lg:col-span-5 space-y-4 bg-slate-950 border border-slate-800 rounded-3xl p-5">
          <h3 className="text-xs font-mono uppercase font-extrabold tracking-wider text-slate-400 flex items-center justify-between">
            <span>Algorithm Program Stack ({program.length} instructions)</span>
            <button
              onClick={handleClearProgram}
              className="text-[10px] text-rose-400 hover:underline cursor-pointer"
            >
              Clear Code
            </button>
          </h3>

          {/* Palette Buttons */}
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => handleAddCommand('FORWARD')}
              className="py-2 px-3 bg-slate-900 hover:bg-cyan-950/60 border border-slate-800 hover:border-cyan-700 text-xs font-mono font-bold text-cyan-300 rounded-xl transition-all cursor-pointer flex items-center gap-1.5"
            >
              <span>+ FORWARD</span>
            </button>
            <button
              onClick={() => handleAddCommand('TURN_LEFT')}
              className="py-2 px-3 bg-slate-900 hover:bg-cyan-950/60 border border-slate-800 hover:border-cyan-700 text-xs font-mono font-bold text-cyan-300 rounded-xl transition-all cursor-pointer flex items-center gap-1.5"
            >
              <span>+ TURN_LEFT ↺</span>
            </button>
            <button
              onClick={() => handleAddCommand('TURN_RIGHT')}
              className="py-2 px-3 bg-slate-900 hover:bg-cyan-950/60 border border-slate-800 hover:border-cyan-700 text-xs font-mono font-bold text-cyan-300 rounded-xl transition-all cursor-pointer flex items-center gap-1.5"
            >
              <span>+ TURN_RIGHT ↻</span>
            </button>
            <button
              onClick={() => handleAddCommand('COLLECT')}
              className="py-2 px-3 bg-slate-900 hover:bg-amber-950/60 border border-slate-800 hover:border-amber-700 text-xs font-mono font-bold text-amber-300 rounded-xl transition-all cursor-pointer flex items-center gap-1.5"
            >
              <span>+ COLLECT 💎</span>
            </button>
          </div>

          {/* Program Instruction List */}
          <div className="h-56 overflow-y-auto bg-slate-900/90 rounded-2xl p-2.5 border border-slate-800 space-y-1 font-mono text-xs">
            {program.length === 0 ? (
              <span className="text-slate-500 block p-3 text-center">Add commands from above to build your program.</span>
            ) : (
              program.map((cmd, idx) => (
                <div
                  key={idx}
                  className={`p-2 rounded-xl flex items-center justify-between transition-all ${
                    idx === currentStepIndex
                      ? 'bg-cyan-500/20 border border-cyan-400 text-cyan-200 font-bold scale-[1.01]'
                      : 'bg-slate-950/60 border border-slate-800/80 text-slate-300'
                  }`}
                >
                  <span className="text-slate-500 text-[10px] w-6">#{idx + 1}</span>
                  <span className="flex-1 font-bold">{cmd}</span>
                  <button
                    onClick={() => setProgram((prev) => prev.filter((_, i) => i !== idx))}
                    className="text-slate-500 hover:text-rose-400 p-0.5 cursor-pointer"
                  >
                    ×
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Action Run Button */}
          <button
            onClick={handleRunProgram}
            disabled={isRunning || program.length === 0}
            className="w-full py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold rounded-xl text-xs sm:text-sm shadow-md transition-all cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50"
          >
            <Play className="w-4 h-4 fill-current" />
            <span>{isRunning ? 'Executing Program...' : 'Run Program'}</span>
          </button>
        </div>

        {/* Right: 5x5 Maze Arena */}
        <div className="lg:col-span-7 space-y-4 flex flex-col items-center">
          <div className="w-full max-w-md aspect-square bg-slate-950 border border-slate-800 rounded-3xl p-3 grid grid-cols-5 gap-2 shadow-2xl">
            {initialGrid.map((row, y) =>
              row.map((cell, x) => {
                const isRobotHere = robotPos.x === x && robotPos.y === y;

                return (
                  <div
                    key={`${x}-${y}`}
                    className={`rounded-2xl border flex items-center justify-center relative transition-all ${
                      cell.type === 'wall'
                        ? 'bg-slate-800 border-slate-700 shadow-inner'
                        : cell.type === 'goal'
                        ? 'bg-emerald-950/50 border-emerald-500/80 shadow-[0_0_12px_rgba(16,185,129,0.3)]'
                        : cell.type === 'core' && collectedCores === 0
                        ? 'bg-amber-950/30 border-amber-600/50'
                        : 'bg-slate-900 border-slate-800/80'
                    }`}
                  >
                    {/* Goal Terminal */}
                    {cell.type === 'goal' && (
                      <span className="text-xl animate-pulse">🏁</span>
                    )}

                    {/* Core */}
                    {cell.type === 'core' && collectedCores === 0 && (
                      <span className="text-lg">💎</span>
                    )}

                    {/* Robot */}
                    {isRobotHere && (
                      <div className="absolute inset-1 rounded-xl bg-cyan-500 text-slate-950 flex flex-col items-center justify-center font-bold text-xs shadow-lg shadow-cyan-500/40 transform transition-transform">
                        <Bot className="w-5 h-5 text-slate-950" />
                        <span className="text-[8px] font-mono leading-none mt-0.5">
                          {['N', 'E', 'S', 'W'][robotPos.dir]}
                        </span>
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>

          {/* Telemetry Log */}
          <div className="w-full max-w-md p-3.5 bg-slate-950 border border-slate-800 rounded-2xl text-xs font-mono flex items-center justify-between">
            <span className="text-slate-400">Orientation: <strong className="text-cyan-400">{dirArrow}</strong></span>
            <span className="text-slate-400">Energy Cores: <strong className="text-amber-400">{collectedCores} / 1</strong></span>
          </div>

          <div className="w-full max-w-md p-3 bg-slate-900 border border-slate-800 rounded-xl text-[11px] font-mono text-slate-300">
            {executionLog}
          </div>
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { UserProfile, StudentProgress } from '../../types';
import {
  Gamepad2,
  Atom,
  Flame,
  Rocket,
  Dna,
  Compass,
  TrendingUp,
  Receipt,
  Bot,
  Briefcase,
  Play,
  Sparkles,
  Trophy,
  Filter
} from 'lucide-react';
import { ParticleFactoryGame } from '../games/ParticleFactoryGame';
import { SpaceMissionGame } from '../games/SpaceMissionGame';
import { GeneticsLabGame } from '../games/GeneticsLabGame';
import { GeometryBuilderGame } from '../games/GeometryBuilderGame';
import { TradeChallengeGame } from '../games/TradeChallengeGame';
import { BusinessDayGame } from '../games/BusinessDayGame';
import { CodeRobotGame } from '../games/CodeRobotGame';
import { EntrepreneurChallengeGame } from '../games/EntrepreneurChallengeGame';

interface GamesViewProps {
  profile: UserProfile;
  progress: StudentProgress;
}

type GameId =
  | 'particle-factory'
  | 'space-mission'
  | 'genetics-lab'
  | 'geometry-builder'
  | 'trade-challenge'
  | 'business-day'
  | 'code-robot'
  | 'entrepreneur-challenge';

interface GameMetadata {
  id: GameId;
  title: string;
  subject: string;
  subjectCategory: 'science' | 'math' | 'humanities' | 'tech';
  badge: string;
  description: string;
  learningFocus: string;
  gradient: string;
  icon: React.ElementType;
  component: React.ComponentType<{ onBack: () => void }>;
}

export const GamesView: React.FC<GamesViewProps> = ({ profile }) => {
  const [activeGameId, setActiveGameId] = useState<GameId | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const games: GameMetadata[] = [
    {
      id: 'particle-factory',
      title: 'Particle Factory',
      subject: 'Chemistry',
      subjectCategory: 'science',
      badge: '🧪 State of Matter',
      description:
        'Manipulate temperature, pressure, volume, and particle counts to observe kinetic particle model dynamics and phase transitions.',
      learningFocus: 'Kinetic Theory • Gas Laws • Collision Frequency',
      gradient: 'from-amber-500 via-orange-500 to-rose-600',
      icon: Flame,
      component: ParticleFactoryGame
    },
    {
      id: 'space-mission',
      title: 'Space Mission',
      subject: 'Physics',
      subjectCategory: 'science',
      badge: '⚡ Mechanics & Gravity',
      description:
        'Command a lunar descent module. Manage thrust, mass, gravity, and fuel consumption to execute a safe soft landing on the Moon.',
      learningFocus: 'Newton’s 2nd Law • Gravitational Acceleration • Kinetic Energy',
      gradient: 'from-blue-600 via-indigo-600 to-violet-700',
      icon: Rocket,
      component: SpaceMissionGame
    },
    {
      id: 'genetics-lab',
      title: 'Genetics Lab',
      subject: 'Biology',
      subjectCategory: 'science',
      badge: '🧬 Inheritance & DNA',
      description:
        'Cross allele pairs in real-time Punnett squares. Test dominant vs recessive inheritance and breed rare creature phenotypes.',
      learningFocus: 'Mendelian Genetics • Alleles • Genotype vs Phenotype',
      gradient: 'from-emerald-500 via-teal-600 to-cyan-600',
      icon: Dna,
      component: GeneticsLabGame
    },
    {
      id: 'geometry-builder',
      title: 'Geometry Builder',
      subject: 'Mathematics',
      subjectCategory: 'math',
      badge: '📐 Coordinate Geometry',
      description:
        'Construct interactive 2D polygons, drag vertices, measure real-time interior angles, and verify the Pythagorean theorem.',
      learningFocus: 'Trigonometry • Pythagorean Theorem • Polygon Interior Angles',
      gradient: 'from-purple-600 via-fuchsia-600 to-pink-600',
      icon: Compass,
      component: GeometryBuilderGame
    },
    {
      id: 'trade-challenge',
      title: 'Global Trade Challenge',
      subject: 'Economics',
      subjectCategory: 'humanities',
      badge: '📈 Macroeconomics',
      description:
        'Set national tariffs, balance exchange rates, and monitor consumer price indices against real-world WTO benchmark metrics.',
      learningFocus: 'Tariffs & Subsidies • Balance of Payments • Inflation Dynamics',
      gradient: 'from-teal-600 via-emerald-600 to-green-700',
      icon: TrendingUp,
      component: TradeChallengeGame
    },
    {
      id: 'business-day',
      title: 'Business Day Simulator',
      subject: 'Commerce & Accounting',
      subjectCategory: 'humanities',
      badge: '💼 Double-Entry System',
      description:
        'Process daily customer orders, credit purchases, and operating costs while balancing the Fundamental Accounting Equation.',
      learningFocus: 'Assets = Liabilities + Equity • Cash Flow • Working Capital',
      gradient: 'from-amber-600 via-yellow-600 to-orange-700',
      icon: Receipt,
      component: BusinessDayGame
    },
    {
      id: 'code-robot',
      title: 'Code the Robot',
      subject: 'Computer Science',
      subjectCategory: 'tech',
      badge: '💻 Algorithms & Loops',
      description:
        'Assemble sequential instructions and loops to guide a robot through maze grids to harvest computational cores.',
      learningFocus: 'Algorithmic Thinking • Repeat Loops • Step Debugging',
      gradient: 'from-indigo-600 via-blue-600 to-sky-600',
      icon: Bot,
      component: CodeRobotGame
    },
    {
      id: 'entrepreneur-challenge',
      title: 'Entrepreneur Challenge',
      subject: 'Business Studies',
      subjectCategory: 'humanities',
      badge: '🚀 Venture Strategy',
      description:
        'Scale a startup enterprise across 4 fiscal quarters by adjusting product pricing, hiring staff, and allocating marketing budgets.',
      learningFocus: 'Unit Economics • Customer Acquisition • Profit Margins',
      gradient: 'from-rose-600 via-pink-600 to-purple-700',
      icon: Briefcase,
      component: EntrepreneurChallengeGame
    }
  ];

  // If a game is active, render it
  if (activeGameId) {
    const selected = games.find((g) => g.id === activeGameId);
    if (selected) {
      const GameComponent = selected.component;
      return (
        <div className="animate-in fade-in duration-200">
          <GameComponent onBack={() => setActiveGameId(null)} />
        </div>
      );
    }
  }

  const filteredGames = games.filter((g) => {
    if (filterCategory === 'all') return true;
    return g.subjectCategory === filterCategory;
  });

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Hero Header */}
      <section className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-indigo-100/60 via-purple-50/40 to-transparent rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase tracking-wider font-extrabold text-indigo-700 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200 flex items-center gap-1.5">
                <Gamepad2 className="w-3.5 h-3.5" />
                Conceptual STEM &amp; Social Science Games
              </span>
              <span className="text-xs font-mono text-slate-400">• Grade {profile.grade}</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-medium text-slate-600 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-full">
              <Trophy className="w-4 h-4 text-amber-500" />
              <span>Interactive Simulations</span>
            </div>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Eureka Subject Games
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl leading-relaxed">
            Hands-on learning games engineered directly around syllabus concepts. Every control,
            slider, and simulation rule is governed by real scientific and mathematical principles.
          </p>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pt-6 pb-1 scrollbar-none">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-1 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" /> Filter:
            </span>
            {[
              { id: 'all', label: 'All Games' },
              { id: 'science', label: 'Sciences' },
              { id: 'math', label: 'Mathematics' },
              { id: 'humanities', label: 'Business & Social' },
              { id: 'tech', label: 'Tech & CS' }
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setFilterCategory(f.id)}
                className={`text-xs font-bold px-3.5 py-1.5 rounded-xl border transition-all shrink-0 cursor-pointer ${
                  filterCategory === f.id
                    ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs'
                    : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Primary Featured Games Grid */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-black text-slate-900 tracking-tight">Interactive Challenges</h2>
            <p className="text-xs text-slate-500">Select a game to start experimenting with live physics, biology, and math models</p>
          </div>
          <span className="text-xs font-mono font-bold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-lg border border-indigo-100">
            {filteredGames.length} Available
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredGames.map((game) => {
            const Icon = game.icon;
            return (
              <div
                key={game.id}
                onClick={() => setActiveGameId(game.id)}
                className="group bg-white border border-slate-200/90 rounded-3xl p-6 shadow-xs hover:shadow-md hover:border-indigo-300 transition-all cursor-pointer flex flex-col justify-between relative overflow-hidden"
              >
                {/* Accent top gradient stripe */}
                <div className={`h-1.5 w-full bg-gradient-to-r ${game.gradient} absolute top-0 left-0`} />

                <div>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${game.gradient} text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                            {game.subject}
                          </span>
                        </div>
                        <h3 className="text-lg font-black text-slate-900 group-hover:text-indigo-600 transition-colors">
                          {game.title}
                        </h3>
                      </div>
                    </div>
                    <span className="text-[11px] font-bold text-slate-600 bg-slate-100 border border-slate-200 px-2.5 py-1 rounded-full shrink-0">
                      {game.badge}
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed mt-2 mb-4">
                    {game.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-500">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                    <span>{game.learningFocus}</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs font-bold text-indigo-600 group-hover:translate-x-0.5 transition-transform">
                    <span>Play Now</span>
                    <Play className="w-3.5 h-3.5 fill-current" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

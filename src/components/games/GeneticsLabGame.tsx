import React, { useState } from 'react';
import { Dna, ArrowLeft, RotateCcw, Check, Sparkles, Award } from 'lucide-react';
import confetti from 'canvas-confetti';

interface AllelePair {
  allele1: 'B' | 'b';
  allele2: 'B' | 'b';
}

export const GeneticsLabGame: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [parent1, setParent1] = useState<AllelePair>({ allele1: 'B', allele2: 'b' });
  const [parent2, setParent2] = useState<AllelePair>({ allele1: 'B', allele2: 'b' });
  const [sampleOffspring, setSampleOffspring] = useState<{ BB: number; Bb: number; bb: number } | null>(null);
  const [challengeCompleted, setChallengeCompleted] = useState<boolean>(false);

  // Punnett Square quadrants
  const q1 = `${parent1.allele1}${parent2.allele1}`.split('').sort().join(''); // BB, Bb, or bb
  const q2 = `${parent1.allele1}${parent2.allele2}`.split('').sort().join('');
  const q3 = `${parent1.allele2}${parent2.allele1}`.split('').sort().join('');
  const q4 = `${parent1.allele2}${parent2.allele2}`.split('').sort().join('');
  const quadrants = [q1, q2, q3, q4];

  const dominantCount = quadrants.filter((q) => q.includes('B')).length;
  const recessiveCount = quadrants.filter((q) => q === 'bb').length;

  const handleSimulatePopulation = () => {
    let bbCount = 0;
    let BbCount = 0;
    let BBCount = 0;

    for (let i = 0; i < 100; i++) {
      const g1 = Math.random() < 0.5 ? parent1.allele1 : parent1.allele2;
      const g2 = Math.random() < 0.5 ? parent2.allele1 : parent2.allele2;
      const genotype = `${g1}${g2}`.split('').sort().join('');
      if (genotype === 'BB') BBCount++;
      else if (genotype === 'Bb') BbCount++;
      else bbCount++;
    }

    setSampleOffspring({ BB: BBCount, Bb: BbCount, bb: bbCount });

    // Check challenge: breeding a homozygous recessive (bb) offspring
    if (bbCount > 0) {
      setChallengeCompleted(true);
      try {
        confetti({ particleCount: 50, spread: 60, origin: { y: 0.6 } });
      } catch {}
    }
  };

  const getCreatureAppearance = (genotype: string) => {
    // Dominant 'B': Purple Bioluminescent Wings & Brown Eyes
    // Recessive 'bb': Electric Cyan Wings & Blue Eyes
    const isDominant = genotype.includes('B');
    return {
      emoji: isDominant ? '🦋' : '❄️',
      phenotype: isDominant ? 'Dominant Purple Shimmer (B_)' : 'Recessive Cyan Glow (bb)',
      color: isDominant ? '#a855f7' : '#06b6d4'
    };
  };

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
              <span className="text-xl">🧬</span>
              <h2 className="text-xl font-black text-white">Genetics Lab: Allele Inheritance</h2>
              <span className="text-[10px] font-mono uppercase font-bold px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800">
                Biology
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              Mendelian Genetics — Select parent genotypes, cross alleles in the Punnett Square, and observe phenotypic expression.
            </p>
          </div>
        </div>

        <button
          onClick={() => {
            setParent1({ allele1: 'B', allele2: 'b' });
            setParent2({ allele1: 'B', allele2: 'b' });
            setSampleOffspring(null);
            setChallengeCompleted(false);
          }}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-700 bg-slate-950 hover:bg-slate-800 text-xs font-mono text-slate-300 hover:text-white transition-colors cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset Alleles</span>
        </button>
      </div>

      {/* Main Grid: Parents Selection + Punnett Square + Offspring Generator */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Parent Genotype Configuration */}
        <div className="lg:col-span-4 space-y-5 bg-slate-950 border border-slate-800 rounded-3xl p-5">
          <h3 className="text-xs font-mono uppercase font-extrabold tracking-wider text-slate-400 flex items-center gap-2">
            <Dna className="w-4 h-4 text-emerald-400" />
            <span>Parent Cross Settings</span>
          </h3>

          {/* Parent 1 */}
          <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold text-white">Parent 1 (Maternal)</span>
              <span className="text-xs font-mono font-bold text-indigo-400">
                {parent1.allele1}{parent1.allele2} ({getCreatureAppearance(`${parent1.allele1}${parent1.allele2}`).emoji})
              </span>
            </div>
            <div className="grid grid-cols-3 gap-1.5">
              {(['BB', 'Bb', 'bb'] as const).map((pair) => (
                <button
                  key={pair}
                  type="button"
                  onClick={() => setParent1({ allele1: pair[0] as any, allele2: pair[1] as any })}
                  className={`py-1.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                    `${parent1.allele1}${parent1.allele2}` === pair
                      ? 'bg-emerald-600 text-white shadow-xs'
                      : 'bg-slate-950 border border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  {pair}
                </button>
              ))}
            </div>
          </div>

          {/* Parent 2 */}
          <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold text-white">Parent 2 (Paternal)</span>
              <span className="text-xs font-mono font-bold text-indigo-400">
                {parent2.allele1}{parent2.allele2} ({getCreatureAppearance(`${parent2.allele1}${parent2.allele2}`).emoji})
              </span>
            </div>
            <div className="grid grid-cols-3 gap-1.5">
              {(['BB', 'Bb', 'bb'] as const).map((pair) => (
                <button
                  key={pair}
                  type="button"
                  onClick={() => setParent2({ allele1: pair[0] as any, allele2: pair[1] as any })}
                  className={`py-1.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                    `${parent2.allele1}${parent2.allele2}` === pair
                      ? 'bg-emerald-600 text-white shadow-xs'
                      : 'bg-slate-950 border border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  {pair}
                </button>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={handleSimulatePopulation}
            className="w-full py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold rounded-xl text-xs sm:text-sm shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>Generate 100 Offspring Trials</span>
          </button>
        </div>

        {/* Punnett Square Display */}
        <div className="lg:col-span-8 space-y-5">
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-5 sm:p-6 space-y-4">
            <h3 className="font-extrabold text-sm text-white flex items-center gap-2">
              <span>Interactive Punnett Square Grid</span>
            </h3>

            {/* Punnett Grid */}
            <div className="max-w-md mx-auto grid grid-cols-3 gap-2 p-3 bg-slate-900/80 rounded-2xl border border-slate-800 text-center font-mono">
              <div className="p-3 bg-transparent text-slate-500 text-xs font-bold">♀ \ ♂</div>
              <div className="p-3 bg-slate-800/80 rounded-xl text-amber-400 font-bold text-sm">
                Gamete: {parent2.allele1}
              </div>
              <div className="p-3 bg-slate-800/80 rounded-xl text-amber-400 font-bold text-sm">
                Gamete: {parent2.allele2}
              </div>

              <div className="p-3 bg-slate-800/80 rounded-xl text-cyan-400 font-bold text-sm flex items-center justify-center">
                Gamete: {parent1.allele1}
              </div>
              <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 flex flex-col items-center">
                <span className="text-base font-black text-white">{q1}</span>
                <span className="text-xl mt-1">{getCreatureAppearance(q1).emoji}</span>
              </div>
              <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 flex flex-col items-center">
                <span className="text-base font-black text-white">{q2}</span>
                <span className="text-xl mt-1">{getCreatureAppearance(q2).emoji}</span>
              </div>

              <div className="p-3 bg-slate-800/80 rounded-xl text-cyan-400 font-bold text-sm flex items-center justify-center">
                Gamete: {parent1.allele2}
              </div>
              <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 flex flex-col items-center">
                <span className="text-base font-black text-white">{q3}</span>
                <span className="text-xl mt-1">{getCreatureAppearance(q3).emoji}</span>
              </div>
              <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 flex flex-col items-center">
                <span className="text-base font-black text-white">{q4}</span>
                <span className="text-xl mt-1">{getCreatureAppearance(q4).emoji}</span>
              </div>
            </div>

            {/* Theoretical Mendelian Ratio */}
            <div className="grid grid-cols-2 gap-3 text-xs font-mono">
              <div className="p-3 rounded-xl bg-purple-950/40 border border-purple-800/60 text-center">
                <span className="text-purple-300 font-bold block">Dominant Trait (Purple 🦋)</span>
                <span className="text-lg font-black text-white">{dominantCount * 25}%</span>
                <span className="text-[10px] text-purple-400 block mt-0.5">{dominantCount} / 4 Probability</span>
              </div>
              <div className="p-3 rounded-xl bg-cyan-950/40 border border-cyan-800/60 text-center">
                <span className="text-cyan-300 font-bold block">Recessive Trait (Cyan ❄️)</span>
                <span className="text-lg font-black text-white">{recessiveCount * 25}%</span>
                <span className="text-[10px] text-cyan-400 block mt-0.5">{recessiveCount} / 4 Probability</span>
              </div>
            </div>
          </div>

          {/* Statistical Generation Results */}
          {sampleOffspring && (
            <div className="p-5 rounded-3xl bg-slate-950 border border-slate-800 space-y-3 animate-in fade-in">
              <h4 className="text-xs font-mono uppercase font-bold text-slate-400 flex items-center justify-between">
                <span>100-Trial Offspring Empirical Distribution</span>
                <span className="text-emerald-400 font-bold">Mendelian Consistency: ~{(sampleOffspring.BB + sampleOffspring.Bb)}% Dom / {sampleOffspring.bb}% Rec</span>
              </h4>

              <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono">
                <div className="p-3 bg-slate-900 rounded-xl">
                  <span className="text-slate-500 block text-[10px]">Homozygous Dominant (BB)</span>
                  <span className="text-base font-black text-white">{sampleOffspring.BB}</span>
                </div>
                <div className="p-3 bg-slate-900 rounded-xl">
                  <span className="text-slate-500 block text-[10px]">Heterozygous (Bb)</span>
                  <span className="text-base font-black text-white">{sampleOffspring.Bb}</span>
                </div>
                <div className="p-3 bg-slate-900 rounded-xl">
                  <span className="text-slate-500 block text-[10px]">Homozygous Recessive (bb)</span>
                  <span className="text-base font-black text-cyan-400">{sampleOffspring.bb}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

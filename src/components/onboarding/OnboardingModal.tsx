import React, { useState } from 'react';
import { UserProfile, GradeLevel } from '../../types';
import { Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

interface OnboardingModalProps {
  onComplete: (profile: UserProfile) => void;
}

export const OnboardingModal: React.FC<OnboardingModalProps> = ({ onComplete }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState<number>(14);
  const [grade, setGrade] = useState<GradeLevel>(9);
  const [gender, setGender] = useState<'male' | 'female' | 'other' | 'prefer_not_to_say'>('prefer_not_to_say');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Please enter your name.');
      return;
    }
    const profile: UserProfile = {
      name: name.trim(),
      age: Number(age),
      grade: Number(grade) as GradeLevel,
      gender,
      onboardingCompleted: true,
      createdAt: new Date().toISOString()
    };
    onComplete(profile);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl animate-in zoom-in-95 duration-200">
        <div className="text-center mb-6">
          <div className="inline-flex p-3 rounded-2xl bg-blue-500/10 text-blue-400 mb-3 border border-blue-500/20">
            <Sparkles className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-black text-white tracking-tight">Welcome to Eureka</h2>
          <p className="text-sm text-slate-400 mt-1">
            Interactive science & academic lab. Configure your student profile.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Exactly ONE Name Field */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
              Full Name
            </label>
            <input
              type="text"
              placeholder="e.g. Maya Chen"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                if (error) setError('');
              }}
              className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors text-sm"
              autoFocus
            />
            {error && <p className="text-xs text-rose-400 mt-1">{error}</p>}
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Age */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                Age
              </label>
              <input
                type="number"
                min="10"
                max="19"
                value={age}
                onChange={(e) => setAge(parseInt(e.target.value, 10))}
                className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-blue-500 transition-colors text-sm"
              />
            </div>

            {/* Gender */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                Gender
              </label>
              <select
                value={gender}
                onChange={(e: any) => setGender(e.target.value)}
                className="w-full px-3 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-blue-500 transition-colors text-sm cursor-pointer"
              >
                <option value="prefer_not_to_say">Prefer not to say</option>
                <option value="female">Female</option>
                <option value="male">Male</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          {/* Grade Level Selection (Persists strictly!) */}
          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                Select Your Grade
              </label>
              <span className="text-[11px] text-blue-400 font-semibold">
                {grade <= 8 ? 'General Science' : 'Specialised STEM & Business'}
              </span>
            </div>

            <div className="grid grid-cols-5 gap-2">
              {([6, 7, 8, 9, 10] as GradeLevel[]).map((g) => (
                <button
                  key={g}
                  type="button"
                  onClick={() => setGrade(g)}
                  className={`py-2.5 rounded-xl text-sm font-bold border transition-all cursor-pointer ${
                    grade === g
                      ? 'bg-blue-600 border-blue-500 text-white shadow-[0_0_12px_rgba(59,130,246,0.4)]'
                      : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                  }`}
                >
                  Gr {g}
                </button>
              ))}
            </div>
            <p className="text-[11px] text-slate-500 mt-2">
              {grade <= 8
                ? 'Curriculum: Combined Junior Science, Math, English'
                : 'Curriculum: Cambridge IGCSE Physics, Chemistry, Biology, CS, Econ, Business, Accounting'}
            </p>
          </div>

          <div className="pt-3">
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer text-sm"
            >
              <span>Begin Learning Lab</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>

        <div className="mt-4 flex items-center justify-center gap-1.5 text-[11px] text-slate-500">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span>Clean slate: New account begins with 0 fabricated stats</span>
        </div>
      </div>
    </div>
  );
};

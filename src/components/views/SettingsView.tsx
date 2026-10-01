import React, { useState } from 'react';
import { UserProfile, GradeLevel, StudentProgress } from '../../types';
import {
  Settings,
  User,
  GraduationCap,
  RotateCcw,
  Check,
  ShieldCheck,
  LogOut,
  Sliders,
  Sparkles
} from 'lucide-react';

interface SettingsViewProps {
  profile: UserProfile;
  progress: StudentProgress;
  onUpdateProfile: (updated: UserProfile) => void;
  onResetProgress: () => void;
  onLogout?: () => void;
}

export const SettingsView: React.FC<SettingsViewProps> = ({
  profile,
  progress,
  onUpdateProfile,
  onResetProgress,
  onLogout
}) => {
  const [name, setName] = useState(profile.name);
  const [age, setAge] = useState(profile.age);
  const [grade, setGrade] = useState<GradeLevel>(profile.grade);
  const [gender, setGender] = useState(profile.gender || 'prefer_not_to_say');
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    const updated: UserProfile = {
      ...profile,
      name: name.trim() || profile.name,
      age: Number(age),
      grade: Number(grade) as GradeLevel,
      gender
    };
    onUpdateProfile(updated);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2500);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Header */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
        <span className="text-xs uppercase tracking-wider font-extrabold text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
          Preferences & Profile
        </span>
        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">
          Account Settings
        </h1>
        <p className="text-slate-600 text-sm mt-1 max-w-xl">
          Personalize your student identity, adjust your enrolled grade level, or manage stored activity.
        </p>
      </div>

      {/* Profile Form */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
          <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 border border-blue-100">
            <User className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-900">Student Profile Information</h2>
            <p className="text-xs text-slate-500">
              Only one name field with strict grade persistence.
            </p>
          </div>
        </div>

        <form onSubmit={handleSaveProfile} className="space-y-5">
          {/* Exactly ONE Name Field */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
              Full Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full max-w-md px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:border-blue-500 transition-colors text-sm"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                Age
              </label>
              <input
                type="number"
                min="10"
                max="19"
                value={age}
                onChange={(e) => setAge(parseInt(e.target.value, 10))}
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:border-blue-500 transition-colors text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                Gender
              </label>
              <select
                value={gender}
                onChange={(e: any) => setGender(e.target.value)}
                className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:border-blue-500 transition-colors text-sm cursor-pointer"
              >
                <option value="prefer_not_to_say">Prefer not to say</option>
                <option value="female">Female</option>
                <option value="male">Male</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          {/* Grade Switching (Guaranteed Persistence) */}
          <div>
            <div className="flex items-center justify-between max-w-md mb-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-600">
                Enrolled Grade Level
              </label>
              <span className="text-xs font-bold font-mono text-blue-600">
                Current: Grade {profile.grade}
              </span>
            </div>

            <div className="grid grid-cols-5 gap-2 max-w-md">
              {([6, 7, 8, 9, 10] as GradeLevel[]).map((g) => (
                <button
                  key={g}
                  type="button"
                  onClick={() => setGrade(g)}
                  className={`py-2.5 rounded-xl text-sm font-bold border transition-all cursor-pointer ${
                    grade === g
                      ? 'bg-blue-600 border-blue-600 text-white shadow-sm'
                      : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  Gr {g}
                </button>
              ))}
            </div>
            <p className="text-[11px] text-slate-500 mt-2 max-w-md">
              Switching grade dynamically configures curriculum subjects: Grades 6-8 (Combined Junior Science, Math, English); Grades 9-10 (Cambridge IGCSE STEM & Business).
            </p>
          </div>

          <div className="flex items-center gap-4 pt-2">
            <button
              type="submit"
              className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl shadow-sm transition-all text-sm cursor-pointer"
            >
              Save Profile Changes
            </button>

            {savedSuccess && (
              <span className="text-xs font-bold text-emerald-600 flex items-center gap-1.5 animate-in fade-in">
                <Check className="w-4 h-4" /> Profile updated successfully!
              </span>
            )}
          </div>
        </form>
      </div>

      {/* Account Session Actions */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 rounded-xl bg-slate-100 text-slate-700">
            <LogOut className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-900">Account Session & Data Reset</h2>
            <p className="text-xs text-slate-500">
              Sign out to change accounts, or reset progress to verify zero-state.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 pt-2">
          {onLogout && (
            <button
              onClick={onLogout}
              className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-800 font-bold rounded-xl text-xs transition-colors cursor-pointer flex items-center gap-2"
            >
              <LogOut className="w-4 h-4" />
              <span>Sign Out of Eureka</span>
            </button>
          )}

          <button
            onClick={() => {
              if (window.confirm('Reset all progress data to verify genuine 0-progress state?')) {
                onResetProgress();
              }
            }}
            className="px-5 py-2.5 bg-rose-50 hover:bg-rose-100 border border-rose-200 text-rose-700 font-bold rounded-xl text-xs transition-colors cursor-pointer flex items-center gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Reset Progress to Clean Slate (0 Progress)</span>
          </button>
        </div>
      </div>
    </div>
  );
};

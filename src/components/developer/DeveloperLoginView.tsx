import React, { useState } from 'react';
import { Terminal, Shield, Lock, User, ArrowRight, AlertCircle, Loader2, ArrowLeft } from 'lucide-react';
import { DeveloperUser } from '../../types/developer';
import { loginWithGoogle } from '../../firebase';

interface DeveloperLoginViewProps {
  onLoginSuccess: (token: string, developer: DeveloperUser) => void;
  onExitToStudentApp: () => void;
}

export const DeveloperLoginView: React.FC<DeveloperLoginViewProps> = ({
  onLoginSuccess,
  onExitToStudentApp
}) => {
  const [username, setUsername] = useState('fernandeslukegerard@gmail.com');
  const [password, setPassword] = useState('EurekaDev2026!');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);

  // 1. Password credentials submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!username.trim() || !password) {
      setError('Please provide developer credentials.');
      return;
    }

    setIsLoading(true);
    try {
      const res = await fetch('/api/developer/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: username.trim(), password })
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Developer authentication failed');
      }

      // Store developer token in session
      sessionStorage.setItem('eureka_dev_token', data.token);
      onLoginSuccess(data.token, data.developer);
    } catch (err: any) {
      setError(err?.message || 'Access Denied: Invalid developer credentials.');
    } finally {
      setIsLoading(false);
    }
  };

  // 2. Verified Firebase Google sign-in
  const handleGoogleDevSignIn = async () => {
    setError('');
    setIsGoogleLoading(true);

    try {
      const userCred = await loginWithGoogle();
      const user = userCred.user;

      if (!user || !user.email) {
        throw new Error('Could not retrieve authenticated user details from Google.');
      }

      // Request developer authorization from backend
      const res = await fetch('/api/developer/auth/firebase-login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: user.email,
          uid: user.uid,
          displayName: user.displayName || user.email
        })
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Access Denied: Account not authorized for Developer CMS.');
      }

      sessionStorage.setItem('eureka_dev_token', data.token);
      onLoginSuccess(data.token, data.developer);
    } catch (err: any) {
      const msg = err?.message || 'Access Denied: Account not authorized for Developer CMS.';
      setError(msg);
    } finally {
      setIsGoogleLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-center items-center p-4 sm:p-6 selection:bg-indigo-500/30 selection:text-indigo-200">
      <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />

        {/* Header */}
        <div className="text-center mb-6">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-500 to-violet-600 text-white flex items-center justify-center shadow-lg shadow-indigo-500/20 mx-auto mb-3">
            <Terminal className="w-6 h-6" />
          </div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-indigo-950 border border-indigo-800 text-[10px] font-mono text-indigo-300 font-bold uppercase tracking-wider mb-2">
            <Shield className="w-3 h-3 text-indigo-400" />
            <span>Developer Authorization</span>
          </div>
          <h1 className="text-2xl font-black tracking-tight text-white">
            Eureka Content CMS
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Restricted developer administration &amp; AI animation architecture
          </p>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-rose-950/50 border border-rose-800 text-rose-300 text-xs rounded-xl flex items-start gap-2 animate-in fade-in">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-rose-400" />
            <span>{error}</span>
          </div>
        )}

        {/* 1-Click Authorized Google Sign-in */}
        <button
          type="button"
          onClick={handleGoogleDevSignIn}
          disabled={isGoogleLoading || isLoading}
          className="w-full mb-4 py-2.5 px-4 bg-white hover:bg-slate-100 text-slate-800 font-bold text-xs rounded-xl shadow-sm flex items-center justify-center gap-2.5 transition-all cursor-pointer disabled:opacity-50 border border-slate-300"
        >
          {isGoogleLoading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin text-slate-600" />
              <span>Verifying Developer Account...</span>
            </>
          ) : (
            <>
              <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.65v3.03h3.88c2.27-2.09 3.665-5.17 3.665-9.12z"
                />
                <path
                  fill="#34A853"
                  d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.03c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.13C3.27 21.43 7.35 24 12 24z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.28 14.29c-.25-.72-.38-1.49-.38-2.29s.13-1.57.38-2.29V6.57H1.25C.45 8.16 0 9.97 0 12s.45 3.84 1.25 5.43l4.03-3.14z"
                />
                <path
                  fill="#EA4335"
                  d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.35 0 3.27 2.57 1.25 6.57l4.03 3.14c.95-2.83 3.6-4.96 6.72-4.96z"
                />
              </svg>
              <span>Sign in with Google (Authorized Developer)</span>
            </>
          )}
        </button>

        <div className="relative flex items-center justify-center my-4">
          <div className="border-t border-slate-800 w-full" />
          <span className="bg-slate-900 px-2.5 text-[10px] font-mono text-slate-500 uppercase tracking-widest">
            Or Use Credentials
          </span>
          <div className="border-t border-slate-800 w-full" />
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-1.5 font-bold">
              Developer Email or Username
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="fernandeslukegerard@gmail.com"
                className="w-full pl-10 pr-4 py-2.5 bg-slate-950 border border-slate-800 focus:border-indigo-500 rounded-xl text-sm text-white placeholder:text-slate-600 focus:outline-none focus:ring-1 focus:ring-indigo-500 font-mono transition-colors"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-1.5 font-bold">
              Security Key / Password
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full pl-10 pr-4 py-2.5 bg-slate-950 border border-slate-800 focus:border-indigo-500 rounded-xl text-sm text-white placeholder:text-slate-600 focus:outline-none focus:ring-1 focus:ring-indigo-500 font-mono transition-colors"
                required
              />
            </div>
          </div>

          <div className="p-3 bg-slate-950/60 border border-slate-800/80 rounded-xl text-[11px] text-slate-400 font-mono">
            <span className="text-indigo-400 font-bold">Authorized Account:</span> <code className="text-white">fernandeslukegerard@gmail.com</code> (or <code className="text-white">eureka_dev</code>) / <code className="text-white">EurekaDev2026!</code>
          </div>

          <button
            type="submit"
            disabled={isLoading || isGoogleLoading}
            className="w-full py-3 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-bold rounded-xl shadow-lg shadow-indigo-600/20 text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer transition-all disabled:opacity-50"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Verifying Developer Credentials...</span>
              </>
            ) : (
              <>
                <span>Access Developer Console</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        <div className="mt-6 pt-4 border-t border-slate-800/80 text-center">
          <button
            type="button"
            onClick={onExitToStudentApp}
            className="text-xs text-slate-400 hover:text-white font-mono flex items-center justify-center gap-1.5 mx-auto cursor-pointer transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Student Application</span>
          </button>
        </div>
      </div>
    </div>
  );
};

import React, { useState, useEffect } from 'react';
import { DeveloperUser } from '../../types/developer';
import { DeveloperLoginView } from './DeveloperLoginView';
import { DeveloperDashboardView } from './DeveloperDashboardView';
import { auth } from '../../firebase';
import { Loader2, ShieldAlert, ArrowLeft, Lock } from 'lucide-react';

interface DeveloperPortalProps {
  onExit: () => void;
}

export const DeveloperPortal: React.FC<DeveloperPortalProps> = ({ onExit }) => {
  const [token, setToken] = useState<string | null>(() => {
    return sessionStorage.getItem('eureka_dev_token');
  });
  const [developer, setDeveloper] = useState<DeveloperUser | null>(null);
  const [isVerifying, setIsVerifying] = useState<boolean>(true);
  const [studentBlocked, setStudentBlocked] = useState<{ email: string; name: string } | null>(null);

  // Verify stored token and verify whether current Firebase session is a student
  useEffect(() => {
    const verifySecurityState = async () => {
      // 1. If a Firebase user is logged in, perform server-side check to see if they are a student
      const currentUser = auth.currentUser;
      if (currentUser && currentUser.email) {
        try {
          const checkRes = await fetch('/api/developer/auth/check-access', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              email: currentUser.email,
              uid: currentUser.uid
            })
          });

          if (checkRes.status === 403) {
            // Identified as a student account! Immediately block developer route access.
            setStudentBlocked({
              email: currentUser.email,
              name: currentUser.displayName || currentUser.email.split('@')[0]
            });
            setIsVerifying(false);
            return;
          }
        } catch {
          // If network error, proceed to token verification
        }
      }

      // 2. Verify stored developer token if present
      const stored = sessionStorage.getItem('eureka_dev_token');
      if (!stored) {
        setIsVerifying(false);
        return;
      }

      try {
        const res = await fetch('/api/developer/auth/verify', {
          headers: {
            Authorization: `Bearer ${stored}`
          }
        });

        if (res.ok) {
          const data = await res.json();
          setToken(stored);
          setDeveloper(data.developer);
        } else {
          sessionStorage.removeItem('eureka_dev_token');
          setToken(null);
          setDeveloper(null);
        }
      } catch {
        sessionStorage.removeItem('eureka_dev_token');
        setToken(null);
        setDeveloper(null);
      } finally {
        setIsVerifying(false);
      }
    };

    verifySecurityState();
  }, []);

  const handleLoginSuccess = (newToken: string, newDeveloper: DeveloperUser) => {
    setToken(newToken);
    setDeveloper(newDeveloper);
  };

  const handleLogout = async () => {
    if (token) {
      fetch('/api/developer/auth/logout', {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` }
      }).catch(() => {});
    }
    sessionStorage.removeItem('eureka_dev_token');
    setToken(null);
    setDeveloper(null);
  };

  if (isVerifying) {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-4 text-white">
        <Loader2 className="w-8 h-8 animate-spin text-indigo-500 mb-3" />
        <span className="font-mono text-xs text-slate-400">Verifying developer authorization...</span>
      </div>
    );
  }

  // Student Account Detected Shield: strictly prevents students from viewing or touching admin tools
  if (studentBlocked) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-4 selection:bg-rose-500/20">
        <div className="max-w-md w-full bg-slate-900 border border-rose-500/30 rounded-3xl p-6 sm:p-8 text-center shadow-2xl relative overflow-hidden">
          <div className="w-16 h-16 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-rose-400 flex items-center justify-center mx-auto mb-5 shadow-lg shadow-rose-500/10">
            <ShieldAlert className="w-8 h-8" />
          </div>

          <h2 className="text-xl font-bold text-slate-100 tracking-tight">Access Restricted</h2>
          <p className="text-sm font-semibold text-rose-400 mt-1 flex items-center justify-center gap-1.5">
            <Lock className="w-3.5 h-3.5" /> Student Account Detected
          </p>

          <p className="text-xs text-slate-400 mt-3.5 leading-relaxed">
            Administrative and curriculum management collections are strictly restricted to authorized developers.
            Your student account (<span className="text-slate-200 font-mono">{studentBlocked.email}</span>) cannot view or modify these collections.
          </p>

          <div className="bg-slate-950/60 rounded-xl p-3 border border-slate-800 text-[11px] text-slate-400 mt-4 text-left font-mono">
            <div><span className="text-slate-500">Security Rule:</span> /curriculum_drafts [BLOCKED]</div>
            <div><span className="text-slate-500">Security Rule:</span> /admin_settings [BLOCKED]</div>
            <div><span className="text-slate-500">Status:</span> 403 Forbidden (Non-Developer Account)</div>
          </div>

          <button
            onClick={onExit}
            className="w-full mt-6 py-3.5 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 active:scale-95 text-white font-semibold text-sm flex items-center justify-center gap-2 cursor-pointer transition-all shadow-md shadow-blue-500/20"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Learning Dashboard</span>
          </button>
        </div>
      </div>
    );
  }

  if (!token || !developer) {
    return (
      <DeveloperLoginView
        onLoginSuccess={handleLoginSuccess}
        onExitToStudentApp={onExit}
      />
    );
  }

  return (
    <DeveloperDashboardView
      token={token}
      developer={developer}
      onLogout={handleLogout}
      onExitToStudentApp={onExit}
    />
  );
};

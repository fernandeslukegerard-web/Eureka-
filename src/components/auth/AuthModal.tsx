import React, { useState } from 'react';
import { UserProfile, GradeLevel } from '../../types';
import {
  loginWithEmail,
  registerWithEmail,
  loginWithGoogle,
  resetUserPassword,
  loginAnonymously,
  updateProfile
} from '../../firebase';
import {
  Atom,
  Mail,
  Lock,
  User,
  ArrowRight,
  Check,
  AlertCircle,
  Loader2,
  Eye,
  EyeOff,
  ArrowLeft
} from 'lucide-react';

interface AuthModalProps {
  onLoginSuccess: (profile: UserProfile) => void;
  initialGrade?: GradeLevel;
}

export const AuthModal: React.FC<AuthModalProps> = ({ onLoginSuccess, initialGrade = 9 }) => {
  const [mode, setMode] = useState<'signin' | 'signup' | 'forgot'>('signin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [grade, setGrade] = useState<GradeLevel>(initialGrade);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Helper to map Firebase Auth error codes into friendly user messages
  const getFriendlyErrorMessage = (err: any): string => {
    const code = err?.code || '';
    switch (code) {
      case 'auth/invalid-email':
        return 'Please enter a valid email address (e.g., student@domain.com) or username.';
      case 'auth/user-not-found':
      case 'auth/wrong-password':
      case 'auth/invalid-credential':
        return 'Incorrect email or password. Please verify your credentials.';
      case 'auth/email-already-in-use':
        return 'An account with this email already exists. Please sign in instead.';
      case 'auth/weak-password':
        return 'Password must contain at least 6 characters.';
      case 'auth/popup-closed-by-user':
        return 'Sign in was cancelled before completion.';
      case 'auth/popup-blocked':
        return 'Sign in popup was blocked by your browser. Please allow popups for Eureka.';
      case 'auth/operation-not-allowed':
        return 'This sign in method is not yet enabled. Please contact support or use email sign in.';
      case 'auth/too-many-requests':
        return 'Too many failed attempts. Please wait a few moments and try again.';
      case 'auth/network-request-failed':
        return 'Network connection issue. Please check your internet connection.';
      default:
        return err?.message || 'Authentication failed. Please try again.';
    }
  };

  // Helper to resolve email address from username or direct email input
  const resolveEmailFromInput = (raw: string): string => {
    const trimmed = raw.trim();
    if (trimmed.includes('@')) {
      return trimmed;
    }
    const cleanUser = trimmed.toLowerCase().replace(/[^a-z0-9_.-]/g, '');
    try {
      const mapped = localStorage.getItem(`eureka_user_email_${cleanUser}`);
      if (mapped && mapped.includes('@')) {
        return mapped;
      }
    } catch {}

    // Match known user handles or developer handles
    if (
      cleanUser === 'fernandes' ||
      cleanUser === 'fernandeslukegerard' ||
      cleanUser === 'luke' ||
      cleanUser === 'lukegerard'
    ) {
      return 'fernandeslukegerard@gmail.com';
    }

    if (cleanUser === 'eureka_dev' || cleanUser === 'eurekadev' || cleanUser === 'developer') {
      return 'developer@eureka.internal';
    }

    return `${cleanUser}@eureka.edu`;
  };

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccessMsg('');

    const rawInput = email.trim();
    if (!rawInput || !password) {
      setError('Please provide both your email or username and password.');
      return;
    }

    const resolvedEmail = resolveEmailFromInput(rawInput);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(resolvedEmail)) {
      setError('Please enter a valid email address (e.g., student@domain.com) or your username.');
      return;
    }

    setIsLoading(true);
    try {
      let user: any = null;

      // 1. Attempt standard email/password login
      try {
        const userCredential = await loginWithEmail(resolvedEmail, password);
        user = userCredential.user;
      } catch (signInErr: any) {
        // If account not yet registered in Firebase Authentication, register seamlessly
        if (
          signInErr?.code === 'auth/user-not-found' ||
          signInErr?.code === 'auth/invalid-credential'
        ) {
          try {
            const regCred = await registerWithEmail(
              resolvedEmail,
              password,
              rawInput.includes('@') ? rawInput.split('@')[0] : rawInput
            );
            user = regCred.user;
          } catch (regErr: any) {
            // If already in use, password was truly incorrect for existing user
            if (regErr?.code === 'auth/email-already-in-use') {
              throw signInErr;
            }

            // Fallback: check if developer credentials match on backend
            const devCheck = await fetch('/api/developer/auth/login', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ username: rawInput, password })
            })
              .then((r) => r.json())
              .catch(() => null);

            if (devCheck && devCheck.token) {
              sessionStorage.setItem('eureka_dev_token', devCheck.token);
              // Authenticate session via anonymous Firebase user if email/password creation is restricted
              try {
                const anonCred = await loginAnonymously();
                if (anonCred.user) {
                  await updateProfile(anonCred.user, {
                    displayName: devCheck.developer.username || rawInput.split('@')[0]
                  });
                  user = anonCred.user;
                }
              } catch {}

              const studentProfile: UserProfile = {
                name: devCheck.developer.username || rawInput.split('@')[0],
                age: 15,
                grade: 9,
                gender: 'prefer_not_to_say',
                onboardingCompleted: true,
                createdAt: new Date().toISOString()
              };
              onLoginSuccess(studentProfile);
              return;
            }

            throw regErr;
          }
        } else {
          // If other error, check developer credentials before displaying error
          const devCheck = await fetch('/api/developer/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: rawInput, password })
          })
            .then((r) => r.json())
            .catch(() => null);

          if (devCheck && devCheck.token) {
            sessionStorage.setItem('eureka_dev_token', devCheck.token);
            try {
              const anonCred = await loginAnonymously();
              if (anonCred.user) {
                await updateProfile(anonCred.user, {
                  displayName: devCheck.developer.username || rawInput.split('@')[0]
                });
                user = anonCred.user;
              }
            } catch {}

            const studentProfile: UserProfile = {
              name: devCheck.developer.username || rawInput.split('@')[0],
              age: 15,
              grade: 9,
              gender: 'prefer_not_to_say',
              onboardingCompleted: true,
              createdAt: new Date().toISOString()
            };
            onLoginSuccess(studentProfile);
            return;
          }

          throw signInErr;
        }
      }

      if (user) {
        // Also check if developer credentials match and set dev token in background
        fetch('/api/developer/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username: rawInput, password })
        })
          .then((r) => r.json())
          .then((data) => {
            if (data?.token) {
              sessionStorage.setItem('eureka_dev_token', data.token);
            }
          })
          .catch(() => {});

        // Check if student profile metadata was saved locally for this user UID
        let savedGrade: GradeLevel = grade;
        try {
          const stored = localStorage.getItem(`eureka_profile_meta_${user.uid}`);
          if (stored) {
            const meta = JSON.parse(stored);
            if (meta.grade) savedGrade = Number(meta.grade) as GradeLevel;
          }
        } catch {}

        const studentProfile: UserProfile = {
          name: user.displayName || rawInput.split('@')[0] || 'Eureka Student',
          age: 14,
          grade: savedGrade,
          gender: 'prefer_not_to_say',
          onboardingCompleted: true,
          createdAt: new Date().toISOString()
        };

        onLoginSuccess(studentProfile);
      }
    } catch (err: any) {
      console.warn('Firebase Email Sign-In notice:', err?.code || err?.message);
      setError(getFriendlyErrorMessage(err));
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccessMsg('');

    if (!name.trim()) {
      setError('Please enter your full name.');
      return;
    }

    const trimmedEmail = email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!trimmedEmail || !emailRegex.test(trimmedEmail)) {
      setError('Please enter a valid email address (e.g., student@domain.com).');
      return;
    }
    if (!password || password.length < 6) {
      setError('Password must contain at least 6 characters.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match. Please re-enter.');
      return;
    }

    setIsLoading(true);
    try {
      const userCredential = await registerWithEmail(trimmedEmail, password, name.trim());
      const user = userCredential.user;

      // Persist username mapping so student can log in via username later
      try {
        const usernameClean = name.trim().toLowerCase().replace(/[^a-z0-9_.-]/g, '');
        const emailPrefix = trimmedEmail.split('@')[0].trim().toLowerCase().replace(/[^a-z0-9_.-]/g, '');
        if (usernameClean) {
          localStorage.setItem(`eureka_user_email_${usernameClean}`, trimmedEmail);
        }
        if (emailPrefix) {
          localStorage.setItem(`eureka_user_email_${emailPrefix}`, trimmedEmail);
        }
      } catch {}

      const studentProfile: UserProfile = {
        name: name.trim(),
        age: 14,
        grade: Number(grade) as GradeLevel,
        gender: 'prefer_not_to_say',
        onboardingCompleted: true,
        createdAt: new Date().toISOString()
      };

      // Persist student profile attributes keyed to UID
      localStorage.setItem(
        `eureka_profile_meta_${user.uid}`,
        JSON.stringify({
          grade: Number(grade),
          age: 14,
          gender: 'prefer_not_to_say'
        })
      );

      onLoginSuccess(studentProfile);
    } catch (err: any) {
      console.warn('Firebase Email Sign-Up notice:', err?.code || err?.message);
      setError(getFriendlyErrorMessage(err));
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setError('');
    setSuccessMsg('');
    setIsLoading(true);
    try {
      const userCredential = await loginWithGoogle();
      const user = userCredential.user;

      let savedGrade: GradeLevel = grade;
      try {
        const stored = localStorage.getItem(`eureka_profile_meta_${user.uid}`);
        if (stored) {
          const meta = JSON.parse(stored);
          if (meta.grade) savedGrade = Number(meta.grade) as GradeLevel;
        }
      } catch {}

      const studentProfile: UserProfile = {
        name: user.displayName || user.email?.split('@')[0] || 'Google Student',
        age: 14,
        grade: savedGrade,
        gender: 'prefer_not_to_say',
        onboardingCompleted: true,
        createdAt: new Date().toISOString()
      };

      onLoginSuccess(studentProfile);
    } catch (err: any) {
      console.warn('Firebase Google Sign-In notice:', err?.code || err?.message);
      setError(getFriendlyErrorMessage(err));
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccessMsg('');

    const resolvedEmail = resolveEmailFromInput(email);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(resolvedEmail)) {
      setError('Please enter a valid email address to receive password recovery instructions.');
      return;
    }

    setIsLoading(true);
    try {
      await resetUserPassword(resolvedEmail);
      setSuccessMsg(`Password reset instructions have been sent to ${resolvedEmail}. Please check your inbox.`);
    } catch (err: any) {
      console.warn('Firebase Password Reset notice:', err?.code || err?.message);
      setError(getFriendlyErrorMessage(err));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-[#f8fafc] overflow-y-auto selection:bg-blue-500/20 selection:text-blue-900">
      {/* Decorative Subtle Eureka STEM Background */}
      <div className="fixed inset-0 pointer-events-none select-none overflow-hidden z-0" aria-hidden="true">
        {/* Soft atmospheric gradient glows */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-400/8 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-400/8 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-300/5 rounded-full blur-3xl" />

        {/* Faint STEM & Educational Watermark Elements */}
        <svg
          className="absolute inset-0 w-full h-full text-slate-800/[0.035]"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Subtle grid dots */}
          <defs>
            <pattern id="stem-dots" width="48" height="48" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#stem-dots)" />

          {/* Mathematical equations */}
          <text x="8%" y="15%" className="font-mono text-sm fill-current">E = mc²</text>
          <text x="85%" y="18%" className="font-mono text-sm fill-current">F = ma</text>
          <text x="12%" y="82%" className="font-mono text-sm fill-current">PV = nRT</text>
          <text x="82%" y="85%" className="font-mono text-sm fill-current">v = fλ</text>
          <text x="6%" y="50%" className="font-mono text-xs fill-current">pH = -log[H⁺]</text>
          <text x="88%" y="52%" className="font-mono text-xs fill-current">Δx · Δp ≥ ℏ/2</text>

          {/* Scientific Diagrams */}
          {/* Top Left: Orbiting Bohr Atom */}
          <g transform="translate(140, 100)" stroke="currentColor" fill="none" strokeWidth="1">
            <ellipse cx="0" cy="0" rx="35" ry="12" transform="rotate(30)" />
            <ellipse cx="0" cy="0" rx="35" ry="12" transform="rotate(-30)" />
            <ellipse cx="0" cy="0" rx="35" ry="12" transform="rotate(90)" />
            <circle cx="0" cy="0" r="4" fill="currentColor" />
          </g>

          {/* Top Right: Chemical Benzene Hexagon */}
          <g transform="translate(1150, 130)" stroke="currentColor" fill="none" strokeWidth="1">
            <polygon points="0,-25 21.65,-12.5 21.65,12.5 0,25 -21.65,12.5 -21.65,-12.5" />
            <circle cx="0" cy="0" r="14" strokeDasharray="3 3" />
          </g>

          {/* Bottom Left: Light Prism Dispersion */}
          <g transform="translate(120, 680)" stroke="currentColor" fill="none" strokeWidth="1">
            <polygon points="0,-25 25,20 -25,20" />
            <line x1="-40" y1="5" x2="-8" y2="0" />
            <line x1="12" y1="-5" x2="45" y2="-15" />
            <line x1="15" y1="0" x2="48" y2="0" />
            <line x1="18" y1="5" x2="45" y2="15" />
          </g>

          {/* Bottom Right: Harmonic Wave */}
          <g transform="translate(1080, 700)" stroke="currentColor" fill="none" strokeWidth="1">
            <path d="M 0,0 Q 25,-25 50,0 T 100,0 T 150,0" />
            <line x1="-10" y1="0" x2="160" y2="0" strokeDasharray="2 2" />
          </g>
        </svg>
      </div>

      {/* Main Authentication Card */}
      <div className="relative z-10 w-full max-w-[440px] sm:max-w-[460px] bg-white rounded-3xl border border-slate-200/90 shadow-xl shadow-slate-200/70 p-6 sm:p-9 my-auto transition-all">
        {/* Eureka Branding */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 text-white mb-3 shadow-lg shadow-blue-500/25">
            <Atom className="w-8 h-8 animate-spin-slow" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Eureka
          </h1>
          <p className="text-xs sm:text-sm font-medium text-slate-500 mt-1">
            Interactive STEM &amp; Conceptual Learning
          </p>
        </div>

        {/* Tab Selection: Sign In | Create Account */}
        {mode !== 'forgot' && (
          <div className="flex bg-slate-100/90 p-1.5 rounded-2xl mb-6 border border-slate-200/70">
            <button
              type="button"
              onClick={() => {
                setMode('signin');
                setError('');
                setSuccessMsg('');
              }}
              className={`flex-1 py-2.5 px-3 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer min-h-[42px] flex items-center justify-center ${
                mode === 'signin'
                  ? 'bg-white text-blue-700 shadow-xs border border-slate-200/60'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Sign In
            </button>
            <button
              type="button"
              onClick={() => {
                setMode('signup');
                setError('');
                setSuccessMsg('');
              }}
              className={`flex-1 py-2.5 px-3 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer min-h-[42px] flex items-center justify-center ${
                mode === 'signup'
                  ? 'bg-white text-blue-700 shadow-xs border border-slate-200/60'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Create Account
            </button>
          </div>
        )}

        {/* Error Notification Alert */}
        {error && (
          <div className="mb-5 p-3.5 bg-rose-50 border border-rose-200 text-rose-700 text-xs sm:text-sm rounded-xl flex items-start gap-2.5 animate-in fade-in">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-rose-500" />
            <span className="leading-snug">{error}</span>
          </div>
        )}

        {/* Success Notification Alert */}
        {successMsg && (
          <div className="mb-5 p-3.5 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm rounded-xl flex items-start gap-2.5 animate-in fade-in">
            <Check className="w-4 h-4 shrink-0 mt-0.5 text-emerald-600" />
            <span className="leading-snug">{successMsg}</span>
          </div>
        )}

        {/* 1. SIGN IN FORM */}
        {mode === 'signin' && (
          <form onSubmit={handleSignIn} className="space-y-4">
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                Email or Username
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Enter your email or username"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 sm:py-3 bg-slate-50/80 hover:bg-slate-50 focus:bg-white border border-slate-200 rounded-xl text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-400"
                  required
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-600">
                  Password
                </label>
                <button
                  type="button"
                  onClick={() => {
                    setMode('forgot');
                    setError('');
                    setSuccessMsg('');
                  }}
                  className="text-xs font-semibold text-blue-600 hover:text-blue-700 hover:underline cursor-pointer"
                >
                  Forgot password?
                </button>
              </div>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-11 py-2.5 sm:py-3 bg-slate-50/80 hover:bg-slate-50 focus:bg-white border border-slate-200 rounded-xl text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-400"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer p-1"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Gradient Sign In Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full mt-2 py-3 sm:py-3.5 px-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 active:scale-[0.99] text-white font-bold rounded-xl shadow-md shadow-blue-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer text-sm sm:text-base disabled:opacity-70 disabled:cursor-not-allowed min-h-[48px]"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Signing In...</span>
                </>
              ) : (
                <>
                  <span>Sign In to Eureka</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        )}

        {/* 2. CREATE ACCOUNT FORM */}
        {mode === 'signup' && (
          <form onSubmit={handleSignUp} className="space-y-4">
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                Full Name
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 sm:py-3 bg-slate-50/80 hover:bg-slate-50 focus:bg-white border border-slate-200 rounded-xl text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-400"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                Email
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 sm:py-3 bg-slate-50/80 hover:bg-slate-50 focus:bg-white border border-slate-200 rounded-xl text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-400"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                Password
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Create a password (min. 6 characters)"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-11 py-2.5 sm:py-3 bg-slate-50/80 hover:bg-slate-50 focus:bg-white border border-slate-200 rounded-xl text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-400"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer p-1"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                Confirm Password
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full pl-10 pr-11 py-2.5 sm:py-3 bg-slate-50/80 hover:bg-slate-50 focus:bg-white border border-slate-200 rounded-xl text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-400"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer p-1"
                >
                  {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Enrolled Grade Level Selector */}
            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-600">
                  Target Grade Level
                </label>
                <span className="text-[11px] font-semibold text-blue-600 font-mono">
                  {grade <= 8 ? 'General Science' : 'Cambridge IGCSE'}
                </span>
              </div>
              <div className="grid grid-cols-5 gap-1.5">
                {([6, 7, 8, 9, 10] as GradeLevel[]).map((g) => (
                  <button
                    key={g}
                    type="button"
                    onClick={() => setGrade(g)}
                    className={`py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                      grade === g
                        ? 'bg-blue-600 border-blue-600 text-white shadow-xs'
                        : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    Gr {g}
                  </button>
                ))}
              </div>
            </div>

            {/* Gradient Create Account Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full mt-2 py-3 sm:py-3.5 px-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 active:scale-[0.99] text-white font-bold rounded-xl shadow-md shadow-blue-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer text-sm sm:text-base disabled:opacity-70 disabled:cursor-not-allowed min-h-[48px]"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Creating Account...</span>
                </>
              ) : (
                <>
                  <span>Create Account to Eureka</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        )}

        {/* 3. FORGOT PASSWORD FORM */}
        {mode === 'forgot' && (
          <form onSubmit={handleForgotPassword} className="space-y-4">
            <div className="text-left">
              <h2 className="text-base font-bold text-slate-900">Reset Your Password</h2>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Enter your registered email address below. We will send you a secure link to reset your account password.
              </p>
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                Email Address
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="email"
                  placeholder="Enter your registered email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 sm:py-3 bg-slate-50/80 hover:bg-slate-50 focus:bg-white border border-slate-200 rounded-xl text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-400"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 sm:py-3.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white font-bold rounded-xl shadow-md shadow-blue-500/20 transition-all text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer min-h-[46px]"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Sending Link...</span>
                </>
              ) : (
                <span>Send Reset Link</span>
              )}
            </button>

            <button
              type="button"
              onClick={() => {
                setMode('signin');
                setError('');
                setSuccessMsg('');
              }}
              className="w-full py-2.5 text-center text-xs font-bold text-slate-600 hover:text-slate-900 cursor-pointer flex items-center justify-center gap-1.5"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Sign In</span>
            </button>
          </form>
        )}

        {/* Divider & Google Sign-In */}
        {mode !== 'forgot' && (
          <div className="mt-5 pt-1">
            {/* Subtle Divider */}
            <div className="relative my-5 flex items-center justify-center">
              <div className="w-full border-t border-slate-200"></div>
              <span className="absolute px-3 bg-white text-[11px] font-bold text-slate-400 tracking-wider">
                OR
              </span>
            </div>

            {/* Google Authentication Button */}
            <button
              type="button"
              onClick={handleGoogleLogin}
              disabled={isLoading}
              className="w-full py-3 px-4 bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-300 rounded-xl text-xs sm:text-sm font-bold text-slate-700 transition-colors flex items-center justify-center gap-3 cursor-pointer min-h-[46px] shadow-2xs"
            >
              <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
              <span>Continue with Google</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

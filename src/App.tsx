import React, { useState, useEffect } from 'react';
import { UserProfile, StudentProgress, Subtopic, Chapter, Subject, SubjectId, GradeLevel } from './types';
import { auth, onAuthStateChanged, logoutUser, updateProfile as firebaseUpdateProfile, FirebaseUser } from './firebase';
import { AuthModal } from './components/auth/AuthModal';
import { BottomNav, NavTab } from './components/navigation/BottomNav';
import { HomeView } from './components/views/HomeView';
import { LearnView } from './components/views/LearnView';
import { EurekaSandboxView } from './components/views/EurekaSandboxView';
import { GamesView } from './components/views/GamesView';
import { PracticeView } from './components/views/PracticeView';
import { SettingsView } from './components/views/SettingsView';
import { LessonPlayer } from './components/lesson/LessonPlayer';
import { DeveloperPortal } from './components/developer/DeveloperPortal';
import { setCachedDynamicTopics } from './data/curriculum';
import { Atom, Loader2 } from 'lucide-react';
import { Capacitor } from '@capacitor/core';
import { App as CapApp } from '@capacitor/app';
import { StatusBar, Style } from '@capacitor/status-bar';
import { SplashScreen } from '@capacitor/splash-screen';

const PROGRESS_STORAGE_PREFIX = 'eureka_student_progress_';
const ACTIVE_SUBJECT_KEY = 'eureka_active_subject_id_v1';

const isDeveloperPath = () => {
  if (typeof window === 'undefined') return false;
  const path = window.location.pathname.toLowerCase();
  const hash = window.location.hash.toLowerCase();
  return (
    path.startsWith('/developer') ||
    path.startsWith('/admin') ||
    hash === '#developer' ||
    hash === '#/developer'
  );
};

// Initial genuinely empty progress state
const emptyProgress: StudentProgress = {
  completedSubtopics: [],
  questionsAnswered: 0,
  accuracy: 0,
  streak: 0,
  studyTimeMinutes: 0,
  lastActiveDate: new Date().toISOString()
};

export default function App() {
  const [isDeveloperRoute, setIsDeveloperRoute] = useState<boolean>(isDeveloperPath);
  const [firebaseUser, setFirebaseUser] = useState<FirebaseUser | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [authLoading, setAuthLoading] = useState<boolean>(true);

  const [progress, setProgress] = useState<StudentProgress>(emptyProgress);
  const [currentTab, setCurrentTab] = useState<NavTab>('home');
  const [currentSubjectId, setCurrentSubjectId] = useState<SubjectId | null>(() => {
    try {
      const stored = localStorage.getItem(ACTIVE_SUBJECT_KEY);
      return (stored as SubjectId) || null;
    } catch {
      return null;
    }
  });

  // Learn view reset trigger to guarantee Level 1 (Subject Selection) on tab tap
  const [learnResetTrigger, setLearnResetTrigger] = useState<number>(0);

  const [activeLesson, setActiveLesson] = useState<{
    subtopic: Subtopic;
    chapter: Chapter;
    subject: Subject;
  } | null>(null);

  // Manage Firebase User Session via onAuthStateChanged instead of raw localStorage
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setFirebaseUser(user);

        // Read stored profile metadata (grade, age, gender) for this specific UID
        let userGrade: GradeLevel = 9;
        let userAge = 14;
        let userGender: 'male' | 'female' | 'other' | 'prefer_not_to_say' = 'prefer_not_to_say';

        try {
          const metaJson = localStorage.getItem(`eureka_profile_meta_${user.uid}`);
          if (metaJson) {
            const meta = JSON.parse(metaJson);
            if (meta.grade) userGrade = Number(meta.grade) as GradeLevel;
            if (meta.age) userAge = Number(meta.age);
            if (meta.gender) userGender = meta.gender;
          }
        } catch {}

        // Construct valid student profile from Firebase user session
        const currentProfile: UserProfile = {
          name: user.displayName || user.email?.split('@')[0] || 'Eureka Student',
          age: userAge,
          grade: userGrade,
          gender: userGender,
          onboardingCompleted: true,
          createdAt: user.metadata.creationTime || new Date().toISOString()
        };
        setProfile(currentProfile);

        // Load progress for this authenticated user
        try {
          const progJson = localStorage.getItem(`${PROGRESS_STORAGE_PREFIX}${user.uid}`);
          if (progJson) {
            setProgress(JSON.parse(progJson));
          } else {
            setProgress(emptyProgress);
          }
        } catch {
          setProgress(emptyProgress);
        }
      } else {
        setFirebaseUser(null);
        setProfile(null);
        setProgress(emptyProgress);
      }
      setAuthLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Update profile handler (syncs to Firebase displayName and local UID metadata)
  const handleUpdateProfile = async (updatedProfile: UserProfile) => {
    setProfile(updatedProfile);

    if (firebaseUser) {
      // Persist grade, age, gender tied to this Firebase UID
      try {
        localStorage.setItem(
          `eureka_profile_meta_${firebaseUser.uid}`,
          JSON.stringify({
            grade: updatedProfile.grade,
            age: updatedProfile.age,
            gender: updatedProfile.gender
          })
        );
      } catch {}

      // Update Firebase Auth user displayName if changed
      if (firebaseUser.displayName !== updatedProfile.name && updatedProfile.name.trim()) {
        try {
          await firebaseUpdateProfile(firebaseUser, {
            displayName: updatedProfile.name.trim()
          });
        } catch (e) {
          console.warn('Firebase displayName update notice:', e);
        }
      }

      // Sync to backend proxy endpoint
      fetch('/api/student/sync', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ profile: updatedProfile, progress, uid: firebaseUser.uid })
      }).catch(() => {});
    }
  };

  // Sync progress tied to Firebase UID
  const handleUpdateProgress = (updatedProgress: StudentProgress) => {
    setProgress(updatedProgress);

    if (firebaseUser) {
      try {
        localStorage.setItem(
          `${PROGRESS_STORAGE_PREFIX}${firebaseUser.uid}`,
          JSON.stringify(updatedProgress)
        );
      } catch {}

      fetch('/api/student/sync', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ profile, progress: updatedProgress, uid: firebaseUser.uid })
      }).catch(() => {});
    }
  };

  const handleResetProgress = () => {
    setProgress(emptyProgress);
    if (firebaseUser) {
      try {
        localStorage.setItem(
          `${PROGRESS_STORAGE_PREFIX}${firebaseUser.uid}`,
          JSON.stringify(emptyProgress)
        );
      } catch {}
    }
  };

  const handleLogout = async () => {
    try {
      await logoutUser();
      setActiveLesson(null);
      setProfile(null);
      setFirebaseUser(null);
      setCurrentTab('home');
    } catch (e) {
      console.warn('Firebase Logout notice:', e);
    }
  };

  const handleSelectSubject = (subjectId: SubjectId) => {
    setCurrentSubjectId(subjectId);
    try {
      localStorage.setItem(ACTIVE_SUBJECT_KEY, subjectId);
    } catch {}
  };

  const handleOpenLesson = (subtopic: Subtopic, chapter: Chapter, subject: Subject) => {
    setActiveLesson({ subtopic, chapter, subject });
    window.history.pushState({ tab: currentTab, lessonId: subtopic.id }, '');
  };

  const handleCloseLesson = () => {
    setActiveLesson(null);
  };

  // Strict Bottom Navigation Handler
  const handleSelectTab = (tab: NavTab) => {
    setActiveLesson(null);
    if (tab === 'learn') {
      setLearnResetTrigger((prev) => prev + 1);
      setCurrentSubjectId(null);
    }
    setCurrentTab(tab);
    window.history.pushState({ tab }, '');
  };

  // Android & Browser Back Button handler
  useEffect(() => {
    const handlePopState = (e: PopStateEvent) => {
      if (activeLesson) {
        setActiveLesson(null);
        return;
      }
      if (e.state?.tab) {
        setCurrentTab(e.state.tab);
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [activeLesson]);

  // Native Android hardware Back Button & Status Bar handling
  useEffect(() => {
    if (!Capacitor.isNativePlatform()) return;

    try {
      StatusBar.setStyle({ style: Style.Light }).catch(() => {});
      StatusBar.setBackgroundColor({ color: '#FFFFFF' }).catch(() => {});
      SplashScreen.hide().catch(() => {});
    } catch {}

    const backListenerPromise = CapApp.addListener('backButton', () => {
      // 1. Close active lesson if open
      if (activeLesson) {
        setActiveLesson(null);
        return;
      }

      // 2. If in browser history, pop back
      if (window.history.length > 1) {
        window.history.back();
        return;
      }

      // 3. If on a secondary tab, return to home
      if (currentTab !== 'home') {
        handleSelectTab('home');
        return;
      }

      // 4. If already on the home screen at root, exit app
      CapApp.exitApp();
    });

    return () => {
      backListenerPromise.then((handle) => handle.remove()).catch(() => {});
    };
  }, [activeLesson, currentTab]);

  // Browser route navigation listener for developer portal route
  useEffect(() => {
    const handleNav = () => {
      setIsDeveloperRoute(isDeveloperPath());
    };
    window.addEventListener('popstate', handleNav);
    window.addEventListener('hashchange', handleNav);
    return () => {
      window.removeEventListener('popstate', handleNav);
      window.removeEventListener('hashchange', handleNav);
    };
  }, []);

  // Dynamically load published curriculum from server for student's grade
  useEffect(() => {
    if (!profile) return;
    fetch(`/api/student/curriculum?grade=${profile.grade}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.topics && Array.isArray(data.topics)) {
          setCachedDynamicTopics(data.topics);
        }
      })
      .catch(() => {});
  }, [profile?.grade]);

  // Dedicated Developer Portal Route (Never exposed inside student interface)
  if (isDeveloperRoute) {
    return (
      <DeveloperPortal
        onExit={() => {
          window.history.pushState({}, '', '/');
          setIsDeveloperRoute(false);
        }}
      />
    );
  }

  // Loading Screen while Firebase initializes onAuthStateChanged
  if (authLoading) {
    return (
      <div className="min-h-screen bg-[#f8fafc] flex flex-col items-center justify-center p-4">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 text-white flex items-center justify-center shadow-lg shadow-blue-500/25 mb-4 animate-pulse">
          <Atom className="w-8 h-8 animate-spin-slow" />
        </div>
        <h2 className="text-2xl font-black text-slate-900 tracking-tight">Eureka</h2>
        <p className="text-xs text-slate-500 mt-1">Interactive STEM &amp; Conceptual Learning</p>
        <div className="flex items-center gap-2 text-xs font-mono text-slate-500 mt-4 bg-white/80 border border-slate-200/80 px-3.5 py-1.5 rounded-full shadow-2xs">
          <Loader2 className="w-3.5 h-3.5 animate-spin text-blue-600" />
          <span>Verifying session...</span>
        </div>
      </div>
    );
  }

  // Independent dedicated Authentication Page if not signed in
  if (!firebaseUser) {
    return (
      <AuthModal
        onLoginSuccess={(newProfile) => {
          handleUpdateProfile(newProfile);
          setCurrentTab('home');
        }}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 flex flex-col font-sans selection:bg-blue-500/20 selection:text-blue-900 pb-[calc(env(safe-area-inset-bottom,0px)+5.5rem)]">

      {/* Fullscreen 7-Step Lesson Player */}
      {activeLesson && profile && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-[#f8fafc] pt-[env(safe-area-inset-top,0px)] pb-[env(safe-area-inset-bottom,0px)]">
          <LessonPlayer
            subtopic={activeLesson.subtopic}
            chapter={activeLesson.chapter}
            subject={activeLesson.subject}
            progress={progress}
            onUpdateProgress={handleUpdateProgress}
            onClose={handleCloseLesson}
          />
        </div>
      )}

      {/* Cheerful Mobile-Friendly Header Bar with Safe Top Inset */}
      <header className="border-b border-slate-200/80 bg-white/95 backdrop-blur-md sticky top-0 z-30 px-4 sm:px-6 py-3 pt-[calc(env(safe-area-inset-top,0px)+0.75rem)] shadow-2xs select-none">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div
            onClick={() => handleSelectTab('home')}
            className="flex items-center gap-2.5 cursor-pointer group active:scale-95 transition-transform"
          >
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <Atom className="w-5 h-5 animate-spin-slow" />
            </div>
            <div>
              <span className="text-lg font-black tracking-tight text-slate-900 flex items-center gap-1">
                EUREKA <span className="text-xs font-bold text-blue-600 font-mono">LAB</span>
              </span>
            </div>
          </div>

          {profile && (
            <div
              onClick={() => handleSelectTab('settings')}
              className="flex items-center gap-2 bg-slate-50 hover:bg-slate-100 active:scale-95 border border-slate-200 px-3.5 py-1.5 rounded-full text-xs font-semibold cursor-pointer transition-all"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-slate-800 font-bold max-w-[100px] truncate">{profile.name}</span>
              <span className="text-slate-300">•</span>
              <span className="text-blue-600 font-bold font-mono">Gr. {profile.grade}</span>
            </div>
          )}
        </div>
      </header>

      {/* Main View Port Container */}
      <main className="flex-1 max-w-5xl w-full mx-auto p-4 sm:p-6 lg:p-8">
        {profile && (
          <>
            {currentTab === 'home' && (
              <HomeView
                profile={profile}
                progress={progress}
                onOpenLesson={handleOpenLesson}
                onNavigateTab={(tab) => handleSelectTab(tab)}
                onSelectSubject={(subjId) => {
                  handleSelectSubject(subjId);
                  handleSelectTab('learn');
                }}
              />
            )}
            {currentTab === 'learn' && (
              <LearnView
                profile={profile}
                progress={progress}
                onOpenLesson={handleOpenLesson}
                selectedSubjectId={currentSubjectId}
                onSelectSubject={handleSelectSubject}
                onUpdateProgress={handleUpdateProgress}
                resetToSubjectsTrigger={learnResetTrigger}
              />
            )}
            {currentTab === 'sandbox' && (
              <EurekaSandboxView
                profile={profile}
                progress={progress}
              />
            )}
            {currentTab === 'games' && (
              <GamesView
                profile={profile}
                progress={progress}
              />
            )}
            {currentTab === 'practice' && (
              <PracticeView
                profile={profile}
                progress={progress}
                onUpdateProgress={handleUpdateProgress}
                selectedSubjectId={currentSubjectId || 'physics'}
                onSelectSubject={handleSelectSubject}
              />
            )}
            {currentTab === 'settings' && (
              <SettingsView
                profile={profile}
                progress={progress}
                onUpdateProfile={handleUpdateProfile}
                onResetProgress={handleResetProgress}
                onLogout={handleLogout}
              />
            )}
          </>
        )}
      </main>

      {/* Clean Bottom Navigation: Home | Learn | Lab | Practice | Progress | Profile */}
      {profile && (
        <BottomNav currentTab={currentTab} onSelectTab={handleSelectTab} />
      )}
    </div>
  );
}

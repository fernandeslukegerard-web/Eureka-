import React from 'react';
import { Home, BookOpen, FlaskConical, Gamepad2, CheckSquare, Settings } from 'lucide-react';

export type NavTab = 'home' | 'learn' | 'sandbox' | 'games' | 'practice' | 'settings';

interface BottomNavProps {
  currentTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ currentTab, onSelectTab }) => {
  const tabs = [
    { id: 'home' as NavTab, label: 'Home', icon: Home },
    { id: 'learn' as NavTab, label: 'Learn', icon: BookOpen },
    { id: 'sandbox' as NavTab, label: 'Sandbox', icon: FlaskConical },
    { id: 'games' as NavTab, label: 'Games', icon: Gamepad2 },
    { id: 'practice' as NavTab, label: 'Practice', icon: CheckSquare },
    { id: 'settings' as NavTab, label: 'Settings', icon: Settings }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-t border-slate-200/90 px-1 sm:px-4 pb-[calc(env(safe-area-inset-bottom,0px)+6px)] pt-1.5 shadow-[0_-4px_25px_rgba(0,0,0,0.06)] touch-manipulation select-none">
      <div className="max-w-xl mx-auto flex items-center justify-around">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = currentTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onSelectTab(tab.id)}
              className={`flex-1 min-h-[48px] flex flex-col items-center justify-center py-1 px-1 rounded-2xl transition-all duration-150 cursor-pointer active:scale-95 ${
                isActive
                  ? 'text-blue-600 font-bold'
                  : 'text-slate-500 hover:text-slate-800 font-medium'
              }`}
            >
              <div
                className={`p-1.5 rounded-xl transition-all ${
                  isActive ? 'bg-blue-50 text-blue-600 shadow-2xs scale-105' : 'bg-transparent'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'stroke-[2.5px]' : 'stroke-2'}`} />
              </div>
              <span className="text-[10px] sm:text-[11px] mt-0.5 tracking-tight font-sans text-center truncate max-w-full">
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
import type { SportId, ViewType, SubViewType } from '../types';

type SportContextType = {
  activeSport: SportId | null;
  currentView: ViewType;
  subView: SubViewType;
  setActiveSport: (sport: SportId | null) => void;
  setCurrentView: (view: ViewType) => void;
  setSubView: (sub: SubViewType) => void;
  navigateToSport: (sport: SportId) => void;
  navigateToHome: () => void;
  navigateToInPlay: () => void;
};

const SportContext = createContext<SportContextType | null>(null);

export function SportProvider({ children }: { children: ReactNode }) {
  const [activeSport, setActiveSport] = useState<SportId | null>(null);
  const [currentView, setCurrentView] = useState<ViewType>('home');
  const [subView, setSubView] = useState<SubViewType>('all');

  const navigateToSport = useCallback((sport: SportId) => {
    setActiveSport(sport);
    setCurrentView('sport');
    setSubView('all');
  }, []);

  const navigateToHome = useCallback(() => {
    setActiveSport(null);
    setCurrentView('home');
    setSubView('all');
  }, []);

  const navigateToInPlay = useCallback(() => {
    setActiveSport(null);
    setCurrentView('in-play');
    setSubView('all');
  }, []);

  return (
    <SportContext.Provider value={{
      activeSport,
      currentView,
      subView,
      setActiveSport,
      setCurrentView,
      setSubView,
      navigateToSport,
      navigateToHome,
      navigateToInPlay,
    }}>
      {children}
    </SportContext.Provider>
  );
}

export function useSport() {
  const ctx = useContext(SportContext);
  if (!ctx) throw new Error('useSport must be used within SportProvider');
  return ctx;
}

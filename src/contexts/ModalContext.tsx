import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
import type { ModalType } from '../types';

type ModalContextType = {
  activeModal: ModalType;
  openLogin: () => void;
  openRegister: () => void;
  closeModal: () => void;
};

const ModalContext = createContext<ModalContextType | null>(null);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  const openLogin = useCallback(() => setActiveModal('login'), []);
  const openRegister = useCallback(() => setActiveModal('register'), []);
  const closeModal = useCallback(() => setActiveModal(null), []);

  return (
    <ModalContext.Provider value={{ activeModal, openLogin, openRegister, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error('useModal must be used within ModalProvider');
  return ctx;
}

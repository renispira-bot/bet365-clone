import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BetSlipProvider } from './contexts/BetSlipContext.tsx'
import { SportProvider } from './contexts/SportContext.tsx'
import { ModalProvider } from './contexts/ModalContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SportProvider>
      <BetSlipProvider>
        <ModalProvider>
          <App />
        </ModalProvider>
      </BetSlipProvider>
    </SportProvider>
  </StrictMode>,
)

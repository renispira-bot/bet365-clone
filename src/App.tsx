import './App.css'
import Header from './components/layout/Header'
import SportsSidebar from './components/layout/SportsSidebar'
import MainContent from './components/layout/MainContent'
import BetSlip from './components/layout/BetSlip'
import Footer from './components/layout/Footer'
import LoginModal from './components/modals/LoginModal'
import RegisterModal from './components/modals/RegisterModal'
import { useSport } from './contexts/SportContext'

function App() {
  const { currentView } = useSport()
  const isCasino = currentView === 'casino'

  return (
    <div className="app">
      <Header />
      <div className={`app__body ${isCasino ? 'app__body--casino' : ''}`}>
        {!isCasino && <SportsSidebar />}
        <MainContent />
        {!isCasino && <BetSlip />}
      </div>
      <Footer />
      <LoginModal />
      <RegisterModal />
    </div>
  )
}

export default App

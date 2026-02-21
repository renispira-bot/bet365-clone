import './App.css'
import Header from './components/layout/Header'
import SportsSidebar from './components/layout/SportsSidebar'
import MainContent from './components/layout/MainContent'
import BetSlip from './components/layout/BetSlip'
import Footer from './components/layout/Footer'
import LoginModal from './components/modals/LoginModal'
import RegisterModal from './components/modals/RegisterModal'

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <SportsSidebar />
        <MainContent />
        <BetSlip />
      </div>
      <Footer />
      <LoginModal />
      <RegisterModal />
    </div>
  )
}

export default App

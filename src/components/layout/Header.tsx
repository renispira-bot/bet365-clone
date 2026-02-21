import { useSport } from '../../contexts/SportContext';
import { useModal } from '../../contexts/ModalContext';
import { useBetSlip } from '../../contexts/BetSlipContext';
import { sports } from '../../data/sports';

const topSports = sports.slice(0, 8);

export default function Header() {
  const { activeSport, currentView, navigateToSport, navigateToHome, navigateToInPlay } = useSport();
  const { openLogin, openRegister } = useModal();
  const { selections } = useBetSlip();

  return (
    <header className="header">
      <div className="header__top">
        <button className="header__logo" onClick={navigateToHome}>
          leo 365
        </button>
        <nav className="header__top-nav">
          <button
            className={`header__top-link ${currentView === 'home' ? 'header__top-link--active' : ''}`}
            onClick={navigateToHome}
          >
            Sporte
          </button>
          <button
            className={`header__top-link ${currentView === 'in-play' ? 'header__top-link--active' : ''}`}
            onClick={navigateToInPlay}
          >
            Live
          </button>
        </nav>
        <div className="header__actions">
          <button className="header__login" onClick={openLogin}>Hyr</button>
          <button className="header__join" onClick={openRegister}>
            Regjistrohu
            {selections.length > 0 && (
              <span className="header__betslip-badge">{selections.length}</span>
            )}
          </button>
        </div>
      </div>
      <div className="header__bottom">
        <nav className="header__sport-tabs">
          {topSports.map(sport => (
            <button
              key={sport.id}
              className={`header__sport-tab ${
                currentView === 'sport' && activeSport === sport.id ? 'header__sport-tab--active' : ''
              }`}
              onClick={() => navigateToSport(sport.id)}
            >
              <span className="header__sport-emoji">{sport.emoji}</span>
              {sport.name}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}

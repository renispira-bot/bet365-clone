import { useSport } from '../../contexts/SportContext';
import { sports } from '../../data/sports';
import FeaturedBanner from '../features/FeaturedBanner';
import QuickLinks from '../features/QuickLinks';
import PopularBets from '../features/PopularBets';
import LiveMatches from '../sports/LiveMatches';
import SportNav from '../sports/SportNav';
import UpcomingMatches from '../sports/UpcomingMatches';

export default function MainContent() {
  const { currentView, activeSport } = useSport();

  if (currentView === 'in-play') {
    return (
      <main className="main-content">
        <LiveMatches />
      </main>
    );
  }

  if (currentView === 'sport' && activeSport) {
    const sport = sports.find(s => s.id === activeSport);
    return (
      <main className="main-content">
        <h2 className="main-content__sport-title">
          {sport?.emoji} {sport?.name}
        </h2>
        <SportNav />
        <UpcomingMatches />
      </main>
    );
  }

  // Home view
  return (
    <main className="main-content">
      <FeaturedBanner />
      <QuickLinks />
      <LiveMatches />
      <PopularBets />
      <UpcomingMatches />
    </main>
  );
}

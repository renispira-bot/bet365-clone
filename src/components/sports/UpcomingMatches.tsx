import { matches } from '../../data/matches';
import { useSport } from '../../contexts/SportContext';
import LeagueGroup from './LeagueGroup';
import type { Match } from '../../types';

export default function UpcomingMatches() {
  const { activeSport } = useSport();

  const filtered = activeSport
    ? matches.filter(m => m.sportId === activeSport)
    : matches;

  const grouped = filtered.reduce<Record<string, Match[]>>((acc, match) => {
    const key = match.leagueName;
    if (!acc[key]) acc[key] = [];
    acc[key].push(match);
    return acc;
  }, {});

  return (
    <div className="upcoming-matches">
      {Object.entries(grouped).map(([league, leagueMatches]) => (
        <LeagueGroup key={league} leagueName={league} matches={leagueMatches} />
      ))}
      {Object.keys(grouped).length === 0 && (
        <div className="no-matches">No upcoming matches found</div>
      )}
    </div>
  );
}

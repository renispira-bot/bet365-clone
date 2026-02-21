import { useState, useEffect, useCallback } from 'react';
import { liveMatches as initialLiveMatches } from '../../data/liveMatches';
import { liveMatchStats as initialStats } from '../../data/liveMatchStats';
import LeagueGroup from './LeagueGroup';
import SportIcon from '../common/SportIcon';
import type { LiveMatch, LiveMatchStats, SportId } from '../../types';

export default function LiveMatches() {
  const [liveData, setLiveData] = useState<LiveMatch[]>(initialLiveMatches);
  const [filterSport, setFilterSport] = useState<SportId | 'all'>('all');
  const [statsData, setStatsData] = useState<Record<string, LiveMatchStats>>(initialStats);

  const shiftOdds = useCallback(() => {
    setLiveData(prev => prev.map(match => {
      const shift = () => {
        const delta = (Math.random() - 0.5) * 0.2;
        return Math.max(1.01, +(match.odds.home + delta).toFixed(2));
      };
      return {
        ...match,
        odds: {
          home: shift(),
          draw: match.odds.draw !== null ? Math.max(1.01, +(match.odds.draw + (Math.random() - 0.5) * 0.3).toFixed(2)) : null,
          away: shift(),
        },
        minute: match.minute > 0 ? match.minute + 1 : match.minute,
      };
    }));

    // Also shift live stats slightly
    setStatsData(prev => {
      const next = { ...prev };
      for (const key of Object.keys(next)) {
        const s = { ...next[key] };
        const possShift = Math.floor(Math.random() * 3) - 1;
        s.homePossession = Math.max(30, Math.min(70, s.homePossession + possShift));
        s.awayPossession = 100 - s.homePossession;
        if (Math.random() > 0.7) s.homeShots += 1;
        if (Math.random() > 0.7) s.awayShots += 1;
        if (Math.random() > 0.9) s.homeCorners += 1;
        if (Math.random() > 0.9) s.awayCorners += 1;
        next[key] = s;
      }
      return next;
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(shiftOdds, 5000 + Math.random() * 3000);
    return () => clearInterval(interval);
  }, [shiftOdds]);

  const filtered = filterSport === 'all' ? liveData : liveData.filter(m => m.sportId === filterSport);
  const sportIds = [...new Set(liveData.map(m => m.sportId))];

  const grouped = filtered.reduce<Record<string, LiveMatch[]>>((acc, match) => {
    const key = match.leagueName;
    if (!acc[key]) acc[key] = [];
    acc[key].push(match);
    return acc;
  }, {});

  return (
    <div className="live-matches">
      <div className="live-matches__header">
        <h2>Live</h2>
        <span className="live-matches__count">{liveData.length} ngjarje</span>
      </div>
      <div className="live-matches__filters">
        <button
          className={`live-filter-btn ${filterSport === 'all' ? 'live-filter-btn--active' : ''}`}
          onClick={() => setFilterSport('all')}
        >
          Të gjitha ({liveData.length})
        </button>
        {sportIds.map(sid => (
          <button
            key={sid}
            className={`live-filter-btn ${filterSport === sid ? 'live-filter-btn--active' : ''}`}
            onClick={() => setFilterSport(sid)}
          >
            <SportIcon sportId={sid} size={14} />
            {liveData.filter(m => m.sportId === sid).length}
          </button>
        ))}
      </div>
      <div className="live-matches__list">
        {Object.entries(grouped).map(([league, matches]) => (
          <LeagueGroup key={league} leagueName={league} matches={matches} isLive liveStats={statsData} />
        ))}
      </div>
    </div>
  );
}

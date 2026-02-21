import { useState } from 'react';
import { sports } from '../../data/sports';
import { useSport } from '../../contexts/SportContext';
import Badge from '../common/Badge';
import type { SportId } from '../../types';

export default function SportsSidebar() {
  const { activeSport, navigateToSport, navigateToInPlay } = useSport();
  const [expandedSport, setExpandedSport] = useState<SportId | null>(null);

  const toggleExpand = (sportId: SportId) => {
    setExpandedSport(prev => (prev === sportId ? null : sportId));
  };

  return (
    <aside className="sidebar">
      <button className="sidebar__in-play" onClick={navigateToInPlay}>
        <span className="sidebar__live-dot" />
        In-Play
      </button>
      <div className="sidebar__sports">
        {sports.map(sport => (
          <div key={sport.id} className="sidebar__sport">
            <button
              className={`sidebar__sport-btn ${activeSport === sport.id ? 'sidebar__sport-btn--active' : ''}`}
              onClick={() => navigateToSport(sport.id)}
            >
              <span className="sidebar__sport-emoji">{sport.emoji}</span>
              <span className="sidebar__sport-name">{sport.name}</span>
              <Badge count={sport.matchCount} />
              {sport.leagues.length > 1 && (
                <span
                  className="sidebar__expand"
                  onClick={e => { e.stopPropagation(); toggleExpand(sport.id); }}
                >
                  {expandedSport === sport.id ? '\u25B2' : '\u25BC'}
                </span>
              )}
            </button>
            {expandedSport === sport.id && (
              <div className="sidebar__leagues">
                {sport.leagues.map(league => (
                  <button key={league.id} className="sidebar__league">
                    <span>{league.name}</span>
                    <Badge count={league.matchCount} />
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </aside>
  );
}

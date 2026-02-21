import { useState } from 'react';
import MatchRow from './MatchRow';
import type { Match, LiveMatch } from '../../types';

type LeagueGroupProps = {
  leagueName: string;
  matches: (Match | LiveMatch)[];
  isLive?: boolean;
  defaultExpanded?: boolean;
};

export default function LeagueGroup({ leagueName, matches, isLive = false, defaultExpanded = true }: LeagueGroupProps) {
  const [expanded, setExpanded] = useState(defaultExpanded);

  return (
    <div className="league-group">
      <button className="league-group__header" onClick={() => setExpanded(!expanded)}>
        <span className="league-group__name">{leagueName}</span>
        <span className="league-group__toggle">{expanded ? '\u25B2' : '\u25BC'}</span>
      </button>
      {expanded && (
        <div className="league-group__matches">
          {matches.map(match => (
            <MatchRow key={match.id} match={match} isLive={isLive} />
          ))}
        </div>
      )}
    </div>
  );
}

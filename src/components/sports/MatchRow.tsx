import OddsButton from './OddsButton';
import LiveIndicator from '../common/LiveIndicator';
import type { Match, LiveMatch } from '../../types';

type MatchRowProps = {
  match: Match | LiveMatch;
  isLive?: boolean;
};

function isLiveMatch(match: Match | LiveMatch): match is LiveMatch {
  return 'homeScore' in match;
}

export default function MatchRow({ match, isLive = false }: MatchRowProps) {
  const live = isLive && isLiveMatch(match);
  const matchLabel = `${match.homeTeam} vs ${match.awayTeam}`;

  return (
    <div className="match-row">
      <div className="match-row__info">
        <div className="match-row__time">
          {live ? (
            <>
              <LiveIndicator />
              <span className="match-row__minute">{isLiveMatch(match) ? match.period : ''}</span>
            </>
          ) : (
            <span>{match.startTime}</span>
          )}
        </div>
        <div className="match-row__teams">
          <span className="match-row__team">{match.homeTeam}</span>
          <span className="match-row__team">{match.awayTeam}</span>
        </div>
        {live && isLiveMatch(match) && (
          <div className="match-row__score">
            <span>{match.homeScore}</span>
            <span>{match.awayScore}</span>
          </div>
        )}
      </div>
      <div className="match-row__odds">
        <OddsButton
          selection={{ id: `${match.id}-home`, matchId: match.id, matchLabel, market: 'Rezultati i Ndeshjes', selection: match.homeTeam, odds: match.odds.home }}
          odds={match.odds.home}
          label="1"
        />
        {match.odds.draw !== null && (
          <OddsButton
            selection={{ id: `${match.id}-draw`, matchId: match.id, matchLabel, market: 'Rezultati i Ndeshjes', selection: 'Barazim', odds: match.odds.draw }}
            odds={match.odds.draw}
            label="X"
          />
        )}
        <OddsButton
          selection={{ id: `${match.id}-away`, matchId: match.id, matchLabel, market: 'Rezultati i Ndeshjes', selection: match.awayTeam, odds: match.odds.away }}
          odds={match.odds.away}
          label="2"
        />
      </div>
      <div className="match-row__markets">
        +{match.marketsCount}
      </div>
    </div>
  );
}

import { useState } from 'react';
import OddsButton from './OddsButton';
import LiveIndicator from '../common/LiveIndicator';
import { matchExtras } from '../../data/matchExtras';
import type { Match, LiveMatch, LiveMatchStats, FormResult } from '../../types';

type MatchRowProps = {
  match: Match | LiveMatch;
  isLive?: boolean;
  liveStats?: LiveMatchStats;
};

function isLiveMatch(match: Match | LiveMatch): match is LiveMatch {
  return 'homeScore' in match;
}

function FormDots({ form }: { form: FormResult[] }) {
  return (
    <div className="match-row__form-dots">
      {form.map((r, i) => (
        <span key={i} className={`form-dot form-dot--${r === 'W' ? 'win' : r === 'D' ? 'draw' : 'loss'}`}>{r}</span>
      ))}
    </div>
  );
}

export default function MatchRow({ match, isLive = false, liveStats }: MatchRowProps) {
  const live = isLive && isLiveMatch(match);
  const matchLabel = `${match.homeTeam} vs ${match.awayTeam}`;
  const [starred, setStarred] = useState(false);
  const extras = matchExtras[match.id];

  return (
    <div className="match-row">
      <button className={`match-row__star ${starred ? 'match-row__star--active' : ''}`} onClick={() => setStarred(!starred)}>
        {starred ? '★' : '☆'}
      </button>
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
          <div className="match-row__team-line">
            {extras && <span className="match-row__position">#{extras.homePosition}</span>}
            <span className="match-row__team">{match.homeTeam}</span>
            {extras && <FormDots form={extras.homeForm} />}
          </div>
          <div className="match-row__team-line">
            {extras && <span className="match-row__position">#{extras.awayPosition}</span>}
            <span className="match-row__team">{match.awayTeam}</span>
            {extras && <FormDots form={extras.awayForm} />}
          </div>
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
        {extras && (
          <>
            <OddsButton
              selection={{ id: `${match.id}-over25`, matchId: match.id, matchLabel, market: 'Mbi/Nën 2.5', selection: 'Mbi 2.5', odds: extras.overUnder25.over }}
              odds={extras.overUnder25.over}
              label="O2.5"
            />
            <OddsButton
              selection={{ id: `${match.id}-under25`, matchId: match.id, matchLabel, market: 'Mbi/Nën 2.5', selection: 'Nën 2.5', odds: extras.overUnder25.under }}
              odds={extras.overUnder25.under}
              label="U2.5"
            />
            <OddsButton
              selection={{ id: `${match.id}-bttsY`, matchId: match.id, matchLabel, market: 'Të Dy Shënojnë', selection: 'Po', odds: extras.btts.yes }}
              odds={extras.btts.yes}
              label="BTTS"
            />
          </>
        )}
      </div>
      <div className="match-row__markets">
        +{match.marketsCount}
      </div>
      {live && liveStats && (
        <div className="match-row__live-stats">
          <div className="live-stat">
            <span className="live-stat__home">{liveStats.homePossession}%</span>
            <span className="live-stat__label">Posedim</span>
            <span className="live-stat__away">{liveStats.awayPossession}%</span>
          </div>
          <div className="live-stat">
            <span className="live-stat__home">{liveStats.homeShots}</span>
            <span className="live-stat__label">Gjuajt.</span>
            <span className="live-stat__away">{liveStats.awayShots}</span>
          </div>
          <div className="live-stat">
            <span className="live-stat__home">{liveStats.homeCorners}</span>
            <span className="live-stat__label">Korne</span>
            <span className="live-stat__away">{liveStats.awayCorners}</span>
          </div>
        </div>
      )}
    </div>
  );
}

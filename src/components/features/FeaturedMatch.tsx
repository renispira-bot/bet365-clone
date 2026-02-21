import { featuredMatch } from '../../data/featuredMatch';
import { useBetSlip } from '../../contexts/BetSlipContext';
import type { FormResult } from '../../types';

function FormDot({ result }: { result: FormResult }) {
  const cls = result === 'W' ? 'form-dot--win' : result === 'D' ? 'form-dot--draw' : 'form-dot--loss';
  return <span className={`form-dot ${cls}`}>{result}</span>;
}

export default function FeaturedMatch() {
  const { addSelection, selections } = useBetSlip();
  const m = featuredMatch;
  const matchLabel = `${m.homeTeam} vs ${m.awayTeam}`;

  const isSelected = (id: string) => selections.some(s => s.id === id);

  const handleOdds = (id: string, selection: string, market: string, odds: number) => {
    if (!isSelected(id)) {
      addSelection({ id, matchId: m.id, matchLabel, market, selection, odds });
    }
  };

  return (
    <div className="featured-match">
      <div className="featured-match__badge">Ndeshja e Ditës</div>
      <div className="featured-match__league">{m.league} &middot; {m.startTime}</div>
      <div className="featured-match__teams-row">
        <div className="featured-match__team-col">
          <span className="featured-match__team-name">{m.homeTeam}</span>
          <div className="featured-match__form">
            {m.homeForm.map((r, i) => <FormDot key={i} result={r} />)}
          </div>
        </div>
        <span className="featured-match__vs">VS</span>
        <div className="featured-match__team-col">
          <span className="featured-match__team-name">{m.awayTeam}</span>
          <div className="featured-match__form">
            {m.awayForm.map((r, i) => <FormDot key={i} result={r} />)}
          </div>
        </div>
      </div>
      <div className="featured-match__odds-grid">
        <button className={`featured-match__odd ${isSelected(`${m.id}-fh`) ? 'featured-match__odd--selected' : ''}`} onClick={() => handleOdds(`${m.id}-fh`, m.homeTeam, 'Rezultati i Ndeshjes', m.odds.home)}>
          <span className="featured-match__odd-label">1</span>
          <span className="featured-match__odd-value">{m.odds.home.toFixed(2)}</span>
        </button>
        <button className={`featured-match__odd ${isSelected(`${m.id}-fd`) ? 'featured-match__odd--selected' : ''}`} onClick={() => handleOdds(`${m.id}-fd`, 'Barazim', 'Rezultati i Ndeshjes', m.odds.draw)}>
          <span className="featured-match__odd-label">X</span>
          <span className="featured-match__odd-value">{m.odds.draw.toFixed(2)}</span>
        </button>
        <button className={`featured-match__odd ${isSelected(`${m.id}-fa`) ? 'featured-match__odd--selected' : ''}`} onClick={() => handleOdds(`${m.id}-fa`, m.awayTeam, 'Rezultati i Ndeshjes', m.odds.away)}>
          <span className="featured-match__odd-label">2</span>
          <span className="featured-match__odd-value">{m.odds.away.toFixed(2)}</span>
        </button>
        <button className={`featured-match__odd ${isSelected(`${m.id}-fo25`) ? 'featured-match__odd--selected' : ''}`} onClick={() => handleOdds(`${m.id}-fo25`, 'Mbi 2.5', 'Mbi/Nën 2.5', m.odds.over25)}>
          <span className="featured-match__odd-label">Mbi 2.5</span>
          <span className="featured-match__odd-value">{m.odds.over25.toFixed(2)}</span>
        </button>
        <button className={`featured-match__odd ${isSelected(`${m.id}-fu25`) ? 'featured-match__odd--selected' : ''}`} onClick={() => handleOdds(`${m.id}-fu25`, 'Nën 2.5', 'Mbi/Nën 2.5', m.odds.under25)}>
          <span className="featured-match__odd-label">Nën 2.5</span>
          <span className="featured-match__odd-value">{m.odds.under25.toFixed(2)}</span>
        </button>
        <button className={`featured-match__odd ${isSelected(`${m.id}-fby`) ? 'featured-match__odd--selected' : ''}`} onClick={() => handleOdds(`${m.id}-fby`, 'Po', 'Të Dy Shënojnë', m.odds.bttsYes)}>
          <span className="featured-match__odd-label">BTTS Po</span>
          <span className="featured-match__odd-value">{m.odds.bttsYes.toFixed(2)}</span>
        </button>
      </div>
    </div>
  );
}

import { popularBets } from '../../data/popularBets';

export default function PopularBets() {
  return (
    <div className="popular-bets">
      <h3 className="popular-bets__title">Popular Bets</h3>
      <div className="popular-bets__grid">
        {popularBets.map(bet => (
          <div key={bet.id} className="popular-bet-card">
            <div className="popular-bet-card__header">{bet.title}</div>
            <div className="popular-bet-card__selections">
              {bet.selections.map((sel, i) => (
                <div key={i} className="popular-bet-card__selection">
                  <span className="popular-bet-card__match">{sel.matchLabel}</span>
                  <span className="popular-bet-card__pick">{sel.pick}</span>
                  <span className="popular-bet-card__odds">{sel.odds.toFixed(2)}</span>
                </div>
              ))}
            </div>
            <div className="popular-bet-card__footer">
              <span className="popular-bet-card__total">Total Odds: {bet.totalOdds.toFixed(2)}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

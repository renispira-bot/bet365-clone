import { useState } from 'react';
import { useBetSlip } from '../../contexts/BetSlipContext';

export default function BetSlip() {
  const { selections, stake, setStake, totalOdds, potentialReturns, removeSelection, clearAll } = useBetSlip();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside className={`betslip ${collapsed ? 'betslip--collapsed' : ''}`}>
      <button className="betslip__header" onClick={() => setCollapsed(!collapsed)}>
        <span className="betslip__title">
          Bet Slip
          {selections.length > 0 && (
            <span className="betslip__count">{selections.length}</span>
          )}
        </span>
        <span className="betslip__toggle">{collapsed ? '\u25B2' : '\u25BC'}</span>
      </button>

      {!collapsed && (
        <div className="betslip__body">
          {selections.length === 0 ? (
            <div className="betslip__empty">
              <p>Your bet slip is empty</p>
              <p className="betslip__hint">Click on odds to add selections</p>
            </div>
          ) : (
            <>
              <div className="betslip__selections">
                {selections.map(sel => (
                  <div key={sel.id} className="betslip__selection">
                    <div className="betslip__selection-info">
                      <div className="betslip__selection-pick">{sel.selection}</div>
                      <div className="betslip__selection-market">{sel.market}</div>
                      <div className="betslip__selection-match">{sel.matchLabel}</div>
                    </div>
                    <div className="betslip__selection-right">
                      <span className="betslip__selection-odds">{sel.odds.toFixed(2)}</span>
                      <button
                        className="betslip__selection-remove"
                        onClick={() => removeSelection(sel.id)}
                      >
                        &times;
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="betslip__stake-row">
                <label htmlFor="stake-input" className="betslip__stake-label">Stake</label>
                <div className="betslip__stake-input-wrapper">
                  <span className="betslip__currency">$</span>
                  <input
                    id="stake-input"
                    type="number"
                    className="betslip__stake-input"
                    value={stake}
                    onChange={e => setStake(e.target.value)}
                    placeholder="0.00"
                    min="0"
                    step="0.01"
                  />
                </div>
              </div>

              <div className="betslip__summary">
                <div className="betslip__summary-row">
                  <span>Total Odds</span>
                  <span>{totalOdds.toFixed(2)}</span>
                </div>
                <div className="betslip__summary-row betslip__summary-row--returns">
                  <span>Potential Returns</span>
                  <span>${potentialReturns.toFixed(2)}</span>
                </div>
              </div>

              <button className="betslip__place-btn">
                Place Bet {stake ? `$${parseFloat(stake).toFixed(2)}` : ''}
              </button>

              <button className="betslip__clear" onClick={clearAll}>
                Remove All Selections
              </button>
            </>
          )}
        </div>
      )}
    </aside>
  );
}

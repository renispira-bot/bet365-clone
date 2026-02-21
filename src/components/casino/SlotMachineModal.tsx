import { useState, useCallback, useRef } from 'react';
import type { CasinoGame } from '../../types';

type SlotMachineModalProps = {
  game: CasinoGame;
  onClose: () => void;
};

const SYMBOLS = ['🍒', '💎', '⭐', '🔔', '🍋', '🍇', '7️⃣'];

function getRandomSymbol() {
  return SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];
}

export default function SlotMachineModal({ game, onClose }: SlotMachineModalProps) {
  const [credits, setCredits] = useState(1000);
  const [bet, setBet] = useState(10);
  const [reels, setReels] = useState([getRandomSymbol(), getRandomSymbol(), getRandomSymbol()]);
  const [spinning, setSpinning] = useState([false, false, false]);
  const [message, setMessage] = useState('Kliko "Rrotullo" për të luajtur!');
  const [winAmount, setWinAmount] = useState(0);
  const intervalsRef = useRef<ReturnType<typeof setInterval>[]>([]);

  const spin = useCallback(() => {
    if (spinning.some(Boolean)) return;
    if (credits < bet) {
      setMessage('Nuk ke mjaftueshëm kredite!');
      return;
    }

    setCredits(prev => prev - bet);
    setMessage('Duke Rrotulluar...');
    setWinAmount(0);
    setSpinning([true, true, true]);

    // Start all reels spinning
    const newIntervals = [0, 1, 2].map(i => {
      return setInterval(() => {
        setReels(prev => {
          const next = [...prev];
          next[i] = getRandomSymbol();
          return next;
        });
      }, 80);
    });
    intervalsRef.current = newIntervals;

    // Stop reels one by one
    const finalSymbols = [getRandomSymbol(), getRandomSymbol(), getRandomSymbol()];

    setTimeout(() => {
      clearInterval(newIntervals[0]);
      setReels(prev => [finalSymbols[0], prev[1], prev[2]]);
      setSpinning(prev => [false, prev[1], prev[2]]);
    }, 600);

    setTimeout(() => {
      clearInterval(newIntervals[1]);
      setReels(prev => [prev[0], finalSymbols[1], prev[2]]);
      setSpinning(prev => [prev[0], false, prev[2]]);
    }, 1200);

    setTimeout(() => {
      clearInterval(newIntervals[2]);
      setReels([finalSymbols[0], finalSymbols[1], finalSymbols[2]]);
      setSpinning([false, false, false]);

      // Check wins
      if (finalSymbols[0] === finalSymbols[1] && finalSymbols[1] === finalSymbols[2]) {
        const multiplier = finalSymbols[0] === '7️⃣' ? 50 : finalSymbols[0] === '💎' ? 25 : 10;
        const win = bet * multiplier;
        setCredits(prev => prev + win);
        setWinAmount(win);
        setMessage(`FITORE! +${win} kredite!`);
      } else if (finalSymbols[0] === finalSymbols[1] || finalSymbols[1] === finalSymbols[2]) {
        const win = bet * 2;
        setCredits(prev => prev + win);
        setWinAmount(win);
        setMessage(`Fitore e vogël! +${win} kredite`);
      } else {
        setMessage('Provo përsëri!');
      }
    }, 1800);
  }, [bet, credits, spinning]);

  const adjustBet = (delta: number) => {
    setBet(prev => Math.max(5, Math.min(100, prev + delta)));
  };

  return (
    <div className="slot-modal-backdrop" onClick={onClose}>
      <div className="slot-modal" onClick={e => e.stopPropagation()}>
        <div className="slot-modal__header" style={{ background: game.gradient }}>
          <h3>{game.name}</h3>
          <button className="slot-modal__close" onClick={onClose}>&times;</button>
        </div>
        <div className="slot-modal__body">
          <div className="slot-modal__credits">
            <span>Kredite: <strong>{credits}</strong></span>
          </div>
          <div className="slot-modal__reels">
            {reels.map((symbol, i) => (
              <div key={i} className={`slot-modal__reel ${spinning[i] ? 'slot-modal__reel--spinning' : ''}`}>
                {symbol}
              </div>
            ))}
          </div>
          <div className={`slot-modal__message ${winAmount > 0 ? 'slot-modal__message--win' : ''}`}>
            {message}
          </div>
          <div className="slot-modal__controls">
            <div className="slot-modal__bet-control">
              <button className="slot-modal__bet-btn" onClick={() => adjustBet(-5)}>-</button>
              <span className="slot-modal__bet-amount">Bast: {bet}</span>
              <button className="slot-modal__bet-btn" onClick={() => adjustBet(5)}>+</button>
            </div>
            <button
              className="slot-modal__spin-btn"
              onClick={spin}
              disabled={spinning.some(Boolean)}
            >
              {spinning.some(Boolean) ? 'Duke Rrotulluar...' : 'Rrotullo'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

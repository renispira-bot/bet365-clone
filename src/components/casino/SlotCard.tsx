import type { CasinoGame } from '../../types';

type SlotCardProps = {
  game: CasinoGame;
  onPlay: (game: CasinoGame) => void;
};

export default function SlotCard({ game, onPlay }: SlotCardProps) {
  return (
    <div className="slot-card" style={{ background: game.gradient }}>
      {game.isNew && <span className="slot-card__new-badge">E RE</span>}
      {game.jackpotAmount && <span className="slot-card__jackpot">{game.jackpotAmount}</span>}
      <div className="slot-card__icon">
        {game.category === 'popular' && '⭐'}
        {game.category === 'new' && '🎰'}
        {game.category === 'jackpot' && '💎'}
        {game.category === 'table' && '🃏'}
      </div>
      <div className="slot-card__info">
        <span className="slot-card__name">{game.name}</span>
        <span className="slot-card__provider">{game.provider}</span>
      </div>
      <div className="slot-card__overlay">
        <button className="slot-card__play-btn" onClick={() => onPlay(game)}>Luaj</button>
      </div>
    </div>
  );
}

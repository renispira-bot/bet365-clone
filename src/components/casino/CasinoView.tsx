import { useState } from 'react';
import { casinoGames } from '../../data/casinoGames';
import SlotCard from './SlotCard';
import SlotMachineModal from './SlotMachineModal';
import type { CasinoGame, CasinoCategory } from '../../types';

const categories: { id: CasinoCategory; label: string }[] = [
  { id: 'all', label: 'Të Gjitha' },
  { id: 'popular', label: 'Popullore' },
  { id: 'new', label: 'Të Reja' },
  { id: 'jackpot', label: 'Jackpot' },
  { id: 'table', label: 'Lojëra Tavoline' },
];

export default function CasinoView() {
  const [activeCategory, setActiveCategory] = useState<CasinoCategory>('all');
  const [activeGame, setActiveGame] = useState<CasinoGame | null>(null);

  const filtered = activeCategory === 'all'
    ? casinoGames
    : casinoGames.filter(g => g.category === activeCategory);

  return (
    <div className="casino-view">
      <div className="casino-view__header">
        <h2>Kazino & Slot</h2>
        <span className="casino-view__count">{filtered.length} lojëra</span>
      </div>
      <div className="casino-view__categories">
        {categories.map(cat => (
          <button
            key={cat.id}
            className={`casino-category-btn ${activeCategory === cat.id ? 'casino-category-btn--active' : ''}`}
            onClick={() => setActiveCategory(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>
      <div className="casino-view__grid">
        {filtered.map(game => (
          <SlotCard key={game.id} game={game} onPlay={setActiveGame} />
        ))}
      </div>
      {activeGame && (
        <SlotMachineModal game={activeGame} onClose={() => setActiveGame(null)} />
      )}
    </div>
  );
}

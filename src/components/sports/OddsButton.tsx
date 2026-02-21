import { useState, useEffect, useRef } from 'react';
import { useBetSlip } from '../../contexts/BetSlipContext';
import type { BetSelection } from '../../types';

type OddsButtonProps = {
  selection: BetSelection;
  odds: number;
  label: string;
};

export default function OddsButton({ selection, odds, label }: OddsButtonProps) {
  const { isSelected, toggleSelection } = useBetSlip();
  const selected = isSelected(selection.id);
  const prevOdds = useRef(odds);
  const [flash, setFlash] = useState<'up' | 'down' | null>(null);

  useEffect(() => {
    if (odds > prevOdds.current) {
      setFlash('up');
    } else if (odds < prevOdds.current) {
      setFlash('down');
    }
    prevOdds.current = odds;
    const timer = setTimeout(() => setFlash(null), 1500);
    return () => clearTimeout(timer);
  }, [odds]);

  const handleClick = () => {
    toggleSelection({ ...selection, odds });
  };

  const className = [
    'odds-button',
    selected ? 'odds-button--selected' : '',
    flash === 'up' ? 'odds-button--flash-up' : '',
    flash === 'down' ? 'odds-button--flash-down' : '',
  ].filter(Boolean).join(' ');

  return (
    <button className={className} onClick={handleClick}>
      <span className="odds-button__label">{label}</span>
      <span className="odds-button__value">{odds.toFixed(2)}</span>
    </button>
  );
}

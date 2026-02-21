import { sports } from '../../data/sports';
import type { SportId } from '../../types';

export default function SportIcon({ sportId, size = 16 }: { sportId: SportId; size?: number }) {
  const sport = sports.find(s => s.id === sportId);
  return (
    <span className="sport-icon" style={{ fontSize: size }}>
      {sport?.emoji ?? '\u26BD'}
    </span>
  );
}

import { useSport } from '../../contexts/SportContext';
import type { SportId } from '../../types';

const quickLinks: { label: string; sportId: SportId }[] = [
  { label: '\u26BD Football', sportId: 'football' },
  { label: '\uD83C\uDFBE Tennis', sportId: 'tennis' },
  { label: '\uD83C\uDFC0 Basketball', sportId: 'basketball' },
  { label: '\uD83C\uDFD2 Ice Hockey', sportId: 'ice-hockey' },
  { label: '\uD83C\uDFCF Cricket', sportId: 'cricket' },
  { label: '\uD83C\uDFC9 Rugby', sportId: 'rugby' },
  { label: '\uD83C\uDFAE Esports', sportId: 'esports' },
];

export default function QuickLinks() {
  const { navigateToSport } = useSport();

  return (
    <div className="quick-links">
      {quickLinks.map(link => (
        <button
          key={link.sportId}
          className="quick-link-chip"
          onClick={() => navigateToSport(link.sportId)}
        >
          {link.label}
        </button>
      ))}
    </div>
  );
}

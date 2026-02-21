import { useSport } from '../../contexts/SportContext';
import type { SportId } from '../../types';

const quickLinks: { label: string; sportId: SportId }[] = [
  { label: '\u26BD Futboll', sportId: 'football' },
  { label: '\uD83C\uDFBE Tenis', sportId: 'tennis' },
  { label: '\uD83C\uDFC0 Basketboll', sportId: 'basketball' },
  { label: '\uD83C\uDFD2 Hokej mbi Akull', sportId: 'ice-hockey' },
  { label: '\uD83C\uDFCF Kriket', sportId: 'cricket' },
  { label: '\uD83C\uDFC9 Regbi', sportId: 'rugby' },
  { label: '\uD83C\uDFAE Esporte', sportId: 'esports' },
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

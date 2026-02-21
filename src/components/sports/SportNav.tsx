import { useSport } from '../../contexts/SportContext';
import type { SubViewType } from '../../types';

const tabs: { id: SubViewType; label: string }[] = [
  { id: 'all', label: 'All Matches' },
  { id: 'today', label: 'Today' },
  { id: 'tomorrow', label: 'Tomorrow' },
  { id: 'upcoming', label: 'Upcoming' },
];

export default function SportNav() {
  const { subView, setSubView } = useSport();

  return (
    <nav className="sport-nav">
      {tabs.map(tab => (
        <button
          key={tab.id}
          className={`sport-nav__tab ${subView === tab.id ? 'sport-nav__tab--active' : ''}`}
          onClick={() => setSubView(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </nav>
  );
}

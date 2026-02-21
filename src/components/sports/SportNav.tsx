import { useSport } from '../../contexts/SportContext';
import type { SubViewType } from '../../types';

const tabs: { id: SubViewType; label: string }[] = [
  { id: 'all', label: 'Të Gjitha Ndeshjet' },
  { id: 'today', label: 'Sot' },
  { id: 'tomorrow', label: 'Nesër' },
  { id: 'upcoming', label: 'Së Shpejti' },
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

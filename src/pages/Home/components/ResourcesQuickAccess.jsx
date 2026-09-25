import { Link } from 'react-router-dom';
import { SearchIcon } from '../../../components/icons.jsx';

const TILES = [
  { to: '/resources', icon: '📋', tone: 'teal', label: 'Clinical Guidelines', sub: 'Regional & provincial protocols' },
  { to: '/resources', icon: '🧰', tone: 'gold', label: 'Toolkits', sub: 'Practice-ready resources' },
  { to: '/resources', icon: '🗺️', tone: 'brand', label: 'Referral Pathways', sub: 'Who to call and when' },
  { to: '/education', icon: '📅', tone: 'teal', label: 'Education Calendar', sub: 'Upcoming sessions' },
  { to: '/resources', icon: '📄', tone: 'brand', label: 'Forms & Templates', sub: 'Standardized clinical forms' },
  { to: '/resources', icon: '🔗', tone: 'gold', label: 'Useful Links', sub: 'Partner organizations' },
];

function ResourcesQuickAccess() {
  return (
    <section id="resources" aria-label="Quick access to resources">
      <div className="wrap">
        <div className="resources-top">
          <div>
            <p className="section-eyebrow">For Providers</p>
            <h2 className="section-h2">Quick Access</h2>
          </div>
          <div className="search-wrap">
            <span className="search-icon-wrap" aria-hidden="true"><SearchIcon /></span>
            <input type="search" className="search-input" placeholder="Search guidelines, toolkits, pathways…" aria-label="Search resources" />
          </div>
        </div>

        <div className="resource-tiles" role="list">
          {TILES.map(({ to, icon, tone, label, sub }) => (
            <Link key={label} to={to} className="res-tile" role="listitem">
              <div className={`res-tile-icon res-tile-icon--${tone}`}>{icon}</div>
              <span className="res-tile-label">{label}</span>
              <span className="res-tile-sub">{sub}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ResourcesQuickAccess;

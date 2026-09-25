import { SearchIcon } from '../../../components/icons.jsx';

const JUMP_LINKS = [
  { id: 'partner', title: 'Partner Resources', sub: 'Secure portal materials' },
  { id: 'measles', title: 'Measles Resources', sub: 'Local PDFs and updates' },
  { id: 'competency', title: 'Competency Tools', sub: 'Partner-only downloads' },
  { id: 'forms', title: 'Forms & Guidelines', sub: 'Local clinical PDFs' },
];

function ResourceSearchCard({ searchQuery, setSearchQuery }) {
  const clear = () => setSearchQuery('');

  return (
    <div className="hero-search-card">
      <div className="search-title">Search the library</div>
      <div className="hero-search-row">
        <span className="search-icon" aria-hidden="true"><SearchIcon /></span>
        <input
          id="globalSearch"
          type="search"
          placeholder="Search measles, forms, links..."
          aria-label="Search resources"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="hero-jump-grid">
        {JUMP_LINKS.map(({ id, title, sub }) => (
          <a key={id} className="hero-jump-link" href={`#${id}`} onClick={clear}>
            <strong>{title}</strong>
            <span>{sub}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default ResourceSearchCard;

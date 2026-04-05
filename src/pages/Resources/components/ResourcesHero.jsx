import React from 'react';

function ResourcesHero({ searchQuery, setSearchQuery }) {
  return (
    <section className="page-hero" aria-label="Resources">
      <div className="wrap page-hero-inner" style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: '2.5rem', alignItems: 'center' }}>
        <div>
          <span className="page-hero-kicker">Clinical Library</span>
          <h1>Resources for Providers &amp; Partners</h1>
          <p>
            Access local documents, clinical forms, partner-only materials, and trusted external links that support perinatal and paediatric care across the region.
          </p>
        </div>

        <div className="hero-search-card">
          <div className="search-title">Search the library</div>
          <div className="hero-search-row">
            <span className="search-icon" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
            </span>
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
            <a className="hero-jump-link" href="#partner" onClick={() => setSearchQuery('')}>
              <strong>Partner Resources</strong>
              <span>Secure portal materials</span>
            </a>
            <a className="hero-jump-link" href="#measles" onClick={() => setSearchQuery('')}>
              <strong>Measles Resources</strong>
              <span>Local PDFs and updates</span>
            </a>
            <a className="hero-jump-link" href="#competency" onClick={() => setSearchQuery('')}>
              <strong>Competency Tools</strong>
              <span>Partner-only downloads</span>
            </a>
            <a className="hero-jump-link" href="#forms" onClick={() => setSearchQuery('')}>
              <strong>Forms &amp; Guidelines</strong>
              <span>Local clinical PDFs</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ResourcesHero;

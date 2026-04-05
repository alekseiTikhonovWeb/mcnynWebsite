import React from 'react';

function ResourceResultsView({ searchQuery, filteredItems, groupedResults, onClear, renderResourceItem }) {
  return (
    <div className="search-results-list" style={{ width: '100%' }}>
      <div className="section-head" style={{ marginBottom: '2.5rem' }}>
        <span className="pill pill-brand">Search results</span>
        <h2>Showing results for "{searchQuery}"</h2>
        <p>{filteredItems.length} materials matching your criteria.</p>
      </div>

      {filteredItems.length > 0 ? (
        Object.keys(groupedResults).map(categoryTitle => (
          <div key={categoryTitle} className="search-category-group" style={{ marginBottom: '3rem' }}>
            <h3 style={{ 
              fontSize: '1rem', 
              color: 'var(--brand)', 
              opacity: 0.6, 
              textTransform: 'uppercase', 
              letterSpacing: '0.1em',
              marginBottom: '1rem',
              borderBottom: '1px solid rgba(0,0,0,0.05)',
              paddingBottom: '0.5rem'
            }}>
              {categoryTitle}
            </h3>
            <div className="linklist">
              {groupedResults[categoryTitle].map((item, idx) => (
                <div key={idx} style={{ marginBottom: '0.5rem' }}>
                  {renderResourceItem(item, idx)}
                  {item.subCategoryTitle && (
                    <div style={{ fontSize: '0.7rem', color: 'var(--brand)', opacity: 0.5, marginTop: '-0.3rem', marginLeft: '1rem', marginBottom: '0.8rem' }}>
                      Sub-category: {item.subCategoryTitle}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))
      ) : (
        <div className="note-box" style={{ textAlign: 'center', padding: '4rem 2rem' }}>
          <strong>No materials found</strong><br />
          <span style={{ opacity: 0.7 }}>Try using different keywords or check your spelling.</span>
        </div>
      )}
      
      <div style={{ marginTop: '2rem', textAlign: 'center', borderTop: '1px solid rgba(0,0,0,0.05)', paddingTop: '2rem' }}>
        <button 
          onClick={onClear}
          style={{ background: 'var(--brand)', border: 'none', color: 'var(--white)', padding: '0.7rem 1.8rem', borderRadius: '4px', cursor: 'pointer', fontWeight: 600, fontSize: '0.9rem' }}
        >
          Clear search
        </button>
      </div>
    </div>
  );
}

export default ResourceResultsView;

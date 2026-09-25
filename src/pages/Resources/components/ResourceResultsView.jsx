import ResourceItem from './ResourceItem.jsx';

function ResourceResultsView({ searchQuery, items, onClear }) {
  const groups = items.reduce((acc, item) => {
    (acc[item.categoryTitle] ??= []).push(item);
    return acc;
  }, {});

  return (
    <div className="search-results">
      <div className="section-head">
        <span className="pill pill-brand">Search results</span>
        <h2>Showing results for "{searchQuery}"</h2>
        <p>{items.length} materials matching your criteria.</p>
      </div>

      {items.length > 0 ? (
        Object.entries(groups).map(([category, list]) => (
          <div key={category} className="search-group">
            <h3>{category}</h3>
            <div className="linklist">
              {list.map((item, i) => (
                <div key={i} className="search-result">
                  <ResourceItem item={item} />
                  {item.subCategoryTitle && (
                    <div className="search-result-sub">Sub-category: {item.subCategoryTitle}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))
      ) : (
        <div className="note-box search-empty">
          <strong>No materials found</strong><br />
          <span>Try using different keywords or check your spelling.</span>
        </div>
      )}

      <div className="search-clear">
        <button onClick={onClear}>Clear search</button>
      </div>
    </div>
  );
}

export default ResourceResultsView;

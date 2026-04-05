import React from 'react';

function ResourceCategoryAccordion({ resourcesData, openItems, onToggle, renderResourceItem }) {
  return (
    <>
      {resourcesData.map((cat) => (
        <section className="section-card" id={cat.id} key={cat.id}>
          <div className="section-head">
            {cat.pill && <span className={`pill ${cat.pillClass}`}>{cat.pill}</span>}
            <h2>{cat.title}</h2>
            {cat.description && <p>{cat.description}</p>}
          </div>

          <div className="section-body">
            <div className="accordion">
              {cat.subcategories ? (
                cat.subcategories.map(sub => (
                  <div className={`accordion-item ${openItems[sub.id] ? 'open' : ''}`} key={sub.id}>
                    <button className="accordion-toggle" type="button" onClick={() => onToggle(sub.id)}>
                      <span className="accordion-label">
                        <span className="accordion-dot brand"></span>
                        <span>{sub.title}</span>
                      </span>
                      <span className="accordion-arrow">›</span>
                    </button>
                    <div className="accordion-content">
                      {sub.description && <p className="muted" style={{ marginBottom: ".8rem" }}>{sub.description}</p>}
                      <div className="linklist">
                        {sub.items.map((item, idx) => renderResourceItem(item, idx))}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className={`accordion-item ${openItems[cat.id] ? 'open' : ''}`}>
                  <button className="accordion-toggle" type="button" onClick={() => onToggle(cat.id)}>
                    <span className="accordion-label">
                      <span className="accordion-dot brand"></span>
                      <span>Open {cat.title}</span>
                    </span>
                    <span className="accordion-arrow">›</span>
                  </button>
                  <div className="accordion-content">
                    <div className={(cat.id === 'forms' || cat.id === 'resource-links') ? 'split-list' : 'linklist'}>
                      {cat.items.map((item, idx) => renderResourceItem(item, idx))}
                    </div>
                    {cat.note && (
                      <div className="note-box" style={{ marginTop: '1.5rem' }}>
                        {cat.note}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}

export default ResourceCategoryAccordion;

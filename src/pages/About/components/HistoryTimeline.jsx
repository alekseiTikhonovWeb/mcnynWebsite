import React from 'react';
import { historyData } from '../aboutData';

function HistoryTimeline() {
  return (
    <section className="about-history" aria-label="Our history">
      <div className="wrap">
        <p className="section-eyebrow">Our Journey</p>
        <h2 className="section-h2">History</h2>
        <p style={{ color: 'var(--smoke)', fontSize: '.95rem', marginTop: '.5rem', marginBottom: '1rem', maxWidth: '60ch' }}>
          From a single perinatal outreach program in 1979 to a regional network serving all of South West Ontario.
        </p>

        <div className="timeline-clean">
          {historyData.map(({ decade, label, body }) => (
            <div className="tl-item" key={decade}>
              <span className="tl-decade">
                {decade.slice(0, -1)}
                <small style={{ fontSize: '0.85em', textTransform: 'lowercase' }}>{decade.slice(-1)}</small>
              </span>
              <h3 className="tl-title">{label}</h3>
              <p className="tl-body">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HistoryTimeline;

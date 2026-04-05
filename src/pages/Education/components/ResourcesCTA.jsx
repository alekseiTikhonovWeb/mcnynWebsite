import React from 'react';
import { Link } from 'react-router-dom';

function ResourcesCTA() {
  return (
    <section style={{ background: 'var(--linen)', padding: 'clamp(2rem,5vw,3.5rem) 0' }} aria-label="Related resources">
      <div className="wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '2rem', flexWrap: 'wrap' }}>
        <div>
          <p className="section-eyebrow">Related</p>
          <h2 className="section-h2" style={{ fontSize: 'clamp(1.3rem,2.5vw,1.75rem)' }}>Looking for clinical resources?</h2>
          <p style={{ color: 'var(--smoke)', fontSize: '.92rem', marginTop: '.4rem' }}>Guidelines, toolkits, forms, and referral pathways are available in the Resources section.</p>
        </div>
        <Link to="/resources" className="btn btn-a">Browse Resources →</Link>
      </div>
    </section>
  );
}

export default ResourcesCTA;

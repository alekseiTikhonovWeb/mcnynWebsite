import React from 'react';
import { deliverables } from '../programsData';

function DeliverablesGrid() {
  return (
    <section className="page-content" style={{ background: 'var(--linen)' }} aria-label="MNCYN deliverables">
      <div className="wrap">
        <p className="section-eyebrow">Across Both Programs</p>
        <h2 className="page-section-title">MNCYN Deliverables</h2>
        <p className="page-section-lead">
          These deliverables apply to both the Perinatal and Paediatric programs. They represent how MNCYN fulfills its mandate to support high-quality, consistent regional care.
        </p>

        <div className="deliverables-grid">
          {deliverables.map(({ title, desc }) => (
            <div className="deliverable-item" key={title}>
              <span className="deliverable-bullet"></span>
              <div>
                <strong>{title}</strong>
                <span>{desc}</span>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '2.25rem', padding: '1.5rem 1.75rem', background: 'var(--white)', borderRadius: 'var(--r-lg)', border: '1px solid rgba(71,65,123,.1)' }}>
          <p style={{ fontSize: '.95rem', color: 'var(--smoke)', lineHeight: 1.7 }}>
            <strong style={{ color: 'var(--brand)', display: 'block', marginBottom: '.4rem', fontFamily: 'var(--ff-head)', fontStyle: 'italic', fontSize: '1.05rem' }}>RCCE — Regional Centres of Clinical Excellence</strong>
            MNCYN works in collaboration with Regional Centres of Clinical Excellence across South West Ontario. For more information, visit the{' '}
            <a href="https://mncyn.ca" style={{ color: 'var(--teal)', fontWeight: 600 }}>current MNCYN website</a>.
          </p>
        </div>
      </div>
    </section>
  );
}

export default DeliverablesGrid;

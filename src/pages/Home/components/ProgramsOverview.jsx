import React from 'react';
import { Link } from 'react-router-dom';

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
  </svg>
);

function ProgramsOverview() {
  return (
    <section id="programs" aria-label="Our programs" style={{ background: 'var(--linen)', padding: 'clamp(2.5rem,6vw,4.5rem) 0' }}>
      <div className="wrap">
        <div className="programs-header">
          <div>
            <p className="section-eyebrow">What We Do</p>
            <h2 className="section-h2">Our Programs</h2>
          </div>
          <p style={{ color: 'var(--smoke)', fontSize: '.95rem', lineHeight: 1.7, maxWidth: '42ch' }}>
            Two regional programs supporting care for families across South West Ontario.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.25rem' }}>

          {/* Perinatal */}
          <div className="prog-card prog-card--perinatal">
            <span className="prog-card-bg-char" aria-hidden="true">P</span>
            <div className="prog-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
            </div>
            <h3 className="prog-h3">Perinatal Program</h3>
            <p className="prog-desc">Supporting care for pregnant individuals, birthing families, and newborns across Southwestern Ontario. We work with obstetrical units, midwifery groups, and community partners to share consistent clinical protocols and support their teams.</p>
            <div className="prog-links">
              <Link to="/programs" className="prog-link">Program overview</Link>
              <Link to="/resources" className="prog-link">Clinical tools &amp; resources</Link>
              <Link to="/education" className="prog-link">Education sessions</Link>
            </div>
          </div>

          {/* Paediatric */}
          <div className="prog-card prog-card--paediatric">
            <span className="prog-card-bg-char" aria-hidden="true">P</span>
            <div className="prog-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--gold-dark)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
            </div>
            <h3 className="prog-h3">Paediatric Program</h3>
            <p className="prog-desc">Working with child and youth health providers across the region to connect services, share learning, and support families navigating paediatric care — from early infancy through to adolescence.</p>
            <div className="prog-links">
              <Link to="/programs" className="prog-link">Program overview</Link>
              <Link to="/resources" className="prog-link">Clinical tools &amp; resources</Link>
              <Link to="/education" className="prog-link">Education sessions</Link>
            </div>
          </div>

        </div>

        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
          <Link to="/programs" className="btn btn-a">View all programs &amp; deliverables <ArrowIcon /></Link>
        </div>
      </div>
    </section>
  );
}

export default ProgramsOverview;

import React from 'react';
import { Link } from 'react-router-dom';
import { paediatricCourses } from '../educationData';

function PaediatricPanel({ isActive }) {
  return (
    <div className={`edu-tab-panel${isActive ? ' active' : ''}`} role="tabpanel" aria-label="Paediatric Education">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px,1fr))', gap: '1rem', marginBottom: '2rem' }}>
        {paediatricCourses.map(({ title, desc, tag }) => (
          <div key={title} style={{
            background: 'var(--white)', borderRadius: 'var(--r-md)',
            border: '1px solid rgba(255,174,0,.15)', padding: '1.35rem',
            display: 'flex', flexDirection: 'column', gap: '.5rem',
          }}>
            <span style={{
              display: 'inline-block', fontSize: '.68rem', fontWeight: 700,
              letterSpacing: '.08em', textTransform: 'uppercase',
              color: 'var(--gold-dark)', background: 'var(--gold-light)',
              borderRadius: 100, padding: '.2rem .6rem', alignSelf: 'flex-start',
            }}>{tag}</span>
            <strong style={{ fontFamily: 'var(--ff-head)', fontStyle: 'italic', fontSize: '1rem', color: 'var(--brand)', lineHeight: 1.25 }}>{title}</strong>
            <span style={{ fontSize: '.875rem', color: 'var(--smoke)', lineHeight: 1.65 }}>{desc}</span>
          </div>
        ))}
      </div>
      <div className="edu-placeholder">
        <h3>Session dates coming soon</h3>
        <p style={{ fontSize: '.9rem', marginTop: '.4rem' }}>Upcoming paediatric education sessions will be listed here. <Link to="/contact" style={{ color: 'var(--teal)' }}>Contact us</Link> to be notified when registration opens.</p>
      </div>
    </div>
  );
}

export default PaediatricPanel;

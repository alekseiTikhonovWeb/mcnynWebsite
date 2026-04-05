import React from 'react';
import { Link } from 'react-router-dom';

function ProgramsCTA() {
  return (
    <section style={{ background: 'var(--brand)', padding: 'clamp(2rem,4vw,3.25rem) 0' }} aria-label="Learn more">
      <div className="wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '2rem', flexWrap: 'wrap' }}>
        <div>
          <h2 style={{ fontFamily: 'var(--ff-head)', fontStyle: 'italic', color: 'var(--white)', fontSize: 'clamp(1.3rem,2.5vw,1.8rem)', marginBottom: '.4rem' }}>
            Want to learn about our education offerings?
          </h2>
          <p style={{ color: 'rgba(255,255,255,.6)', fontSize: '.92rem' }}>
            Sessions are available for both Perinatal and Paediatric providers.
          </p>
        </div>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link to="/education" className="btn-login">Education &amp; Sessions →</Link>
          <Link to="/contact" className="btn-login">Get in touch →</Link>
        </div>
      </div>
    </section>
  );
}

export default ProgramsCTA;

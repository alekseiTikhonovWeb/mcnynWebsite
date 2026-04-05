import React from 'react';

function HomeNewsletter() {
  return (
    <section id="newsletter" aria-label="Newsletter signup" style={{ background: 'var(--brand-light)', borderTop: '1px solid rgba(71,65,123,.1)', padding: 'clamp(2.5rem,6vw,4.5rem) 0' }}>
      <div className="wrap nl-inner">
        <div className="nl-left">
          <p className="section-eyebrow">Stay Connected</p>
          <h2 style={{ fontFamily: 'var(--ff-head)', fontStyle: 'italic', fontWeight: 600, fontSize: 'clamp(1.5rem,3vw,2.2rem)', color: 'var(--brand)', letterSpacing: '-.01em', marginBottom: '.65rem', lineHeight: 1.2 }}>
            Stay connected<br />with MNCYN
          </h2>
          <p style={{ fontSize: '.95rem', color: 'var(--smoke)', lineHeight: 1.7, maxWidth: '380px' }}>
            Join our mailing list to receive program updates, education opportunities, and regional news. Select whichever programs are relevant to your work.
          </p>
        </div>

        <div className="nl-card">
          <p className="nl-card-title">I&apos;d like updates from:</p>
          <div className="nl-options">
            <label className="nl-check-row">
              <input type="checkbox" name="nl-perinatal" defaultChecked />
              <span className="nl-check-label">Perinatal Program</span>
            </label>
            <label className="nl-check-row">
              <input type="checkbox" name="nl-paediatric" />
              <span className="nl-check-label">Paediatric Program</span>
            </label>
          </div>
          <div className="nl-divider"></div>
          <div className="nl-email-row">
            <input type="email" className="nl-input" placeholder="Your work email address" aria-label="Email address" />
            <button className="btn btn-a" type="button" style={{ borderRadius: '100px', flexShrink: 0 }}>Sign up</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeNewsletter;

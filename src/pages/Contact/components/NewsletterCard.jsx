import React, { useState } from 'react';

function NewsletterCard() {
  const [nlForm, setNlForm] = useState({ email: '', perinatal: false, paediatric: false });
  const [nlSubmitted, setNlSubmitted] = useState(false);

  const handleNlChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNlForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setNlSubmitted(true);
  };

  return (
    <div className="nl-signup-card">
      <h3>Stay Connected</h3>
      <p>Join our mailing list to receive program updates, education opportunities, and regional news. Select whichever programs are relevant to your practice.</p>

      {nlSubmitted ? (
        <div className="form-success">
          You&apos;re subscribed! Look out for updates in your inbox.
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate>
          <p style={{ fontSize: '.8rem', fontWeight: 600, color: 'var(--smoke)', marginBottom: '.6rem' }}>
            I&apos;d like updates from:
          </p>
          <div className="form-checkgroup" style={{ marginBottom: '1rem' }}>
            <label className="form-check-row">
              <input type="checkbox" name="perinatal" checked={nlForm.perinatal} onChange={handleNlChange} />
              Perinatal Program
            </label>
            <label className="form-check-row">
              <input type="checkbox" name="paediatric" checked={nlForm.paediatric} onChange={handleNlChange} />
              Paediatric Program
            </label>
          </div>

          <div className="form-group">
            <label htmlFor="nl-email">Work email</label>
            <input
              id="nl-email" name="email" type="email"
              className="form-input" placeholder="your.email@organization.ca"
              value={nlForm.email} onChange={handleNlChange} required
            />
          </div>

          <button type="submit" className="btn-submit">Subscribe to updates</button>

          <p style={{ fontSize: '.73rem', color: 'var(--fog)', marginTop: '.85rem', lineHeight: 1.55, borderTop: '1px solid rgba(0,0,0,.07)', paddingTop: '.75rem' }}>
            We respect your privacy. Unsubscribe at any time by contacting info@mncyn.ca.
          </p>
        </form>
      )}
    </div>
  );
}

export default NewsletterCard;

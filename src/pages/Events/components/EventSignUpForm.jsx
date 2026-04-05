import React, { useState } from 'react';

function EventSignUpForm() {
  const [form, setForm] = useState({ name: '', role: '', org: '', email: '', perinatal: false, paediatric: false });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="signup-card">
      <h3>Event Sign-Up</h3>
      <p className="sub-note">Register your interest and we&apos;ll notify you when events are posted.</p>

      {submitted ? (
        <div className="form-success">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '.5rem' }} aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
          <br />
          Thank you! We&apos;ll be in touch when new events are posted.
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="evt-name">Full name</label>
            <input
              id="evt-name" name="name" type="text"
              className="form-input" placeholder="Jane Smith"
              value={form.name} onChange={handleChange} required
            />
          </div>

          <div className="form-group">
            <label htmlFor="evt-role">Role / profession</label>
            <input
              id="evt-role" name="role" type="text"
              className="form-input" placeholder="e.g. Registered Nurse, Physician"
              value={form.role} onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="evt-org">Organization / hospital</label>
            <input
              id="evt-org" name="org" type="text"
              className="form-input" placeholder="e.g. London Health Sciences Centre"
              value={form.org} onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="evt-email">Work email</label>
            <input
              id="evt-email" name="email" type="email"
              className="form-input" placeholder="you@organization.ca"
              value={form.email} onChange={handleChange} required
            />
          </div>

          <p style={{ fontSize: '.8rem', fontWeight: 600, color: 'var(--smoke)', marginBottom: '.6rem' }}>
            Program interest
          </p>
          <div className="form-checkgroup">
            <label className="form-check-row">
              <input type="checkbox" name="perinatal" checked={form.perinatal} onChange={handleChange} />
              Perinatal Program events
            </label>
            <label className="form-check-row">
              <input type="checkbox" name="paediatric" checked={form.paediatric} onChange={handleChange} />
              Paediatric Program events
            </label>
          </div>

          <button type="submit" className="btn-submit">Notify me of upcoming events</button>

          <p style={{ fontSize: '.73rem', color: 'var(--fog)', marginTop: '.85rem', lineHeight: 1.55, borderTop: '1px solid rgba(0,0,0,.07)', paddingTop: '.75rem' }}>
            Your information is used only to notify you of MNCYN events. We do not share it with third parties.
          </p>
        </form>
      )}
    </div>
  );
}

export default EventSignUpForm;

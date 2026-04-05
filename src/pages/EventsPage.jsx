import React, { useState } from 'react';

const upcomingEvents = [
  {
    month: 'TBD',
    day: '--',
    title: 'Perinatal Education Session',
    desc: 'Details and registration information coming soon. Sign up below to be notified.',
    program: 'Perinatal',
  },
  {
    month: 'TBD',
    day: '--',
    title: 'Paediatric Education Session',
    desc: 'Details and registration information coming soon. Sign up below to be notified.',
    program: 'Paediatric',
  },
];

function EventsPage() {
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
    <>
      {/* PAGE HERO */}
      <section className="page-hero" aria-label="Events">
        <div className="wrap page-hero-inner">
          <span className="page-hero-kicker">Stay Connected</span>
          <h1>Events</h1>
          <p>
            Sign up to receive notification of upcoming MNCYN events and education sessions for Perinatal and Paediatric providers across South West Ontario.
          </p>
        </div>
      </section>

      {/* EVENTS + SIGN-UP */}
      <section className="page-content" aria-label="Upcoming events and sign-up">
        <div className="wrap">
          <div className="events-layout">
            {/* Left: event list */}
            <div>
              <p className="section-eyebrow">Upcoming</p>
              <h2 className="page-section-title">Events &amp; Sessions</h2>
              <p className="page-section-lead">
                Event details are updated as sessions are confirmed. Use the sign-up form to get notified when new events are posted.
              </p>

              <div className="event-list-placeholder">
                {upcomingEvents.map(({ month, day, title, desc, program }) => (
                  <div className="event-item" key={title}>
                    <div className="event-date-badge">
                      <span className="month">{month}</span>
                      <span className="day">{day}</span>
                    </div>
                    <div className="event-meta">
                      <span style={{
                        display: 'inline-block', fontSize: '.68rem', fontWeight: 700,
                        letterSpacing: '.08em', textTransform: 'uppercase',
                        color: program === 'Perinatal' ? 'var(--teal-dark)' : 'var(--gold-dark)',
                        background: program === 'Perinatal' ? 'var(--teal-light)' : 'var(--gold-light)',
                        borderRadius: 100, padding: '.18rem .55rem', marginBottom: '.4rem',
                      }}>{program}</span>
                      <h4>{title}</h4>
                      <p>{desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p style={{ marginTop: '1.5rem', fontSize: '.85rem', color: 'var(--fog)', lineHeight: 1.65 }}>
                For information about past events or archived session materials, please{' '}
                <a href="mailto:info@mncyn.ca" style={{ color: 'var(--teal)', fontWeight: 600 }}>contact us directly</a>.
              </p>
            </div>

            {/* Right: sign-up form */}
            <div>
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default EventsPage;

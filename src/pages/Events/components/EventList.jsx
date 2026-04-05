import React from 'react';
import { upcomingEvents } from '../eventsData';

function EventList() {
  return (
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
  );
}

export default EventList;

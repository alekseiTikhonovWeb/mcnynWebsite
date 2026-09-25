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
              <span className={`program-tag program-tag--compact program-tag--${program.toLowerCase()}`}>{program}</span>
              <h4>{title}</h4>
              <p>{desc}</p>
            </div>
          </div>
        ))}
      </div>

      <p className="event-list-note">
        For information about past events or archived session materials, please{' '}
        <a href="mailto:info@mncyn.ca" className="text-link">contact us directly</a>.
      </p>
    </div>
  );
}

export default EventList;

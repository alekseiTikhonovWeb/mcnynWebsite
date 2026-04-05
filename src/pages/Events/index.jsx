import React from 'react';

// Components
import EventsHero from './components/EventsHero.jsx';
import EventList from './components/EventList.jsx';
import EventSignUpForm from './components/EventSignUpForm.jsx';

function EventsPage() {
  return (
    <>
      <EventsHero />

      <section className="page-content" aria-label="Upcoming events and sign-up">
        <div className="wrap">
          <div className="events-layout">
            {/* Left Column */}
            <EventList />

            {/* Right Column */}
            <EventSignUpForm />
          </div>
        </div>
      </section>
    </>
  );
}

export default EventsPage;

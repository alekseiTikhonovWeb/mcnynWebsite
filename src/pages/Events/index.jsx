import PageHero from '../../components/PageHero.jsx';
import EventList from './components/EventList.jsx';
import EventSignUpForm from './components/EventSignUpForm.jsx';

function EventsPage() {
  return (
    <>
      <PageHero
        label="Events"
        kicker="Stay Connected"
        title="Events"
        text="Sign up to receive notification of upcoming MNCYN events and education sessions for Perinatal and Paediatric providers across South West Ontario."
      />

      <section className="page-content" aria-label="Upcoming events and sign-up">
        <div className="wrap">
          <div className="events-layout">
            <EventList />
            <EventSignUpForm />
          </div>
        </div>
      </section>
    </>
  );
}

export default EventsPage;

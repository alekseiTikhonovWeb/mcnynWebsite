import { Link } from 'react-router-dom';

function ProgramsCTA() {
  return (
    <section className="programs-cta" aria-label="Learn more">
      <div className="wrap cta-inner">
        <div>
          <h2>Want to learn about our education offerings?</h2>
          <p>Sessions are available for both Perinatal and Paediatric providers.</p>
        </div>
        <div className="cta-actions">
          <Link to="/education" className="btn-login">Education &amp; Sessions →</Link>
          <Link to="/contact" className="btn-login">Get in touch →</Link>
        </div>
      </div>
    </section>
  );
}

export default ProgramsCTA;

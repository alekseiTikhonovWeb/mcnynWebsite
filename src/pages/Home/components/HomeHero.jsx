import React from 'react';
import { Link } from 'react-router-dom';

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
  </svg>
);

function HomeHero() {
  return (
    <section id="hero" aria-label="Welcome to MNCYN">
      <div className="hero-visual" aria-hidden="true">
        <div
          className="hero-photo-main"
          role="img"
          aria-label="Family receiving care from healthcare providers"
        ></div>
      </div>

      <div className="hero-text">
        <span className="hero-kicker">Maternal, Newborn, Child &amp; Youth Network</span>

        <h1 className="hero-h1">
          Connecting care for{' '}
          <em>mothers, newborns,<br />children and youth.</em>
        </h1>

        <p className="hero-lead">
          MNCYN brings together perinatal and paediatric health care providers from across the region with the shared goal of keeping care as close to home as possible. We collaborate to share resources, deliver education and consultation, support networking across organizations, and promote quality improvement initiatives aimed at strengthening care for families.
        </p>

        <div className="hero-ctas">
          <Link to="/programs" className="btn btn-a">
            Perinatal Program <ArrowIcon />
          </Link>
          <Link to="/programs" className="btn btn-b">
            Paediatric Program <ArrowIcon />
          </Link>
          <Link to="/resources" className="btn btn-c">Education &amp; Resources</Link>
        </div>
      </div>
    </section>
  );
}

export default HomeHero;

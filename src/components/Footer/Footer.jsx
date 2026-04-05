import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer id="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3>Maternal, Newborn, Child &amp; Youth Network</h3>
            <p>
              Bringing together perinatal and paediatric health care providers from across South West Ontario to strengthen care for families.
            </p>
          </div>

          <div className="footer-col">
            <h4>Organization</h4>
            <ul>
              <li><Link to="/about">Who We Are</Link></li>
              <li><Link to="/programs">Programs</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Offerings</h4>
            <ul>
              <li><Link to="/education">Education</Link></li>
              <li><Link to="/events">Events</Link></li>
              <li><Link to="/resources">Resources</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><a href="mailto:info@mncyn.ca">info@mncyn.ca</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 Maternal, Newborn, Child &amp; Youth Network. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

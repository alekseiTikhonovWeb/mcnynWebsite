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
              Supporting access to regional education, resources, collaboration, and quality improvement across perinatal and paediatric care.
            </p>
          </div>

          <div className="footer-col">
            <h4>About</h4>
            <ul>
              <li><Link to="/about">Who We Are</Link></li>
              <li><a href="/#programs">Programs</a></li>
              <li><a href="/#membership">Membership</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Offerings</h4>
            <ul>
              <li><a href="/#education">Education</a></li>
              <li><Link to="/resources">Resources</Link></li>
              <li><a href="/#events">Events</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li><a href="/#contact">Contact Us</a></li>
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

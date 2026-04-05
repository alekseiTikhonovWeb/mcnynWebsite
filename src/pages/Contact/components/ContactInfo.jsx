import React from 'react';

function ContactInfo() {
  return (
    <div>
      <p className="section-eyebrow">Reach Us</p>
      <h2 className="page-section-title">Contact Information</h2>

      <div className="contact-info-block">
        <h3>MNCYN Office</h3>
        <div className="contact-row">
          <div className="contact-icon">✉</div>
          <div>
            <span>General enquiries</span><br />
            <a href="mailto:info@mncyn.ca">info@mncyn.ca</a>
          </div>
        </div>
        <div className="contact-row">
          <div className="contact-icon">📍</div>
          <div>
            <span>South West Ontario</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;

import React, { useState } from 'react';

function InquiryForm() {
  const [contactForm, setContactForm] = useState({ name: '', email: '', org: '', message: '' });
  const [contactSubmitted, setContactSubmitted] = useState(false);

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContactForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate submission
    setContactSubmitted(true);
  };

  return (
    <div style={{ marginTop: '2rem' }}>
      <h3 style={{ fontFamily: 'var(--ff-head)', fontStyle: 'italic', fontSize: '1.2rem', color: 'var(--brand)', marginBottom: '1rem' }}>Send a Message</h3>

      {contactSubmitted ? (
        <div className="form-success">
          Message received — thank you! We&apos;ll get back to you shortly.
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="c-name">Your name</label>
            <input id="c-name" name="name" type="text" className="form-input" placeholder="Full name"
              value={contactForm.name} onChange={handleContactChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="c-email">Email address</label>
            <input id="c-email" name="email" type="email" className="form-input" placeholder="you@organization.ca"
              value={contactForm.email} onChange={handleContactChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="c-org">Organization (optional)</label>
            <input id="c-org" name="org" type="text" className="form-input" placeholder="Hospital / organization"
              value={contactForm.org} onChange={handleContactChange} />
          </div>
          <div className="form-group">
            <label htmlFor="c-msg">Message</label>
            <textarea
              id="c-msg" name="message"
              className="form-input"
              rows={5}
              placeholder="How can we help?"
              value={contactForm.message}
              onChange={handleContactChange}
              required
              style={{ height: 'auto', padding: '.75rem .9rem', resize: 'vertical', borderRadius: 'var(--r-sm)' }}
            />
          </div>
          <button type="submit" className="btn-submit">Send Message</button>
        </form>
      )}
    </div>
  );
}

export default InquiryForm;

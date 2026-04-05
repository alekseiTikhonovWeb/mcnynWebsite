import React, { useState } from 'react';

function ContactPage() {
  const [nlForm, setNlForm] = useState({ email: '', perinatal: false, paediatric: false });
  const [nlSubmitted, setNlSubmitted] = useState(false);
  const [contactForm, setContactForm] = useState({ name: '', email: '', org: '', message: '' });
  const [contactSubmitted, setContactSubmitted] = useState(false);

  const handleNlChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNlForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContactForm(prev => ({ ...prev, [name]: value }));
  };

  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero" aria-label="Contact">
        <div className="wrap page-hero-inner">
          <span className="page-hero-kicker">Get in Touch</span>
          <h1>Contact Us</h1>
          <p>
            Reach out to the MNCYN team with questions about our programs, education, resources, or partnerships. We&apos;re here to help.
          </p>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="page-content" aria-label="Contact information and forms">
        <div className="wrap">
          <div className="contact-layout">
            {/* Left: info + inquiry form */}
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

              {/* Inquiry form */}
              <div style={{ marginTop: '2rem' }}>
                <h3 style={{ fontFamily: 'var(--ff-head)', fontStyle: 'italic', fontSize: '1.2rem', color: 'var(--brand)', marginBottom: '1rem' }}>Send a Message</h3>

                {contactSubmitted ? (
                  <div className="form-success">
                    Message received — thank you! We&apos;ll get back to you shortly.
                  </div>
                ) : (
                  <form onSubmit={(e) => { e.preventDefault(); setContactSubmitted(true); }} noValidate>
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
            </div>

            {/* Right: newsletter signup */}
            <div>
              <div className="nl-signup-card">
                <h3>Stay Connected</h3>
                <p>Join our mailing list to receive program updates, education opportunities, and regional news. Select whichever programs are relevant to your practice.</p>

                {nlSubmitted ? (
                  <div className="form-success">
                    You&apos;re subscribed! Look out for updates in your inbox.
                  </div>
                ) : (
                  <form onSubmit={(e) => { e.preventDefault(); setNlSubmitted(true); }} noValidate>
                    <p style={{ fontSize: '.8rem', fontWeight: 600, color: 'var(--smoke)', marginBottom: '.6rem' }}>
                      I&apos;d like updates from:
                    </p>
                    <div className="form-checkgroup" style={{ marginBottom: '1rem' }}>
                      <label className="form-check-row">
                        <input type="checkbox" name="perinatal" checked={nlForm.perinatal} onChange={handleNlChange} />
                        Perinatal Program
                      </label>
                      <label className="form-check-row">
                        <input type="checkbox" name="paediatric" checked={nlForm.paediatric} onChange={handleNlChange} />
                        Paediatric Program
                      </label>
                    </div>

                    <div className="form-group">
                      <label htmlFor="nl-email">Work email</label>
                      <input
                        id="nl-email" name="email" type="email"
                        className="form-input" placeholder="your.email@organization.ca"
                        value={nlForm.email} onChange={handleNlChange} required
                      />
                    </div>

                    <button type="submit" className="btn-submit">Subscribe to updates</button>

                    <p style={{ fontSize: '.73rem', color: 'var(--fog)', marginTop: '.85rem', lineHeight: 1.55, borderTop: '1px solid rgba(0,0,0,.07)', paddingTop: '.75rem' }}>
                      We respect your privacy. Unsubscribe at any time by contacting info@mncyn.ca.
                    </p>
                  </form>
                )}
              </div>

              <div style={{ marginTop: '1.5rem', background: 'var(--brand-light)', border: '1px solid rgba(71,65,123,.15)', borderRadius: 'var(--r-md)', padding: '1.25rem 1.4rem' }}>
                <strong style={{ fontFamily: 'var(--ff-head)', fontStyle: 'italic', fontSize: '1rem', color: 'var(--brand)', display: 'block', marginBottom: '.4rem' }}>Partner Portal</strong>
                <p style={{ fontSize: '.875rem', color: 'var(--smoke)', lineHeight: 1.65 }}>
                  MNCYN partner organizations can access additional resources through the secure provider portal. Contact us at{' '}
                  <a href="mailto:info@mncyn.ca" style={{ color: 'var(--teal)', fontWeight: 600 }}>info@mncyn.ca</a>{' '}
                  to request access.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactPage;

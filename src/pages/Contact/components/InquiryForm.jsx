import { useState } from 'react';

// Front-end only: there is no backend, so submitting just shows the success state.
function InquiryForm() {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="inquiry-form">
      <h3>Send a Message</h3>

      {submitted ? (
        <div className="form-success">
          Message received — thank you! We&apos;ll get back to you shortly.
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="c-name">Your name</label>
            <input id="c-name" name="name" type="text" className="form-input" placeholder="Full name" required />
          </div>
          <div className="form-group">
            <label htmlFor="c-email">Email address</label>
            <input id="c-email" name="email" type="email" className="form-input" placeholder="you@organization.ca" required />
          </div>
          <div className="form-group">
            <label htmlFor="c-org">Organization (optional)</label>
            <input id="c-org" name="org" type="text" className="form-input" placeholder="Hospital / organization" />
          </div>
          <div className="form-group">
            <label htmlFor="c-msg">Message</label>
            <textarea id="c-msg" name="message" className="form-input form-input--textarea" rows={5} placeholder="How can we help?" required />
          </div>
          <button type="submit" className="btn-submit">Send Message</button>
        </form>
      )}
    </div>
  );
}

export default InquiryForm;

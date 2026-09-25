import { useState } from 'react';

function NewsletterCard() {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="nl-signup-card">
      <h3>Stay Connected</h3>
      <p>Join our mailing list to receive program updates, education opportunities, and regional news. Select whichever programs are relevant to your practice.</p>

      {submitted ? (
        <div className="form-success">
          You&apos;re subscribed! Look out for updates in your inbox.
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate>
          <p className="form-subhead">I&apos;d like updates from:</p>
          <div className="form-checkgroup">
            <label className="form-check-row">
              <input type="checkbox" name="perinatal" />
              Perinatal Program
            </label>
            <label className="form-check-row">
              <input type="checkbox" name="paediatric" />
              Paediatric Program
            </label>
          </div>

          <div className="form-group">
            <label htmlFor="nl-email">Work email</label>
            <input id="nl-email" name="email" type="email" className="form-input" placeholder="your.email@organization.ca" required />
          </div>

          <button type="submit" className="btn-submit">Subscribe to updates</button>

          <p className="form-footnote">
            We respect your privacy. Unsubscribe at any time by contacting info@mncyn.ca.
          </p>
        </form>
      )}
    </div>
  );
}

export default NewsletterCard;

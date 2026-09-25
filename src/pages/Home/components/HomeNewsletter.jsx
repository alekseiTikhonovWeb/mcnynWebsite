function HomeNewsletter() {
  return (
    <section id="newsletter" aria-label="Newsletter signup">
      <div className="wrap nl-inner">
        <div className="nl-left">
          <p className="section-eyebrow">Stay Connected</p>
          <h2>Stay connected<br />with MNCYN</h2>
          <p>
            Join our mailing list to receive program updates, education opportunities, and regional news. Select whichever programs are relevant to your work.
          </p>
        </div>

        <div className="nl-card">
          <p className="nl-card-title">I&apos;d like updates from:</p>
          <div className="nl-options">
            <label className="nl-check-row">
              <input type="checkbox" name="nl-perinatal" defaultChecked />
              <span className="nl-check-label">Perinatal Program</span>
            </label>
            <label className="nl-check-row">
              <input type="checkbox" name="nl-paediatric" />
              <span className="nl-check-label">Paediatric Program</span>
            </label>
          </div>
          <div className="nl-divider"></div>
          <div className="nl-email-row">
            <input type="email" className="nl-input" placeholder="Your work email address" aria-label="Email address" />
            <button className="btn btn-a" type="button">Sign up</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeNewsletter;

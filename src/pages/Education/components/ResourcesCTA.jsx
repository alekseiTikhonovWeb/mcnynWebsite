import { Link } from 'react-router-dom';

function ResourcesCTA() {
  return (
    <section className="resources-cta" aria-label="Related resources">
      <div className="wrap cta-inner">
        <div>
          <p className="section-eyebrow">Related</p>
          <h2 className="section-h2">Looking for clinical resources?</h2>
          <p>Guidelines, toolkits, forms, and referral pathways are available in the Resources section.</p>
        </div>
        <Link to="/resources" className="btn btn-a">Browse Resources →</Link>
      </div>
    </section>
  );
}

export default ResourcesCTA;

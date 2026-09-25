import { deliverables } from '../programsData';

function DeliverablesGrid() {
  return (
    <section className="page-content" aria-label="MNCYN deliverables">
      <div className="wrap">
        <p className="section-eyebrow">Across Both Programs</p>
        <h2 className="page-section-title">MNCYN Deliverables</h2>
        <p className="page-section-lead">
          These deliverables apply to both the Perinatal and Paediatric programs. They represent how MNCYN fulfills its mandate to support high-quality, consistent regional care.
        </p>

        <div className="deliverables-grid">
          {deliverables.map(({ title, desc }) => (
            <div className="deliverable-item" key={title}>
              <span className="deliverable-bullet"></span>
              <div>
                <strong>{title}</strong>
                <span>{desc}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="rcce-note">
          <p>
            <strong>RCCE — Regional Centres of Clinical Excellence</strong>
            MNCYN works in collaboration with Regional Centres of Clinical Excellence across South West Ontario. For more information, visit the{' '}
            <a href="https://mncyn.ca" className="text-link">current MNCYN website</a>.
          </p>
        </div>
      </div>
    </section>
  );
}

export default DeliverablesGrid;

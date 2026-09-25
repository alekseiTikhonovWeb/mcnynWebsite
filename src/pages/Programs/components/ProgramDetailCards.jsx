import { programs } from '../programsData';

function ProgramDetailCards() {
  return (
    <section className="page-content" aria-label="Program descriptions">
      <div className="wrap">
        <p className="section-eyebrow">Core Programs</p>
        <h2 className="page-section-title">Perinatal &amp; Paediatric Programs</h2>
        <p className="page-section-lead">
          Both programs share the same mission — keeping care as close to home as possible — and operate across the same geographic region, serving providers from Windsor to Guelph and beyond.
        </p>

        <div className="prog-pair">
          {programs.map(({ id, name, Icon, color, description, scope }) => (
            <div key={id} className={`prog-card-lg prog-card-lg--${id}`}>
              <div className="prog-icon"><Icon stroke={color} /></div>
              <h3>{name}</h3>
              <p>{description}</p>
              <p className="prog-scope">{scope}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProgramDetailCards;

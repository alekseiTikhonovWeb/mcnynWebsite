import { teamData, coreTeam, medicalTeam } from '../aboutData';

function TeamSection({ onOpenBio }) {
  const renderCard = (key, medical = false) => {
    const { name, title, photo } = teamData[key];
    return (
      <button
        key={key}
        className={`team-card-clean${medical ? ' team-card-clean--medical' : ''}`}
        onClick={() => onOpenBio(key)}
        aria-label={`Read bio for ${name}`}
      >
        <img src={photo} alt={name} className="team-card-photo" loading="lazy" />
        <div className="team-card-body">
          <h3>{name}</h3>
          <p>{title}</p>
        </div>
      </button>
    );
  };

  return (
    <section className="about-team-section" aria-label="MNCYN Team">
      <div className="wrap">
        <p className="section-eyebrow">Our People</p>
        <h2 className="section-h2">MNCYN Team</h2>
        <p className="team-intro">Click any team member to read their full bio.</p>

        <div className="team-grid-clean team-grid-clean--tight">
          {coreTeam.map((key) => renderCard(key))}
        </div>

        <p className="section-eyebrow team-subhead">Medical Consultants</p>
        <h2 className="section-h2">Physician &amp; Medical Team</h2>
        <div className="team-grid-clean">
          {medicalTeam.map((key) => renderCard(key, true))}
        </div>
      </div>
    </section>
  );
}

export default TeamSection;

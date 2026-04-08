import React from 'react';
import { teamData, coreTeam, medicalTeam } from '../aboutData';

function TeamSection({ onOpenBio }) {
  const renderCard = (key, isMedical = false) => {
    const m = teamData[key];
    return (
      <button
        key={key}
        className={`team-card-clean ${isMedical ? 'team-card-clean--medical' : ''}`}
        onClick={() => onOpenBio(key)}
        aria-label={`Read bio for ${m.name}`}
      >
        {m.photo
          ? <img src={m.photo} alt={m.name} className="team-card-photo" />
          : <div className="team-card-photo-placeholder" aria-hidden="true" />
        }
        <div className="team-card-body">
          <h3>{m.name}</h3>
          <p>{m.title}</p>
        </div>
      </button>
    );
  };

  return (
    <section className="about-team-section" aria-label="MNCYN Team">
      <div className="wrap">
        <p className="section-eyebrow">Our People</p>
        <h2 className="section-h2">MNCYN Team</h2>
        <p style={{ color: 'var(--smoke)', fontSize: '.95rem', marginTop: '.5rem', maxWidth: '60ch' }}>
          Click any team member to read their full bio.
        </p>

        <div className="team-grid-clean" style={{ marginTop: '1.5rem' }}>
          {coreTeam.map((key) => renderCard(key))}
        </div>

        {/* Medical Consultants */}
        <p className="section-eyebrow" style={{ marginTop: '2.5rem' }}>Medical Consultants</p>
        <h2 className="section-h2">Physician &amp; Medical Team</h2>
        <div className="team-grid-clean" style={{ marginTop: '2rem' }}>
          {medicalTeam.map((key) => renderCard(key, true))}
        </div>
      </div>
    </section>
  );
}

export default TeamSection;

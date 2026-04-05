import React from 'react';
import { pillars } from '../aboutData';

function MissionStatement() {
  return (
    <section className="about-mission" aria-label="Our mission">
      <div className="wrap">
        <div className="about-mission-inner">
          <p className="section-eyebrow">Our Mission</p>
          <blockquote className="mission-pull">
            "We collaborate to share resources, deliver education and consultation, support networking across organizations, and promote quality improvement initiatives aimed at strengthening care for families."
          </blockquote>
          <p style={{ color: 'var(--smoke)', fontSize: '1rem', lineHeight: 1.75, maxWidth: '72ch' }}>
            MNCYN fulfills its mission by supporting consistent, safe, quality maternal, newborn, child, and youth care across our region — through partnerships, shared governance, and a commitment to improving outcomes for patients and families.
          </p>
        </div>

        <div className="about-pillars" style={{ marginTop: '2rem' }}>
          {pillars.map(({ title, desc }) => (
            <div className="pillar-item" key={title}>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MissionStatement;

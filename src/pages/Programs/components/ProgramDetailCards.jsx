import React from 'react';

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
          {/* Perinatal */}
          <div className="prog-card-lg prog-card-lg--perinatal">
            <div className="prog-icon" style={{ background: 'rgba(0,130,155,.1)', width: 46, height: 46, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
            </div>
            <h3>Perinatal Program</h3>
            <p>
              The Perinatal Program supports care for pregnant individuals, birthing families, and newborns across Southwestern Ontario. We work with obstetrical units, midwifery groups, and community partners to share consistent clinical protocols, deliver education, and support clinical teams.
            </p>
            <p style={{ marginTop: '.85rem', fontSize: '.9rem', color: 'var(--fog)' }}>
              Covering maternity care, labour and birth, neonatal resuscitation, and postpartum support.
            </p>
          </div>

          {/* Paediatric */}
          <div className="prog-card-lg prog-card-lg--paediatric">
            <div className="prog-icon" style={{ background: 'rgba(255,174,0,.1)', width: 46, height: 46, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--gold-dark)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
            </div>
            <h3>Paediatric Program</h3>
            <p>
              The Paediatric Program works with child and youth health providers across the region to connect services, share learning, and support families navigating paediatric care — from early infancy through to adolescence.
            </p>
            <p style={{ marginTop: '.85rem', fontSize: '.9rem', color: 'var(--fog)' }}>
              Covering acute paediatric care, emergency medicine, critical care, and care transitions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProgramDetailCards;

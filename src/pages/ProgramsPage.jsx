import React from 'react';
import { Link } from 'react-router-dom';

const deliverables = [
  {
    title: 'Education & Learning',
    desc: 'Workshops, online orientation programs, simulation sessions, and professional development opportunities for clinical teams.',
  },
  {
    title: 'Consultation & Site Visits',
    desc: 'Direct consultation support and site visits to partner hospitals and care teams across the region.',
  },
  {
    title: 'Clinical Tools & Resources',
    desc: 'Guidelines, protocols, referral pathways, forms and templates developed to support consistent regional practice.',
  },
  {
    title: 'Networking & Collaboration',
    desc: 'Facilitated connections between providers, organizations, and specialty teams to share knowledge and align care.',
  },
  {
    title: 'Quality Improvement',
    desc: 'Support for quality improvement initiatives aimed at measuring, reporting, and continuously improving outcomes.',
  },
  {
    title: 'Case & Critical Events Review',
    desc: 'Structured review processes to learn from cases and critical events and support safety improvement across partner sites.',
  },
];

function ProgramsPage() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero" aria-label="Programs">
        <div className="wrap page-hero-inner">
          <span className="page-hero-kicker">What We Offer</span>
          <h1>Our Programs</h1>
          <p>
            MNCYN supports health care providers across South West Ontario through two core regional programs — Perinatal and Paediatric — each focused on strengthening care for families.
          </p>
        </div>
      </section>

      {/* PROGRAM DESCRIPTIONS */}
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

      {/* DELIVERABLES */}
      <section className="page-content" style={{ background: 'var(--linen)' }} aria-label="MNCYN deliverables">
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

          <div style={{ marginTop: '2.25rem', padding: '1.5rem 1.75rem', background: 'var(--white)', borderRadius: 'var(--r-lg)', border: '1px solid rgba(71,65,123,.1)' }}>
            <p style={{ fontSize: '.95rem', color: 'var(--smoke)', lineHeight: 1.7 }}>
              <strong style={{ color: 'var(--brand)', display: 'block', marginBottom: '.4rem', fontFamily: 'var(--ff-head)', fontStyle: 'italic', fontSize: '1.05rem' }}>RCCE — Regional Centres of Clinical Excellence</strong>
              MNCYN works in collaboration with Regional Centres of Clinical Excellence across South West Ontario. For more information, visit the{' '}
              <a href="https://mncyn.ca" style={{ color: 'var(--teal)', fontWeight: 600 }}>current MNCYN website</a>.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--brand)', padding: 'clamp(2rem,4vw,3.25rem) 0' }} aria-label="Learn more">
        <div className="wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '2rem', flexWrap: 'wrap' }}>
          <div>
            <h2 style={{ fontFamily: 'var(--ff-head)', fontStyle: 'italic', color: 'var(--white)', fontSize: 'clamp(1.3rem,2.5vw,1.8rem)', marginBottom: '.4rem' }}>
              Want to learn about our education offerings?
            </h2>
            <p style={{ color: 'rgba(255,255,255,.6)', fontSize: '.92rem' }}>
              Sessions are available for both Perinatal and Paediatric providers.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/education" className="btn-login">Education &amp; Sessions →</Link>
            <Link to="/contact" className="btn-login">Get in touch →</Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProgramsPage;

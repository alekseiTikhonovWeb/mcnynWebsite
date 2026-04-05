import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function EducationPage() {
  const [activeTab, setActiveTab] = useState('perinatal');

  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero" aria-label="Education">
        <div className="wrap page-hero-inner">
          <span className="page-hero-kicker">Learning &amp; Development</span>
          <h1>Education</h1>
          <p>
            MNCYN provides continuing education designed around the realities of clinical practice — for both perinatal and paediatric care providers across South West Ontario.
          </p>
        </div>
      </section>

      {/* TAB CONTENT */}
      <section className="page-content" aria-label="Education by program">
        <div className="wrap">
          <p className="section-eyebrow">Select a program</p>
          <h2 className="page-section-title">Education by Program</h2>
          <p className="page-section-lead">
            Sessions and resources are organized by program. Select the program most relevant to your work.
          </p>

          {/* Tabs */}
          <div className="edu-tabs" role="tablist">
            <button
              className={`edu-tab-btn${activeTab === 'perinatal' ? ' active' : ''}`}
              role="tab"
              aria-selected={activeTab === 'perinatal'}
              onClick={() => setActiveTab('perinatal')}
            >
              Perinatal Education
            </button>
            <button
              className={`edu-tab-btn${activeTab === 'paediatric' ? ' active' : ''}`}
              role="tab"
              aria-selected={activeTab === 'paediatric'}
              onClick={() => setActiveTab('paediatric')}
            >
              Paediatric Education
            </button>
          </div>

          {/* Perinatal Panel */}
          <div className={`edu-tab-panel${activeTab === 'perinatal' ? ' active' : ''}`} role="tabpanel" aria-label="Perinatal Education">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px,1fr))', gap: '1rem', marginBottom: '2rem' }}>
              {[
                {
                  title: 'NRP — Neonatal Resuscitation',
                  desc: 'Neonatal Resuscitation Program training for providers working in birthing and neonatal settings.',
                  tag: 'Certification',
                },
                {
                  title: 'ACoRN — Acute Care of at-Risk Newborns',
                  desc: 'Structured approach to the identification and initial management of the at-risk newborn.',
                  tag: 'Certification',
                },
                {
                  title: 'Fetal Health Surveillance',
                  desc: 'Regional education on fetal monitoring interpretation and decision-making in labour.',
                  tag: 'Workshop',
                },
                {
                  title: 'Maternal Newborn Nursing',
                  desc: 'Joint education initiative supporting foundational maternal newborn nursing knowledge for regional partners.',
                  tag: 'Course',
                },
                {
                  title: 'Perinatal Simulation',
                  desc: 'High-fidelity simulation workshops for obstetric and neonatal emergency scenarios.',
                  tag: 'Simulation',
                },
              ].map(({ title, desc, tag }) => (
                <div key={title} style={{
                  background: 'var(--white)', borderRadius: 'var(--r-md)',
                  border: '1px solid rgba(0,130,155,.12)', padding: '1.35rem',
                  display: 'flex', flexDirection: 'column', gap: '.5rem',
                }}>
                  <span style={{
                    display: 'inline-block', fontSize: '.68rem', fontWeight: 700,
                    letterSpacing: '.08em', textTransform: 'uppercase',
                    color: 'var(--teal-dark)', background: 'var(--teal-light)',
                    borderRadius: 100, padding: '.2rem .6rem', alignSelf: 'flex-start',
                  }}>{tag}</span>
                  <strong style={{ fontFamily: 'var(--ff-head)', fontStyle: 'italic', fontSize: '1rem', color: 'var(--brand)', lineHeight: 1.25 }}>{title}</strong>
                  <span style={{ fontSize: '.875rem', color: 'var(--smoke)', lineHeight: 1.65 }}>{desc}</span>
                </div>
              ))}
            </div>
            <div className="edu-placeholder">
              <h3>Session dates coming soon</h3>
              <p style={{ fontSize: '.9rem', marginTop: '.4rem' }}>Upcoming perinatal education sessions will be listed here. <Link to="/contact" style={{ color: 'var(--teal)' }}>Contact us</Link> to be notified when registration opens.</p>
            </div>
          </div>

          {/* Paediatric Panel */}
          <div className={`edu-tab-panel${activeTab === 'paediatric' ? ' active' : ''}`} role="tabpanel" aria-label="Paediatric Education">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px,1fr))', gap: '1rem', marginBottom: '2rem' }}>
              {[
                {
                  title: 'Regional Paediatric Orientation (RPO)',
                  desc: 'An online paediatric nursing course designed for regional partner hospitals. Available through the MNCYN partner portal.',
                  tag: 'Online Course',
                },
                {
                  title: 'PALS — Paediatric Advanced Life Support',
                  desc: 'Instruction for paediatric emergency response for nurses and physicians at regional partner sites.',
                  tag: 'Certification',
                },
                {
                  title: 'Paediatric Simulation',
                  desc: 'High-fidelity simulation workshops for paediatric emergency and critical care scenarios in partnership with PROP.',
                  tag: 'Simulation',
                },
                {
                  title: 'PEM Refresher Day',
                  desc: 'Paediatric Emergency Medicine refresher sessions for physicians and nurses involved in paediatric emergency care.',
                  tag: 'Workshop',
                },
                {
                  title: 'Paediatric Review Newsletter',
                  desc: 'Monthly newsletter covering paediatric topics of interest based on current best-practice information and care guidelines.',
                  tag: 'Publication',
                },
              ].map(({ title, desc, tag }) => (
                <div key={title} style={{
                  background: 'var(--white)', borderRadius: 'var(--r-md)',
                  border: '1px solid rgba(255,174,0,.15)', padding: '1.35rem',
                  display: 'flex', flexDirection: 'column', gap: '.5rem',
                }}>
                  <span style={{
                    display: 'inline-block', fontSize: '.68rem', fontWeight: 700,
                    letterSpacing: '.08em', textTransform: 'uppercase',
                    color: 'var(--gold-dark)', background: 'var(--gold-light)',
                    borderRadius: 100, padding: '.2rem .6rem', alignSelf: 'flex-start',
                  }}>{tag}</span>
                  <strong style={{ fontFamily: 'var(--ff-head)', fontStyle: 'italic', fontSize: '1rem', color: 'var(--brand)', lineHeight: 1.25 }}>{title}</strong>
                  <span style={{ fontSize: '.875rem', color: 'var(--smoke)', lineHeight: 1.65 }}>{desc}</span>
                </div>
              ))}
            </div>
            <div className="edu-placeholder">
              <h3>Session dates coming soon</h3>
              <p style={{ fontSize: '.9rem', marginTop: '.4rem' }}>Upcoming paediatric education sessions will be listed here. <Link to="/contact" style={{ color: 'var(--teal)' }}>Contact us</Link> to be notified when registration opens.</p>
            </div>
          </div>
        </div>
      </section>

      {/* RESOURCES LINK */}
      <section style={{ background: 'var(--linen)', padding: 'clamp(2.5rem,5vw,4rem) 0' }} aria-label="Related resources">
        <div className="wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '2rem', flexWrap: 'wrap' }}>
          <div>
            <p className="section-eyebrow">Related</p>
            <h2 className="section-h2" style={{ fontSize: 'clamp(1.3rem,2.5vw,1.75rem)' }}>Looking for clinical resources?</h2>
            <p style={{ color: 'var(--smoke)', fontSize: '.92rem', marginTop: '.4rem' }}>Guidelines, toolkits, forms, and referral pathways are available in the Resources section.</p>
          </div>
          <Link to="/resources" className="btn btn-a">Browse Resources →</Link>
        </div>
      </section>
    </>
  );
}

export default EducationPage;

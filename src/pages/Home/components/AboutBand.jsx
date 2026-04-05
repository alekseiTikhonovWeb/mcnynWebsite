import React from 'react';
import { Link } from 'react-router-dom';

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
  </svg>
);

function AboutBand() {
  return (
    <div style={{
      background: 'var(--brand)',
      padding: 'clamp(2rem,4vw,3rem) 0',
      backgroundImage: 'radial-gradient(ellipse at 0% 50%, rgba(0,130,155,.18) 0%, transparent 60%), radial-gradient(ellipse at 100% 50%, rgba(255,174,0,.08) 0%, transparent 50%)',
    }}>
      <div className="wrap" style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '3rem', alignItems: 'center' }}>
        <div>
          <p style={{ fontFamily: 'var(--ff-body)', fontSize: '.72rem', fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,.45)', marginBottom: '.6rem', display: 'flex', alignItems: 'center', gap: '.5rem' }}>
            <span style={{ display: 'block', width: 20, height: 2, background: 'var(--gold)', borderRadius: 2 }}></span>
            About MNCYN
          </p>
          <p style={{ fontFamily: 'var(--ff-head)', fontStyle: 'italic', fontSize: 'clamp(1.2rem,2.5vw,1.65rem)', color: 'var(--white)', lineHeight: 1.4, maxWidth: '72ch' }}>
            A regional network supporting over 20 hospital and birthing unit partners across South West Ontario — from Windsor to Guelph and beyond.
          </p>
        </div>
        <Link to="/about" style={{ flexShrink: 0, background: 'rgba(255,255,255,.1)', color: 'var(--white)', border: '1.5px solid rgba(255,255,255,.25)', borderRadius: 100, fontFamily: 'var(--ff-body)', fontWeight: 600, fontSize: '.88rem', padding: '.72rem 1.5rem', display: 'inline-flex', alignItems: 'center', gap: '.5rem', whiteSpace: 'nowrap', transition: 'background .2s' }}>
          Who We Are <ArrowIcon />
        </Link>
      </div>
      <style>{`@media(max-width:700px){.home-about-band .wrap{grid-template-columns:1fr!important}}`}</style>
    </div>
  );
}

export default AboutBand;

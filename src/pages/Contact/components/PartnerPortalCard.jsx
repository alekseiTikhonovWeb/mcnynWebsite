import React from 'react';

function PartnerPortalCard() {
  return (
    <div style={{ marginTop: '1.5rem', background: 'var(--brand-light)', border: '1px solid rgba(71,65,123,.15)', borderRadius: 'var(--r-md)', padding: '1.25rem 1.4rem' }}>
      <strong style={{ fontFamily: 'var(--ff-head)', fontStyle: 'italic', fontSize: '1rem', color: 'var(--brand)', display: 'block', marginBottom: '.4rem' }}>Partner Portal</strong>
      <p style={{ fontSize: '.875rem', color: 'var(--smoke)', lineHeight: 1.65 }}>
        MNCYN partner organizations can access additional resources through the secure provider portal. Contact us at{' '}
        <a href="mailto:info@mncyn.ca" style={{ color: 'var(--teal)', fontWeight: 600 }}>info@mncyn.ca</a>{' '}
        to request access.
      </p>
    </div>
  );
}

export default PartnerPortalCard;

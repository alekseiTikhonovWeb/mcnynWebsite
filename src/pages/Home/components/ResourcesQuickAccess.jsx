import React from 'react';
import { Link } from 'react-router-dom';

function ResourcesQuickAccess() {
  return (
    <section id="resources" aria-label="Quick access to resources" style={{ background: 'var(--paper)', padding: 'clamp(3.5rem,7vw,6rem) 0' }}>
      <div className="wrap">
        <div className="resources-top">
          <div>
            <p className="section-eyebrow">For Providers</p>
            <h2 className="section-h2">Quick Access</h2>
          </div>
          <div className="search-wrap">
            <span className="search-icon-wrap" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
            </span>
            <input type="search" className="search-input" placeholder="Search guidelines, toolkits, pathways…" aria-label="Search resources" />
          </div>
        </div>

        <div className="resource-tiles" role="list">
          <Link to="/resources" className="res-tile" role="listitem">
            <div className="res-tile-icon" style={{ background: 'var(--teal-light)' }}>📋</div>
            <span className="res-tile-label">Clinical Guidelines</span>
            <span className="res-tile-sub">Regional &amp; provincial protocols</span>
          </Link>
          <Link to="/resources" className="res-tile" role="listitem">
            <div className="res-tile-icon" style={{ background: 'var(--gold-light)' }}>🧰</div>
            <span className="res-tile-label">Toolkits</span>
            <span className="res-tile-sub">Practice-ready resources</span>
          </Link>
          <Link to="/resources" className="res-tile" role="listitem">
            <div className="res-tile-icon" style={{ background: 'var(--brand-light)' }}>🗺️</div>
            <span className="res-tile-label">Referral Pathways</span>
            <span className="res-tile-sub">Who to call and when</span>
          </Link>
          <Link to="/education" className="res-tile" role="listitem">
            <div className="res-tile-icon" style={{ background: 'var(--teal-light)' }}>📅</div>
            <span className="res-tile-label">Education Calendar</span>
            <span className="res-tile-sub">Upcoming sessions</span>
          </Link>
          <Link to="/resources" className="res-tile" role="listitem">
            <div className="res-tile-icon" style={{ background: 'var(--brand-light)' }}>📄</div>
            <span className="res-tile-label">Forms &amp; Templates</span>
            <span className="res-tile-sub">Standardized clinical forms</span>
          </Link>
          <Link to="/resources" className="res-tile" role="listitem">
            <div className="res-tile-icon" style={{ background: 'var(--gold-light)' }}>🔗</div>
            <span className="res-tile-label">Useful Links</span>
            <span className="res-tile-sub">Partner organizations</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ResourcesQuickAccess;

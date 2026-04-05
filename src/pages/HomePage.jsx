import React from 'react';

function HomePage() {
  return (
    <main>
      

{/* ═══════════════════════════════════════════
     HERO — asymmetric: full-height photo left, text right
═══════════════════════════════════════════ */}
<section id="hero" aria-label="Welcome to MNCYN">

  {/* LEFT: photo column (bleeds to edge, no padding) */}
  <div className="hero-visual" aria-hidden="true">
    <div className="hero-photo-main" role="img" aria-label="Healthcare provider with a family and newborn — placeholder for real photography"></div>
  </div>

  {/* RIGHT: text content */}
  <div className="hero-text">
    <span className="hero-kicker">Maternal &amp; Child Health Network</span>

    <h1 className="hero-h1">
      Connecting care<br />
      for <em>mothers, newborns,</em><br />
      children and youth.
    </h1>

    <p className="hero-lead">
      MNCYN brings together perinatal and paediatric providers, hospitals, and community agencies across the region. We share resources, support providers, and work with partner organizations to improve care for families.
    </p>

    <div className="hero-ctas">
      <a href="#programs" className="btn btn-a">
        Perinatal Program
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
      </a>
      <a href="#programs" className="btn btn-b">
        Paediatric Program
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
      </a>
      <a href="resources.html" className="btn btn-c">Education &amp; Resources</a>
    </div>


  </div>

</section>

{/* ═══════════════════════════════════════════
     STATS — not three-in-a-row, narrative band
═══════════════════════════════════════════ */}
<div id="stats-band" aria-label="Network at a glance">
  <div className="stats-inner">
    <div className="stat-block">
      <strong className="stat-num">20<sup>+</sup></strong>
      <span className="stat-label">Hospital and birthing unit<br />partners across SW Ontario</span>
    </div>
    <div className="stat-block">
      <strong className="stat-num">2</strong>
      <span className="stat-label">Core programs — Perinatal<br />and Paediatric</span>
    </div>
    <div className="stat-block">
      <strong className="stat-num" style={{fontSize: "clamp(1.6rem,3vw,2.4rem)", letterSpacing: "-.01em", }}>SW Ont.</strong>
      <span className="stat-label">Regional reach, from Windsor<br />to Guelph and beyond</span>
    </div>
    <div className="stat-block">
      <strong className="stat-num" style={{fontSize: "clamp(1.4rem,2.5vw,2rem)", letterSpacing: "0" }}>Families first.</strong>
      <span className="stat-label">Every resource, connection,<br />and session is built around care.</span>
    </div>
  </div>
</div>

{/* ═══════════════════════════════════════════
     NEWS & UPDATES
═══════════════════════════════════════════ */}
<section id="news" aria-label="News and updates">
  <div className="wrap">
    <div className="section-header" style={{display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "1rem", marginBottom: "0", }}>
      <div>
        <p className="section-eyebrow">Latest from MNCYN</p>
        <h2 className="section-h2">News &amp; Updates</h2>
      </div>
      <a href="/news" className="btn btn-c" style={{fontSize: ".82rem", padding: ".55rem 1.1rem", borderRadius: "100px", whiteSpace: "nowrap", }}>
        View all news &amp; newsletters →
      </a>
    </div>

    {/* Asymmetric: large featured card left, 3 stacked right but only 2 rows of 2 */}
    <div className="news-layout">
      {/* Featured card — spans 2 rows */}
      <article className="news-card news-card--featured" data-r>
        <div className="news-card-img" style={{backgroundImage: "url('/images/news_photo.jpg')", backgroundSize: "cover", backgroundPosition: "center", }}>
          <div className="news-img-overlay" aria-hidden="true"></div>
        </div>
        <div className="news-card-body">
          <span className="news-tag news-tag--perinatal">Perinatal</span>
          <h3 className="news-title">Updated Obstetric Triage Guidelines Now Available for Regional Partners</h3>
          <p className="news-summary">The revised regional triage protocols are now posted in the clinical tools section. All birthing units should review the changes and share with their teams.</p>
          <div className="news-footer">
            <time datetime="2025-01-20">January 20, 2025</time>
            <a href="/news/obstetric-triage" className="news-read">Read more</a>
          </div>
        </div>
      </article>

      <article className="news-card" data-r data-d="1">
        <div className="news-card-body">
          <span className="news-tag news-tag--education">Education</span>
          <h3 className="news-title">Spring Education Sessions — Registration Now Open</h3>
          <p className="news-summary">Registration is open for our upcoming perinatal and paediatric sessions. Spots fill quickly — register early.</p>
          <div className="news-footer">
            <time datetime="2025-01-14">January 14, 2025</time>
            <a href="/news/spring-education" className="news-read">Read more</a>
          </div>
        </div>
      </article>

      <article className="news-card" data-r data-d="2">
        <div className="news-card-body">
          <span className="news-tag news-tag--paediatric">Paediatric</span>
          <h3 className="news-title">Paediatric Network Newsletter — Winter 2025</h3>
          <p className="news-summary">Program updates, clinical highlights, and upcoming events in this edition of the Paediatric newsletter.</p>
          <div className="news-footer">
            <time datetime="2025-01-08">January 8, 2025</time>
            <a href="/news/paediatric-newsletter" className="news-read">Read more</a>
          </div>
        </div>
      </article>

      <article className="news-card" data-r data-d="3" style={{gridColumn: "2 / 4", }}>
        <div className="news-card-body">
          <span className="news-tag news-tag--network">Network</span>
          <h3 className="news-title">MNCYN Welcomes Two New Community Partners Serving Rural Southwestern Ontario</h3>
          <p className="news-summary">We're pleased to welcome two new agency partnerships, extending our reach to rural communities in Southwestern Ontario.</p>
          <div className="news-footer">
            <time datetime="2024-12-19">December 19, 2024</time>
            <a href="/news/new-partners" className="news-read">Read more</a>
          </div>
        </div>
      </article>
    </div>
  </div>
</section>

{/* ═══════════════════════════════════════════
     PROGRAMS OVERVIEW
═══════════════════════════════════════════ */}
<section id="programs" aria-label="Our programs">
  <div className="wrap">
    <div className="programs-header">
      <div>
        <p className="section-eyebrow">What we do</p>
        <h2 className="section-h2">Our Programs</h2>
      </div>
    </div>

    <div className="programs-grid">
      {/* Perinatal */}
      <div className="prog-card prog-card--perinatal" data-r>
        <span className="prog-card-bg-char" aria-hidden="true">P</span>
        <div className="prog-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
        </div>
        <h3 className="prog-h3">Perinatal Program</h3>
        <p className="prog-desc">Supporting care for pregnant individuals, birthing families, and newborns across Southwestern Ontario. We work with obstetrical units, midwifery groups, and community partners to share consistent clinical protocols and support their teams.</p>
        <div className="prog-links">
          <a href="/perinatal" className="prog-link">Program overview</a>
          <a href="/perinatal/clinical-tools" className="prog-link">View clinical tools</a>
          <a href="/perinatal/referral" className="prog-link">Referral pathways</a>
        </div>
      </div>

      {/* Paediatric */}
      <div className="prog-card prog-card--paediatric" data-r data-d="1">
        <span className="prog-card-bg-char" aria-hidden="true">K</span>
        <div className="prog-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--clay)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
        </div>
        <h3 className="prog-h3">Paediatric Program</h3>
        <p className="prog-desc">Working with child and youth health providers across the region to connect services, share learning, and support families navigating paediatric care — from early infancy through to adolescence.</p>
        <div className="prog-links">
          <a href="/paediatric" className="prog-link">Program overview</a>
          <a href="/paediatric/clinical-tools" className="prog-link">View clinical tools</a>
          <a href="/paediatric/transitions" className="prog-link">Care transitions resources</a>
        </div>
      </div>

      {/* Education */}
      <div className="prog-card prog-card--education" data-r data-d="2">
        <span className="prog-card-bg-char" aria-hidden="true">E</span>
        <div className="prog-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--navy-mid)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
        </div>
        <h3 className="prog-h3">Education &amp; Resources</h3>
        <p className="prog-desc">From in-person workshops to online modules, MNCYN offers continuing education designed around the realities of clinical practice. Our resource library provides quick access to guidelines, toolkits, and regional care pathways.</p>
        <div className="prog-links">
          <a href="/education" className="prog-link">Upcoming sessions</a>
          <a href="resources.html" className="prog-link">Browse the resource library</a>
          <a href="/education/calendar" className="prog-link">Education calendar</a>
        </div>
      </div>
    </div>
  </div>
</section>

{/* ═══════════════════════════════════════════
     RESOURCES / QUICK ACCESS
═══════════════════════════════════════════ */}
<section id="resources" aria-label="Quick access to resources">
  <div className="wrap">
    <div className="resources-top">
      <div>
        <p className="section-eyebrow">For providers</p>
        <h2 className="section-h2">Quick access</h2>
      </div>
      <div className="search-wrap">
        <span className="search-icon-wrap" aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        </span>
        <input type="search" className="search-input" placeholder="Search guidelines, toolkits, pathways…" aria-label="Search resources" />
      </div>
    </div>

    <div className="resource-tiles" role="list">
      <a href="resources.html#forms" className="res-tile" role="listitem" data-r>
        <div className="res-tile-icon" style={{background: "rgba(30,123,123,.1)", }}>📋</div>
        <span className="res-tile-label">Clinical Guidelines</span>
        <span className="res-tile-sub">Regional &amp; provincial protocols</span>
      </a>
      <a href="resources.html#links" className="res-tile" role="listitem" data-r data-d="1">
        <div className="res-tile-icon" style={{background: "rgba(194,96,59,.1)", }}>🧰</div>
        <span className="res-tile-label">Toolkits</span>
        <span className="res-tile-sub">Practice-ready resources</span>
      </a>
      <a href="resources.html#links" className="res-tile" role="listitem" data-r data-d="2">
        <div className="res-tile-icon" style={{background: "rgba(21,37,53,.07)", }}>🗺</div>
        <span className="res-tile-label">Referral Pathways</span>
        <span className="res-tile-sub">Who to call and when</span>
      </a>
      <a href="resources.html#forms" className="res-tile" role="listitem" data-r data-d="3">
        <div className="res-tile-icon" style={{background: "#fde8d8", }}>📅</div>
        <span className="res-tile-label">Education Calendar</span>
        <span className="res-tile-sub">Upcoming sessions &amp; events</span>
      </a>
      <a href="resources.html#forms" className="res-tile" role="listitem" data-r data-d="2">
        <div className="res-tile-icon" style={{background: "rgba(30,123,123,.08)", }}>📄</div>
        <span className="res-tile-label">Forms &amp; Templates</span>
        <span className="res-tile-sub">Standardized clinical forms</span>
      </a>
      <a href="resources.html#links" className="res-tile" role="listitem" data-r data-d="3">
        <div className="res-tile-icon" style={{background: "rgba(21,37,53,.06)", }}>🔗</div>
        <span className="res-tile-label">Useful Links</span>
        <span className="res-tile-sub">Partner organizations &amp; systems</span>
      </a>
    </div>
  </div>
</section>

{/* ═══════════════════════════════════════════
     LOGIN STRIP
═══════════════════════════════════════════ */}
<section id="login-strip" aria-label="Provider login">
  <div className="wrap login-inner">
    <div className="login-copy">
      <h2>Provider access area</h2>
      <p>Some MNCYN resources and program materials are available in a secure area for registered healthcare providers and partner organizations. Log in to access your materials.</p>
    </div>
    <a href="/login" className="btn-login">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
      Login to your account
    </a>
  </div>
</section>

{/* ═══════════════════════════════════════════
     NEWSLETTER
═══════════════════════════════════════════ */}
<section id="newsletter" aria-label="Newsletter signup">
  <div className="wrap nl-inner">
    <div className="nl-left">
      <p className="section-eyebrow" style={{color: "var(--teal-dark)", }}>Stay connected</p>
      <h2>Stay connected<br />with MNCYN</h2>
      <p>Join our mailing list to receive program updates, education opportunities, and regional news. Select whichever programs are relevant to your work.</p>
    </div>

    <div className="nl-card">
      <p className="nl-card-title">I'd like updates from:</p>
      <div className="nl-options">
        <label className="nl-check-row">
          <input type="checkbox" name="nl-perinatal" checked />
          <span className="nl-check-label">Perinatal Program</span>
        </label>
        <label className="nl-check-row">
          <input type="checkbox" name="nl-paediatric" />
          <span className="nl-check-label">Paediatric Program</span>
        </label>
      </div>
      <div className="nl-divider"></div>
      <div className="nl-email-row">
        <input type="email" className="nl-input" placeholder="Your work email address" aria-label="Email address" />
        <button className="btn btn-a" type="button" style={{borderRadius: "100px", flexShrink: "0", }}>Sign up</button>
      </div>

    </div>
  </div>
</section>


    </main>
  );
}

export default HomePage;
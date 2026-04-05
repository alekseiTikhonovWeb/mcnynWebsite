import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header id="header">
      <div className="wrap header-wrap">
        <Link to="/" className="brand" aria-label="Maternal, Newborn, Child & Youth Network home">
          <span className="brand-mark">Maternal, Newborn, Child &amp; Youth Network</span>
          <span className="brand-sub">Regional resources for perinatal and paediatric care</span>
        </Link>

        <nav className="primary-nav" aria-label="Main navigation">
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
            Who We Are
          </NavLink>
          <a href="/#programs">Programs</a>
          <a href="/#membership">Membership</a>
          <a href="/#education">Education</a>
          <NavLink to="/resources" className={({ isActive }) => (isActive ? 'active' : '')}>
            Resources
          </NavLink>
          <a href="/#events">Events</a>
          <a href="/#contact">Contact</a>
        </nav>

        <button className="hamburger" aria-expanded={isMenuOpen} aria-label="Open menu" onClick={() => setIsMenuOpen(true)}>
          <span></span><span></span><span></span>
        </button>
      </div>

      {/* MOBILE DRAWER */}
      <div className={`mobile-overlay ${isMenuOpen ? 'show' : ''}`}>
        <div className="overlay-bg" onClick={() => setIsMenuOpen(false)}></div>
        <div className="drawer">
          <button className="drawer-close" aria-label="Close menu" onClick={() => setIsMenuOpen(false)}>&times;</button>
          
          <NavLink to="/about" onClick={() => setIsMenuOpen(false)}>Who We Are</NavLink>
          <a href="/#programs" onClick={() => setIsMenuOpen(false)}>Programs</a>
          <a href="/#membership" onClick={() => setIsMenuOpen(false)}>Membership</a>
          <a href="/#education" onClick={() => setIsMenuOpen(false)}>Education</a>
          <NavLink to="/resources" onClick={() => setIsMenuOpen(false)}>Resources</NavLink>
          <a href="/#events" onClick={() => setIsMenuOpen(false)}>Events</a>
          <a href="/#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
        </div>
      </div>
    </header>
  );
}

export default Header;

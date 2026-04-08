import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header id="header">
      <div className="wrap header-wrap">
        <Link to="/" className="brand" aria-label="Maternal, Newborn, Child & Youth Network home">
          <img src="/images/logo.svg" alt="Maternal, Newborn, Child & Youth Network" className="brand-logo" />
        </Link>

        <nav className="primary-nav" aria-label="Main navigation">
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>Who We Are</NavLink>
          <NavLink to="/programs" className={({ isActive }) => (isActive ? 'active' : '')}>Programs</NavLink>
          <NavLink to="/education" className={({ isActive }) => (isActive ? 'active' : '')}>Education</NavLink>
          <NavLink to="/events" className={({ isActive }) => (isActive ? 'active' : '')}>Events</NavLink>
          <NavLink to="/resources" className={({ isActive }) => (isActive ? 'active' : '')}>Resources</NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>Contact</NavLink>
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
          <NavLink to="/programs" onClick={() => setIsMenuOpen(false)}>Programs</NavLink>
          <NavLink to="/education" onClick={() => setIsMenuOpen(false)}>Education</NavLink>
          <NavLink to="/events" onClick={() => setIsMenuOpen(false)}>Events</NavLink>
          <NavLink to="/resources" onClick={() => setIsMenuOpen(false)}>Resources</NavLink>
          <NavLink to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</NavLink>
        </div>
      </div>
    </header>
  );
}

export default Header;

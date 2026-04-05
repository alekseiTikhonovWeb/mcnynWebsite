import React from 'react';
import { NavLink, Link } from 'react-router-dom';

function Header() {
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

        <button className="hamburger" id="hamburger" aria-expanded="false" aria-label="Open menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
  );
}

export default Header;

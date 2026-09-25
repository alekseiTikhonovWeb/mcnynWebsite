import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

const NAV = [
  { to: '/about', label: 'Who We Are' },
  { to: '/programs', label: 'Programs' },
  { to: '/education', label: 'Education' },
  { to: '/events', label: 'Events' },
  { to: '/resources', label: 'Resources' },
  { to: '/contact', label: 'Contact' },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header id="header">
      <div className="wrap header-wrap">
        <Link to="/" className="brand" aria-label="Maternal, Newborn, Child & Youth Network home">
          <img src="/images/logo.svg" alt="Maternal, Newborn, Child & Youth Network" className="brand-logo" />
        </Link>

        <nav className="primary-nav" aria-label="Main navigation">
          {NAV.map(({ to, label }) => <NavLink key={to} to={to}>{label}</NavLink>)}
        </nav>

        <button className="hamburger" aria-expanded={menuOpen} aria-label="Open menu" onClick={() => setMenuOpen(true)}>
          <span></span><span></span><span></span>
        </button>
      </div>

      <div className={`mobile-overlay${menuOpen ? ' show' : ''}`}>
        <div className="overlay-bg" onClick={closeMenu}></div>
        <div className="drawer">
          <button className="drawer-close" aria-label="Close menu" onClick={closeMenu}>&times;</button>
          {NAV.map(({ to, label }) => <NavLink key={to} to={to} onClick={closeMenu}>{label}</NavLink>)}
        </div>
      </div>
    </header>
  );
}

export default Header;

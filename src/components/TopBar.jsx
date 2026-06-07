import { NavLink } from 'react-router-dom';
import { Menu, Bell } from 'lucide-react';
import './TopBar.css';

export default function TopBar() {
  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/services', label: 'Services' },
    { to: '/combos', label: 'Combos' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <header className="topbar">
      <div className="topbar-container content-wrapper">
        
        <div className="logo-container">
          <img src="/assets/logo.jpg" alt="AIRAA" className="logo" 
            onError={(e) => { e.target.style.display='none'; e.target.nextSibling.style.display='block'; }} />
          <h1 className="logo-text" style={{display: 'none', color: 'var(--color-gold)', fontFamily: 'var(--font-serif)', fontSize: '24px'}}>AIRAA</h1>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav desktop-only">
          {navItems.map((item) => (
            <NavLink 
              key={item.to} 
              to={item.to} 
              className={({ isActive }) => `desktop-nav-item ${isActive ? 'active' : ''}`}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        
        <div className="topbar-actions">
          <a href="tel:+918383961162" className="btn-primary desktop-only book-top-btn">Book Appointment</a>
        </div>
      </div>
    </header>
  );
}

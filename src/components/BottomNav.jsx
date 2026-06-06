import { NavLink } from 'react-router-dom';
import { Home, Sparkles, Scissors, Image as ImageIcon, Phone } from 'lucide-react';
import './BottomNav.css';

export default function BottomNav() {
  const navItems = [
    { to: '/', icon: <Home size={22} />, label: 'Home' },
    { to: '/services', icon: <Scissors size={22} />, label: 'Services' },
    { to: '/combos', icon: <Sparkles size={22} />, label: 'Combos' },
    { to: '/gallery', icon: <ImageIcon size={22} />, label: 'Gallery' },
    { to: '/contact', icon: <Phone size={22} />, label: 'Contact' },
  ];

  return (
    <nav className="bottom-nav">
      {navItems.map((item) => (
        <NavLink 
          key={item.to} 
          to={item.to} 
          className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
        >
          {item.icon}
          <span>{item.label}</span>
        </NavLink>
      ))}
    </nav>
  );
}

import { Outlet } from 'react-router-dom';
import TopBar from './TopBar';
import BottomNav from './BottomNav';
import { Phone, MessageCircle } from 'lucide-react';
import './AppLayout.css';

export default function AppLayout() {
  return (
    <div className="app-container">
      <TopBar />
      <div className="page-content">
        <Outlet />
      </div>
      <BottomNav />
      
      {/* Floating Action Buttons */}
      <div className="fab-container">
        <a href="tel:+918383961162" className="fab-btn fab-call">
          <Phone size={24} />
        </a>
        <a href="https://wa.me/918383961162" target="_blank" rel="noopener noreferrer" className="fab-btn fab-whatsapp">
          <MessageCircle size={24} />
        </a>
      </div>
    </div>
  );
}

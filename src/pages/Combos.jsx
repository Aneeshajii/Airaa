import { useState } from 'react';
import { CheckCircle2, Tag } from 'lucide-react';
import './Combos.css';

const LADIES_COMBOS = [
  {
    title: 'Basic Beauty Combo',
    services: ['Eyebrows', 'Upperlip', 'D-Tan (Face & Neck)', 'Basic Haircut'],
    price: 499,
    originalPrice: 800,
    savePercent: 37,
    image: '/assets/gallery-1.jpg'
  },
  {
    title: 'Glow & Style Combo',
    services: ['Basic Haircut', 'Eyebrow', 'Facial', 'Threading'],
    price: 999,
    originalPrice: 1500,
    savePercent: 33,
    image: '/assets/hero.png'
  },
  {
    title: 'Full Body Care Combo',
    services: ['Full Hand Waxing', 'Underarm Waxing', 'Full Leg Waxing'],
    price: 1299,
    originalPrice: 2000,
    savePercent: 35,
    image: '/assets/gallery-2.jpg'
  }
];

const GENTS_COMBOS = [
  {
    title: 'Grooming Essential',
    services: ['Basic Haircut', 'Beard Trim', 'D-Tan'],
    price: 299,
    originalPrice: 500,
    savePercent: 40,
    image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=600&q=80'
  },
  {
    title: 'Relaxation Combo',
    services: ['Basic Haircut', 'Beard Trim', 'D-Tan', 'Head Massage'],
    price: 799,
    originalPrice: 1200,
    savePercent: 33,
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=600&q=80'
  },
  {
    title: 'Premium Styling',
    services: ['Basic Haircut', 'Hair Spa', 'D-Tan', 'Beard Trim'],
    price: 999,
    originalPrice: 1600,
    savePercent: 37,
    image: 'https://images.unsplash.com/photo-1593702288056-ccbfcb005f33?auto=format&fit=crop&w=600&q=80'
  }
];

export default function Combos() {
  const [activeTab, setActiveTab] = useState('Ladies');

  const combos = activeTab === 'Ladies' ? LADIES_COMBOS : GENTS_COMBOS;

  return (
    <div className="combos-page content-wrapper">
      <div className="combo-header-section">
        <div className="page-header">
          <h1 className="font-serif text-gold">Exclusive Combos</h1>
          <div className="ornament"></div>
          <p className="combo-subtitle">Save More with Our Special Offers<br/>Valid Till 30th June</p>
        </div>
      </div>

      <div className="combo-toggle-wrapper">
        <div className="premium-toggle">
          <button 
            className={`toggle-btn ${activeTab === 'Ladies' ? 'active' : ''}`}
            onClick={() => setActiveTab('Ladies')}
          >
            For Ladies
          </button>
          <button 
            className={`toggle-btn ${activeTab === 'Gents' ? 'active' : ''}`}
            onClick={() => setActiveTab('Gents')}
          >
            For Gents
          </button>
        </div>
      </div>

      <div className="combo-cards-grid">
        {combos.map((combo, idx) => (
          <div key={idx} className="premium-combo-card">
            <div className="combo-card-image">
              <img src={combo.image} alt={combo.title} onError={(e) => { e.target.src='https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=600&q=80'; }} />
              <div className="combo-image-overlay"></div>
              <div className="discount-badge">
                <Tag size={14} className="tag-icon" />
                <span>Save {combo.savePercent}%</span>
              </div>
            </div>
            
            <div className="combo-card-content">
              <h3 className="font-serif text-gold combo-title">{combo.title}</h3>
              
              <div className="combo-price-row">
                <span className="current-price">₹{combo.price}</span>
                <span className="original-price">₹{combo.originalPrice}</span>
              </div>
              
              <div className="combo-divider"></div>
              
              <ul className="combo-services-list">
                {combo.services.map((service, i) => (
                  <li key={i}>
                    <CheckCircle2 size={16} className="check-icon" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
              
              <div className="combo-card-footer">
                <a href="https://wa.me/918383961162" className="btn-primary combo-book-btn">BOOK NOW</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

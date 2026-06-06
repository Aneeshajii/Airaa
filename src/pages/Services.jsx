import { useState, useEffect } from 'react';
import './Services.css';

const CATEGORIES = [
  { id: 'women-hair', label: 'Women Hair', image: '/assets/Hairdressing.png' },
  { id: 'men-hair', label: 'Men Hair', image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=800&q=80' },
  { id: 'bridal', label: 'Bridal', image: '/assets/hero.png' },
  { id: 'makeup', label: 'Party Makeup', image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=800&q=80' },
  { id: 'skin', label: 'Skin Care', image: '/assets/skincare.png' },
  { id: 'nail', label: 'Nail Spa', image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=800&q=80' }
];

const SERVICES_DATA = {
  'women-hair': [
    { name: 'U-Cut / Straight Cut', price: '₹300' },
    { name: 'Layer-Cut / Advance Hair Cut', price: '₹600' },
    { name: 'Normal Hair Spa', price: '₹800' },
    { name: 'Keratin Spa', price: '₹1500' },
    { name: 'Global Hair Color', price: '₹1500+' },
    { name: 'Smoothening (Starting)', price: '₹3000' }
  ],
  'men-hair': [
    { name: 'Hair Cut', price: '₹200' },
    { name: 'Beard Trim', price: '₹100' },
    { name: 'Beard Shaving', price: '₹100' },
    { name: 'Dandruff Spa', price: '₹1000' },
    { name: 'Global Hair color', price: '₹1200' }
  ],
  'skin': [
    { name: 'Normal Clean up', price: '₹400' },
    { name: 'D-Tan Clean up', price: '₹700' },
    { name: 'Pearl Facial', price: '₹900' },
    { name: 'Gold Facial', price: '₹1800' },
    { name: 'Full Body D-Tan', price: '₹2000' },
    { name: 'Full Body Polish', price: '₹3000' }
  ],
  'bridal': [
    { name: 'Bridal Makeup (HD/Glass Skin)', price: '₹9000' },
    { name: 'Pre - Bridal Package', price: '₹5999' },
    { name: 'Bridal Hair Do', price: '₹1500' },
    { name: 'Saree Draping', price: '₹1000' }
  ],
  'makeup': [
    { name: 'Party Makeup', price: '₹2000' },
    { name: 'Normal Makeup', price: '₹1000' },
    { name: 'Hair Do', price: '₹1000' }
  ],
  'nail': [
    { name: 'Pedicure (Normal)', price: '₹800' },
    { name: 'Spa Pedicure', price: '₹1300' },
    { name: 'Normal Manicure', price: '₹600' },
    { name: 'Foot Massage (20mins)', price: '₹800' }
  ]
};

export default function Services() {
  const [activeId, setActiveId] = useState(CATEGORIES[0].id);
  const [fade, setFade] = useState(true);

  const activeCategory = CATEGORIES.find(c => c.id === activeId);
  const activeServices = SERVICES_DATA[activeId];

  // Trigger fade effect when category changes
  const handleCategoryChange = (id) => {
    if (id === activeId) return;
    setFade(false);
    setTimeout(() => {
      setActiveId(id);
      setFade(true);
    }, 300); // 300ms matches css transition
  };

  return (
    <div className="services-magazine-page">
      {/* Left Side: Dynamic Full Image */}
      <div className="mag-left">
        <img 
          src={activeCategory.image} 
          alt={activeCategory.label} 
          className={`mag-feature-image ${fade ? 'fade-in' : 'fade-out'}`}
          onError={(e) => { e.target.src='https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80'; }} 
        />
        <div className="mag-image-overlay"></div>
        <div className={`mag-title-container ${fade ? 'fade-in' : 'fade-out'}`}>
          <h1 className="font-serif mag-hero-title">{activeCategory.label}</h1>
          <div className="mag-ornament"></div>
        </div>
      </div>

      {/* Right Side: Clean Typography Menu */}
      <div className="mag-right">
        {/* Horizontal Navigation */}
        <div className="mag-nav-scroll">
          {CATEGORIES.map(cat => (
            <button 
              key={cat.id}
              className={`mag-nav-btn ${activeId === cat.id ? 'active' : ''}`}
              onClick={() => handleCategoryChange(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Minimalist Services List */}
        <div className={`mag-menu-list ${fade ? 'fade-in-up' : 'fade-out-down'}`}>
          {activeServices.map((item, idx) => (
            <div key={idx} className="mag-list-item">
              <span className="mag-item-name font-serif">{item.name}</span>
              <span className="mag-item-price text-gold">{item.price}</span>
            </div>
          ))}
        </div>

        <div className={`mag-footer ${fade ? 'fade-in' : 'fade-out'}`}>
          <a href="https://wa.me/918383961162" target="_blank" rel="noopener noreferrer" className="btn-primary mag-book-btn">
            Book Appointment
          </a>
        </div>
      </div>
    </div>
  );
}

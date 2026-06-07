import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import './Services.css';

const CATEGORIES = [
  { id: 'women-hair', label: 'Women Hair', image: '/assets/Hairdressing.png' },
  { id: 'men-hair', label: 'Men Hair', image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=800&q=80' },
  { id: 'bridal', label: 'Bridal', image: '/assets/hero.png' },
  { id: 'makeup', label: 'Party Makeup', image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=800&q=80' },
  { id: 'skin', label: 'Skin Care', image: '/assets/skincare.png' },
  { id: 'waxing', label: 'Waxing', image: 'https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&fit=crop&w=800&q=80' },
  { id: 'threading', label: 'Threading', image: 'https://images.unsplash.com/photo-1512496015851-a1c848fe7182?auto=format&fit=crop&w=800&q=80' },
  { id: 'nail', label: 'Nail Spa', image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=800&q=80' }
];

const SERVICES_DATA = {
  'women-hair': [
    { name: 'U-Cut/ Straight Cut', price: '₹300' },
    { name: 'Layer-Cut/ Advance Hair Cut', price: '₹600' },
    { name: 'Normal Hair Spa', price: '₹800' },
    { name: 'Moisturiser Hair Spa', price: '₹1000' },
    { name: 'Dandruff Spa', price: '₹1000' },
    { name: 'Anti-Dandruff Spa Treatment', price: '₹1300' },
    { name: 'Keratin Spa', price: '₹1500' },
    { name: 'Wash and Blow Dry', price: '₹300' },
    { name: 'Root Touch Up (Ear to Ear)', price: '₹600' },
    { name: 'Root Touch Up (Full)', price: '₹1200' },
    { name: 'Global Hair Color (Depends on Length)', price: '₹1500' },
    { name: 'Highlight Per Streak', price: '₹200' },
    { name: 'Highlight Full Hair', price: '₹2000' },
    { name: 'Smoothening (Starting)', price: '₹3000' },
    { name: 'Keratin Treatment (Starting)', price: '₹4500' },
    { name: 'Nanoplastia (Starting)', price: '₹4500' },
    { name: 'Head Massage (Oil) (Starting)', price: '₹500' }
  ],
  'men-hair': [
    { name: 'Hair Cut', price: '₹200' },
    { name: 'Beard Trim', price: '₹100' },
    { name: 'Beard Shaving', price: '₹100' },
    { name: 'Dandruff Spa', price: '₹1000' },
    { name: 'Root Touch up', price: '₹600' },
    { name: 'Global Hair color', price: '₹1200' },
    { name: 'Balayages', price: '₹3000' },
    { name: 'Beard Coloring', price: '₹300' },
    { name: 'Hair Styling', price: '₹150' },
    { name: 'Face Scrub', price: '₹200' },
    { name: 'Smoothening (Depends on Length) (Starting)', price: '₹1500' },
    { name: 'Protein Spa', price: '₹600' },
    { name: 'Dandruff Treatment', price: '₹800' },
    { name: 'Head Massage (Oil)', price: '₹300' }
  ],
  'skin': [
    { name: 'Normal Clean up', price: '₹400' },
    { name: 'D-Tan Clean up', price: '₹700' },
    { name: 'Face Bleach', price: '₹300' },
    { name: 'Pearl Facial', price: '₹900' },
    { name: 'Gold Facial', price: '₹1800' },
    { name: 'Whitening Facial', price: '₹1800' },
    { name: 'Anti-Ageing Facial', price: '₹1600' },
    { name: 'Platinum Facial', price: '₹1700' },
    { name: 'Aroma Skin Glow Facial', price: '₹1300' },
    { name: 'Vitamin-C Facial', price: '₹2800' },
    { name: 'Face D-Tan', price: '₹300' },
    { name: 'Hand D-Tan Full/Half', price: '₹700/350' },
    { name: 'Leg D-Tan Full/Half', price: '₹800/400' },
    { name: 'Full Body D-Tan', price: '₹2000' },
    { name: 'Under Arm D-Tan', price: '₹150' },
    { name: 'Blouse Line D-Tan', price: '₹250' },
    { name: 'Hand Polish', price: '₹600' },
    { name: 'Full Body Polish', price: '₹3000' }
  ],
  'waxing': [
    { name: 'Full Hand Waxing', price: '₹500' },
    { name: 'Half Arm Waxing', price: '₹300' },
    { name: 'Full Leg Waxing', price: '₹900' },
    { name: 'Half Leg Waxing', price: '₹600' },
    { name: 'Under Arm Waxing', price: '₹150' },
    { name: 'Full Body Waxing', price: '₹2500' },
    { name: 'Face Waxing', price: '₹300' },
    { name: 'Upper Lip Waxing', price: '₹20' }
  ],
  'threading': [
    { name: 'Eye Brow', price: '₹50' },
    { name: 'Upper Lip', price: '₹20' },
    { name: 'Chin', price: '₹20' },
    { name: 'Forehead', price: '₹20' },
    { name: 'Full Face', price: '₹150' }
  ],
  'bridal': [
    { name: 'Bridal Makeup (HD/Glass Skin)', price: '₹9000' },
    { name: 'Reception & Engagement Makeup', price: '₹7000' },
    { name: 'Pre - Bridal Package', price: '₹5999' }
  ],
  'makeup': [
    { name: 'Normal Makeup', price: '₹1500' },
    { name: 'Party Makeup', price: '₹2000' },
    { name: 'Hair Do', price: '₹1000' },
    { name: 'Saree Draping', price: '₹1000' },
    { name: 'Gents Makeup (Package)', price: '₹5000' }
  ],
  'nail': [
    { name: 'Pedicure (Normal)', price: '₹800' },
    { name: 'Spa Pedicure', price: '₹1300' },
    { name: 'Nail Cut N File', price: '₹100' },
    { name: 'Aroma Pedicure', price: '₹1000' },
    { name: 'Normal Manicure', price: '₹600' },
    { name: 'Spa Manicure', price: '₹1000' },
    { name: 'Aroma Manicure', price: '₹800' },
    { name: 'Foot Massage (20mins)', price: '₹800' },
    { name: 'Hand Massage (20mins)', price: '₹600' }
  ]
};

export default function Services() {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  const initialCategory = (categoryParam && CATEGORIES.find(c => c.id === categoryParam)) ? categoryParam : CATEGORIES[0].id;

  const [activeId, setActiveId] = useState(initialCategory);
  const [fade, setFade] = useState(true);

  // Update active tab if user navigates to a new URL while already on the page
  useEffect(() => {
    const currentParam = searchParams.get('category');
    if (currentParam && CATEGORIES.find(c => c.id === currentParam) && currentParam !== activeId) {
      setFade(false);
      setTimeout(() => {
        setActiveId(currentParam);
        setFade(true);
      }, 300);
    }
  }, [searchParams]);

  const activeCategory = CATEGORIES.find(c => c.id === activeId) || CATEGORIES[0];
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

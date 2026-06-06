import { useState } from 'react';
import './Gallery.css';

const GALLERY_CATEGORIES = ['All', 'Salon', 'Bridal', 'Hair', 'Skin'];

const GALLERY_IMAGES = [
  { id: 1, category: 'Bridal', src: '/assets/hero.png' },
  { id: 2, category: 'Salon', src: '/assets/gallery-1.jpg' },
  { id: 3, category: 'Salon', src: '/assets/gallery-2.jpg' },
  { id: 4, category: 'Skin', src: '/assets/gallery-3.jpg' },
  { id: 5, category: 'Hair', src: '/assets/gallery-4.jpg' },
  { id: 6, category: 'Bridal', src: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=400&q=80' },
  { id: 7, category: 'Skin', src: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=400&q=80' },
  { id: 8, category: 'Hair', src: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=400&q=80' },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages = activeCategory === 'All' 
    ? GALLERY_IMAGES 
    : GALLERY_IMAGES.filter(img => img.category === activeCategory);

  return (
    <div className="gallery-page content-wrapper">
      <div className="page-header">
        <h1 className="font-serif text-gold">Our Gallery</h1>
        <div className="ornament"></div>
      </div>

      <div className="gallery-tabs">
        {GALLERY_CATEGORIES.map(cat => (
          <button 
            key={cat}
            className={`gallery-tab ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="gallery-grid">
        {filteredImages.map(img => (
          <div key={img.id} className="gallery-item">
            <img 
              src={img.src} 
              alt={`Gallery ${img.category}`} 
              onError={(e) => { 
                e.target.src='https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=400&q=80'; 
              }} 
            />
          </div>
        ))}
      </div>
    </div>
  );
}

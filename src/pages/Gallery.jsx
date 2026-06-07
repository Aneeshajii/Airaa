import './Gallery.css';

const GALLERY_IMAGES = Array.from({ length: 14 }, (_, i) => ({
  id: i + 1,
  src: `/assets/gallery-${i + 1}.jpg`
}));

export default function Gallery() {
  return (
    <div className="gallery-page content-wrapper">
      <div className="page-header">
        <h1 className="font-serif text-gold">Our Gallery</h1>
        <div className="ornament"></div>
      </div>

      <div className="gallery-grid">
        {GALLERY_IMAGES.map(img => (
          <div key={img.id} className="gallery-item">
            <img 
              src={img.src} 
              alt={`Gallery ${img.id}`} 
              onError={(e) => { 
                e.target.parentElement.style.display = 'none';
              }} 
            />
          </div>
        ))}
      </div>
    </div>
  );
}

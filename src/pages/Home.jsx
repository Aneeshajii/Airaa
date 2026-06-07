import { ArrowRight, Star, ShieldCheck, Sparkles, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-image-container">
          <img src="/assets/hero.png" alt="AIRAA Hero" className="hero-image" />
          <div className="hero-overlay"></div>
        </div>
        
        <div className="hero-content content-wrapper">
          <div className="hero-text-box">
            <h1 className="hero-title">
              Where <br/>
              <span className="text-gold">Beauty</span> <br/>
              Meets <span className="text-gold">Confidence</span>
            </h1>
            <p className="hero-subtitle">
              Unisex Salon | Premium Services<br/>
              Luxurious Ambience | Expert Care
            </p>
            <a href="https://wa.me/918383961162" target="_blank" rel="noopener noreferrer" className="btn-primary hero-btn">
              BOOK APPOINTMENT <ArrowRight size={18} style={{display: 'inline', verticalAlign: 'middle', marginLeft: '5px'}}/>
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section content-wrapper">
        <div className="feature-item">
          <div className="feature-icon"><Users size={32} /></div>
          <span>Expert<br/>Stylists</span>
        </div>
        <div className="feature-item">
          <div className="feature-icon"><Sparkles size={32} /></div>
          <span>Premium<br/>Products</span>
        </div>
        <div className="feature-item">
          <div className="feature-icon"><ShieldCheck size={32} /></div>
          <span>Hygienic &<br/>Safe</span>
        </div>
        <div className="feature-item">
          <div className="feature-icon"><Star size={32} /></div>
          <span>Unisex<br/>Salon</span>
        </div>
      </section>

      {/* Popular Services Section */}
      <section className="popular-services content-wrapper">
        <div className="section-header">
          <h2>Our Popular Services</h2>
          <a href="/services" className="view-all">View All</a>
        </div>
        
        <div className="services-grid-desktop">
          <div className="service-card" onClick={() => navigate('/services?category=women-hair')} style={{cursor: 'pointer'}}>
            <div className="service-img-wrapper">
              <img src="/assets/Hairdressing.png" alt="Hair Services" onError={(e) => { e.target.src='https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=400&q=80'; }} />
            </div>
            <div className="service-info">
               <h3>Hair Services</h3>
               <p>30+ Services</p>
            </div>
          </div>
          
          <div className="service-card" onClick={() => navigate('/services?category=skin')} style={{cursor: 'pointer'}}>
            <div className="service-img-wrapper">
              <img src="/assets/skincare.png" alt="Skin Services" onError={(e) => { e.target.src='https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=400&q=80'; }} />
            </div>
            <div className="service-info">
              <h3>Skin Services</h3>
              <p>18+ Services</p>
            </div>
          </div>
          
          <div className="service-card" onClick={() => navigate('/services?category=bridal')} style={{cursor: 'pointer'}}>
            <div className="service-img-wrapper">
              <img src="/assets/hero.png" alt="Bridal Services" onError={(e) => { e.target.src='https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=400&q=80'; }} />
            </div>
            <div className="service-info">
              <h3>Bridal Services</h3>
              <p>Premium Packages</p>
            </div>
          </div>
          
          <div className="service-card" onClick={() => navigate('/services?category=makeup')} style={{cursor: 'pointer'}}>
             <div className="service-img-wrapper">
              <img src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=400&q=80" alt="Makeup Services" />
            </div>
            <div className="service-info">
              <h3>Makeup Services</h3>
              <p>Party & Event Makeup</p>
            </div>
          </div>

          <div className="service-card" onClick={() => navigate('/services?category=waxing')} style={{cursor: 'pointer'}}>
             <div className="service-img-wrapper">
              <img src="https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&fit=crop&w=400&q=80" alt="Waxing Services" />
            </div>
            <div className="service-info">
              <h3>Waxing & Threading</h3>
              <p>10+ Services</p>
            </div>
          </div>

          <div className="service-card" onClick={() => navigate('/services?category=nail')} style={{cursor: 'pointer'}}>
             <div className="service-img-wrapper">
              <img src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=400&q=80" alt="Nail Spa" />
            </div>
            <div className="service-info">
              <h3>Nail Spa</h3>
              <p>Manicure & Pedicure</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Airaa Section */}
      <section className="why-choose-section content-wrapper">
        <div className="why-choose-container">
          <h2 className="why-choose-title font-serif text-gold">WHY CHOOSE<br/>AIRAA?</h2>
          <div className="why-choose-quote">
            <p>"At AIRAA Signature Salon, we believe every person deserves to feel beautiful, confident, and valued. From luxurious ambience and premium products to personalized care by skilled professionals, every detail is designed to give you a relaxing and unforgettable salon experience. Because at AIRAA, we don't just enhance your beauty - we celebrate it."</p>
            <span className="quote-author text-gold">By, Sushmita Arjun</span>
          </div>
        </div>
      </section>
    </div>
  );
}

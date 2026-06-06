import { ArrowRight, Star, ShieldCheck, Sparkles, Users } from 'lucide-react';
import './Home.css';

export default function Home() {
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
          <div className="service-card">
            <div className="service-img-wrapper">
              <img src="/assets/Hairdressing.png" alt="Hair Services" onError={(e) => { e.target.src='https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=400&q=80'; }} />
            </div>
            <div className="service-info">
              <h3>Hair Services</h3>
              <p>20+ Services</p>
            </div>
          </div>
          
          <div className="service-card">
            <div className="service-img-wrapper">
              <img src="/assets/skincare.png" alt="Skin Services" onError={(e) => { e.target.src='https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=400&q=80'; }} />
            </div>
            <div className="service-info">
              <h3>Skin Services</h3>
              <p>15+ Services</p>
            </div>
          </div>
          
          <div className="service-card">
            <div className="service-img-wrapper">
              <img src="/assets/hero.png" alt="Bridal Services" onError={(e) => { e.target.src='https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=400&q=80'; }} />
            </div>
            <div className="service-info">
              <h3>Bridal Services</h3>
              <p>10+ Services</p>
            </div>
          </div>
          
          <div className="service-card desktop-extra-card">
             <div className="service-img-wrapper">
              <img src="/assets/gallery-3.jpg" alt="Makeup Services" onError={(e) => { e.target.src='https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=400&q=80'; }} />
            </div>
            <div className="service-info">
              <h3>Makeup Services</h3>
              <p>12+ Services</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

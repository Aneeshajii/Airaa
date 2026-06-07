import { MapPin, Phone, Mail, Clock, Quote } from 'lucide-react';
import './Contact.css';

const InstagramIcon = ({ size, color }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke={color} 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export default function Contact() {
  return (
    <div className="contact-premium-page">
      {/* Top Banner with Quote */}
      <div className="contact-hero">
        <img src="/assets/gallery-6.jpg" alt="Salon Ambiance" className="contact-hero-bg" onError={(e) => { e.target.src='https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80'; }} />
        <div className="contact-hero-overlay"></div>
        <div className="contact-quote-container content-wrapper">
          <Quote size={40} className="quote-mark" />
          <p className="premium-quote">
            "At AIRAA Signature Salon, we believe every person deserves to feel beautiful, confident, and valued. 
            From luxurious ambience and premium products to personalized care by skilled professionals, every detail 
            is designed to give you a relaxing and unforgettable salon experience. Because at AIRAA, we don't just 
            enhance your beauty - we celebrate it."
          </p>
          <span className="quote-signature">- By, Sushmita Arjun</span>
        </div>
      </div>

      {/* Contact Grid */}
      <div className="contact-info-section content-wrapper">
        <div className="contact-grid">
          
          {/* Visit Us */}
          <div className="premium-contact-card">
            <div className="card-icon-wrapper"><MapPin size={24} /></div>
            <h2 className="font-serif text-gold">Visit Our Salon</h2>
            <p className="card-text">
              Enchakkal Junction,<br/>
              Opp Bank of Baroda,<br/>
              Trivandrum, Kerala 695024
            </p>
            <div className="salon-exterior-img">
               <img src="/assets/gallery-1.jpg" alt="Salon Exterior" onError={(e) => { e.target.style.display='none'; }} />
            </div>
          </div>

          {/* Get In Touch */}
          <div className="premium-contact-card">
            <div className="card-icon-wrapper"><Phone size={24} /></div>
            <h2 className="font-serif text-gold">Get In Touch</h2>
            <div className="contact-links-list">
              <a href="tel:+918383961162" className="contact-link">
                <Phone size={16} color="var(--color-gold)" /> +91 8383961162
              </a>
              <a href="tel:+919977345868" className="contact-link">
                <Phone size={16} color="var(--color-gold)" /> +91 9977345868
              </a>
              <a href="https://instagram.com/airaa_signature_salon" target="_blank" rel="noopener noreferrer" className="contact-link">
                <InstagramIcon size={16} color="var(--color-gold)" /> @airaa_signature_salon
              </a>
              <a href="mailto:airaa.signature@gmail.com" className="contact-link">
                <Mail size={16} color="var(--color-gold)" /> airaa.signature@gmail.com
              </a>
            </div>
          </div>

          {/* Working Hours */}
          <div className="premium-contact-card">
            <div className="card-icon-wrapper"><Clock size={24} /></div>
            <h2 className="font-serif text-gold">Working Hours</h2>
            <div className="hours-display">
              <p className="days">Monday - Sunday</p>
              <p className="time text-gold font-sans">10:00 AM - 08:00 PM</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

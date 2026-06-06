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
    <div className="contact-page content-wrapper">
      <div className="page-header">
        <h1 className="font-serif text-gold">Contact Us</h1>
        <div className="ornament"></div>
      </div>

      <div className="quote-section">
        <Quote size={28} color="var(--color-gold)" className="quote-icon" />
        <p>
          "At AIRAA Signature Salon, we believe every person deserves to feel beautiful, confident, and valued. 
          From luxurious ambience and premium products to personalized care by skilled professionals, every detail 
          is designed to give you a relaxing and unforgettable salon experience. Because at AIRAA, we dont just 
          enhance your beauty - we celebrate it."
        </p>
        <p className="quote-author font-serif text-gold">- By, Sushmita Arjun</p>
      </div>

      <div className="contact-card">
        <h2 className="font-serif text-gold mb-15">Visit Our Salon</h2>
        <div className="visit-info">
          <div className="address-details">
            <MapPin size={20} color="var(--color-gold)" />
            <p>Enchakkal Junction,<br/>Opp Bank of Baroda,<br/>Trivandrum, Kerala 695024</p>
          </div>
          <div className="salon-thumbnail">
            <img src="/assets/gallery-1.jpg" alt="Salon exterior" onError={(e) => { e.target.src='https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=150&q=80'; }} />
          </div>
        </div>

        <div className="map-container">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.064239857245!2d76.9248443!3d8.4842137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bb0010996883%3A0x6b44766bbdd3dc07!2sEnchakkal%20Junction!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
            width="100%" 
            height="150" 
            style={{border: 0}} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="AIRAA Salon Location"
          ></iframe>
        </div>
      </div>

      <div className="contact-card">
        <h2 className="font-serif text-gold mb-15">Get In Touch</h2>
        <div className="contact-links">
          <a href="tel:+918383961162" className="contact-link">
            <Phone size={18} color="var(--color-gold)" />
            <span>+91 8383961162</span>
          </a>
          <a href="tel:+919977345868" className="contact-link">
            <Phone size={18} color="var(--color-gold)" />
            <span>+91 9977345868</span>
          </a>
          <a href="https://instagram.com/airaa_signature_salon" target="_blank" rel="noopener noreferrer" className="contact-link">
            <InstagramIcon size={18} color="var(--color-gold)" />
            <span>@airaa_signature_salon</span>
          </a>
          <a href="mailto:airaa.signature@gmail.com" className="contact-link">
            <Mail size={18} color="var(--color-gold)" />
            <span>airaa.signature@gmail.com</span>
          </a>
        </div>
      </div>

      <div className="contact-card">
        <h2 className="font-serif text-gold mb-15">Working Hours</h2>
        <div className="working-hours">
          <Clock size={20} color="var(--color-gold)" />
          <div>
            <p>Monday - Sunday</p>
            <p className="text-gold">10:00 AM - 08:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <footer className="contact-section">
      <h2>Get in Touch</h2>
      <div className="contact-info">
        <p className="contact-intro">Have questions or need assistance? We're here to help you every step of the way!</p>
        <div className="contact-details">
          <div className="contact-item">
            <span className="icon">📞</span>
            <div>
              <h3>Phone</h3>
              <p>+92 3XX XXXXXXX</p>
            </div>
          </div>
          <div className="contact-item">
            <span className="icon">✉️</span>
            <div>
              <h3>Email</h3>
              <p>admin@saaz.com.pk</p>
            </div>
          </div>
          <div className="contact-item">
            <span className="icon">📍</span>
            <div>
              <h3>Location</h3>
              <p>Serving students across Pakistan</p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 SAAZ. All rights reserved. Empowering your educational journey.</p>
      </div>
    </footer>
  );
};

export default Contact;

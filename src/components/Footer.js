import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section visit-us">
          <h3>Visit Us</h3>
          <p>Bhausaheb Bandodkar Technical Education Complex,</p>
          <p>Goa Engineering College Campus,</p>
          <p>Farmagudi, Ponda, Goa 403401</p>
        </div>
        
        <div className="footer-section follow-us">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="mailto:club.gomyno@iitgoa.ac.in">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>

        <div className="footer-section made-with-love">
          <p>Made with <span className="heart">❤</span> : Go-Myno IIT Goa</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

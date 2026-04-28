import React from 'react';
import './sec11.css';
import mapImg from '../assets/image 27.png'; 



const Sec11 = () => {
  return (
    <section className="contact-section">


      <div className="contact-left">

        <h1 className="contact-title">
          Get In<br />
          <span className="contact-title-orange">Touch</span>
        </h1>

        <div className="contact-venue-card">
          <h3 className="contact-venue-heading">Venue</h3>

          <div className="contact-info-block">
            <span className="contact-info-label">LOCATION</span>
            <p className="contact-info-text">
              Al Manara Conference Center<br />
              Cairo Festival City<br />
              Cairo, Egypt
            </p>
          </div>

          <div className="contact-info-block">
            <span className="contact-info-label">DATES</span>
            <p className="contact-info-text">May 15–18, 2026</p>
          </div>

          <div className="contact-info-block">
            <span className="contact-info-label">CONTACT</span>
            <p className="contact-info-text">
              +20 2 1234 5678<br />
              info@africaexbition.com
            </p>
          </div>
        </div>

      </div>


      <div className="contact-right">


        <p className="contact-right-desc">
          General inquiries, press, and<br />partnership opportunities.
        </p>


        <div className="contact-map-wrap">
          <img src={mapImg} alt="Al Manara Conference Center Map" className="contact-map-img" />

       
          <div className="contact-map-card">
            <div className="contact-map-card-pin">
              
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#E88B2A"/>
                <circle cx="12" cy="9" r="2.5" fill="#fff"/>
              </svg>
            </div>
 
            <div className="contact-map-card-info">
              <strong>Al Manara Conference Center</strong>
              <span>Cairo Festival City, New Cairo</span>
            </div>

    
          <a href="https://maps.google.com/?q=Al+Manara+Conference+Center+Cairo"
            target="_blank"
            rel="noreferrer"
            className="contact-map-btn"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#E88B2A"/>
            </svg>
            View on Google Maps
          </a>
        </div>

      </div>
      </div>

    </section>
  );
};

export default Sec11;
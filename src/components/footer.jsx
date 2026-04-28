import React, { useEffect, useRef } from 'react';
import './footer.css';

const Footer = () => {
  const marqueeRef = useRef(null);

  return (
    <footer className="footer">

     
      <div className="footer-marquee-wrap">
        <div className="footer-marquee" ref={marqueeRef}>
          {[...Array(2)].map((_, i) => (
            <span key={i} className="footer-marquee-track">
              <span>Health Africa</span>
              <span className="footer-marquee-dot">✦</span>
              <span>Cairo 2026</span>
              <span className="footer-marquee-dot">✦</span>
              <span>500+ Exhibitors</span>
              <span className="footer-marquee-dot">✦</span>
              <span>May 15–18</span>
              <span className="footer-marquee-dot">✦</span>
              <span>20K Attendees</span>
              <span className="footer-marquee-dot">✦</span>
              <span>40+ Countries</span>
              <span className="footer-marquee-dot">✦</span>
            </span>
          ))}
        </div>
      </div>

     
      <div className="footer-main">

        
        <div className="footer-logo-block">
          <div className="footer-big-text">
            <span className="footer-big-solid">Africa</span>
            <span className="footer-big-outline">Exbition</span>
          </div>
          <p className="footer-tagline">
            The premier digital archive and cultural<br />
            exhibition platform for pan-African futures.
          </p>

          
          <div className="footer-socials">
            <a href="/#" className="footer-social-btn" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
              </svg>
            </a>
            <a href="/#" className="footer-social-btn" aria-label="Twitter">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="/#" className="footer-social-btn" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
          </div>
        </div>

       
        <div className="footer-nav-group">
          <nav className="footer-nav">
            <div className="footer-nav-label">Directory</div>
            <a href="/#">Home</a>
            <a href="/#">Exhibitors</a>
            <a href="/#">Floor Plan</a>
            <a href="/#">Register</a>
          </nav>

          <nav className="footer-nav">
            <div className="footer-nav-label">Connect</div>
            <a href="/#">Contact Us</a>
            <a href="/#">Instagram</a>
            <a href="/#">Twitter / X</a>
            <a href="/#">LinkedIn</a>
          </nav>

       
          <div className="footer-cta-card">
            <p className="footer-cta-label">Don't miss out</p>
            <h4 className="footer-cta-title">Register for<br />Free Access</h4>
            <a href="/register" className="footer-cta-btn">
              Secure Your Pass
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>

      </div>

      
      <div className="footer-bottom">
        <span>© 2026 AfricaExbition — All rights reserved</span>
        <div className="footer-bottom-right">
          <span>Design Archive v1.0</span>
          <span className="footer-bottom-dot">·</span>
          <span>Cairo, Egypt</span>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
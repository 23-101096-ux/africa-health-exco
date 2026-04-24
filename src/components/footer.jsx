import React from 'react';
import './footer.css';
import BlackTickter from './blacktickter';

const Footer = () => {
    return ( <>
                <footer className="footer">


            <div className="footer-main">

          
            <div className="footer-logo">
                <div className="footer-logo-text">
                <span className="logo-line1">Africa</span>
                <span className="logo-line2">Exbition</span>
                </div>
                <p className="footer-tagline">
                The premier digital archive and cultural<br/>
                exhibition platform for pan-African futures.
                </p>
            </div>


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
                <a href="/#">Twitter</a>
                <a href="/#">LinkedIn</a>
            </nav>

            </div>
            <div class="footer-bottom">
            <span>© 2026 AfricaExbition</span>
            <span>Design Archive v1.0</span>
            </div>

            </footer>

    </> );
}
 
export default Footer;
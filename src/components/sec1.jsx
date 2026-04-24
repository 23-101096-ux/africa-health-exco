import React from 'react';
import './sec1.css';
import OrangeTickter from '../components/orangetickter';
const Sec1 = () => {
    return (
        <section className='hero-sec'>
          <div className="hero-content">
            
            <div className="hero-title">
              <h1>
                <span className="line-1">Discover</span>
                <span className="line-2 orange">Africa's</span>
                <span className="line-3">Creative</span>
              </h1>
            </div>

            <div className="circles-container">
              <div className="ring ring-outer"></div>
              <div className="ring ring-mid"></div>
              <div className="ring ring-inner"></div>

              <div className="model-viewer-wrapper">
                <model-viewer
                  src="/human_heart_ed.glb"
                  alt="3D Heart Model"
                  auto-rotate
                  rotation-per-second="30deg"
                  camera-controls
                  disable-zoom
                  disable-pan
                  exposure="1.2"
                  shadow-intensity="0"
                  style={{ background: 'transparent', width: '100%', height: '100%' }}
                >
                  <div className="heart-fallback" slot="poster">
                    <svg width="100" height="90" viewBox="0 0 100 90" fill="none">
                      <path
                        d="M50 80 C50 80, 5 50, 5 25 C5 10, 15 3, 27 3 C38 3, 45 10, 50 18 C55 10, 62 3, 73 3 C85 3, 95 10, 95 25 C95 50, 50 80, 50 80Z"
                        fill="rgba(255,255,255,0.85)"
                        stroke="rgba(232,139,42,0.6)"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </div>
                </model-viewer>
              </div>
            </div>

          </div>

          <div className="date-badge">
            <div className="date-line"><strong>May 15–18, 2026</strong></div>
            <div className="date-line">Cairo, Egypt</div>
          </div>

          <a href="#" className="enter-btn">
            <span>Enter</span>
            <span className="arrow">↗</span>
          </a>

          <OrangeTickter />
        </section>
    );
}
 
export default Sec1;

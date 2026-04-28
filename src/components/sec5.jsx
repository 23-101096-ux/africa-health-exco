import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './sec5.css';
import img4 from '../assets/image 28.png';

gsap.registerPlugin(ScrollTrigger);

const Sec5 = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
          end: 'bottom 30%',
          scrub: false, 
        },
      });

    
      tl.fromTo('.heading-ghost',
        { opacity: 0, x: -80, skewX: -6 },
        { opacity: 1, x: 0, skewX: 0, duration: 0.9, ease: 'expo.out' }
      )

     
      .fromTo('.heading-main',
        { opacity: 0, y: 40, skewX: -4 },
        { opacity: 1, y: 0, skewX: 0, duration: 0.8, ease: 'expo.out' },
        '-=0.5'
      )

     
      .fromTo('.exhibitor-image-wrap',
        { opacity: 0, x: -60, scale: 0.96 },
        { opacity: 1, x: 0, scale: 1, duration: 1, ease: 'power3.out' },
        '-=0.4'
      )

    
      .fromTo('.exhibitor-meta',
        { opacity: 0, y: 20, letterSpacing: '0.4em' },
        { opacity: 1, y: 0, letterSpacing: '0.2em', duration: 0.7, ease: 'power2.out' },
        '-=0.6'
      )

     
      .fromTo('.exhibitor-name',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.85, ease: 'expo.out' },
        '-=0.5'
      )

    
      .fromTo('.exhibitor-desc',
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' },
        '-=0.45'
      )


      .fromTo('.view-profile-btn',
        { opacity: 0, y: 16, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: 'back.out(1.5)' },
        '-=0.3'
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="exhibitors-section" ref={sectionRef}>
      <div className="exhibitors-heading">
        <span className="heading-ghost">EXHIBITOR</span>
        <h1 className="heading-main">Directory</h1>
      </div>

      <div className="exhibitors-content">

        <div className="exhibitor-image-wrap">
          <img src={img4} alt="AfriHealth Laboratories" className="exhibitor-img" />
        </div>

        <div className="exhibitor-info">
          <div className="exhibitor-meta">
            BOOTH D-01 <span className="dot">•</span> NIGERIA
          </div>
          <h2 className="exhibitor-name">AfriHealth<br />Laboratories</h2>
          <p className="exhibitor-desc">
            Pioneering laboratory diagnostics and point-of-care
            testing solutions tailored for the African continent's
            unique healthcare challenges.
          </p>
          <a href="/#" className="view-profile-btn">
            View Profile
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 13L13 3M13 3H6M13 3V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Sec5;
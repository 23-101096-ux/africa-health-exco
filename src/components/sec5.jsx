import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './sec5.css';
import img4 from '../assets/image 28.png';

gsap.registerPlugin(ScrollTrigger);

const showAll = () => {
  const els = document.querySelectorAll(
    '.heading-ghost, .heading-main, .exhibitor-image-wrap, .exhibitor-meta, .exhibitor-name, .exhibitor-desc, .view-profile-btn'
  );
  els.forEach(el => {
    el.style.opacity = '1';
    el.style.transform = 'none';
  });
};

const Sec5 = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    
    const safetyTimer = setTimeout(showAll, 5000);

    let ctx;

    const initAnimation = () => {
      clearTimeout(safetyTimer);

      try {
        ctx = gsap.context(() => {
          const trigger = {
            trigger: sectionRef.current,
            start: 'top 90%',
            once: true,
          };

          const tl = gsap.timeline({ scrollTrigger: trigger });

          tl.fromTo(
            '.heading-ghost',
            { opacity: 0, x: -60 },
            { opacity: 1, x: 0, duration: 0.7, ease: 'power3.out' }
          )
            .fromTo(
              '.heading-main',
              { opacity: 0, y: 30 },
              { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
              '-=0.4'
            )
            .fromTo(
              '.exhibitor-image-wrap',
              { opacity: 0, x: -40 },
              { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out' },
              '-=0.3'
            )
            .fromTo(
              ['.exhibitor-meta', '.exhibitor-name', '.exhibitor-desc', '.view-profile-btn'],
              { opacity: 0, y: 24 },
              { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out', stagger: 0.1 },
              '-=0.5'
            );

          ScrollTrigger.refresh();
        }, sectionRef);
      } catch (e) {
        console.error('GSAP sec5 failed:', e);
        showAll();
      }
    };

  
    window.addEventListener('preloader:done', initAnimation, { once: true });

    return () => {
      clearTimeout(safetyTimer);
      window.removeEventListener('preloader:done', initAnimation);
      ctx?.revert();
    };
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
          <h2 className="exhibitor-name">
            AfriHealth
            <br />
            Laboratories
          </h2>
          <p className="exhibitor-desc">
            Pioneering laboratory diagnostics and point-of-care testing solutions tailored for
            the African continent's unique healthcare challenges.
          </p>
          <a href="/#" className="view-profile-btn">
            View Profile
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 13L13 3M13 3H6M13 3V10"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Sec5;
import React, { useEffect } from 'react';
import './sec4.css';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Sec4 = () => {

  useEffect(() => {

    const fallback = () => {
      document.querySelectorAll('#ctaLabel, #ctaHead, #ctaBtn, #ctaMeta')
        .forEach(el => {
          if (el) {
            el.style.opacity = 1;
            el.style.transform = 'translateY(0)';
          }
        });
    };

    try {
      gsap.fromTo(
        ['#ctaLabel', '#ctaHead', '#ctaBtn', '#ctaMeta'],
        {
          opacity: 0,
          y: 30
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.12,
          scrollTrigger: {
            trigger: '#ctaSection',
            start: 'top 75%',
          }
        }
      );
    } catch (e) {
      console.error("GSAP failed, fallback applied", e);
      fallback();
    }
  }, []);

  return (
    <section className="cta-sec" id="ctaSection">

   
      <div className="cta-bg-ring" />
      <div className="cta-bg-ring" />
      <div className="cta-bg-ring" />

   
      <div className="cta-label" id="ctaLabel">
        Secure your place
      </div>

    
      <h2 className="cta-headline" id="ctaHead">
        Ready to<br />
        <span className="orange">Join Us?</span>
      </h2>

   
      <div className="cta-btn-wrap" id="ctaBtn">
        <button className="secure-btn">
          <span className="btn-text">Secure Pass</span>
          <span className="btn-arrow">→</span>
        </button>
      </div>

  
      <div className="cta-meta" id="ctaMeta">
        <div className="cta-meta-item">
          <div className="cta-meta-dot" />
          May 15–18, 2026
        </div>
        <div className="cta-meta-item">
          <div className="cta-meta-dot" />
          Cairo, Egypt
        </div>
        <div className="cta-meta-item">
          <div className="cta-meta-dot" />
          Limited Passes Available
        </div>
      </div>

    </section>
  );
};

export default Sec4;
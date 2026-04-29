import React, { useEffect, useRef, useContext } from 'react';
import './sec1.css';

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReadyContext } from '../pathes'; 

gsap.registerPlugin(ScrollTrigger);

const Sec1 = () => {
  const heroRef = useRef(null);
  const ready = useContext(ReadyContext);

  useEffect(() => {

    if (!ready) return;

    const fallback = () => {
      document.querySelectorAll('.hero-eyebrow, .hero-sub, .hero-actions, .hero-right, .hero-stat-badge')
        .forEach(el => {
          el.style.opacity = '1';
          el.style.transform = 'none';
        });
      document.querySelectorAll('.hero-title .line span')
        .forEach(el => el.style.transform = 'translateY(0)');
    };

    const safetyTimer = setTimeout(fallback, 2000);

    try {
      
      gsap.fromTo(
        ['#l1', '#l2', '#l3'],
        { y: '110%' },
        {
          y: '0%',
          duration: 0.9,
          ease: 'power4.out',
          stagger: 0.12,
          delay: 0.1,
          onComplete: () => clearTimeout(safetyTimer),
        }
      );

      
      gsap.fromTo(
        ['.hero-eyebrow', '.hero-sub', '.hero-actions'],
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power3.out',
          stagger: 0.15,
          delay: 0.4,
        }
      );

     
      gsap.fromTo(
        '.hero-right',
        { opacity: 0 },
        { opacity: 1, duration: 0.8, delay: 0.3 }
      );

     
      gsap.fromTo(
        '.badge-top',
        { opacity: 0, x: 20 },
        { opacity: 1, x: 0, duration: 0.8, ease: 'back.out(1.7)', delay: 0.8 }
      );
      gsap.fromTo(
        '.badge-bot',
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.8, ease: 'back.out(1.7)', delay: 1.0 }
      );

      
      gsap.to('.hero-right', {
        scrollTrigger: {
          trigger: '#hero',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
        y: -80,
      });

      
      const handleMouseMove = (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 20;
        const y = (e.clientY / window.innerHeight - 0.5) * 20;
        gsap.to('.hero-bg-grid', { x, y, duration: 0.8 });
      };

      const el = heroRef.current;
      el?.addEventListener('mousemove', handleMouseMove);

      return () => {
        clearTimeout(safetyTimer);
        el?.removeEventListener('mousemove', handleMouseMove);
      };

    } catch (e) {
      console.error("GSAP failed, fallback applied", e);
      clearTimeout(safetyTimer);
      fallback();
    }
  }, [ready]); 

  return (
    <section className="hero-sec" id="hero" ref={heroRef}>
      <div className="hero-bg-grid" />
      <div className="hero-noise" />
      <div className="float-dot" />
      <div className="float-dot" />
      <div className="float-dot" />

      <div className="hero-content">

        <div className="hero-left">
          <div className="hero-eyebrow">
            <div className="hero-eyebrow-line" />
            <div className="hero-eyebrow-text">
              Africa Creative Festival · Cairo 2026
            </div>
          </div>

          <div className="hero-title">
            <div className="line l1"><span id="l1">Discover</span></div>
            <div className="line l2"><span id="l2">Africa's</span></div>
            <div className="line l3"><span id="l3">Creative</span></div>
          </div>

          <p className="hero-sub">
            The continent's most ambitious gathering of artists, designers,
            innovators, and cultural leaders. Four days. One city. Infinite possibility.
          </p>

          <div className="hero-actions">
            <a href="/#" className="enter-btn">
              <span>Enter</span>
              <span className="arrow">↗</span>
            </a>
            <div className="hero-date">
              <strong>May 15–18, 2026</strong> · Cairo, Egypt
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="rings-wrap">
            <div className="ring ring-outer" />
            <div className="ring ring-mid" />
            <div className="ring ring-inner" />
          </div>

          <div className="model-wrap">
            <model-viewer
              src="/male_full_body_ecorche.glb"
              alt="3D Anatomy Model"
              auto-rotate
              camera-controls
              disable-zoom
              disable-pan
              exposure="1.4"
              shadow-intensity="0"
              camera-orbit="0deg 80deg 200%"
              style={{ background: 'transparent' }}
            >
            </model-viewer>
          </div>

          <div className="hero-stat-badge badge-top">
            <div className="badge-icon">✦</div>
            <div>
              <div className="badge-num">500+</div>
              <div className="badge-label">Exhibitors</div>
            </div>
          </div>

          <div className="hero-stat-badge badge-bot">
            <div className="badge-num">20K</div>
            <div className="badge-label">Attendees Expected</div>
          </div>
        </div>
      </div>

      <div className="scroll-hint">
        <div className="scroll-hint-text">Scroll</div>
        <div className="scroll-hint-line" />
      </div>
    </section>
  );
};

export default Sec1;
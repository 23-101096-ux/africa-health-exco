import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './sec7.css';

gsap.registerPlugin(ScrollTrigger);

const zones = [
  {
    id: 'A',
    label: 'Medical Devices',
    color: '#2a2a6e',
    border: '#4a4aff',
    gridArea: 'zoneA',
    boothCount: 12,
  },
  {
    id: 'B',
    label: 'Pharmaceuticals',
    color: '#5a2a0a',
    border: '#E88B2A',
    gridArea: 'zoneB',
    boothCount: 9,
  },
  {
    id: 'C',
    label: 'Lab Equipment',
    color: '#5a2a0a',
    border: '#E88B2A',
    gridArea: 'zoneC',
    boothCount: 8,
  },
  {
    id: 'D',
    label: 'Digital Health',
    color: '#1e1e1e',
    border: 'rgba(255,255,255,0.18)',
    gridArea: 'zoneD',
    boothCount: 6,
  },
];

const showAll = () => {
  const els = document.querySelectorAll(
    '.fp-heading-ghost, .fp-heading-main, .fp-canvas, .fp-zone, .fp-axis-label'
  );
  els.forEach(el => {
    el.style.opacity = '1';
    el.style.transform = 'none';
    el.style.clipPath = 'none';
  });
};

const Sec7 = () => {
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
            start: 'top 85%',
            once: true,
          };

          const tl = gsap.timeline({ scrollTrigger: trigger });


          tl.fromTo(
            '.fp-heading-ghost',
            { opacity: 0, x: -80 },
            { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out' }
          )
     
            .fromTo(
              '.fp-heading-main',
              { opacity: 0, y: 30 },
              { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
              '-=0.4'
            )
       
            .fromTo(
              '.fp-canvas',
              { opacity: 0, scale: 0.97 },
              { opacity: 1, scale: 1, duration: 0.7, ease: 'power2.out' },
              '-=0.3'
            )
        
            .fromTo(
              '.fp-axis-label',
              { opacity: 0 },
              { opacity: 1, duration: 0.4, stagger: 0.08, ease: 'none' },
              '-=0.3'
            )
         
            .fromTo(
              '.fp-zone',
              { opacity: 0, scale: 0.88, y: 20 },
              {
                opacity: 1,
                scale: 1,
                y: 0,
                duration: 0.55,
                ease: 'back.out(1.4)',
                stagger: {
                  each: 0.12,
                  from: 'start',
                },
              },
              '-=0.2'
            );

     
          zones.forEach((_, i) => {
            gsap.to(`.fp-zone:nth-child(${i + 1})`, {
              boxShadow: `0 0 18px 2px rgba(232, 139, 42, 0.18)`,
              repeat: -1,
              yoyo: true,
              duration: 2.2 + i * 0.3,
              ease: 'sine.inOut',
              delay: i * 0.5,
            });
          });

          ScrollTrigger.refresh();
        }, sectionRef);
      } catch (e) {
        console.error('GSAP sec7 failed:', e);
        showAll();
      }
    };

    window.addEventListener('preloader:done', initAnimation, { once: true });


    const fallbackTimer = setTimeout(initAnimation, 800);

    return () => {
      clearTimeout(safetyTimer);
      clearTimeout(fallbackTimer);
      window.removeEventListener('preloader:done', initAnimation);
      ctx?.revert();
    };
  }, []);

  return (
    <section className="fp-section" ref={sectionRef}>
   
      <div className="fp-heading">
        <span className="fp-heading-ghost">FLOOR</span>
        <h1 className="fp-heading-main">Plan</h1>
      </div>


      <div className="fp-canvas">
       
        <div className="fp-axis fp-axis-top">
          <span className="fp-axis-label">X: 050</span>
          <span className="fp-axis-label">X: 100</span>
        </div>
        <div className="fp-axis fp-axis-left">
          <span className="fp-axis-label">Y: 050</span>
          <span className="fp-axis-label">Y: 100</span>
        </div>

      
        <div className="fp-grid">
          {zones.map(zone => (
            <div
              key={zone.id}
              className="fp-zone"
              style={{
                '--zone-bg': zone.color,
                '--zone-border': zone.border,
                gridArea: zone.gridArea,
              }}
            >
              <span className="fp-zone-letter">{zone.id}</span>
              <span className="fp-zone-label">{zone.label}</span>
              <span className="fp-zone-count">{zone.boothCount} booths</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sec7;
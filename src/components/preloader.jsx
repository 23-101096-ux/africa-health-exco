import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import './preloader.css';

const Preloader = ({ onComplete }) => {
  const loaderRef   = useRef(null);
  const counterRef  = useRef(null);
  const [count, setCount]   = useState(0);

  useEffect(() => {
   
    const obj = { val: 0 };
    const countTween = gsap.to(obj, {
      val: 100,
      duration: 1.8,
      ease: 'power2.inOut',
      onUpdate: () => setCount(Math.round(obj.val)),
    });

 
    const exitTimer = setTimeout(() => {
      countTween.kill();
      setCount(100);

      const tl = gsap.timeline({
        onComplete: () => {
          if (onComplete) onComplete();
        },
      });

   
      tl.to('.pl-bar', {
        scaleY: 0,
        duration: 0.7,
        ease: 'power4.inOut',
        stagger: { each: 0.07, from: 'random' },
        transformOrigin: 'bottom',
      })
   
      .to(loaderRef.current, {
        yPercent: -100,
        duration: 0.6,
        ease: 'power3.inOut',
      }, '-=0.15');

    }, 2000);

    return () => {
      clearTimeout(exitTimer);
      countTween.kill();
    };
  }, [onComplete]);

  const bars = Array.from({ length: 8 });

  return (
    <div className="preloader" ref={loaderRef}>

      {/* Column bars (wipe-out effect) */}
      <div className="pl-bars">
        {bars.map((_, i) => (
          <div key={i} className="pl-bar" />
        ))}
      </div>

    
      <div className="pl-grid" />


      <div className="pl-center">

        <div className="pl-logo-wrap">
          <div className="pl-logo-ring" />
          <div className="pl-logo-ring pl-ring2" />
          <svg className="pl-africa" viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg">
           
            <path
              d="M60 4 C72 4 88 12 92 28 C96 42 88 52 90 62
                 C93 76 102 82 100 96 C98 110 88 124 76 132
                 C64 140 54 136 46 128 C36 118 32 104 28 92
                 C22 76 14 66 18 50 C22 34 32 18 44 10 C50 6 56 4 60 4Z"
              fill="rgba(232,115,42,0.15)"
              stroke="rgba(232,115,42,0.7)"
              strokeWidth="1.5"
            />
            <circle cx="60" cy="68" r="6" fill="var(--orange)" opacity="0.9" />
            <circle cx="60" cy="68" r="12" fill="none" stroke="var(--orange)" strokeWidth="1" opacity="0.4" />
          </svg>
        </div>

        <div className="pl-wordmark">
          <span className="pl-word">Health</span>
          <span className="pl-word pl-orange">Africa</span>
        </div>

        <div className="pl-tagline">Cairo · May 15–18, 2026</div>

      </div>

     
      <div className="pl-bottom">
        <div className="pl-progress-track">
          <div
            className="pl-progress-fill"
            style={{ width: `${count}%` }}
          />
        </div>
        <div className="pl-counter" ref={counterRef}>
          {String(count).padStart(3, '0')}
        </div>
      </div>

    </div>
  );
};

export default Preloader;
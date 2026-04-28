import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';
import './errorsec.css';

const ErrorSec = () => {
  const containerRef = useRef(null);
  const fourRef      = useRef(null);
  const zeroRef      = useRef(null);
  const four2Ref     = useRef(null);
  const msgRef       = useRef(null);
  const btnRef       = useRef(null);
  const ring1Ref     = useRef(null);
  const ring2Ref     = useRef(null);
  const ring3Ref     = useRef(null);
  const glitchRef    = useRef(null);
  const linesRef     = useRef([]);
  const particlesRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {

    
      gsap.set([fourRef.current, zeroRef.current, four2Ref.current], {
        opacity: 0, y: 120, skewX: 15,
      });
      gsap.set(msgRef.current,  { opacity: 0, y: 30 });
      gsap.set(btnRef.current,  { opacity: 0, scale: 0.8 });
      gsap.set([ring1Ref.current, ring2Ref.current, ring3Ref.current], {
        opacity: 0, scale: 0,
      });
      gsap.set(linesRef.current,    { scaleX: 0, transformOrigin: 'left center' });
      gsap.set(particlesRef.current, { opacity: 0, scale: 0 });

    
      const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });

     
      tl.to(linesRef.current, {
        scaleX: 1, duration: 0.6, stagger: 0.04,
      }, 0);

    
      tl.to(fourRef.current,  { opacity: 1, y: 0, skewX: 0, duration: 1 }, 0.3)
        .to(zeroRef.current,  { opacity: 1, y: 0, skewX: 0, duration: 1 }, 0.5)
        .to(four2Ref.current, { opacity: 1, y: 0, skewX: 0, duration: 1 }, 0.7);

      /* rings pop */
      tl.to(ring1Ref.current, { opacity: 1, scale: 1, duration: 0.8, ease: 'back.out(2)' }, 0.6)
        .to(ring2Ref.current, { opacity: 1, scale: 1, duration: 0.8, ease: 'back.out(2)' }, 0.75)
        .to(ring3Ref.current, { opacity: 1, scale: 1, duration: 0.8, ease: 'back.out(2)' }, 0.9);

     
      tl.to(particlesRef.current, {
        opacity: 1, scale: 1, duration: 0.4,
        stagger: { each: 0.06, from: 'random' },
        ease: 'back.out(3)',
      }, 0.8);

     
      tl.to(msgRef.current, { opacity: 1, y: 0, duration: 0.8 }, 1.1)
        .to(btnRef.current,  { opacity: 1, scale: 1, duration: 0.7, ease: 'back.out(2)' }, 1.3);

     
      const glitchTl = gsap.timeline({ repeat: -1, repeatDelay: 3 });
      glitchTl
        .to(glitchRef.current, { x: -6, skewX: 10, duration: 0.05 })
        .to(glitchRef.current, { x:  8, skewX: -8, duration: 0.05 })
        .to(glitchRef.current, { x: -4, skewX:  5, duration: 0.05 })
        .to(glitchRef.current, { x:  0, skewX:  0, duration: 0.05 });

      
      gsap.to(ring1Ref.current, { rotation: 360,  duration: 20, ease: 'none', repeat: -1 });
      gsap.to(ring2Ref.current, { rotation: -360, duration: 14, ease: 'none', repeat: -1 });
      gsap.to(ring3Ref.current, { rotation: 360,  duration: 8,  ease: 'none', repeat: -1 });

   
      particlesRef.current.forEach((p, i) => {
        gsap.to(p, {
          y:        `${(i % 2 === 0 ? -1 : 1) * (10 + (i % 4) * 6)}px`,
          x:        `${(i % 3 === 0 ? -1 : 1) * (6  + (i % 3) * 4)}px`,
          duration: 2.5 + (i % 5) * 0.4,
          ease:     'sine.inOut',
          yoyo:     true,
          repeat:   -1,
          delay:    i * 0.15,
        });
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  
  const handleBtnMove = (e) => {
    const btn  = btnRef.current;
    const rect = btn.getBoundingClientRect();
    const dx   = (e.clientX - (rect.left + rect.width  / 2)) * 0.4;
    const dy   = (e.clientY - (rect.top  + rect.height / 2)) * 0.4;
    gsap.to(btn, { x: dx, y: dy, duration: 0.3, ease: 'power2.out' });
  };

  const handleBtnLeave = () => {
    gsap.to(btnRef.current, { x: 0, y: 0, duration: 0.8, ease: 'elastic.out(1, 0.4)' });
  };


  const particles = [
    { top: '15%', left: '8%',  size: 6,  color: '#E88B2A' },
    { top: '25%', left: '15%', size: 4,  color: 'rgba(255,255,255,0.15)' },
    { top: '70%', left: '5%',  size: 8,  color: '#E88B2A' },
    { top: '80%', left: '20%', size: 3,  color: 'rgba(255,255,255,0.1)' },
    { top: '10%', right: '10%',size: 5,  color: 'rgba(255,255,255,0.12)' },
    { top: '30%', right: '6%', size: 7,  color: '#E88B2A' },
    { top: '60%', right: '12%',size: 4,  color: 'rgba(255,255,255,0.1)' },
    { top: '85%', right: '8%', size: 6,  color: '#E88B2A' },
    { top: '45%', left: '3%',  size: 3,  color: 'rgba(255,255,255,0.08)' },
    { top: '50%', right: '3%', size: 5,  color: 'rgba(255,255,255,0.08)' },
  ];

  return (
    <div className="nf-container" ref={containerRef}>

   
      <div className="nf-scanlines">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="nf-line"
            ref={el => linesRef.current[i] = el}
            style={{ top: `${8 + i * 7.5}%` }}
          />
        ))}
      </div>

   
      {particles.map((p, i) => (
        <div
          key={i}
          className="nf-particle"
          ref={el => particlesRef.current[i] = el}
          style={{
            top:    p.top,
            left:   p.left,
            right:  p.right,
            width:  p.size,
            height: p.size,
            background: p.color,
          }}
        />
      ))}

    
      <div className="nf-rings">
        <div className="nf-ring nf-ring-1" ref={ring1Ref} />
        <div className="nf-ring nf-ring-2" ref={ring2Ref} />
        <div className="nf-ring nf-ring-3" ref={ring3Ref} />
      </div>

   
      <div className="nf-content">

        
        <div className="nf-digits" ref={glitchRef}>
          <span className="nf-digit nf-solid"  ref={fourRef}>4</span>
          <span className="nf-digit nf-outline" ref={zeroRef}>0</span>
          <span className="nf-digit nf-solid"   ref={four2Ref}>4</span>
        </div>

        
        <div className="nf-message" ref={msgRef}>
          <div className="nf-tag">PAGE NOT FOUND</div>
          <p className="nf-desc">
            The page you're looking for has been moved,<br />
            deleted, or never existed.
          </p>
        </div>

       
        <Link
          to="/"
          className="nf-btn"
          ref={btnRef}
          onMouseMove={handleBtnMove}
          onMouseLeave={handleBtnLeave}
        >
          <span>Back to Home</span>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>

    
        <div className="nf-bottom-label">
          HEALTH AFRICA EXHIBITION — CAIRO 2026
        </div>

      </div>
    </div>
  );
};

export default ErrorSec;
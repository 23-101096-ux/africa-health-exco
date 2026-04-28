import React, { useEffect } from 'react';
import './sec2.css';

const cards = [
  {
    id: 'card1',
    className: 'card-large',
    title: 'Cultural Innovation',
    text: 'Explore the latest in African art, design, and creative technology shaping the global narrative.',
    number: '01',
  },
  {
    id: 'card2',
    className: 'card-stat-orange',
    stat: '500+',
    statLabel: 'Exhibitors',
    number: '02',
  },
  {
    id: 'card3',
    className: 'card-stat-white',
    stat: '20k',
    statLabel: 'Attendees',
    number: '03',
  },
  {
    id: 'card4',
    className: 'card-creative',
    title: 'Creative Technology',
    text: 'Discover cutting-edge tools, AI platforms, and digital mediums driving the next wave of pan-African creation.',
    number: '04',
  },
];

const Sec2 = () => {
  useEffect(() => {
    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;
    if (!gsap || !ScrollTrigger) return;

    gsap.from(['#card1', '#card2', '#card3', '#card4', '#card5'], {
      scrollTrigger: { trigger: '#cardsSection', start: 'top 75%' },
      y: 60,
      opacity: 0,
      duration: 0.7,
      ease: 'power3.out',
      stagger: 0.1,
    });
  }, []);

  const handleTilt = (e, el) => {
    const gsap = window.gsap;
    if (!gsap) return;
    const r = el.getBoundingClientRect();
    gsap.to(el, {
      rotateY: (e.clientX - (r.left + r.width / 2)) / 15,
      rotateX: -((e.clientY - (r.top + r.height / 2)) / 15),
      transformPerspective: 800,
      ease: 'power1.out',
      duration: 0.3,
    });
  };

  const handleReset = (el) => {
    const gsap = window.gsap;
    if (!gsap) return;
    gsap.to(el, { rotateY: 0, rotateX: 0, duration: 0.5, ease: 'elastic.out(1, 0.5)' });
  };

  return (
    <section className="cards-section" id="cardsSection">
      <div className="section-header">
        <div className="section-tag">What to expect</div>
        <div className="section-location">Cairo International Convention Centre</div>
      </div>

      <div className="grid">
        {cards.map(({ id, className, title, text, stat, statLabel, number }) => (
          <div
            key={id}
            id={id}
            className={`card ${className}`}
            onMouseMove={(e) => handleTilt(e, e.currentTarget)}
            onMouseLeave={(e) => handleReset(e.currentTarget)}
          >
            {title  && <div className="card-title">{title}</div>}
            {text   && <div className="card-text">{text}</div>}
            {stat   && <div className="card-stat">{stat}</div>}
            {statLabel && <div className="card-stat-label">{statLabel}</div>}
            <div className="card-number">{number}</div>
          </div>
        ))}

     
        <div id="card5" className="card card-accent">
          <div className="card-accent-text">More panels · workshops · exhibitions ↗</div>
        </div>
      </div>
    </section>
  );
};

export default Sec2;
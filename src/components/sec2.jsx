import React, { useState } from 'react';
import './sec2.css';

const Sec2 = () => {
  const [x1, setX1] = useState('0px');
  const [y1, setY1] = useState('0px');
  
  const [x2, setX2] = useState('0px');
  const [y2, setY2] = useState('0px');
  
  const [x3, setX3] = useState('0px');
  const [y3, setY3] = useState('0px');
  
  const [x4, setX4] = useState('0px');
  const [y4, setY4] = useState('0px');

  const handleMove1 = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setX1(((e.clientX - (rect.left + rect.width / 2)) / 10) + 'px');
    setY1(((e.clientY - (rect.top + rect.height / 2)) / 10) + 'px');
  };

  const handleMove2 = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setX2(((e.clientX - (rect.left + rect.width / 2)) / 10) + 'px');
    setY2(((e.clientY - (rect.top + rect.height / 2)) / 10) + 'px');
  };

  const handleMove3 = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setX3(((e.clientX - (rect.left + rect.width / 2)) / 10) + 'px');
    setY3(((e.clientY - (rect.top + rect.height / 2)) / 10) + 'px');
  };

  const handleMove4 = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setX4(((e.clientX - (rect.left + rect.width / 2)) / 10) + 'px');
    setY4(((e.clientY - (rect.top + rect.height / 2)) / 10) + 'px');
  };

  return (
    <section className="cards-section">
      <div className="grid">
        
        {/* Card 1 — spans 2 cols */}
        <div
          className="card card-large"
          onMouseMove={handleMove1}
          onMouseLeave={() => { setX1('0px'); setY1('0px'); }}
          style={{ '--x': x1, '--y': y1 }}
        >
          <div className="card-title">Cultural Innovation</div>
          <div className="card-text">Explore the latest in African art, design, and creative technology shaping the global narrative.</div>
          <div className="card-number">01</div>
        </div>

        {/* Card 2 — spans 1 col (orange stat: 500+) */}
        <div
          className="card card-stat-orange"
          onMouseMove={handleMove2}
          onMouseLeave={() => { setX2('0px'); setY2('0px'); }}
          style={{ '--x': x2, '--y': y2 }}
        >
          <div className="card-stat">500+</div>
          <div className="card-stat-label">Exhibitors</div>
        </div>

        {/* Card 3 — spans 1 col (white stat: 20k) */}
        <div
          className="card card-stat-white"
          onMouseMove={handleMove3}
          onMouseLeave={() => { setX3('0px'); setY3('0px'); }}
          style={{ '--x': x3, '--y': y3 }}
        >
          <div className="card-stat">20k</div>
          <div className="card-stat-label">Attendees</div>
          
        </div>

        {/* Card 4 — spans 2 cols */}
        <div
          className="card card-creative"
          onMouseMove={handleMove4}
          onMouseLeave={() => { setX4('0px'); setY4('0px'); }}
          style={{ '--x': x4, '--y': y4 }}
        >
          <div className="card-title">Creative Technology</div>
          <div className="card-text">Discover cutting-edge tools, AI platforms, and digital mediums driving the next wave of pan-African creation.</div>
          <div className="card-number">02</div>
        </div>

      </div>
    </section>
  );
};

export default Sec2;
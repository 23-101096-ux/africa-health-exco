import React, { useEffect } from 'react';
import './sec3.css';
import img1 from '../assets/image 4.png';
import img2 from '../assets/image 16.png';
import img3 from '../assets/image 17.png';

const newsItems = [
  {
    id: 'nc1',
    image: img1,
    number: '01',
    tag: 'Conference',
    title: 'Creative Leaders Summit Added to Program',
    desc: 'Top creative executives will share insights on the future of African creative industries at exclusive summit sessions.',
    category: 'Conference',
    metaTitle: 'Creative Leaders Summit',
 
   
  },
  {
    id: 'nc2',
    image: img2,
    number: '02',
    tag: 'News',
    title: 'Registration Surpasses 15,000 Attendees',
    desc: 'Early registration numbers exceed expectations as creative professionals from 40+ countries register.',
    category: 'Milestone',
    metaTitle: 'Registration Surpasses 15k',
  
  },
  {
    id: 'nc3',
    image: img3,
    number: '03',
    tag: 'Innovation',
    title: 'New Technology Showcase Area Announced',
    desc: 'A dedicated zone for cutting-edge creative technology demonstrations will feature AI-powered design tools.',
    category: 'Innovation',
    metaTitle: 'Tech Showcase Area',
 
  },
];

const Sec3 = () => {
  useEffect(() => {
    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;
    if (!gsap || !ScrollTrigger) return;

    gsap.from('#newsHeading', {
      scrollTrigger: { trigger: '#newsSection', start: 'top 80%' },
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
    });

    gsap.from(['#nc1', '#nc2', '#nc3'], {
      scrollTrigger: { trigger: '#newsSection', start: 'top 70%' },
      y: 80,
      opacity: 0,
      duration: 0.9,
      ease: 'power3.out',
      stagger: 0.15,
    });
  }, []);

  return (
    <section className="news-section" id="newsSection">
      <h2 className="news-heading" id="newsHeading">
        Latest <span>News</span>
      </h2>

      <div className="news-grid">
        {newsItems.map(({ id, image, number, tag, title, desc, category, metaTitle, placeholderPath }) => (
          <div key={id} className="news-item">

            <div className="news-card" id={id}>
             
              <img
                src={image}
                alt={title}
                className="news-card-img"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />

            
              <div className="news-card-placeholder" aria-hidden="true">
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                  {placeholderPath}
                </svg>
              </div>

              <div className="news-card-number">{number}</div>

             
              <div className="news-card-base-overlay">
                <span className="news-card-base-tag">{tag}</span>
              </div>

             
              <div className="news-card-overlay">
                <span className="news-tag">{tag}</span>
                <h3 className="news-card-title">{title}</h3>
                <p className="news-card-desc">{desc}</p>
                <a href="/#" className="news-read-more">
                  Read more <span>→</span>
                </a>
              </div>
            </div>

            <div className="news-card-meta">
              <div className="news-meta-category">
                <div className="news-meta-line" />
                <span className="news-meta-label">{category}</span>
              </div>
              <p className="news-meta-title">{metaTitle}</p>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Sec3;
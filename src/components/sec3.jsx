import React from 'react';
import './sec3.css';
import img1 from '../assets/image 4.png';
import img2 from '../assets/image 16.png';
import img3 from '../assets/image 17.png';

const newsItems = [
  {
    id: '01',
    image: img1,
    tag: 'Conference',
    title: 'Healthcare Leaders Summit Added to Program',
    desc: 'Top healthcare executives will share insights on the future of African healthcare at exclusive summit sessions.',
    category: 'Conference',
    metaTitle: 'Creative Leaders Summit',
  },
  {
    id: '02',
    image: img2,
    tag: 'News',
    title: 'Registration Surpasses 15,000 Attendees',
    desc: 'Early registration numbers exceed expectations as healthcare professionals from 40+ countries register.',
    category: 'Milestone',
    metaTitle: 'Registration Surpasses 15k',
  },
  {
    id: '03',
    image: img3,
    tag: 'Innovation',
    title: 'New Medical Technology Showcase Area Announced',
    desc: 'A dedicated zone for cutting-edge medical technology demonstrations will feature AI-powered diagnostic tools.',
    category: 'Innovation',
    metaTitle: 'Tech Showcase Area',
  },
];

const Sec3 = () => {
  return (
    <section className="news-section">
      <h2 className="news-heading">News</h2>

      <div className="news-grid">
        {newsItems.map((item) => (
          <div key={item.id} className="news-item">

            
            <div className="news-card">
              <img
                src={item.image}
                alt={item.title}
                className="news-card-image"
              />
              <div className="news-card-number">{item.id}</div>

              <div className="news-card-overlay">
                <span className="news-tag">{item.tag}</span>
                <h3 className="news-card-title">{item.title}</h3>
                <p className="news-card-desc">{item.desc}</p>
                <a href="/#" className="news-read-more">
                  Read more <span className="news-read-more-arrow">→</span>
                </a>
              </div>
            </div>

         
            <div className="news-card-meta">
              <div className="news-meta-category">
                <div className="news-meta-line" />
                <span className="news-meta-label">{item.category}</span>
              </div>
              <p className="news-meta-title">{item.metaTitle}</p>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Sec3;
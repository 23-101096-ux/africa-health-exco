import React from 'react';
import '../components/header.css';
import './home.css';

import Sec2 from '../components/sec2';
import Sec1 from '../components/sec1';
import Sec3 from '../components/sec3';
import Sec4 from '../components/sec4';
import Footer from '../components/footer';
import AnnouncementPopup from '../components/Announcementpopup';

const Home = () => {
  return (<>
    
      <div className="home-page">
        
       <Sec1 />
     <Sec2 />
        <Sec3 />
        <AnnouncementPopup />
        <Sec4 /> 
      
        <Footer /> 
      </div>
      </>);
};

export default Home;










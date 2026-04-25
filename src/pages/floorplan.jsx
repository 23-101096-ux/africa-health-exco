import React from 'react';
import Footer from '../components/footer';
import './home.css';
import Sec7 from '../components/sec7';
import Sec8 from '../components/sec8';
import Sec9 from '../components/sec9';

const FloorPlan = () => {
    return ( <>
     <div className="home-page">
      <Sec7 />
    <Sec8 />
    <Sec9 />
      <Footer />
      </div>
    
    </> );
}
 
export default FloorPlan;
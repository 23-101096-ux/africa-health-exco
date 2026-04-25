import React from 'react';
import Footer from '../components/footer';
import Sec5 from '../components/sec5';
import './home.css';
import Search from '../components/search';
import Sec6 from '../components/sec6';

const Exbition = () => {
    return ( <>
     <div className="home-page">
        <Sec5 />
        <Search />
        <Sec6 />
        <Footer />
      </div>
    
    </> );
}
 
export default Exbition;

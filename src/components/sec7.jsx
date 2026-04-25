import React from 'react';
import './sec7.css';
import img5 from '../assets/Container.png';


const Sec7 = () => {
    return ( <>
    
        <section className="exhibitors-section">
 <div className="exhibitors-heading">
   <span className="heading-ghost">FLOOR</span>
   <h1 className="heading-main">Plan</h1>
 </div>

 <div className="exhibitors-content">

   <div className="exhibitor-image-wrap">
     <img src={img5} alt="AfriHealth Laboratories" class="exhibitor-img" />
   </div>

 </div>
</section>

    </> );
}
 
export default Sec7;
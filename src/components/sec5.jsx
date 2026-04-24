import React from 'react';
import './sec5.css';
import img4 from '../assets/image 28.png';


const Sec5 = () => {
    return ( <>
    
        <section className="exhibitors-section">
 <div className="exhibitors-heading">
   <span className="heading-ghost">EXHIBITOR</span>
   <h1 className="heading-main">Directory</h1>
 </div>


 <div className="exhibitors-content">


   <div className="exhibitor-image-wrap">
     <img src={img4} alt="AfriHealth Laboratories" class="exhibitor-img" />
   </div>


   <div className="exhibitor-info">
     <div className="exhibitor-meta">BOOTH D-01 <span class="dot">•</span> NIGERIA</div>
     <h2 className="exhibitor-name">AfriHealth<br/>Laboratories</h2>
     <p className="exhibitor-desc">
       Pioneering laboratory diagnostics and point-of-care
       testing solutions tailored for the African continent's
       unique healthcare challenges.
     </p>
     <a href="/#" class="view-profile-btn">
       View Profile
       <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
         <path d="M3 13L13 3M13 3H6M13 3V10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
       </svg>
     </a>
   </div>

 </div>

</section>

    </> );
}
 
export default Sec5;
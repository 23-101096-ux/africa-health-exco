import React, { useState, useEffect } from 'react';
import { supabase } from '../supabase';
import './AnnouncementPopup.css';

import cc from '../assets/callender.svg';
import clock from '../assets/clock.svg';

function AnnouncementPopup() {
    const [isVisible, setIsVisible] = useState(false);
    const [popupData, setPopupData] = useState(null);


    useEffect(() => {
        setTimeout(() => {
            getAd();
        }, 3000);
    }, []);

   
    async function getAd() {
        const { data } = await supabase.from('pop_ads').select('*').single();
        
        if (data) {
            setPopupData(data);
            setIsVisible(true);
        }
    }

    
    function close() {
        setIsVisible(false);
    }

   
    if (!isVisible) return null;

    return (
        <div className="popup-overlay">
            <div className="popup-box">
                
              
                <button className="popup-close" onClick={close}>✕</button>

      
                <img src={popupData.img_url} className="popup-image" alt="Ad" />

                <div className="popup-content">
                    <span className="popup-tag">{popupData.category}</span>
                    <h2 className="popup-title">{popupData.title}</h2>
                    <p className="popup-text">{popupData.paragapgh}</p>

                    <div className="popup-info">
                        <span><img src={cc} alt="" />{popupData.date}</span>
                        <span><img src={""} alt="" /> {popupData.time}</span>
                    </div>

                    <button className="popup-btn">Reserve My Seat</button>
                    <p className="maybe-later" onClick={close}>Maybe later</p>
                </div>

            </div>
        </div>
    );
}

export default AnnouncementPopup;
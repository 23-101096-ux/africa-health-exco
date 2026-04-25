import React, { useState } from 'react';
import './sec8.css';
import img6 from '../assets/hall grid.png';
import img7 from '../assets/icon1.png';
 
const Sec8 = () => {
    const [selected, setSelected] = useState(null);

    return (
      <section className="map-section">
        <div className="map-layout">
   
     
          <div className="map-left">
            <h2 className="map-title">Interactive Map</h2>
   
            <div className="halls-grid">
   
              <div className={`hall-card ${selected === 'A' ? 'active' : ''}`} onClick={() => setSelected('A')}>
                <img src={img6} alt="" className="hall-bg" />
                <div className="hall-info">
                  <img src={img7} alt="" className="hall-icon" />
                  <p className="hall-name">Hall A - Medical Devices</p>
                  <div className="hall-pills">
                    <span>A01</span><span>A15</span><span>A22</span><span>A38</span>
                    <span className="more">+4 more</span>
                  </div>
                </div>
              </div>
   
              <div className={`hall-card ${selected === 'B' ? 'active' : ''}`} onClick={() => setSelected('B')}>
                <img src={img6} alt="" className="hall-bg" />
                <div className="hall-info">
                  <img src={img7} alt="" className="hall-icon" />
                  <p className="hall-name">Hall B - Pharmaceuticals</p>
                  <div className="hall-pills">
                    <span>B05</span><span>B12</span><span>B15</span><span>B21</span>
                    <span className="more">+4 more</span>
                  </div>
                </div>
              </div>
   
              <div className={`hall-card ${selected === 'C' ? 'active' : ''}`} onClick={() => setSelected('C')}>
                <img src={img6} alt="" className="hall-bg" />
                <div className="hall-info">
                  <img src={img7} alt="" className="hall-icon" />
                  <p className="hall-name">Hall C - Laboratory Equipment</p>
                  <div className="hall-pills">
                    <span>C08</span><span>C14</span><span>C18</span><span>C22</span>
                    <span className="more">+4 more</span>
                  </div>
                </div>
              </div>
   
              <div className={`hall-card ${selected === 'D' ? 'active' : ''}`} onClick={() => setSelected('D')}>
                <img src={img6}  alt="" className="hall-bg" />
                <div className="hall-info">
                  <img src={img7} alt="" className="hall-icon" />
                  <p className="hall-name">Hall D - Digital Health</p>
                  <div className="hall-pills">
                    <span>D02</span><span>D09</span><span>D17</span><span>D25</span>
                    <span className="more">+4 more</span>
                  </div>
                </div>
              </div>
   
            </div>
          </div>
   
  
          {selected && (
            <div className="map-right">
              <div className="details-header">
                <h3>Hall Details</h3>
                <button onClick={() => setSelected(null)}>×</button>
              </div>
   
              {selected === 'A' && (
                <div className="details-body">
                  <img src={img7} alt="" className="details-icon" />
                  <p className="details-name">Hall A - Medical Devices</p>
                  <p className="details-label">Available Booths:</p>
                  <div className="booths-grid">
                  <div className="booth-box">A01</div>
                  <div className="booth-box">A15</div>
                  <div className="booth-box">A22</div>
                  <div className="booth-box">A38</div>
                  <div className="booth-box">A44</div>
                  <div className="booth-box">A51</div>
                  <div className="booth-box">A60</div>
                  <div className="booth-box">A72</div>
                </div>
                </div>
              )}
   
              {selected === 'B' && (
                <div className="details-body">
                  <img src={img7} alt="" className="details-icon" />
                  <p className="details-name">Hall B - Pharmaceuticals</p>
                  <p className="details-label">Available Booths:</p>
                  <div className="booths-grid">
                  <div className="booth-box">B05</div>
                  <div className="booth-box">B12</div>
                  <div className="booth-box">B15</div>
                  <div className="booth-box">B21</div>
                  <div className="booth-box">B29</div>
                  <div className="booth-box">B33</div>
                  <div className="booth-box">B47</div>
                  <div className="booth-box">B52</div>
                </div>
                </div>
              )}
   
              {selected === 'C' && (
                <div className="details-body">
                  <img src={img7} alt="" className="details-icon" />
                  <p className="details-name">Hall C - Laboratory Equipment</p>
                  <p className="details-label">Available Booths:</p>
                  <div className="booths-grid">
                  <div className="booth-box">C08</div>
                  <div className="booth-box">C14</div>
                  <div className="booth-box">C18</div>
                  <div className="booth-box">C22</div>
                  <div className="booth-box">C30</div>
                  <div className="booth-box">C41</div>
                  <div className="booth-box">C55</div>
                  <div className="booth-box">C63</div>
                </div>
                </div>
              )}
   
              {selected === 'D' && (
                <div className="details-body">
                  <img src={img7} alt="" className="details-icon" />
                  <p className="details-name">Hall D - Digital Health</p>
                  <p className="details-label">Available Booths:</p>
                  <div className="booths-grid">
                  <div className="booth-box">D02</div>
                  <div className="booth-box">D09</div>
                  <div className="booth-box">D17</div>
                  <div className="booth-box">D25</div>
                  <div className="booth-box">D31</div>
                  <div className="booth-box">D44</div>
                  <div className="booth-box">D58</div>
                  <div className="booth-box">D66</div>
                </div>
                </div>
              )}
   
            </div>
          )}
   
        </div>
      </section>
    );
  };
   
 
export default Sec8;
import { useState } from 'react';
import './sec9.css';

const Sec9 = () => {
    const [showModel, setShowModel] = useState(false);

    return (
      <div className="booth-preview-section">
  

        <div className="booth-preview-header">
          <div>
            <h2 className="booth-preview-title">3D Booth Preview</h2>
            <p className="booth-preview-sub">Drag to rotate • Scroll to zoom</p>
          </div>
          <button
            className="booth-preview-btn"
            onClick={() => setShowModel(true)}
          >
            Show 3D Model
          </button>
        </div>
  

        <div className="booth-preview-viewer">
          {showModel ? (
            <model-viewer
              src="health/public/3d_exhibition_stand_014.glb"
              alt="3D Booth"
              auto-rotate
              camera-controls
              style={{ width: '100%', height: '100%', background: 'transparent' }}
            />
          ) : (
            <div className="booth-preview-placeholder">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="18" rx="2"/>
                <path d="M8 3v18M16 3v18M2 9h20M2 15h20"/>
              </svg>
              <p className="booth-preview-placeholder-text">
                Click "Show 3D Model" to view booth layout
              </p>
            </div>
          )}
        </div>
  
      </div>
    );
  };

export default Sec9;
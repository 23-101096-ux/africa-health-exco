import { useState, useEffect } from 'react';
import { supabase } from "../supabase";
import './sec6.css';
const Sec6 = ( { activeFilter } ) => {
    const [exhibitors, setExhibitor] = useState([]);
 
  useEffect(() => {
    const getExhibitor = async () => {
      const res = await supabase.from("exhibitor").select(`
        id,
        exhibitor_name,
        category,
        location,
        booths (
          booth_number
        )
      `);
      console.log(res);
      setExhibitor(res.data || []);
    };
    getExhibitor();
  }, []);
 
  
  const getInitials = (name) => {
    if (!name) return '';
    return name.split(' ').slice(0, 2).map((w) => w[0]).join('').toUpperCase();
  };
 
  return (
    <div className="exhibitor-grid">
      {exhibitors.map((item) => {
 
      
        if (activeFilter && activeFilter !== 'ALL') {
          if (item.category?.toUpperCase() !== activeFilter.toUpperCase()) {
            return null;
          }
        }
 
        return (
          <div className="ex-card" key={item.id}>
 
          
            <span className="ex-card-initials">{getInitials(item.exhibitor_name)}</span>
 
           
            <div className="ex-card-top">
              <span className="ex-card-badge">{item.category}</span>
            </div>
 
         
            <div className="ex-card-body">
              <h3 className="ex-card-name">{item.exhibitor_name}</h3>
              <p className="ex-card-location">{item.location}</p>
            </div>
 
         
            <div className="ex-card-footer">
              <a href="/#" className="ex-card-explore">
                EXPLORE
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 10L10 2M10 2H4.5M10 2V7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <span className="ex-card-booth">{item.booths?.booth_number}</span>
            </div>
 
          </div>
        );
      })}
    </div>
  );
};
 
export default Sec6;

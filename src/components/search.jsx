import React from 'react';
import './search.css';

const Search = () => {
    return ( <>
<div className="search-bar-section">
 

  <div className="search-input-wrap">
    <input
      type="text"
      className="search-input"
      placeholder="SEARCH ARCHIVE..."
    />
  </div>
 

  <div className="search-filters">
    <button className="filter-btn active">ALL</button>
    <button className="filter-btn">PHARMA</button>
    <button className="filter-btn">DEVICES</button>
    <button className="filter-btn">RADIOLOGY</button>
    <button className="filter-btn">DIGITAL</button>
  </div>
 
</div>
    </> );
}
 
export default Search;
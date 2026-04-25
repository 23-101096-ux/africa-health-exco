import React from 'react';
import './search.css';

const Search = () => {
    return ( <>
<div class="search-bar-section">
 

  <div class="search-input-wrap">
    <input
      type="text"
      class="search-input"
      placeholder="SEARCH ARCHIVE..."
    />
  </div>
 

  <div class="search-filters">
    <button class="filter-btn active">ALL</button>
    <button class="filter-btn">PHARMA</button>
    <button class="filter-btn">DEVICES</button>
    <button class="filter-btn">RADIOLOGY</button>
    <button class="filter-btn">DIGITAL</button>
  </div>
 
</div>
    </> );
}
 
export default Search;
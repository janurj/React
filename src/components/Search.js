// src/components/Search.js
import React, { useState } from 'react';
import './Search.css';

function Search({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    
    <div className="search">
      <input
        type="text"
        placeholder="Search products/services..."
        value={query}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default Search;

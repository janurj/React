// src/components/List.js
import React, { useState } from 'react';
import './List.css';
import Search from './Search';

const initialItems = [
  { name: 'Product 1', description: 'Description 1', image: 'image1.jpg' },
  { name: 'Product 2', description: 'Description 2', image: 'image2.jpg' },
  { name: 'Product 3', description: 'Description 3', image: 'image3.jpg' },
];

function List() {
  const [items] = useState(initialItems);
  const [filteredItems, setFilteredItems] = useState(initialItems);

  const handleSearch = (query) => {
    if (query === '') {
      setFilteredItems(items);
    } else {
      setFilteredItems(
        items.filter((item) =>
          item.name.toLowerCase().includes(query.toLowerCase())
        )
      );
    }
  };

  return (
    <div className="list">
      <h2>Our Products/Services</h2>
      <Search onSearch={handleSearch} />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;

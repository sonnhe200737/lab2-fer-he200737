import React from 'react';

export default function SearchBar({ searchTerm, setSearchName }) {
  return (
    <div style={{ margin: '1rem 0' }}>
      <input
        type="text"
        placeholder="Tìm kiếm phim theo tên..."
        value={searchTerm}
        onChange={(e) => setSearchName(e.target.value)}
        style={{ width: '100%', padding: '0.5rem', fontSize: '1rem', boxSizing: 'border-box' }}
      />
    </div>
  );
}
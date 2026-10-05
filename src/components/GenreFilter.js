import React from 'react';

export default function GenreFilter({ genres, selectedGenre, setSelectedGenre }) {
  return (
    <div style={{ margin: '1rem 0', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
      <button 
        onClick={() => setSelectedGenre('All')}
        style={{ fontWeight: selectedGenre === 'All' ? 'bold' : 'normal', padding: '0.4rem 0.8rem' }}
      >
        Tất cả
      </button>
      {genres.map((genre) => (
        <button
          key={genre}
          onClick={() => setSelectedGenre(genre)}
          style={{ fontWeight: selectedGenre === genre ? 'bold' : 'normal', padding: '0.4rem 0.8rem' }}
        >
          {genre}
        </button>
      ))}
    </div>
  );
}
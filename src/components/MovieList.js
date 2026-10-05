import React from 'react';

export default function MovieList({ movies, onToggleFavorite, onSelectMovie }) {
  if (movies.length === 0) {
    return <p>Không tìm thấy bộ phim nào phù hợp.</p>;
  }

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
      {movies.map((movie) => (
        <div key={movie.id} style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '4px' }}>
          <h3 
            onClick={() => onSelectMovie(movie)} 
            style={{ cursor: 'pointer', margin: '0 0 0.5rem 0' }}
          >
            {movie.title} ({movie.year})
          </h3>
          <p style={{ margin: '0.2rem 0' }}>Thể loại: {movie.genre}</p>
          <p style={{ margin: '0.2rem 0' }}>Đạo diễn: {movie.director}</p>
          <p style={{ margin: '0.2rem 0' }}>Đánh giá: {movie.rating}</p>
          <button 
            onClick={() => onToggleFavorite(movie.id)}
            style={{ marginTop: '0.5rem', padding: '0.3rem 0.6rem', cursor: 'pointer' }}
          >
            {movie.favorite ? 'Đã thích' : 'Thích'}
          </button>
        </div>
      ))}
    </div>
  );
}
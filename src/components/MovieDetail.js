import React from 'react';

export default function MovieDetail({ movie, onClose }) {
  if (!movie) return null;

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
      backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center'
    }}>
      <div style={{ background: '#fff', padding: '2rem', borderRadius: '8px', width: '400px', color: '#000' }}>
        <h2>{movie.title} ({movie.year})</h2>
        <p><strong>Thể loại:</strong> {movie.genre}</p>
        <p><strong>Đạo diễn:</strong> {movie.director}</p>
        <p><strong>Thời lượng:</strong> {movie.duration} phút</p>
        <p><strong>Đánh giá:</strong> ⭐ {movie.rating}</p>
        <p><strong>Mô tả:</strong> {movie.description}</p>
        <button onClick={onClose} style={{ marginTop: '1rem', padding: '0.5rem 1rem', cursor: 'pointer' }}>Đóng</button>
      </div>
    </div>
  );
}
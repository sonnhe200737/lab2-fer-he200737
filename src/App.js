import React, { useState } from 'react';
import { movies as initialMovies } from './datas/movies';
import { useLocalStorage } from './hooks/useLocalStorage';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';
import './App.css';

function AppContent() {
  const [movies, setMovies] = useLocalStorage('movies_data', initialMovies);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);

  const handleToggleFavorite = (id) => {
    setMovies(movies.map(m => m.id === id ? { ...m, favorite: !m.favorite } : m));
  };

  const filteredMovies = movies.filter(movie => {
    const matchesSearch = movie.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFavorite = !showFavoritesOnly || movie.favorite;
    return matchesSearch && matchesFavorite;
  });

  const totalMovies = movies.length;
  const favoriteCount = movies.filter(m => m.favorite).length;
  const displayedCount = filteredMovies.length;

  return (
    <div style={{ padding: '2rem', maxWidth: '900px', margin: '0 auto' }}>
      <Header />
      
      <div style={{ 
        display: 'flex', gap: '1.5rem', padding: '0.8rem 1rem', 
        backgroundColor: 'rgba(0,0,0,0.05)', borderRadius: '6px', marginBottom: '1rem', fontSize: '0.95rem' 
      }}>
        <span>Tổng : <strong>{totalMovies}</strong></span>
        <span>Yêu thích: <strong>{favoriteCount}</strong></span>
        <span>Đang hiển thị: <strong>{displayedCount}</strong></span>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <div style={{ flex: 1, minWidth: '250px' }}>
          <SearchBar searchTerm={searchTerm} setSearchName={setSearchTerm} />
        </div>
        <button 
          onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
          style={{ padding: '0.5rem 1rem', cursor: 'pointer', height: 'fit-content' }}
        >
          {showFavoritesOnly ? 'Hiển thị tất cả' : 'Xem yêu thích'}
        </button>
      </div>

      <MovieList 
        movies={filteredMovies} 
        onToggleFavorite={handleToggleFavorite} 
        onSelectMovie={setSelectedMovie} 
      />

      <MovieDetail movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
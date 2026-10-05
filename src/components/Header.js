import React from 'react';
import { useTheme } from '../context/ThemeContext';

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="header" style={{ padding: '1rem 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <h1>Movie Manager</h1>
      <button onClick={toggleTheme} style={{ padding: '0.5rem 1rem', cursor: 'pointer' }}>
        Chế độ: {theme === 'light' ? 'Sáng' : 'Tối'}
      </button>
    </header>
  );
}
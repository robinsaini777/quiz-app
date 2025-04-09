import React from 'react';
import '../styles/Header.css';

const Header = ({ theme, toggleTheme }) => {
  return (
    <header className="header">
      <h1 className="logo">
        <span role="img" aria-label="fire">🔥</span> GK Quiz
      </h1>
      <button onClick={toggleTheme} className="toggle-theme-btn">
        {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
      </button>
    </header>
  );
};

export default Header;

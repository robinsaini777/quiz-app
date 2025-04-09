import React from 'react';
import './Header.css';

const Header = ({ theme, toggleTheme }) => {
  return (
    <header className="header">
      <h1 className="logo">
        <span role="img" aria-label="fire">🔥</span> React Quiz App
      </h1>
      <button onClick={toggleTheme} className="toggle-theme-btn">
        {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
      </button>
    </header>
  );
};

export default Header;

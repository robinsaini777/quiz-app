import React, { useContext } from 'react';
import { ThemeContext } from '../themeContext';
import './ToggleTheme.css';

const ToggleTheme = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <button className="toggle-btn" onClick={toggleTheme}>
      {darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
    </button>
  );
};

export default ToggleTheme;

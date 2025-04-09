// src/App.js
import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Question from './components/Question';
import Result from './components/Result';
import { ThemeProvider, useTheme } from './themeContext';

const AppContent = () => {
  const [quizEnd, setQuizEnd] = useState(false);
  const [scoreData, setScoreData] = useState(null);

  const { theme, toggleTheme } = useTheme(); // ✅ Access context

  const handleRestart = () => {
    setQuizEnd(false);
    setScoreData(null);
  };

  return (
    <div className={`app ${theme}-mode`}>
      <Header theme={theme} toggleTheme={toggleTheme} /> {/* ✅ Pass props */}
      {!quizEnd ? (
        <Question setQuizEnd={setQuizEnd} setScoreData={setScoreData} />
      ) : (
        <Result scoreData={scoreData} onRestart={handleRestart} />
      )}
    </div>
  );
};

const App = () => (
  <ThemeProvider>
    <AppContent />
  </ThemeProvider>
);

export default App;

import React from 'react';
import '../styles/Timer.css';

const Timer = ({ timeLeft }) => {
  return (
    <div className="timer">
      ⏱️ {timeLeft}s
    </div>
  );
};

export default Timer;

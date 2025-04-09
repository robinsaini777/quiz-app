import React from 'react';
import './Result.css';

const Result = ({ scoreData, onRestart }) => {
  if (!scoreData) return null;

  const { score, results } = scoreData;

  return (
    <div className="result-container">
      <h2 className="result-title">Quiz Completed 🎉</h2>
      <p className="result-score">You scored {score} out of {results.length}</p>

      <div className="result-list">
        {results.map((result, index) => {
          if (!result) return null; // <-- Prevent crashing if result is undefined

          return (
            <div
              key={index}
              className={`result-item ${result.isCorrect ? 'correct' : 'incorrect'}`}
            >
              <h4>Q{index + 1}: {result.question}</h4>
              <p><strong>Your Answer:</strong> {result.selected}</p>
              <p><strong>Correct Answer:</strong> {result.correct}</p>
              <span className="icon">
                {result.isCorrect ? '✅' : '❌'}
              </span>
            </div>
          );
        })}
      </div>

      <button className="restart-btn" onClick={onRestart}>🔁 Restart Quiz</button>
    </div>
  );
};

export default Result;

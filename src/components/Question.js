import React, { useEffect, useState, useCallback } from 'react';
import '../styles/Question.css';
import questions from '../data/questions';
import Timer from './Timer';

const Question = ({ setQuizEnd, setScoreData }) => {
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [results, setResults] = useState([]);
  const [timeLeft, setTimeLeft] = useState(30);

  const currentQuestion = questions[currentQ];

  // ✅ Callback to go to next question or end quiz
  const handleNext = useCallback(() => {
    if (currentQ + 1 < questions.length) {
      setCurrentQ(prev => prev + 1);
      setSelected(null);
      setTimeLeft(30);
    } else {
      setScoreData({ score, results });
      setQuizEnd(true);
    }
  }, [currentQ, results, score, setQuizEnd, setScoreData]); 


  useEffect(() => {
    if (timeLeft === 0) {
      handleNext();
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, handleNext]); 

  // ✅ Handle selecting an answer
  const handleOptionClick = (option) => {
    setSelected(option);
    const isCorrect = option === currentQuestion.answer;

    if (isCorrect && selected !== currentQuestion.answer) {
      setScore(prev => prev + 1);
    }

    const resultObj = {
      question: currentQuestion.question,
      selected: option,
      correct: currentQuestion.answer,
      isCorrect
    };

    const updatedResults = [...results];
    updatedResults[currentQ] = resultObj;
    setResults(updatedResults);
  };

  return (
    <div className="question-container">
      <div className="question-header">
        <span className="question-count">
          Question {currentQ + 1} of {questions.length}
        </span>
        <Timer timeLeft={timeLeft} />
      </div>

      <h2 className="question-text">Q{currentQ + 1}: {currentQuestion.question}</h2>

      <div className="options">
        {currentQuestion.options.map((option, i) => (
          <button
            key={i}
            className={`option-btn ${
              selected === option
                ? option === currentQuestion.answer
                  ? 'correct'
                  : 'wrong'
                : ''
            }`}
            onClick={() => handleOptionClick(option)}
            disabled={!!selected}
          >
            {option}
          </button>
        ))}
      </div>

      <div className="question-footer">
        <button onClick={handleNext} className="next-btn">
          {currentQ + 1 === questions.length ? 'Finish' : 'Next'}
        </button>
      </div>
    </div>
  );
};

export default Question;

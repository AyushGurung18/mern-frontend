import React, { useState, useEffect } from 'react';
import Question from './question';

const Quiz = ({ questions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(null));
  const [score, setScore] = useState(null);
  const [timer, setTimer] = useState(300); // Set timer in seconds (300 seconds = 5 minutes)

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer(prevTimer => prevTimer - 1);
    }, 1000);

    if (timer === 0) {
      clearInterval(countdown);
      window.location.reload(); // Reload the page when timer reaches 0
    }

    return () => clearInterval(countdown); // Clean up interval on component unmount
  }, [timer]);

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      calculateScore();
    }
  };

  const handleSelectOption = (optionIndex) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentQuestionIndex] = optionIndex;
    setUserAnswers(updatedAnswers);
  };

  const calculateScore = () => {
    let correctAnswers = 0;
    questions.forEach((question, index) => {
      if (userAnswers[index] === question.correctOption) {
        correctAnswers++;
      }
    });
    setScore(correctAnswers);
  };

  return (
    <div>
      <div style={{textAlign:'center'}}>
        Time Remaining: <b>{Math.floor(timer / 60).toString().padStart(2, '0')}:
        {(timer % 60).toString().padStart(2, '0')}</b>
      </div>
      {score === null ? (
        <Question
          question={questions[currentQuestionIndex].question}
          options={questions[currentQuestionIndex].options}
          selectedOption={userAnswers[currentQuestionIndex]}
          onSelect={handleSelectOption}
        />
      ) : (
        <div>
          <h2>Quiz Completed!</h2>
          <p>Your score: {score} out of {questions.length}</p>
        </div>
      )}
      <button onClick={handleNextQuestion} disabled={score !== null}>
        Next Question
      </button>
    </div>
  );
};

export default Quiz;

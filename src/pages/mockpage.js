import React from 'react';
import Quiz from '../component/quiz';
import '../styles/mockpage.css';

const MockPage = () => {
    const questions = [
        {
          question: 'What is the capital of Japan?',
          options: ['Beijing', 'Seoul', 'Tokyo', 'Bangkok'],
          correctOption: 2
        },
        {
          question: 'Which planet is known as the Red Planet?',
          options: ['Mars', 'Venus', 'Jupiter', 'Saturn'],
          correctOption: 0
        },
        {
          question: 'What is the largest mammal in the world?',
          options: ['Elephant', 'Blue Whale', 'Giraffe', 'Hippopotamus'],
          correctOption: 1
        },
        {
          question: 'Who wrote the play "Romeo and Juliet"?',
          options: ['William Shakespeare', 'Jane Austen', 'Charles Dickens', 'Leo Tolstoy'],
          correctOption: 0
        },
        {
          question: 'What is the chemical symbol for gold?',
          options: ['Au', 'Ag', 'Fe', 'Cu'],
          correctOption: 0
        },
        {
          question: 'Which country is known as the Land of the Rising Sun?',
          options: ['China', 'Japan', 'South Korea', 'Thailand'],
          correctOption: 1
        },
        {
          question: 'What is the largest organ in the human body?',
          options: ['Heart', 'Liver', 'Skin', 'Lungs'],
          correctOption: 2
        },
        {
          question: 'Who painted the Mona Lisa?',
          options: ['Vincent van Gogh', 'Pablo Picasso', 'Leonardo da Vinci', 'Claude Monet'],
          correctOption: 2
        },
        {
          question: 'Which gas makes up the majority of Earth\'s atmosphere?',
          options: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Helium'],
          correctOption: 2
        },
        {
          question: 'What is the capital of Australia?',
          options: ['Sydney', 'Canberra', 'Melbourne', 'Brisbane'],
          correctOption: 1
        }
      ];
      

  return (
    <div>
    <div className='quiz-page'>
    <Quiz questions={questions} />
      </div>
    </div>
  );
};

export default MockPage;

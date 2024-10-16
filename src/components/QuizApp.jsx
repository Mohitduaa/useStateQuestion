import React, { useState } from 'react';

const QuizApp = () => {
  const questions = [
    {
      question: 'What is the capital of France?',
      options: ['Paris', 'London', 'Berlin', 'Madrid'],
      correctAnswer: 'Paris'
    },
    {
      question: 'Which is the largest planet in our solar system?',
      options: ['Earth', 'Jupiter', 'Saturn', 'Mars'],
      correctAnswer: 'Jupiter'
    },
    {
      question: 'What year did World War II end?',
      options: ['1945', '1939', '1918', '1965'],
      correctAnswer: '1945'
    }
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [isQuizFinished, setIsQuizFinished] = useState(false);

  const handleAnswerSelection = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === questions[currentQuestionIndex].correctAnswer) {
      setCorrectAnswersCount(correctAnswersCount + 1);
    }

    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
      setSelectedAnswer(''); 
    } else {
      setIsQuizFinished(true); 
    }
  };

  return (
    <div className="flex flex-col items-center mt-4">
      {!isQuizFinished ? (
        <div className="w-full max-w-md p-4 border rounded-lg shadow-lg">
          
          <h2 className="text-lg font-bold text-gray-800">
            {questions[currentQuestionIndex].question}
          </h2>

          <div className="mt-4">
            {questions[currentQuestionIndex].options.map((option, index) => (
              <div key={index} className="mb-2">
                <label>
                  <input
                    type="radio"
                    name="answer"
                    value={option}
                    checked={selectedAnswer === option}
                    onChange={() => handleAnswerSelection(option)}
                    className="mr-2"
                  />
                  {option}
                </label>
              </div>
            ))}
          </div>

          <button
            onClick={handleNextQuestion}
            disabled={!selectedAnswer}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors mt-4"
          >
            Next
          </button>
        </div>
      ) : (
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">
            Quiz Finished!
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            You answered {correctAnswersCount} out of {questions.length} correctly.
          </p>
        </div>
      )}
    </div>
  );
};

export default QuizApp;

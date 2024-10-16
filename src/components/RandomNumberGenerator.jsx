import React, { useState } from 'react';

const RandomNumberGenerator = () => {
  const [randomNumber, setRandomNumber] = useState(null);

  const generateRandomNumber = () => {
    const number = Math.floor(Math.random() * 100) + 1; 
    setRandomNumber(number); 
  };

  return (
    <div className="flex flex-col items-center mt-4">
      <button
        className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors"
        onClick={generateRandomNumber}
      >
        Generate Random Number
      </button>

      {randomNumber !== null && (
        <p className="mt-4 text-xl font-bold text-gray-700">
          Random Number: {randomNumber}
        </p>
      )}
    </div>
  );
};

export default RandomNumberGenerator;

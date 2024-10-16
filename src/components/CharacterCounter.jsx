import React, { useState } from 'react';

const CharacterCounter = () => {
  const [input, setInput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value); 
  };

  return (
    <div className="flex flex-col items-center mt-4">
      <textarea
        className="border p-2 w-64 h-32 text-gray-700 focus:outline-none focus:border-blue-500 rounded"
        placeholder="Type your message here..."
        value={input}
        onChange={handleInputChange}
      />

      <p className="mt-2 text-gray-600">
        Character count: {input.length}
      </p>
    </div>
  );
};

export default CharacterCounter;

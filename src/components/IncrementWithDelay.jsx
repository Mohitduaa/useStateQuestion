import React, { useState } from 'react';

const IncrementWithDelay = () => {
  const [count, setCount] = useState(0);

  const incrementAfterDelay = () => {
    setTimeout(() => {
      setCount(prevCount => prevCount + 1);
    }, 2000); 
  };

  return (
    <div className="flex flex-col items-center mt-4">
      <button
        className="bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-700 transition-colors"
        onClick={incrementAfterDelay}
      >
        Increment After 2 Seconds
      </button>

      <p className="mt-4 text-2xl font-bold text-gray-700">
        Count: {count}
      </p>
    </div>
  );
};

export default IncrementWithDelay;

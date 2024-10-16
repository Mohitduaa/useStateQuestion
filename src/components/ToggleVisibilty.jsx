import React, { useState } from 'react';

const ToggleVisibility = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleParagraph = () => {
    setIsVisible(!isVisible); 
  };

  return (
    <div className="flex flex-col items-center mt-4">
      <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors" onClick={toggleParagraph}>
        {isVisible ? 'Hide Text' : 'Show Text'}
      </button>
      {isVisible && (
        <p className="mt-4 text-gray-700">
          This is the paragraph that gets toggled on and off.
        </p>
      )}
    </div>
  );
};

export default ToggleVisibility;

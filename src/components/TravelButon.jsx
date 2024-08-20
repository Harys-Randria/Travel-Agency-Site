import React from 'react';

const TravelButton = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-pearl text-blue-second font-semibold rounded-3xl shadow-md
                 hover:bg-Off-white hover:shadow-lg transition duration-300 ease-in-out 
                 transform hover:scale-105 focus:outline-none focus:ring-2
                  focus:ring-blue-500 focus:ring-offset-2
                  h-[42px] w-[144px]"
    >
      {text}
    </button>
  );
};

export default TravelButton;

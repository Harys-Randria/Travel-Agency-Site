import React from 'react';

const HighlightsSection = ({ highlights }) => {
  return (
    <div className="my-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Highlights</h2>
      <ul className="list-disc pl-5 text-gray-700 text-lg">
        {highlights.map((highlight, index) => (
          <li key={index} className="mb-2">{highlight}</li>
        ))}
      </ul>
    </div>
  );
};

export default HighlightsSection;
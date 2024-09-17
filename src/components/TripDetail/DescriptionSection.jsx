import React from 'react';

const DescriptionSection = ({ description }) => {
  return (
    <div className="my-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Description</h2>
      <p className="text-gray-700 text-lg">{description}</p>
    </div>
  );
};

export default DescriptionSection;
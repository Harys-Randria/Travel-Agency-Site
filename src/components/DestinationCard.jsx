import React from 'react';

const DestinationCard = ({ image, title, description, link }) => {
  return (
    <div className=" rounded overflow-hidden shadow-lg">
    <img className="w-full h-[250px]" src={image} alt={title} />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{title}</div>
      <p className="text-gray-700 text-base">
        {description}
      </p>
    </div>
    <div className="px-6 pt-4 pb-2">
      <a href={link} className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
        Read More
      </a>
    </div>
  </div>
  );
};

export default DestinationCard;

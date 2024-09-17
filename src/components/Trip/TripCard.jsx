import React from 'react';
import { useNavigate } from 'react-router-dom';

const TripCard = ({ image, title, description, price, duration, id }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/destination-details/${id}`);
  };

  return (
    <div
      className="w-full max-w-4xl rounded-lg overflow-hidden shadow-lg bg-white flex flex-row transition transform hover:scale-105 hover:shadow-2xl duration-300 cursor-pointer"
      onClick={handleCardClick}
    >
      <img className="w-1/3 h-auto object-cover" src={image} alt={title} />
      <div className="p-6 flex flex-col justify-between w-2/3">
        <div>
          <h2 className="font-bold text-2xl mb-2 text-gray-800">{title}</h2>
          <p className="text-gray-700 text-base mb-4">{description}</p>
        </div>
        <div className="flex justify-between items-center mt-4">
          <span className="text-gray-900 font-semibold text-lg">Prix: {price} €</span>
          <span className="text-gray-600 text-sm">Durée: {duration} jours</span>
        </div>
      </div>
    </div>
  );
};

export default TripCard;

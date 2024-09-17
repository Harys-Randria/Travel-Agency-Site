import React from 'react';

const BookingSection = ({ price, duration }) => {
  return (
    <div className="my-8 p-6 bg-gray-100 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <span className="text-2xl font-semibold text-gray-800">Prix: €{price}</span>
        <span className="text-lg text-gray-600">Durée: {duration} jours</span>
      </div>
      <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300">
        Réserver Maintenant
      </button>
    </div>
  );
};

export default BookingSection;
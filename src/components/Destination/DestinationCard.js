import React from 'react';

const DestinationCard = ({ name, description, imageUrl, activities, bestTime, price, onBookNow }) => {
  return (
    <div className="bg-tropical-100 min-h-screen">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Image de la destination */}
        <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
          <img className="w-full h-full object-cover" src={imageUrl} alt={` ${name}`}/>
        </div>
        
        {/* Informations sur la destination */}
        <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-3xl font-extrabold text-tropical-500 sm:text-4xl">{name}</h1>
          <p className="mt-4 text-gray-700">{description}</p>

          {/* Activités */}
          <h2 className="mt-8 text-xl font-semibold text-tropical-600">Activités recommandées</h2>
          <ul className="list-disc ml-5 mt-4 space-y-2 text-gray-600">
            {activities.map((activity, index) => (
              <li key={index}>{activity}</li>
            ))}
          </ul>

          {/* Informations supplémentaires */}
          <div className="mt-8 flex flex-col sm:flex-row sm:justify-between">
            <div>
              <h3 className="text-lg font-semibold text-tropical-600">Meilleure période à visiter</h3>
              <p className="text-gray-700 mt-2">{bestTime}</p>
            </div>
            <div className="mt-6 sm:mt-0">
              <h3 className="text-lg font-semibold text-tropical-600">Prix à partir de</h3>
              <p className="text-gray-700 mt-2">{price} €</p>
            </div>
          </div>

          {/* Bouton de réservation */}
          <div className="mt-8 text-center">
            <button
              className="bg-tropical-500 text-white px-6 py-3 rounded-md text-lg font-semibold shadow-lg hover:bg-tropical-600 transition duration-300"
              onClick={onBookNow}
            >
              Réserver maintenant
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;

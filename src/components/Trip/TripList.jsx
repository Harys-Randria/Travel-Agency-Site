import React, { useState } from 'react';
import listdata from './TripData';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';

const TripList = () => {
  const [priceRange, setPriceRange] = useState([0, 3000]);
  const [durationRange, setDurationRange] = useState([0, 20]);

  const resetFilters = () => {
    setPriceRange([0, 3000]);
    setDurationRange([0, 20]);
  };

  const filteredOffer = listdata.filter((trip) => {
    const priceCondition = trip.price >= priceRange[0] && trip.price <= priceRange[1];
    const durationCondition = trip.duration >= durationRange[0] && trip.duration <= durationRange[1];
    return priceCondition && durationCondition;
  });

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Section des filtres */}
        <div className="col-span-1 bg-white shadow-lg rounded-lg p-6 sticky top-20">
          {/* Filtre de prix */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-4">Filtrer par prix</h2>
            <div className="flex justify-between mb-2">
              <span>€ {priceRange[0]}</span>
              <span>€ {priceRange[1]}</span>
            </div>
            <RangeSlider
              min={0}
              max={3000}
              step={50}
              value={priceRange}
              onInput={setPriceRange}
              className="w-full"
            />
          </div>

          {/* Filtre de durée */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-4">Filtrer par durée</h2>
            <div className="flex justify-between items-center mb-2">
              <span>{durationRange[0]} jours</span>
              <span>{durationRange[1]} jours</span>
            </div>
            <RangeSlider
              min={0}
              max={20}
              step={1}
              value={durationRange}
              onInput={setDurationRange}
              className="w-full"
            />
          </div>

          {/* Bouton de réinitialisation */}
          <div>
            <button
              onClick={resetFilters}
              className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition"
            >
              Réinitialiser
            </button>
          </div>
        </div>

        {/* Section des trips (en grille) */}
        <div className="col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredOffer.map((trip, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition transform hover:scale-105"
            >
              <div className="relative">
                <img
                  src={trip.image}
                  alt={trip.title}
                  className="w-full h-56 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 hover:bg-opacity-50 transition duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{trip.title}</h3>
                <p className="text-gray-600 mb-4">{trip.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-900 font-semibold">€ {trip.price}</span>
                  <span className="text-sm text-gray-500">{trip.duration} jours</span>
                </div>
              </div>
              <div className="p-6 bg-gray-50">
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                  Voir Détails
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TripList;

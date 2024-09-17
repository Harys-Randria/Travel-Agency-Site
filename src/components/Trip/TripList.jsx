import React, { useState } from 'react';
import listdata from './TripData';
import TripCard from './TripCard';
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-200 p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Section des filtres */}
        <div className="col-span-1 p-6 bg-white shadow-lg rounded-lg md:sticky top-20">
          {/* Filtre de prix */}
          <div className="mb-6 flex flex-col gap-6 p-4 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Filtrer par prix</h2>
            <div className="flex flex-col items-center">
              <div className="flex justify-between w-full mb-2">
                <span className="text-gray-600">€ {priceRange[0]}</span>
                <span className="text-gray-600">€ {priceRange[1]}</span>
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
          </div>

          {/* Filtre de durée */}
          <div className="mb-6 p-4 bg-white shadow-md rounded-lg">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Filtrer par durée</h2>
            <div className="flex items-center space-x-4">
              <span className="text-gray-600">{durationRange[0]} jours</span>
              <RangeSlider
                min={0}
                max={20}
                step={1}
                value={durationRange}
                onInput={setDurationRange}
                className="w-full"
              />
              <span className="text-gray-600">{durationRange[1]} jours</span>
            </div>
          </div>

          {/* Bouton de réinitialisation */}
          <div>
            <button
              onClick={resetFilters}
              className="w-full py-3 px-4 rounded-lg text-white bg-red-500 hover:bg-red-600 transition duration-300"
            >
              Réinitialiser
            </button>
          </div>
        </div>

        {/* Section des éléments affichés */}
        <div className="col-span-3">
          <div className="flex flex-col gap-8">
            {filteredOffer.map((data, index) => (
              <TripCard
                key={index}
                title={data.title}
                image={data.image}
                description={data.description}
                price={data.price}
                duration={data.duration}
                id={data.id}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripList;

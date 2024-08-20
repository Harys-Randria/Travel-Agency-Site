import React from 'react';
import { RxArrowTopRight } from 'react-icons/rx';

const OfferCard = ({ image, destination, price, description }) => {
  return (
    <div className="backdrop-blur-sm bg-white/10 rounded-lg shadow-lg overflow-hidden w-80 h-[450px] text-white font-sans border border-white/20 hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        <img src={image} alt={destination} className="w-full h-52 object-cover rounded-t-lg" />
        <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 text-sm rounded-lg font-semibold">
          {price} €
        </div>
      </div>
      <div className="p-5 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold mb-2">{destination}</h3>
          <p className="text-sm text-gray-200 mb-4">{description}</p>
        </div>
        <a
          href='/'
          className="self-end mt-auto flex items-center text-blue-500 hover:text-blue-400 transition duration-300"
        >
          More Details
          <RxArrowTopRight className='text-2xl ml-2' />
        </a>
      </div>
    </div>
  );
};

export default OfferCard;

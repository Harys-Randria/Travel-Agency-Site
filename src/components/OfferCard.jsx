import React from 'react';
import { RxArrowTopRight } from 'react-icons/rx';

const OfferCard = ({ image, destination, price, description }) => {
  return (
    <div className="backdrop-blur-sm bg-white/10 rounded-lg shadow-md overflow-hidden w-full h-[450px] text-white font-Spinnaker border border-white/20">
      <div className="relative">
        <img src={image} alt={destination} className="w-full h-48 object-cover rounded-t-lg" />
        <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-2 text-sm rounded">
          {price} €
        </div>
      </div>
      <div className="p-4 flex flex-col justify-between h-[calc(100%-192px)]">
        <div>
          <h3 className="text-xl font-semibold">{destination}</h3>
          <p className="text-sm mt-2">{description}</p>
        </div>
        <a href='/' className="mt-4 flex justify-end items-center text-white px-4 py-2 rounded-md hover:scale-105 transition duration-300 group">
          More Details
          <RxArrowTopRight className='text-xl transform transition-transform duration-300 group-hover:rotate-45 ml-2'/>
        </a>
      </div>
    </div>
  );
};

export default OfferCard;

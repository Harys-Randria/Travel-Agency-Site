import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import TripList from '../components/Trip/TripList';

const TripPage = () => {
  return (
    <div className="w-screen min-h-screen font-Poppins text-white">

      {/* Section d'introduction avec Parallax */}
      <div className="relative w-full h-96 overflow-hidden">
        <Parallax speed={-20}>
          <img 
            src="https://cdn.pixabay.com/photo/2017/03/23/16/11/lizard-2168764_1280.jpg"
            alt="Introduction to Trips" 
            className="w-full h-full object-cover"
          />
        </Parallax>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Contenu d'introduction */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-4xl font-bold mb-4">Explore Our Unique Trips</h1>
          <p className="text-lg max-w-lg">
            Discover tailored trips that bring you closer to Madagascar’s hidden gems. Whether you're looking for adventure or relaxation, we have the perfect trip for you!
          </p>
        </div>
      </div>

      {/* Section liste des trips (sans fond d'image) */}
      <div className="bg-white text-black py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-4">
          <div className='text-center'>
              <h2 className="font-normal text-5xl font-Poppins text-gray-900 mb-6">Our Trips</h2>
          </div>
          <div>
              <TripList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripPage;

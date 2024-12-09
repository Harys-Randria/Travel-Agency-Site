import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const regions = {
  North: 'bg-blue-500',
  South: 'bg-green-500',
  East: 'bg-yellow-500',
  West: 'bg-red-500',
  Central: 'bg-purple-500',
};

const DestinationsPage = () => {
  const [destinations, setDestinations] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState('All');

  // Fetch data dynamically
  useEffect(() => {
    fetch('/destinations.json') // Replace with the actual path to your JSON file
      .then((response) => response.json())
      .then((data) => setDestinations(data))
      .catch((error) => console.error('Error fetching destinations:', error));
  }, []);

  // Filter destinations based on region
  const filteredDestinations =
    selectedRegion === 'All'
      ? destinations
      : destinations.filter((dest) => dest.region === selectedRegion);

  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section
        className="relative h-[60vh] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://cdn.pixabay.com/photo/2020/01/30/20/34/madagascar-4806491_960_720.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-400">
            Discover Madagascar’s Destinations
          </h1>
        </div>
      </section>

      {/* Region Filter Section */}
      <div className="py-8 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Explore by Region
        </h2>
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => setSelectedRegion('All')}
            className={`px-4 py-2 rounded-full font-semibold ${
              selectedRegion === 'All'
                ? 'bg-yellow-500 text-gray-900'
                : 'bg-gray-300 text-gray-700 hover:bg-yellow-400'
            } transition`}
          >
            All
          </button>
          {Object.keys(regions).map((region) => (
            <button
              key={region}
              onClick={() => setSelectedRegion(region)}
              className={`px-4 py-2 rounded-full font-semibold ${
                selectedRegion === region
                  ? regions[region]
                  : 'bg-gray-300 text-gray-700 hover:bg-opacity-80'
              } transition`}
            >
              {region}
            </button>
          ))}
        </div>
      </div>

      {/* Destinations Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 max-w-7xl mx-auto py-10">
        {filteredDestinations.map((dest, index) => (
          <motion.div
            key={dest.id}
            className="relative bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {/* Region Badge */}
            <span
              className={`absolute top-4 left-4 px-3 py-1 rounded-full text-white font-semibold ${
                regions[dest.region]
              }`}
            >
              {dest.region}
            </span>

            {/* Destination Image */}
            <div className="relative overflow-hidden">
              <img
                src={dest.image}
                alt={dest.name}
                className="w-full h-56 object-cover transition-transform duration-300 transform hover:scale-110"
              />
            </div>

            {/* Destination Info */}
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {dest.title}
              </h3>
              <p className="text-gray-600 mb-4">{dest.description}</p>
              <p className="text-yellow-500 font-semibold text-lg">
                {dest.price}
              </p>
              <a
                href={`/destination/${dest.id}`} // Dynamic link to detailed page
                className="mt-4 block w-full text-center px-4 py-2 bg-yellow-500 text-gray-900 font-semibold rounded-md hover:bg-yellow-600 transition-transform transform hover:scale-105"
              >
                Explore
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default DestinationsPage;

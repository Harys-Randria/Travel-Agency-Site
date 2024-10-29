import React from 'react';

const QuickSearch = () => {
  return (
    <section className="bg-gray-900 py-10 text-gray-100">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-6">Find Your Perfect Ride</h2>
        <p className="text-lg mb-8 text-gray-300">
          Select your preferences and start your journey across Madagascar.
        </p>

        {/* Search Form */}
        <form className="flex flex-col md:flex-row gap-4 justify-center items-center">
          {/* Pick-up Location */}
          <input 
            type="text" 
            placeholder="Pick-up Location" 
            className="w-full md:w-1/3 p-3 rounded-md bg-gray-800 text-gray-200 border border-gray-600 focus:border-yellow-500 focus:outline-none" 
          />

          {/* Pick-up Date */}
          <input 
            type="date" 
            placeholder="Pick-up Date" 
            className="w-full md:w-1/3 p-3 rounded-md bg-gray-800 text-gray-200 border border-gray-600 focus:border-yellow-500 focus:outline-none" 
          />

          {/* Vehicle Type */}
          <select 
            className="w-full md:w-1/3 p-3 rounded-md bg-gray-800 text-gray-200 border border-gray-600 focus:border-yellow-500 focus:outline-none"
          >
            <option>Type of Vehicle</option>
            <option>SUV</option>
            <option>4x4</option>
            <option>Mini-van</option>
            <option>Sedan</option>
          </select>

          {/* Search Button */}
          <button 
            type="submit" 
            className="w-full md:w-auto mt-4 md:mt-0 p-3 bg-yellow-500 text-gray-900 font-semibold rounded-md hover:bg-yellow-600 transition-transform duration-300 transform hover:scale-105"
          >
            Search
          </button>
        </form>
      </div>
    </section>
  );
};

export default QuickSearch;

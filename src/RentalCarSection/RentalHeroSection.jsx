import React from 'react';

const RentalHeroSection = () => {
  return (
    <section
      className="relative h-[80vh] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: "url('https://cdn.pixabay.com/photo/2024/05/20/11/39/tank-300-8774951_960_720.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-gray-100 px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Discover Madagascar on Your Own Wheels</h1>
        <p className="text-lg md:text-2xl mb-8">
          Choose from our wide range of vehicles and experience the freedom of exploring at your pace.
        </p>
        <a
          href="#car-catalog"
          className="inline-block bg-yellow-500 text-gray-900 font-semibold py-3 px-6 rounded-full text-lg hover:bg-yellow-600 transition-transform duration-300 transform hover:scale-105"
        >
          Explore Our Fleet
        </a>
      </div>
    </section>
  );
};

export default RentalHeroSection;

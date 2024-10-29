import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://cdn.pixabay.com/photo/2014/12/09/17/11/beach-562145_960_720.jpg')" }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-gray-100 px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Explore Madagascar’s Hidden Gems</h1>
        <p className="text-lg md:text-2xl mb-8">
          Your adventure awaits. Discover exclusive destinations and unforgettable experiences.
        </p>
        <a
          href="/destinations"
          className="bg-yellow-500 text-gray-900 font-semibold py-3 px-6 rounded-full text-lg hover:bg-yellow-600 transition-transform duration-300 transform hover:scale-105"
        >
          Start Your Journey
        </a>
      </div>
    </section>
  );
};

export default HeroSection;

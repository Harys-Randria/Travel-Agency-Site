// src/components/HeroSection.jsx
import React from 'react';

const HeroSection = ({ image, title }) => {
  return (
    <div className="relative h-96 w-full">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <h1 className="text-white text-4xl md:text-6xl font-bold">{title}</h1>
      </div>
    </div>
  );
};

export default HeroSection;

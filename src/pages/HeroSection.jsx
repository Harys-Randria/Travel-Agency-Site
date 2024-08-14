import React from 'react';
import Navbar from '../components/Navbar'; // Assurez-vous que le chemin est correct
import backgroundImage from '../assets/images/parc-isalo.webp';

const HeroSection = () => {
  return (
    <div className='relative w-full h-screen bg-cover bg-center' style={{ backgroundImage: `url(${backgroundImage})` }}>
      <Navbar />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className='absolute inset-0 flex flex-col items-center justify-center text-center'>
        <h1 className='text-white text-5xl font-bold mb-4'>Welcome to Madaweaver Travel</h1>
        <p className='text-white text-xl'>Discover the beauty of Madagascar with us</p>
      </div>
    </div>
  );
}

export default HeroSection;

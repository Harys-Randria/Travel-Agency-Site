import React from 'react';
import TravelButton from '../TravelButon';

const NavigationBar = () => {
  return (
    <nav className="bg-white shadow-md w-full font-Spinnaker">
      <div className="max-w-7xl mx-auto px-4 ">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <img src="https://www.expedia.fr/favicon.ico" alt="Expedia Logo" className="h-8 w-auto"/>
            <span className="text-xl font-semibold text-black ">MadaWeaver</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-6  z-50">
            <a href="/" className=' text-black hover:text-blue-second'>Home</a>
            <a href="/" className=' text-black hover:text-blue-second' >Destination</a>
            <a href="/" className=' text-black hover:text-blue-second'>About Us</a>
            <a href="/" className=' text-black hover:text-blue-second'>Our Tours</a>
            <a href="/" className=' text-black hover:text-blue-second'>Contact</a>
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-4  z-50">
            <TravelButton text={'Book Now'}/>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;

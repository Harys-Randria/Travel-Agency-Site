import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import TravelButton from '../TravelButon';

const NavigationBar = () => {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handelScroll = () => {
      if(window.scrollY > 50){
        setIsScrolled(true);
      }
      else{
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handelScroll);

    return () => {
      window.removeEventListener('scroll', handelScroll);
    };

  }, []);


  return (
    <nav className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
                    isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            {/* Vous pouvez utiliser une balise <Link> pour naviguer vers la page d'accueil en cliquant sur le logo */}
            {/* <Link to="/"> */}
            {/* <img src="https://www.expedia.fr/favicon.ico" alt="Expedia Logo" className="h-8 w-auto"/> */}
            {/* </Link> */}
            <span className={`hidden md:flex space-x-6 z-50 font-medium ${
                          isScrolled ? 'text-black' : 'text-white'}`}>MadaWeaver</span>
          </div>

          {/* Navigation Links */}
          <div className={`hidden md:flex space-x-6 z-50 font-medium ${
                          isScrolled ? 'text-black' : 'text-white'}`}>
            <Link to="/" className=" hover:text-blue-second">Home</Link>
            <Link to="/trip" className=" hover:text-blue-second">Trip</Link>
            <Link to="/about-us" className=" hover:text-blue-second">About Us</Link>
            <Link to="/our-tours" className=" hover:text-blue-second">Our Tours</Link>
            <Link to="/cars" className=" hover:text-blue-second">Cars</Link>
            <Link to="/contact" className=" hover:text-blue-second">Contact</Link>
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-4 z-50">
            <TravelButton text={'Book Now'} />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;

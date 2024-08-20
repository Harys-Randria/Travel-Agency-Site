import React, { useState, useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleNav = () => setNavOpen(!navOpen);

  const handleScroll = () => setIsScrolled(window.scrollY > 50);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-1/2 transform -translate-x-1/2 px-6 py-3 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-lg shadow-lg rounded-full h-14 w-[90%] justify-center'
          : 'bg-transparent h-16 w-full justify-between'
      }`}
    >
      <span className={`font-bold text-2xl transition duration-300 ${isScrolled ? 'hidden' : 'text-white'}`}>
        Madaweaver Travel
      </span>

      <div
        className={`hidden md:flex items-center space-x-6 transition-colors duration-300 ${
          isScrolled ? 'text-blue-800' : 'text-white'
        }`}
      >
        <a href='/home' className='hover:text-gray-500 transition duration-300'>
          Home
        </a>
        <a href='/destination' className='hover:text-gray-500 transition duration-300'>
          Destination
        </a>
        <a href='/about' className='hover:text-gray-500 transition duration-300'>
          About Us
        </a>
        <a href='/tours' className='hover:text-gray-500 transition duration-300'>
          Our Tours
        </a>
        <a href='/contact' className='hover:text-gray-500 transition duration-300'>
          Contact
        </a>
      </div>

      <div className='md:hidden z-[100]' onClick={toggleNav}>
        {navOpen ? (
          <AiOutlineClose size={24} color={isScrolled ? '#1e40af' : '#fff'} />
        ) : (
          <HiOutlineMenuAlt4 size={24} color={isScrolled ? '#1e40af' : '#fff'} />
        )}
      </div>

      <div
        className={`fixed top-0 left-0 w-full h-full bg-blue-900 flex flex-col justify-center items-center transition-transform duration-300 ease-in-out ${
          navOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <span className='text-white text-3xl font-bold mb-6'>Madaweaver Travel</span>
        <a
          href='/home'
          className='text-white hover:text-gray-300 transition duration-300 text-2xl py-2'
          onClick={toggleNav}
        >
          Home
        </a>
        <a
          href='/destination'
          className='text-white hover:text-gray-300 transition duration-300 text-2xl py-2'
          onClick={toggleNav}
        >
          Destination
        </a>
        <a
          href='/about'
          className='text-white hover:text-gray-300 transition duration-300 text-2xl py-2'
          onClick={toggleNav}
        >
          About Us
        </a>
        <a
          href='/tours'
          className='text-white hover:text-gray-300 transition duration-300 text-2xl py-2'
          onClick={toggleNav}
        >
          Our Tours
        </a>
        <a
          href='/contact'
          className='text-white hover:text-gray-300 transition duration-300 text-2xl py-2'
          onClick={toggleNav}
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

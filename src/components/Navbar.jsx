import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  }

  return (
    <nav className='fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 z-50 transition-all duration-300 bg-transparent md:bg-transparent'>
      <span className='text-white text-2xl font-bold'>Madaweaver Travel</span>

      <div className='hidden md:flex items-center space-x-6'>
        <a href='/home' className='text-white hover:text-gray-300 transition duration-300'>Home</a>
        <a href='/destination' className='text-white hover:text-gray-300 transition duration-300'>Destination</a>
        <a href='/about' className='text-white hover:text-gray-300 transition duration-300'>About Us</a>
        <a href='/tours' className='text-white hover:text-gray-300 transition duration-300'>Our Tours</a>
        <a href='/contact' className='text-white hover:text-gray-300 transition duration-300'>Contact</a>
      </div>

      <div className='md:hidden hover:cursor-pointer z-[50]' onClick={handleNav}>
        {nav ? <AiOutlineClose size={24} color="white" /> : <HiOutlineMenuAlt4 size={24} color="white" />}
      </div>

      <div className={`fixed top-0 left-0 w-full h-full bg-blue-second flex flex-col justify-center items-center transition-transform duration-300 ease-in-out ${nav ? 'translate-x-0' : 'translate-x-full'}`}>
        <span className='text-white text-3xl font-bold mb-6'>Madaweaver Travel</span>
        <a href='/home' className='text-white hover:text-gray-300 transition duration-300 text-2xl py-2' onClick={handleNav}>Home</a>
        <a href='/destination' className='text-white hover:text-gray-300 transition duration-300 text-2xl py-2' onClick={handleNav}>Destination</a>
        <a href='/about' className='text-white hover:text-gray-300 transition duration-300 text-2xl py-2' onClick={handleNav}>About Us</a>
        <a href='/tours' className='text-white hover:text-gray-300 transition duration-300 text-2xl py-2' onClick={handleNav}>Our Tours</a>
        <a href='/contact' className='text-white hover:text-gray-300 transition duration-300 text-2xl py-2' onClick={handleNav}>Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;

import React from 'react';
import Navbar from './Navbar';

const Header = () => {
  return (
    <header className='bg-blue-principal text-white sticky top-0 z-[20] mx-auto flex items-center justify-between border-2 border-green-200 p-4'>
      <Navbar />
    </header>
  );
}

export default Header;

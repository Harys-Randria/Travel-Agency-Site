import React from 'react'
import Nav from './Nav'
import Logo from './Logo'

const Header = () => {
  return (
    <div>
      <header className='bg-blue-principal text-white sticky top-0 z-[20] mx-auto flex w-full items-center justify-between border-2 border-green-200 p-8'>
        <Logo />
        <Nav />
      </header>
    </div>
  )
}

export default Header

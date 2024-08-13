import React from 'react'

const NavLinks = () => {
    return (
        <>
            <a href='/home'> HOME </a>
            <a href='/destination'> DESTINATION </a>
            <a href='/about'> ABOUT US </a>
            <a href='/tours'> OUR TOURS </a>
            <a href='/contact'> CONTACT </a>
        </>
    );
}

const Nav = () => {
  return (
    <Nav className='w-1/3'>
        <div className='flex justify-between'>
            <NavLinks />
        </div>
    </Nav>
  )
}

export default Nav

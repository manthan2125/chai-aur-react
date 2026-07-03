import React from 'react'
import NavPart2 from './NavPart2'

const Navbar = () => {
  return (
    <>
      <nav className='px-10 py-5 bg-emerald-700 flex justify-between items-center'>
        <h2 className='text-2xl'>Sheriyans</h2>
        <NavPart2 />
      </nav>
    </>
    
  )
}

export default Navbar

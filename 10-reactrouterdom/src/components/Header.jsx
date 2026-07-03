import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

  return (
    <div className='py-7 px-10 bg-emerald-900 text-white flex items-center justify-between'>
      <h2 className='text-2xl'>ManthanKirti <input className='text-black' type="text" /></h2>
      <div className='flex gap-8 text-xl underline'>
        {/* Jab mne a tag se bnaya to ek page se dusre page jane m reload ho rha h  */}
        {/* <a className='text-xl underline' href="/">Home</a>
        <a className='text-xl underline' href="/about">About</a>
        <a className='text-xl underline' href="/contact">Contact</a>
        <a className='text-xl underline' href="/product">Product</a> */}

        {/* Jab mne a tag se bnaya to ek page se dusre page jane m reload nhi hoga  */}
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/product'>Product</Link>
      </div>
    </div>
  )
}

export default Header

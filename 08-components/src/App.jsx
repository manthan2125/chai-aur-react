import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <Footer />
    {/* But this nav or header is not reusable */}
      {/* <nav className='px-10 py-5 bg-emerald-700 flex justify-between items-center'>
        <h2 className='text-2xl'>Sheriyans</h2>
        <div className='flex gap-8 items-center'>
          <h4 className='text-xl'>About</h4>
          <h4 className='text-xl'>Contact Us</h4>
          <h4 className='text-xl'>Services</h4>
          <h4 className='text-xl'>Your Account</h4>
        </div>
      </nav> */}
    </>
  )
}

export default App

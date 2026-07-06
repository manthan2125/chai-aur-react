import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import {Route, Routes} from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Product from './pages/Product'
import NotFound from './pages/NotFound'
import Men from './pages/Men'
import Women from './pages/Women'
import Kids from './pages/Kids'
import Courses from './pages/Courses'
import CourseDetails from './pages/CourseDetails'

const App = () => {
  return (
    <div className='h-screen bg-black text-white'>
      <Navbar />
      <Routes>
        <Route path='/' element ={<Home />} />
        <Route path='/about' element ={<About />} />
        <Route path='/courses' element={<Courses />} />
        {/* Dynamic Routing   (id -> ki jagah kch bhi likh skte hain colon lgaana zruri hai)       */}
        <Route path='/courses/:id' element={<CourseDetails />}/>

        <Route path='/product' element ={<Product />} >
          <Route path='men' element ={<Men />} />
          <Route path='women' element ={<Women />} />
          <Route path='kids' element ={<Kids />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App

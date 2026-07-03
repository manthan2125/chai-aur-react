import React from 'react'
import Header from './components/Header'
import Section from './components/Section'
import Footer from './components/Footer'
import { useContext } from 'react'
import { DataContext } from './context/UserContext'

const App = () => {

  const data = useContext(DataContext)
  console.log(data);
  
  return (
    <div>
      <h1>This is app.jsx</h1>
      <Header />
      <Section />
      <Footer />
    </div>
  )
}

export default App

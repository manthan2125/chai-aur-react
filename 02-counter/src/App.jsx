import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  let [counter, setCounter] =  useState(0);

  const increment = () => {
    setCounter(counter+1);
    // console.log("Clicked", counter);
  }

  const decrement = () => {
    setCounter(counter-1);
    // console.log("Clicked", counter);
  }

  return (
    <>
      <h1>Chau aur React | Manthan</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick = {increment}>Increment : {counter}</button>
      <button onClick = {decrement}>Decrement : {counter}</button>
      <footer>Footer : {counter}</footer>
    </>
  )
}

export default App

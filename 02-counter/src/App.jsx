import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  let [counter, setCounter] =  useState(0);

  // const increment = () => {
  //   setCounter(counter+1);
  //   // console.log("Clicked", counter);
  // }

  // React imp Interview Ques -> 
  // setCounter ek fxn -> Jo ek callback accept krta hai.. -> jb callback ke through ata hai to complete hone ke baad dusra call hota hai... -> tab jake value update hoti hai...
  // What will b the value of counter if i press button 1 time? Ans : defalu = 0 -> After pressing it will be 1
  // const increment = () => {
  //   setCounter(counter+1);
  //   setCounter(counter+1);
  //   setCounter(counter+1);
  //   setCounter(counter+1);
  // }

  // What will b the value of counter if i press button 1 time? Ans : defalu = 0 -> After pressing it will be 4
  const increment = () => {
    setCounter(prevCounter => prevCounter + 1);
    setCounter(prevCounter => prevCounter + 1);
    setCounter(prevCounter => prevCounter + 1);
    setCounter(prevCounter => prevCounter + 1);
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

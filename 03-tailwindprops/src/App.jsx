import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/Card';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2 className='bg-slate-600 p-4 rounded-lg'>Tailwind Test</h2>
      <Card username="manthan" />
      <Card username="manthankirti" />
    </>
  )
}

export default App

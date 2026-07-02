import React from 'react'
import { useState } from 'react';

const App = () => {

  const [username, setUsername] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(`Submitted by ${username}`);
    setUsername('')
  }

  return (
    <div>
      <form onSubmit={(e) => {
        submitHandler(e);
      }}>
        <input 
        value={username}
        onChange = {(e) => {
          setUsername(e.target.value);
        }}
        className='px-4 py-3 m-5 text-xl rounded' 
        type="text" 
        placeholder='Enter your name' />
        <button className='px-4 py-3 m-5 text-xl font-semibold bg-emerald-600 text-white rounded'>Submit</button>
      </form>
    </div>
  )
}

export default App 

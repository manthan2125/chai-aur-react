import React from 'react'

const App = () => {

  const [username, setUsername] = useState("manthan")

  return (
    <div>
      <form onSubmit={}>
        <input 
        value={username}
        className='px-4 py-3 m-5 text-xl rounded' 
        type="text" 
        placeholder='Enter your name' />
        <button className='px-4 py-3 m-5 text-xl font-semibold bg-emerald-600 text-white rounded'>Submit</button>
      </form>
    </div>
  )
}

export default App

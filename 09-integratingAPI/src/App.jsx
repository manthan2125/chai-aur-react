import React, { useState } from 'react'
import axios from 'axios'

const App = () => {

  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await axios.get('https://picsum.photos/v2/list');
    const data = response.data;
    setData(data);
    // console.log(data[0].download_url);
    
  }

  return (
    <div className='p-5'>
      <button
        onClick={getData}
        className='bg-teal-700 text-white px-6  py-3 rounded text-2xl active:scale-90'>Get Data
      </button>

      <div className='p-5 mt-5 bg-gray-800' >
        {data.map(function (elem, idx) {
          return <div key = {idx} className='bg-gray-100 text-black flex justify-between items-center w-full px-5 py-5 rounded mb-3'>
            <img className='h-40' src={elem.download_url} alt="" />
            <h2>{elem.author}</h2>
          </div>
        })}
      </div>
    </div>
  )
}

export default App

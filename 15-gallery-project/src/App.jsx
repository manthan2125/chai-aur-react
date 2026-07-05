import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'

const App = () => {

  const [userData, setUserData] = useState([])
  const [index, setIndex] = useState(1)

  const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)
    setUserData(response.data)
  }

  useEffect(function(){
    getData();
  },[index])

  let printUserData = <h3 className='text-sm text-gray-300 font-semibold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Loading...</h3>

  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {

      return <div key={idx}>
        <a href={elem.url} target='_blank'>
          <div className='h-40 w-44 rounded-xl overflow-hidden'>
            <img className='h-full w-full object-cover' src={elem.download_url} alt="" />
          </div>
          <h2 className='text-lg font-bold'>{elem.author}</h2>
        </a>
      </div>
    })
  }


  return (
    <div className='bg-black h-screen text-white p-4 overflow-auto'>
      {/* <button
        onClick={getData}
        className='bg-gray-600 text-white px-5 py-2 mb-3 rounded active:scale-95'>Get Data
      </button> */}

      <div className='flex flex-wrap gap-6 p-4 h-[85%]'>
        {printUserData}
      </div>

      <div className='flex justify-center items-center gap-4 mt-5'>
        <button 
        style={{ opacity: index == 1 ? 0.5 : 1}}
        className='bg-amber-400 text-black rounded py-2 px-5 font-semibold text-sm cursor-pointer active:scale-95'
        onClick={() => {
          if(index > 1) {
            setIndex(index-1)
            setUserData([])
          }
        }}
        >
          Prev
        </button>
        <h4>Page {index}</h4>
        <button 
        className='bg-amber-400 text-black rounded py-2 px-5 font-semibold text-sm cursor-pointer active:scale-95'
        onClick={() => {
          setIndex(index+1)
          setUserData([])
        }}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default App

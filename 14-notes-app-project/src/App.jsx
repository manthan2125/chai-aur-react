import React from 'react'
import { useState } from 'react';

const App = () => {


  const [task, setTask] = useState([])
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('')

  const submitHandler = (e) => {
    e.preventDefault();

    const copyTask = [...task]

    copyTask.push({ title, details })
    setTask(copyTask)

    console.log("Form Submitted by - ", title, " - ", details);
    setTitle('')
    setDetails('')
  }

  const deleteNote = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx,1);
    setTask(copyTask);

  }


  return (
    <div className='h-screen lg:flex bg-black text-white'>
      <form
        onSubmit={(evt) => {
          submitHandler(evt)

        }}
        className='flex flex-col items-start gap-5 p-10 lg:w-1/2'>

        <h1 className='text-4xl font-bold'>Add Notes</h1>

        {/* Pehla Input For Heading  */}
        <input
          type="text"
          placeholder='Enter Notes Heading'
          className='px-5 py-2 border-2 rounded w-full bg-black outline-none font-medium'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
            // console.log(e.target.value);
          }}
        />

        {/* Dusra Input For Details  */}
        <textarea
          type="text"
          placeholder='Write Details'
          className='px-5 py-2 border-2 rounded h-32 w-full bg-black outline-none font-medium'
          value={details}
          onChange={(evt) => {
            setDetails(evt.target.value)
          }}
        />

        <button
          className='bg-white text-black w-full rounded font-medium cursor-pointer active:scale-95 p-2'
        >Add Note
        </button>
      </form>

      <div className='p-10 lg:w-1/2 lg:border-l-2'>
        <h1 className='text-4xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap items-start justify-start gap-5 mt-5 h-[90%] overflow-auto p-5 rounded'>
          {task.map(function (elem, idx) {

            return <div key={idx} className='flex flex-col justify-between items-start h-52 w-40 rounded-2xl  text-black pt-9 pb-4 px-6 bg-cover bg-[url("https://static.vecteezy.com/system/resources/thumbnails/010/793/873/small/a-lined-note-paper-covered-with-transparent-tape-on-a-yellow-background-with-a-white-checkered-pattern-free-png.png")]'>
              <div>
                <h3 className='text-lg font-bold leading-tight w-full'>{elem.title}</h3>
                <p className='text-xs font-semibold mt-4 leading-tight text-gray-600 w-full '>{elem.details}</p>
              </div>
              <button
              onClick={() => {
                deleteNote(idx)
              }} 
              className='w-full cursor-pointer active:scale-95 bg-red-500 text-white py-1 text-xs rounded-2xl font-bold'>Delete</button>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default App

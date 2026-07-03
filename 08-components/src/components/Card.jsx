import React from 'react'

const Card = (props) => {
    
    return (
        <div className='mr-7 bg-white text-black inline-block p-6 text-center text-2xl rounded'>
            <img className='w-32 h-32 rounded-full mb-3 ml-3 bg-pink-400' src={props.photu} alt="" />
            <h1 className='text-2xl font-semibold mb-4'>{props.name}</h1>
            <h2>{props.city}, {props.age}</h2>
            <h4 className='text-blue-500' >{props.prof}</h4>
            <button className='bg-emerald-700 text-white mt-5 px-4 py-2 font-medium' >Add Friend</button>
        </div>
    )
}

export default Card

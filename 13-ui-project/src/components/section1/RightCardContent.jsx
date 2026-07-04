import React from 'react'

const RightCardContent = (props) => {
    return (
        <div className='absolute top-0 left-0 h-full w-full p-7 flex flex-col justify-between'>
            <h2 className='bg-white rounded-full h-12 w-12 flex justify-center items-center text-xl font-semibold'>{props.id + 1}</h2>
            <div>
                <p className='text-shadow-2xs text-sm leading-relaxed text-white mb-6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia maxime molestias numquam nam consequuntur a.</p>
                <div className='flex justify-between items-center'>
                    <button className='bg-blue-800 text-white font-medium px-6 py-2 rounded-full'>{props.tag}</button>
                    <button className='bg-blue-800 text-white font-medium px-3 py-2 rounded-full'><i className="ri-arrow-right-line"></i></button>
                </div>
            </div>
        </div>
    )
}

export default RightCardContent

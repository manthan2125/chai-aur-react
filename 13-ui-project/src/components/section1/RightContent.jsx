import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div id='right' className='h-full p-6 w-2/3 flex flex-nowrap gap-8 overflow-x-auto'>
        {props.users.map(function(user, idx){

            return <RightCard key={idx} id={idx} img={user.img} tag={user.tag}/>
        })}
    </div>
  )
}

export default RightContent

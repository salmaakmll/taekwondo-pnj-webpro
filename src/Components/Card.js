import React from 'react'

function Card(props) {
  return (
    <div className=' flex-col my-7 mx-auto p-7 rounded-2xl shadow-xl bg-white w-[25%] min-w-[200px] '>
        <img src={props.src} alt={props.alt} className='rounded-xl shadow-lg' />
        <h1 className='text-xl font-bold mt-3'>{props.title}</h1>
        <p className='my-2'>{props.description}</p>
        {/* <Button link={props.link} title="Learn More" /> */}
    </div>
  )
}

export default Card
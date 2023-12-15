import React from 'react'
import { useLocation } from 'react-router-dom'

import Navbar from './Navbar'
import { Dp, Notes, Youtube } from '../assets/image'

const CourseDetails = () => {
  const {state} = useLocation();

  return (
    <>
      <Navbar />
      <div className='bg-gray-50'>
        <div className='h-screen max-w-[1300px] mx-auto'>
            <div className='p-10'>
                <img className='rounded w-full object-cover lg:h-[600px] mx-auto' src={state.data.image}/>
                <p className='text-3xl mt-4 font-bold'>{state.data.title}</p>
                <p className='mt-2'>{state.data.description}</p>
                <div className=' mt-10 grid md:grid-cols-2 gap-5'>
                    <div className='flex items-center md:justify-self-center cursor-pointer' onClick={()=>window.open(state.data.tutorial, "_blank")}>
                        <img className='h-10' src={Youtube} alt="Youtube image" />
                        <p className='ml-4 hover:text-[#215DFF]'>Click here to watch tutorial</p>
                    </div>
                    <div className='flex items-center md:justify-self-center cursor-pointer' onClick={()=>window.open(state.data.notes, "_blank")}>
                        <img className='h-10' src={Notes} alt="Notes Image" />
                        <p className='ml-4 hover:text-[#215DFF]'>Click here to read notes</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default CourseDetails
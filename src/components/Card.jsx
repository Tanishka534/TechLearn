import React from 'react'
import { useNavigate } from 'react-router-dom';

import User from '../assets/image/user.png';

const Card = ({description, image, item, title}) => {
  const navigate = useNavigate();

  return (
    <div className='m-5 p-5 bg-white rounded-md shadow-md cursor-pointer' onClick={()=>navigate('/home/coursedetails', {state:{data:item}})}>
        <img className='mx-auto md:h-25 h-40 w-full rounded object-cover' src={image} />
        <p className='mt-4 font-bold md:text-2xl text-xl hover:text-[#215DFF]'>{title}</p>
        <p className='line-clamp-3'>{description}</p>
    </div>
  )
}

export default Card
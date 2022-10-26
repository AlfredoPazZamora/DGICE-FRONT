import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const AboutIcon = ({icon, title, text}) => {
  return (
    <>
     <div className='mx-5 my-4 py-3 px-9'>
        <div className='flex items-center justify-center '>
          <FontAwesomeIcon className='py-9 mr-4 md:mx-8 fa-2xl' icon={icon} /> 
          <p className='font-bold text-small md:text-h3 py-6 text-center'>{title}</p>
        </div>
        <div className='pt-5 px-5 bg-white opacity-80 hover:opacity-100 rounded-2xl shadow-md'>
          <p className='text-justify pb-6 font-normal text-sma md:text-small'>{text}</p>
        </div>
     </div>
    </>
  )
}


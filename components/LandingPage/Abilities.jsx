import React from 'react'
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Abilities = ( {icon, valor} ) => {
  return (
    <>
        <div className='flex lg:flex-col justify-center items-center'>
            <FontAwesomeIcon className='py-4 px-5 fa-2xl' icon={icon} />
            <div className='w-48 bg-blue_green rounded-2xl px-4 text-white shadow-md'>
              <p className='text-center text-sm md:text-small py-2 text-h5'>{valor}</p>
            </div> 
        </div>
    </>
  )
}

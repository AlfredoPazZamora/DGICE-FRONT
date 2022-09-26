import React from 'react'
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Abilities = ( {number} ) => {
  return (
    <>
        <div className='px-12 md:px-24 flex flex-col justify-center items-center'>
            <FontAwesomeIcon className='py-4' icon={faEye} /> 
            <p className='text-center py-2 text-h5'>Habilidad {number}</p>
            <p className='w-full text-justify pb-12  text-xs md:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium neque sequi eos reprehenderit tempora totam vero dolore exercitationem? Eum, dicta! Officia libero quasi voluptatem obcaecati harum non error. Tenetur, eaque!</p>
        </div>
    </>
  )
}

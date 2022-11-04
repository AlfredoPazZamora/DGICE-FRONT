import React from 'react'

const buttonNav = ({text}) => {
  return (
    <>
        <button className='border border-blue_green bg-blue_green transition duration-700 ease-in-out transform hover:-translate-y-1 hover:scale-80 rounded-3xl px-8 md:px-12 py-2.5 shadow-md'type='button'>
        <a href="http://dgice-academy.ucol.mx:3000/login">{text}</a>
        </button>
    </>
  )
}

export default buttonNav;
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell,  fafo } from '@fortawesome/free-regular-svg-icons'
import { faHouse, faBriefcase, faMessage, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import Link from 'next/link'

const navItems = [
    {
        item: 'Inicio',
        icon: faHouse,
    },
    {
        item: 'Cursos',
        icon: faBriefcase,
    },
    {
        item: 'Mensajes',
        icon: faMessage,
    },
]

export const NavbarDashboard = ({username, image}) => {
    return (
        <nav className='bg-white w-1/5 max-w-[200px] shadow-xl min-h-screen flex flex-col justify-between'>


            <div className=''>
                <picture className='mx-2 my-5 flex justify-center'>
                    <Image src='/img/logo.png' width='100%' height='100%' />
                </picture>
                

                <div className='hidden w-full border-b border-black/10 pb-4 md:flex md:flex-col md:items-center md:pb-5 lg:flex-row lg:justify-start lg:px-5'>
                    <picture className='w-2/4 lg:w-1/4'>
                        <Image src={image} layout="responsive" width='100%' height='100%' className='rounded-full' />
                    </picture>
                    <h1 className='font-bold md:mt-2 lg:ml-2'>{username}</h1>
                </div>

                <section className='w-full'>

                    {
                        navItems.map(({item, icon}) => (
                            <div className='cursor-pointer flex justify-center items-center py-2 mb-5 hover:bg-blue hover:text-white md:justify-start lg:px-5 lg:py-5 lg:mb-0 '> 
                                <FontAwesomeIcon icon={icon} className='text-2xl md:text-xl' />
                                <p className='hidden text-md ml-2 md:flex '>{item}</p>
                            </div>
                        ))
                    }
    
                </section>
            </div>

            <a href='/' className='bg-red flex justify-center items-center py-3 '>
                <FontAwesomeIcon icon={faRightFromBracket} className='text-2xl text-white' />
            </a>
        </nav>
    )
}

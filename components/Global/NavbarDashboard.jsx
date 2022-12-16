import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell,  fafo } from '@fortawesome/free-regular-svg-icons'
import { faHouse, faBriefcase, faMessage, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

const navItems = [
    {
        item: 'Inicio',
        icon: faHouse,
        url: '/instructor'
    },
    {
        item: 'Cursos',
        icon: faBriefcase,
        url: '/instructor/cursos'
    },
    {
        item: 'Mensajes',
        icon: faMessage,
        url: '/instructor/mensajes'
    },
]

export const NavbarDashboard = ({username, image}) => {

    const route = useRouter()

    const logOut = async () => {
        if(typeof window !== 'undefined'){

            const name_id = localStorage.getItem('name_id');
            const session_index = localStorage.getItem('session_index');
            const url = `http://dgice-academy.ucol.mx:3000/logout/${name_id}/${session_index}`;

            
                fetch(url, {
                    method: "GET",
                    mode: "cors",
                    
                });


            localStorage.clear();
            route.push('/')
            
            
        } 
    }

    return (
        <nav className='bg-blue_green w-1/5 max-w-[200px] shadow-xl min-h-screen flex flex-col justify-between'>


            <div className='text-white'>
                <picture className='mx-2 my-5 flex justify-center'>
                    <Image src='/img/logo-blanco.png' width='100%' height='100%' />
                </picture>
                

                <div className='hidden w-full border-b border-black/10 pb-4 md:flex md:flex-col md:items-center md:pb-5 lg:flex-row lg:justify-start lg:px-5'>
                    <picture className='w-2/4 lg:w-1/4'>
                        <Image src={image} layout="responsive" width='100%' height='100%' className='rounded-full' />
                    </picture>
                    <h1 className='font-bold md:mt-2 lg:ml-2'>{username}</h1>
                </div>

                <section className='w-full'>

                    {
                        navItems.map(({item, icon, url}) => (
                            <Link href={url} key={item}> 
                                <a className='cursor-pointer flex justify-center items-center py-2 mb-5 md:px-2 hover:bg-blue hover:text-white md:justify-start lg:px-5 lg:py-5 lg:mb-0 '> 
                                    <FontAwesomeIcon icon={icon} className='text-2xl md:text-xl' />
                                    <p className='hidden text-md ml-2 md:flex '>{item}</p>
                                </a>
                            </Link>
                        ))
                    }
    
                </section>
            </div>

            <a className='bg-red flex justify-center items-center py-3 hover:cursor-pointer' onClick={logOut}>
                <FontAwesomeIcon icon={faRightFromBracket} className='text-2xl text-white' />
            </a>
        </nav>
    )
}



import Link from 'next/link'
import React from 'react'

export const CreateCourse = () => {
    return (
        <section className='w-full bg-white shadow-xl px-2 py-5 rounded-lg flex flex-col justify-between items-center lg:flex-row lg:p-5'>
            <h2 className='text-lg text-center md:text-xl lg:text-left'>Puedes crear tantos cursos como quieras.</h2>
            <Link href="/create">
                <a className='bg-blue_green w-full py-2 text-center rounded-lg text-white font-bold mt-2 hover:bg-blue_light hover:text-black md:w-3/6 lg:w-2/6 xl:w-1/6'>
                    Crear curso
                </a>
            </Link>
        </section>
    )
}

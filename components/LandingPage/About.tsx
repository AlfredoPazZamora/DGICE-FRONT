import React from 'react'
import Image from "next/image";
import { Abilities } from "../LandingPage/Abilities"

export const About = () => {
  return (
    <>
        <section className='w-screen h-full flex flex-col lg:flex-row flex items-center justify-center bg-gray lg:bg-white'>
            <div className='w-full h-full hidden lg:flex'>
                <div className="triangle"></div>
                <div className='absolute lg:ml-20 pt-16'>
                    <Image src="/img/mainLogo.svg" width={400} height={400} />
                </div>
            </div>
            <div className='w-full h-full px-8 py-8 lg:mx-20'>
                <p className='font-bold text-h5 md:text-h2 py-6 text-center'>¿Quienes somos?</p>
                <p className='text-justify pb-6 font-medium text-base md:text-h5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem dolor autem voluptates cumque facere nihil dolores. Cupiditate, laboriosam minima? Culpa exercitationem porro enim nisi dicta, commodi molestias officia illum recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia voluptates laboriosam dolore eaque nisi cupiditate ab ipsam, eos id iusto. Autem, laboriosam do. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio mollitia modi animi consequatur quos magni necessitatibus quasi at beatae reiciendis. Adipisci neque dolorem ipsam impedit totam nobis vero aspernatur explicabo?</p>
            </div>
        </section>

        <section className='w-screen h-full'>
            <div className='w-full px-8 py-8'>
                <p className='font-bold text-h5 md:text-h2 py-3 text-center'>Habilidades</p>
            </div>

            <article className='border border-indigo-500 w-full h-full pb-8 flex flex-col lg:flex-row justify-center items-center'>
                <Abilities number="1" ></Abilities>
                <Abilities number="2" ></Abilities>
                <Abilities number="3" ></Abilities>
            </article>
        </section>
    </>
  )
}

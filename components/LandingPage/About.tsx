import React from 'react'
import { Abilities } from "../LandingPage/Abilities"
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import { faBullseye } from '@fortawesome/free-solid-svg-icons'; 
import { faHandHoldingHeart, faHandsHoldingCircle, faHandshake, faHandSpock, faHandsHolding, faShareNodes, faHand } from '@fortawesome/free-solid-svg-icons';
import { AboutIcon } from './AboutIcon'

export const About = () => {
  return (
    <>
        <section className='h-full flex flex-col lg:flex-row flex items-center justify-center bg-yellow shadow-md'>
            <AboutIcon icon={faBullseye} title="Misión" text="Desarrollar cultura emprendedora y de innovación en la comunidad universitaria y la sociedad, a través de estrategias así como acciones pertinentes que contribuyan al intercambio de conocimiento para fortalecer el ecosistema de innovación y emprendimiento."></AboutIcon>

            <AboutIcon icon={faRocket} title="Visión" text="Ser líder en el desarrollo de cultura emprendedora y de innovación en la comunidad universitaria y la sociedad para formar agentes de cambio que impactan positivamente en el ecosistema de innovación y emprendimiento."></AboutIcon>
        </section>

        <section className='flex flex-col justify-center items-center py-12'>
            <p className='font-bold text-h3 md:text-h2 mb-16 text-center border-b-4'>Valores</p>
            
            <article className='grid pb-8 grid-cols-1 lg:grid-cols-4 gap-4'>
                <Abilities icon={faHandHoldingHeart} valor="Responsabilidad" ></Abilities>
                <Abilities icon={faHandsHoldingCircle} valor="Honestidad" ></Abilities>
                <Abilities icon={faHandshake} valor="Respeto" ></Abilities>
                <Abilities icon={faHandSpock} valor="Empatía" ></Abilities>
                <Abilities icon={faHandsHolding} valor="Integridad" ></Abilities>
                <Abilities icon={faShareNodes} valor="Compartir"></Abilities>
                <Abilities icon={faHand} valor="Liderazgo" ></Abilities>
            </article>
        </section>
    </>
  )
}

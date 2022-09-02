import React from 'react'
import Image from 'next/image'
import feuc from '../src/img/feuc.jpg'
import consorcio from '../src/img/consorcio.jpg'
import LogoSep from '../src/img/LogoSep.jpg'
import LogoFec from '../src/img/LogoFEC.jpg'

const FooterVideo = () => {
return (
   <div>

   

   <div className="bg-blue h-1/2 w-full flex md:flex-row flex-col justify-aroun
   dd items-start p-1">
      <div className="p-5 ">
         <ul className=" text-gray-800 font-bold text-3xl pb-6">
            <p><span className="black">Contáctanos</span></p>
         </ul>


         
            <div className="flex  gap-6 pb-5">
               <ul>

                  <div className="flex flex-row space-x-1">

                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 s" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                     </svg>

                     <a href="https://sistemas.ucol.mx/telefonia/">
                        <p className=' no-underline hover:underline text-white-500 text-lg'>Directorio Telefonico</p>
                     </a>
                  </div>

                  
                  <div className="flex flex-row space-x-1">

                     <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                     </svg>
                     <a href="https://www.ucol.mx/conocenos/planteles-dependencias.htm">
                        <p className='no-underline  hover:underline text-white-500 text-lg'>Planteles y dependencias</p>
                     </a>
                  </div>

                  <div className="flex flex-row space-x-1">

                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                     </svg>
                     <a href="https://portal.ucol.mx/dgice/contacto.htm">
                        <p className='no-underline  hover:underline text-white-500 text-lg'>Contacto</p>
                     </a>
                  </div>
                  <div className="flex flex-row space-x-1 ">

                     <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                     </svg>
                     <a className="text-blue-600 visited:text-purple-600 ..." href="https://portal.ucol.mx/dgice/mapa.htm">

                        <p className='no-underline hover:underline  text-white-500 text-lg'>Mapa de sitio</p>
                     </a>
                  </div>

               </ul>

         </div>

{/* imagenes  */}

      </div>


      <div className='p-5 bottom-0 w-1/3'>
         <div className=" w-full  flex flex-col" >
               <a  href="https://portal.ucol.mx/feuc/">
                  <Image  className="w-full object-contain min-h-0"  src={feuc}/>
               </a>
         </div>

         <div className="h-full w-full  flex flex-col" >

            <a  href="https://www.cumex.org.mx/">
                  <Image   className="w-full object-contain min-h-2" src={consorcio}/>
               </a>
            </div>
         
      </div>
{/* imagenes 2 */}
      <div className='p-5 w-1/3 '>

         <div className="h-full w-full  flex flex-col" >

               <a  href="https://www.gob.mx/sep">
                  <Image className="w-full object-contain min-h-0" src={LogoSep}/>
               </a>
         </div>

         <div className="h-full w-full  flex flex-col" >

               <a  href="http://federaciondeestudiantescolimenses.com/">
                  <Image className='w-full' src={LogoFec}/> 
               </a>
         </div>
         
      </div>

      <div className="p-1 w-1/3">

         <p className="text-gray-800 font-bold text-2xl pb-4 text-center">REDES SOCIALES</p>
      </div>

      






   </div>
   <div className="text-center ">
         <h1 className="text-center bg-blue text-black p-6">© Derechos Reservados Universidad de Colima</h1>
      </div>

   </div>
)
}

export default FooterVideo
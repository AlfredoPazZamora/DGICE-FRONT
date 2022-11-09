import React from 'react'
import Image from 'next/image'
// import feuc from '../src/img/feuc.jpg'
// import consorcio from '../src/img/consorcio.jpg'
// import LogoSep from '../src/img/LogoSep.jpg'
// import LogoFec from '../src/img/LogoFEC.jpg'A
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faPhone, faGraduationCap, faBook, faMapLocation, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'


const FooterVideo = () => {
   return (
      <div className="flex flex-col relative bottom-0">



         <div className=" bg-blue h-1/2 w-full flex sm:flex-col md:flex-row lg:flex-row flex-col justify-aroundd items-start p-1 ">

            <div className="p-5 w-1/3">
               <ul className=" text-gray-800 font-bold text-3xl pb-6">
                  <p><span className="black">Contáctanos</span></p>
               </ul>



               <div className="flex  gap-6 pb-5 ">
                  <ul>

                     <div className="flex flex-row space-x-1">


                        <FontAwesomeIcon icon={faBook} />
                        <a href="https://sistemas.ucol.mx/telefonia/">
                           <p className=' no-underline hover:underline text-white-500 text-lg'>Directorio Telefonico</p>
                        </a>
                     </div>


                     <div className="flex flex-row space-x-1">
                        <FontAwesomeIcon icon={faGraduationCap} />


                        <a href="https://www.ucol.mx/conocenos/planteles-dependencias.htm">
                           <p className='no-underline  hover:underline text-white-500 text-lg'>Planteles y dependencias</p>
                        </a>
                     </div>

                     <div className="flex flex-row space-x-1">


                        <FontAwesomeIcon icon={faPhone} />
                        <a href="https://portal.ucol.mx/dgice/contacto.htm">
                           <p className='no-underline  hover:underline text-white-500 text-lg'>Contacto</p>
                        </a>
                     </div>
                     <div className="flex flex-row space-x-1 ">

                        <FontAwesomeIcon icon={faLocationDot} />
                        <a className="text-blue-600 visited:text-purple-600 ..." href="https://portal.ucol.mx/dgice/mapa.htm">

                           <p className='no-underline hover:underline  text-white-500 text-lg'>Mapa de sitio</p>
                        </a>
                     </div>

                  </ul>

               </div>


            </div>

            {/* imagenes  */}

            <div className='p-5 bottom-0 w-1/3 content-center flex flex-col'>

               <div className=" w-full  flex flex-col " >
                  <a href="https://portal.ucol.mx/feuc/">
                     {/* <Image className="w-full align-center" src={feuc} /> */}
                  </a>
               </div>

               <div className="h-full w-full  flex flex-col" >

                  <a href="https://www.cumex.org.mx/">
                     {/* <Image className="w-full   align-center" src={consorcio} /> */}
                  </a>
               </div>
            </div>



            {/* imagenes 2 */}
            <div className='p-5 w-1/3 gap-6 content-center flex flex-col ml-30'>

               <div className="h-full w-full content-center flex flex-col" >

                  <a href="https://www.gob.mx/sep">
                     {/* <Image className="w-full align-center" src={LogoSep} /> */}
                  </a>
               </div>

               <div className="h-full w-full  flex flex-col" >

                  <a href="http://federaciondeestudiantescolimenses.com/">
                     {/* <Image className='w-full align-center' src={LogoFec} /> */}
                  </a>
               </div>

            </div>

            <div className="p-1 w-1/3 text-center space-x-4 sans-serif" >

               <p className="text-gray-800 font-bold text-2xl pb-4 text-center">REDES SOCIALES</p>
               <a href="https://www.facebook.com/dgiceUdeC">

                  <FontAwesomeIcon className="w-1/5" icon={faFacebook} size="xl" />
               </a>
               <a href="https://portal.ucol.mx/dgice/</div>">

                  <FontAwesomeIcon className="w-1/5 item-center" icon={faGlobe} size="xl" />
               </a>
            </div>

         </div>



         <div className="text-center ">
            <h1 className="text-center bg-blue text-black p-6">© Derechos Reservados Universidad de Colima</h1>
         </div>

      </div>
   )
}

export default FooterVideo
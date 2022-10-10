import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import feuc from '../src/img/feuc.jpg'
import consorcio from '../src/img/consorcio.jpg'
import logo_negro from '../src/img/logo_negro.png'
import LogoSep from '../src/img/LogoSep.jpg'
import LogoFec from '../src/img/LogoFEC.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faPhone, faGraduationCap, faBook, faMapLocation, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'


const FooterVideo = () => {
   return (
      <>
         {/* div padre de todo */}
         <div className="  grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 bg-blue ">

            {/* grid col 1 with icons and text */}
            <div className="bg-blue justify-center  md:justify-center md:pt-3 lg:ml-0 ">
               <p className="flex justify-center font-bold text-xl pb-2 pt-4 md:pt-2 md:ml-5 lg:ml-10">
                  Contáctanos
               </p>

               <div className=" ml-20 md:ml-0 lg:ml-0 justify-center md:justify-center md:pb-3">

                  <div className=" flex flex-row space-x-2 ml-3  md:justify-center md:ml-12">
                     <FontAwesomeIcon icon={faBook} />
                     <Link href="https://sistemas.ucol.mx/telefonia/">
                        <p className=' no-underline hover:underline text-white-500 text-lg'>
                           Directorio Telefonico
                        </p>
                     </Link>

                  </div>
                  <div className=" flex flex-row space-x-2 ml-2  md:justify-center md:ml-0 ">
                     <FontAwesomeIcon icon={faGraduationCap} />
                     <Link href="https://www.ucol.mx/conocenos/planteles-dependencias.htm">
                        <p className='no-underline  hover:underline text-white-500 text-lg'>
                           Dependencias
                        </p>
                     </Link>

                  </div>
                  <div className=" flex flex-row space-x-2 ml-3  md:justify-center md:mr-10">
                     <FontAwesomeIcon icon={faPhone} />
                     <Link href="https://portal.ucol.mx/dgice/contacto.htm">
                        <p className='no-underline  hover:underline text-white-500 text-lg'>
                           Contactos
                        </p>
                     </Link>

                  </div>
                  <div className=" flex flex-row space-x-2 ml-3 md:mr-10 md:justify-center ">

                     <FontAwesomeIcon icon={faLocationDot} />
                     <Link href="https://portal.ucol.mx/dgice/mapa.htm">
                        <p className='no-underline hover:underline  text-white-500 text-lg'>
                           Ubicación
                        </p>
                     </Link>

                  </div>

               </div>

            </div>
            {/* aqui termina la primera grid */}

            {/* empieza grid de imagenes 1 y 2*/}
            <div className="py-6 md:mx-10 md:py-3 lg:w-full lg:mx-5 flex justify-center md:flex-justify-center lg:pt-8 xl:pt8">
               <Link href="https://portal.ucol.mx/feuc/">
                  <a>
                     <Image
                        src={logo_negro}
                        width={300}
                        height={100}
                     />
                  </a>
               </Link>

               {/* <div className=" ml-20 pt-1 lg:w-30" >
                  <Link href="https://www.cumex.org.mx/">
                     <a>
                        <Image
                           src={consorcio}
                           width={230}
                           height={65}
                        />
                     </a>
                  </Link>
               </div> */}
            </div>
            {/* termina grid de imagenes 1 y 2 */}

            {/* grid de imagenes 3 y 4 */}

            {/* <div className="md:mx-10 ">

               <div className=" ml-20 pt-1 lg:w-full" >
                  <Link href="https://www.gob.mx/sep">
                     <a>
                        <Image
                           src={LogoSep}
                           width={230}
                           height={60}
                        />
                     </a>
                  </Link>

               </div>

               <div className=" ml-20 pt-1 lg:w-full" >
                  <Link href="http://federaciondeestudiantescolimenses.com/">
                     <a>
                        <Image
                           src={LogoFec}
                           width={230}
                           height={60}
                        />
                     </a>
                  </Link>
               </div>

            </div> */}
            {/* fin de grid de imagenes 3 y 4 */}





            {/* grid de redes sociales */}
            <div className="mx-10 lg:mx-0 ">

               <div className="flex flex-content justify-center  lg:ml-15 pt-4">
                  <p className="text-gray-800 font-bold text-xl  pb-4 md:ml-12 lg:ml-7 ml-6 md:pt-2 md:mx-8">
                     <span className="justify-content" >Redes Sociales</span>
                  </p>
               </div>

               <div className="flex  justify-center  space-x-6">

                  <div className=" mr-2 md:mr-0 ">
                     <Link href="https://www.facebook.com/dgiceUdeC">
                        <a >
                           <FontAwesomeIcon icon={faFacebook} size="xl" />
                        </a>
                     </Link>
                  </div>

                  <div className="md:ml-7 " >
                     <Link href="https://portal.ucol.mx/dgice/</div>">
                        <a >
                           <FontAwesomeIcon icon={faGlobe} size="xl" />
                        </a>
                     </Link>
                  </div>

               </div>
            </div>
            {/* fin de grid de redes sociales */}
         </div >



         <div className="text-center ">
            <h1 className="text-center bg-blue text-black p-6">
               © Derechos Reservados Universidad de Colima
            </h1>
         </div>
      </>
   )
}

export default FooterVideo
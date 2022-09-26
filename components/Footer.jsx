import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import feuc from '../src/img/feuc.jpg'
import consorcio from '../src/img/consorcio.jpg'
import LogoSep from '../src/img/LogoSep.jpg'
import LogoFec from '../src/img/LogoFEC.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faPhone, faGraduationCap, faBook, faMapLocation, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'


const FooterVideo = () => {
   return (
      <>
         {/* div padre de todo */}
         <div className="sticky grid grid-cols-1 lg:grid-cols-4 bg-blue">

            {/* grid col 1 with icons and text */}
            <div className="bg-blue  justify-center ml-20 md:justify-center">
               <p className="font-bold text-xl pb-2 ">
                  <span className="black text-center ml-10 ">Contáctanos</span>
               </p>

               <ul className=" ">
                  <div className=" flex flex-row space-x-2 ">
                     <FontAwesomeIcon icon={faBook} />
                     <Link href="https://sistemas.ucol.mx/telefonia/">
                        <p className=' no-underline hover:underline text-white-500 text-lg'>
                           Directorio Telefonico
                        </p>
                     </Link>

                  </div>
                  <div className=" flex flex-row space-x-2 ">
                     <FontAwesomeIcon icon={faGraduationCap} />
                     <Link href="https://www.ucol.mx/conocenos/planteles-dependencias.htm">
                        <p className='no-underline  hover:underline text-white-500 text-lg'>
                           Planteles y dependencias
                        </p>
                     </Link>

                  </div>
                  <div className=" flex flex-row space-x-2 ">
                     <FontAwesomeIcon icon={faPhone} />
                     <Link href="https://portal.ucol.mx/dgice/contacto.htm">
                        <p className='no-underline  hover:underline text-white-500 text-lg'>
                           Contacto
                        </p>
                     </Link>

                  </div>
                  <div className=" flex flex-row space-x-2 ">

                     <FontAwesomeIcon icon={faLocationDot} />
                     <Link href="https://portal.ucol.mx/dgice/mapa.htm">
                        <p className='no-underline hover:underline  text-white-500 text-lg'>
                           Mapa de sitio
                        </p>
                     </Link>

                  </div>

               </ul>

            </div>
            {/* aqui termina la primera grid */}

            {/* empieza grid de imagenes 1 y 2*/}
            <div className="py-6 md:mx-10 md:py-3">
               <div className=" mx-10" >
                  <Link href="https://portal.ucol.mx/feuc/">
                     <a>
                        <Image
                           src={feuc}
                           width={300}
                           height={80}
                        />
                     </a>
                  </Link>
               </div>

               <div className=" ml-20 pt-1 " >
                  <Link href="https://www.cumex.org.mx/">
                     <a>
                        <Image
                           src={consorcio}
                           width={230}
                           height={65}
                        />
                     </a>
                  </Link>
               </div>
            </div>
            {/* termina grid de imagenes 1 y 2 */}

            {/* grid de imagenes 3 y 4 */}
            <div className="md:mx-10 ">

               <div className=" ml-20 pt-1" >
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

               <div className=" ml-20 pt-1" >
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

            </div>
            {/* fin de grid de imagenes 3 y 4 */}

            {/* grid de redes sociales */}
            <div className="mx-10">
               <p className="text-gray-800 font-bold text-2xl pb-4 text-center">
                  REDES SOCIALES
               </p>
               <div className="mx-10 md:grid grid-cols-2">

                  <Link href="https://www.facebook.com/dgiceUdeC">
                     <a >
                        <FontAwesomeIcon className="w-1/2 md:ml-10" icon={faFacebook} size="xl" />
                     </a>
                  </Link>
                  <Link href="https://portal.ucol.mx/dgice/</div>">
                     <a >
                        <FontAwesomeIcon className="w-1/2 md:ml-2" icon={faGlobe} size="xl" />
                     </a>
                  </Link>
               </div>
            </div>
            {/* fin de grid de redes sociales */}
         </div >
         <div className="text-center ">
            <h1 className="text-center bg-blue text-black p-6">© Derechos Reservados Universidad de Colima</h1>
         </div>
      </>
   )
}

export default FooterVideo
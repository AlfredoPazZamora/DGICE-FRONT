import React from 'react'
// import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'


const ErrorPage = () => {
  return (
    <div className="min-w-screen pt-10 flex flex-col justify-center items-center space-y-3 pt-20">
      <div className="flex flex-row items-center space-x-4">
        <FontAwesomeIcon className="pt-2" size="2xl" icon={faTriangleExclamation} />
        <p className="text-6xl text-blue font-bold">Error 404</p>

      </div>
      <p className="text-3xl text-center">Página no encontrada</p>
      <p className="text-center">La dirección de la pagina no fue encontrada. Porfavor intentalo de nuevo.</p>

      <div className="flex space-x-2">
        <Link href="/">
          <button className="p-2 bg-blue text-white rounded-md ">Ir al inicio</button>
        </Link>
      </div>
    </div>
  )
}

export default ErrorPage
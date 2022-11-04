import React from 'react'
// import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'


const ErrorPage = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center space-y-">
      <div className="flex flex-row items-center space-x-4">
        <p className="text-6xl text-blue font-bold">404</p>

        <FontAwesomeIcon className="pt-2"size="2xl" icon={faTriangleExclamation} />
      </div>
      <p className="text-3xl">Page not found</p>
      <p>The URL of the page was not found. Please try again.</p>

      <div className="flex space-x-2">
        <button className="p-2 bg-blue text-white rounded-md ">Go home</button>
      </div>
    </div>
  )
}

export default ErrorPage
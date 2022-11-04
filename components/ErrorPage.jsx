import React from 'react'

const ErrorPage = () => {
  return (
    <div className="min-w-screen min-h-screen flex flex-col justify-center items-center space-y-5">
      <p className="text-6xl text-black font-bold">404</p>
      <p className="text-3xl">Page not found</p>
      <p>The URL of the page was not found. Please try again</p>

      <div className="flex space-x-2">
        <button className="p-2 bg-blue text-white rounded-md ">Go home</button>
        <button> Contact us </button>
      </div>
    </div>
  )
}

export default ErrorPage
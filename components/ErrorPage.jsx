import React from 'react'
import Link from 'next/link'
const ErrorPage = () => {
   return (
      <div className="w-screen h-screen flex flex-col justify-center items-center space-y-5">
         <p className="text-6xl font-bold text-blue">404</p>
         <p className="text-3xl"> Page not found</p>
         <p className="">The URL of the age was not found. </p>
         <p className="">Please try again</p>
         <div className="">
            <Link href="/">
               <button className="p-2 bg-blue text-white rounded-md">Go Home</button>
            </Link>
         </div>
      </div>
   )
}

export default ErrorPage
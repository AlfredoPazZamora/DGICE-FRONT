import React from 'react'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FooterVideo from '../FooterVideo'

const Faq = () => {
  return (
    <>
      <div className="container py-6 ">

        <div className="text-center py-5 ">
          <p className="lg:text-3xl sm:text-2xl text-xl my-5 font-sans-serif mx-4">
            Preguntas frecuentes
          </p>
          <hr className=' w-3/4 md:2/3 container' />
        </div>

        {/*  */}
        <div className="shadow-md w-3/4 md:2/3 mx-auto mt-4 mb-2">


          <div className="overflow-hidden  rounded cursor-pointer  hover:bg-gray mb-2">

            <label>

              <p className=" p-5 inline-block  w-11/12 text-center cursor-pointer">¿Quíenes pueden unirse a los cursos?</p>
              <input className=" absolute  opacity-0  h-4 w-4 float-right mt-6 mr-2   shadow-md peer " type="checkbox" />

              <div className="bg-blue max-h-0 peer-checked:max-h-screen delay-150 ease-in duration-150"><p className="p-5  text-start">Lorem ipsum dolor sit amet consectetur adipiscing elit, faucibus platea id netus aliquam vel quis, pharetra montes nullam luctus erat habitant. Magna fames convallis senectus neque semper hac massa est elementum, tincidunt scelerisque diam fusce venenatis sollicitudin quam cubilia, pulvinar nisi nulla lectus ultrices potenti per platea. Metus vivamus parturient quam natoque vehicula turpis suspendisse dictum dignissim mattis tempor scelerisque litora mollis sociis, et potenti leo auctor cum hac nunc nisl habitant ut nulla iaculis lectus.</p></div>
            </label>

          </div>

          <div className="overflow-hidden  rounded cursor-pointer  hover:bg-gray mb-2">

            <label>

              <p className=" p-5 inline-block  w-11/12 text-center cursor-pointer">¿Quíenes pueden unirse a los cursos?</p>
              <input className=" absolute  opacity-0  h-4 w-4 float-right mt-6 mr-2   shadow-md peer " type="checkbox" />

              <div className="bg-blue max-h-0 peer-checked:max-h-screen delay-150 ease-in duration-150"><p className="p-5  text-start">Lorem ipsum dolor sit amet consectetur adipiscing elit, faucibus platea id netus aliquam vel quis, pharetra montes nullam luctus erat habitant. Magna fames convallis senectus neque semper hac massa est elementum, tincidunt scelerisque diam fusce venenatis sollicitudin quam cubilia, pulvinar nisi nulla lectus ultrices potenti per platea. Metus vivamus parturient quam natoque vehicula turpis suspendisse dictum dignissim mattis tempor scelerisque litora mollis sociis, et potenti leo auctor cum hac nunc nisl habitant ut nulla iaculis lectus.</p></div>
            </label>

          </div>

          <div className="overflow-hidden  rounded cursor-pointer  hover:bg-gray mb-2">

            <label>

              <p className=" p-5 inline-block  w-11/12 text-center cursor-pointer">¿Quíenes pueden unirse a los cursos?</p>
              <input className=" absolute  opacity-0  h-4 w-4 float-right mt-6 mr-2   shadow-md peer " type="checkbox" />

              <div className="bg-blue max-h-0 peer-checked:max-h-screen delay-150 ease-in duration-150"><p className="p-5  text-start">Lorem ipsum dolor sit amet consectetur adipiscing elit, faucibus platea id netus aliquam vel quis, pharetra montes nullam luctus erat habitant. Magna fames convallis senectus neque semper hac massa est elementum, tincidunt scelerisque diam fusce venenatis sollicitudin quam cubilia, pulvinar nisi nulla lectus ultrices potenti per platea. Metus vivamus parturient quam natoque vehicula turpis suspendisse dictum dignissim mattis tempor scelerisque litora mollis sociis, et potenti leo auctor cum hac nunc nisl habitant ut nulla iaculis lectus.</p></div>
            </label>

          </div>




        </div>
        {/*  */}



        <div className="text-center py-5 ">

          <hr className=' w-3/4 md:2/3 container' />
        </div>

      </div>



    </>

  )
}

export default Faq
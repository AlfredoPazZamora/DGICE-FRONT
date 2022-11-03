import React from 'react'
import Image from "next/image";

export const Start = () => {
  return (
    <>
        <section className="h-full flex flex-col justify-center items-center px-9 lg:flex-row mt-9">
            <article className="w-full py-4 px-8 text-center lg:mx-4 lg:text-start">
                <div>
                <p className="text-h3 md:text-h3 py-4 font-medium">
                    La calidad de estudio la encuentras aqui
                </p>
                <p className="text-h5 md:text-h4 py-4 font-thin">
                    Con más de 100 cursos impartidos por los mejores profesores de la
                    Universidad de Colima.
                </p>
                <div className="text-white text-xl py-4">
                    <button
                    className="border border-blue_green bg-blue_green focus-within:shadow-lg text-center transition duration-500 ease-in-out duration-200 rounded-2xl px-12 md:px-8 py-2.5 shadow-md"
                    type="button"
                    >
                    Empieza ahora
                    </button>
                </div>
                </div>
            </article>

            <article className="py-4 px-9 sm:w-100">
                <Image src="/img/cuadro.png" width={400} height={400} />
            </article>
        </section>
    </>
  )
}

import React from 'react'
import Image from "next/image";

export const Start = () => {
  return (
    <>
        <section className="h-full flex flex-col justify-center items-center px-9 lg:flex-row">
            <article className="w-full py-4 px-8 text-center lg:mx-4 lg:text-start">
                <div>
                <p className="text-h3 md:text-h1 py-4 font-medium">
                    La calidad de estudio la encuentras aqui
                </p>
                <p className="text-h5 md:text-h3 py-4 font-thin">
                    Con más de 100 cursos impartidos por los mejores profesores de la
                    Universidad de Colima.
                </p>
                <div className="text-white text-xl py-4">
                    <button
                    className="border border-blue bg-blue focus-within:shadow-lg text-center hover:bg-blue transition duration-500 ease-in-out rounded-2xl px-12 md:px-8 py-2.5"
                    type="button"
                    >
                    Empieza ahora
                    </button>
                </div>
                </div>
            </article>

            <article className="py-4 px-9 sm:w-100">
                <Image src="/img/mainLogo.svg" width={850} height={900} />
            </article>
        </section>
    </>
  )
}

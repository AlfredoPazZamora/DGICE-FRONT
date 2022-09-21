import React from 'react'
import { ListCards } from "../Card/ListCards";

export const Courses = () => {
  return (
    <>
      <section className="bg-slate-100 w-screen lg:px-9 py-6">
        <div className="px-12 w-screen h-full lg:text-start text-center text-h3 ">
            <p>Cursos populares</p>
        </div>

        <div className="flex md:items-center px-12 py-8 font-semibold">
            <ListCards />
        </div>
      </section>
    </>
  )
}

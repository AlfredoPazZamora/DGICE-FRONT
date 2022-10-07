import Image from "next/image";
import React from "react";
import { StartRating } from "../../components/Global";
import { MainLayout } from "../../components/Layouts/MainLayout";

import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function index(){
	return (
        <>

            <MainLayout>
                <div className="w-full flex justify-center items-center flex-col">

                    <div className="w-full bg-blue/30 flex justify-center items-center">
                        <div className="w-9/12 grid grid-cols-3 gap-10  py-10">
                            <section className="col-span-2 flex flex-col justify-center ">
                                <h1 className="text-h2 font-bold mb-5">Curso de EntityFramework y Linq</h1>
                                <p className="text-small"> El curso presenta el Entity Framework para manejar los datos de una aplicación en .NET 6 en una base de datos de sql server. Además se muestra la forma de consultar los datos por medio del lenguaje Linq, propio de C#. </p>

                                <div className="my-5  flex gap-5">
                                    <span className="bg-blue py-2 px-4 rounded-full text-sm tracking-wide">Programación</span>
                                    <StartRating rating={4.5}/>
                                </div>

                                <div className="flex gap-5">
                                    <p className="text-small mb-2">Duración: <strong>3 horas</strong></p>
                                    <p className="text-small mb-2">Acreditación: <strong>2 horas</strong></p>
                                </div>

                                
                                <div className="mt-5">
                                    <p className="text-small">Profesor: <strong>Marcos Hernandez</strong></p>
                                </div>
                            </section>
                            
                            <aside className="col-span-1 bg-white drop-shadow-2xl rounded-lg ">
                                <Image 
                                    src="https://picsum.photos/200/300"
                                    alt="Picture of the author"
                                    layout="responsive"
                                    width='100%'
                                    height={70}
                                    className="rounded-t-lg"
                                />

                                <div className="p-5 rounded-b-lg text-black">
                                    <p className="bg-blue text-center py-4 px-2 rounded-lg mb-5 text-small tracking-wide cursor-pointer hover:bg-green">Empezar curso</p>
                                </div>
                            </aside>
                        </div>
                    </div>

                    <div className=" w-9/12 mb-5 py-5 grid grid-cols-4" >
                        <aside className="hidden lg:block lg:sticky lg:top-5 ">
                            <h2 className="text-h2 font-bold mb-5 ">Módulos</h2>
                            <p className="text-small mb-2">Duración: <strong>3 horas</strong></p>
                            <p className="text-small mb-2">Acreditación: <strong>2 horas</strong></p>
                        </aside>
                        
                        <div className="col-span-3 ">
                            <article className="mb-5 rounded-md border cursor-pointer">
                                
                                <div className=" bg-white/60 py-5 px-10 flex justify-between items-center">
                                    <div className="">
                                        <p className="text-sm font-normal text-blue">Modulo 1</p>
                                        <h2 className="text-small font-bold">Introducción al curso</h2>
                                    </div>
                                    <FontAwesomeIcon icon={faChevronDown}  />

                                </div>
                                
                            </article>

                            <article className="mb-5 border border-blue rounded-md">
                                
                                <div className=" bg-blue py-5 px-10 flex justify-between items-center cursor-pointer">
                                    <div className="">
                                        <p className="text-sm font-normal text-white">Modulo 1</p>
                                        <h2 className="text-small font-bold">Primeros pasos</h2>
                                    </div>
                                    <FontAwesomeIcon icon={faChevronUp}  />
                                </div>
                                
                                <div className="">
                                    <section className=" hover:bg-blue/60 py-5 px-10 cursor-pointer">
                                        <p className="text-sm font-normal text-black">Clase 1</p>
                                        <h2 className="text-small font-bold">Creando el proyecto</h2>
                                    </section>

                                    <section className="hover:bg-blue/60 py-5 px-10 cursor-pointer">
                                        <p className="text-sm font-normal text-black">Clase 2</p>
                                        <h2 className="text-small font-bold">Creando el proyecto 2</h2>
                                    </section>

                                    <section className="hover:bg-blue/60 py-5 px-10 cursor-pointer">
                                        <p className="text-sm font-normal text-black">Clase 3</p>
                                        <h2 className="text-small font-bold">Creando el proyecto 3</h2>
                                    </section>
                                </div>

                            </article>

                            <article className="mb-5 rounded-md border cursor-pointer">
                                
                                <div className=" bg-white/60 py-5 px-10 flex justify-between items-center">
                                    <div className="">
                                        <p className="text-sm font-normal text-blue">Modulo 1</p>
                                        <h2 className="text-small font-bold">Introducción al curso</h2>
                                    </div>
                                    <FontAwesomeIcon icon={faChevronDown}  />

                                </div>
                                
                            </article>

                            <article className="mb-5 rounded-md border cursor-pointer">
                                
                                <div className=" bg-white/60 py-5 px-10 flex justify-between items-center">
                                    <div className="">
                                        <p className="text-sm font-normal text-blue">Modulo 1</p>
                                        <h2 className="text-small font-bold">Introducción al curso</h2>
                                    </div>
                                    <FontAwesomeIcon icon={faChevronDown}  />

                                </div>
                                
                            </article>

                            <article className="mb-5 border border-blue rounded-md">
                                
                                <div className=" bg-blue py-5 px-10 flex justify-between items-center cursor-pointer">
                                    <div className="">
                                        <p className="text-sm font-normal text-white">Modulo 1</p>
                                        <h2 className="text-small font-bold">Primeros pasos</h2>
                                    </div>
                                    <FontAwesomeIcon icon={faChevronUp}  />
                                </div>
                                
                                <div className="">
                                    <section className=" hover:bg-blue/60 py-5 px-10 cursor-pointer">
                                        <p className="text-sm font-normal text-black">Clase 1</p>
                                        <h2 className="text-small font-bold">Creando el proyecto</h2>
                                    </section>

                                    <section className="hover:bg-blue/60 py-5 px-10 cursor-pointer">
                                        <p className="text-sm font-normal text-black">Clase 2</p>
                                        <h2 className="text-small font-bold">Creando el proyecto 2</h2>
                                    </section>

                                    <section className="hover:bg-blue/60 py-5 px-10 cursor-pointer">
                                        <p className="text-sm font-normal text-black">Clase 3</p>
                                        <h2 className="text-small font-bold">Creando el proyecto 3</h2>
                                    </section>
                                </div>

                            </article>

                            <article className="mb-5 rounded-md border cursor-pointer">
                                
                                <div className=" bg-white/60 py-5 px-10 flex justify-between items-center">
                                    <div className="">
                                        <p className="text-sm font-normal text-blue">Modulo 1</p>
                                        <h2 className="text-small font-bold">Introducción al curso</h2>
                                    </div>
                                    <FontAwesomeIcon icon={faChevronDown}  />

                                </div>
                                
                            </article>
                        </div>
                    </div>
                </div>


            </MainLayout>
        </>
    );
};

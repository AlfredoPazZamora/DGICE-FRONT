import Image from "next/image";
import React from "react";
import FooterVideo from "../../components/FooterVideo";
import { StartRating } from "../../components/Global";
import { MainLayout } from "../../components/Layouts/MainLayout";
import NavBar from "../../components/NavBar";

export default function index(){
	return (
        <>

            <MainLayout>



                <div className="w-full flex justify-center items-center flex-col">
                    <div className="bg-white w-9/12 grid grid-cols-3 gap-10  py-10">
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
                                <p className="bg-blue text-center py-4 px-2 rounded-lg mb-5 font-bold tracking-wide cursor-pointer hover:bg-green">Empezar curso</p>
                            </div>
                        </aside>
                    </div>

                        <div className=" bg-black h-96 w-9/12 mb-10">
                            <h1>Hola mundo</h1>
                        </div>

                </div>


            </MainLayout>
        </>
    );
};


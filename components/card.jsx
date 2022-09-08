import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Script from 'next/script'

export const Card = () => {
    const value = 5;
	return (
        <>
            <article className="w-4/5 lg:w-1/3 m-5 flex flex-col border rounded-xl box-border">
                {/* Top card */}
                <section className="rounded-tr-xl rounded-tl-xl bg-[url('https://victorroblesweb.es/wp-content/uploads/2020/03/Aprender-CSS-en-15-minutos.png')] bg-cover ">

                    {/* Text container */}
                    <div className="p-5 backdrop-blur-xl bg-white-1/2 rounded-tr-xl rounded-tl-xl">
                        <p className="mb-5 text-sm text-white/80 z-10 font-thin uppercase tracking-widest">Curso</p>
                        <div className="flex place-items-center mb-5">
                            <picture className="w-1/4">
                                <img className="w-14 h-14 rounded-full" src="https://picsum.photos/seed/picsum/200/300" alt="Imagen del curso" />
                            </picture>
                            <h3 className="ml-5 text-base w-3/4 text-black font-bold">Nombre del curso</h3>
                        </div>
                        <div className="mb-5 flex place-items-center">
                            <p className="mr-2 text-white/80 font-bold">4</p>
                            <FontAwesomeIcon icon={ faStar } className="text-[#ffd60a]" />
                            <FontAwesomeIcon icon={ faStar } className="text-[#ffd60a]" />
                            <FontAwesomeIcon icon={ faStar } className="text-[#ffd60a]" />
                            <FontAwesomeIcon icon={ faStar } className="text-[#ffd60a]" />
                        </div>

                        <p className="text-sm text-white/80 font-bold">2 horas</p>
                    </div>
                </section>

                {/* Bottom card */}
                <section className=" rounded-br-xl rounded-bl-xl p-5 flex flex-col">
                    <p className="font-bold text-small tracking-wide mb-4">Profesor</p>
                    <a className="border w-full text-center py-2 rounded-md font-bold flex justify-center">
                        <span>Button</span>
                        <span className="ml-2 "> <FontAwesomeIcon icon={faArrowRight}/> </span> 
                    </a>
                
                </section>

            </article>
        </>
    );
};

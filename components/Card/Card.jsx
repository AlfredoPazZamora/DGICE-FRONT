import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Image from 'next/image'
import { StartRating } from "../Global";

export const Card = ({course: {id, name_course, image, author, credits, rating, area, duration, description}}) => {


	return (
        <>
            <article className="w-full lg:max-w-xs flex flex-col rounded-xl box-border shadow-xl ">
                <section className="rounded-tr-xl rounded-tl-xl bg-[url('https://victorroblesweb.es/wp-content/uploads/2020/03/Aprender-CSS-en-15-minutos.png')] bg-cover ">

                    <div className="p-5 backdrop-blur-xl bg-white-1/2 rounded-tr-xl rounded-tl-xl">
                        <p className="mb-5 text-sm text-white/80 z-10 font-thin uppercase tracking-widest">Curso</p>
                        <div className="flex place-items-center mb-5">
                            <picture className="w-1/4">
                                <Image 
                                    src={image} 
                                    alt={`Imagen del curso ${name_course}`} 
                                    width={75}
                                    height={75}
                                    loading="lazy"
                                    className="rounded-full"
                                />
                            </picture>
                            <h3 className="ml-3 text-small w-3/4 text-black font-bold ">{name_course}</h3>
                        </div>
                        <div className="mb-5 flex place-items-center">
                            <StartRating rating={rating}/>
                        </div>

                        <p className="text-sm text-white/80 font-bold">{duration}</p>
                    </div>
                </section>

                <section className=" rounded-br-xl rounded-bl-xl p-5 flex flex-col bg-white">
                    <p className="text-xl mb-4">{author}</p>
                    <a className="border w-full text-center py-3 rounded-md font-bold flex justify-center content-center">
                        <span>Button</span>
                        <span className="ml-2 self-center"> <FontAwesomeIcon icon={faArrowRight}/> </span> 
                    </a>
                
                </section>

            </article>
        </>
    );
};

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faBuildingColumns } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import Image from 'next/image'
import { StartRating } from "../Global";

export const Card = ({course: {id, name_course, author, credits, rating, area, duration, description, img}}) => {

	return (
        <>
            <article className="w-full lg:max-w-sm flex flex-col rounded-xl box-border shadow-xl">
                <div className="relative inline-block text-center rounded-t-xl">
                    <Image 
                        src={img} 
                        alt={`Imagen del curso ${name_course}`} 
                        layout="responsive"
                        width='100%'
                        height={70}
                        loading="lazy"
                        className="rounded-t-xl contrast-50 "
                    />
                    
                    <p className="absolute top-3 left-5 bg-blue px-4 rounded-lg text-white">{area}</p>
                    <div className="absolute bottom-0 w-full flex justify-between px-5 py-1">
                        <span className="text-white font-bold"><FontAwesomeIcon icon={faBuildingColumns} className="mr-1"/> {credits > 1 ? `${credits} horas` : `${credits} hora`}</span>
                        <span className="text-yellow font-bold"><FontAwesomeIcon icon={faStar} className="mr-1"/> {rating}</span>
                    </div>
                </div>

                <section className=" rounded-br-xl rounded-bl-xl p-5 flex flex-col bg-white h-full justify-between">
                    <div>
                        <h3 className="text-xl font-bold">{name_course}</h3>

                    </div>

                    <div>
                        <p className="text-md mb-4">Por {author}</p>
                        <a className="border border-blue text-blue w-full  py-3 rounded-md font-bold flex justify-center content-center hover:bg-blue hover:text-white cursor-pointer">
                            <span>Empezar ahora</span>
                        </a>
                    </div>
                
                </section>

            </article>
        </>
    );
};

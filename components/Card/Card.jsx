import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faArrowRight } from "@fortawesome/free-solid-svg-icons";

export const Card = ({props}) => {
	return (
        <>
            <article className="w-full lg:max-w-xs flex flex-col rounded-xl box-border shadow-xl">
                {/* Top card */}
                <section className="rounded-tr-xl rounded-tl-xl bg-[url('https://victorroblesweb.es/wp-content/uploads/2020/03/Aprender-CSS-en-15-minutos.png')] bg-cover ">

                    {/* Text container */}
                    <div className="p-5 backdrop-blur-xl bg-white-1/2 rounded-tr-xl rounded-tl-xl">
                        <p className="mb-5 text-sm text-white/80 z-10 font-thin uppercase tracking-widest">Curso</p>
                        <div className="flex place-items-center mb-5">
                            <picture className="w-1/4">
                                <img className="w-14 h-14 rounded-full" src={props.image} alt="Imagen del curso" />
                            </picture>
                            <h3 className="ml-3 text-base w-3/4 text-black font-regular ">{props.title}</h3>
                        </div>
                        <div className="mb-5 flex place-items-center">
                            <p className="mr-2 text-white/80 font-bold">4</p>
                            <FontAwesomeIcon icon={ faStar } className="text-[#ffd60a]" />
                            <FontAwesomeIcon icon={ faStar } className="text-[#ffd60a]" />
                            <FontAwesomeIcon icon={ faStar } className="text-[#ffd60a]" />
                            <FontAwesomeIcon icon={ faStar } className="text-[#ffd60a]" />
                        </div>

                        <p className="text-sm text-white/80 font-bold">{props.duration}</p>
                    </div>
                </section>

                {/* Bottom card */}
                <section className=" rounded-br-xl rounded-bl-xl p-5 flex flex-col bg-white">
                    <p className="font-bold text-small tracking-wide mb-4">{props.teacher}</p>
                    <a className="border w-full text-center py-3 rounded-md font-bold flex justify-center content-center">
                        <span>Button</span>
                        <span className="ml-2 self-center"> <FontAwesomeIcon icon={faArrowRight}/> </span> 
                    </a>
                
                </section>

            </article>
        </>
    );
};

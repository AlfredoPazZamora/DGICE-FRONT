import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faBuildingColumns } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import Image from 'next/image'
import { StartRating } from "../Global";
import { useRouter } from "next/router";

export const Card = ({course: {id, title, author, creditHours, score, category, hours, image}}) => {

    const router = useRouter();
    const onClick = () => {
        router.push(`/course/${id}`);
    }
	return (
        <>
            <article className="w-full lg:max-w-sm flex flex-col rounded-xl box-border shadow-xl">
                <div className="relative inline-block text-center rounded-t-xl">
                    <Image 
                        src='https://picsum.photos/200/300' 
                        alt={`Imagen del curso ${title}`} 
                        layout="responsive"
                        width='100%'
                        height={70}
                        loading="lazy"
                        className="rounded-t-xl contrast-50 "
                    />
                    
                    <p className="absolute top-3 left-5 bg-blue px-4 rounded-lg text-white">{category.name}</p>
                    <div className="absolute bottom-0 w-full flex justify-between px-5 py-1">
                        <span className="text-white font-bold"><FontAwesomeIcon icon={faBuildingColumns} className="mr-1"/> {creditHours > 1 ? `${creditHours} horas` : `${creditHours} hora`}</span>
                        <span className="text-yellow font-bold"><FontAwesomeIcon icon={faStar} className="mr-1"/> {score}</span>
                    </div>
                </div>

                <section className=" rounded-br-xl rounded-bl-xl p-5 flex flex-col bg-white h-full justify-between">
                    <div>
                        <h3 className="text-xl font-bold">{title}</h3>

                    </div>

                    <div>
                        <p className="text-md mb-4">Por {`${author.first_name} ${author.last_name}`}</p>
                        <a className="border border-blue text-blue w-full  py-3 rounded-md font-bold flex justify-center content-center hover:bg-blue hover:text-white cursor-pointer" onClick={onClick}>
                            <span>Empezar ahora</span>
                        </a>
                    </div>
                
                </section>

            </article>
        </>
    );
};

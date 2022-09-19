import { useState } from 'react';
import { Card } from './Card';

const values = [
    {
        id: 1,
        title: "Curso de CSS",
        image: "https://picsum.photos/200/300",
        teacher: "Victor Robles",
        rating: 4,
        duration: "2 horas",
    },
    {
        id: 2,
        title: "Curso de HTML",
        image: "https://picsum.photos/200/200",
        teacher: "Victor Robles",
        rating: 4,
        duration: "3 horas",
    },
    {
        id: 3,
        title: "Curso de JS",
        image: "https://picsum.photos/200/400",
        teacher: "Victor Robles",
        rating: 4,
        duration: "4 horas",
    },
    {
        id: 4,
        title: "Curso de SASS",
        image: "https://picsum.photos/300/500",
        teacher: "Victor Robles",
        rating: 4,
        duration: "5 horas",
    },
    {
        id: 5,
        title: "Curso de React",
        image: "https://picsum.photos/300/700",
        teacher: "Victor Robles",
        rating: 4,
        duration: "6 horas",
    }
];
export const ListCards = () => {

	return (
        <>
            {/* List cards */}
            <section className='grid w-full gap-8 bg-white grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 justify-items-center'>

                {values.map((value) => (
                    <Card key={value.id} props={value}/>
                ))}
                
            </section>
        </>
    );
};

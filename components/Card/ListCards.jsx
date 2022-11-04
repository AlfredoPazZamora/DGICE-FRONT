import { Card } from './Card';

/*
    id
    title
    imagen
    autor
    horas de acreditación
    modulos
*/

export const ListCards = ({courses}) => {
	return (
        <>
            {/* List cards */}
            <section className='gap-4 w-full bg-white grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4'>

                {
                    courses.map((course) => (
                        <Card key={course.id} course={course}/>
                    ))
                }
                
            </section>
        </>
    );
};

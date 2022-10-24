
import { Card } from './Card'

export const ListCards = () => {
	return (
        <>
            {/* List cards */}
            <section className='grid w-full gap-8 grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center'>
                <Card />
                <Card />
                <Card />
                <Card />
            </section>
        </>
    );
};

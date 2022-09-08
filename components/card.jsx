
export const Card = () => {
	return (
        <>
            <article className="w-4/5 lg:w-1/3 m-5 flex flex-col border rounded-xl box-border">
                {/* Top card */}
                <section className="rounded-tr-xl rounded-tl-xl bg-[url('https://victorroblesweb.es/wp-content/uploads/2020/03/Aprender-CSS-en-15-minutos.png')] bg-cover ">

                    {/* Text container */}
                    <div className="p-5 backdrop-blur-xl bg-white-1/2 rounded-tr-xl rounded-tl-xl">
                        <p className="mb-5 text-sm text-white z-10 font-thin uppercase tracking-widest">Curso</p>
                        <div className="flex place-items-center mb-5">
                            <picture className="w-1/4">
                                <img className="w-14 h-14 rounded-full" src="https://picsum.photos/seed/picsum/200/300" alt="Imagen del curso" />
                            </picture>
                            <h3 className="ml-5 text-base w-3/4">Nombre del curso</h3>
                        </div>
                        <div className="mb-5">
                            <p>Stars</p>
                        </div>

                        <p className="text-sm text-gray">2 horas</p>
                    </div>
                </section>

                {/* Bottom card */}
                <section>
                    <p>Profesor</p>
                    <a>Button</a>
                </section>

            </article>
        </>
    );
};

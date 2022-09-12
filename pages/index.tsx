import type { NextPage } from "next";
import Image from "next/image";
import NavBar from "../components/NavBar";
import { Card } from "../components/Card/Card";
import { ListCards } from "../components/Card/ListCards";

const Home: NextPage = () => {
  return (
    <>
      <NavBar />

      <main>
        <section className="w-screen h-full flex flex-col justify-center items-center px-9 lg:flex-row">
          <article className="w-full py-4 px-8 text-center lg:mx-4 lg:text-start">
            <div>
              <p className="text-h3 md:text-h1 py-4 font-medium">
                La calidad de estudio la encuentras aqui
              </p>
              <p className="text-h5 md:text-h3 py-4 font-thin">
                Con más de 100 cursos impartidos por los mejores profesores de la
                Universidad de Colima.
              </p>
              <div className="text-white text-xl py-4 border border-rose-500">
                <button
                  className="border border-blue bg-blue focus-within:shadow-lg text-center hover:bg-blue transition duration-500 ease-in-out rounded-2xl px-12 md:px-8 py-2.5"
                  type="button"
                >
                  Empieza ahora
                </button>
              </div>
            </div>
          </article>

          <article className="py-4 px-9">
            <Image src="/img/mainLogo.svg" width={850} height={900} />
          </article>
        </section>

        <section className="bg-slate-100 w-screen lg:px-9 py-6">
          <div className="px-12 w-screen h-full lg:text-start text-center text-h3 ">
            <p>Cursos populares</p>
          </div>

          <div className="flex md:items-center px-12 py-8 font-semibold">
            <ListCards />
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;

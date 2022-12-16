import Link from "next/link";
import Image from "next/image";
import ButtonNav from "./buttonNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {

  return (
    <>
      <nav className="flex flex-nowrap justify-between items-center bg-white py-4 drop-shadow-md font-inter">
        <div className="flex items-center mx-4 h-24">
          <div className="hidden lg:block">
            <Link href="https://portal.ucol.mx/dgice/">
              <a>
                <Image src="/img/circle.png" width="100%" height="100%" />
              </a>
            </Link>
          </div>
          <div className="mx-8 text-xl hover:underline">
            <Link href="/courses">
              <a>Cursos</a>
            </Link>
          </div>
        </div>
        <div className="flex flex-nowrap items-center h-24 mr-4">
          <div className="hidden md:block ml-4">
            <FontAwesomeIcon
              className="absolute py-3 md:ml-40 lg:ml-64"
              icon={faMagnifyingGlass}
            />
            <input
              className="rounded-3xl border border-black focus-within:shadow-lg px-5 py-2.5 text-sm md:text-xs lg:w-72 shadow-md"
              type="text"
              id="search"
              name="search"
              placeholder="Search"
            />
          </div>
          <div className="text-xs lg:text-sm mx-4">
            <ButtonNav></ButtonNav>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;

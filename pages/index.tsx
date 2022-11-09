
import type { NextPage } from "next";
import { LandingPage } from "../components/LandingPage/LandingPage";
import { MainLayout } from "../components/Layouts/MainLayout"
import NavBar from "../components/NavBar/navBar";


const Home: NextPage = () => {
  return (
    <>
      <NavBar></NavBar>

      <LandingPage></LandingPage>
    </>
  );
};


export default Home;

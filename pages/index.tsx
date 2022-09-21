import type { NextPage } from "next";
import NavBar from "../components/NavBar";
import { LandingPage } from "../components/LandingPage/LandingPage";

const Home: NextPage = () => {
  return (
    <>
      <NavBar />
      <LandingPage />
    </>
  );
};

export default Home;

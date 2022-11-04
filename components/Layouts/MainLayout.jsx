import Head from "next/head";
import NavBar from "../NavBar/navBar";
import FooterVideo from "../FooterComponent";
import { LandingPage } from "../LandingPage/LandingPage";

export const MainLayout = ({ children }) => {
	return (
        <>
            <Head>
                <title>"DGICE Academy"</title>
            </Head>

            <NavBar />

            <main className="w-full flex justify-center">
                { children }
            </main>

            {/* <FooterVideo /> */}

        </>
    );
};

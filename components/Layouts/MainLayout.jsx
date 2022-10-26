import Head from "next/head";
import NavBar from "../NavBar";
import FooterVideo from "../FooterVideo";

export const MainLayout = ({ children }) => {
	return (
        <>
            <Head>
                <title>"DGICE Academy"</title>
            </Head>

            {/* <NavBar /> */}

            <main className="w-full flex justify-center">
                { children }
            </main>

            <FooterVideo />

        </>
    );
};

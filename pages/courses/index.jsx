import Head from "next/head";
import React from "react";
import { Card } from "../../components/Card/Card";

import { ListCards } from '../../components/Card/ListCards'

const allCourses = () => {
	return (
        <>
            <Head>
                <title>Courses</title>

            </Head>


            <main className=" w-full border flex justify-center">

                <div className="w-full lg:w-10/12 lg:flex ">
                    <aside className=" bg-white border rounded-xl h-fit mt-5 lg:sticky lg:top-5 hidden lg:flex lg:w-2/12 lg:justify-center lg:p-5">
                        <p>Lateral</p>
                    </aside>

                    <section className="w-full p-5 lg:w-10/12 bg-white flex justify-center">
                        <ListCards />
                    </section>
                </div>

            </main>

        </>
    );
};

export default allCourses;

import Head from "next/head";
import React from "react";

import { ListCards } from '../../components/Card/ListCards'

const allCourses = () => {
	return (
        <>
            <Head>
                <title>Courses</title>

            </Head>


            <main className="flex flex-col lg:flex-row ">
                <aside className="lg:flex bg-blue hidden lg:w-2/12 lg:justify-center lg:p-5">
                    <p>Lateral</p>
                </aside>

                <section className="w-full lg:w-10/12">
                    <ListCards />
                </section>

            </main>

        </>
    );
};

export default allCourses;

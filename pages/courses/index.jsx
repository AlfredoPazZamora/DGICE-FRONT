import Head from "next/head";
import React from "react";
import { ListCards } from "../../components/Card";
import { MainLayout } from "../../components/Layouts/MainLayout";

import fsPromise from "fs/promises";
import path from "path";

const allCourses = ({courses}) => {
	return (
        <>
            <MainLayout>

                <div className=" mx-5 my-10 lg:m-10 w-full lg:flex  bg-white">
                    <aside className=" bg-white border rounded-xl hidden h-fit lg:sticky lg:top-5 lg:flex lg:w-72 lg:mr-5 lg:justify-center lg:p-5">
                        <p>Lateral</p>
                    </aside>

                    <section className="w-full bg-white flex justify-center">
                        <ListCards courses={courses}/>
                    </section>
                </div>

            </MainLayout>

            

        </>
    );
};

export const getStaticProps = async (ctx) => {
    const filePath = path.join(process.cwd(), "data.json");
    const jsonData = await fsPromise.readFile(filePath);
    const data = JSON.parse(jsonData);

    const courses = data.map((course, index) => ({
        ...course,
        img: `https://picsum.photos/id/${index + 1}/200/300`,
    }))
    
    return {
        props: {
            courses
        },
    };
}

export default allCourses;

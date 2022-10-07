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

                <div className="w-full lg:w-11/12 lg:flex my-10">
                    <aside className=" bg-white border rounded-xl h-fit lg:sticky lg:top-5 hidden lg:flex lg:w-2/12 lg:justify-center lg:p-5">
                        <p>Lateral</p>
                    </aside>

                    <section className="w-full px-5 lg:w-10/12 bg-white flex justify-center">
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
    
    console.log(data)
    return {
        props: {
            courses: data
        },
    };
}

export default allCourses;

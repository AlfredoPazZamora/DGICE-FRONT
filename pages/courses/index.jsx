import Head from "next/head";
import React from "react";
import { Card } from "../../components/Card/Card";

import { ListCards } from '../../components/Card/ListCards'
import { MainLayout } from "../../components/Layouts/MainLayout";

const allCourses = () => {
	return (
        <>
            <MainLayout>

                <div className="w-full bg-blue lg:w-11/12 lg:flex ">
                    <aside className=" bg-white border rounded-xl h-fit mt-5 lg:sticky lg:top-5 hidden lg:flex lg:w-2/12 lg:justify-center lg:p-5">
                        <p>Lateral</p>
                    </aside>

                    <section className="w-full p-5 lg:w-10/12 bg-white flex justify-center">
                        <ListCards />
                    </section>
                </div>

            </MainLayout>

            

        </>
    );
};

export default allCourses;

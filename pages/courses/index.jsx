import { useQuery } from "@apollo/client";
import { ListCards } from "../../components/Card";
import { MainLayout } from "../../components/Layouts/MainLayout";
import { GET_COURSES } from "../../src/gpl/queryCourse";

const allCourses = () => {
    const { data, loading, error } = useQuery(GET_COURSES);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

	return (
        <>
            <MainLayout >

                <div className=" mx-5 my-10 lg:m-10 w-full lg:flex  bg-white">
                    <aside className=" bg-white border rounded-xl hidden h-fit lg:sticky lg:top-5 lg:flex lg:w-72 lg:mr-5 lg:justify-center lg:p-5">
                        <p>Lateral</p>
                    </aside>

                    <section className="w-full bg-white flex justify-center">
                        <ListCards courses={data.getAllCourses}/> 
                    </section>
                </div>

            </MainLayout>
        </>
    );
};


export default allCourses;
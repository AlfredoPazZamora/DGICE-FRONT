import { useQuery } from "@apollo/client";
import { ListCards } from "../../components/Card";
import { useState } from "react";
import { MainLayout } from "../../components/Layouts/MainLayout";
import { GET_COURSES, GET_CATEGORIES } from "../../src/gpl/queryCourse";

const allCourses = () => {

    const [globalUser, setGlobalUser] = useState()
    const { data, loading, error } = useQuery(GET_COURSES);
    if (loading) return <p>Loading...</p>;
    if (error) console.log(error);  

    async function onLoad() {
        await fetch("http://dgice-academy.ucol.mx:3000/userSession", {
          method: "GET",
          mode: "cors",
        })
          .then((res) => res.json())
          .then((user) => {
            const isLogged = localStorage.getItem("name_id");
            setGlobalUser(user.attributes.displayName[0]);
            if (isLogged) {
              console.log('Logeado');
              return;
            } else {
              console.log(user);
              localStorage.setItem("name_id", user.name_id);
              localStorage.setItem("session_index", user.session_index);
              localStorage.setItem("displayName", user.attributes.displayName[0]);
              localStorage.setItem("uCorreo", user.attributes.uCorreo[0]);
              localStorage.setItem("uTipo", user.attributes.uTipo[0]);
              localStorage.setItem("uTrabajador", user.attributes.uTrabajador[0]);
              localStorage.setItem("uCuenta", user.attributes.uCuenta[0]);
              return;
            }
          })
          .catch(console.log);
      
        return;
    }
    
    onLoad();
    if (error) return <p>Error :(</p>;

	return (
        <>
            <MainLayout nameUser={globalUser}>

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
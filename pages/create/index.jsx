import { useMutation, useQuery } from "@apollo/client";
import React from "react";
import { DashboardLayout } from '../../components/Layouts'
import { GET_USER } from "../../src/gpl/queryUser";
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { CREATE_COURSE } from "../../src/gpl/mutationCourse";
import { useRouter } from "next/router";
import { GET_CATEGORIES } from "../../src/gpl/queryCategory";


const index = () => {

    const router = useRouter();

    const [createCourse] = useMutation(CREATE_COURSE);

    const formik = useFormik({
        initialValues: {
            title: '',
            description: '',
            image: '',
            hours: 0,
            category: '',
            creditHours: 0
        },
        validationSchema: Yup.object({
            title: Yup.string()
                .required('El título del curso es obligatorio'),
            description: Yup.string()
                .required('La descripción del curso es obligatoria'),
            image: Yup.string()
                .required('La imagen del curso es obligatoria'),
            hours: Yup.number()
                .required('Las horas del curso son obligatorias'),
            category: Yup.string()
                .required('La categoría del curso es obligatoria'),
            creditHours: Yup.number()
                .required('Las horas de crédito del curso son obligatorias'),
        }),
        onSubmit: async values => {
            console.log(values);
            
            const { title, description, image, hours, category, creditHours } = values;
            const author = "63127f02f9f6fe8f2fa64776"

            try {
                await createCourse({
                    variables: {
                        course: {
                            title,
                            description,
                            image,
                            hours,
                            category,
                            author,
                            creditHours
                        }
                    }
                });
                router.push('/admin');

            } catch (error) {
                console.log(error)
            }
        }
    });

    const { data, loading, error } = useQuery(GET_CATEGORIES);
    if(loading) return <p>Loading...</p>
    if(error) return <p>Error :(</p>

    const { getAllCategory } = data;

	return (
        <>
            <h1 className="text-4xl font-light ">Crear curso</h1>

            <div className="flex justify-center mt-5 w-full">
                <div className="w-full max-w-7xl">
                    <form 
                        className="bg-white shadow-md px-8 py-6 mb-4"
                        onSubmit={formik.handleSubmit}
                    >

                        <fieldset className="grid grid-cols-2 gap-5">
                            <legend className="text-2xl font-bold text-black/75 border-b-2 border-black/40 col-span-2 w-full mb-5">Información general</legend>


                            <div className="mb-4">
                                <label className="block text-lg font-bold mb-2 text-black" htmlFor="title">
                                    Título
                                </label>
                                <input 
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                    id="title" 
                                    type="text" 
                                    placeholder="Título"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.title}
                                />    

                                {
                                    formik.touched.title && formik.errors.title ? (
                                        <div className="my-2 bg-red/5 border-l-4 border-red text-red/70 p-4">
                                            <p className="font-bold">Error</p>
                                            <p>{formik.errors.title}</p>
                                        </div>
                                    ) : null
                                }

                            </div>

                            

                            <div className="mb-4">
                                <label className="block text-lg font-bold mb-2 text-black" htmlFor="image">
                                    Imagen (URL)
                                </label>
                                <input 
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                    id="image" 
                                    type="text" 
                                    placeholder="Imagen" 
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.image}
                                />    
                                {
                                    formik.touched.image && formik.errors.image ? (
                                        <div className="my-2 bg-red/5 border-l-4 border-red text-red/70 p-4">
                                            <p className="font-bold">Error</p>
                                            <p>{formik.errors.image}</p>
                                        </div>
                                    ) : null
                                }
                            </div>


                            <div className="mb-4">
                                <label className="block text-lg font-bold mb-2 text-black" htmlFor="hours">
                                    Horas de dedicación
                                </label>
                                <input 
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                    id="hours" 
                                    type="number" 
                                    placeholder="Horas de dedicación"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.hours}
                                />    
                                {
                                    formik.touched.hours && formik.errors.hours ? (
                                        <div className="my-2 bg-red/5 border-l-4 border-red text-red/70 p-4">
                                            <p className="font-bold">Error</p>
                                            <p>{formik.errors.hours}</p>
                                        </div>
                                    ) : null
                                }
                            </div>


                            <div className="mb-4">
                                <label className="block text-lg font-bold mb-2 text-black" htmlFor="creditHours">
                                    Horas culturales
                                </label>
                                <input 
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                    id="creditHours" 
                                    type="number" 
                                    placeholder="Horas de acreditación"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.creditHours}
                                />    
                                {
                                    formik.touched.creditHours && formik.errors.creditHours ? (
                                        <div className="my-2 bg-red/5 border-l-4 border-red text-red/70 p-4">
                                            <p className="font-bold">Error</p>
                                            <p>{formik.errors.creditHours}</p>
                                        </div>
                                    ) : null
                                }
                            </div>


                            <div className="mb-4">
                                <label className="block text-lg font-bold mb-2 text-black" htmlFor="category">
                                    Area educativa
                                </label>

                                <select
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="category"
                                    value={formik.values.category}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                >
                                    {
                                        getAllCategory.map(category => (
                                            <option key={category.id} value={category.id}>{category.name}</option>
                                        ))
                                    }
                                </select>

                                {/* <input 
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                    id="category" 
                                    type="text" 
                                    placeholder="Área"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.category}
                                />     */}
                                {
                                    formik.touched.category && formik.errors.category ? (
                                        <div className="my-2 bg-red/5 border-l-4 border-red text-red/70 p-4">
                                            <p className="font-bold">Error</p>
                                            <p>{formik.errors.category}</p>
                                        </div>
                                    ) : null
                                }
                            </div>


                            <div className="mb-4 ">
                                <label className="block text-lg font-bold mb-2 text-black" htmlFor="description">
                                    Descripción
                                </label>
                                <textarea 
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                    id="description" 
                                    type="text" 
                                    placeholder="Descripción"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.description}

                                />
                                {
                                    formik.touched.description && formik.errors.description ? (
                                        <div className="my-2 bg-red/5 border-l-4 border-red text-red/70 p-4">
                                            <p className="font-bold">Error</p>
                                            <p>{formik.errors.description}</p>
                                        </div>
                                    ) : null
                                }
                            </div>

                        </fieldset>

                        {/* <fieldset className="grid grid-cols-2 gap-5">
                            <legend className="text-2xl font-bold text-black/75 border-b-2 border-black/40 col-span-2 w-full mb-5">Información de módulos</legend>



                            <div className="col-span-2 flex justify-between items-center gap-5">
                                <input 
                                    className="shadow appearance-none border rounded grow py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                    id="title-module" 
                                    name="title-module" 
                                    type="text" 
                                    placeholder="Módulo" 
                                />

                                <button type="button" className="flex justify-center items-center gap-2 border px-3 py-2 rounded-lg hover:bg-blue hover:text-white hover:border-white" onClick={addModule}>
                                    <FontAwesomeIcon icon={faPlus} className="text-sm"/>
                                    <span>Agrega módulo</span>
                                </button>
                            </div>
                            
                            <div className="mb-4 col-span-2 ">

                                {
                                    module.map((item, index) => (
                                        <div className="mb-4 col-span-2 w-full flex justify-between items-center gap-5" key={index}>
                                            <label className="w-max text-lg font-bold mb-2 text-black" htmlFor="title-module">
                                                Módulo {index + 1}
                                            </label>
                                            <input className="shadow appearance-none border rounded grow py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id={index} type="text" placeholder={item.title} readOnly/>
                                            <button type="button" className="flex justify-center items-center gap-2 border px-3 py-2 rounded-lg hover:bg-blue hover:text-white hover:border-white"  >
                                                <FontAwesomeIcon icon={faTrash} className="text-sm"/>
                                            </button>
                                        </div>
                                    ))
                                }


                            </div>
                        
                        </fieldset> */}




                        <div className="col-span-2 mb-4 flex justify-center">

                            <input 
                                type="submit"
                                className="bg-blue_green w-96 mt-5 p-2 text-white uppercase hover:bg-blue_light cursor-pointer rounded-lg"
                                value="Crear curso"
                            />
                        </div>


                    </form>
                </div>
            </div>

        </>
    );
};


export default index;

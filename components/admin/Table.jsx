import { useQuery } from '@apollo/client'
import { GET_COURSES } from '../../src/gpl/queryCourse'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

export const Table = ({idUser}) => {

    const {data, loading, error} = useQuery(GET_COURSES);

    if (error) return <p>Error :(</p>
    if (loading) return <p>Loading...</p>

    // '63127f02f9f6fe8f2fa64776'
    const coursesByIdAuthor = data.getAllCourses.filter(course => course.author.id === idUser);
    
	return (
		<>
			{
                coursesByIdAuthor.map((course) => (
                    <tr className="hover:bg-gray-50" key={course.id}>
                        <th className="flex gap-3 px-6 py-4 font-normal text-gray-900 items-center">
                            <div className="relative h-10 w-10">
                                <FontAwesomeIcon icon={faUser} className="text-4xl"/>
                                <span className="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-blue_green"></span>
                            </div>
                            <div className="text-sm">
                                <div className="font-medium text-gray-700">{ `${course.author.first_name} ${course.author.last_name}` }</div>
                            </div>
                        </th>
                        <td className="px-6 py-4">
                            <span className="inline-flex items-center content-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                                <span className="h-1.5 w-1.5 rounded-full bg-green-600">{course.creditHours}</span>
                            </span>
                        </td>
                        <td className="px-6 py-4">{course.title}</td>
                        <td className="px-6 py-4">
                            <div className="flex gap-2">
                                <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600">
                                    {course.category.name}
                                </span>
                            </div>
                        </td>
                        <td className="px-6 py-4">
                            <div className="flex justify-end gap-4">
                                <FontAwesomeIcon icon={faTrash} className="text-2xl text-blue hover:text-red hover:cursor-pointer"/>
                                <FontAwesomeIcon icon={faPenToSquare} className="text-2xl text-green hover:cursor-pointer"/>
                            </div>
                        </td>
                    </tr>
                ))
            }
		</>
	);
};

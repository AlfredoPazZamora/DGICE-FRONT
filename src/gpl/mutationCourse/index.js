import { gql } from '@apollo/client';

const CREATE_COURSE = gql`
    mutation ($course: CourseInput) {
        createCourse(course: $course) {
            status
            msg            
        }
    }
`;

// const CREATE_COURSE = gql`
//     mutation ($title: String!, $description: String!, $image: String!, $hours: Int!, $category: String!, $author: String!, $creditHours: Int!) {
//         createCourse(title: $title, description: $description, image: $image, hours: $hours, category: $category, author: $author, creditHours: $creditHours) {
//             title
//             description
//             image
//             hours
//             category
//             author
//             creditHours
//         }
//     }
// `;

export { CREATE_COURSE };
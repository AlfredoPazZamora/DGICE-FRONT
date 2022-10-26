import { gql } from "@apollo/client";

const GET_COURSES = gql`
	query {
		getAllCourses {
			id
			title
			image
			hours
			likes
			author {
				first_name
				last_name
				id
			}
			creditHours
			score
			ratings
			category {
				id
				name
			}
		}
	}
`;

export { GET_COURSES };

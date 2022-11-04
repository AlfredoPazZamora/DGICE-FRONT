import { gql } from "@apollo/client";

const GET_COURSES = gql`
	query {
		getAllCourses {
			id
			title
			hours
			category {
				name
				id
			}
			ratings
			score
			creditHours
			author {
				id
				first_name
				last_name
			}
		}
	}
`;

const GET_COURSE = gql`
	query ($id: ID!) {
		getCourse(id: $id) {
			id
			title
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

export { GET_COURSES, GET_COURSE };

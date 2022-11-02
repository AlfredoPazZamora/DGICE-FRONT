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

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
			description
			image
			hours
			category {
				id
				name
			}
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

const GET_COURSE_BY_NAME = gql`
	query ($name: String) {
		getCourseByName(name: $name) {
			id
			title
			description
			image
			hours
			category {
				id
				name
			}
			creditHours
			score
			author {
				id
				first_name
				last_name
			}
		}
	}
`;

export { GET_COURSES, GET_COURSE, GET_COURSE_BY_NAME };

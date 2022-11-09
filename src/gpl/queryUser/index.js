import { gql } from "@apollo/client";

const GET_USERS = gql`
	query {
		getAllUsers {
			id
			first_name
			last_name
			mail
			No_account
			role {
				id
				name
			}
		}
	}
`;

const GET_USER = gql`
	query ($id: ID!) {
		getUser(id: $id) {
			id
			first_name
			last_name
			role {
				id
				name
			}
		}
	}
`;

export { GET_USERS, GET_USER };

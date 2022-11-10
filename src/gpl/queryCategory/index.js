import { gql } from "@apollo/client";

const GET_CATEGORIES = gql`
    query {
        getAllCategory {
            id
            name
        }
    }
`;

export { GET_CATEGORIES };
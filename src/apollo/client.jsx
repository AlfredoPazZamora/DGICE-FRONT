import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
	uri: "http://dgice-academy.ucol.mx:3000/graphql",
	cache: new InMemoryCache(),
});

export default client;

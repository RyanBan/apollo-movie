import { ApolloClient, InMemoryCache } from "@apollo/client";

const cashe = new InMemoryCache();

const client = new ApolloClient({
    cache: cashe,
    uri: "http://localhost:4000/"
})

export default client
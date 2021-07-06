import { ApolloClient, InMemoryCache } from "@apollo/client";

const cashe = new InMemoryCache();

const client = new ApolloClient({
    cache: cashe,
    uri: "https://movie-ql.herokuapp.com/"
})

export default client;
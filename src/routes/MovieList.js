import React from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Movie from "../components/Movie";
import Navigation from "../components/Navigation";

import loadingGif from "../assets/loading.gif"

const GET_MOVIES = gql`
  query getMovie($limit: Int!, $genre: String!) {
    movies(limit: $limit, genre: $genre) {
      id
      medium_cover_image
    }
  }
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: black;
`;
const Header = styled.header`
  background-color: #111111;
  height: 45vh;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const Title = styled.h1`
  font-size: 60px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const Loading = styled.div`
  height: 60vh;
  width: 100%;
  background-color: black;
  color: white;
  font-size: 30px;
  display: flex;
  justify-content: center;
`;

const LoadingGifBox = styled.div`
  position: relative;
  top: -250px;
  height: 500px;
  width: 200px;
  background: url(${loadingGif}) no-repeat;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const Movies = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  min-width: 560px;
  max-width: 1100px;
  position: relative;
  top: -50px;
`;

const MovieList = () => {
    const { genreId } = useParams();
    console.log(genreId)
    const { loading, data } = useQuery(GET_MOVIES, {
      variables: { limit: 48, genre: genreId },
    });
    console.log(data);
    return (
      <Container>
        <Navigation/>
        <Header>
          <Title>{genreId}</Title>
        </Header>
        {loading && <Loading><LoadingGifBox>...Loading</LoadingGifBox></Loading>}

        <Movies>
          {data?.movies?.map(m => (
            <Movie key={m.id} id={m.id} bg={m.medium_cover_image} />
          ))}
        </Movies>
      </Container>
    );
}

export default MovieList
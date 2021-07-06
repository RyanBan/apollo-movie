import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  height: 400px;
  width: 250px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  overflow: hidden;
  border-radius: 7px;
  margin: 15px 10px;
`;

const Poster = styled.div`
  background-image: url(${(props) => props.bg});
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center;
`;

const Movie = ({ id, bg }) => {
  return (
    <Container>
      <Link to={`/detail/${id}`}>
        <Poster bg={bg} />
      </Link>
    </Container>
  );
};

export default Movie;

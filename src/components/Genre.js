import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #111111;
  color: white;
  margin: 10px;
  height: 100px;
  width: 200px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  border-radius: 7px;
`;
const Genre = (props) => {
  return (
    <Link to={`/genre/${props.genreName}`}>
      <Container>
        {props.genreName}
      </Container>
    </Link>
  );
};

export default Genre;

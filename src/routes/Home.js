import React, { useState } from "react";
import styled from "styled-components";
import Navigation from "../components/Navigation";

import theather from "../assets/theather.jpg"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: auto;
  height: 100vh;
  background-color: grey;
`;

const Body = styled.div`
  background-image: url(${theather});
  background-size: cover;
  background-position: center;
  margin-top: 5vh;
  height: 100vh;
  width: 100%;
`;

const BodyOverlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgb(17,17,17, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: Arial, Helvetica, sans-serif;
`;

const Title = styled.div`
  color: white;
  font-size: 50px;
`;

const SubTitle = styled.div`
  color: white;
  font-size: 30px;
  padding: 5vh;
`;

const StartButton = styled.button`
  outline: none;
  border: none;
  border-radius: 10px;
  font-size: 20px;
  width: 200px;
  height: 70px;
  background-color: red;
  color: white;
  cursor: pointer;
  margin: 0 20px;
`;

const Home = () => {
  const [showGenres, setShowGenres] = useState(null);
    return (
      <Container>
        <Navigation showGenresFromHome = {showGenres}/>
        <Body>
          <BodyOverlay>
            <Title>Not Sure What to Watch Next?</Title>
            <SubTitle>Choose genres, get recomendation and and watch trailors.</SubTitle>
            <StartButton onClick={()=> setShowGenres(true)}>{`Get Started >>`}</StartButton>
          </BodyOverlay>
        </Body>
      </Container>
    );
}

export default Home
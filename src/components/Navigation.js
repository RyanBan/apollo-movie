import React, { useState, useEffect  } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Genres from "./Genres";

const Header = styled.header`
  position: fixed;
  top: 0;
  display: flex;
  width: 100%;
  justify-content: center;
  background-color:	rgb(17,17,17, 0.9);
  height: 5vh;
  color: white;
  z-index: 1;
  text-align: center;
`;

const NavButton = styled.button`
  outline: none;
  border: none;
  background-color: transparent;
  color: white;
  cursor: pointer;
  margin: 0 20px;
  height: 100%;
`;

const Navigation = (props) => {
    const [showGenres, setShowGenres] = useState(null);
    useEffect(() => {
      if(props.showGenresFromHome) setShowGenres(true)
    }, [props.showGenresFromHome]);
      return (
          <Header>
            <Link to={`/`}><NavButton>HOME</NavButton></Link>
            <NavButton onClick={()=> setShowGenres(true)}>GENRES</NavButton>
            <NavButton>ABOUT</NavButton>
            <Genres show = {showGenres} setShow = {setShowGenres}/>
          </Header>
      );
  }
  
  export default Navigation
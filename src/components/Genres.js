import React, { useRef } from "react";
import styled, { keyframes } from "styled-components";
import Genre from "./Genre";

import left_c from "../assets/left_c.jpg";
import right_c from "../assets/right_c.jpg";

const LeftCurtain = styled.div`
  position: absolute;
  top: 0;
  left: -50vw;
  width: 50vw;
  height: 100vh;
  background-size: cover;
  background-image: url(${left_c});
  background-repeat: no-repeat;
  transition: 0.7s ease;
`;

const RightCurtain = styled.div`
  position: absolute;
  top: 0;
  right: -50vw;
  width: 50vw;
  height: 100vh;
  background-size: cover;
  background-image: url(${right_c});
  background-repeat: no-repeat;
  transition: 0.7s ease;
`;

const fadeInAnimation = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;

const GenreContainer = styled.div`
  visibility: hidden;
  position: absolute;
  height: 60vh;
  min-width: 660px;
  max-width: 1000px;
  margin: 20vh 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  /* transition: 2s ease; */
  animation: ${fadeInAnimation} 6s;
  /* height: 50%; */
`;

const genreList = [
  "COMEDY",
  "SCI-FI",
  "HORROR",
  "ROMANCE",
  "ACTION",
  "THRILLER",
  "DRAMA",
  "MYSTERY",
  "CRIME",
  "ANIMATION",
  "ADVENTURE",
  "FANTASY",
];

const Genres = (props) => {
  const leftEL = useRef(null);
  const rightEl = useRef(null);
  const genreEL = useRef(null);

  if (props.show === true) {
    leftEL.current.style.left = "0px";
    rightEl.current.style.right = "0px";
    genreEL.current.style.visibility = "visible";
  }

  if (props.show === false) {
    leftEL.current.style.left = "-50vw";
    rightEl.current.style.right = "-50vw";
    genreEL.current.style.visibility = "hidden";
  }

  return (
    <>
      <LeftCurtain ref={leftEL} />
      <RightCurtain ref={rightEl} />
      <GenreContainer ref={genreEL}>
        {genreList.map((g) => (
          <div key={g}  onClick={()=>props.setShow(false)}>
            <Genre genreName={g} />
          </div>
        ))}
      </GenreContainer>
    </>
  );
};

export default Genres;

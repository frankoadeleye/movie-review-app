import React from "react";
import StyledMovie from "./StyledMovie";
import StyledPoster from "./StyledPoster";
import StyledMovieTitle from "./StyledMovieTitle";
import StyledMovieLengthYear from "./StyledMovieLengthYear";

const Movie = ({ poster, name, duration, year }: any) => {
  return (
    <StyledMovie>
      <StyledPoster src={poster} alt={`Movie: ${name}`} />
      <StyledMovieTitle>{name}</StyledMovieTitle>
      <StyledMovieLengthYear>{`${duration} ${year}`}</StyledMovieLengthYear>
    </StyledMovie>
  );
};
export default Movie;

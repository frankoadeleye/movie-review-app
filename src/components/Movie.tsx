import React from "react";
import StyledMovie from "./StyledMovie";
import StyledPoster from "./StyledPoster";
import StyledMovieTitle from "./StyledMovieTitle";
import StyledMovieLengthYear from "./StyledMovieLengthYear";

const Movie = ({ details }: any) => {
  const { poster, name, duration, year } = details;
  return (
    <StyledMovie>
      <StyledPoster src={poster} alt={`Movie: ${name}`} />
      <StyledMovieTitle>{name}</StyledMovieTitle>
      <StyledMovieLengthYear>{`${duration} ${year}`}</StyledMovieLengthYear>
    </StyledMovie>
  );
};
export default Movie;

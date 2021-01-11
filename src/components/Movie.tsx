import React from "react";
import StyledMovie from "./StyledMovie";
import StyledPoster from "./StyledPoster";
import StyledMovieTitle from "./StyledMovieTitle";
import StyledMovieLengthYear from "./StyledMovieLengthYear";

const Movie = ({ poster, name, duration, year }: any) => {
  const date = (date: any) => {
    var mydate = new Date(date * 1000);
    mydate.toUTCString();
    return mydate;
  };
  return (
    <StyledMovie>
      <StyledPoster src={poster} alt={`Movie: ${name}`} />
      <StyledMovieTitle>{name}</StyledMovieTitle>
      <StyledMovieLengthYear>{`${duration} ${date(
        year
      )}`}</StyledMovieLengthYear>
    </StyledMovie>
  );
};
export default Movie;

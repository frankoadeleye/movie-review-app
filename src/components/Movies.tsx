import React from "react";
import StyledHeader from "./StyledHeader";
import FontAwesomeIcon from "./FontAwesomeIcon";
import StyledHeaderTitle from "./StyledHeaderTitle";
import moviesData from "./../constants/StaticData";
import StyledHorizontalScroll from "./StyledHorizontalScroll";
import Movie from "./Movie";
import StyledFooter from "./StyledFooter";
import StyledLargeBtn from "./StyledLargeBtn";

const Movies = () => {
  return (
    <>
      <StyledHeader>
        <FontAwesomeIcon icon="bars" text="help" />
        <StyledHeaderTitle>The Movie Recommender</StyledHeaderTitle>
        <FontAwesomeIcon icon="search" />
      </StyledHeader>
      {/* the list of movies */}
      <StyledHorizontalScroll>
        {moviesData.map((movie) => (
          <Movie key={movie.id} details={movie} />
        ))}
      </StyledHorizontalScroll>
      <StyledFooter>
        <StyledLargeBtn>Get Recommended Movies</StyledLargeBtn>
      </StyledFooter>
    </>
  );
};
export default Movies;

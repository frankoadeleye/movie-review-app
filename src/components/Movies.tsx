import React from "react";
import StyledHeader from "./StyledHeader";
import FontAwesomeIcon from "./FontAwesomeIcon";
import StyledHeaderTitle from "./StyledHeaderTitle";

const Movies = () => {
  return (
    <StyledHeader>
      <FontAwesomeIcon icon="bars" text="help" />
      <StyledHeaderTitle>The Movie Recommender</StyledHeaderTitle>
      <FontAwesomeIcon icon="search" />
    </StyledHeader>
  );
};
export default Movies;

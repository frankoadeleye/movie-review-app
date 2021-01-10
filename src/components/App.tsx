import React from "react";
import { Route } from "react-router-dom";
import StyledMovieContainer from "./StyledMovieContainer";
import MovieDetails from "./MovieDetails";
import MoviesContainer from "./../containers/moviesContainer";

const App = () => {
  return (
    <StyledMovieContainer>
      <Route exact path="/" component={MoviesContainer} />
      <Route exact path="/movies/:id" component={MovieDetails} />
    </StyledMovieContainer>
  );
};
export default App;

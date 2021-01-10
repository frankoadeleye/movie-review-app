import React from "react";
import Movies from "../components/Movies";
import _ from "lodash";
import { connect } from "react-redux";
import { getMovies } from "./../actions/movieActions";

const MoviesContainer = (props: any) => <Movies {...props} />;

const mapStateToProps = (state: any) => ({
  movies: _.values(state.movies),
});

export default connect(mapStateToProps, { getMovies })(MoviesContainer);

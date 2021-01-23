import React from "react";
import Movies from "../components/Movies";
import _ from "lodash";
import { connect } from "react-redux";
import { getMovies } from "./../actions/movieActions";
import { GET_MOVIES } from "./../constants/labels";

const MoviesContainer = (props: any) => <Movies {...props} />;

const mapStateToProps = (state: any) => ({
  movies: _.shuffle(_.values(state.movies)),
  loading: state.isLoading[GET_MOVIES],
});

export default connect(mapStateToProps, { getMovies })(MoviesContainer);

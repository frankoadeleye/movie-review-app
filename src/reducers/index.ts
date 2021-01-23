import { combineReducers } from "redux";
import movies from "./movies";
import selectedMovie from "./selectedMovie";
import isLoading from "./isLoading";

export default combineReducers({
  movies,
  selectedMovie,
  isLoading,
});

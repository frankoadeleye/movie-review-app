import { createAction } from "redux-actions";
import { apiPayloadCreator } from "../utils/appUtils";
import { API, SET_MOVIES } from "../constants/actionTypes";
import { normalize, schema } from "normalizr";

const getMoviesAC = createAction(API, apiPayloadCreator);
/*

The second argument passed into the createAction
call is always function used to calculate the payload of the action created.
In apiPayloadCreator we create the payload object needed by the api
middleware. 

In apiPayloadCreator we create the payload object needed by the api
middleware.
If any of url, method, onSuccess, onFailure, data, or label isn’t passed, we
assign defaults by using the ES6 default argument syntax.
Essentially, the return value of the apiPayloadCreator is just an object of those
values. Check apiPayloadCreator.

*/

export const getMovies = () =>
  getMoviesAC({
    url: "/movies",
    onSuccess: setMovies,
    onFailure: setFailedMovies,
  });
/*
  Finally, the getMovies action creator is then created. This invokes getMoviesAC
  with the required arguments for the api payload. This includes the url endpoint
  and the onSuccess callback.
  */

function setMovies(movies) {
  const movieSchema = new schema.Entity("movies");
  const movieListSchema = new schema.Array(movieSchema);
  const normalizedData = normalize(movies, movieListSchema);
  return {
    type: SET_MOVIES,
    payload: normalizedData.entities.movies,
  };
}

function setFailedMovies(error) {
  console.log(error);
  return { type: "" };
}

/*
The purpose of this apiPayloadCreator function is simple. It is payload creator
function to be passed into the createAction call.
*/

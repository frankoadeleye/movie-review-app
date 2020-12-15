import { handleActions } from "redux-actions";
import { SELECT_MOVIE } from "../constants/actionTypes";

export default handleActions(
  {
    [SELECT_MOVIE]: (state, action) => state,
  },
  1
);
//the handleActions function is like this: handleActions({},{}) where the first object is your logic, and the second object is your initial state...
